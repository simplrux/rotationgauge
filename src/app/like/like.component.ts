import { Component, OnInit } from '@angular/core';
import { AnimationsService } from '../animations.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  set isTitle(value: boolean) {
    this.aService.showTitle = value;
  }
  set title(value: string) {
    this.aService.title = value;
  }
  constructor(public aService: AnimationsService) {
    this.isTitle = true;
    this.title = 'Like Me!';
   }

  ngOnInit() {
  }

}
