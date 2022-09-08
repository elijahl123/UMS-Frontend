import { Component, OnInit } from '@angular/core';
import { faBook, faCalendars, faClock, faFilePen, faObjectsColumn, faSchool } from '@fortawesome/pro-duotone-svg-icons';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

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

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.apollo.mutate<{ login: { token: string } }>({
      mutation: gql`
        mutation {
          login(email: "elijah.kane.1972@gmail.com", password: "##33JUde") {
            token
          }
        }
      `
    }).subscribe(({ data }) => {
      if (data) {
        localStorage.setItem('token', data.login.token);
        console.log(data);
      }
    });
  }
}

