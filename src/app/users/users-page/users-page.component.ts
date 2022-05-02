import { ID } from '@datorama/akita';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersQuery } from '../state/users.query';
import { UsersService } from '../state/users.service';
import { User } from '../state/user.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent implements OnInit {
  users$!: Observable<User[]>;
  active$!: Observable<User>;

  constructor(
    private usersService: UsersService,
    private usersQuery: UsersQuery,
  ) { }

  ngOnInit(): void {
    this.users$ = this.usersQuery.selectAll();
    this.active$ = this.usersQuery.selectActive();
    this.usersService.get();
  }

  setActive(id: ID) {
    this.usersService.setActive(id);
  }

  update(user: User) {
    this.usersService.updateActive(user)
  }
}
