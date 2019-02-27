import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-blog-single-post',
  templateUrl: './blog-single-post.component.html',
  styleUrls: ['./blog-single-post.component.css']
})
export class BlogSinglePostComponent implements OnInit {

  routeId: number;
  title: string;
  post: string;
  author: string;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.routeId = this.route.snapshot.params["id"];
    this.name = this.route.snapshot.params["name"];*/
    console.log("ActivatedRoute ", this.route.snapshot.params["id"]);
    this.route.params.subscribe((params: Params) =>{
      this.routeId = +params['id'];
      this.title = params['title'];
      this.post = params['post'];
      this.author = params['author'];
      console.log(params);
    })
  }


}
