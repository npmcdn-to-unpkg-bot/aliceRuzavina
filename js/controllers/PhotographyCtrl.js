angular.module('alice').controller('PhotographyCtrl', PhotographyCtrl);

function PhotographyCtrl($routeParams, $location) {
	this.$location = $location;
	this.currentPath = $location.path();
}
