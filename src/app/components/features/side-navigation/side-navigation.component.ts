import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
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

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('isOpenState', [
      state('true', style({
        width: '100%'
      })),
      state('false', style({
        width: '0'
      })),
      transition('true <=> false', animate('0.2s ease-in-out')),
    ]),
  ]
})
export class SideNavigationComponent implements OnInit, OnDestroy {
  @Input() isOpen: 'true' | 'false';
  openSubscription: Subscription;

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

  constructor(private sideNavigationService: SideNavigationService) {
  }

  ngOnInit(): void {
    this.openSubscription = this.sideNavigationService.isOpen.subscribe(isOpen => {
      this.isOpen = isOpen ? 'true' : 'false';
    });
  }

  ngOnDestroy() {
    this.openSubscription.unsubscribe();
  }

}
