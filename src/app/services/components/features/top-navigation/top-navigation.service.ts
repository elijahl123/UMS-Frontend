import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopNavigationService {
  isOpen: BehaviorSubject<boolean>;

  constructor() {
    this.isOpen = new BehaviorSubject<boolean>(!!localStorage.getItem('topNavOpen'));
  }

  toggle() {
    this.isOpen.next(!this.isOpen.value);
  }
}
