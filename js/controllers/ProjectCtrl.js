app.controller('ProjectCtrl', ['$scope', '$routeParams', '$location', 'ProjectService', function(scope, $routeParams, $location, ProjectService) {
	scope.ProjectService = ProjectService;
	scope.project = scope.ProjectService.getProject($routeParams.projectId);
	scope.photoshoot = scope.project.Photoshoot;
	scope.sketchbook = scope.project.Sketchbook;
	scope.currentIndex = 0; 
	scope.next = function() {
        scope.currentIndex < scope.photoshoot.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
    };
    scope.prev = function() {
        scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.photoshoot.length - 1;
    };
    scope.$watch('currentIndex', function() {
        scope.photoshoot.forEach(function(photo) {
        photo.visible = false; // make every image invisible
        });
        scope.photoshoot[scope.currentIndex].visible = true;
    });
    scope.currentIndexSketch = 0;
    scope.nextSketch = function() {
        scope.currentIndexSketch < scope.sketchbook.length - 1 ? scope.currentIndexSketch++ : scope.currentIndexSketch = 0;
    };
    scope.prevSketch = function() {
        scope.currentIndexSketch > 0 ? scope.currentIndexSketch-- : scope.currentIndexSketch = scope.sketchbook.length - 1;
    };
    scope.$watch('currentIndexSketch', function() {
        scope.sketchbook.forEach(function(sketch) {
            sketch.visible = false; // make every image invisible
        });
        scope.sketchbook[scope.currentIndexSketch].visible = true;
    });
}])