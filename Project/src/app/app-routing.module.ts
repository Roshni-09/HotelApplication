import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { HotellistComponent } from './Booking/hotellist/hotellist.component';
import { HotelsearchComponent } from './Booking/hotelsearch/hotelsearch.component';
import { SearchComponent } from './search/search.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { MybookingComponent } from './mybooking/mybooking.component';




const appRoutes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent  },
  { path: 'hotellist', component: HotellistComponent },
  { path: 'search', component: SearchComponent },
  { path: 'booking/:id', component: ViewdetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mybooking', component: MybookingComponent },
  
  { path: '',   redirectTo: '/sign-in', pathMatch: 'full' },
  

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
    
     
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
