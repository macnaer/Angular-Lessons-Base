import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";


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
  @ViewChild("BlogPost") BlogPost: ElementRef;

  AddPost(BlogTitle: HTMLInputElement) {
    console.log(this.BlogPost);
    this.onAddPost.emit({
      title: BlogTitle.value,
      post: this.BlogPost.nativeElement.value,
      author: this.postAuthor
    });
    this.postTitle = "";
    this.postContent = "";
    this.postAuthor = "";
  }


  constructor() {}

  ngOnInit() {}
}
