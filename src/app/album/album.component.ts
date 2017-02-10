import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { ActivatedRoute } from "@angular/router";
import { Album } from './album.model';

@Component({
    selector: 'album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

    public albums: Array<Album>;
    public page: number;
    public search: string = '';
    public searching: boolean = false;
    public albumsPerPage: number = 1;


    constructor(
        private AlbumService: AlbumService,
        private currentRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.currentRoute.params
            .map(params => params['page'])
            .subscribe((page) => {
                this.page = page ? page : 1;
            });

        this.AlbumService.getAlbums().subscribe(
            data => {
                this.albums = data;
            }
        );
    }
    select(album: Album){

        this.search = album.title;
        this.searching = false;
    }
    searchFocus($event){
        $event.target.select();
        this.searching = true;
    }
}
