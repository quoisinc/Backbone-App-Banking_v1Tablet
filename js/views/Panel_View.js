define(['jquery', 'backbone', 'underscore' 
		,'views/ContextAddBankerList_View'
		,'views/ContextAddClientList_View'
		,'views/ContextAddGroupList_View'
		], 
	function($, Backbone, _  
		 ,ContextAddBankerList_View
		 ,ContextAddClientList_View
		 ,ContextAddGroupList_View
	) {




	var Panel_Model = Backbone.Model.extend();
	var PanelsCollection = Backbone.Collection.extend({
		model: Panel_Model
	});

/*	var Banker_Model = Backbone.Model.extend({
		initialize: function(){
			 this.clients = nestCollection(this, 'clients', new ClientsCollection(this.get('clients')));
	        this.set({
        	     clients: new ClientsCollection(this.get('clients'))
    	    });
			
    	} 
	});
*/





	window.JST = {};
	window.JST['panel'] = _.template(
		'<div class="title">Title</div><div class="body"><%= pane %></div>'
		);
									 	

	var Panel_View = Backbone.View.extend({
		className: "panel",
		events: {
		},

		initialize : function() {
		    console.log("init Panel_View");
			_.bindAll(this, 'render');

			
			//this.render();
 
			
		},

		render : function() {
			var $paneHTML = this.options.pane;
			console.log($paneHTML);
			var dict = { pane: $paneHTML };
			var html = JST['panel'](dict);
			$(this.el).append(html);

			

			return this;
		}
		
	});

	return Panel_View;

});