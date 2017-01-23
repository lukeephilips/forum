import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [PostService]

})
export class EditPostComponent implements OnInit {
  postId: number;
  post: Post;

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
  closeEdit() {
    this.router.navigate(['posts', this.post.id]);

  }

}
