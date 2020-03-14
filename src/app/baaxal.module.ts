import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaaxalRoutingModule } from './baaxal-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaaxalComponent } from './baaxal.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import * as AOS from "aos"

@NgModule({
  declarations: [BaaxalComponent, LoginComponent,],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    BaaxalRoutingModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [BaaxalComponent]
})
export class BaaxalModule { }
