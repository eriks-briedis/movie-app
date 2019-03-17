import { TestBed } from '@angular/core/testing';

import { HttpClient } from "@angular/common/http";
import { ApiClientService } from './api-client.service';

describe('ApiClientService', () => {
    let httpClientSpy: { get: jasmine.Spy };

    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ApiClientService = new ApiClientService(<any> httpClientSpy);
        expect(service).toBeTruthy();
    });
});
