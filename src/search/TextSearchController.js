'use strict';

var TextSearchController = function($scope, $controller, TextResource) {
  'ngInject';

  $controller('NpolarBaseController', {
    $scope: $scope
  });
  $scope.resource = TextResource;
  $scope.searchOptions = {
    results: {
      title: 'code',
      subtitle: 'bundle'
    }
  };

  let query = function() {
    let defaults = {
      limit: "50",
      fields: 'id,texts,bundle,code,updated,created,updated_by,created_by',
      facets: "bundle,texts.@language",
      score: true
    };
    return Object.assign({}, defaults);
  };

  $scope.search(query());

  $scope.$on('$locationChangeSuccess', (event, data) => {
    $scope.search(query());
  });
};

module.exports = TextSearchController;
