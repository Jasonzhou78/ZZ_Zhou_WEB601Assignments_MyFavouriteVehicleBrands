import { Content } from 'src/helper-files/content-interface';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  
  constructor() { 
    let myContentList = new ContentList;
    let carBrand: Content[];
    carBrand = [
      {id: 1,
      title: 'BMW',
      description: 'German brand',
      creator: 'Karl Rapp',
      imgURL: 'https://www.bmw.ca/en/home.html',
      type: 'Passenger car'},
    
      {id: 2,
        title: 'Volvo',
        description: 'Sweden brand',
        creator: 'Assar Gabrielsson',
        imgURL: 'https://www.volvocars.com/en-ca/build?gclid=Cj0KCQiA6NOPBhCPARIsAHAy2zB_NSgNlcUA26XF3YBSanzLt73lzBpjwR4ZhrTmheXhGSo1-1-D8YkaAkuAEALw_wcB&gclsrc=aw.ds',
        type: 'Passenger car and truck'},
    
      {id: 3,
        title: 'Toyota',
        description: 'Japanese brand',
        creator: 'Kiichiro Toyoda',
        imgURL: 'https://www.toyota.ca/toyota/en/',
        type: 'Passenger car'}
      ];
    for (let i = 0; i<3; i++) {
      myContentList = ContentList.addCars(carBrand[i]); 
    };
  }

  ngOnInit(): void {
  }

}
