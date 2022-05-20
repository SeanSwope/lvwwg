import { DatabaseResult } from "./database-result.model";

export class LinkDetails extends DatabaseResult {
  companyName: string;
  streetAddress?: string;
  streetAddress2?: string;
  cityStateAddress?: string;
  contact?: string;
  phone?: string;
  moreInfo?: string;
  url?: string;

  constructor() {
    super();
    this.companyName = '';
    this.streetAddress = '';
    this.streetAddress2 = '';
    this.cityStateAddress = '';
    this.contact = '';
    this.phone = '';
    this.moreInfo = '';
    this.url = '';
  }
}

export class CategoryLinkDetails {
  category: string;
  linkDetails: Array<LinkDetails>;

  constructor() {
    this.category = '';
    this.linkDetails = [];
  }
}
