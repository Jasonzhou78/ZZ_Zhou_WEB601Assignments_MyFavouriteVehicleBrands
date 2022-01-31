import { Component, OnInit } from '@angular/core';
import { ContentList } from 'src/helper-files/content-list';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
export class ContentCardComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
