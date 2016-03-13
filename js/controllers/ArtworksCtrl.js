angular.module('alice').controller('ArtworksCtrl', ArtworksCtrl);

function ArtworksCtrl($routeParams, $location) {
	this.$location = $location;
	this.currentPath = $location.path();
}
