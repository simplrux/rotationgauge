import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AnimationsService} from '../animations.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  set isTitle(value: boolean) {
    this.aService.showTitle = value;
  }
  set title(value: string) {
    this.aService.title = value;
  }

  webDevList: Array<Object>;
  webDesignList: Array<Object>;
  showItems: boolean;
  webDev: boolean;
  webDesign: boolean;
  constructor(public aService: AnimationsService) {
    this.isTitle = true;
    this.title = 'Skills';
  }

  ngOnInit() {
      this.webDevList = [
        {title: 'Angular JS/Typescript(2+)', exp: 20, speed: 0.4},
        {title: 'Javascript/ES6', exp: 20, speed: 0.4},
        {title: 'Typescript/OO JS', exp: 20, speed: 0.4},
        {title: 'CSS3', exp: 20, speed: 0.2},
        {title: 'HTML5', exp: 20, speed: 0.6},
        {title: 'Bootstrap/Grid', exp: 20, speed: 0.3},
        {title: 'Firebase/Cloud Functions', exp: 20, speed: 0.6},
        {title: 'Phonegap/Cordova', exp: 70, speed: 0.6},
        {title: 'NodeJS', exp: 20, speed: 1},
        {title: 'SQL', exp: 20, speed: 0.4},
        {title: 'NoSql', exp: 20, speed: 0.2},
        {title: 'PWA', exp: 20, speed: 0.8},
      ];

    this.webDesignList = [
      {title: 'Adobe Photoshop', exp: 20, speed: 0.4},
      {title: 'Adobe Illustrator', exp: 20, speed: 0.2},
      {title: 'Adobe After Effects', exp: 20, speed: 0.6},
      {title: 'Adobe Premiere', exp: 20, speed: 1},
      {title: 'Autodesk Maya', exp: 20, speed: 0.3},
      {title: 'Zeplin', exp: 20, speed: 0.3},
      {title: 'Adobe Animate', exp: 20, speed: 0.3}
      ];
  }

  slickChange(data) {
    console.log(data);
  }

  animateList(id) {
    if (id === 'webdesign') {
      id = this.webDesignList;
      go();
      setTimeout(() => {
        id[0].exp = 80;
        id[1].exp = 80;
        id[2].exp = 70;
        id[3].exp = 70;
        id[4].exp = 60;
        id[5].exp = 80;
        id[6].exp = 60;
      }, 200);
    }
    if (id === 'webdev') {
      id = this.webDevList;
      go();
      setTimeout(() => {
        id[0].exp = 80;
        id[1].exp = 90;
        id[2].exp = 90;
        id[3].exp = 80;
        id[4].exp = 90;
        id[5].exp = 90;
        id[6].exp = 50;
        id[7].exp = 80;
        id[8].exp = 90;
        id[9].exp = 80;
        id[10].exp = 80;
      }, 200);
    }

   function go() {
    //  setTimeout(() => {
    //   id.forEach(function (value, index) {
    //     id[index].exp = Math.floor(Math.random() * 100);
    //     id[index].speed = Math.random() * 1.5;
    //  });
    //  }, 100);
    id.forEach(function (value, index) {
      id[index].exp = 20;
      id[index].speed = Math.random() * 1.5;
   });
   }

  }

  ngAfterViewInit() {
  }
}
