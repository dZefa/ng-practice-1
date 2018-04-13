import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import homeComponent from './home.component';

let homeModule = angular.module('home', [ uiRouter ])
  .config(($stateProvider, $urlServiceProvider) => {
    $urlServiceProvider.rules.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      component: 'home',
    });
  })
  .component('home', homeComponent)
  .name;

export default homeModule;
