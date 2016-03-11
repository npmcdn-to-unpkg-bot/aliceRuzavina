angular.module('alice').controller('OtheWorkCtrl', OtherWorkCtrl);

function OtherWorkCtrl($routeParams, $location) {
	this.$location = $location;
	this.currentPath = $location.path();
}
