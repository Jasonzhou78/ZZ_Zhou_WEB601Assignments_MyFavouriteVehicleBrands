import { Injectable } from '@angular/core';
import { Content } from '../../helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { LISTOFCARS } from 'src/helper-files/ContentDb';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  constructor() { }
  getContent(): Content[] {
    return LISTOFCARS;
  }

  getContentobs():Observable<Content[]> {
    return of(LISTOFCARS);
  }
}
