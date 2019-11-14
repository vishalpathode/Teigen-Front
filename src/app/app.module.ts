import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { UserApi } from './pages/APIs/UserApi';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' }},
  { path: 'login', component: LoginComponent, data: { title: 'Login' }},
  { path: 'registration', component: RegistrationComponent, data: { title: 'Sing Up' }},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserApi],
  bootstrap: [AppComponent]
})
export class AppModule {}