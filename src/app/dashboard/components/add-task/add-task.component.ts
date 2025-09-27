import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Task } from '../../models/common.model';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lst-add-task',
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit {

  @Output() TaskEditSubmit = new EventEmitter
  @Output() addTastEvent = new EventEmitter
  @Output() editTaskEvent = new EventEmitter
  @Input() editTask!: Task;
  @Input() isNoTaskClicked = true;
  @Input() isNoTaskAddClicked: boolean = false;
  isAddTaskClicked: boolean = false
  isautofouce: boolean = false
  todoForm = new FormGroup({
    title: new FormControl('', Validators.required,),
    description: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    if (this.editTask) {
      this.todoForm.patchValue({
        title: this.editTask.title,
        description: this.editTask.description
      })
    }
  }

  onTaskSubmit() {
    if (this.todoForm.valid) {
      const task: Task = {
        id: 0,
        title: this.todoForm.value.title ?? '',
        description: this.todoForm.value.description ?? '',
        status: "TODO"
      }
      this.addTastEvent.emit(task);
      this.todoForm.reset();
      this.isAddTaskClicked = false;
    }
  }

  onTaskEditSubmit() {
    if (this.todoForm.valid) {
      this.editTask.title = this.todoForm.value.title!
      this.editTask.description = this.todoForm.value.description!
      this.editTaskEvent.emit(this.editTask);
      this.todoForm.reset();
    }
  }

  toggleAddTaskClickedFlag() {
    this.isAddTaskClicked = !this.isAddTaskClicked;
    this.isNoTaskAddClicked = false;
  }
}