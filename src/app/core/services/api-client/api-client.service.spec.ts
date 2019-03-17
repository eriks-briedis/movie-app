import { TestBed, getTestBed  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient } from "@angular/common/http";
import { ApiClientService } from './api-client.service';
import { QueryParams, MovieDetailsModel } from '../../models';

describe('ApiClientService', () => {
    let injector: TestBed;
    let service: ApiClientService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                ApiClientService
            ]
        });
        injector = getTestBed();
        service = injector.get(ApiClientService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it ('should return a an Observable<MovieModel[]>', () => {
        const dummyMovies = [
            {
                Title: 'Star Wars: Episode IV - A New Hope',
                Poster: 'poster.png',
                Type: 'movie',
                Year: 1977,
                imdbID: '123',
            },
            {
                Title: 'Star Trek',
                Poster: 'poster.png',
                Type: 'movie',
                Year: 2009,
                imdbID: '456',
            }
        ];

        const queryParams: QueryParams = new QueryParams();
        queryParams.type = 'movie';
        queryParams.searchString = 'star';

        service.search(queryParams).subscribe(movies => {
            expect(movies.length).toBe(2);
            expect(movies).toEqual(dummyMovies);
        });

        const req = httpMock.expectOne(service['formatRequest'](queryParams.getString()));
        expect(req.request.method).toBe('GET');
        req.flush({
            Search: dummyMovies,
            totalResults: 100
        });
    });

    it('should return Observable<MovieDetails>', () => {
        const dummyMovieDetails = {
            Title: 'Star Wars: Episode IV - A New Hope',
            Poster: 'poster.png',
            Plot: 'It\'s a trap!',
            imdbID: '123',
            Actors: '',
            Type: 'movie',
            Year: 1977
        };

        service.findOne('123').subscribe((movieDetails: MovieDetailsModel) => {
            expect(movieDetails).toEqual(dummyMovieDetails);
        });
        
        const req = httpMock.expectOne(service['formatRequest']('?i=123'));
        expect(req.request.method).toBe('GET');
        req.flush(dummyMovieDetails);
    });
});
