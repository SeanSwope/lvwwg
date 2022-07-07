import { DatabaseHelper, DatabaseResult } from "./database-result.model";

export class LinkDetail extends DatabaseResult {
  id: string;
  companyName: string;
  streetAddress?: string;
  streetAddress2?: string;
  cityStateAddress?: string;
  contact?: string;
  phone?: string;
  moreInfo?: string;
  url?: string;
  category: string;

  constructor() {
    super();
    this.id = DatabaseHelper.emptyGuid;
    this.companyName = '';
    this.streetAddress = '';
    this.streetAddress2 = '';
    this.cityStateAddress = '';
    this.contact = '';
    this.phone = '';
    this.moreInfo = '';
    this.url = '';
    this.category = '';
  }
}

export class CategoryLinkDetails {
  category: string;
  linkDetails: Array<LinkDetail>;

  constructor() {
    this.category = '';
    this.linkDetails = [];
  }
}
