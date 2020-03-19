import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaaxalRoutingModule } from './baaxal-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaaxalComponent } from './baaxal.component';
import * as AOS from "aos"
import { SharedModule } from './shared/shared.module';
import { AuthComponent } from './auth/auth.component';

import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    BaaxalComponent, 
    AuthComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BaaxalRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [BaaxalComponent]
})
export class BaaxalModule { }
