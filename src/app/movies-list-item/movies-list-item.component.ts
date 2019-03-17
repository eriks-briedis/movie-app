import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../core/models';

@Component({
    selector: 'movies-list-item',
    templateUrl: './movies-list-item.component.html',
    styleUrls: ['./movies-list-item.component.scss']
})
export class MoviesListItemComponent implements OnInit {
    @Input() movie: MovieModel;
    
    constructor() { }

    ngOnInit() {
    }
}
