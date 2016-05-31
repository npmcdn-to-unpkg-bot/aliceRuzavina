app.controller('PhotographyCtrl', ['$scope', '$routeParams', '$location', function(scope, $routeParams, $location) {
    scope.images = PHOTO_DATA;
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
    scope.changePhoto = function(photo) {
        scope.photo = photo;
        scope.currentIndex = this.images.indexOf(scope.photo);
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
}])

var PHOTO_DATA = [{
    src: 'images/photography/01.jpg',
    srcPhoto: 'images/photography/01-icon.jpg',
    title: 'Pic 1'
  }, {
    src: 'images/photography/02.jpg',
    srcPhoto: 'images/photography/02-icon.jpg',
    title: 'Pic 2'
  }, {
    src: 'images/photography/03.jpg',
    srcPhoto: 'images/photography/03-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/04.jpg',
    srcPhoto: 'images/photography/04-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/05.jpg',
    srcPhoto: 'images/photography/05-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/06.jpg',
    srcPhoto: 'images/photography/06-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/07.jpg',
    srcPhoto: 'images/photography/07-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/08.jpg',
    srcPhoto: 'images/photography/08-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/09.jpg',
    srcPhoto: 'images/photography/09-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/10.jpg',
    srcPhoto: 'images/photography/10-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/11.jpg',
    srcPhoto: 'images/photography/11-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/12.jpg',
    srcPhoto: 'images/photography/12-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/13.jpg',
    srcPhoto: 'images/photography/13-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/14.jpg',
    srcPhoto: 'images/photography/14-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/15.jpg',
    srcPhoto: 'images/photography/15-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/16.jpg',
    srcPhoto: 'images/photography/16-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/17.jpg',
    srcPhoto: 'images/photography/17-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/18.jpg',
    srcPhoto: 'images/photography/18-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/19.jpg',
    srcPhoto: 'images/photography/19-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/20.jpg',
    srcPhoto: 'images/photography/20-icon.jpg',
    title: 'Pic 3'
  }, {
    src: 'images/photography/21.jpg',
    srcPhoto: 'images/photography/21-icon.jpg',
    title: 'Pic 3'
  }]