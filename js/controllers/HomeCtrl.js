angular.module('alice').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($routeParams, $location, $scope) {
	this.$location = $location;
	this.currentPath = $location.path();
}

HomeCtrl.prototype.reloadPage = function() {
	console.log("works");
    window.location.reload();
}