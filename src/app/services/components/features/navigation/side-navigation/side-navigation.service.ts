import { Injectable } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationService extends NavigationService {
  getDefault(): boolean {
    return true;
  }
}
