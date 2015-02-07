define(['require', 'jquery', 'backbone', 'underscore', 'mediator', 'text!../../templates/popup.html'], function(require, $, Backbone, _, Mediator, PopUpTemplate) {

	var PopUp_ViewB = Backbone.View.extend({

		events : function() {
			return App.Models.Inview.get("isIpad") ? {
				"touchstart .popupCoverB" : "hidePopUpB"
			} : {
				"click .popupCoverB" : "hidePopUpB"
			}
		},

		initialize : function() {
			_.bindAll(this, 'render', 'showPopUpB','hidePopUpB');

			this.id = "rn"

			Mediator.subscribe("showPopUpB", this.showPopUpB);
			Mediator.subscribe("hidePopUpB", this.hidePopUpB);

			var self = this;
			require(['text!../../templates/popup_relationshipNav.html'], function(loadedTmpltB) {
				self.template = _.template(loadedTmpltB);
				self.render();
			});
		},

		render : function() {

			$(this.el).append(this.template(this.id));
			$(this.el).append("<div class='popupCoverB'></div>");
			return this;
		},

		showPopUpB : function() {
			if ($('div#rn').hasClass('paused')) {
				$('div#rn').removeClass('paused');
				$('div#rn').addClass('active');
				$(this.el).append("<div class='popupCoverB'></div>");
			}
		},

		hidePopUpB : function() {
			$('.popupCoverB').remove();
			var targetPopUpB = $('div#rn');
			if (targetPopUpB.hasClass('active')) {
				targetPopUpB.removeClass('forwards');
				targetPopUpB.addClass('reversed');
				targetPopUpB.bind("webkitAnimationEnd", function(e) {
					targetPopUpB.removeClass();
					targetPopUpB.addClass('popup rn paused forwards');
					targetPopUpB.unbind("webkitAnimationEnd");
				})
			}
		},
	});

	return PopUp_ViewB;
});
