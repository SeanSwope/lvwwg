import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MeetingsComponent } from './meetings/meetings.component';
import { NewsletterComponent } from './newletter/newletter.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GiveBackComponent } from './give-back/give-back.component';
import { MembersMarketComponent } from './members-market/members-market.component';
import { LinksComponent } from './links/links.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { InMemoryComponent } from './in-memory/in-memory.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { AdminNewslettersComponent } from './admin/newsletters/newsletters.component';
import { AdminMarketComponent } from './admin/market/market.component';
import { AdminMembersComponent } from './admin/members/members.component';
import { AdminGalleryComponent } from './admin/gallery/gallery.component';
import { AdminEmailComponent } from './admin/email/email.component';
import { AdminHomeComponent } from './admin/home/home.component';
import { AdminLinksComponent } from './admin/links/links.component';
import { AdminMeetingsComponent } from './admin/meetings/meetings.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingsComponent,
    NewsletterComponent,
    GalleryComponent,
    GiveBackComponent,
    MembersMarketComponent,
    LinksComponent,
    HomeComponent,
    ContactUsComponent,
    InMemoryComponent,
    AboutUsComponent,
    SignInComponent,
    ShowcaseComponent,
    AdminHomeComponent,
    AdminNewslettersComponent,
    AdminMarketComponent,
    AdminMembersComponent,
    AdminGalleryComponent,
    AdminEmailComponent,
    AdminLinksComponent,
    AdminMeetingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    SplitButtonModule,
    MenuModule,
    TabMenuModule,
    ButtonModule,
    TableModule,
    AccordionModule,
    InputTextModule,
    CheckboxModule,
    InputTextareaModule,
    DropdownModule,
    CarouselModule,
    DataViewModule,
    PasswordModule,
    CardModule,
    ScrollPanelModule,
    TabViewModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule,
    CalendarModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
