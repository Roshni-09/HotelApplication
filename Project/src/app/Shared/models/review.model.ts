import { User } from './user.model';
import { Establishment } from './establishment.model';
export class Review {
    id: number;
    rating: number;
    reviewedBy: User;
    establishments: Establishment;
    reviewcontent: string;

}