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
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import {
  faCog,
  faFile,
  faInfo,
  faLock,
  faMessageExclamation,
  faRightFromBracket,
  faUpRightFromSquare,
  faUser
} from '@fortawesome/pro-solid-svg-icons';
import { faSchool } from '@fortawesome/pro-duotone-svg-icons';
import {
  SideNavigationService
} from '../../../services/components/features/navigation/side-navigation/side-navigation.service';
import { Subscription } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  TOP_NAVIGATION_DURATION
} from '../../../services/components/features/navigation/top-navigation/top-navigation.service';
import { AuthService } from '../../../services/components/features/auth/auth.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('isOpenState', [
      state('false', style({
        width: '0px'
      })),
      transition('true <=> false', [
        animate(`${TOP_NAVIGATION_DURATION}s ease-in-out`),
        style({
          width: '{{width}}'
        })
      ], { params: { width: '0px' } }),
    ]),
  ]
})
export class SideNavigationComponent implements OnInit, OnDestroy {
  @Input() isOpen: 'true' | 'false';
  openSubscription: Subscription;
  @ViewChild('nav', { static: true }) nav: ElementRef;
  width: string = '0px';
  @HostBinding('@isOpenState') state: any;

  schoolIcon: IconDefinition = faSchool;
  nextClassIcons = {
    faLink: faUpRightFromSquare,
    faLock: faLock,
    faFile: faFile,
    faInfo: faInfo
  };
  @Input() nextClass: string;
  @Input() nextClassHead: string = 'PHYS 170';
  @Input() nextClassSub: string = 'PHYSCI 110';
  userIcon: IconDefinition = faUser;
  logOutIcon: IconDefinition = faRightFromBracket;
  cogIcon: IconDefinition = faCog;
  messageExclamationIcon: IconDefinition = faMessageExclamation;

  constructor(private sideNavigationService: SideNavigationService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.openSubscription = this.sideNavigationService.isOpen.subscribe(isOpen => {
      this.isOpen = isOpen ? 'true' : 'false';
    });
    this.width = this.nav.nativeElement.offsetWidth + 'px';
    this.state = {
      value: this.width,
      params: {
        width: this.width
      }
    }
  }

  ngOnDestroy() {
    this.openSubscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
