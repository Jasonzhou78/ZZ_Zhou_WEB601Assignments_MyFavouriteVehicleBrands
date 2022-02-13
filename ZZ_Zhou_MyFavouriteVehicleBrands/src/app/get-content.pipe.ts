import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Pipe({
  name: 'getContent'
})
export class GetContentPipe implements PipeTransform {
  
  transform(value: any, ...args: any[]): any {
    
    return null;
  }

}
