import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { faBook, faCalendars, faClock, faFilePen, faObjectsColumn, faSchool } from '@fortawesome/pro-duotone-svg-icons';
import {
   Event,
   NavigationCancel,
   NavigationEnd,
   NavigationError,
   NavigationStart,
   Router,
   RouterOutlet
} from '@angular/router';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
   sideNavIcons = {
      dashboard: faObjectsColumn,
      calendar: faCalendars,
      schedule: faClock,
      homework: faBook,
      notes: faFilePen,
      courses: faSchool,
   };
   loading: boolean;
   @ViewChild(RouterOutlet) routerOutlet: RouterOutlet;

   constructor(private router: Router) {
   }

   ngOnInit() {
      this.router.events.subscribe((event: Event) => {
         switch (true) {
            case event instanceof NavigationStart:
            {
               this.loading = true;
               break;
            }
            case event instanceof NavigationEnd:
            case event instanceof NavigationCancel:
            case event instanceof NavigationError:
            {
               this.loading = false;
               break;
            }
            default:
            {
               break;
            }
         }
      });
   }

   ngAfterViewInit() {
   }
}

