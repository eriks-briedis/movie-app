import { ApiClientService } from './../core/services';
import { Component, OnInit, Input } from '@angular/core';
import { MovieModel, QueryParams } from '../core/models';

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
    @Input() movies: Array<MovieModel>;
    @Input() queryParams: QueryParams = new QueryParams();

    constructor(private api: ApiClientService) { }

    ngOnInit() {
    }

    loadMore(event: Event) {
        event.preventDefault();
        this.queryParams.setNextPage();
        this.api.search(this.queryParams).subscribe((movies: Array<MovieModel>) => {
            this.movies = [
                ...this.movies,
                ...movies,
            ];
        });
    }
}
