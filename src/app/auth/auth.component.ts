import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {AuthService}from './auth.service'

@Component({
  selector: 'baaxal-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private auth: AuthService) { }

  public showRegister:boolean = false;
  public showLogin:boolean =true;
  public buttonName:any = 'Show';

  loginForm = this.formBuilder.group({Email: [''],Password: ['']});
  registerForm = this.formBuilder.group({EmailR:[''],PassR:[''],Name:['']});
  ngOnInit () {}
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

  get Email(){return this.loginForm.get('Email')}
  get Password(){return this.loginForm.get('Password')}
  get EmailR(){return this.registerForm.get('EmailR')};
  get PasswordR(){return this.registerForm.get('PassR')};
  get Name(){return this.registerForm.get('Name')};
  loginSubmit() {
    this.auth.postUser(this.Email.value,this.Password.value).subscribe( (res:any) => {
      localStorage.setItem('baaxal_key', JSON.stringify(res.access_token)); 
    }); 
    this.loginForm.reset();
  }
  registerSubmit(){
    this.auth.registerUser(this.EmailR.value,this.PasswordR.value,this.Name.value).then( (res:any) => {
      localStorage.setItem('baaxal_key', JSON.stringify(res.access_token)); 
    }); 
    this.registerForm.reset();
  }

  }


/*this.auth.getUser().subscribe( res => {
    });
     console.log(localStorage.getItem('baaxal_key'))*/   