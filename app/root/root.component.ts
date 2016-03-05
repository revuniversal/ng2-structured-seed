import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';

import { Application } from "../application";
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';


@Component({
  directives: [
    ContentComponent,
    NavbarComponent,
    RouterOutlet
  ],
  selector: 'root',
  template: `
      <navbar title="{{app.title}}"></navbar>

      <div id="main" class="container-fluid">
        <div class="page-header">
          <h1>{{app.pageTitle}}</h1>
       </div>
       <router-outlet></router-outlet>
      </div>
  `,
  styles: [`
      #main {
        margin-top: 40px;
      }
  `]
})
@RouteConfig([
  { name: 'Home', path: '/', component: ContentComponent },
  { name: 'Page1', path: '/page-1', component: Page1Component },
  { name: 'Page2', path: '/page-2', component: Page2Component },
])
export class RootComponent {
  constructor(
    public app :Application
  ) {
  }
}
