import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../services/content.service';
import { Content } from '../../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})

export class ContentListComponent implements OnInit {
  searchMessage: string;
  searchFlag: boolean;
  listOfCars: Content[];
  idNumber:number = 2;
  specificCarById: Content[];
  checkMessage = false;
  constructor(private carService: CarService) {
    this.listOfCars = [];
    this.specificCarById = [];
    this.searchMessage = '';
    this.searchFlag = false;
    /* console.log("The list of cars: ")
    console.log(this.listOfCars); */
   }

  ngOnInit(): void {
    this.carService.getContentObs().subscribe(carArray => this.listOfCars = carArray); 
    // asynchronous call, using a larger structured arrow function, which effectively works the same
    this.carService.getContentObs().subscribe(carArray => {
      return this.listOfCars = carArray; // access bunch of food in the AppComponent object scope
    });
    this.checkMessage = false;
    this.carService.getContentById(this.idNumber).subscribe(carArray => {
      return this.listOfCars = carArray; // access bunch of food in the AppComponent object scope
    });
    
  }
  checkForTitle(searchValue: string): void{
    let searchList = '';//this.searchList.filter(c => c.title == searchValue);
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
