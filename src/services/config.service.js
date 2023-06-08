angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quiz-api-en.us-west-2.elasticbeanstalk.com/';

    return service;
}]);
