define(['jquery', 'backbone', 'underscore', 'mediator'], 
	function($, Backbone, _, Mediator) {

	var Button_MainNav_View = Backbone.View.extend({
	    
	    // id: "buttonMainNav",
	    tagName: "li",
	    className: "topmenu_menuBtn_off",

		events: function(){
		    return App.Models.Inview.get("isIpad") ?
		    {
		      "touchstart": "clickedButtonMainNav"
		    } :
		    {
		      "click": "clickedButtonMainNav"
		    }
		},

		initialize : function() {
		    console.log("init Button_MainNav_View");
			_.bindAll(this, 'render', 'clickedButtonMainNav');
		},

		render : function() {
		    //console.log("render Button_MainNav_View");
            return this;
		},

		clickedButtonMainNav: function(){
		    console.log("clicked button_mainnav")
		    //trigger 
		    Mediator.publish("e_clickedButtonMainNav");
        }
		
		
	});

	return Button_MainNav_View;

});

