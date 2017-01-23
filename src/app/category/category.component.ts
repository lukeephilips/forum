import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { NewPostComponent } from '../new-post/new-post.component'
import { PostService } from '../post.service'


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [PostService]

})
export class CategoryComponent implements OnInit {
  cat: string;
  postsToDisplay: Post[] =[];


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.cat = urlParametersArray['category'];
    });
    this.postsToDisplay = this.postService.getPostByCategory(this.cat);
  }

}
