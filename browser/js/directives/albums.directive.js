juke.directive('albumList', function() {
	return {
		restrict: "E",
		templateUrl: '/js/directives/templates/albums.html',
		scope: {
			allAlbums: "="
		},
		link: function(scope) {
		}
	}
})