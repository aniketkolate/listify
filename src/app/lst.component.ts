import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./dashboard/components/header/header.component";
import { WelcomeSearchComponent } from "./dashboard/components/welcome-search/welcome-search.component";
import { UsernameTaskCount } from './dashboard/models/common.model';

@Component({
  selector: 'lst-root',
  imports: [RouterOutlet, HeaderComponent, WelcomeSearchComponent],
  templateUrl: './lst.component.html',
  styleUrl: './lst.component.scss'
})
export class LstComponent {
  title = 'listify';
  data:UsernameTaskCount = {
    username:"Vaibhav",
    taskCount:10000
  }
}
