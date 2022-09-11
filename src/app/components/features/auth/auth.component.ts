import { Component, OnDestroy, OnInit } from '@angular/core';
import { SideNavigationService } from '../../../services/components/features/side-navigation/side-navigation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(private sideNavigationService: SideNavigationService) { }

  ngOnInit(): void {
    this.sideNavigationService.toggle();
  }

  ngOnDestroy(): void {
    this.sideNavigationService.toggle();
  }

}
