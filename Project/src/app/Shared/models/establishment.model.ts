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
    averageRating: number;
    reviews: Review[];
    bookingList: Booking[];
    amenities: string[];
    owner: User;
}
