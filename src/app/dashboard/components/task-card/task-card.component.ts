import { Component, Input } from '@angular/core';
import { Task } from '../../models/common.model';

@Component({
  selector: 'lst-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task = {
    id: 0,
    title: '',
    description: '',
  }
}
