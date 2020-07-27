import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AnimationsService } from './animations.service';
import { ElementRef } from '@angular/core';


declare var slick: any;
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  bio: boolean;
  skills: boolean;
  chat: boolean;
  like: boolean;
  desktop: boolean;
  isIe: boolean;
  buildingsDeg: number;
  interval: any;
  routeName: string;
  hideStructure: boolean;
  get isTitle(): boolean {
    return this.aService.showTitle;
  }
  get title(): string {
    return this.aService.title;
  }
  @ViewChild('gaugeBg') gaugeBg: ElementRef;

  constructor(router: Router, public aService: AnimationsService) {
    router.events.subscribe(Event => {

      if (Event instanceof NavigationEnd) {
        if (Event.url !== '/') {
          this.indicate(Event.url.substr(1));
        }
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngAfterViewInit() {
    // this.showStructure = true;
  }

  ngOnInit() {
    this.isIe = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent)
    this.welcomeAnimation(50);
    // this.detectScroll();
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (width < 1024) {
      this.desktop = false;
    } else {
      this.desktop = true;
    }
  }

  handleScroll(pos) {
    const width = window.innerWidth;
    const el: HTMLElement = document.querySelector('.scrollbar');
    const inner: HTMLElement = document.querySelector('.scrollbar-inner');
    const build: HTMLElement = document.querySelector('.buildings');
    if (pos > 0) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
    if (width > 1024) {
      build.style.transform = `rotate(-${pos / 15}deg)`;
      el.style.transform = `rotate(${pos / 15}deg)`;
      build.style.transition = `1s transform`;

      inner.style.boxShadow = `1px 1px ${pos / 50}px #fff, 1px 1px ${pos / 50}px red`;
    } else {
      el.style.transform = `scaleY(${pos / 2000})`;
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const el: HTMLElement = document.getElementById('view-container');
    const pos = el.scrollTop;
    this.handleScroll(pos);
  }

  rotateGaugeBg(deg, s) {
    const el: HTMLElement = document.querySelector('.gauge-bg');
    const buildings: HTMLElement = document.querySelector('.buildings');
    buildings.style.transition = `2.5s transform`;
    el.style.transition = `${s} transform`;
    buildings.style.transform = `rotate(-${deg}deg)`;
    el.style.transform = `rotate(${deg}deg)`;
    clearInterval(this.interval);
    this.animateNumbers(deg);
  }

  animateNumbers(target: number) {
    let number = 0;
    let speed: any;
    if (target <= 90) {
      speed = 20;
    } else if (target <= 180) {
      speed = 10;
    } else if (target <= 270) {
      speed = 0.5;
    } else if (target <= 360) {
      speed = 0.2;
    }
    this.interval = setInterval(() => {
      this.buildingsDeg = number;
      if (number >= target) {
        clearInterval(this.interval);
      }
      number++;
    }, speed);
  }

  rotateGaugeNav(deg, s) {
    const el: HTMLElement = document.querySelector('.desktop-nav');
    el.style.transition = `${s} transform`;
    el.style.transform = `rotate(${deg}deg)`;
  }

  indicate(id) {
    $('.active').hide();
    $('.' + id + ' .active').fadeIn(50);
    if (id === 'bio') {
      this.bio = true;
      this.routeName = 'bio';
    } else {
      this.bio = false;
    }
    if (id === 'skills') {
      this.skills = true;
      this.routeName = 'skills';

    } else {
      this.skills = false;
    }
    if (id === 'like') {
      this.like = true;
      this.routeName = 'like';

    } else {
      this.like = false;
    }
    if (id === 'chat') {
      this.chat = true;
      this.routeName = 'chat';

    } else {
      this.chat = false;
    }
  }

  welcomeAnimation(delay) {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    setTimeout(() => {
      const el: HTMLElement = document.getElementById('app-gauge');
      el.style.opacity = '1';
      if (width > 1024) {
        this.rotateGaugeBg(0, '2s');
        this.rotateGaugeNav(0, '1s ease-in-out');
      }
    }, delay);
  }

}
