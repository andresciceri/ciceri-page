import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagePipes'
})
export class PagePipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

@Pipe({
  name: 'reverse'
})
export class ReversePipe {
  transform(arr) {
    var copy = arr.slice();
    return copy.reverse();
  }
}
