import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { MatToolbarModule } from '@angular/material/toolbar';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConnectionComponent } from './connection/connection.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookingRequestComponent } from './booking-request/booking-request.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { JobOfferService} from "./shared/job-offer.service";

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    RegistrationComponent,
    BookingRequestComponent,
    AccountCreationComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [JobOfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
