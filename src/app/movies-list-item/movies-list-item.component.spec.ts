import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesListItemComponent } from './movies-list-item.component';

describe('MoviesListItemComponent', () => {
    let component: MoviesListItemComponent;
    let fixture: ComponentFixture<MoviesListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                MoviesListItemComponent 
            ],
            imports: [
                RouterTestingModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MoviesListItemComponent);
        component = fixture.componentInstance;
        component.movie = {
            Title: 'Test movie',
            Poster: 'poster.png',
            Type: 'Action',
            Year: 1990,
            imdbID: '12345'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
