define(['jquery', 'backbone', 'underscore', 'mediator', 'views/PopUp_ViewB'], function($, Backbone, _, Mediator, PopUp_ViewB) {

	var Button_RelationshipNavigator_View = Backbone.View.extend({

		tagName : "li",
		className : "topmenu_relNav",

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
			if (!this.popupViewB) {
				this.popupViewB = new PopUp_ViewB({
					el : 'div#iv_app'
				});
			};
			if ($('div#rn').hasClass('active')) {
				setTimeout(function() {
					Mediator.publish('hidePopUpB');
				}, 100);
			} else {
				setTimeout(function() {
					Mediator.publish('showPopUpB');
					Mediator.publish('hidePopUpA');
					Mediator.publish('hideSearch');

				}, 100);
			}
			console.log("clicked button_relNav")
		}
	});

	return Button_RelationshipNavigator_View;

});

