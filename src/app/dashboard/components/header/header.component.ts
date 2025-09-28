import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'lst-header',
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  user: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.userService.clearUser();
    window.location.href = '/login';
  }
}
