import angular from 'angular';
import '@uirouter/angularjs';

angular.module('olympics', ['ui.router'])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/sports');

        $stateProvider
            .state('sports', {
                url: '/sports',
                templateUrl: 'sports/sports-nav.html'
            })
            .state('sports.medals', {
                url: '/:sportName',
                templateUrl: 'sports/sports-medals.html',
            })
    })
    .controller('sportsController', function($http) {
        $http.get('/sports').then((response) => {
            this.sports = response.data;
        });
    });