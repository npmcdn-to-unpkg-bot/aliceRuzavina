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
	"ProjectImage": "images/tailoring/main-tailoring.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/tailoring/research1.jpg',
    "title": 'Research 1',
    "style": "'color': 'yellow'"
  }, {
    "src": 'images/tailoring/research2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/tailoring/research3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/tailoring/research4.jpg',
    "title": 'Research 4'
  }],
	"Sketchbook": [{
    "src": 'images/tailoring/photoshoot1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/tailoring/photoshoot2.jpg',
    "title": 'Photoshoot 2'
  }, {
    "src": 'images/tailoring/photoshoot3.jpg',
    "title": 'Photoshoot 3'
  }, {
    "src": 'images/tailoring/photoshoot4.jpg',
    "title": 'Photoshoot 4'
  }]
}, {
	"ID": "bottega-veneta",
	"Title": "Bottega Veneta",
	"ProjectImage": "images/bottega-veneta/main-bv.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/bottega-veneta/research1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/bottega-veneta/research2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/bottega-veneta/research3.jpg',
    "title": 'Research 3'
  }],
	"Sketchbook": [{
    "src": 'images/bottega-veneta/photoshoot1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/bottega-veneta/photoshoot2.jpg',
    "title": 'Photoshoot 2'
  }, {
    "src": 'images/bottega-veneta/photoshoot3.jpg',
    "title": 'Photoshoot 3'
  }, {
    "src": 'images/bottega-veneta/photoshoot4.jpg',
    "title": 'Photoshoot 4'
  }, {
    "src": 'images/bottega-veneta/photoshoot5.jpg',
    "title": 'Photoshoot 5'
  }, {
    "src": 'images/bottega-veneta/photoshoot6.jpg',
    "title": 'Photoshoot 6'
  }]
}, {
	"ID": "toile de joeux creatures",
	"Title": "Toile de Joeux Creatures",
	"ProjectImage": "images/creatures/main-creatures.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/creatures/research1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/creatures/research2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/creatures/research3.jpg',
    "title": 'Research 3'
  }],
	"Sketchbook": [{
    "src": 'images/creatures/photoshoot1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/creatures/photoshoot2.jpg',
    "title": 'Photoshoot 2'
  }]
}, {
	"ID": "accessory",
	"Title": "Accessory Project",
	"ProjectImage": "images/accessory/main-accessory.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/accessory/photoshoot1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/accessory/photoshoot2.jpg',
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
  }]
}, {
	"ID": "shirt",
	"Title": "Shirt Project",
	"ProjectImage": "images/shirt/main-shirt.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/shirt/photoshoot1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/shirt/photoshoot2.jpg',
    "title": 'Photoshoot 2'
  }],
	"Sketchbook": [{
    "src": 'images/shirt/research1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/shirt/research2.jpg',
    "title": 'Research 2'
  }]
}, {
	"ID": "white",
	"Title": "White Project",
	"ProjectImage": "images/white-project/main-white.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/white-project/photoshoot1.jpg',
    "title": 'Photoshoot 1'
  }, {
    "src": 'images/white-project/photoshoot2.jpg',
    "title": 'Photoshoot 2'
  }, {
    "src": 'images/white-project/photoshoot3.jpg',
    "title": 'Photoshoot 3'
  }, {
    "src": 'images/white-project/photoshoot4.jpg',
    "title": 'Photoshoot 4'
  }],
	"Sketchbook": [{
    "src": 'images/white-project/research1.jpg',
    "title": 'Research 1'
  }, {
    "src": 'images/white-project/research2.jpg',
    "title": 'Research 2'
  }, {
    "src": 'images/white-project/research3.jpg',
    "title": 'Research 3'
  }, {
    "src": 'images/white-project/research4.jpg',
    "title": 'Research 4'
  }]
}, {
	"ID": "floge",
	"Title": "Flöge Project",
	"ProjectImage": "images/floge/main-floge.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": [{
    "src": 'images/floge/photoshoot1.jpg',
    "title": 'Pic 1'
  }, {
    "src": 'images/floge/photoshoot2.jpg',
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
  }]
}]