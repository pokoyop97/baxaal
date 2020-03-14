import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
@Component({
  selector: 'baaxal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isValidFormSubmitted = null;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  userForm = this.formBuilder.group({
     primaryEmail: ['', Validators.email],
  });
  user = new User();
  constructor(private formBuilder:FormBuilder, private userService: UserService) {
  }
  ngOnInit() {
  }

  onFormSubmit() {
     this.isValidFormSubmitted = false;
     if (this.userForm.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.user = this.userForm.value;
     this.userService.createUser(this.user);
     this.userForm.reset();
  }
  
  get primaryEmail() {
     return this.userForm.get('primaryEmail');
  }
  
}
