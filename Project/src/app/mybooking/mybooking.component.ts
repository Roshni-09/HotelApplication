import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../service/establishment.service';
import { Booking } from '../Shared/models/booking.model';
import { BookingService } from '../service/booking.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {

  
  constructor(private bookinService: BookingService, private router: Router, private route: ActivatedRoute ) { }
  history: Booking[];
  checkin = [];
  checkout = [];

  ngOnInit() {
    this.bookinService.getHistory().subscribe(data => {
      this.history = data;
      console.log(this.history[0]);
      const date=new Date();
      for(let s of this.history) {
        if(s.Check_in_date<date && s.Check_out_date<=date){ 
              this.checkin.push(s);
        }else{
          this.checkout.push(s);
        }
      }
    });
  }
  booknow()
  {
    alert( 'Thank you for booking again!' );
  }

  // postReview(){
  
  // }
  // RaiseComplaint(){
    
  // }
}
  



