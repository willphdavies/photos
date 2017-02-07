import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Album} from './album.model';
import {Photo} from './photo.model';

@Injectable()
export class AlbumService {

    private albumUrl = 'https://jsonplaceholder.typicode.com/albums';
    private photoUrl = 'https://jsonplaceholder.typicode.com/photos';

    constructor(private http: Http) {

    }

    getAlbums() : Observable<Album[]>{
        return this.http.get(this.albumUrl)
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getAlbum(albumId: number) : Observable<Album>{
        return this.http.get(this.albumUrl+'/'+albumId)
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getAlbumPhotos(albumId: number) : Observable<Photo[]>{
        return this.http.get(this.albumUrl+'/'+albumId +'/photos')
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getPhotos() : Observable<Photo[]>{
        return this.http.get(this.photoUrl)
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getPhoto(photoId: number) : Observable<Photo>{
        return this.http.get(this.photoUrl+'/'+photoId)
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}
