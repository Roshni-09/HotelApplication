import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
  import { from } from 'rxjs';
  import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z/d$@$!%*?&].{8,}')]),
    phoneno:  new FormControl('', [Validators.required, Validators.pattern('[917][0-9]{9}')]),
    role: new FormControl('', [Validators.required]),


  });

  constructor(private authService:AuthserviceService,private router: Router) { }

  ngOnInit() {
  }
  getNameErrorMessage() {
    return this.profileForm.get('name').hasError('required') ? 'enter  your name' : '';
  }
  getEmailErrorMessage() {
    return this.profileForm.get('email').hasError('required') ? 'enter  your valid email' :
      this.profileForm.get('email').hasError('email') ? 'your Email is invalid' : '';
  }
  getPasswordErrorMessage() {
    return this.profileForm.get('password').hasError('required') ? 'enetr your valid password' :
      this.profileForm.get('password').value.length < 8 ? 'length should be greater than 8' :
        this.profileForm.get('password').hasError('pattern') ? 'pattern should match' :
          '';
  }
  getPhonenoErrorMessage() {
    return this.profileForm.get('phoneno').hasError('required') ? 'enter  your phoneno' :

      '';
  }
  getRoleErrorMessage() {
    return this.profileForm.get('role').hasError('required') ? '' :

      '';
  }

  onSubmit(){
    console.log(this.profileForm);
    this.authService.signInData(this.profileForm.value);
    this.router.navigate(['/sign-in'])
    
  }

}
