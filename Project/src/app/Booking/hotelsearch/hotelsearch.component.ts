import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/service/establishment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hotelsearch',
  templateUrl: './hotelsearch.component.html',
  styleUrls: ['./hotelsearch.component.css']
})
export class HotelsearchComponent implements OnInit {
  guest=1;
  searchform:FormGroup;
  constructor(private establishmentservice:EstablishmentService ,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
  
   //guest=1;
  // date=new Date();
  // loc=""
  // getAdd(){
   this.guest++;
  // 
  this.searchform= this.formBuilder.group({
    location: ['', [Validators.required]],
    date:['',[Validators.required]],
     guest:['',[Validators.required]]

  });
  this.searchform.patchValue(this.establishmentservice.selectLocation());
}
getLocationError()
{
  // console.log(this.searchform.get('location').hasError('required'));
  return this.searchform.get('location').hasError('required') ? 'Please enter location':'';
}
  onSubmit()
{
  this.establishmentservice.searchHotels(this.searchform.value);  
  this.router.navigate(['/hotellist']);
}

}
