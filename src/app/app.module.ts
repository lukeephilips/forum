import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';




import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { PeopleComponent } from './people/people.component';
import { PlacesComponent } from './places/places.component';
import { MusicComponent } from './music/music.component';
import { TvComponent } from './tv/tv.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    PeopleComponent,
    PlacesComponent,
    MusicComponent,
    TvComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
