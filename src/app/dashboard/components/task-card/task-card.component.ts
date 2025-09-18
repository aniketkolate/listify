import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { Task, } from '../../models/common.model';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'lst-task-card',
  standalone: true,
  imports: [CommonModule, NgClass, AddTaskComponent],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() editTaskEvent = new EventEmitter();
  @Output() markTaskCompleteEvent = new EventEmitter();
  @Input() showDescription: boolean = true;
  @Input() disabled = false;
  @Input() task: Task = {
    id: 0,
    title: '',
    description: '',
    status: 'TODO'
  };
  isEditable: boolean = false;
  taskService: any;

  deleteTask(taskId: number) {
    this.delete.emit(taskId);
  }
  editTask(updatedTask: Task) {
    this.isEditable = false;
    this.editTaskEvent.emit(updatedTask);
  }

  editTaskCard(updatedTask: Task) {
    this.taskService.editTask(updatedTask);
    this.getAllTask();
  }

  getAllTask() {
    throw new Error('Method not implemented.');
  }

  isEditTaskEnable() {
    this.isEditable = true;
  }

  markTaskCompleted(taskId: number) {
    this.markTaskCompleteEvent.emit(taskId);
  }
}

