import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../../helper-files/content-interface';
@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newCarEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newCar?: Content;
  constructor() { }

  ngOnInit(): void {
  }

  addCar(id: string, title: string, description: string, type: string, creator: string): void {
    this.newCar = {
      id: parseInt(id),
      title: title,
      description: description,
      type: type,
      creator: creator,
    };
    this.newCarEvent.emit(this.newCar);
  }

}
