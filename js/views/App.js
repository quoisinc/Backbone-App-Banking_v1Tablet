define(['jquery', 'backbone', 'underscore', 'mediator', 
        'models/Inview'
    ], 
	function( $, Backbone, _, Mediator, 
	    App_Models_Inview
	){

	var App = Backbone.View.extend({
		events: {
		    
		},
	
		initialize : function() {
		    
		    console.log("init App");
            _.bindAll(this, 'render' );
            
		    var ua = navigator.userAgent;
            Inview.isiPad = /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua);
            
           
            
            if (Inview.isiPad) {
                $('body').addClass("iPad");
            } else
            {
                $('body').addClass("desktop");
            }
            
        
            
            
		},

		render : function() {


		}
		
         		
		
	});

	return App;

});

