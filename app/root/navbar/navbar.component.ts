import { Component, Input } from 'angular2/core';
import { RouterLink } from 'angular2/router';

@Component({
  directives: [RouterLink],
  selector: 'navbar',
  inputs: ['title'],
  template: `
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand"
           [routerLink]="['Home']">
          {{ title }}
        </a>
      </div>

      <ul class="nav navbar-nav">
        <li>
          <a [routerLink]="['Page1']">
            Page 1
          </a>
        </li>
        <li>
          <a [routerLink]="['Page2']">
            Page 2
          </a>
        </li>
      </ul>
    </div>
  </nav>
  `
})

export class NavbarComponent {
  @Input()
  public title :String;
}
