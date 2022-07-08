import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGraphComponent } from './dashboard/dashboard-graph/dashboard-graph.component';

import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

const routes: Routes = [


  {
    path: 'account',
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },

    ]
  },


  {
    path: 'dashboard',
    children: [
      { path: 'dashboard-graph', component: DashboardGraphComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'users-list', component: UsersListComponent },
      { path: 'sidebar', component: SidebarComponent },

    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




















// {path: "account", loadChildren:()=>import('./account/account.module')
  // .then(mod=>mod.AccountModule)

  // },
  // {path: "dashboard", loadChildren:()=>import('./dashboard/dashboard.module')
  // .then(mod=>mod.DashboardModule)

  // },
  // {path: "users", loadChildren:()=>import('./users/users.module')
  // .then(mod=>mod.UsersModule)

  // },