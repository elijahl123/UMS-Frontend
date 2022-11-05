import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  TOP_NAVIGATION_DURATION,
  TopNavigationService
} from '../../../services/components/features/navigation/top-navigation/top-navigation.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('isOpenState', [
      state('false', style({
        height: '0px'
      })),
      transition('true <=> false', [
        animate(`${TOP_NAVIGATION_DURATION}s ease-in-out`),
        style({
          height: '{{height}}'
        })
      ], { params: { height: '0px' } }),
    ]),
  ]
})
export class TopNavigationComponent implements OnInit, OnDestroy {
  @Input() isOpen: 'true' | 'false';
  openSubscription: Subscription;
  @ViewChild('nav', { static: true }) nav: ElementRef;
  height: string = '0px';
  @HostBinding('@isOpenState') state: any;

  constructor(private topNavigationService: TopNavigationService) {
  }

  ngOnInit(): void {
    this.openSubscription = this.topNavigationService.isOpen.subscribe(isOpen => {
      localStorage.setItem('topNavOpen', isOpen.toString());
      this.isOpen = isOpen ? 'true' : 'false';
    });
    this.height = this.nav.nativeElement.offsetHeight + 'px';
    this.state = {
      value: this.height,
      params: {
        height: this.height
      }
    }
  }

  ngOnDestroy() {
    this.openSubscription.unsubscribe();
  }

}
