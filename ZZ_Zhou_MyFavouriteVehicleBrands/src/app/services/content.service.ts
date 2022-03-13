import { Injectable, Input } from '@angular/core';
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

  getContentObs():Observable<Content[]> {
    return of(LISTOFCARS);
  }

  getContentById(id: number):Observable<Content[]> {
    return of(LISTOFCARS.filter(item => item.id == id));
  }
}
