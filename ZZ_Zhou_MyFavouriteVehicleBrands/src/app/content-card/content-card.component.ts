import { Content } from '../../helper-files/content-interface';
import { Component, Input, OnInit } from '@angular/core';
import { ContentListComponent } from '../content-list/content-list.component';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() car?: Content;
  
  constructor() {
    this.car = { id: 0, creator: '', title: '', description: '', drive: ''};
  }
    ngOnInit(): void {
  }

}
