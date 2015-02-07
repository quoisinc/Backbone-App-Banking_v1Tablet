define(['backbone','underscore', 'mediator'], function( Backbone, _, Mediator) {
	var Context_Model = Backbone.Model.extend({

		defaults : {
			'banker' : null,
			'client' : null,
			'group': null
			
		},

		initialize : function(options) {
			_.bindAll(this, "updateX");
			
			console.log("init Context_Model");
			
			this.bind("change:banker", function(){
                console.log("change:banker"); 
				this.set("client", null, true);
				this.set("group", null, true);
                Mediator.publish("e_contextChange");
            });
			
			this.bind("change:client", function(){
				console.log("change:client");
				this.set("group", null, true);
                Mediator.publish("e_contextChange");
            });
			this.bind("change:group", function(){
			    console.log("change:group");
                Mediator.publish("e_contextChange");
            });

			/*this.bind("change", function(){
                console.log("changed ------------------"); 
				//console.log(this); 
                Mediator.publish("e_contextChange");
            }); */
			
			/*
			this.bind("change:styleguide-section", function(){
                console.log("changed styleguide-section: "+this.get('styleguide-section')); 
                
            });			
			
            this.bind("change:currentPlaceID", function(){
                Mediator.publish("e_changePlace", this.get('currentPlaceID'));
                console.log("changed currentPlaceID: "+this.get('currentPlaceID')); 
                
            }); 
			*/
		},
		getBanker: function(){
		    return this.get("banker")
		},
		getClient: function(){
		    return this.get("client")
		},
		getGroup: function(){
		    return this.get("group")
		},		

		updateX : function(id) {
		}
	})

	return Context_Model;
});


