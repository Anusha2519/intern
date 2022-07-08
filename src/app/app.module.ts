import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import { RegisterComponent } from './account/register/register.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardGraphComponent } from './dashboard/dashboard-graph/dashboard-graph.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';

import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import {MessageModule} from 'primeng/message';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    DashboardGraphComponent,
    ProfileComponent,
    UsersListComponent

    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    RouterModule
    


  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
