import { Injectable } from '@angular/core';

@Injectable()
export class TimeoutService {
    elementsShown = [];

  showElement(time) {
      if (this.elementsShown.indexOf(time) <= -1) {
          this.elementsShown.push(time);

          return setTimeout(() => {
            console.log(time);
            return true;
        }, time * 300);
      }
  }
}