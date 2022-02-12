import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

import { SplitButtonModule } from 'primeng/splitbutton';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { GalleriaModule } from 'primeng/galleria';
import { AccordionModule } from 'primeng/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MeetingsComponent } from './meetings/meetings.component';
import { NewletterComponent } from './newletter/newletter.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectsComponent } from './projects/projects.component';
import { MembersMartComponent } from './members-mart/members-mart.component';
import { WoodDealsComponent } from './wood-deals/wood-deals.component';
import { FriendsComponent } from './friends/friends.component';
import { LinksComponent } from './links/links.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingsComponent,
    NewletterComponent,
    GalleryComponent,
    ProjectsComponent,
    MembersMartComponent,
    WoodDealsComponent,
    FriendsComponent,
    LinksComponent,
    ContactComponent,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    SplitButtonModule,
    MenuModule,
    MenubarModule,
    TabMenuModule,
    MegaMenuModule,
    ButtonModule,
    TableModule,
    GalleriaModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
