import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [ PostService ]
})
export class NewPostComponent implements OnInit {
  title: string;
  category: string;
  content: string;
  image: string;

  posts: Post[];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log(this.posts.length)
  }
  newPost(title, category, image, content){
    let userPost: Post = new Post(title, category, content, new Date(), image, this.posts.length)
    this.posts.push(userPost);
  }

}
