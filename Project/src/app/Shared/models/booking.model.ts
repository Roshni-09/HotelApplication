import { User } from './user.model';
import { Establishment } from './establishment.model';

export class Booking {
    Booked_by: User;
    establishment: Establishment;
    Check_in_date: Date;
    Check_out_date: Date;
    no_of_person: number;
    price: number;
}