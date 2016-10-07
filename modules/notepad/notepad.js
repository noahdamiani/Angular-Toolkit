var clipboard = new Clipboard('.copy');

app.controller('NotePadController', function ($scope, FireBase) {
  FireBase.getObject('notepad').$bindTo($scope, "notes");
});
