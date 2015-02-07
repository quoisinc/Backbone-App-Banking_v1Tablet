define(['jquery', 'backbone', 'underscore', 'mediator'], 
	function($, Backbone, _, Mediator) {

	var Button_Folder_View = Backbone.View.extend({
	    
	    // id: "buttonMainNav",
	    tagName: "li",
	    className: "topmenu_folder",

		events: {
		    click: "clickedButton"
		},

		initialize : function() {
			_.bindAll(this, 'render', 'clickedButton');
		},

		render : function() {
            return this;
		},

		clickedButton: function(){
		    console.log("clicked button_Folder")
        }
		
		
	});

	return Button_Folder_View;

});

