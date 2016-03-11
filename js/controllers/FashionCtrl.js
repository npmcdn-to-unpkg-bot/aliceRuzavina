angular.module('alice').controller('FashionCtrl', FashionCtrl);

function FashionCtrl($routeParams, $location) {
	this.$location = $location;
	this.currentPath = $location.path();
}
