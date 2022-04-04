import { Content } from '../../helper-files/content-interface';
import { Component, Input, OnInit } from '@angular/core';
import { InMemoryDataService } from '../services/in-memory-data.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() car?: Content;
  
  constructor() {
    
  }
    ngOnInit(): void {
  }
  imageClicked(): void {
    console.log("ID: ", this.car?.id, ", Title: ", this.car?.title);
  }
}
