define(['jquery', 'backbone', 'underscore' 
		,'views/ContextAddBankerList_View'
		,'views/ContextAddClientList_View'
		], 
	function($, Backbone, _  
			 ,ContextAddBankerList_View
			 ,ContextAddClientList_View
	) {

	var banker_model = Backbone.Model.extend({
		initialize: function(){
	        /*this.set({
        	     clients: new ClientsCollection(this.get('clients'))
    	    });
			*/
    	}
	});
	
	var Banker_Collection = Backbone.Collection.extend({
		model: banker_model,
		url: "data/context-bankers.json"
	});


	var ClientsCollection = Backbone.Collection.extend({
		model: client_model
	});
	var client_model = Backbone.Model.extend();

/*
	window.contextModel = Backbone.Model.extend({
		defaults: { }
	});

	window.ClientsCollection = Backbone.Collection.extend({
	 model: contextModel,  
	 url: "data/context-bankers.json",
	 parse: function(response){
	   return response.clients;
	 }
	});
*/

	var ContextAdd_View = Backbone.View.extend({
		className: "contextAdd",
		events: {
		},

		initialize : function() {
		    console.log("init ContextAdd_View");
			_.bindAll(this, 'render');

			
			/*
			this.collection = new Banker_Collection();
			this.collection.on('reset', this.render, this);
			this.collection.fetch();
			*/
			this.render();
 
			
		},

		render : function() {
			console.log("context: "+ this.options.currentContextLevel);
			if(this.options.currentContextLevel == "banker"){
			// choose a client
				this.collection = new Banker_Collection({model: banker_model});
	            this.collection.fetch();
    	        
				var contextAddClientList_view  = new ContextAddClientList_View({ collection: this.collection});
        	    $(this.el).html(contextAddClientList_view.render().el);			
			}else{ 
			// choose a banker
				this.collection = new Banker_Collection({model: banker_model});
	            this.collection.fetch();
    	        var contextAddBankerList_view  = new ContextAddBankerList_View({ collection: this.collection});
        	    $(this.el).html(contextAddBankerList_view.render().el);			
			}
			
			
			return this;
		}
		
	});

	return ContextAdd_View;

});