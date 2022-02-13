import { Content } from '../../helper-files/content-interface';
import { Component, Input, OnInit } from '@angular/core';
import { ContentListComponent } from '../content-list/content-list.component';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
 /*  @Input() items: Content[]; */
  constructor() { 
    for (let i = 0; i<3; i++) {
      /* myContentList = ContentList.addCars(carBrand[i]);  */
    };
  }

  ngOnInit(): void {
  }

}
