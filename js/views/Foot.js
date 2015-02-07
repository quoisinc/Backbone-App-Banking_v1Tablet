define([
        'jquery', 'backbone', 'underscore',
        'text!../../templates/foot.html'
    ], 
	function(
	    $, Backbone,  _,
	    Foot_Tpl
	){

	var Foot_View = Backbone.View.extend({
	    id: 'foot',
		events: {},
		initialize : function() {
		    console.log("init foot_View");
			_.bindAll(this, 'render');
		},

		render : function() {
            var template = _.template(Foot_Tpl);
            $(this.el).html(template);            

            return this;
		}
		
		
	});

	return Foot_View;

});

