juke.directive('songList', function (PlayerFactory, PlaylistFactory) {
	return {
		restrict: "E",
		templateUrl: '/js/directives/templates/songlist.html',
		scope: {
			songs: "="
		},
		link: function(scope) {

			scope.getCurrentSong = function () {
				return PlayerFactory.getCurrentSong();
			};

			scope.isPlaying = function (song) {
				return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			};

			scope.toggle = function (song) {
				if (song !== PlayerFactory.getCurrentSong()) {
					PlayerFactory.start(song, scope.songs);
				} else if ( PlayerFactory.isPlaying() ) {
					PlayerFactory.pause();
				} else {
					PlayerFactory.resume();
				}
			}

			scope.sortableTest = {
			    stop: function(event) {
			      console.log('updated')
			      PlaylistFactory.update();
			    }
  			}
		}
	}
});

juke.directive('doubleClick', function(PlayerFactory) {
	return {
		restrict: "A",
		scope: {
			//the "&" sets doubleClick to whatever doubleClick equals in the html
			doubleClick:"&",
		},
		link: function(scope,element) {
			//on "doubleclick", it runs the doubleClick function
			element.on('dblclick', function() {
				scope.doubleClick();
			})
		}
	}
});