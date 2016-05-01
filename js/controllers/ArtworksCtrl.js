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
    scope.changeArt = function(art) {
        scope.art = art;
        scope.currentIndex = this.works.indexOf(scope.art);
        console.log(scope.currentIndex);
    }
    scope.$watch('currentIndex', function() {
        scope.works.forEach(function(work) {
            work.visible = false;
            work.Status = 'none';
        });

        scope.works[scope.currentIndex].visible = true; // make the current image visible
        scope.works[scope.currentIndex].Status = 'active';
    });
}])

var ARTWORKS_DATA = [{
    src: 'images/artworks/artwork-2.jpg',
    srcIcon: 'images/artworks/artwork-icon-2.jpg',
    title: 'Pic 1'
  }, {
    src: 'images/artworks/artwork-1.jpg',
    srcIcon: 'images/artworks/artwork-icon-1.jpg',
    title: 'Pic 2'
  }, {
    src: 'images/artworks/artwork-3.jpg',
    srcIcon: 'images/artworks/artwork-icon-3.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/artworks/04.jpg',
    srcIcon: 'images/artworks/04-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/artworks/05.jpg',
    srcIcon: 'images/artworks/05-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/artworks/06.jpg',
    srcIcon: 'images/artworks/06-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/artworks/07.jpg',
    srcIcon: 'images/artworks/07-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/artworks/08.jpg',
    srcIcon: 'images/artworks/08-icon.jpg',
    title: 'Pic 3'
  }]