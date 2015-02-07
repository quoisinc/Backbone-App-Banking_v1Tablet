define(['jquery', 'backbone', 'underscore', 'mediator', 'views/PopUp_ViewA'], function($, Backbone, _, Mediator, PopUp_ViewA) {

	var Button_Transactions_View = Backbone.View.extend({

		tagName : "li",
		className : "topmenu_trans",

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
			if (!this.popupViewA) {
				this.popupViewA = new PopUp_ViewA({
					el : 'div#iv_app'
				});
			};
			if ($('div#recentTransactions').hasClass('active')) {
				setTimeout(function() {
					Mediator.publish('hidePopUpA');
				}, 100);
			} else {
				setTimeout(function() {
					Mediator.publish('showPopUpA');
					Mediator.publish('hidePopUpB');
					Mediator.publish('hideSearch');
				}, 100);
			}

			console.log("clicked button_Transactions")
		}
	});

	return Button_Transactions_View;

});

