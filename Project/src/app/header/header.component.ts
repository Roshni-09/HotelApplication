import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../Auth/authservice.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor ( private auth: AuthserviceService ) { }
  isLoggedIn= false;
  ngOnInit() {
    this.auth.loginSubject.subscribe( data=>this.isLoggedIn=data );
  }

}
