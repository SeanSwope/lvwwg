import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem, SelectItemGroup } from 'primeng/api';
import { map, Observable, of } from 'rxjs';
import { DatabaseResult } from '../models/database-result.model';
import { DonationDetails } from '../models/donation.model';
import { ImageDetails } from '../models/image.model';
import { CategoryLinkDetails, LinkDetails } from '../models/link.model';
import { MarketItem } from '../models/market-item.model';
import { MeetingDetails } from '../models/meeting-info.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  apiURL = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
  ) { }

  createMeeting(meeting: MeetingDetails): Observable<DatabaseResult> {
    return this.http.post<DatabaseResult>(this.apiURL + '/meetings', meeting).pipe(
      map(result => result as DatabaseResult)
    );
  }

  updateMeeting(meeting: MeetingDetails): Observable<DatabaseResult> {
    return this.http.put<DatabaseResult>(this.apiURL + `/meetings/${meeting.id}`, meeting).pipe(
      map(result => result as DatabaseResult)
    );
  }

  deleteMeeting(meeting: MeetingDetails): Observable<DatabaseResult> {
    return this.http.delete<DatabaseResult>(this.apiURL + `/meetings/${meeting.id}`).pipe(
      map(result => result as DatabaseResult)
    );
  }

  getMeetings(): Observable<Array<MeetingDetails>> {
    return this.http.get<Array<MeetingDetails>>(this.apiURL + '/meetings').pipe(
      map(results => {
        const dateResults: Array<MeetingDetails> = [];
        results.forEach(mtg => {
          mtg.dateTime = new Date(mtg.dateTime);
          dateResults.push(mtg);
        })
        return dateResults;
      })
    )
  }

  getAllMeetings(): Observable<Array<MeetingDetails>> {
    return this.http.get<Array<MeetingDetails>>(this.apiURL + '/meetings/bulk').pipe(
      map(results => {
        const dateResults: Array<MeetingDetails> = [];
        results.forEach(mtg => {
          mtg.dateTime = new Date(mtg.dateTime);
          dateResults.push(mtg);
        })
        return dateResults;
      })
    )
  }

  getImages(): Observable<Array<ImageDetails>> {
    const imageDetails: Array<ImageDetails> = [
      {
        errorCode: 0,
        message: '',
        imageSource: "../../assets/images/Feb2022-Bonsall-Bat/Bonsall-Bat-2.jpg",
        alt: "Description for Image 1",
        title: "Bonsall Bat",
        subTitle: "February 2022"
      },
      {
        errorCode: 0,
        message: '',
        imageSource: "../../assets/images/Feb2022-Bonsall-Bat/Bonsall-Bat-4.jpg",
        alt: "Description for Image 1",
        title: "Bonsall Bat",
        subTitle: "February 2022"
      },
      {
        errorCode: 0,
        message: '',
        imageSource: "../../assets/images/Feb2022-Bonsall-Bat/Bonsall-Bat-5.jpg",
        alt: "Description for Image 1",
        title: "Bonsall Bat",
        subTitle: "February 2022"
      },
      {
        errorCode: 0,
        message: '',
        imageSource: "../../assets/images/Feb2022-Bonsall-Bat/Bonsall-Bat-6.jpg",
        alt: "Description for Image 1",
        title: "Bonsall Bat",
        subTitle: "February 2022"
      },
      {
        errorCode: 0,
        message: '',
        imageSource: "../../assets/images/2018-shriners-hospital/DSC_0892.JPG",
        alt: "Description for Image 1",
        title: "Shriner's Hospital",
        subTitle: "2018"
      },
      {
        errorCode: 0,
        message: '',
        imageSource: "../../assets/images/2018-shriners-hospital/DSC_0888.JPG",
        alt: "Description for Image 2",
        title: "Shriner's Hospital",
        subTitle: "2018"
      },
      {
        errorCode: 0,
        message: '',
        imageSource: "../../assets/images/2018-shriners-hospital/DSC_0887.JPG",
        alt: "Description for Image 4",
        title: "Shriner's Hospital",
        subTitle: "2018"
      },
      {
        errorCode: 0,
        message: '',
        imageSource: "../../assets/images/2018-shriners-hospital/DSC_0884.JPG",
        alt: "Description for Image 6",
        title: "Shriner's Hospital",
        subTitle: "2018"
      },
      {
        errorCode: 0,
        message: '',
        imageSource: "../../assets/images/2018-shriners-hospital/DSC_0876.JPG",
        alt: "Description for Image 7",
        title: "Shriner's Hospital",
        subTitle: "2018"
      },
    ];

    return of(imageDetails);
  }

  getLinks(): Observable<Array<CategoryLinkDetails>> {
    const links: Array<CategoryLinkDetails> = [
      { category: 'Wood Deals',
        linkDetails: [
          {
            errorCode: 0,
            message: '',
            companyName: 'Shady Lane Tree Farm',
            streetAddress: '5220 Shimerville Road',
            cityStateAddress: 'Emmaus, PA',
            contact: 'Louise & Mike Peters',
            phone: '610-965-5612',
            moreInfo: 'Please call',
            url: '',
          },
          {
            errorCode: 0,
            message: '',
            companyName: 'Fleetwood Lumber & Flooring',
            streetAddress: '27 Rapp Road',
            cityStateAddress: 'Fleetwood, PA',
            contact: 'Bill Burkert',
            phone: '610-944-8364',
            moreInfo: 'Please call. 5% Member\'s discount',
            url: '',
          },
          {
            errorCode: 0,
            message: '',
            companyName: 'Woodcraft',
            streetAddress: 'Parkway Shopping Center',
            streetAddress2: '1534 Lehigh Street',
            cityStateAddress: 'Allentown, PA',
            contact: '',
            phone: '610-351-2966',
            moreInfo: '',
            url: 'www.woodcraft.com',
          }
        ]
      },
      { category: 'Catalogs',
        linkDetails: [
          {
            errorCode: 0,
            message: '',
            companyName: 'Grizzly Industrial, Inc',
            url: 'www.grizzly.com',
          },
          {
            errorCode: 0,
            message: '',
            companyName: 'Rockler',
            url: 'www.rockler.com',
          }
        ]
      },
      { category: 'Other Clubs / Guilds / Associations',
        linkDetails: [
          {
            errorCode: 0,
            message: '',
            companyName: 'Minnesota Woodworkers Guild',
            url: 'www.mnwwg.org',
          },
          {
            errorCode: 0,
            message: '',
            companyName: 'Northeastern Woodworkers Association',
            url: 'woodworker.org',
          },
          {
            errorCode: 0,
            message: '',
            companyName: 'South Florida Woodworking Guild',
            url: 'http://www.sfwg.org/',
          },
          {
            errorCode: 0,
            message: '',
            companyName: 'Greenville Woodworkers Guild',
            url: 'www.greenvillewoodworkers.com/',
          },
          {
            errorCode: 0,
            message: '',
            companyName: 'Northwest Woodworkers Association',
            url: 'nwwoodworkers.org/',
          },
          {
            errorCode: 0,
            message: '',
            companyName: 'Western Pennsylvania Woodworkers',
            url: 'www.wpwoodworkers.org',
          }
        ]
      }
    ];

    return of(links);
  }

  getNewsletters(): Observable<Array<SelectItemGroup>> {
    const links: Array<SelectItemGroup> = [
      { label: '2018',
        value: '2018',
        items: [
          {
            label: 'January - Open Forum Discussion',
            value: '../../assets/pdf/jan2018.pdf',
          },
          {
            label: 'February - Appreciation Letters',
            value: '../../assets/pdf/feb2018.pdf',
          },
          {
            label: 'March - Wooden Trains',
            value: '../../assets/pdf/mar2018.pdf',
          },
          {
            label: 'April - N.J. Woodworking Show Discussion & Thank You letter',
            value: '../../assets/pdf/apr2018.pdf',
          },
          {
            label: 'May - Convex Curve Cutter Demonstration',
            value: '../../assets/pdf/may2018.pdf',
          }
        ]
      },
      { label: '2017',
        value: '2017',
        items: [
          {
            label: 'February - CNC Trivets by Gary Schnell',
            value: '../../assets/pdf/feb2017.pdf',
          },
          {
            label: 'April - Trip to Fab Lab',
            value: '../../assets/pdf/apr2017.pdf',
          },
          {
            label: 'June - Lou Supina Presentation',
            value: '../../assets/pdf/jun2017.pdf',
          },
          {
            label: 'October - Larissa Huff',
            value: '../../assets/pdf/Oct2017.pdf',
          },
          {
            label: 'December - Block Party',
            value: '../../assets/pdf/Dec2017.pdf',
          }
        ]
      }
    ];

    return of(links);
  }

  getMarketItems(): Observable<Array<MarketItem>> {
    const marketItems: Array<MarketItem> = [
      {
        errorCode: 0,
        message: '',
        postedDate: new Date('3/1/2022'),
        postedBy: 'Tim Enot',
        contactInfo: 'tim@enot.com',
        name: 'SHARK SD110 CNC Machine',
        description: 'Good condition. Only used a few times.',
        price: 799.00,
        image: '../../assets/market/SHARK SD110 CNC Machine.jpg'
      },
      {
        errorCode: 0,
        message: '',
        postedDate: new Date('3/10/2022'),
        postedBy: 'Sean Swope',
        contactInfo: '123-456-7890',
        name: 'RIKON 12" VS Benchtop Drill Press',
        description: 'Fair condition.',
        price: 100.00,
        image: '../../assets/market/Rikon drill press.jpg'
      },
      {
        errorCode: 0,
        message: '',
        postedDate: new Date('10/1/1972'),
        postedBy: 'Mickey Mouse',
        contactInfo: 'mickey@mickey.com',
        name: 'Theme Park in Florida',
        description: 'Used daily.',
        price: 10500.00,
      },
    ];

    return of(marketItems);
  }

  getDonations(): Observable<Array<DonationDetails>> {
    const donations: Array<DonationDetails> = [
      {
        errorCode: 0,
        message: '',
        organizationName: 'Children\'s Hospital of Philadelphia',
        donationYear: '2021',
        blockSets: 21,
        racecars: 26,
        rockingHorses: 7,
        trains: 13,
        wands: 15,
        misc: ''
      },
      {
        errorCode: 0,
        message: '',
        organizationName: 'Lehigh Valley Health Network',
        donationYear: '2021',
        blockSets: 22,
        racecars: 10,
        rockingHorses: 10,
        trains: 5,
        wands: 9,
        misc: ''
      },
      {
        errorCode: 0,
        message: '',
        organizationName: 'St. Luke\'s University Health Network',
        donationYear: '2021',
        blockSets: 19,
        racecars: 9,
        rockingHorses: 4,
        trains: 3,
        wands: 5,
        misc: ''
      },
      {
        errorCode: 0,
        message: '',
        organizationName: 'Shriners Children\'s Hospial',
        donationYear: '2021',
        blockSets: 15,
        racecars: 19,
        rockingHorses: 8,
        trains: 15,
        wands: 7,
        misc: ''
      },
    ];

    return of(donations);
  }

  private sortByDateTime(a: MeetingDetails, b: MeetingDetails) {
    if (a.dateTime < b.dateTime) {
        return 1;
    }
    if (a.dateTime > b.dateTime) {
        return -1;
    }
    return 0;
  }

  // **********************************************
  // PrimeNG Test Stuff
  // **********************************************

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [
      "Bamboo Watch",
      "Black Watch",
      "Blue Band",
      "Blue T-Shirt",
      "Bracelet",
      "Brown Purse",
      "Chakra Bracelet",
      "Galaxy Earrings",
      "Game Controller",
      "Gaming Set",
      "Gold Phone Case",
      "Green Earbuds",
      "Green T-Shirt",
      "Grey T-Shirt",
      "Headphones",
      "Light Green T-Shirt",
      "Lime Band",
      "Mini Speakers",
      "Painted Phone Case",
      "Pink Band",
      "Pink Purse",
      "Purple Band",
      "Purple Gemstone Necklace",
      "Purple T-Shirt",
      "Shoes",
      "Sneakers",
      "Teal T-Shirt",
      "Yellow Earbuds",
      "Yoga Mat",
      "Yoga Set",
  ];

/*   getProductsSmall() {
      return this.http.get<any>('assets/products-small.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  } */

  getProducts() {
    return of([]);
/*      return this.http.get<any>('../../assets/products.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; }); */
  }

/*   getProductsWithOrdersSmall() {
      return this.http.get<any>('assets/products-orders-small.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  } */

  generatePrduct(): Product {
      const product: Product =  {
          id: this.generateId(),
          name: this.generateName(),
          description: "Product Description",
          price: this.generatePrice(),
          quantity: this.generateQuantity(),
          category: "Product Category",
          inventoryStatus: this.generateStatus(),
          rating: this.generateRating()
      };

      product.image = product.name?.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
      return product;
  }

  generateId() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
  }

  generateName() {
      return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }

  generatePrice() {
      return Math.floor(Math.random() * Math.floor(299)+1);
  }

  generateQuantity() {
      return Math.floor(Math.random() * Math.floor(75)+1);
  }

  generateStatus() {
      return this.status[Math.floor(Math.random() * Math.floor(3))];
  }

  generateRating() {
      return Math.floor(Math.random() * Math.floor(5)+1);
  }
}

export interface Product {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}
