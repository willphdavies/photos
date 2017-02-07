import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { AlbumService } from './album.service';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss'],
    directives: [PhotoComponent]
})
export class AlbumComponent implements OnInit {

    private AlbumService: AlbumService;

    public albums;
    public search = '';


    constructor(AlbumService: AlbumService) {
        this.AlbumService = AlbumService
    }

    ngOnInit() {
        this.AlbumService.getAlbums().subscribe(
            data => {
                this.albums = data;
            }
        );
    }

    filterAlbums(filter: string){
        console.log(filter);
    }

}
