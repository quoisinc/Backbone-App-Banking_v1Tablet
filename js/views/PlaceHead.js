define([
        'jquery', 
        'backbone', 
        'underscore',
        'views/PlaceLogoBlock',
        'views/Tools_View',
		'views/contextBar/ContextBar.2',
        'views/PlaceBar_View',  
        'text!../../templates/placeHead.html',
		'models/ContextModel',
		'views/contextBar/NewContextBar'
    ], 
	function(
	    $, 
	    Backbone, 
	    _, 
	    App_Views_PlaceLogoBlock,
	    Tools_View,
	    Apps_Views_ContextBar,
		PlaceBar_View, 
	    PlaceHead_Tpl,
		ContextModel,
		NewContextBar
	){

	var PlaceHead_View = Backbone.View.extend({
	    id: 'placeHead',
		events: {
		
		},
		initialize : function() {
		    console.log("init PlaceHead_View");
			_.bindAll(this, 'render');
		},

		render : function() {
		    console.log("render PlaceHead_View");



            //var template = _.template( PlaceHead_Tpl);
            //$(this.el).html(template);            
            
            var placeLogoBlock_view = new App_Views_PlaceLogoBlock();
            $(this.el).append(placeLogoBlock_view.render().el);


            var tools_view = new Tools_View();
            $(this.el).append(tools_view.render().el);
            
			/* Context Bar 1st attent */
            /*App.Views.ContextBar = new Apps_Views_ContextBar({model: new ContextModel()});
            this.$el.append(App.Views.ContextBar.render().el);*/

			App.Views.ContextBar = new NewContextBar({collection: new Backbone.Collection(BSDATA.bankers)});
			this.$el.append(App.Views.ContextBar.render().el);


			/* BEGIN: facetime & chat */
			var placeBar_view = new PlaceBar_View();
            $(this.el).append(placeBar_view.render().el);
			/* END: facetime & chat */


            return this;
		}
		
		
	});

	return PlaceHead_View;

});

