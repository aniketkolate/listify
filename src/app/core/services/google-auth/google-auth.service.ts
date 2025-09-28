import { Injectable, NgZone } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  constructor(private ngZone: NgZone) {}

  initializeGoogleLogin(clientId: string, callback: (user: any) => void) {
    console.log('Initializing Google Login with Client ID:', clientId);
    const button = document.getElementById('google-signin-button');
    if (!button) return;

    google.accounts.id.initialize({
      client_id: clientId,
      callback: (response: any) => {
        this.ngZone.run(() => {
          const user = jwtDecode(response.credential);
          callback(user);
        });
      }
    });
    google.accounts.id.renderButton(button, { theme: 'outline', size: 'large' });
  }
}
