require.config({
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'jqmobile': {
            deps: ['jquery'],
            exports: 'jQuery.fn.jqmobile'
        },
		'backbone-relational': ['backbone']
	},
	paths: {
		jquery: 'libs/jquery/jquery.min',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
		text: 'libs/require/text',
		mediator: 'libs/Mediator',
		animateEnhanced: 'libs/jquery/jquery.animate-enhanced',
		jqmobile: 'libs/jquery/jquery.mobile.custom.min',
		'backbone-relational': 'libs/backbone/backbone-relational'
	}
});

require([
    'mediator',
	'views/Inview',
	'models/Inview'
], function(
    Mediator,
    App_Views_Inview,
    App_Models_Inview
){
    
    
	//Inview.app_view = new App_View();


    //var ua = navigator.userAgent;



    App.Models.Inview = new App_Models_Inview();
    var tmp = /iPad/i.test(navigator.userAgent) || /iPhone OS 3_1_2/i.test(navigator.userAgent) || /iPhone OS 3_2_2/i.test(navigator.userAgent) || (navigator.userAgent.indexOf("android") > -1);
    App.Models.Inview.set("isIpad", tmp);


    //************* ROUTER ***************************
    var AppRouter = Backbone.Router.extend({
        routes: {
            "section/:place": "goToPlace",
            "*actions": "defaultRoute" // matches http://example.com/#anything-here
        }
    });
    // Initiate the router
    var app_router = new AppRouter;

    app_router.on('route:goToPlace', function(place) {
        //alert("goto "+ place);
        //Mediator.publish("authenticated", place);
        App.Models.Inview.set("auth", true);
    });
    app_router.on('route:defaultRoute', function(actions) {
//        console.log("a");
        //Mediator.publish("authenticated", "Vault");

//        if(App.Models.Inview.get("auth") == false){
//            Mediator.publish("un-authenticated");
//        }
    });

    Backbone.history.start();
    //************* ROUTER ***************************





	

//    App.Views.Inview2 = new App({model: App.Models.Inview});
	App.Views.Inview = new App_Views_Inview({
        el: 'body',
        model: App.Models.Inview
    });



	
}); 