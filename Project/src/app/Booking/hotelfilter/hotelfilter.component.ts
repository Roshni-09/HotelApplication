import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstablishmentService } from 'src/app/service/establishment.service';

@Component({
  selector: 'app-hotelfilter',
  templateUrl: './hotelfilter.component.html',
  styleUrls: ['./hotelfilter.component.css']
})
export class HotelfilterComponent implements OnInit {

  profileForm = new FormGroup ({    
    hotelName: new FormControl ('', [Validators.required] ),
    hotel: new FormControl (true, [Validators.required] ),
    homestay: new FormControl (true, [Validators.required] ),
    Rating: new FormControl (1, [Validators.required] ),
    priceMin: new FormControl (1000),
    priceMax: new FormControl (10000),
    search: new FormControl ('', [Validators.required] ),
    location: new FormControl ('', [Validators.required] ),
  });
  myControl = new FormControl();
  filters=[];
  constructor (private establishmentService:EstablishmentService) { }
  ngOnInit( ) {
    this.profileForm.valueChanges.subscribe (formData=>{
      this.establishmentService.getFilter(formData);
    });
  }
    setRatings (star:number) {
      this.profileForm.get('Rating').setValue(star)
    }
  }





