import { Component, OnInit } from '@angular/core';
import { Content } from '../../helper-files/content-interface';
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
      title: 'BMW motors',
      description: 'German brand',
      creator: 'Karl Rapp',
      imgURL: "https://lezebre.lu/images/detailed/17/30011-bmw-logo.png",
      type: 'sport car',
      drive: 'Four',
      tags: ['i7','535']},
    
      {id: 2,
        title: 'Volvo motors',
        description: 'Sweden brand',
        creator: 'Assar Gabrielsson',
        imgURL: "https://static.dezeen.com/uploads/2021/09/volvo_flat_logo_design_transport_dezeen_2364_col_sq_4.jpg",
        type: 'truck',
        drive: 'Four',
        tags: ['XC60','X70']
      },
    
      {id: 3,
        title: 'Toyota motors',
        description: 'Japanese brand',
        creator: 'Kiichiro Toyoda',
        imgURL: "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png",
        type: 'Passenger car',
        drive: 'Two',
        tags: ['Camry','Sienna']},

      {id: 4,
        title: 'Ford motors',
        description: 'American brand',
        creator: 'Henry Ford',
        imgURL: "https://www.carlogos.org/car-logos/ford-logo-2017.png",
        type: 'truck',
        drive: 'Two',
        tags: ['Escape','F-150']},

      {id: 5,
        title: 'General motors',
        description: 'American brand',
        creator: 'Willians C. Durant',
        imgURL: "https://static.dezeen.com/uploads/2021/01/gm-logo-rebrand-electric-vehicles-design_dezeen_2364_col_0-1.gif",
        type: 'Passenger car',
        drive: 'Two',
        tags: ['Buick','GMC']},

      {id: 6,
        title: 'Audi motors',
        description: 'German brand',
        creator: 'August Horch',
        imgURL: "https://logowik.com/content/uploads/images/562_audi.jpg",
        type: 'sport car',
        drive: 'Four',
        tags: ['A4','A6']},

      {id: 7,
        title: 'Chrysler motors',
        description: 'American brand',
        creator: 'Walter P. Chrysler',
        imgURL: "https://logos-world.net/wp-content/uploads/2021/08/Chrysler-Logo-700x394.png",
        type: 'Passenger car',
        drive: 'Two',
        tags: ['300','dodge']}  
    ];
   }
   get carList(){
    return this.myList;
  }

  ngOnInit(): void {
  }

}
