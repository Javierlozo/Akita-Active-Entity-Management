import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersComponent } from './users-list/users-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersPageComponent } from './users-page/users-page.component';

@NgModule({
  declarations: [UsersComponent, UserInfoComponent, UsersPageComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class UsersModule { }
