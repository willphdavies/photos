import { Component, OnInit, Input } from '@angular/core';
import {AlbumService} from "../album.service";
import {Album} from "../album.model";

@Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

    @Input('album') album: Album;

    private AlbumService: AlbumService;

    public photos;

    constructor(AlbumService: AlbumService) {
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
}
