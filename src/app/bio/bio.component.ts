import { Component, OnInit } from '@angular/core';
import {AnimationsService} from '../animations.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  set isTitle(value: boolean) {
    this.aService.showTitle = value;
  }
  set title(value: string) {
    this.aService.title = value;
  }
  constructor(public aService: AnimationsService) { 
    this.isTitle = true;
    this.title = 'Bio';
  }

  ngOnInit() {
  }

}
