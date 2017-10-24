import { Injectable } from '@angular/core';

import { User, Authenticate } from '../models/user';

@Injectable()
export class AuthService {

  currentUser: User;
  redirectUrl: string;

  constructor() {  }

  isLoggedIn(): boolean {
      return !!this.currentUser;
  }

  // This is just hard-coded here.
  login({ username, password }: Authenticate): void {
      this.currentUser = {
          name: username,
      };
  }

  logout(): void {
      this.currentUser = null;
  }
}
