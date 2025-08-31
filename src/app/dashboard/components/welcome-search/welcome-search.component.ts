import { Component, Input } from '@angular/core';
import { UsernameTaskCount } from '../../models/common.model';

@Component({
  selector: 'lst-welcome-search',
  imports: [],
  templateUrl: './welcome-search.component.html',
  styleUrl: './welcome-search.component.scss'
})
export class WelcomeSearchComponent {
  @Input() usernameAndTaskCount: UsernameTaskCount = {
    username: '',
    taskCount: 0
  }
}
