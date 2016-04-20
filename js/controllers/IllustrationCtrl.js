app.controller('IllustrationCtrl', ['$scope', '$routeParams', '$location', function(scope, $routeParams, $location) {
	scope.images = ILLUSTRATION_DATA;
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
            image.visible = false;
        });

        scope.images[scope.currentIndex].visible = true; // make the current image visible
    });
    console.log('ill');
}])

var ILLUSTRATION_DATA = [{
    src: 'images/illustration/ill-01.jpg',
  }, {
    src: 'images/illustration/ill-02.jpg',
  }, {
    src: 'images/illustration/ill-03.jpg',
  }, {
    src: 'images/illustration/ill-04.jpg',
  }, {
    src: 'images/illustration/ill-05.jpg',
  }, {
    src: 'images/illustration/ill-06.jpg',
  }, {
    src: 'images/illustration/ill-07.jpg',
  }, {
    src: 'images/illustration/ill-08.jpg',
  }, {
    src: 'images/illustration/ill-09.jpg',
  }, {
    src: 'images/illustration/ill-10.jpg',
  }]