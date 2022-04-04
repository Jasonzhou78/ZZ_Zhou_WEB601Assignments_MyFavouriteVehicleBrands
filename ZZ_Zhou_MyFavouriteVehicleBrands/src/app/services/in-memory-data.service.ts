import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from "../../helper-files/content-interface";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {  
    LISTOFCARS: Content[] = [
    {id: 1,
    title: 'BMW motors',
    description: 'German brand',
    creator: 'Karl Rapp',
    imgURL: "https://lezebre.lu/images/detailed/17/30011-bmw-logo.png",
    tags: ['i7','535'],
    },
    
    {id: 2,
      title: 'Volvo motors',
      description: 'Sweden brand',
      creator: 'Assar Gabrielsson',
      imgURL: "https://static.dezeen.com/uploads/2021/09/volvo_flat_logo_design_transport_dezeen_2364_col_sq_4.jpg",
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

  constructor() { }

  createDb() {
    const car = this.LISTOFCARS;
    return {car};
  }
  genId(carList: Content[]): number {
    return carList.length > 0 ? Math.max(...carList.map(c =>
    c.id ?? 0)) + 1 : 0;
  }
}