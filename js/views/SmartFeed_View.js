define([
        'jquery', 
        'backbone', 
        'underscore',
        'text!../../templates/smartFeed.html'
    ], 
	function(
	    $, 
	    Backbone, 
	    _, 
	    SmartFeed_Tpl
	){

	var SmartFeed_View = Backbone.View.extend({
	    id: 'smartFeed',
	    className: 'smartFeed',
		events: {
		
		},
		initialize : function() {
		    console.log("init SmartFeed_View");
			_.bindAll(this, 'render');
		},

		render : function() {
		    



            var template = _.template(SmartFeed_Tpl);
            $(this.el).html(template);            
            


            return this;
		}
		
		
	});

	return SmartFeed_View;

});

