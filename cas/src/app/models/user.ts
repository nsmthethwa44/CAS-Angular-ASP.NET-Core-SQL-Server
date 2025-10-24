export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'CarOwner' | 'Bidder';
  ImageUrl?: string;
}