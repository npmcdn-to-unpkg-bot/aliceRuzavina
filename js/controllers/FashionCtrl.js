angular.module('alice').controller('FashionCtrl', FashionCtrl);

function FashionCtrl($routeParams, $location, ProjectService) {
	this.$location = $location;
	this.currentPath = $location.path();
	this.ProjectService = ProjectService;
	this.projects = this.ProjectService.getProjects();
}

FashionCtrl.prototype.goToProject = function(project) {
	this.$location.path('fashion-projects/' + project.ID);
}
