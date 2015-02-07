define(['backbone','underscore', 'mediator'], function( Backbone, _, Mediator) {
	var App_Model = Backbone.Model.extend({

		defaults : {
			'title' : 'Inview',
			'currentPlaceID' : '12',
			'isNavOpen': '0',
			'auth': false
		},

		initialize : function(options) {
			_.bindAll(this, "updateX");
			
			this.bind("change:isNavOpen", function(){
                console.log("changed isNavOpen: "+this.get('isNavOpen')); 
                
            }); 
			
            this.bind("change:currentPlaceID", function(){
                Mediator.publish("e_changePlace", this.get('currentPlaceID'));
                console.log("changed currentPlaceID: "+this.get('currentPlaceID')); 
                
            }); 
		},

		updateX : function(id) {
		}
	})

	return App_Model;
});


