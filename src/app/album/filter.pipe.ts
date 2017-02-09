import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import {Album} from './album.model';

@Pipe({
    name: 'albumFilter',
    pure: false
})
export class AlbumFilterPipe implements PipeTransform {
    transform(collection: Album[], term: string): Album[] {
        console.log(term);
        if (term && term.length>0) {
            return _.filter(collection, (item) => item.title.search(term) >= 0);
        } else {
            return collection;
        }
    }
}