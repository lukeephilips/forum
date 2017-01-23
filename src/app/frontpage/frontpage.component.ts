import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model'
import { PostService } from '../post.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css'],
  providers: [ PostService ]
})
export class FrontpageComponent implements OnInit {
  constructor(private router: Router, private postService: PostService) { }
  posts: Post[]

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
