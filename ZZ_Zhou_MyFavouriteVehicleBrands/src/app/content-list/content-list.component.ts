import { Component, OnInit } from '@angular/core';
import { Content } from '../../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  searchMessage: string = "";
  searchFlag: boolean = false;
  myList: Content[];
  constructor() {
    this.myList = [
      {id: 1,
      title: 'BMW motors',
      description: 'German brand',
      creator: 'Karl Rapp',
      imgURL: "",
      tags: ['i7','535'],
      },
      
      {id: 2,
        title: 'Volvo motors',
        description: 'Sweden brand',
        creator: 'Assar Gabrielsson',
        imgURL: "",
        tags: ['XC60','X70'],
        type: 'suv'
      },
    
      {id: 3,
        title: 'Toyota motors',
        description: 'Japanese brand',
        creator: 'Kiichiro Toyoda',
        imgURL: "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png",
        tags: ['Camry','Sienna']},

      {id: 4,
        title: 'Ford motors',
        description: 'American brand',
        creator: 'Henry Ford',
        imgURL: "https://www.carlogos.org/car-logos/ford-logo-2017.png",
        tags: ['Escape','F-150'],
        type: 'truck'},

      {id: 5,
        title: 'General motors',
        description: 'American brand',
        creator: 'Willians C. Durant',
        imgURL: "https://static.dezeen.com/uploads/2021/01/gm-logo-rebrand-electric-vehicles-design_dezeen_2364_col_0-1.gif",
        tags: ['Buick','GMC'],
        type: 'middle'},

      {id: 6,
        title: 'Audi motors',
        description: 'German brand',
        creator: 'August Horch',
        imgURL: "https://logowik.com/content/uploads/images/562_audi.jpg",
        tags: ['A4','A6']},

      {id: 7,
        title: 'Chrysler 300',
        description: 'American brand',
        creator: 'Walter P. Chrysler',
        imgURL: "https://logos-world.net/wp-content/uploads/2021/08/Chrysler-Logo-700x394.png",
        tags: ['300','dodge'],
        type: 'large'}  
    ];
   }

  ngOnInit(): void {
  }

  checkForTitle(searchValue: string): void{
    let searchList = this.myList.filter(c => c.title == searchValue);
    if (searchList.length > 0){
      this.searchMessage  = "Found the car!";
      this.searchFlag = true;
    }
    else{
      this.searchMessage  = "No car with that title";
      this.searchFlag = false;
    }
  }
  donothing(){

  }

}
