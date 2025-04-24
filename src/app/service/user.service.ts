import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   username: string = '';

  login(username: string): void {
    this.username = username;
  }

  getUsername(): string {
    return this.username || '';
  }

  constructor() { }
}
