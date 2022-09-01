import { Component, OnInit } from '@angular/core';
import { faBook, faCalendars, faClock, faFilePen, faObjectsColumn, faSchool } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

  ngOnInit() {
  }
}

