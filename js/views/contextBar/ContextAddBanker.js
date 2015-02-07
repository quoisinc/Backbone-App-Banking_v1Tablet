define(['jquery', 'backbone', 'underscore'
		,'views/contextBar/ContextAddBankerList'
		], 
	function($, Backbone, _
		//,GenericChooser_View
		,ContextAddBankerList
	
	) {

	var banker_model = Backbone.Model.extend();

	var Banker_Collection = Backbone.Collection.extend({
		model: banker_model,
		url: "data/context-bankers.json"
	});

	var ContextAddBanker_View = Backbone.View.extend({
		className: "contextAddBanker",
		events: {
		
		},
		initialize : function() {
		    console.log("init ContextAddBanker_View");
			_.bindAll(this, 'render');



			this.collection = new Banker_Collection();
			this.collection.on('reset', this.render, this);
			
			/*function(){
				console.log("RESET");	
				console.log(this.toJSON());
				$(this.el).render();
			});
			*/
			this.collection.fetch();


			//Listeners
			// Mediator.subscribe("navBtnClicked", this.updatePage);
			
			//this.render();
		},

		render : function() {
			
			
            this.collection = new Banker_Collection({model: banker_model});
            this.collection.fetch();
            App.Views.ContextAddBankerList  = new ContextAddBankerList({ collection: this.collection});
            $(this.el).html(App.Views.ContextAddBankerList.render().el);
			
			
			
			/*
			
			var html = "";
		    this.collection.each( function(model){
				html += model.get("name");
			});
            
			$(this.el).html(html);							   
			*/
			
			return this;
			
			
		}
		
		
	});

	return ContextAddBanker_View;

});

