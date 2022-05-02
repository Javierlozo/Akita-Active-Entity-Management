import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersPageComponent } from './users-page/users-page.component';



@NgModule({
  declarations: [UsersListComponent, UserInfoComponent, UsersPageComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class UsersModule { }
