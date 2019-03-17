import { environment } from './../../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {MovieModel, SearchResponse, QueryParams} from "../../models";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class ApiClientService {

    constructor(private http: HttpClient) {}

    search(queryParams: QueryParams): Observable<Array<MovieModel>> {
        return this.get(queryParams.getString())
            .pipe(map((response: SearchResponse) => {
                queryParams.setHasNextPage(response);
                return response.Search;
            }));
    }

    findOne(id: string): Observable<any> {
        return this.get(`?i=${id}`)
            .pipe(map((movieDetails: any) => {
                return movieDetails;
            }));
    }

    private get(queryString: string) {
        return this.http
            .get(this.formatRequest(queryString))
            .pipe(catchError(this.formatErrors));
    }

    private formatRequest(query: string): string {
        return `${environment.apiUrl}${query}&apikey=${environment.apiKey}`;
    }

    private formatErrors(error: any) {
        return throwError(error.error);
    }
}
