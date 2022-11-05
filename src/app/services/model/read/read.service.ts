import { Injectable } from '@angular/core';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Apollo, gql } from 'apollo-angular';
import { AuthService } from '../../components/features/auth/auth.service';
import { ScheduleInfo } from '../../../components/features/schedule/schedule-info/schedule-info.component';

class CalendarEventResponse {
  calendarEvents: {
    edges: {
      node: {
        date: string,
        title: string,
      }
    }[]
  }
  homeworkAssignments: {
    edges: {
      node: {
        dueDate: string,
        name: string,
        course: {
          name: string,
          color: string,
        }
      }
    }[]
  }
}

class CalendarEventInfoResponse {
  calendarEvents: {
    edges: {
      node: {
        date: string,
        time: string,
        title: string,
        description: string,
      }
    }[]
  }
  homeworkAssignments: {
    edges: {
      node: {
        completed: string,
        dueDate: string,
        dueTime: string,
        name: string,
        description: string,
        link: string,
        course: {
          name: string,
          color: string,
        }
      }
    }[]
  }
}

class GetHomeworkAssignmentsResponse {
  homeworkAssignments: {
    edges: {
      node: {
        uid: string,
        name: string,
        dueDate: string,
        dueTime: string,
        course: {
          uid: string,
          name: string,
          color: string,
        }
      }
    }[]
  }
}

class GetAssignmentsResponse {
  homeworkAssignments: {
    edges: {
      node: {
        completed: boolean,
        course: {
          name: string,
          color: string,
        }
        description: string
        dueDate: string
        dueTime: string
        link: string
        name: string
        uid: string
      }
    }[]
  }
}

class GetCourseTimesResponse {
  courseTimes: {
    edges: {
      node: {
        uid: string,
        course: {
          name: string,
          color: string,
        }
        startTime: string,
        endTime: string,
        weekday: string,
      }
    }[]
  }
}

class GetCoursesResponse {
  courses: {
    edges: {
      node: {
        uid: string;
        name: string;
        color: string;
      }
    }[]
  }
}

class GetNotesResponse {
  notes: {
    edges: {
      node: {
        uid: string;
        title: string;
        content: string;
        uploaded: string;
        modified: string;
        course: {
          uid: string;
        }
      }
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private apollo: Apollo, private authService: AuthService) {
  }

  async performQuery<T>(gqlSts: TypedDocumentNode, variables?: { [key: string]: any }): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.apollo.query<T>({
        query: gqlSts,
        variables: variables
      }).subscribe((result) => {
        resolve(result.data);
      }, (error) => {
        reject(error);
      });
    });
  }

  async getCalendarEvents(): Promise<CalendarEventResponse> {
    return this.performQuery<CalendarEventResponse>(gql`
      query {
        calendarEvents(token: "${this.authService.getToken()}") {
          edges {
            node {
              date
              title
            }
          }
        }
        homeworkAssignments(token: "${this.authService.getToken()}") {
          edges {
            node {
              dueDate
              name
              course {
                name
                color
              }
            }
          }
        }
      }
    `)
  }

  async getCalendarEventInfo(date: string): Promise<CalendarEventInfoResponse> {
    return this.performQuery<CalendarEventInfoResponse>(gql`
      query getCalendarEvents($date: Date!) {
        calendarEvents(date: $date, token: "${this.authService.getToken()}") {
          edges {
            node {
              date
              time
              title
              description
            }
          }
        }
        homeworkAssignments(dueDate: $date, token: "${this.authService.getToken()}") {
          edges {
            node {
              completed
              dueDate
              dueTime
              name
              description
              link
              course {
                name
                color
              }
            }
          }
        }
      }
    `, {
      date: date
    })
  }

  async getSchedule(date: string) {
    return this.performQuery<{
      getSchedule: {
        course: {
          uid: string,
          name: string,
          color: string,
        },
        startTime: string,
        endTime: string,
        link: string,
        zoomPassword: string,
        location: string,
      }[],
      homeworkAssignments: {
        edges: {
          node: {
            name: string,
            dueDate: string,
            dueTime: string,
            course: {
              uid: string
            }
          }
        }[]
      },
      courseLinks: {
        edges: {
          node: {
            course: {
              uid: string,
            }
            link: string
            title: string
          }
        }[]
      }
    }>(gql`
      query {
        getSchedule(date: "${date}", token: "${this.authService.getToken()}") {
          course {
            uid
            name
            color
          }
          startTime
          endTime
          link
          zoomPassword
          location
        }
        homeworkAssignments(completed: false, token: "${this.authService.getToken()}") {
          edges {
            node {
              name
              dueDate
              dueTime
              course {
                uid
              }
            }
          }
        }
        courseLinks(token: "${this.authService.getToken()}") {
          edges {
            node {
              course {
                uid
              }
              link
              title
            }
          }
        }
      }
    `);
  }

  async getScheduleInfo(uid: string) {
    return this.performQuery<{
      courseTimes: {
        edges: {
          node: ScheduleInfo
        }[]
      }
    }>(gql`
      query {
        courseTimes(uid: "${uid}", token: "${this.authService.getToken()}") {
          edges {
            node {
              uid
              course {
                name
                color
              }
              startTime
              weekday
              location
              link
              zoomPassword
            }
          }
        }
      }
    `);
  }

  async getHomeworkAssignments() {
    return this.performQuery<GetHomeworkAssignmentsResponse>(gql`
      query {
        homeworkAssignments(completed: false, token: "${this.authService.getToken()}") {
          edges {
            node {
              uid
              name
              dueDate
              dueTime
              course {
                uid
                name
                color
              }
            }
          }
        }
      }
    `);
  }

  async getAssignments() {
    return this.performQuery<GetAssignmentsResponse>(gql`
      query {
        homeworkAssignments(token: "${this.authService.getToken()}") {
          edges {
            node {
              completed
              course {
                name
                color
              }
              description
              dueDate
              dueTime
              link
              name
              uid
            }
          }
        }
      }
    `);
  }

  async getCourseTimes() {
    return this.performQuery<GetCourseTimesResponse>(gql`
      query {
        courseTimes(token: "${this.authService.getToken()}") {
          edges {
            node {
              uid
              course {
                name
                color
              }
              startTime
              endTime
              weekday
            }
          }
        }
      }
    `);
  }

  async getCourses() {
    return this.performQuery<GetCoursesResponse>(gql`
      query {
        courses(token: "${this.authService.getToken()}") {
          edges {
            node {
              uid
              name
              color
            }
          }
        }
      }
    `);
  }

  getNotes() {
    return this.performQuery<GetNotesResponse>(gql`
      query {
        notes(token: "${this.authService.getToken()}") {
          edges {
            node {
              uid
              title
              content
              uploaded
              modified
              course {
                uid
              }
            }
          }
        }
      }
    `);
  }
}
