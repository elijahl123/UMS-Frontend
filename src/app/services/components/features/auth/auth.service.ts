import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class AuthService {
   private token: string | null;
   onTokenChange: Subject<string | null> = new Subject<string | null>();

   constructor(private apollo: Apollo, private router: Router) {
   }

   getToken() {
      if (localStorage.getItem('token') !== this.token) {
         this.setToken(localStorage.getItem('token'));
      }
      return this.token;
   }

   setToken(token: string | null) {
      this.onTokenChange.next(token);
      this.token = token;
      if (token) {
         localStorage.setItem('token', token);
      } else {
         localStorage.removeItem('token');
      }
   }

   async tokenAuth(email: string, password: string) {
      return new Promise<string>((resolve, reject) => {
         this.apollo.mutate<{ tokenAuth: { token: string } }>({
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
         }).subscribe((result) => {
            if (result.data) {
               if (result.data.tokenAuth) {
                  this.setToken(result.data.tokenAuth.token);
                  resolve(result.data.tokenAuth.token);
               }
            }
         }, (error) => {
            reject(error);
         });
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

   signup(firstName: string, lastName: string, email: string, username: string, password1: string, password2: string) {
      return this.apollo.mutate<{ signup: { token: string | null, errors: { field: string, messages: string[] }[] } }>({
         mutation: gql`
            mutation Signup($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password1: String!, $password2: String!) {
               signup(input: {firstName: $firstName, lastName: $lastName, email: $email, username: $username, password1: $password1, password2: $password2}) {
                  token
                  errors {
                     field
                     messages
                  }
               }
            }
         `,
         variables: {
            firstName,
            lastName,
            email,
            username,
            password1,
            password2
         }
      });
   }

   logout() {
      localStorage.setItem('token', '');
      this.setToken(null);

      // Refresh the page to clear the cache
      this.router.navigate(['/auth', 'login'], { queryParams: { refresh: true } });
   }
}
