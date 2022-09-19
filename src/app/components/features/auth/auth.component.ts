import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  SideNavigationService
} from '../../../services/components/features/navigation/side-navigation/side-navigation.service';
import {
  TopNavigationService
} from '../../../services/components/features/navigation/top-navigation/top-navigation.service';
import { AuthService } from '../../../services/components/features/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(private sideNavigationService: SideNavigationService, private topNavigationService: TopNavigationService, private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    if (this.authService.isAuthenticated()) {
      await this.router.navigate(['/']);
    } else {
      await this.sideNavigationService.set(false).then();
      await this.topNavigationService.set(true).then();
    }
  }

  async ngOnDestroy() {
    await this.topNavigationService.set(false).then();
    await this.sideNavigationService.set(true).then();
  }

}
