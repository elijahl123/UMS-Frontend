import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  SideNavigationService
} from '../../../services/components/features/navigation/side-navigation/side-navigation.service';
import {
  TopNavigationService
} from '../../../services/components/features/navigation/top-navigation/top-navigation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(private sideNavigationService: SideNavigationService, private topNavigationService: TopNavigationService) { }

  ngOnInit(): void {
    this.sideNavigationService.set(false).then(() => {
      this.topNavigationService.set(true).then();
    });
  }

  ngOnDestroy(): void {
    this.topNavigationService.set(false).then(() => {
      this.sideNavigationService.set(true).then();
    });
  }

}
