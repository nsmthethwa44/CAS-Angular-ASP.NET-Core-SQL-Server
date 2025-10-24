export interface Car {
  id: number;
  name: string;
  year: number;
  price: number;
  description?: string;
  imageUrl?: string;
  ownerImageUrl?: string;
  status?: string;
  ownerId?: number;
  ownerName?: string;
}
