import {Component} from 'angular2/core';
import {ExampleComponent} from '../../shared/example/example.component';
import {Application} from "../../application";

@Component({
  directives: [ExampleComponent],
  selector: 'content',
  template: `
    <div class="container-fluid">
      <example class="text-success"></example>
    </div>
  `,
})
export class ContentComponent {
  constructor(
    public app: Application
  ) {
    app.pageTitle = 'Home Page';
  }
}
