import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hotelsearch',
  templateUrl: './hotelsearch.component.html',
  styleUrls: ['./hotelsearch.component.css']
})
export class HotelsearchComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  guest=1
  date=new Date();
  loc="Bangalore"
  getAdd(){
  this.guest++;
  }

}
