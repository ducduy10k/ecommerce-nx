import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'de-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  authenticationService = inject(AuthenticationService);

  logIn() {
    this.authenticationService.login({ email: 'duynd@gmail.com', password: '123456132' });
  }
}
