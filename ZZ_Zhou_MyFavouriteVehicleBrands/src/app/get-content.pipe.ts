import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getContent'
})
export class GetContentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
