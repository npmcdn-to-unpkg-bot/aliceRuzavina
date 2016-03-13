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
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"],
	"Sketchbook": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"]
}, {
	"ID": "sustainability",
	"Title": "Sustainability Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"],
	"Sketchbook": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"]
}, {
	"ID": "creatures",
	"Title": "Creatures",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"],
	"Sketchbook": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"]
}, {
	"ID": "accessory",
	"Title": "Accessory Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"],
	"Sketchbook": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"]
}, {
	"ID": "shirt",
	"Title": "Shirt Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"],
	"Sketchbook": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"]
}, {
	"ID": "white",
	"Title": "White Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"],
	"Sketchbook": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"]
}, {
	"ID": "floge",
	"Title": "Flöge Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"],
	"Sketchbook": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"]
}, {
	"ID": "circus",
	"Title": "Circus Project",
	"ProjectImage": "images/album_cover_riso.jpg",
	"Concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ipsum, condimentum in lacus finibus, malesuada posuere tellus. Phasellus venenatis tortor nisi, at molestie urna bibendum at. Nullam lorem elit, viverra id molestie id, tincidunt non diam. Maecenas non ex eget libero imperdiet faucibus. Aenean convallis feugiat justo, quis fringilla quam fringilla id. Vivamus pharetra, ante a euismod laoreet, diam urna pulvinar leo, vel aliquet nibh sapien quis enim. Etiam sagittis feugiat metus at mattis.",
	"Photoshoot": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"],
	"Sketchbook": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"]
}]