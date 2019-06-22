import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../Shared/models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  isLoggedIn = false;
  loginSubject = new Subject<boolean>();
  obj = {}; 
  users: User[] = [
{ id: 1, name: 'admin', email: 'admin@admin.com', phoneNumber: '9876541233', password: 'abc12@Abc', 
   isBlocked: false, role: '1', establishment: [], reviews: [], bookingList: [] },
{ id: 2, name: 'Roshni', email: 'roshni@123.com', phoneNumber: '9876541233', password: 'abc12@Abc', 
   isBlocked: false, role: '2', establishment: [], reviews: [], bookingList: [] },
{ id: 3, name: 'test', email: 'test@test.com', phoneNumber: '9876541233', password: '12345678', 
  isBlocked: false, role: '3', establishment: [], reviews: [], bookingList: [] },
{ id: 2, name: 'test1', email: 'test1@test.com', phoneNumber: '9876541233', password: 'abc12@Abc',
   isBlocked: false, role: '3', establishment: [], reviews: [], bookingList: [] }
  ];
  constructor(private router : Router) { }
  logIn( signinForm ) {
    if ( signinForm ) {
      const signed = this.users.find ( x => x.email === signinForm.email && x.password === signinForm.password );
      if ( signed ) {
        this.obj =signed;
        this.isLoggedIn = true;
        this.loginSubject.next(this.isLoggedIn);
        return true;
      } else {
        this.isLoggedIn = false ;
        this.loginSubject.next( this.isLoggedIn );
        return false;
      }
    }
  }
  logout() {
    this.isLoggedIn = false;
    this.loginSubject.next(this.isLoggedIn);
    this.router.navigate( ['/sign-in'] );
  }
  signInData(user){
    this.users.push(user);
  }
  getprofile(){
    console.log(this.obj);
  return this.obj;
  }
  profileData(edit) {
    for (var i in this.users) {
      if (this.users[i].id === edit.id) {
        this.users[i] = edit;
     }
    }
    this.obj = edit;
    console.log(this.obj);
   this.getprofile();
  }
}
