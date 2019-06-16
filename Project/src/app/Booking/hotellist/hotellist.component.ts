import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/service/establishment.service';
import { User } from 'src/app/Shared/models/user.model';
import { FormGroup } from '@angular/forms';
import { b, a } from '@angular/core/src/render3';


@Component({
  selector: 'app-hotellist',
  templateUrl: './hotellist.component.html',
  styleUrls: ['./hotellist.component.css']
})


export class HotellistComponent implements OnInit {

  establishments = [];
  rating = 0;
  price=0;
  
  constructor(private establishmentservice: EstablishmentService) { }
  ngOnInit() {

    // this.establishments = this.establishmentservice.getEstablishment();
    // console.log(this.estalishments);
    //.subscribe(data =>this.estalishments=data)
    // const eservice=this.establishmentservice.getEstablishment();
    this.establishmentservice.filterSubject.subscribe(filterData => this.establishments = filterData)
    this.establishmentservice.getEstablishment();
    this.getSort();

  }

getRating(){
  if(this.rating == 1)
  {
    this.rating=2;
  }
  else{
    this.rating=1;
  }
  this.price=0;
  this.getSort();
}
getPrice(){
  if(this.price==1){
    this.price=2;
  }
  else{
    this.price=1;
  }
  this.rating=0;
  this.getSort();
}

getSort(){
//console.log(this.rating);
if(this.rating==1){
  this.establishments.sort((a,b)=>a.averageRating-b.averageRating);
}
else if(this.rating==2){
this.establishments.sort((a,b)=>b.averageRating-a.averageRating);
}
if(this.price==1){
this.establishments.sort((a,b)=>a.price-b.price);
}
else if(this.price==2){
this.establishments.sort((a,b)=>b.price-a.price);
}
}

}




