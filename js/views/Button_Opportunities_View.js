define(['jquery', 'backbone', 'underscore', 'mediator'], 
	function($, Backbone, _, Mediator) {

	var Button_Opportunities_View = Backbone.View.extend({
	    
	    // id: "buttonMainNav",
	    tagName: "li",
	    className: "topmenu_opps",

		events: function(){
		    return App.Models.Inview.get("isIpad") ?
		    {
		      "touchstart": "clickedButton"
		    } :
		    {
		      "click": "clickedButton"
		    }
		},

		initialize : function() {
			_.bindAll(this, 'render', 'clickedButton');
		},

		render : function() {
            return this;
		},

		clickedButton: function(){
		    console.log("clicked button_Opportunities")
        }
		
		
	});

	return Button_Opportunities_View;

});

