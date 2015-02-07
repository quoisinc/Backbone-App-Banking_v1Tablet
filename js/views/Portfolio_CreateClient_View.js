define(['jquery', 'backbone', 'underscore', 'mediator', 'text!../../templates/portfolio-createClient.html'], function($, Backbone, _, Mediator, PortCreateClient_Tpl) {

	var Portfolio_CreateClient_View = Backbone.View.extend({
		id : 'port-createClient',
		className : 'window-dk',

		events : function() {
			return App.Models.Inview.get("isIpad") ? {
				"touchstart .button" : "nextWin",
				"touchstart input" : "clearInput",
				"blur input" : "checkInput"
			} : {
				"click .button" : "nextWin",
				"click input" : "clearInput",
				"blur input" : "checkInput"
			}
		},

		initialize : function() {
			console.log("init Portfolio_CreateClient_View");
			_.bindAll(this, 'render', 'nextWin', 'clearInput', 'checkInput');
			$(this.el).addClass('slide-in-left');

		},

		render : function() {

			var template = _.template(PortCreateClient_Tpl);
			$(this.el).append(template);
			return this;
		},

		nextWin : function() {
			Mediator.publish("portfolio:SetInvestobjective");
			$(this.el).removeClass('slide-in-left');
			$(this.el).addClass('slide-out-left');
			setTimeout(func, 400);
			function func() {
				$(".slide-out-left").remove();
			}

		},

		clearInput : function() {
			console.log("value: " + event.target.value);
			if (event.target.value == "Create Nickname" || event.target.value == "Create a Password") {
				event.target.value = "";
			}
		},

		checkInput : function() {
			if (event.target.value == "") {
				event.target.value = (event.target.id == "nickname") ? "Create Nickname" : "Create a Password";
			}
		}
	});

	return Portfolio_CreateClient_View;

});

