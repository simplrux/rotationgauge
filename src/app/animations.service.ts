import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  showTitle: boolean;
  title: string;
  constructor() {
    this.showTitle = true;
  }

}
