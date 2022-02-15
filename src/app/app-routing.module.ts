import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { InMemoryComponent } from './in-memory/in-memory.component';
import { LinksComponent } from './links/links.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { NewsletterComponent } from './newletter/newletter.component';

// meetings
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'links', component: LinksComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'in-memory', component: InMemoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
