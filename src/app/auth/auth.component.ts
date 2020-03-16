import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baaxal-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  public showRegister:boolean = false;
  public showLogin:boolean =true;
  public buttonName:any = 'Show';

  ngOnInit () {  }

  toggleRegister() {
    this.showRegister = !this.showRegister;
    this.toggleLogin();

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showRegister)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  toggleLogin(){
    this.showLogin = !this.showLogin;
    this.toggleRegister();

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showLogin)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
