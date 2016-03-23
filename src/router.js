'use strict';

var router = function($routeProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider.when('/:id', {
    template: '<npdc:formula></npdc:formula>',
    controller: 'TextEditController'
  }).when('/', {
    templateUrl: 'search/search.html',
    controller: 'TextSearchController',
    reloadOnSearch: false
  });
};

module.exports = router;
