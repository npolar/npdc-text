'use strict';
var npdcCommon = require('npdc-common');
var AutoConfig = npdcCommon.AutoConfig;

var angular = require('angular');

var app = angular.module('npdcTextApp', ['npdcCommon']);

app.controller('TextSearchController', require('./search/TextSearchController'));
app.controller('TextEditController', require('./edit/TextEditController'));

// Bootstrap ngResource models using NpolarApiResource
var resources = [
  {'path': '/text', 'resource': 'TextResource' }

];

resources.forEach(service => {
  // Expressive DI syntax is needed here
  app.factory(service.resource, ['NpolarApiResource', function (NpolarApiResource) {
  return NpolarApiResource.resource(service);
  }]);
});

// Routing
app.config(require('./router'));

app.config(($httpProvider, npolarApiConfig) => {
  var autoconfig = new AutoConfig("production");
  angular.extend(npolarApiConfig, autoconfig, { resources });
  console.debug("npolarApiConfig", npolarApiConfig);

  $httpProvider.interceptors.push('npolarApiInterceptor');
});

app.run(($http, npdcAppConfig, NpolarTranslate, NpolarLang) => {
  NpolarLang.setLanguages(['en']);
  NpolarTranslate.loadBundles('npdc-text');
  npdcAppConfig.toolbarTitle = 'Texts';
});
