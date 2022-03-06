import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(contentList: Content[], filterByThisType?: string): Content[] {
   
    return contentList.filter(checkType);
    function checkType(contentList: Content) {
      if (filterByThisType) {
        return contentList.type == filterByThisType;
      } else {
        return !contentList.type;
      }
    }
  }

}
