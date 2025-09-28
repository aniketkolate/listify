import { AfterViewInit, Component } from '@angular/core';
import { GoogleAuthService } from '../../../core/services/google-auth/google-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user/user.service';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'lst-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements AfterViewInit {

  constructor(
    private googleAuthService: GoogleAuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    console.log('Environment:', environment.production ? 'Production' : 'Development');
    console.log('Google Client ID:', environment.googleClientId);
    this.googleAuthService.initializeGoogleLogin(
      environment.googleClientId,
      (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/dashboard']);
        this.userService.loadUserFromStorage();
      }
    );
  }
}
