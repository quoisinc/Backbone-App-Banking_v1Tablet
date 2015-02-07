define(['jquery', 'backbone', 'underscore', 'mediator'],
	function($, Backbone, _, Mediator

   ) {

	var UITest_View = Backbone.View.extend({

        initialize: function(){
            _.bindAll(this, 'render', 'closeOverlay');
        },

		events: {
		    "click" : 'closeOverlay'
        },

        closeOverlay: function(){
            Mediator.publish("closeOverlay");
        },

        render: function(){

            console.log("RENDERING UITESTVIEW")

            $(this.el).html("<div class='testView'>This is a test view</div>");

            return this;

        }


        

	});

	return UITest_View;

});

