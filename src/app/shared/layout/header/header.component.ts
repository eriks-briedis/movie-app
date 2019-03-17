import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    title: string = 'SEARCH MOVIES AND TV SHOWS';
    
    constructor() { }

    ngOnInit() {
    }

}
