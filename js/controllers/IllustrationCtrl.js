angular.module('alice').controller('IllustrationCtrl', IllustrationCtrl);

function IllustrationCtrl($routeParams, $location) {
	this.$location = $location;
	this.currentPath = $location.path();
}
