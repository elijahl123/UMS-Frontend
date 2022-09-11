import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationService {
  isOpen: BehaviorSubject<boolean>;

  constructor() {
    this.isOpen = new BehaviorSubject<boolean>(!!localStorage.getItem('sideNavOpen'));
  }

  toggle() {
    this.isOpen.next(!this.isOpen.value);
  }
}
