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
    this.taskList.unshift(task);
    this.updateTaskListInLocalStorage()
  }

  deleteTask(taskId: number): void {
    this.taskList = this.taskList.filter(task => task.id !== taskId);
    this.updateTaskListInLocalStorage();
  }

  editTask(updatedTask: Task): void {
    console.log("updatedTask :", updatedTask);
    const index = this.taskList.findIndex(t => t.id === updatedTask.id);
    this.taskList[index] = updatedTask;
    this.updateTaskListInLocalStorage();
  }

  updateTaskListInLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  markTaskCompleted(taskId: number) {
    this.taskList.forEach((task: Task) => {
      if (task.id == taskId) {
        task.status = "COMPLETED";
      }
    })
    this.updateTaskListInLocalStorage();
  }

  CompletedTaskDelete() {
    this.taskList = this.taskList.filter(task => task.status !== 'COMPLETED');
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }
}
