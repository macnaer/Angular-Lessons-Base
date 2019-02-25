import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor() { }

  posts: [{id: 1, title: "Title", post: "Post"}];

  ngOnInit() {
  }

}
