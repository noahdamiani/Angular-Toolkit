var app;

app.factory('FireBase', getFireBaseService);
function getFireBaseService($firebaseArray, $firebaseObject, $firebaseAuth) {
  return {
    getArray: function(url) {
      var ref = firebase.database().ref(url);
      return $firebaseArray(ref);
    },
    getObject: function(url) {
      var ref = firebase.database().ref(url);
      return $firebaseObject(ref);
    },
    authenticate: function() {
       var ref = firebase.database().ref(url);
       return $firebaseAuth(ref);
    },
    getLoggedInUser: function() {
      var user = localStorage.getItem('firebase:session::angular-roomies');
      if(user) {
        return JSON.parse(user);
      }
    },
    getSnapshot: function(url) {
      var ref = firebase.database().ref(url);
      ref.once("value").then(function(snapshot) {
            return 'test';
      });
    }
  }
}
