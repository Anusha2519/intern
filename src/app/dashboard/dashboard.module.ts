import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardGraphComponent } from './dashboard-graph/dashboard-graph.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardGraphComponent,
    UsersListComponent,
    ProfileComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    ToastModule,
    MessageService,
    MessagesModule,
    MessageModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    
  ]
})
export class DashboardModule { }
