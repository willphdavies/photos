import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent} from './app.component';
import {Ng2PaginationModule} from './pagination';
import  * as Albums from './album';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

const appRoutes: Routes = [
    { path: 'photo/:id', component: Albums.Photos.AlbumPhotoViewComponent },
    { path: 'page/:page', component: Albums.AlbumComponent },
    { path: '', component: Albums.AlbumComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        Ng2PaginationModule
    ],
    providers: [
        ...Albums.Providers
    ],
    declarations: [Material2AppAppComponent, ...Albums.Components, ...Albums.Pipes],
    entryComponents: [],
    bootstrap: [Material2AppAppComponent],
})
export class MaterialAppModule { }
