angular.module('alice').controller('TextileCtrl', TextileCtrl);

function TextileCtrl($routeParams, $location) {
	this.$location = $location;
	this.currentPath = $location.path();
	this.works = TEXTILE_DATA;
}

TextileCtrl.prototype.getWorks = function() {
	return this.works;

};

// TextileCtrl.prototype.getWork = function(id) {
// 	return this.works.filter(function(work) {return work.ID === id}) [0];
// }

var TEXTILE_DATA = {
	"Title": "Textile Works",
	"Images": ["images/album_cover_riso.jpg", "images/album_cover_riso.jpg", "images/album_cover_riso.jpg"]
}
