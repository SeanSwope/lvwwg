import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem, SelectItemGroup } from 'primeng/api';
import { map, switchMap, Observable, of } from 'rxjs';
import { DatabaseResult } from '../models/database-result.model';
import { DonationDetail } from '../models/donation.model';
import { ImageDetail } from '../models/image.model';
import { CategoryLinkDetails, LinkDetail } from '../models/link.model';
import { MarketItem } from '../models/market-item.model';
import { MeetingDetails } from '../models/meeting-info.model';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  apiURL = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
  ) { }

  /* //upload file method
  uploadFile(file: any) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    //append any other key here if required
    return this.http.post(`<upload URL>`, formData);
  }

  //delete file method
  deleteAttachment(deleteList: Array<any>) {
    if (deleteList.length) {
      //for multiple delete do foreach here
      const body = { filename: deleteList[0].uploadname };
      const options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        responseType: 'blob'
      };
      return this.http.post(`<delete file api>`, body, options);
    }
  } */

  // **********************
  // Images
  // **********************
  createImage(imageDetail: ImageDetail, image: File): Observable<DatabaseResult> {
    console.log('createImage');
    const formData = new FormData();
    formData.append("file", image);

    return this.http.post<DatabaseResult>(this.apiURL + '/images/upload', formData).pipe(
      switchMap(uploadResult => {
        console.log(uploadResult);
        return this.http.post<DatabaseResult>(this.apiURL + '/images', imageDetail).pipe(
          map(result => {
            if (result.errorCode === 0 && uploadResult.errorCode !== 0) {
              result = uploadResult;
            }
            return result;
          })
        );
      })
    );
  }

  updateImage(imageDetail: ImageDetail, image: File): Observable<DatabaseResult> {
    console.log('updateImage');
    const formData = new FormData();
    formData.append("file", image);

    return this.http.post<DatabaseResult>(this.apiURL + '/images/upload', formData).pipe(
      switchMap(uploadResult => {
        console.log(uploadResult);
        return this.http.put<DatabaseResult>(this.apiURL + `/images/${imageDetail.id}`, imageDetail).pipe(
          map(result => {
            if (result.errorCode === 0 && uploadResult.errorCode !== 0) {
              // Don't report same file as an error
              if (uploadResult.errorCode === 1 && image.name !== imageDetail.imageSource) {
                result = uploadResult;
              }
            }
            return result;
          })
        )
      })
    );
  }

  deleteImage(imageDetail: ImageDetail): Observable<DatabaseResult> {
    return this.http.delete<DatabaseResult>(this.apiURL + `/images/${imageDetail.id}`).pipe(
      map(result => result as DatabaseResult)
    );
  }

  getAllImages(): Observable<Array<ImageDetail>> {
    return this.http.get<Array<ImageDetail>>(this.apiURL + '/images/bulk').pipe(
      map(results => results as Array<ImageDetail>)
    );
  }

  // **********************
  // Categories
  // **********************
  getAllCategories(): Observable<Array<{id: string, name: string}>> {
    return this.http.get<Array<{id: string, name: string}>>(this.apiURL + '/links/categories').pipe(
      map(results => results as Array<{id: string, name: string}>)
    );
  }

  // **********************
  // Links
  // **********************
  createLink(link: LinkDetail): Observable<DatabaseResult> {
    return this.http.post<DatabaseResult>(this.apiURL + '/links', link).pipe(
      map(result => result as DatabaseResult)
    );
  }

  updateLink(link: LinkDetail): Observable<DatabaseResult> {
    return this.http.put<DatabaseResult>(this.apiURL + `/links/${link.id}`, link).pipe(
      map(result => result as DatabaseResult)
    );
  }

  deleteLink(link: LinkDetail): Observable<DatabaseResult> {
    return this.http.delete<DatabaseResult>(this.apiURL + `/links/${link.id}`).pipe(
      map(result => result as DatabaseResult)
    );
  }

  getAllLinks(): Observable<Array<LinkDetail>> {
    return this.http.get<Array<LinkDetail>>(this.apiURL + '/links/bulk').pipe(
      map(results => results as Array<LinkDetail>)
    );
  }

  // **********************
  // Donations
  // **********************
  createDonation(donation: DonationDetail): Observable<DatabaseResult> {
    return this.http.post<DatabaseResult>(this.apiURL + '/donations', donation).pipe(
      map(result => result as DatabaseResult)
    );
  }

  updateDonation(donation: DonationDetail): Observable<DatabaseResult> {
    return this.http.put<DatabaseResult>(this.apiURL + `/donations/${donation.id}`, donation).pipe(
      map(result => result as DatabaseResult)
    );
  }

  deleteDonation(donation: DonationDetail): Observable<DatabaseResult> {
    return this.http.delete<DatabaseResult>(this.apiURL + `/donations/${donation.id}`).pipe(
      map(result => result as DatabaseResult)
    );
  }

  getAllDonations(): Observable<Array<DonationDetail>> {
    return this.http.get<Array<DonationDetail>>(this.apiURL + '/donations/bulk').pipe(
      map(results => {
        const dateResults: Array<DonationDetail> = [];
        results.forEach(dntn => {
          dntn.donationYear = new Date(dntn.donationYear);
          dateResults.push(dntn);
        })
        return dateResults;
      })
    );
  }

  // **********************
  // Members
  // **********************
  createMember(member: Member): Observable<DatabaseResult> {
    return this.http.post<DatabaseResult>(this.apiURL + '/members', member).pipe(
      map(result => result as DatabaseResult)
    );
  }

  updateMember(member: Member): Observable<DatabaseResult> {
    return this.http.put<DatabaseResult>(this.apiURL + `/members/${member.id}`, member).pipe(
      map(result => result as DatabaseResult)
    );
  }

  deleteMember(member: Member): Observable<DatabaseResult> {
    return this.http.delete<DatabaseResult>(this.apiURL + `/members/${member.id}`).pipe(
      map(result => result as DatabaseResult)
    );
  }

  getAllMembers(): Observable<Array<Member>> {
    return this.http.get<Array<Member>>(this.apiURL + '/members/bulk').pipe(
      map(results => results as Array<Member>)
    );
  }

  // **********************
  // Meetings
  // **********************
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

  /*
  getImages(): Observable<Array<ImageDetail>> {
    const imageDetails: Array<ImageDetail> = [
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
  */

  /*
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
  */

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
