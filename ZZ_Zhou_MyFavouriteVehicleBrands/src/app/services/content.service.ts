import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Content } from '../../helper-files/content-interface';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
  };
  
  constructor(private messageService: MessageService, private http: HttpClient) { }

  addContent(newCar: Content): Observable<Content>{
    this.messageService.add("Going to add car to the server!");
    return this.http.post<Content>("api/car", newCar, this.httpOptions);
  }

  updateContent(oldCar: Content): Observable<any>{
    return this.http.put("api/car", oldCar, this.httpOptions);
    }

  getCarList(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return this.http.get<Content[]>("api/car");
  }

  getSingleCar(id: number): Observable<Content> {
    console.log("Retrieving a observable content item!");
    return this.http.get<Content>("api/car/" + id);
    // if (id < MOVIELIST.length && id >= 0)
    // {
    //   return of(MOVIELIST[id]);
      
    // }
    // else {
    //   this.messageService.add("id is invalid");
    // }
    
    // let filteredMovieList: Content[] = MOVIELIST.filter(movieItem => movieItem.id === id);
    // if the id is out of range, below 0 or above the length, the filter will return an empty array
    // if (filteredMovieList.length)
    // {
    //   this.messageService.add(`Content Item at id: ${id}`);
    //   return of(filteredMovieList[0]);
    // }
    // else {
    //   this.messageService.add("Invalid id number entered");
    //   return of({
    //     id: -1,
    //     title: "Invalid id entered",
    //     description: "n/a",
    //     creator: "nobody"
    //   });
    // }


  }
}