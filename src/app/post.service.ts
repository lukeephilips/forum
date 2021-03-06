import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts() {
    return POSTS;
  }
  getPostById(postId: number){
    for (var i = 0; i <= POSTS.length - 1; i++) {
      if (POSTS[i].id === postId) {
        return POSTS[i];
      }
    }
  }
  getPostByCategory(cat: string){
    var output: Post[] = [];
    for (var i = 0; i <= POSTS.length - 1; i++) {
      if (POSTS[i].category === cat) {
        output.push(POSTS[i]);
      }
    }
    return output;
  }

}
