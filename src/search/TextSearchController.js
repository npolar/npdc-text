'use strict';

function TextSearchController($scope, $controller, TextResource) {
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
    return {
      limit: 50,
      'size-facet':1000,
      fields: 'id,texts,bundle,code,updated,created,updated_by,created_by',
      facets: "code,bundle,texts.@language",
      score: true
    };
  };

  $scope.search(query());

  $scope.$on('$locationChangeSuccess', (event, data) => {
    $scope.search(query());
  });
}

module.exports = TextSearchController;
