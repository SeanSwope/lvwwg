import { Injectable } from '@angular/core';
import { SelectItem, SelectItemGroup } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { MeetingsComponent } from '../meetings/meetings.component';
import { ImageDetails } from '../models/image.model';
import { CategoryLinkDetails, LinkDetails } from '../models/link.model';
import { MeetingDetails } from '../models/meeting-info.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  getMeetings(): Observable<Array<MeetingDetails>> {
    const meetings = new Array<MeetingDetails>();

    const meeting1: MeetingDetails = {
      dateTime: new Date('2022-05-27T22:30:00Z'),
      location: 'Woodcraft Store, Parkway Shopping Center',
      presenter: '',
      topic: 'Open discussion'
    }
    meetings.push(meeting1);

    const meeting2: MeetingDetails = {
      dateTime: new Date('2022-04-27T22:30:00Z'),
      location: 'Woodcraft Store, Parkway Shopping Center',
      presenter: '',
      topic: 'Open discussion'
    }
    meetings.push(meeting2);

    const meeting3: MeetingDetails = {
      dateTime: new Date('2022-03-27T22:30:00Z'),
      location: 'Woodcraft Store, Parkway Shopping Center',
      presenter: '',
      topic: 'Open discussion'
    }
    meetings.push(meeting3);

    const meeting4: MeetingDetails = {
      dateTime: new Date('2022-02-27T23:30:00Z'),
      location: 'Woodcraft Store, Parkway Shopping Center',
      presenter: '',
      topic: 'Open discussion'
    }
    meetings.push(meeting4);

    const sortedMeetings = meetings.sort(this.sortByDateTime);
    return of(sortedMeetings);
  }

  getImages(): Observable<Array<ImageDetails>> {
    const links: Array<ImageDetails> = [
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0892.JPG",
        "thumbnailImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0892.JPG",
        "alt": "Description for Image 1",
        "title": "Shriner's Hospital 2018"
      },
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0890.JPG",
        "thumbnailImageSrc": "..../assets//images/2018-shriners-hospital/DSC_0890.JPG",
        "alt": "Description for Image 2",
        "title": "Shriner's Hospital 2018"
      },
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0886.JPG",
        "thumbnailImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0886.JPG",
        "alt": "Description for Image 3",
        "title": "Title 3"
      },
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0887.JPG",
        "thumbnailImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0887.JPG",
        "alt": "Description for Image 4",
        "title": "Title 4"
      },
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0888.JPG",
        "thumbnailImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0888.JPG",
        "alt": "Description for Image 5",
        "title": "Title 5"
      },
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0884.JPG",
        "thumbnailImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0884.JPG",
        "alt": "Description for Image 6",
        "title": "Title 6"
      },
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0876.JPG",
        "thumbnailImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0876.JPG",
        "alt": "Description for Image 7",
        "title": "Title 7"
      },
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0879.JPG",
        "thumbnailImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0879.JPG",
        "alt": "Description for Image 8",
        "title": "Title 8"
      },
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0880.JPG",
        "thumbnailImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0880.JPG",
        "alt": "Description for Image 9",
        "title": "Title 9"
      },
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0881.JPG",
        "thumbnailImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0881.JPG",
        "alt": "Description for Image 10",
        "title": "Title 10"
      },
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0882.JPG",
        "thumbnailImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0882.JPG",
        "alt": "Description for Image 10",
        "title": "Title 10"
      },
      {
        "previewImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0885.JPG",
        "thumbnailImageSrc": "../../assets/images/2018-shriners-hospital/DSC_0885.JPG",
        "alt": "Description for Image 11",
        "title": "Title 11"
      },
    ];

    return of(links);
  }

  getLinks(): Observable<Array<CategoryLinkDetails>> {
    const links: Array<CategoryLinkDetails> = [
      { category: 'Wood Deals',
        linkDetails: [
          {
            companyName: 'Shady Lane Tree Farm',
            streetAddress: '5220 Shimerville Road',
            cityStateAddress: 'Emmaus, PA',
            contact: 'Louise & Mike Peters',
            phone: '610-965-5612',
            message: 'Please call',
            url: '',
          },
          {
            companyName: 'Fleetwood Lumber & Flooring',
            streetAddress: '27 Rapp Road',
            cityStateAddress: 'Fleetwood, PA',
            contact: 'Bill Burkert',
            phone: '610-944-8364',
            message: 'Please call. 5% Member\'s discount',
            url: '',
          },
          {
            companyName: 'Woodcraft',
            streetAddress: 'Parkway Shopping Center',
            streetAddress2: '1534 Lehigh Street',
            cityStateAddress: 'Allentown, PA',
            contact: '',
            phone: '610-351-2966',
            message: '',
            url: 'www.woodcraft.com',
          }
        ]
      },
      { category: 'Catalogs',
        linkDetails: [
          {
            companyName: 'Grizzly Industrial, Inc',
            url: 'www.grizzly.com',
          },
          {
            companyName: 'Rockler',
            url: 'www.rockler.com',
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

  private sortByDateTime(a: MeetingDetails, b: MeetingDetails) {
    if (a.dateTime < b.dateTime) {
        return 1;
    }
    if (a.dateTime > b.dateTime) {
        return -1;
    }
    return 0;
}
}
