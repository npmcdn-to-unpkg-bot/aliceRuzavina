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
  "ID": "digital",
  "Title": "Digital",
  "TitleImage": "images/digital/digital-title.png",
  "Border": "images/digital/digital-border.png",
  "ProjectImage": "images/digital/main-digital.jpg",
  "Concept": "descriptions/digital.html",
  "Photoshoot": [{
    "src": 'images/digital/photoshoot-01.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/digital/photoshoot-02.jpg',
    "title": 'Photoshoot 2'
  }],
  "PhotoshootIcons": [{
    "src": 'images/digital/photoshoot-icon-01.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/digital/photoshoot-icon-02.jpg',
    "title": 'Photoshoot 2'
  }],
  "Sketchbook": [{
    "src": 'images/digital/research-01.jpg',
    "title": 'Research 1',
    "style": "'color': 'yellow'"
  }, {
    "src": 'images/digital/research-02.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/digital/research-03.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/digital/research-04.jpg',
    "title": 'Research 4'
  }],
  "SketchIcons": [{
    "src": 'images/digital/research-icon-01.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/digital/research-icon-02.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/digital/research-icon-03.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/digital/research-icon-04.jpg',
    "title": 'Research 4'
  }]
}, {
  "ID": "beady-eyes",
  "Title": "Beady Eyes",
  "TitleImage": "images/beady/beady-title.png",
  "Border": "images/beady/beady-border.png",
  "ProjectImage": "images/beady/main-beady.jpg",
  "Concept": "descriptions/beady.html",
  "fabricSamples": true,
  "Photoshoot": [{
    "src": 'images/beady/photoshoot-01.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/beady/photoshoot-02.jpg',
    "title": 'Photoshoot 2'
  }],
  "PhotoshootIcons": [{
    "src": 'images/beady/photoshoot-icon-01.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/beady/photoshoot-icon-02.jpg',
    "title": 'Photoshoot 2'
  }],
  "Sketchbook": [{
    "src": 'images/beady/research-01.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/beady/research-02.jpg',
    "title": 'Research 2'
  }],
  "SketchIcons": [{
    "src": 'images/beady/research-icon-01.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/beady/research-icon-02.jpg',
    "title": 'Research 2'
  }]
}, {
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
  }, {
    "src": 'images/creatures/research-4.jpg',
    "title": 'Research 4'
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
  }, {
    "src": 'images/creatures/research-icon-4.jpg',
    "title": 'Research 4'
  }]
}, {
  "ID": "nike",
  "Title": "Nike",
  "TitleImage": "images/nike/nike-title.png",
  "Border": "images/nike/nike-border.png",
  "ProjectImage": "images/nike/main-nike.jpg",
  "Concept": "descriptions/nike.html",
  "fabricSamples": true,
  "Photoshoot": [{
    "src": 'images/nike/01.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/nike/02.gif',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/03.gif',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/04.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/05.gif',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/06.gif',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/07.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/08.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/09.gif',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/10.gif',
    "title": 'Pic 2'
  }],
  "PhotoshootIcons": [{
    "src": 'images/nike/01-icon.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/nike/02-icon.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/03-icon.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/04-icon.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/05-icon.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/06-icon.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/07-icon.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/08-icon.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/09-icon.jpg',
    "title": 'Pic 2'
  }, {
    "src": 'images/nike/10-icon.jpg',
    "title": 'Pic 2'
  }],
  "Sketchbook": [{
    "src": 'images/nike/research1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/nike/research2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/nike/research3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/nike/research4.jpg',
    "title": 'Research 4'
  }],
  "SketchIcons": [{
    "src": 'images/nike/research-icon-1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/nike/research-icon-2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/nike/research-icon-3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/nike/research-icon-4.jpg',
    "title": 'Research 4'
  }]
}, {
	"ID": "accessory",
	"Title": "Accessory",
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
	"Title": "Shirt",
  "TitleImage": "images/shirt/shirt-title.png",
  "Border": "images/shirt/shirt-border.png",
	"ProjectImage": "images/shirt/main-shirt.jpg",
	"Concept": "descriptions/shirt.html",
	"Photoshoot": [{
    "src": 'images/shirt/photoshoot1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/shirt/photoshoot3.jpg',
    "title": 'Photoshoot 3'
  }],
  "PhotoshootIcons": [{
    "src": 'images/shirt/photoshoot-icon-1.jpg',
    "title": 'Photoshoot 1'
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
	"Title": "White",
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
	"Title": "Becoming Flöge",
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