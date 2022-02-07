import { Component, OnInit } from '@angular/core';
//import { Content } from 'src/helper-files/content-interface';
import { Content } from '../../helper-files/content-interface'
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  myList: Content[];
  constructor() {
    this.myList = [
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
        type: 'Passenger car'},

      {id: 4,
        title: 'Ford',
        description: 'American brand',
        creator: 'Henry Ford',
        imgURL: 'https://www.Ford.com',
        type: 'Passenger car and others'},

      {id: 5,
        title: 'General Motors',
        description: 'American brand',
        creator: 'Willians C. Durant',
        imgURL: 'https://www.gm.com',
        type: 'Passenger car and others'},

      {id: 6,
        title: 'Audi',
        description: 'German brand',
        creator: 'August Horch',
        imgURL: 'https://www.toyota.ca/toyota/en/',
        type: 'Passenger car'}
    ];
   }

  ngOnInit(): void {
  }

}
