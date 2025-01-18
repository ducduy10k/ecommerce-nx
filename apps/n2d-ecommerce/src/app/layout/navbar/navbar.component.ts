import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenticationService } from '../../auth/authentication.service';

@Component({
  selector: 'de-navbar',
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  authenticationService = inject(AuthenticationService);
  imageUrl: string | null = null;
  login(): void {
    this.closeDropDownMenu();
    this.authenticationService.login({ email: '', password: '' });
  }

  logout(): void {
    this.closeDropDownMenu();
    this.authenticationService.logout();
  }

  isConnected(): boolean {
    return true;
  }

  closeDropDownMenu() {
    const bodyElement = document.activeElement as HTMLBodyElement;
    if (bodyElement) {
      bodyElement.blur();
    }
  }

}
