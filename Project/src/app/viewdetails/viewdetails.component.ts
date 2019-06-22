import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EstablishmentService } from '../service/establishment.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  viewDate: FormGroup;
  count = 1;

  hotelData: any;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private establishmentservice: EstablishmentService,
    private ActRoute: ActivatedRoute) { }
  ngOnInit() {
    // let reviews = this.establishmentservicereviews('reviews');
    const id: any = this.ActRoute.snapshot.paramMap.get('id');
    this.hotelData = this.establishmentservice.viewdetails(+id);
    this.viewDate = this.formBuilder.group({
      location: ['', [Validators.required]],
      date: ['', [Validators.required]],
      todate: ['', [Validators.required]],
      // name:['',[Validators.required]]
    });
    this.viewDate.patchValue(this.establishmentservice.selectLocation());
    this.viewDate.valueChanges.subscribe(dates => {
      const f = new Date(dates.date).getDate();
      const t = new Date(dates.todate).getDate();
      this.count = t - f;
    });
  }
  confirm() {
    const con = confirm('Are You Want To Book');
  }
}
