import { Bid } from "./bids";

export interface Auction {
   id: number;
  carId: number;
  name: string;
  year: number;
  price: number;
  status?: string;
  description?: string;
  ownerId?: number;
  ownerName?: string;
  imageUrl?: string;
  ownerImageUrl?: string;
  dateListed?: string;
  startDate: string;
  endDate: string;
  bids: Bid[];
}
