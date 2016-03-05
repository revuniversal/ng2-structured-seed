import {Component} from 'angular2/core';
import {Application} from "../../application";

@Component({
  selector: 'page-1',
  template: `<h2>Page 1 is not bad</h2>`
})
export class Page1Component {
  constructor(
    public app: Application
  ) {
    app.pageTitle = 'Page 1';
  }
}
