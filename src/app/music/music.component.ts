import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model'
import { PostService } from '../post.service';
import { POSTS } from '../posts'


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  providers: [ PostService ]

})
export class MusicComponent implements OnInit {
  cat = 'music'
  postsToDisplay: Post[] =[];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postsToDisplay = this.postService.getPostByCategory(this.cat);
    ;
  }
}
