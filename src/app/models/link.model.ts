export class LinkDetails {
  companyName: string;
  streetAddress?: string;
  streetAddress2?: string;
  cityStateAddress?: string;
  contact?: string;
  phone?: string;
  message?: string;
  url?: string;

  constructor() {
    this.companyName = '';
    this.streetAddress = '';
    this.streetAddress2 = '';
    this.cityStateAddress = '';
    this.contact = '';
    this.phone = '';
    this.message = '';
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
