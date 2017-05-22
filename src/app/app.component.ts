import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.template.html',
  styleUrls: ['./app.style.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent  { }
