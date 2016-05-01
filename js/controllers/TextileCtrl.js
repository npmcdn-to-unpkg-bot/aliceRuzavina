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
        image.Status = 'none';
    });
    scope.changeTextile = function(textile) {
        scope.textile = textile;
        scope.currentIndex = this.images.indexOf(scope.textile);
        console.log(scope.textile);
    }

    scope.images[scope.currentIndex].visible = true; // make the current image visible
    scope.images[scope.currentIndex].Status = 'active';
    console.log('text');
});
}])

var WORKS_DATA = [{
    src: 'images/textiles/textiles-1.jpg',
    srcTextile: 'images/textiles/textiles-1-icon.jpg',
    title: 'Sample 1'
  }, {
    src: 'images/textiles/textiles-2.jpg',
    srcTextile: 'images/textiles/textiles-2-icon.jpg',
    title: 'Sample 2'
  }, {
    src: 'images/textiles/textiles-3.jpg',
    srcTextile: 'images/textiles/textiles-3-icon.jpg',
    title: 'Sample 3'
  }, {
    src: 'images/textiles/textiles-4.jpg',
    srcTextile: 'images/textiles/textiles-4-icon.jpg',
    title: 'Sample 4'
  }, {
    src: 'images/textiles/textiles-5.jpg',
    srcTextile: 'images/textiles/textiles-5-icon.jpg',
    title: 'Sample 5'
  }]