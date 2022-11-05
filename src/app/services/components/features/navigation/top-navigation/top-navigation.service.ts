import { Injectable } from '@angular/core';
import { NavigationService } from '../navigation.service';

export const TOP_NAVIGATION_DURATION = 0.5;

@Injectable({
  providedIn: 'root'
})
export class TopNavigationService extends NavigationService {
  getDuration(): number {
    return TOP_NAVIGATION_DURATION;
  }
}

