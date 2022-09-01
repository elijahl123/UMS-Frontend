import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavigationComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
