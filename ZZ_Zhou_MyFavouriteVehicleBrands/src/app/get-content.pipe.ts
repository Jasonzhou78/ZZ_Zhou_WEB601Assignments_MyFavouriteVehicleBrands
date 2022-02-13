import { isNgTemplate } from '@angular/compiler';
import { Input, Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentListComponent } from './content-list/content-list.component';
@Pipe({
  name: 'getContent'
})
export class GetContentPipe implements PipeTransform {
   transform(inputType?: string): [] {
    return [];
    }
    
  } 

