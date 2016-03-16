app.controller('TextileCtrl', ['$scope', '$routeParams', '$location', function(scope, $routeParams, $location) {
	scope.images = WORKS_DATA;
	console.log(scope.images);
    this.$location = $location;
	this.currentPath = $location.path();
    scope.currentIndex = 0; // Initially the index is at the first image
    scope.next = function() {
        scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
    };
    scope.prev = function() {
        scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
    };
    scope.$watch('currentIndex', function() {
        scope.images.forEach(function(image) {
        image.visible = false; // make every image invisible
    });

    scope.images[scope.currentIndex].visible = true; // make the current image visible
});
}])

var WORKS_DATA = [{
    src: 'images/album_cover_riso.jpg',
    title: 'Pic 1'
  }, {
    src: 'images/pendant_hand.jpg',
    title: 'Pic 2'
  }, {
    src: 'images/expbody2.jpg',
    title: 'Pic 3'
  }]