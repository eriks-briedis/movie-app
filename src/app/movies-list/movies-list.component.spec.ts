import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesListItemComponent } from './../movies-list-item/movies-list-item.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesListComponent } from './movies-list.component';

describe('MoviesListComponent', () => {
    let component: MoviesListComponent;
    let fixture: ComponentFixture<MoviesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                MoviesListComponent,
                MoviesListItemComponent 
            ],
            imports: [
                RouterTestingModule,
                HttpClientModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MoviesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
