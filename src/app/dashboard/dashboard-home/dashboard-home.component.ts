import { Component } from '@angular/core';
import { WelcomeSearchComponent } from "../components/welcome-search/welcome-search.component";
import { TaskCardComponent } from '../components/task-card/task-card.component';
import { Task, UsernameTaskCount } from '../models/common.model';

@Component({
  selector: 'lst-dashboard-home',
  imports: [WelcomeSearchComponent, TaskCardComponent,],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent {
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
