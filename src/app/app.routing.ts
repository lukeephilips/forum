import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CategoryComponent } from './category/category.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';


const appRoutes: Routes = [
  {
    path: '',
    component: FrontpageComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'categories/:category',
    component: CategoryComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  },
  {
    path: 'edit-post/:id',
    component: EditPostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
