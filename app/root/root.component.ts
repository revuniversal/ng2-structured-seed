import { Component } from 'angular2/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ExampleComponent } from '../shared/example/example.component';
import { ContentComponent } from './content/content.component';
import { Application } from "../application";

@Component({
  directives: [ContentComponent, NavbarComponent],
  selector: 'root',
  template: `
      <navbar title="{{app.title}}"></navbar>
      <div id="main" class="container-fluid">
          <div class="page-header">
            <h1>{{app.pageTitle}}</h1>
          </div>
          <content></content>
      </div>
  `,
  styles: [
    `
      #main {
        margin-top: 60px;
      }
    `
  ]
})
export class RootComponent {
  app :Application;

  constructor(app :Application) {
    this.app = app;
    this.app.pageTitle = 'This is where the page title goes';
  }
}
