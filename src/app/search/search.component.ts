import { ApiClientService } from './../core/services';
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieModel, QueryParams } from '../core/models';

@Component({
    selector: "search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    placeholder: string = "Movie title";
    searchValue: string = "";
    @Output() movies = new EventEmitter<{movies: Array<MovieModel>, queryParams: QueryParams}>();

    searchForm = new FormGroup({
        searchValue: new FormControl('', Validators.required),
        type: new FormControl(''),
        year: new FormControl(''),
    });

    constructor(
        private api: ApiClientService
    ) {}

    ngOnInit() {}

    onSearch(event: Event) {
        event.preventDefault();

        if (!this.searchForm.valid) {
            return;
        }

        let queryParams = new QueryParams();
        queryParams.searchString = this.searchForm.value.searchValue;
        queryParams.type = this.searchForm.value.type;
        queryParams.year = this.searchForm.value.year;

        this.api
            .search(queryParams)
            .subscribe(this.onSearchRe.bind(this, queryParams));
    }

    private onSearchRe(queryParams: QueryParams, movies: Array<MovieModel>) {
        this.movies.emit({
            movies,
            queryParams
        });
    }
}
