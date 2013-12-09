define(
	[
	"jquery", 
	"../js/vendor/foundation/foundation.topbar",
	"../js/vendor/foundation/foundation.dropdown",
	"../js/vendor/foundation/foundation.alert"
	], 
	function($, foundation) {
	
		$(document).ready(function() {
			Foundation.init(document, "topbar");
			Foundation.init(document, "dropdown");
			Foundation.init(document, "alert");
		});

		return Foundation;
	}
);