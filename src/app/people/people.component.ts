import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model'
import { PostService } from '../post.service';
import { POSTS } from '../posts'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [ PostService ]

})
export class PeopleComponent implements OnInit {
  cat = 'people'
  postsToDisplay: Post[] =[];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postsToDisplay = this.postService.getPostByCategory(this.cat);
  }
}
