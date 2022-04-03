import { Component, OnInit } from '@angular/core';
import { Content } from '../../helper-files/content-interface';
import { CarService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  searchMessage: string = "";
  searchFlag: boolean = false;
  carList: Content[];
  constructor(private carService: CarService) {
    this.carList = [];
  }

  ngOnInit(): void {
    this.carService.getCarList().subscribe(list => {
      this.carList = list;
    });
  }

  checkForTitle(searchValue: string): void {
    let searchList = this.carList.filter(c => c.title == searchValue);
    if (searchList.length > 0) {
      this.searchMessage = "Found the movie!";
      this.searchFlag = true;
    }
    else {
      this.searchMessage = "No movie with that title";
      this.searchFlag = false;
    }
  }
  addContentToList(newContentItem: Content): void {
    // this.movieList.push(newContentItem);
    // this.movieList = [...this.movieList];

    this.carService.getCarList().subscribe(list => {
      this.carList = list;
    });
  }
}