import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { PeopleComponent } from './people/people.component';
import { PlacesComponent } from './places/places.component';
import { MusicComponent } from './music/music.component';
import { TvComponent } from './tv/tv.component';
import { PostDetailComponent } from './post-detail/post-detail.component';





const appRoutes: Routes = [
  {
    path: '',
    component: FrontpageComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'places',
    component: PlacesComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'tv',
    component: TvComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
