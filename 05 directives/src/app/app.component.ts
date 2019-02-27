import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "directives";
  arr = [1, 2, 3, 4, 5, 65, 600];
  active = 1;
  onClick(item: number) {
    this.active = item;
  }
}
