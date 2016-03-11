angular.module('alice').controller('ProjectCtrl', ProjectCtrl);

function ProjectCtrl($routeParams, $location) {
	this.$location = $location;
	this.currentPath = $location.path();
}
