import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

    public albums;
    public page: number;
    public search = '';


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

}
