angular.module('alice').controller('ProjectCtrl', ProjectCtrl);

function ProjectCtrl($routeParams, $location, ProjectService, $anchorScroll) {
    this.$anchorScroll = $anchorScroll;
    this.$location = $location;
    this.loc = this.$location;
    this.currentPath = $location.path();
    this.ProjectService = ProjectService;
    this.project = this.ProjectService.getProject($routeParams.projectId);
    this.photoshoot = this.project.Photoshoot;
    this.photoshootIcons = this.project.PhotoshootIcons;
    this.sketchbook = this.project.Sketchbook;
    this.sketchIcons = this.project.SketchIcons;
    this.currentIndex = 0;
    this.photo = this.project.Photoshoot[this.currentIndex];
    this.photo.visible = true;
    this.photoIcon = this.project.PhotoshootIcons[this.currentIndex];
    this.currentIndexSketch = 0;
    this.sketch = this.project.Sketchbook[this.currentIndexSketch];
    this.sketch.visible = true;
    this.changeIcon();
    this.changeIconSketch();
}

ProjectCtrl.prototype.changeIcon = function() {
    for(var i = 0; i<this.photoshootIcons.length; i++) {
        this.project.PhotoshootIcons[i].Status = 'none';
    }
    this.photoshootIcons[this.currentIndex].Status = 'active';   
}

ProjectCtrl.prototype.changeIconSketch = function() {
    for(var i = 0; i<this.sketchIcons.length; i++) {
        this.project.SketchIcons[i].Status = 'none';
    }
    this.sketchIcons[this.currentIndexSketch].Status = 'active'; 
}

ProjectCtrl.prototype.clickIcon = function(img) {
    this.img = img;
    this.currentIndex = this.photoshootIcons.indexOf(this.img);
    for(i = 0; i<this.photoshoot.length; i++) {
        this.photoshoot[i].visible = false;
        this.photo.visible = this.project.Photoshoot[i].visible;
    }
    this.photo = this.project.Photoshoot[this.currentIndex];
    this.photo.visible = true;
    this.changeIcon();
}

ProjectCtrl.prototype.clickIconSketch = function(sktch) {
    this.sktch = sktch;
    this.currentIndexSketch = this.sketchIcons.indexOf(this.sktch);
    for(i = 0; i<this.sketchbook.length; i++) {
        this.sketchbook[i].visible = false;
        this.sketch.visible = this.project.Sketchbook[i].visible;
    }
    this.sketch = this.project.Sketchbook[this.currentIndexSketch];
    this.sketch.visible = true;
    this.changeIconSketch();
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
    this.changeIcon();
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
    this.changeIcon();
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
    this.changeIconSketch();
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
    this.changeIconSketch();
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