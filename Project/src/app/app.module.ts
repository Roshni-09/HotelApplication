import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatRadioModule, MatCardModule, MatDatepickerModule ,MatNativeDateModule,MatToolbarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelsearchComponent } from './Booking/hotelsearch/hotelsearch.component';
import { HotelfilterComponent } from './Booking/hotelfilter/hotelfilter.component';
import { HotelitemComponent } from './Booking/hotelitem/hotelitem.component';
import { HotellistComponent } from './Booking/hotellist/hotellist.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import 'hammerjs' ;
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';






@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HotelfilterComponent,
    HotelsearchComponent,
    HotelitemComponent,
    HotellistComponent
   


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
     MatNativeDateModule,
     MatCheckboxModule,
     MatSliderModule ,
     MatToolbarModule,
     MatSidenavModule,
     FormsModule,
     MatIconModule,
     FlexLayoutModule,
     MatButtonModule,
     AppRoutingModule
  ],
  providers: [
    MatDatepickerModule,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
