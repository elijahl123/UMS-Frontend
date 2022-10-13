import { Injectable } from '@angular/core';
import { NavigationService } from '../navigation.service';

export const SIDE_NAVIGATION_DURATION = 0.5;

@Injectable({
  providedIn: 'root'
})
export class SideNavigationService extends NavigationService {
  getDefault(): boolean {
    return true;
  }

  getDuration(): number {
    return SIDE_NAVIGATION_DURATION;
  }
}
