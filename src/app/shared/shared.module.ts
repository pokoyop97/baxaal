import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BaaxalRoutingModule } from '../baaxal-routing.module';



@NgModule({
  imports: [
    CommonModule,
    BaaxalRoutingModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})

export class SharedModule { }