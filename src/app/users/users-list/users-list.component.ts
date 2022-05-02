import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { User } from '../state/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent {

  @Input()
  users!: User[];

  @Output()
  active = new EventEmitter<ID>();

}
