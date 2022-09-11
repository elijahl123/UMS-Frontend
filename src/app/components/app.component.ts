import { Component, OnInit } from '@angular/core';
import { faBook, faCalendars, faClock, faFilePen, faObjectsColumn, faSchool } from '@fortawesome/pro-duotone-svg-icons';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.apollo.query({
      query: gql`
        query {
          user {
            uid
            firstName
            lastName
          }
        }
      `
    }).subscribe(data => {
      console.log(data);
    });
  }
}

