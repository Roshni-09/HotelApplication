import { Injectable } from '@angular/core';
import { Establishment } from '../Shared/models/establishment.model';
import { User } from '../Shared/models/user.model';
import { Observable, of, Subject } from 'rxjs';
import { Booking } from '../Shared/models/booking.model';
import { Review } from '../Shared/models/review.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  formdata = {};
  singleItem: any;
  // id: number;
  //   rating: number;
  //   reviewedBy: User[];
  //   establishments: Establishment[];
  //   reviewcontent: string;

  reviews:Review[] =  [];
  temp: Establishment[] = [];
  establishURL='https://api.myjson.com/bins/vm401';
   establishments: Establishment[] = [];
  //[
  // //   { id: 1, name: 'Hotel Grand', type: 'hotel', location: 'Egmore', city: 'Chennai', capacity: 2, price: 5000, isBlock: false, averageRating: 4.2, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'First Aid', 'Wi-fi'], owner: new User('') },
  // //   { id: 2, name: 'Hotel Taj', type: 'hotel', location: 'Guindy', city: 'Chennai', capacity: 1, price: 6000, isBlock: false, averageRating: 4.4, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'First Aid', 'Air-conditioned'], owner: new User('') },
  // //   { id: 3, name: 'Hotel Trident', type: 'hotel', location: 'Adayar', city: 'Chennai', capacity: 3, price: 5500, isBlock: false, averageRating: 3.0, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'First Aid', 'Wi-fi'], owner: new User('') },
  // //   { id: 4, name: 'Park Plaza', type: 'hotel', location: 'Adayar', city: 'Chennai', capacity: 2, price: 4000, isBlock: false, averageRating: 2.5, reviews: this.reviews, bookingList: [], amenities: ['Air-conditioned', 'First Aid', 'Wi-fi'], owner: new User('') },
  // //   {id: 5, name: 'Le Meridien', type: 'hotel', location: 'Mylapore', city: 'Chennai', capacity: 1 , price: 7500, isBlock: false, averageRating: 4.7, reviews: this.reviews,bookingList: [], amenities: [ 'Car parking', 'Air-conditioned'], owner: new User('') },
  // //   { id: 6, name: 'Oberois Hotels', type: 'hotel', location: 'Egmore', city: 'Chennai', capacity: 2 , price: 7000, isBlock: false, averageRating: 4.8, reviews: this.reviews,bookingList: [], amenities: [ 'Car parking', 'Air-conditioned' , 'Wi-fi'], owner: new User('') },
  // //   { id: 7, name: 'Lovely Homes', type: 'homestay', location: 'Mylapore', city: 'Chennai', capacity: 1 , price: 2500, isBlock: false, averageRating: 5.0, reviews: this.reviews,bookingList: [], amenities: [ 'Car parking', 'Wi-fi'], owner: new User('') },
  // //   { id: 8, name: 'Paradise Inn', type: 'homestay', location: 'Egmore', city: 'Chennai', capacity: 2 , price: 3000, isBlock: false, averageRating: 4.8, reviews: this.reviews ,bookingList: [], amenities: [ 'Car parking', 'First Aid' , 'Wi-fi'], owner: new User('') },
  // //   { id: 9, name: 'Green city', type: 'homestay', location: 'Adayar', city: 'Chennai', capacity: 2 , price: 1500, isBlock: false, averageRating: 4.9, reviews: this.reviews,bookingList: [], amenities: [ 'Car parking'], owner: new User('') },
  // //   { id: 10, name: 'Hotel Taj', type: 'hotel', location: 'BtmLayout', city: 'Bangalore', capacity: 4, price: 6000, isBlock: false, averageRating: 4.4, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'First Aid', 'Air-conditioned'], owner: new User('') },
  // //   { id: 11, name: 'Hotel Trident', type: 'hotel', location: 'Gwalior', city: 'Madhya Pradesh', capacity: 3, price: 5500, isBlock: false, averageRating: 3.0, reviews: this.reviews, bookingList: [], amenities: ['Car parking', 'First Aid', 'Wi-fi'], owner: new User('') },
  // //   { id: 12, name: 'Park Plaza', type: 'hotel', location: 'Goa', city: 'Goa', capacity: 4, price: 4000, isBlock: false, averageRating: 2.5, reviews: this.reviews, bookingList: [], amenities: ['Air-conditioned', 'First Aid', 'Wi-fi'], owner: new User('') },
  // //   {id: 13, name: 'Le Meridien', type: 'hotel', location: 'Indore', city: 'Madhya Pradesh', capacity: 4 , price: 7500, isBlock: false, averageRating: 4.7, reviews: this.reviews, bookingList: [], amenities: [ 'Car parking', 'Air-conditioned'], owner: new User('') },
  // // ];

  
  filterSubject = new Subject<Establishment[]>();
  constructor(private http: HttpClient) {
    this.temp = this.establishments;
  }
  getEstablishment() {
    this.filterSubject.next(this.temp);
  }

  getFilter(formData) {
    console.log(formData);
    let filterData = [];
    filterData = this.temp.filter(data => data.price >= formData.priceMin);
    console.log('price' + filterData);

    if(formData.search)
      filterData = filterData.filter(data => data.name === formData.search);
    console.log('name' + filterData);

    if(formData.Rating)
      filterData = filterData.filter(data => data.averagerating >= formData.Rating);
    console.log('averageRating' + filterData);

    if(!formData.hotel)
      filterData = filterData.filter(data => data.type !== 'hotel');
    if(!formData.homestay)
      filterData = filterData.filter(data => data.type !== 'homestay');

    this.filterSubject.next(filterData);

  }

  searchHotels(data) {
    this.formdata = data;
    let locationData = [];
    this.http.get( this.establishURL) .subscribe(( x:Establishment[] ) => {
      this.establishments=x;
      locationData = this.establishments.filter( loc => loc.city === data.location );
    if( data.guest !== '' ) { 
      locationData = locationData.filter( cap => cap.capacity >= data.guest );
    this.temp = locationData;
    this.filterSubject.next( this.temp );
    }
    }); 
  }

  selectLocation() {
    return this.formdata;
  }
  viewdetails(data) {
    this.singleItem = this.temp.find(data1 => data1.id === data);
    return this.singleItem;
  }

  getReviews() {
    return this.reviews;
  }
}
