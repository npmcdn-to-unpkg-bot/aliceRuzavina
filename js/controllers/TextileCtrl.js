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
    console.log('text');
});
}])

var WORKS_DATA = [{
    src: 'images/textiles/sample1.jpg',
    title: 'Sample 1'
  }, {
    src: 'images/textiles/sample2.jpg',
    title: 'Sample 2'
  }, {
    src: 'images/textiles/sample3.jpg',
    title: 'Sample 3'
  }, {
    src: 'images/textiles/sample4.jpg',
    title: 'Sample 4'
  }, {
    src: 'images/textiles/sample5.jpg',
    title: 'Sample 5'
  }, {
    src: 'images/textiles/sample6.jpg',
    title: 'Sample 6'
  }]