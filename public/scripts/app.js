/* globals angular */
angular.module('app', ['ngRoute'])
  .config([
    '$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

      $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html',
          controller: 'MessageCtrl',
          controllerAs: 'Messages'
        })
        .when('/topics', {
          templateUrl: '/templates/topics.html',
          controller: 'TopicsCtrl',
          controllerAs: 'Topics'
        })
        .when('/topics/:id', {
          templateUrl: '/templates/singleTopic.html',
          controller: 'SingleTopicCtrl',
          controllerAs: 'SingleTopic'
        })
        .when('/users', {
          templateUrl: '/templates/users.html',
          controller: 'UsersCtrl',
          controllerAs: 'user'
        })
        .when('/users/:id', {
          templateUrl: '/templates/singleUser.html',
          controller: 'singleUserCtrl',
          controllerAs: 'sngUser'
        })
        .when('/register', {
          templateUrl: '/templates/register.html',
          controller: 'registerCtrl',
        });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }])
  .run(['$rootScope',
    function($rootScope) {
      if (localStorage.user !== undefined) {
        $rootScope.user = localStorage.user;
        $rootScope.user_id = localStorage.user_id;
        $rootScope.loggedIn = true;
      } else {
        $rootScope.loggedIn = false;
      }
    }
  ]);