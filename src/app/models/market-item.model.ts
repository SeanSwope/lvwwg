export class MarketItem {
  postedDate: Date;
  postedBy: string;
  contactInfo: string;
  name: string;
  description: string;
  price: number;
  image?: string;

  constructor() {
    this.postedDate = new Date();
    this.postedBy = '';
    this.contactInfo = '';
    this.name = '';
    this.description = '';
    this.price = 0;
  }
}
