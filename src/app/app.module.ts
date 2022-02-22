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
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MeetingsComponent } from './meetings/meetings.component';
import { NewsletterComponent } from './newletter/newletter.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectsComponent } from './projects/projects.component';
import { MembersMartComponent } from './members-mart/members-mart.component';
import { WoodDealsComponent } from './wood-deals/wood-deals.component';
import { FriendsComponent } from './friends/friends.component';
import { LinksComponent } from './links/links.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { InMemoryComponent } from './in-memory/in-memory.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingsComponent,
    NewsletterComponent,
    GalleryComponent,
    ProjectsComponent,
    MembersMartComponent,
    WoodDealsComponent,
    FriendsComponent,
    LinksComponent,
    HomeComponent,
    ContactUsComponent,
    InMemoryComponent,
    AboutUsComponent
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
    InputTextModule,
    CheckboxModule,
    InputTextareaModule,
    DropdownModule,
    CarouselModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
