import {Component} from 'angular2/core';
import {ExampleComponent} from '../../shared/example/example.component';

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

}
