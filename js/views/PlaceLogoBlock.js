define(['jquery', 'backbone', 'underscore', 'mediator', 'views/Button_MainNav'],
	function($, Backbone, _, Mediator, App_Views_ButtonMainNav) {

	var Place_Logo_View = Backbone.View.extend({
	    
	    // id: "buttonMainNav",
	    tagName: "ul",
	    className: "place_logo_block",

		initialize : function() {
			_.bindAll(this, 'render');
		},

		render : function() {
		    
            var button_mainnav = new App_Views_ButtonMainNav();
            $(this.el).append(button_mainnav.render().el);
		    $(this.el).append("<li class='topmenu_logo'></li>");
            
            return this;
		},

		
		
	});

	return Place_Logo_View;

});

