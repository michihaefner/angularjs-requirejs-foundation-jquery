define(
	[
	"jquery", 
	"foundation-base",
	"../js/vendor/foundation/foundation.topbar",
	"../js/vendor/foundation/foundation.dropdown"
	], 
	function($, foundation) {
	
		$(document).ready(function() {
			Foundation.init(document, "topbar");
			Foundation.init(document, "dropdown");
		});

		return Foundation;
	}
);