import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';



@Component({

  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [ PostService ]
})
export class NewPostComponent implements OnInit {
  posts: Post[];

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
  newPost(title, category, image, content){
    let userPost: Post = new Post(title, category, content, new Date(), image, this.posts.length)
    this.posts.push(userPost);
    this.router.navigate(['']);
  }

}
