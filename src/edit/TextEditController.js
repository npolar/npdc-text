'use strict';

var TextEditController = function($scope, $controller, TextResource, formula, formulaAutoCompleteService,
  npdcAppConfig) {
  'ngInject';

  // EditController -> NpolarEditController
  $controller('NpolarEditController', {
    $scope: $scope
  });

  // Text -> npolarApiResource -> ngResource
  $scope.resource = TextResource;

  let formulaOptions = {
    schema: '//api.npolar.no/schema/text-1',
    form: 'edit/formula.json',
    language: 'en',
    templates: npdcAppConfig.formula.templates.concat([])
  };

  $scope.formula = formula.getInstance(formulaOptions);
  formulaAutoCompleteService.autocompleteFacets(['code', 'bundle', 'texts.@language'], TextResource, $scope.formula);

  $scope.edit();
};

module.exports = TextEditController;
