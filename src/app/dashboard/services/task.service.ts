import { Injectable } from '@angular/core';
import { Task } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: Task[] = []

  constructor() {
    const storedTasks = localStorage.getItem('taskList');
    if (storedTasks) {
      this.taskList = JSON.parse(storedTasks);
    }
  }

  getAllTask(): Task[] {
    return this.taskList;
  }

  addTask(task: Task): void {
    this.taskList.push(task);
    this.updateTaskListInLocalStorage()
  }

  deleteTask(taskId: number): void {
    this.taskList = this.taskList.filter(task => task.id !== taskId);
    this.updateTaskListInLocalStorage();
  }

  updateTaskListInLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

}
