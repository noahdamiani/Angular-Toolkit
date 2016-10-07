app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'modules/home/home.html',
    controller: 'HomeController'
  })
  .state('notepad', {
    url: '/notepad',
    templateUrl: 'modules/notepad/notepad.html',
    controller: 'NotePadController'
  })
  .state('secure-share', {
    url: '/secure-share',
    templateUrl: 'modules/secure-share/secure-share.html',
    controller: 'DeadDropController'
  })
  .state('drop-view', {
    url: '/secure-share/:dropId',
    templateUrl: 'modules/secure-share/open.html',
    params: { dropId: { value: -1 } },
    controller: 'DropViewController'
  });
}]);