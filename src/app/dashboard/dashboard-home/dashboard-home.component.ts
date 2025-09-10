import { Component, OnInit, } from '@angular/core';
import { WelcomeSearchComponent } from "../components/welcome-search/welcome-search.component";
import { TaskCardComponent } from '../components/task-card/task-card.component';
import { Task } from '../models/common.model';
import { TaskService } from '../services/task.service';
import { NgFor } from '@angular/common';
import { AddTaskComponent } from "../components/add-task/add-task.component";

@Component({
  selector: 'lst-dashboard-home',
  imports: [WelcomeSearchComponent, TaskCardComponent, NgFor, AddTaskComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent implements OnInit {
  [x: string]: any;
  constructor(private taskService: TaskService) { }

  taskTitle: string = ''
  taskDesc: string = ''


  ngOnInit(): void {
    this.getAllTask();
  }

  myTaskList: Task[] = []

  getAllTask() {
    this.myTaskList = this.taskService.getAllTask();
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

}
