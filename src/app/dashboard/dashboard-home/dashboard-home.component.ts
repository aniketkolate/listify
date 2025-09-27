import { Component, Input, OnInit, } from '@angular/core';
import { WelcomeSearchComponent } from "../components/welcome-search/welcome-search.component";
import { TaskCardComponent } from '../components/task-card/task-card.component';
import { Task } from '../models/common.model';
import { TaskService } from '../services/task.service';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { AddTaskComponent } from "../components/add-task/add-task.component";
import { NoTaskComponent } from "../components/no-task/no-task.component";

@Component({
  selector: 'lst-dashboard-home',
  imports: [WelcomeSearchComponent, TaskCardComponent, NgFor, AddTaskComponent, NgIf, NgClass, CommonModule, NoTaskComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent implements OnInit {
  @Input() disabled = false;
  [x: string]: any;
  myTaskList: Task[] = [];
  filteredList: Task[] = [];
  completedTaskList: Task[] = [];
  taskTitle: string = ''
  taskDesc: string = ''
  welcomeSearchMessage: string = ''
  searchQuery: string = ''
  showAddTask: boolean = false;
  @Input() isNoTaskCreateBtnClicked: boolean = false

  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.getAllTask();

  }
  getAllTask() {
    this.myTaskList = this.taskService.getAllTask();
    this.filteredList = this.myTaskList.filter((task: Task) => task.status == "TODO");;
    this.completedTaskList = this.myTaskList.filter((task: Task) => task.status == "COMPLETED");
    this.welcomeSearchMessage = `You've got ${this.myTaskList.length} tasks to do.`
  }

  addTast(task: Task) {
    task.id = this.myTaskList.length + 1;
    this.taskService.addTask(task);
    this.getAllTask();
    this.showAddTask = false;
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId)
    this.getAllTask();
  }
  editTask(updatedTask: Task) {
    this.taskService.editTask(updatedTask)
    this.getAllTask();
  }

  onSearch(query: string) {
    if (query) {
      this.filteredList = this.myTaskList.filter(task =>
        task.title.includes(query));
    } else {
      this.filteredList = this.myTaskList.filter(task => task.status == 'TODO');
    }

    const q = (query).toLocaleLowerCase()

    this.filteredList = this.myTaskList.filter(task =>
      task.status === 'TODO' && task.title.toLowerCase().includes(q)
    );

    this.completedTaskList = this.myTaskList.filter(task =>
      task.status === 'COMPLETED' && task.title.toLowerCase().includes(q)
    );

    this.filteredList.length == 0 && this.completedTaskList.length == 0;
    this.searchQuery = query
  }

  markTaskCompleted(taskId: number) {
    this.taskService.markTaskCompleted(taskId);
    this.getAllTask();
  }

  CompletedTaskDelete() {
    this.taskService.CompletedTaskDelete();
    this.getAllTask();
  }

  onSearchHide() {
    if (this.myTaskList.length > 1) {
      this.myTaskList.filter(task => task.status == 'TODO');
    } else {
      this.myTaskList = [];
    }
  }

  prepareWelcomeSearchMessage(): string {
    const totalCount = this.filteredList.length + this.completedTaskList.length;
    if (!this.searchQuery) {
      return `You've got ${this.myTaskList.length} tasks to do.`;
    } else if (totalCount == 0) {
      return `No results found for "${this.searchQuery}"`;
    } else {
      return `${totalCount} result found`;
    }
  }

  onCreateTask() {
    this.showAddTask = true;
  }

  onNoTaskCreateBtnClick(isClicked: boolean) {
    this.isNoTaskCreateBtnClicked = true;
  }
}
