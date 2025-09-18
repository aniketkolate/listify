import { Component, Input, OnInit, } from '@angular/core';
import { WelcomeSearchComponent } from "../components/welcome-search/welcome-search.component";
import { TaskCardComponent } from '../components/task-card/task-card.component';
import { Task } from '../models/common.model';
import { TaskService } from '../services/task.service';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { AddTaskComponent } from "../components/add-task/add-task.component";

@Component({
  selector: 'lst-dashboard-home',
  imports: [WelcomeSearchComponent, TaskCardComponent, NgFor, AddTaskComponent, NgIf, NgClass, CommonModule],
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

  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.getAllTask();
  }

  getAllTask() {
    this.myTaskList = this.taskService.getAllTask();
    this.filteredList = this.myTaskList.filter((task: Task) => task.status == "TODO");;
    this.completedTaskList = this.myTaskList.filter((task: Task) => task.status == "COMPLETED");
  }

  addTast(task: Task) {
    task.id = this.myTaskList.length + 1;
    this.taskService.addTask(task);
    this.getAllTask();
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
      this.filteredList = this.myTaskList;
    }
  }

  markTaskCompleted(taskId: number) {
    this.taskService.markTaskCompleted(taskId);
    this.getAllTask();
  }

  CompletedTaskDelete() {
    this.taskService.CompletedTaskDelete();
    this.getAllTask();
  }

}
