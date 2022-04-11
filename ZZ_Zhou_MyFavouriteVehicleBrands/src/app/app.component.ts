import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CarService } from '../app/services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 
  title = 'string';
  constructor(private carService: CarService) {
  this.title = "header 1";
  }
  ngOnInit(): void {
  }
}