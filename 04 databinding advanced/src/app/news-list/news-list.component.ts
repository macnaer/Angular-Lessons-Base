import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit {
  PostsArray: [{ title: string; post: string; author: string }] = [
    { title: "Test title", post: "Test content", author: "Bill" }
  ];

  postTitle = "";
  postContent = "";
  postAuthor = "";

  AddPost(){
    console.log("AddPOst");
    this.PostsArray.push({
      title: this.postTitle,
      post: this.postContent,
      author: this.postAuthor
    });
    this.postTitle = "";
    this.postContent = "";
    this.postAuthor = "";
  }

  constructor() {}

  ngOnInit() {}
}
