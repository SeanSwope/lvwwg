import { DatabaseHelper, DatabaseResult } from "./database-result.model";

export class MarketItem extends DatabaseResult {
  id: string;
  postedDate: Date;
  postedBy: string;
  contactInfo: string;
  name: string;
  description: string;
  price: number;
  image: string;

  constructor() {
    super();
    this.id = DatabaseHelper.emptyGuid;
    this.postedDate = new Date();
    this.postedBy = '';
    this.contactInfo = '';
    this.name = '';
    this.description = '';
    this.price = 0;
    this.image = '';
  }
}
