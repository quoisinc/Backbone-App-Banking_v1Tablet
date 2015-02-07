define(['jquery', 'backbone', 'underscore',
        'views/NavItems',
        'collections/MainNav_Collection'
    ],
	function($, Backbone, _,
             App_Views_NavItems,
             MainNav_Collection
    ) {

	var Nav_View = Backbone.View.extend({
		events: {
		
		},
		initialize : function() {
		    console.log("init Nav View");
			_.bindAll(this, 'render');

			//Listeners
			// Mediator.subscribe("navBtnClicked", this.updatePage);
			
			this.render();
		},

		render : function() {
		    
            App.Models.Nav = Backbone.Model.extend();
            var mainNav_collection = new MainNav_Collection({model: App.Models.Nav});
            mainNav_collection.fetch();
            
            var navItems_view  = new App_Views_NavItems({ collection: mainNav_collection});

		    
		    
            $(this.el).html(navItems_view.render().el);

            return this;
		}
		
		
	});

	return Nav_View;

});

