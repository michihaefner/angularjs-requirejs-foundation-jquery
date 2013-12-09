define(["jquery"], function($) {
	$.fn.foundation = function () {
	    console.log("FOUNDATION");

	    return this;
  	};

  	console.log("jquery extended");

  	return $.fn.foundation;
});

