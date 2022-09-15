import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  TopNavigationService
} from '../../../services/components/features/navigation/top-navigation/top-navigation.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('isOpenState', [
      state('true', style({
        height: '100%'
      })),
      state('false', style({
        height: '0'
      })),
      transition('true <=> false', animate('0.2s ease-in-out')),
    ]),
  ]
})
export class TopNavigationComponent implements OnInit, OnDestroy {
  @Input() isOpen: 'true' | 'false';
  openSubscription: Subscription;

  constructor(private topNavigationService: TopNavigationService) {
  }

  ngOnInit(): void {
    this.openSubscription = this.topNavigationService.isOpen.subscribe(isOpen => {
      localStorage.setItem('topNavOpen', isOpen.toString());
      this.isOpen = isOpen ? 'true' : 'false';
    });
  }

  ngOnDestroy() {
    this.openSubscription.unsubscribe();
  }

}
