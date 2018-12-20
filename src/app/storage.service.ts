import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

type User = {
  firstName: string;
  lastName: string;
};

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(protected localStorage: LocalStorage) { }

  add() {
    let user: User = { firstName: 'Henri', lastName: 'Bergson' };
    this.localStorage.setItem('user', user).subscribe(() => { });
  }

  delete(){
    this.localStorage.removeItem('user').subscribe(() => {});
  }

  read(){
    this.localStorage.getItem<User>('user').subscribe((user: User) => {
      user.firstName; // should be 'Henri'
    });
  }
}
