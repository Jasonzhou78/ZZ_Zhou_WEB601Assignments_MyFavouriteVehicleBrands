import { Component, OnInit } from '@angular/core';
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
  specificCar: Content[];
  id:number;
  messageOne:string;
  constructor(private carService: CarService) {
    this.listOfCars = [];
    this.searchMessage = '';
    this.searchFlag = false;
    this.specificCar = [];
    this.id = 3;
    this.messageOne = "Content array loaded!"
    /* console.log("The list of cars: ")
    console.log(this.listOfCars); */
   }

  ngOnInit(): void {
    this.carService.getContentObs().subscribe(carArray => this.listOfCars = carArray); 
    // asynchronous call, using a larger structured arrow function, which effectively works the same

    this.carService.getContentById(this.id).subscribe(carArray => this.specificCar = carArray);
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
