import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { RootComponent } from './root/root.component';
import { Application } from './application';

let app = new Application('Structured Seed');

bootstrap(RootComponent, [
  ROUTER_PROVIDERS,
  provide(Application, { useValue: app })
]);
