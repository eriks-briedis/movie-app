import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiClientService } from './core/services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HomeComponent } from './home/home.component';
import { MoviesListItemComponent } from './movies-list-item/movies-list-item.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HeaderComponent } from './shared/layout/header/header.component';

import { SplitPipe } from './core/pipes/split.pipe';
import { AboutComponent } from './about/about.component';

const appRoutes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'movie/:id', component: MovieDetailsComponent
    },
    {
        path: 'about', component: AboutComponent
    },
];

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        MoviesListComponent,
        HomeComponent,
        MoviesListItemComponent,
        MovieDetailsComponent,
        HeaderComponent,
        SplitPipe,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
