angular.module('carFire', ['ui.router', 'firebase'])
///step 2 set up routes
.config(function ($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('Cars', {
      url: '/cars',
      templateUrl: '/js/carsTmpl.html',
      controller: 'carsCtrl',

    })
    .state('Car', {
      url: '/cars/:carId',
      templateUrl: '/js/carTmpl.html',
      controller: 'carCtrl'

    });

$urlRouterProvider.otherwise('/cars');

});
