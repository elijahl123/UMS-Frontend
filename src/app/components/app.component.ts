import { Component, OnInit } from '@angular/core';
import { faBook, faCalendars, faClock, faFilePen, faObjectsColumn, faSchool } from '@fortawesome/pro-duotone-svg-icons';
import {
  ActivatedRoute,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { ModalDirective } from './directives/ui/modal.directive';
import { BehaviorSubject } from 'rxjs';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ModalDirective]
})
export class AppComponent implements OnInit {
  sideNavIcons = {
    dashboard: faObjectsColumn,
    calendar: faCalendars,
    schedule: faClock,
    homework: faBook,
    notes: faFilePen,
    courses: faSchool,
  };
  loading: boolean;
  closeIcon: IconDefinition = faTimes;

  constructor(private router: Router, private route: ActivatedRoute) {
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

  isModalActivated() {
    // Check if the modal router outlet is activated
    let isOutLetActivated = false;
    this.route.children.forEach(child => {
      if (child.outlet === 'modal') {
        isOutLetActivated = true;
      } else {
        isOutLetActivated = false;
      }
    });
    return isOutLetActivated;
  }

  closeModal() {
    this.router.navigate([{outlets: {modal: null}}]);
  }
}

