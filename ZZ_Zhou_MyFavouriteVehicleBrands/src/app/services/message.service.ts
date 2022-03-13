import { Injectable, Input } from '@angular/core';
import { Message } from '../../helper-files/message-interface';
import { Observable, of } from 'rxjs';
import { LISTOFMESSAGES } from '../../helper-files/MessageDB';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  constructor() { }
  getMessage(): Message[] {
    return LISTOFMESSAGES;
  }

  getMessageObs():Observable<Message[]> {
    return of(LISTOFMESSAGES);
  }

  getMessageById(id: number):Observable<Message[]> {
    return of(LISTOFMESSAGES.filter(item => item.id == id));
  }
}
