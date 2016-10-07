app.controller('DeadDropController', function ($scope, $state, FireBase) {
	$scope.makeTheDrop = function() {
		$scope.drops = FireBase.getArray('/drops');
		$scope.dropPass = Math.random().toString(36).slice(-8);
		$scope.drops.$add({
	        content: $scope.drop,
	        viewed: false,
	        password: $scope.dropPass
	    }).then(function(id){
	    	$('#dead-drop').hide();
	    	$('#instructions').show();
	    	$scope.dropId = id.path.o[1];
			$scope.dropUrl = window.location.href + '/' + $scope.dropId;
	    });
	};
});

app.controller('DropViewController', function ($scope, $state, FireBase){
	var id = $state.params.dropId;
	var ref = firebase.database().ref('/drops/' + id);

	$('.drop-wrap').fadeIn('slow');

	ref.once("value").then(function(snapshot) {
		if (snapshot.val() === null) {
			$('#error').show();
			$('#error p').html('The link is either broken or this drop has already been viewed. Sorry!');
		} else {
			$('#dead-drop').show();
		}
	});

	$scope.show = function() {
      ref.once("value").then(function(snapshot) {
	      if ($scope.password === snapshot.val().password && snapshot.val().viewed === false) {
	      	$('#contents textarea').val(snapshot.val().content);
	      	$('#dead-drop').hide();
	      	$('#contents').fadeIn();
	      	ref.remove();
	      } else {
	      	$('#error').show();
			$('#error p').html('You have entered an incorrect password. Please try again with the correct password.');
	      }
      });
	};
});
