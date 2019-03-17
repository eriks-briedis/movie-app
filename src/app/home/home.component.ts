import { Component, OnInit } from '@angular/core';
import { MovieModel, QueryParams } from '../core/models';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    private movies: Array<MovieModel>;
    private queryParams: QueryParams = new QueryParams();

    constructor() { }

    ngOnInit() {
    }

    onSearched(searchResponse: {movies: Array<MovieModel>, queryParams: QueryParams}) {
        this.movies = searchResponse.movies;
        this.queryParams = searchResponse.queryParams;
    }
}
