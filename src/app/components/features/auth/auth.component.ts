import { Component, OnDestroy, OnInit } from '@angular/core';
import { SideNavigationService } from '../../../services/components/features/side-navigation/side-navigation.service';
import { TopNavigationService } from '../../../services/components/features/top-navigation/top-navigation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(private sideNavigationService: SideNavigationService, private topNavigationService: TopNavigationService) { }

  ngOnInit(): void {
    this.sideNavigationService.toggle();
    this.topNavigationService.toggle();
  }

  ngOnDestroy(): void {
    this.sideNavigationService.toggle();
    this.topNavigationService.toggle();
  }

}
