import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor() { }

  ngOnInit() {
  }
  getEmailErrorMessage() {
    return this.profileForm.get('email').hasError('required') ? "enter  your valid email" :
      this.profileForm.get('email').hasError('email') ? "your Email is invalid" :
        '';
  }
  getPasswordErrorMessage() {
    return this.profileForm.get('password').hasError('required') ? "enetr your valid password" :
      '';
  }

  onSubmit(){
    console.log(this.profileForm);
  }
}
