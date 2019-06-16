import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { HotellistComponent } from './Booking/hotellist/hotellist.component';


const appRoutes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in',        component: SignInComponent  },
  {path:'hotellist',component: HotellistComponent},
  { path: '',   redirectTo: '/hotellist', pathMatch: 'full' },

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
