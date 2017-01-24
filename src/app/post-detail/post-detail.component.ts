import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service'


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {
  postId: number;
  post: Post;
  posts: Post[]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.postId = parseInt(urlParametersArray['id']);
    });
    this.post = this.postService.getPostById(this.postId);
  }
  editPost(clickedPost: Post) {
    this.router.navigate(['edit-post', clickedPost.id]);
  }
  deletePost(clickedPost: Post) {
    let posts: Post[] = this.postService.getPosts();
    let thisPost = posts.indexOf(this.post);
    if (window.confirm('are you sure?')) {
      posts.splice(thisPost, 1);
      this.router.navigate(['']);
    }
  }
  goToCategoryPage(clickedPost: Post) {
    this.router.navigate(['categories', clickedPost.category]);
  }
  upVote() {
    this.post.incrementScore()
  }
  downVote() {
    this.post.decrementScore()
  }

}
