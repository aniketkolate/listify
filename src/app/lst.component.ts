import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./dashboard/components/header/header.component";
import { WelcomeSearchComponent } from "./dashboard/components/welcome-search/welcome-search.component";
import { Task, UsernameTaskCount } from './dashboard/models/common.model';
import { TaskCardComponent } from './dashboard/components/task-card/task-card.component';

@Component({
  selector: 'lst-root',
  imports: [RouterOutlet, HeaderComponent, WelcomeSearchComponent, TaskCardComponent],
  templateUrl: './lst.component.html',
  styleUrl: './lst.component.scss'
})
export class LstComponent {
  title = 'listify';
  data: UsernameTaskCount = {
    username: "Vaibhav",
    taskCount: 10000
  }
  task: Task = {
    id: 1,
    title: 'Design sign up flow',
    description: "By the time a prospect arrives at your signup page, in most cases, they've already By the time a prospect arrives at your signup page, in most cases."
  }


}
