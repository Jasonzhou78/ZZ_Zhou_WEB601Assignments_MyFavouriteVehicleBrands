import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Pipe({
  name: 'getContent'
})
export class GetContentPipe implements PipeTransform {
  
  transform(item: string): [] {
    
    return [];
  }

}
