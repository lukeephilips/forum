import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { NewPostComponent } from '../new-post/new-post.component'
import { PostService } from '../post.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [PostService]

})
export class CategoryComponent implements OnInit {
  cat: string;
  posts: Post[] =[];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }

  ngOnInit() {
    console.log('hey')
    this.route.params.forEach((urlParametersArray) => {
      this.cat = urlParametersArray['category'];
    });
    this.posts = this.postService.getPostByCategory(this.cat);
  }
  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

}
