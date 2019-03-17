import { MovieModel } from './Movie';

export interface SearchResponse {
    Response: Boolean;
    Search: Array<MovieModel>;
    totalResults: Number;
}