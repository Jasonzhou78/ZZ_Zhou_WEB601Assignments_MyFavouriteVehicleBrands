import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../services/content.service';
import { Content } from '../../helper-files/content-interface';
import { Message }from '../../helper-files/message-interface';
import { MessageService  } from '../services/message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})

export class ContentListComponent implements OnInit {
  searchMessage: string;
  searchFlag: boolean;
  listOfMessages: Message[];
  listOfCars: Content[];
  specificCar: Content[];
  id:number;
  messageOne:string;
  messageTwo:string;
  constructor(private carService: CarService, private messageService: MessageService) {
    this.listOfCars = [];
    this.searchMessage = '';
    this.searchFlag = false;
    this.specificCar = [];
    this.listOfMessages = [];
    this.id = 3;
    this.messageOne = "";
    this.messageTwo = "";
   }

  ngOnInit(): void {

    this.messageService.getMessageObs().subscribe(messageArray => this.listOfMessages = messageArray); 

    this.carService.getContentObs().subscribe(carArray => this.listOfCars = carArray); 
    // asynchronous call, using a larger structured arrow function, which effectively works the same

    this.carService.getContentById(this.id).subscribe(carArray => this.specificCar = carArray);


    if (this.listOfCars.length > 0) {
        this.messageOne = this.listOfMessages[0].description;
    }
    if(this.specificCar.length > 0) {
      this.messageTwo = this.listOfMessages[1].description + this.id;
    }else {
      this.messageTwo = "Cannot find the car";
    }
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