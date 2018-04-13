import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import components from './components/components';
import template from './app.html';

let myApp = angular.module('app', [
  uiRouter,
  components
]);

myApp.config(($locationProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });
})
.component('app', {
  template
});
