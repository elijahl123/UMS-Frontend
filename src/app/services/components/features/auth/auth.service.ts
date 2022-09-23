import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo, private router: Router) {
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  tokenAuth(email: string, password: string) {
    return this.apollo.mutate<{ tokenAuth: { token: string } }>({
      mutation: gql`
        mutation TokenAuth($email: String!, $password: String!) {
          tokenAuth(email: $email, password: $password) {
            token
          }
        }
      `,
      variables: {
        email,
        password
      }
    });
  }

  verifyToken(token: string) {
    return this.apollo.mutate<{ verifyToken: { payload: {} } }>({
      mutation: gql`
        mutation VerifyToken($token: String!) {
          verifyToken(token: $token) {
            payload
          }
        }
      `,
      variables: {
        token
      }
    });
  }

  refreshToken(token: string) {
    return this.apollo.mutate<{ refreshToken: { token: string } }>({
      mutation: gql`
        mutation RefreshToken($token: String!) {
          refreshToken(token: $token) {
            token
          }
        }
      `,
      variables: {
        token
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']).then();
  }
}
