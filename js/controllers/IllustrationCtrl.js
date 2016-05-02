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
    scope.changeIll = function(ill) {
        scope.ill = ill;
        scope.currentIndex = this.images.indexOf(scope.ill);
        console.log(scope.currentIndex);
    }
    scope.$watch('currentIndex', function() {
        scope.images.forEach(function(image) {
            image.visible = false;
            image.Status = 'none';
        });

        scope.images[scope.currentIndex].visible = true; // make the current image visible
        scope.images[scope.currentIndex].Status = 'active';
    });
    console.log('ill');
}])

var ILLUSTRATION_DATA = [{
    src: 'images/illustration/ill-01.jpg',
    srcIcon: 'images/illustration/ill-01-icon.jpg'
  }, {
    src: 'images/illustration/ill-02.jpg',
    srcIcon: 'images/illustration/ill-02-icon.jpg'
  }, {
    src: 'images/illustration/ill-03.jpg',
    srcIcon: 'images/illustration/ill-03-icon.jpg'
  }, {
    src: 'images/illustration/ill-04.jpg',
    srcIcon: 'images/illustration/ill-04-icon.jpg'
  }, {
    src: 'images/illustration/ill-05.jpg',
    srcIcon: 'images/illustration/ill-05-icon.jpg'
  }, {
    src: 'images/illustration/ill-06.jpg',
    srcIcon: 'images/illustration/ill-06-icon.jpg'
  }, {
    src: 'images/illustration/ill-07.jpg',
    srcIcon: 'images/illustration/ill-07-icon.jpg'
  }, {
    src: 'images/illustration/ill-08.jpg',
    srcIcon: 'images/illustration/ill-08-icon.jpg'
  }, {
    src: 'images/illustration/ill-09.jpg',
    srcIcon: 'images/illustration/ill-09-icon.jpg'
  }, {
    src: 'images/illustration/ill-10.jpg',
    srcIcon: 'images/illustration/ill-10-icon.jpg'
  }]