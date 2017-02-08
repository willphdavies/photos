import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumService} from "../album.service";
import {Photo} from '../photo.model';

@Component({
    selector: 'album-photo-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class AlbumPhotoViewComponent implements OnInit {

    public photo: Photo;

    constructor(
        private router: Router,
        private currentRoute: ActivatedRoute,
        private AlbumService: AlbumService) {}

    ngOnInit() {
        this.currentRoute.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.AlbumService.getPhoto( id )
                    .subscribe( photo => this.photo = photo );
            });
    }
    home(){
        this.router.navigate([''])
    }
}
