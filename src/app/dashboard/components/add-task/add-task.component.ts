import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/common.model';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lst-add-task',
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

  @Output() getTask = new EventEmitter
  isAddTaskClicked: boolean = false

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  onTaskSubmit() {
    if (this.todoForm.valid) {
      const task: Task = {
        id: 0,
        title: this.todoForm.value.title ?? '',
        description: this.todoForm.value.description ?? '',
        status: "TODO"
      }
      this.getTask.emit(task);
      this.todoForm.reset();
    }
  }

  toggleAddTaskClickedFlag() {
    this.isAddTaskClicked = !this.isAddTaskClicked;
  }

}
