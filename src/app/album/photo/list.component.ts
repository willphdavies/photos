import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {AlbumService} from "../album.service";
import {Album} from "../album.model";
import {Photo} from '../photo.model';

@Component({
    selector: 'album-photo-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class AlbumPhotoListComponent implements OnInit {

    @Input('album') album: Album;

    private AlbumService: AlbumService;

    public photos;

    constructor(private router: Router,AlbumService: AlbumService) {
        this.AlbumService = AlbumService;
    }

    ngOnInit() {
        if (this.album) {
            this.AlbumService.getAlbumPhotos(this.album.id).subscribe(
                data => {
                    this.photos = data;
                },
                err => console.log(err)
            );
        }
    }
    open(photo: Photo){
        if (photo){
            this.router.navigate(['/photo', photo.id]);
        }
    }
}
