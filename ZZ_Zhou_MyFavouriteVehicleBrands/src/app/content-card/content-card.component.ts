import { Content } from 'src/helper-files/content-interface';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  carBrand: Content[];
  constructor() { 
    this.carBrand = [
      {id: 1,
      title: 'BMW',
      description: 'German brand',
      creator: 'Karl Rapp',
      imgURL: 'https://lezebre.lu/images/detailed/17/30011-bmw-logo.png',
      type: 'Passenger car',
      tag: ['BMW','B']},
    
      {id: 2,
        title: 'Volvo',
        description: 'Sweden brand',
        creator: 'Assar Gabrielsson',
        imgURL: 'https://static.dezeen.com/uploads/2021/09/volvo_flat_logo_design_transport_dezeen_2364_col_sq_4.jpg',
        type: 'Passenger car and truck',
        tag: ['Vol','Volvo']},
    
      {id: 3,
        title: 'Toyota motors',
        description: 'Japanese brand',
        creator: 'Kiichiro Toyoda',
        imgURL: 'https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png',
        type: 'Passenger car',
        tag: ['T','Toyota']
      }
      ];
    for (let i = 0; i<3; i++) {
      /* myContentList = ContentList.addCars(carBrand[i]);  */
    };
  }

  ngOnInit(): void {
  }

}
