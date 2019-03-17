import { MovieDetailsModel } from './../core/models';
import { ApiClientService } from './../core/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'movie-details',
    templateUrl: './movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {
    private movieDetails: MovieDetailsModel;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private api: ApiClientService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.api
                .findOne(params.get('id'))
                .subscribe((movieDetails: MovieDetailsModel) => {
                    this.movieDetails = movieDetails;
                })
        });
    }

}
