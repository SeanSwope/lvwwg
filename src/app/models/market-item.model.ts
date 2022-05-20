import { DatabaseResult } from "./database-result.model";

export class MarketItem extends DatabaseResult {
  postedDate: Date;
  postedBy: string;
  contactInfo: string;
  name: string;
  description: string;
  price: number;
  image?: string;

  constructor() {
    super();
    this.postedDate = new Date();
    this.postedBy = '';
    this.contactInfo = '';
    this.name = '';
    this.description = '';
    this.price = 0;
  }
}
