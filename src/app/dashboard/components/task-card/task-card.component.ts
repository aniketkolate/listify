import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { Task, } from '../../models/common.model';


@Component({
  selector: 'lst-task-card',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  [x: string]: any;
  @Output() delete = new EventEmitter();
  @Input() disabled = true;
  @Input() task: Task = {
    id: 0,
    title: '',
    description: '',
    status: 'TODO'
  };

  deleteTask(taskId: number) {
    this.delete.emit(taskId);
  }

}

