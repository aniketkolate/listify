import { Component, Input } from '@angular/core';
import { UsernameTaskCount } from '../../models/common.model';
import { NgIf, CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'lst-welcome-search',
  imports: [NgIf, CommonModule, FormsModule,],
  standalone: true,
  templateUrl: './welcome-search.component.html',
  styleUrl: './welcome-search.component.scss'
})
export class WelcomeSearchComponent {
  searchText: string = '';
  @Input() usernameAndTaskCount: UsernameTaskCount = {
    username: '',
    taskCount: 0
  }

  clearSearchBox() {
    this.searchText = '';
  }
}
