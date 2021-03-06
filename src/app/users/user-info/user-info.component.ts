import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../state/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent {

  form!: FormGroup;
  _active!: User;

  @Input()
  set active(active: User) {
    if (!active) return;

    this._active = active;

    if (!this.form) {
      this.initGroup(active);
    } else {
      this.form.patchValue(active);
    }
  }
  get active() {
    return this._active;
  }

  @Output()
  update = new EventEmitter<User>();

  private initGroup({ username, email }: User) {
    this.form = new FormGroup({
      username: new FormControl(username),
      email: new FormControl(email)
    });
  }

}
