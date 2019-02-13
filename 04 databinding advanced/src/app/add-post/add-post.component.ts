import { Component, OnInit, EventEmitter, Output } from "@angular/core";


@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent implements OnInit {
  postTitle = "";
  postContent = "";
  postAuthor = "";

  @Output() onAddPost = new EventEmitter<{title: string; post: string; author: string}>();

  AddPost() {
    this.onAddPost.emit({
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
