import { Component } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "main.component.html",
  styleUrls: ["main.component.css"]
})
export class MainComponent {
  component = "MAIN";

  newButton = false;
  newClass = "btn btn-primary";
  launch = "Rocket is ready!";
  rockerName = "";
  roketStatus = Math.random() > 0.5 ? "Online" : "Offline";

  btnPressed = false;

  user = "Bob";

  persons = ["Bill", "Jack", "Stive" ];

  constructor() {
    setTimeout(() => {
      this.newButton = true;
    }, 2000);
  }

  start() {
    this.launch = "Rocket launched!";
    this.newButton = false;
    this.btnPressed = true;
  }
  restart(event: Event) {
    this.rockerName = (<HTMLInputElement>event.target).value;
  }
  getColor() {
    return this.roketStatus === "Online" ? "Green" : "Red";
  }
  addPerson(){
    this.persons.push(this.user);
  }
}
