import * as photo from './photo';
import {AlbumComponent} from "./album.component";
import {AlbumService} from "./album.service";


export * from './album.component';
export * from './album.service';
export * from './album.model';
export * from './photo.model';

export const Photos = photo;
export const Components = [
    AlbumComponent,
    ...Photos.Components
];
export const Providers = [
    AlbumService
];