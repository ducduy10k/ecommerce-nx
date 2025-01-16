import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font_awsome_icons';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthenticationService } from './auth/authentication.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  imports: [RouterModule, FontAwesomeModule, NavbarComponent, FooterComponent],
  selector: 'de-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'n2d-ecommerce';

  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);

  private authenticationService = inject(AuthenticationService);

  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.initFontAwsome();
    if (isPlatformBrowser(this.platformId)) {
      if (this.authenticationService.getTokenLocalStorage()) {
        this.authenticationService.getUserInfo().subscribe();
      }
    }
  }

  private initFontAwsome() {
    this.faConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
