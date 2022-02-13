/* import { isNgTemplate } from '@angular/compiler'; */
import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';
/* import { ContentListComponent } from './content-list/content-list.component'; */
@Pipe({
  name: 'getContent'
})
export class GetContentPipe implements PipeTransform {
   transform(myList: Content[]): Content[] {
    return myList.filter (f =>
      f.tags != null ? f.tags.length != 0 : false
    );
    }
    
  } 

