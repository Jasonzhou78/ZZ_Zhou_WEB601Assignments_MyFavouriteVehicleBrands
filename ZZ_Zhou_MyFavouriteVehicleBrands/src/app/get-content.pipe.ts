import { Content } from '../helper-files/content-interface';
import { Pipe, PipeTransform } from '@angular/core';
import { ContentListComponent } from './content-list/content-list.component';
@Pipe({
  name: 'getContent'
})
export class GetContentPipe implements PipeTransform {
 
  transform(typeValue:string): Content[] {
    let items?: Content[];
    for(let item in myList) {
      if(typeValue == item.type)
      items.push(item);
    }
   
    
    }    
  } 

