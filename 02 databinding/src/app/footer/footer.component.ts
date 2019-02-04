import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  title: string = "Footer";
  siteName: string = "example.com";
  online: number = 1234;

  getSiteName(){
    return this.siteName;
  }

  ngOnInit() {
  }

}
