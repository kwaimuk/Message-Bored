/* globals angular */
angular.module('app', ['ngRoute'])
  .config([
    '$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){

      $routeProvider
        .when('/', {
          templateUrl: '/templates/home.html',
          controller: 'TopicsCtrl',
          controllerAs: 'Topics'
        })
        .when('/login', {
          templateUrl: '/templates/login.html',
          controller: 'UsersCtrl'
          // controllerAs: 'Users'
        })
        .when('/users', {
          templateUrl: '/templates/users.html',
          controller: 'UsersCtrl',
          controllerAs: 'Users'
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
        .when('/messages', {
          templateUrl: '/templates/messages.html',
          controller: 'MessageCtrl',
          controllerAs: 'Messages'
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