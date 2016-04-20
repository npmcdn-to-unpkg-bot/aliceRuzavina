app.controller('ArtworksCtrl', ['$scope', '$routeParams', '$location', function(scope, $routeParams, $location) {
	scope.works = ARTWORKS_DATA;
    this.$location = $location;
	this.currentPath = $location.path();
    scope.currentIndex = 0; // Initially the index is at the first image
    scope.next = function() {
        scope.currentIndex < scope.works.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
    };
    scope.prev = function() {
        scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.works.length - 1;
    };
    scope.$watch('currentIndex', function() {
        scope.works.forEach(function(work) {
            work.visible = false;
        });

        scope.works[scope.currentIndex].visible = true; // make the current image visible
    });
}])

var ARTWORKS_DATA = [{
    src: 'images/artworks/artwork-2.jpg',
    title: 'Pic 1'
  }, {
    src: 'images/artworks/artwork-1.jpg',
    title: 'Pic 2'
  }, {
    src: 'images/artworks/artwork-3.jpg',
    title: 'Pic 3'
  }]