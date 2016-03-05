import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { RootComponent } from './root/root.component';
import { Application } from './application';

let app = new Application('Structured Seed');

bootstrap(RootComponent, [
  provide(Application, { useValue: app })
]);
