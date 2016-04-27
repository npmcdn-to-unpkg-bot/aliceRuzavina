app.service('ProjectService', ProjectService);

function ProjectService() {
	this.projects = PROJECTS_DATA;
}

ProjectService.prototype.getProjects = function() {
	return this.projects;

};

ProjectService.prototype.getProject = function(id) {
	return this.projects.filter(function(project) {return project.ID === id}) [0];
}

var PROJECTS_DATA = [{
	"ID": "tailoring",
	"Title": "Tailoring",
  "TitleImage": "images/tailoring/tailoring-title.png",
  "Border": "images/tailoring/tailoring-border.png",
	"ProjectImage": "images/tailoring/main-tailoring.jpg",
	"Concept": "descriptions/tailoring.html",
	"Photoshoot": [{
    "src": 'images/tailoring/photoshoot-1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/tailoring/photoshoot-2.jpg',
    "title": 'Photoshoot 2'
  }, {
    "src": 'images/tailoring/photoshoot-3.jpg',
    "title": 'Photoshoot 3'
  }],
  "PhotoshootIcons": [{
    "src": 'images/tailoring/photoshoot-icon-1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/tailoring/photoshoot-icon-2.jpg',
    "title": 'Photoshoot 2'
  }, {
    "src": 'images/tailoring/photoshoot-icon-3.jpg',
    "title": 'Photoshoot 3'
  }],
	"Sketchbook": [{
    "src": 'images/tailoring/research-1.jpg',
    "title": 'Research 1',
    "style": "'color': 'yellow'"
  }, {
    "src": 'images/tailoring/research-2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/tailoring/research-3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/tailoring/research-4.jpg',
    "title": 'Research 4'
  }],
  "SketchIcons": [{
    "src": 'images/tailoring/research-icon-1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/tailoring/research-icon-2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/tailoring/research-icon-3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/tailoring/research-icon-4.jpg',
    "title": 'Research 4'
  }]
}, {
	"ID": "bottega-veneta",
	"Title": "Sustainability",
  "TitleImage": "images/bottega-veneta/bottega-veneta-title.png",
  "Border": "images/bottega-veneta/bottega-veneta-border.png",
	"ProjectImage": "images/bottega-veneta/main-bv.jpg",
	"Concept": "descriptions/bottega-veneta.html",
	"Photoshoot": [{
    "src": 'images/bottega-veneta/photoshoot-1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/bottega-veneta/photoshoot-2.jpg',
    "title": 'Photoshoot 2'
  }, {
    "src": 'images/bottega-veneta/photoshoot-3.jpg',
    "title": 'Photoshoot 3'
  }],
  "PhotoshootIcons": [{
    "src": 'images/bottega-veneta/photoshoot-icon-1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/bottega-veneta/photoshoot-icon-2.jpg',
    "title": 'Photoshoot 2'
  }, {
    "src": 'images/bottega-veneta/photoshoot-icon-3.jpg',
    "title": 'Photoshoot 3'
  }],
	"Sketchbook": [{
    "src": 'images/bottega-veneta/research-1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/bottega-veneta/research-2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/bottega-veneta/research-3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/bottega-veneta/research-4.jpg',
    "title": 'Research 4'
  }, {
    "src": 'images/bottega-veneta/research-5.jpg',
    "title": 'Research 5'
  }],
  "SketchIcons": [{
    "src": 'images/bottega-veneta/research-icon-1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/bottega-veneta/research-icon-2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/bottega-veneta/research-icon-3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/bottega-veneta/research-icon-4.jpg',
    "title": 'Research 4'
  }, {
    "src": 'images/bottega-veneta/research-icon-5.jpg',
    "title": 'Research 5'
  }]
}, {
	"ID": "toile de joeux creatures",
  "seen": true,
	"Title": "Toile de Joeux Creatures",
  "TitleImage": "images/creatures/creatures-title2.png",
  "Border": "images/creatures/creatures-border.png",
	"ProjectImage": "images/creatures/main-creatures.jpg",
	"Concept": "descriptions/creatures.html",
	"Photoshoot": [{
    "src": 'images/creatures/photoshoot1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/creatures/photoshoot2.jpg',
    "title": 'Photoshoot 2'
  }],
  "PhotoshootIcons": [{
    "src": 'images/creatures/photoshoot-icon-1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/creatures/photoshoot-icon-2.jpg',
    "title": 'Photoshoot 2'
  }],
	"Sketchbook": [{
    "src": 'images/creatures/research-1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/creatures/research-2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/creatures/research-3.jpg',
    "title": 'Research 3'
  }],
  "SketchIcons": [{
    "src": 'images/creatures/research-icon-1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/creatures/research-icon-2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/creatures/research-icon-3.jpg',
    "title": 'Research 3'
  }]
}, {
	"ID": "accessory",
	"Title": "Accessory Project",
  "TitleImage": "images/accessory/accessory-title.png",
  "Border": "images/accessory/accessory-border.png",
	"ProjectImage": "images/accessory/main-accessory.jpg",
	"Concept": "descriptions/accessory.html",
	"Photoshoot": [{
    "src": 'images/accessory/photoshoot1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/accessory/photoshoot2.jpg',
    "title": 'Photoshoot 2'
  }],
  "PhotoshootIcons": [{
    "src": 'images/accessory/photoshoot-icon-1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/accessory/photoshoot-icon-2.jpg',
    "title": 'Photoshoot 2'
  }],
	"Sketchbook": [{
    "src": 'images/accessory/research1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/accessory/research2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/accessory/research3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/accessory/research4.jpg',
    "title": 'Research 4'
  }, {
    "src": 'images/accessory/research5.jpg',
    "title": 'Research 5'
  }],
  "SketchIcons": [{
    "src": 'images/accessory/research-icon-1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/accessory/research-icon-2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/accessory/research-icon-3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/accessory/research-icon-4.jpg',
    "title": 'Research 4'
  }, {
    "src": 'images/accessory/research-icon-5.jpg',
    "title": 'Research 5'
  }]
}, {
	"ID": "shirt",
	"Title": "Shirt Project",
  "TitleImage": "images/shirt/shirt-title.png",
  "Border": "images/shirt/shirt-border.png",
	"ProjectImage": "images/shirt/main-shirt.jpg",
	"Concept": "descriptions/shirt.html",
	"Photoshoot": [{
    "src": 'images/shirt/photoshoot1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/shirt/photoshoot2.jpg',
    "title": 'Photoshoot 2'
  }, {
    "src": 'images/shirt/photoshoot3.jpg',
    "title": 'Photoshoot 3'
  }],
  "PhotoshootIcons": [{
    "src": 'images/shirt/photoshoot-icon-1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/shirt/photoshoot-icon-2.jpg',
    "title": 'Photoshoot 2'
  }, {
    "src": 'images/shirt/photoshoot-icon-3.jpg',
    "title": 'Photoshoot 3'
  }],
	"Sketchbook": [{
    "src": 'images/shirt/research1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/shirt/research2.jpg',
    "title": 'Research 2'
  }],
  "SketchIcons": [{
    "src": 'images/shirt/research-icon-1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/shirt/research-icon-2.jpg',
    "title": 'Research 2'
  }]
}, {
	"ID": "white",
	"Title": "White Project",
  "TitleImage": "images/white-project/white-title.png",
  "Border": "images/white-project/white-border.png",
	"ProjectImage": "images/white-project/main-white.jpg",
	"Concept": "descriptions/white.html",
	"Photoshoot": [{
    "src": 'images/white-project/photoshoot-1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/white-project/photoshoot-2.jpg',
    "title": 'Photoshoot 2'
  }, {
    "src": 'images/white-project/photoshoot-3.jpg',
    "title": 'Photoshoot 3'
  }],
  "PhotoshootIcons": [{
    "src": 'images/white-project/photoshoot-icon-1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/white-project/photoshoot-icon-2.jpg',
    "title": 'Photoshoot 2'
  }, {
    "src": 'images/white-project/photoshoot-icon-3.jpg',
    "title": 'Photoshoot 3'
  }],
	"Sketchbook": [{
    "src": 'images/white-project/research-1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/white-project/research-2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/white-project/research-3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/white-project/research-4.jpg',
    "title": 'Research 4'
  }],
  "SketchIcons": [{
    "src": 'images/white-project/research-icon-1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/white-project/research-icon-2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/white-project/research-icon-3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/white-project/research-icon-4.jpg',
    "title": 'Research 4'
  }]
}, {
	"ID": "floge",
	"Title": "Flöge Project",
  "TitleImage": "images/floge/floge-title.png",
  "Border": "images/floge/floge-border.png",
	"ProjectImage": "images/floge/main-floge.jpg",
	"Concept": "descriptions/floge.html",
	"Photoshoot": [{
    "src": 'images/floge/photoshoot1.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/floge/photoshoot2.jpg',
    "title": 'Pic 2'
  }],
  "PhotoshootIcons": [{
    "src": 'images/floge/photoshoot-icon-1.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/floge/photoshoot-icon-2.jpg',
    "title": 'Pic 2'
  }],
	"Sketchbook": [{
    "src": 'images/floge/research1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/floge/research2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/floge/research3.jpg',
    "title": 'Research 3'
  }],
  "SketchIcons": [{
    "src": 'images/floge/research-icon-1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/floge/research-icon-2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/floge/research-icon-3.jpg',
    "title": 'Research 3'
  }]
}]