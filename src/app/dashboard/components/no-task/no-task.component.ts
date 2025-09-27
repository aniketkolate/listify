import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lst-no-task',
  imports: [CommonModule],
  templateUrl: './no-task.component.html',
  styleUrl: './no-task.component.scss'
})
export class NoTaskComponent {
  @Input() isTaskCountZero: boolean = false;
  @Output() createTaskClicked = new EventEmitter<void>();
  @Output() onCreateTaskBtnClickEvent = new EventEmitter;

  onCreateTask() {
    this.createTaskClicked.emit()
    this.onCreateTaskBtnClickEvent.emit(true)
  }

}
