import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit, OnDestroy {
  PostsArray: [{ title: string; post: string; author: string }] = [
    { title: "Test title", post: "Test content", author: "Bill" }
  ];

  updatePosts(PostsArray: { title: string; post: string; author: string }) {
    this.PostsArray.push(PostsArray);
  }
  DeletePost() {
    this.PostsArray.splice(0, 1);
  }
  ngOnDestroy(){
    console.log("OnDestroy");
  }
  ngOnInit() {}
}
