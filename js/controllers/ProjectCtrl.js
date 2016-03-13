angular.module('alice').controller('ProjectCtrl', ProjectCtrl);

function ProjectCtrl($routeParams, $location, ProjectService) {
	this.$location = $location;
	this.currentPath = $location.path();
	this.ProjectService = ProjectService;
	this.project = this.ProjectService.getProject($routeParams.projectId);
}
