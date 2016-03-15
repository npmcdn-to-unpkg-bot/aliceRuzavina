angular.module('alice').controller('TextileCtrl', TextileCtrl);

function TextileCtrl($routeParams, $location, $scope) {
	this.$location = $location;
	this.currentPath = $location.path();
	this.works = TEXTILE_DATA;
	// this.num;
	// if(this.num!=1) {
	// 	window.location.reload();
	// 	console.log('yes');
	// }
	// this.num = 1;
}

// TextileCtrl.prototype.check = function(number) {
// 	this.num = this.num + 1;
// 	console.log(this.num);
// 	return this.num;
// }

TextileCtrl.prototype.reloadPage = function() {
	console.log("works");
    window.location.reload();

}

var TEXTILE_DATA = {
	"Images" : ["images/album_cover_riso.jpg", "images/pendant_hand.jpg", "images/expbody2.jpg"],
	"Title": "Textiles"
}