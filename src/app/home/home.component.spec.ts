import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MoviesListItemComponent } from './../movies-list-item/movies-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesListComponent } from './../movies-list/movies-list.component';
import { SearchComponent } from './../search/search.component';
import { HeaderComponent } from './../shared/layout/header/header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                HomeComponent, 
                HeaderComponent, 
                SearchComponent, 
                MoviesListComponent,
                MoviesListItemComponent
            ],
            imports: [
                FormsModule, 
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
