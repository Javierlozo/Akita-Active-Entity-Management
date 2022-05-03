import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { UsersStore } from './users.store';
import { User } from './user.model';
import data from '../users.data';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private usersStore: UsersStore) {}

  get() {
    of(data).subscribe(entities => {
      this.usersStore.set(entities);
    });
  }

  setActive(id: ID) {
    this.usersStore.setActive(id);
  }

  updateActive(user: User) {
    this.usersStore.updateActive(user);
  }
}
