import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private currentToken;

  constructor(
    private router: Router
    //private _http: HttpClient,
  ) { }

  login({ email, password }): boolean{
    const users: any[] = JSON.parse(localStorage.getItem('users')); // todo: user model
    const loggedUser = users?.filter(user => user.email === email && user.password === password);

    if (loggedUser && loggedUser.length > 0) {
      localStorage.setItem('currentUser', JSON.stringify(email));
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }

  register({firstName, lastName, email, username, password}): boolean {
    const registeredUsers = JSON.parse(localStorage.getItem('users'));

    if (registeredUsers && registeredUsers.length > 0) {
      const foundUser = registeredUsers.filter(user =>  user.username === username);
      if (foundUser && foundUser.length > 0) {
        // username already exists
        return true;
      }
    }

    const users = registeredUsers ? registeredUsers : [];
    users.push({firstName, lastName, email, username, password});
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/auth']);

    return false;
  }

  isLogged(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
  }

}
