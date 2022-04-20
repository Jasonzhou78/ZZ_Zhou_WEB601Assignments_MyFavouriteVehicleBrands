import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from '../../helper-files/content-interface';
import { CarService } from '../../app/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../app/services/message.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  car?: Content;
  constructor(private messageService: MessageService, private route: ActivatedRoute, private carService: CarService, private contentService: CarService) {}

  ngOnInit(): void {

    //paramMap is for retrieving a single value
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);
      this.carService.getSingleCar(this.id).subscribe(car => {
        this.car = car;
        this.messageService.add(`Car at id ${car.id} was retrieved, with a title of ${car.title}`)
      });
    });
  }

}
