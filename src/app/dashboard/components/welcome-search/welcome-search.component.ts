import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, UsernameTaskCount } from '../../models/common.model';
import { NgIf, CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'lst-welcome-search',
  imports: [NgIf, CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './welcome-search.component.html',
  styleUrl: './welcome-search.component.scss'
})
export class WelcomeSearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchControl = new FormControl('');
  searchText: string = '';
  myTaskList: Task | undefined;
  @Input() taskList: Task[] = [];
  @Input() message: string = ''
  @Input() usernameAndTaskCount: UsernameTaskCount = {
    username: '',
    taskCount: 0
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000)
      ).subscribe((query) => {
        this.onSearchChange(query);
      })
  }

  clearSearchBox() {
    this.searchControl.setValue('');
    this.search.emit('');
  }

  onSearchChange(query: any) {
    this.search.emit(query);
  }
}
