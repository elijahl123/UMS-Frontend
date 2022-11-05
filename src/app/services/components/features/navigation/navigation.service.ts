import { BehaviorSubject } from 'rxjs';

export class NavigationService {
  isOpen: BehaviorSubject<boolean>;

  constructor() {
    this.isOpen = new BehaviorSubject<boolean>(this.getDefault());
  }

  getDefault(): boolean {
    return false;
  }

  getDuration(): number | void {
  }

  toggle(): Promise<BehaviorSubject<boolean>> {
    this.isOpen.next(!this.isOpen.value);
    return new Promise<BehaviorSubject<boolean>>(resolve => {
      setTimeout(resolve, (this.getDuration() ?? 0) * 1000);
    });
  }

  set(value: boolean): Promise<BehaviorSubject<boolean>> {
    this.isOpen.next(value);
    return new Promise<BehaviorSubject<boolean>>(resolve => {
      setTimeout(resolve, (this.getDuration() ?? 0) * 1000);
    });
  }
}
