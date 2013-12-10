define(
	[
	"jquery", 
	"app/js/vendor/foundation/foundation.topbar",
	"app/js/vendor/foundation/foundation.dropdown",
	"app/js/vendor/foundation/foundation.alert"
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