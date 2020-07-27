import { Component, OnInit } from '@angular/core';
import {AnimationsService} from '../animations.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  set isTitle(value: boolean) {
    this.aService.showTitle = value;
  }
  set title(value: string) {
    this.aService.title = value;
  }
  constructor(public aService: AnimationsService) { 

    this.isTitle = true;
    this.title = 'Contact';

  }

  ngOnInit() {
  }

}
