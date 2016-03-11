angular.module('alice').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($routeParams, $location, worksService) {
	this.$location = $location;
	this.currentPath = $location.path();
}