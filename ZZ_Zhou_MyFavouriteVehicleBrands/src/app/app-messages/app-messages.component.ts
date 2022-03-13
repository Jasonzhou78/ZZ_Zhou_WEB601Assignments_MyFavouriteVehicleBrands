import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.scss']
})
export class AppMessagesComponent implements OnInit {
  @Input() messageContent?:string;
  constructor() { }

  ngOnInit(): void {
  }

}
