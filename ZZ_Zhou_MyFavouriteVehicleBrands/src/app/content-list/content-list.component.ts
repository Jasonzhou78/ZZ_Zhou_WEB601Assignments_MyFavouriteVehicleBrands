import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/content.service';
import { Content } from '../../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})

export class ContentListComponent implements OnInit {
  searchMessage: string = "";
  searchFlag: boolean = false;
  listOfCars: Content[];
  constructor(private carService: CarService) {
    this.listOfCars = [];
   }

  ngOnInit(): void {
  }

  checkForTitle(searchValue: string): void{
    let searchList = '';//this.myList.filter(c => c.title == searchValue);
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
