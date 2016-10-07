$(document).foundation();

var config = {
  apiKey: "AIzaSyCY77wzcmkSuEdRi_5w7_nvWn0rc7RIpCE",
  authDomain: "1r-toolkit.firebaseapp.com",
  databaseURL: "https://1r-toolkit.firebaseio.com",
  storageBucket: "r-toolkit.appspot.com",
};

firebase.initializeApp(config);

var app = angular.module('app', [
  'ngLoadingSpinner',
  'firebase',
  'ui.router',
  'angularMoment'
]);

