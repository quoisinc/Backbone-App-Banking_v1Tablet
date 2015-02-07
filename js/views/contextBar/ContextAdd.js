define(['jquery', 'backbone', 'underscore' 
		,'views/contextBar/ContextAddBankerList'
		,'views/contextBar/ContextAddClientList_View'
		,'views/contextBar/ContextAddGroupList_View'
//		,'views/Panel_View'
		], 
	function($, Backbone, _  
		 ,App_Views_ContextAddBankerList
		 ,ContextAddClientList
		 ,ContextAddGroupList
//		 ,Panel_View
	) {




	function nestCollection(model, attributeName, nestedCollection) {
		//setup nested references
		for (var i = 0; i < nestedCollection.length; i++) {
		  model.attributes[attributeName][i] = nestedCollection.at(i).attributes;
		}
		//create empty arrays if none
	 
		nestedCollection.bind('add', function (initiative) {
		  if (!model.get(attributeName)) {
			model.attributes[attributeName] = [];
		  }
		  model.get(attributeName).push(initiative.attributes);
		});
	 
		nestedCollection.bind('remove', function (initiative) {
		  var updateObj = {};
		  updateObj[attributeName] = _.without(model.get(attributeName), initiative.attributes);
		  model.set(updateObj);
		});
		return nestedCollection;
	  }


	var Client_Model = Backbone.Model.extend();
	var ClientsCollection = Backbone.Collection.extend({
		model: Client_Model
	});

	var Group_Model = Backbone.Model.extend();
	var GroupsCollection = Backbone.Collection.extend({
		model: Group_Model
	});

	var Banker_Model = Backbone.Model.extend({
		initialize: function(){
			 this.clients = nestCollection(this, 'clients', new ClientsCollection(this.get('clients')));
	        /*this.set({
        	     clients: new ClientsCollection(this.get('clients'))
    	    });
			*/
    	} 
	});
	
	var Banker_Collection = Backbone.Collection.extend({
		model: Banker_Model,
		url: "data/context-bankers.json"
	});


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
			
			if(this.options.currentContextLevel == "client"){
			// choose a group
				var groups = App.Models.Context.get("groups");
				var group_model = new Group_Model({"group": "JOaa"});
				var groupsCollection = new GroupsCollection();
    	        groupsCollection.add(groups);
				
				var contextAddGroupList_view  = new ContextAddGroupList({ collection: groupsCollection });
        	    $(this.el).html(contextAddGroupList_view.render().el);				
			
			}else if(this.options.currentContextLevel == "banker"){
			// choose a client
				var clients = App.Models.Context.get("clients");
				var client_model = new Client_Model({"client": "JOE"});
				var clientsCollection = new ClientsCollection();
    	        clientsCollection.add(clients);
				
				var contextAddClientList_view  = new ContextAddClientList({ collection: clientsCollection });
        	    $(this.el).html(contextAddClientList_view.render().el);			

			}else{ 
			// choose a banker
				var banker_model = new Banker_Model();
				this.collection = new Banker_Collection({model: banker_model});
	            this.collection.fetch();
    	        var contextAddBankerList_view  = new App_Views_ContextAddBankerList({ collection: this.collection});
        	    
				/*var panel_view  = new Panel_View({ 
					collection: this.collection,
					pane: contextAddBankerList_view.render().el
				});
        	    console.log(contextAddBankerList_view.render().el);
				*/
				
				$(this.el).html(contextAddBankerList_view.render().el);			
				//$(this.el).html(panel_view.render().el);			
			}
			
			console.log(this.options.offsetLeft);
			
			$(this.el).offset({left:this.options.offsetLeft});
			return this;
		}
		
	});

	return ContextAdd_View;

});