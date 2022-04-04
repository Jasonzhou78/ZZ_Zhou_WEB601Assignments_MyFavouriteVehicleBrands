import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { CarService } from '../services/content.service';
import { CarDialogContentComponent } from '../car-dialog-content/car-dialog-content.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  constructor(public dialog: MatDialog) { }
 openDialog() {
    const dialogRef = this.dialog.open(CarDialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
  ngOnInit() {};
  
  }
