import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDataPipe'
})
export class FilterDataPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
