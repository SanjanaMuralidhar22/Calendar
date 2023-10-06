import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { ClientComponent } from './Components/client/client.component';
import { PackageActivationComponent } from './Components/package-activation/package-activation.component';
import { PackagesComponent } from './Components/packages/packages.component';
import { HttpClientModule } from "@angular/common/http";
import { AddMeetingsComponent } from './Components/add-meetings/add-meetings.component';
import { DisplayMeetingsComponent } from './Components/display-meetings/display-meetings.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ClientComponent,
    PackageActivationComponent,
    PackagesComponent,
    AddMeetingsComponent,
    DisplayMeetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
