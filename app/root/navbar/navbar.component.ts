import { Component, Input } from 'angular2/core';

@Component({
  selector: 'navbar',
  inputs: ['title'],
  template: `
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand">
          {{ title }}
        </a>
      </div>

      <ul class="nav navbar-nav">
        <li>
          <a href="https://github.com">
            github
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
