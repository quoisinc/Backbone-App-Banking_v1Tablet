define(['require', 'jquery', 'backbone', 'underscore', 'mediator', 'text!../../templates/popup.html'], function(require, $, Backbone, _, Mediator, PopUpTemplate) {

	var PopUp_ViewA = Backbone.View.extend({

		events : function() {
			return App.Models.Inview.get("isIpad") ? {
				"touchstart .popupCoverA" : "hidePopUpA"
			} : {
				"click .popupCoverA" : "hidePopUpA"
			}
		},


		initialize : function() {
			_.bindAll(this, 'render', 'showPopUpA','hidePopUpA');

			this.id = "recentTransactions"

			Mediator.subscribe("showPopUpA", this.showPopUpA);
			Mediator.subscribe("hidePopUpA", this.hidePopUpA);

			var self = this;
			require(['text!../../templates/recentTransactions.html'], function(loadedTmpltA) {
				self.template = _.template(loadedTmpltA);
				self.render();
			});
		},

		render : function() {

			$(this.el).append(this.template(this.id));
			$(this.el).append("<div class='popupCoverA'></div>");

			return this;
		},

		showPopUpA : function() {
			if ($('div#recentTransactions').hasClass('paused')) {
				$('div#recentTransactions').removeClass('paused');
				$('div#recentTransactions').addClass('active');
				$(this.el).append("<div class='popupCoverA'></div>");
			}
		},

		hidePopUpA : function() {
			$('.popupCoverA').remove();
			var targetPopUpA = $('div#recentTransactions');
			if (targetPopUpA.hasClass('active')) {
				targetPopUpA.removeClass('forwards');
				targetPopUpA.addClass('reversed');
				targetPopUpA.bind("webkitAnimationEnd", function(e) {
					targetPopUpA.removeClass();
					targetPopUpA.addClass('popup rt paused forwards');
					targetPopUpA.unbind("webkitAnimationEnd");
				})
			}
		},
	});

	return PopUp_ViewA;
});
