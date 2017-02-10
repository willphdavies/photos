import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'lengthGreaterThan',
    pure: false
})
export class LengthGreaterThanPipe implements PipeTransform {
    transform(collection: any[], length: number): boolean {
        return collection.length > length;
    }
}