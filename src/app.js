import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

// import Components from './components/components';

import { provideStates } from '../util/util';
import { routes } from './app.route';

let myApp = angular.module('app', [
  uiRouter,
]);

myApp.config(($stateProvider, $urlServiceProvider) => {
  provideStates(routes, $stateProvider);
  $urlServiceProvider.otherwise('/');
});
