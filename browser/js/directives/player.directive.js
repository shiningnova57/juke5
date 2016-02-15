juke.directive('footer', function() {
	return {
		restrict: "E",
		templateUrl: '/js/directives/templates/player.html',
		link: function(scope) {
			
		}
	}
})

juke.directive('songName', function() {
	return {
		restrict: "E",
		template: '<div id= "songname">{{getCurrentSong().name}}</div>'

	}
})