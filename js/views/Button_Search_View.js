define(['jquery', 'backbone', 'underscore', 'mediator', 'views/Search_View'], function($, Backbone, _, Mediator, Search_View) {

	var Button_Search_View = Backbone.View.extend({

		// id: "buttonMainNav",
		tagName : "li",
		className : "topmenu_search",

		events : function() {
			return App.Models.Inview.get("isIpad") ? {
				"touchstart" : "clickedButton"
			} : {
				"click" : "clickedButton"
			}
		},

		initialize : function() {
			_.bindAll(this, 'render', 'clickedButton');
		},

		render : function() {
			return this;
		},

		clickedButton : function() {
			if (!this.searchView) {
				this.searchView = new Search_View({});
				Mediator.publish("hidePopUpA");
				Mediator.publish("hidePopUpB")
			} else {
				Mediator.publish("searchClicked");
				Mediator.publish("hidePopUpA");
				Mediator.publish("hidePopUpB")
			}
			console.log("clicked button_Search")
		}
	});

	return Button_Search_View;

});

