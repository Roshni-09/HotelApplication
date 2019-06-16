import {Review} from './review.model';
import {Establishment } from './establishment.model';
import {Booking} from './booking.model';
export class User {
    id:number;
    name:string;
    email: string;
    phoneNumber : string;
    password: string;
    isBlocked: boolean;
    role: string;
    establishment: Establishment[];
    reviews: Review[];
    bookingList: Booking[];
}
