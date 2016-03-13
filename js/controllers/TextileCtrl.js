angular.module('alice').controller('TextileCtrl', TextileCtrl);

function TextileCtrl($routeParams, $location) {
	this.$location = $location;
	this.currentPath = $location.path();
}
