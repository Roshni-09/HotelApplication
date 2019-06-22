import { Review } from './review.model';
import { User } from './user.model';
import { Booking } from './booking.model';
export class Establishment {
    id: number;
    name: string;
    type: string;
    price: number;
    location: string;
    city: string;
    capacity: number;
    isBlock: boolean;
    averagerating: number;
    reviews: Review[];
    bookingList: Booking[];
    amenities: string[];
    owner: User;

    constructor(id:number,name:string,type:string,location:string,averageRating:number) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.location=location;
        this.averagerating= averageRating;
        }
    }

    
