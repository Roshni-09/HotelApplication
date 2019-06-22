import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  submitted = false;
  profileForm: FormGroup;
  // profileForm = new FormGroup({
  //   email: new FormControl('',[Validators.required,Validators.email]),
  //   password: new FormControl('', [Validators.required])
  // });
  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthserviceService) { }
  hide = true;
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, ]],
    });
  }

  get f() {
  return this.profileForm.controls;
  }
  getEmailErrorMessage() {
    return this.profileForm.get('email').hasError('required') ? 'enter  your valid email' :
      this.profileForm.get('email').hasError('email') ? "your Email is invalid" :
        '';
  }
  getPasswordErrorMessage() {
    return this.profileForm.get('password').hasError('required') ? 'enetr your valid password' :
      '';
  }  
  errormessage;
  onSubmit() {
    console.log(this.profileForm);
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    const login = this.auth.logIn(this.profileForm.value);
    if ( login )
      this.router.navigate(['/search']);
    else
      this.errormessage = 'invalid values';
  }
}
