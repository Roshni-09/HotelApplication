import { Injectable } from '@angular/core';
import { Booking } from '../Shared/models/booking.model';
import { Establishment } from '../Shared/models/establishment.model';
import { User } from '../Shared/models/user.model';
import { Data } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookHistory:Booking[]=[
    { Booked_by: new User('roshni'),establishment: new Establishment(1,'Hotel Trident','home','jp nagar',4), Check_in_date: new Date('6/18/2019'), Check_out_date: new Date('6/23/2019'), no_of_person: 3, price:5000},
    {  Booked_by: new User('roshni'),establishment: new Establishment(2,'Grand Hyatt','hotel',' MGRoad',4), Check_in_date: new Date('6/19/2019'),Check_out_date: new Date('6/22/2019'), no_of_person: 4, price:3000},
    {  Booked_by: new User('roshni'),establishment: new Establishment(3,'Hotel Trident','home','Btm layout',4), Check_in_date: new Date('8/26/2019'),Check_out_date: new Date('8/28/2019'), no_of_person: 5, price:3500},
    {  Booked_by: new User('roshni'),establishment: new Establishment(4,'Hotel Taj','hotel','mumbai',5), Check_in_date: new Date('6/18/2019'), Check_out_date: new Date('6/19/2019'), no_of_person: 5, price:3500}
];

getHistory()
{
  console.log(this.bookHistory);
  return of(this.bookHistory);
}


 
}
