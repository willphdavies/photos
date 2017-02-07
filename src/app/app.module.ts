import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent, DialogContent} from './app.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { AlbumComponent } from './album/album.component';
import { AlbumService } from "./album/album.service";
import { PhotoComponent } from "./album/photo/photo.component";

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        Ng2PaginationModule
    ],
    providers: [
        AlbumService
    ],
    declarations: [Material2AppAppComponent, DialogContent, AlbumComponent, PhotoComponent],
    entryComponents: [DialogContent],
    bootstrap: [Material2AppAppComponent],
})
export class MaterialAppModule { }
