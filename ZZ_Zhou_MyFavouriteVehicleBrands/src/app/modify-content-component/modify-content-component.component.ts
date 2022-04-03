import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { CarService } from '../services/content.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  
  carListForCheckingValidId: Content[] =[];
  newContent: Content = {
    title: "", description: '', creator: '', type: undefined, id: 0,
  };
  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.carService.getCarList().subscribe(list => {
      this.carListForCheckingValidId = list;
    });
  }

  addContentFromChild(): void {
    if (this.tempId === "") {
      this.newContent.tags = this.tempTags.split(';');
      this.carService.addContent(this.newContent).subscribe((newContentFromServer) => {
        this.messageService.add("Car successfully added to the server!");
        this.newContentEvent.emit(newContentFromServer);
      });

      // this.newContentEvent.emit(this.newContent);
      this.newContent = {
        title: "", description: '', creator: '', type: undefined, id:0
      };
      this.tempId = "";
      this.tempTags = ""
      // this.errorMessage = "";
    }
    else {
      this.newContent.id = parseInt(this.tempId);
      if (this.newContent.id !== undefined
        && this.carListForCheckingValidId.some(movie => movie.id === this.newContent.id)) {
          this.newContent.tags = this.tempTags.split(';');
          this.carService.updateContent(this.newContent).subscribe(() => {
            this.messageService.add("Movie successfully updated on the server!");
            this.newContentEvent.emit(this.newContent);
          });
    
          // this.newContentEvent.emit(this.newContent);
          this.newContent = {
            title: "", description: '', creator: '', type: undefined, id:0
          };
          this.tempId = "";
          this.tempTags = ""
          // this.errorMessage = "";
    

      }
      
    }

  }
}
