import {Component} from 'angular2/core';
import {Application} from "../../application";

@Component({
  selector: 'page-2',
  template: `<h2>Much better than page 1</h2>`
})
export class Page2Component {
  constructor(
    public app: Application
  ) {
    app.pageTitle = 'Page 2';
  }
}
