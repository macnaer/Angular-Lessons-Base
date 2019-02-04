import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})
export class MainComponent {
    component = 'MAIN';

    newButton = false;
    newClass ="btn btn-primary";
    launch = "Rocket is ready!";
    rockerName = "";

    constructor(){
        setTimeout(()=>{
            this.newButton = true;
        }, 2000);
    }

    start(){
        this.launch = "Rocket launched!";
        this.newButton = false;
    }
    restart(event:Event){
        this.rockerName = (<HTMLInputElement>event.target).value;
    }
}
