import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private title1: Title, private router: Router) {
    }

    title = 'app works!';

    ngOnInit() {
        this.title = this.title1.getTitle();
        this.router.events.subscribe((val) => {
            this.title = this.title1.getTitle();
        })
    }
}
