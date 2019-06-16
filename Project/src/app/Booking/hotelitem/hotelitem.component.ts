import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotelitem',
  templateUrl: './hotelitem.component.html',
  styleUrls: ['./hotelitem.component.css']
})
export class HotelitemComponent implements OnInit {
@Input() hotelItem;
  constructor() { }

  ngOnInit() {
  }

}
