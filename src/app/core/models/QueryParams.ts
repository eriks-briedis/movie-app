import { SearchResponse } from './SearchResponse';

export class QueryParams {
    type: string = '';
    searchString: string = '';
    year?: number = null;
    page: number = 1;
    hasNextPage: boolean = false;

    setNextPage() {
        this.page++;
    }

    getString(): string {
        let queryString = '';
        if (this.searchString) {
            queryString += `?s=${this.searchString}`;
        }

        if (this.type) {
            queryString += `&type=${this.type}`;
        }

        if (this.year) {
            queryString += `&y=${this.year}`;
        }

        return `${queryString}&page=${this.page}`;
    }

    setHasNextPage(response: SearchResponse) {
        this.hasNextPage = response.totalResults > response.Search.length * this.page;
    }
}