angular.module('alice').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($routeParams, $location) {
	this.$location = $location;
	this.currentPath = $location.path();
}