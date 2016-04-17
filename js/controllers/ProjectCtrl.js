// app.controller('ProjectCtrl', ['$scope', '$routeParams', '$location', 'ProjectService', '$anchorScroll', function(scope, $routeParams, $location, ProjectService, $anchorScroll) {
// 	scope.ProjectService = ProjectService;
// 	scope.project = scope.ProjectService.getProject($routeParams.projectId);
// 	scope.photoshoot = scope.project.Photoshoot;
// 	scope.sketchbook = scope.project.Sketchbook;
// 	scope.currentIndex = 0;
//     scope.gotoPhotoshoot= function() {
//       $location.hash('photoshoot');
//       $anchorScroll();
//     };
//     scope.gotoConcept = function() {
//       $location.hash('concept');
//       $anchorScroll();
//     };
//     scope.gotoSketchbook = function() {
//       $location.hash('sketchbook');
//       $anchorScroll();
//     };


// 	scope.next = function() {
//         scope.currentIndex < scope.photoshoot.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
//     };
//     scope.prev = function() {
//         scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.photoshoot.length - 1;
//     };
//     scope.$watch('currentIndex', function() {
//         scope.photoshoot.forEach(function(photo) {
//         photo.visible = false; // make every image invisible
//         });
//         scope.photoshoot[scope.currentIndex].visible = true;
//     });
//     scope.currentIndexSketch = 0;


//     scope.nextSketch = function() {
//         scope.currentIndexSketch < scope.sketchbook.length - 1 ? scope.currentIndexSketch++ : scope.currentIndexSketch = 0;
//     };
//     scope.prevSketch = function() {
//         scope.currentIndexSketch > 0 ? scope.currentIndexSketch-- : scope.currentIndexSketch = scope.sketchbook.length - 1;
//     };
//     scope.$watch('currentIndexSketch', function() {
//         scope.sketchbook.forEach(function(sketch) {
//             sketch.visible = false; // make every image invisible
//         });
//         scope.sketchbook[scope.currentIndexSketch].visible = true;
//     });
// }])

angular.module('alice').controller('ProjectCtrl', ProjectCtrl);

function ProjectCtrl($routeParams, $location, ProjectService, $anchorScroll) {
    this.$anchorScroll = $anchorScroll;
    this.$location = $location;
    this.loc = this.$location;
    this.currentPath = $location.path();
    this.ProjectService = ProjectService;
    this.project = this.ProjectService.getProject($routeParams.projectId);
    this.photoshoot = this.project.Photoshoot;
    this.sketchbook = this.project.Sketchbook;
    this.currentIndex = 0;
    this.photo = this.project.Photoshoot[this.currentIndex];
    this.photo.visible = true;
    this.currentIndexSketch = 0;
    this.sketch = this.project.Sketchbook[this.currentIndexSketch];
    this.sketch.visible = true;
    this.stylesPhotoshoot= {"background": "rgba(200,200,200, 0.5"};
    this.stylesSketchbook= {"background": "rgba(200,200,200, 0.5"};
        console.log(this.project.Border);
}

ProjectCtrl.prototype.watch = function(image) {
    this.photoshoot.forEach(function(image) {
        photo.visible = false; // make every image invisible
    });
    this.photoshoot[this.currentIndex].visible = true;
}


ProjectCtrl.prototype.next = function() {
    if(this.currentIndex >= (this.photoshoot.length - 1)) {
        this.currentIndex = 0;
    } else {
        this.currentIndex++;
    }
    for(i = 0; i<this.photoshoot.length; i++) {
        this.photoshoot[i].visible = false;
        this.photo.visible = this.project.Photoshoot[i].visible;
    }
    this.photo = this.project.Photoshoot[this.currentIndex];
    this.photo.visible = true;
}

ProjectCtrl.prototype.previous = function() {
    if(this.currentIndex <= 0) {
        this.currentIndex = this.photoshoot.length - 1;
    } else {
        this.currentIndex--;
    }
    for(i = 0; i<this.photoshoot.length; i++) {
        this.photoshoot[i].visible = false;
        this.photo.visible = this.project.Photoshoot[i].visible;
    }
    this.photo = this.project.Photoshoot[this.currentIndex];
    this.photo.visible = true;
}

ProjectCtrl.prototype.nextSketch = function() {
    if(this.currentIndexSketch >= (this.sketchbook.length - 1)) {
        this.currentIndexSketch = 0;
    } else {
        this.currentIndexSketch++;
    }
    for(i = 0; i<this.sketchbook.length; i++) {
        this.sketchbook[i].visible = false;
        this.sketch.visible = this.project.Sketchbook[i].visible;
    }
    this.sketch = this.project.Sketchbook[this.currentIndexSketch];
    this.sketch.visible = true;
}

ProjectCtrl.prototype.previousSketch = function() {
    if(this.currentIndexSketch <= 0) {
        this.currentIndexSketch = this.sketchbook.length - 1;
    } else {
        this.currentIndexSketch--;
    }
    for(i = 0; i<this.sketchbook.length; i++) {
        this.sketchbook[i].visible = false;
        this.sketch.visible = this.project.Sketchbook[i].visible;
    }
    this.sketch = this.project.Sketchbook[this.currentIndexSketch];
    this.sketch.visible = true;
}

ProjectCtrl.prototype.gotoPhotoshoot = function($routeParams, $location, ProjectService, $anchorScroll) {
      this.loc.hash('photoshoot');
      this.$anchorScroll();
}
ProjectCtrl.prototype.gotoConcept = function($routeParams, $location, ProjectService, $anchorScroll) {
      this.loc.hash('concept');
      this.$anchorScroll();

}
ProjectCtrl.prototype.gotoSketchbook = function($routeParams, $location, ProjectService, $anchorScroll) {
      this.loc.hash('sketchbook');
      this.$anchorScroll();
}