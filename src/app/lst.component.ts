import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from './core/services/user/user.service';

@Component({
  selector: 'lst-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './lst.component.html',
  styleUrl: './lst.component.scss'
})
export class LstComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.loadUserFromStorage();
  }

}
