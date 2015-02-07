define(['jquery', 'backbone', 'underscore', 'mediator', 
        'views/Nav',
        'views/Place',
        'views/Foot',
        'text!../../templates/main.html'
    ], 
	function( $, Backbone, _, Mediator, 
	    App_Views_Nav,
	    App_Views_Place,
	    App_Views_Foot,
	    Main_Tpl
	){

	var App_View = Backbone.View.extend({
		events: {
		    
		},
	
		initialize : function() {
		    
		    console.log("init Inview view");
            _.bindAll(this, 'render', 'promptLogin', 'accessGranted');
            var template = _.template( Main_Tpl );
            $(this.el).append(template);

            this.accessGranted();

//            Mediator.subscribe("authenticated", this.accessGranted);
//            Mediator.subscribe("un-authenticated", this.promptLogin);
//            Mediator.subscribe("un-authenticated", this.accessGranted);

			//return this;

            
		},

		render : function() {

            //Inview.login_view = new Login_View();
            //$(this.el).append(Inview.login_view.render().el);
            this.accessGranted();

		},
		
		promptLogin : function() {
            console.log("login");
            Inview.login_view = new Login_View();
            $(this.el).append(Inview.login_view.render().el);
        },
		
		accessGranted : function(place) {
		    this.model.set("currentPlaceID", place);
		    
		    console.log("goto " +place);
		    //Inview.app_view = this;
            //Inview.app_view.model.set('currentPlaceID', place);

            App.Views.Nav = new App_Views_Nav({ el: '#iv_nav'});
            App.Views.Place = new App_Views_Place({ el: '#iv_main'});
            App.Views.Foot = new App_Views_Foot({ el: '#iv_foot'}).render().el;
        }
         		
		
	});

	return App_View;

});

