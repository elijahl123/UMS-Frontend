import { BehaviorSubject } from 'rxjs';

export class NavigationService {
  isOpen: BehaviorSubject<boolean>;

  constructor() {
    this.isOpen = new BehaviorSubject<boolean>(this.getDefault());
  }

  getDefault() {
    return false;
  }

  async toggle() {
    await this.isOpen.next(!this.isOpen.value);
    return this.isOpen;
  }

  async set(value: boolean) {
    await this.isOpen.next(value);
    return this.isOpen;
  }
}
