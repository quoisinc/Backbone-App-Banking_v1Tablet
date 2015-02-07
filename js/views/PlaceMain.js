define(['jquery', 'backbone', 'underscore', 'mediator', 
        
        'views/Portfolio_View',
        'views/Book_View',
        'views/Opportunities_View',
        'views/Preview_View',
        'views/MyFolder',
        'views/Insight_View',
        'views/vault/Vault'
    ], 
	function($, Backbone, _, Mediator, 
	    Portfolio_View,
	    Book_View,
	    Opportunities_View,
	    Preview_View,
	    Apps_Views_MyFolder,
	    Insight_View,
        App_Views_Vault
    ){

	var PlaceMain_View = Backbone.View.extend({
		id: "placeMain",
		initialize : function() {
		    console.log("init placeMainView");
			_.bindAll(this, 'render', 'changePlace', 'openMyFolder');
			
            Mediator.subscribe("e_changePlace", this.changePlace);
            Mediator.subscribe("e_openMyFolder", this.openMyFolder);
           
			
		},

		render : function() {
		    console.log("render placemainView");
            
            //console.log(Inview.app);
            
            
            this.changePlace();
            


            return this;
		},
		
		openMyFolder : function(){
		    
		    if (typeof App.Views.MyFolder != "undefined") {
		    }else{
                App.Views.MyFolder = new Apps_Views_MyFolder();
                $(this.el).prepend(App.Views.MyFolder.render().el);
		    }
		    
		},

		
		changePlace : function(placeID){
		    
		    placeID = App.Models.Inview.get("currentPlaceID");
		    
		    
		    console.log("changing to "+placeID);
		    
		    
		    
         
            // FIX THIS LATER       
            $("#iv_main").removeClass("Preview");
            $("#iv_main").removeClass("Portfolio");
            $("#iv_main").removeClass("Insight");
            $("#iv_main").removeClass("Connect");
            $("#iv_main").removeClass("Opportunities");
            $("#iv_main").removeClass("Vault");
            $("#iv_main").removeClass("Book");

            
            $("#iv_main").addClass(placeID);		    
		    
		    
		    
		    
            switch(placeID)
            {
            case 'Preview':
                var preview_view = new Preview_View();
                $(this.el).html(preview_view.render().el);
                break;
            case 'Portfolio':
                var portfolio_view = new Portfolio_View();
                $(this.el).html(portfolio_view.render().el);
                break;
            case 'Insight':
                var insight_view = new Insight_View();
                $(this.el).html(insight_view.render().el);
                break;
            case 'Connect':
                $(this.el).html("");
                break;
            case 'Opportunities':
                var opportunities_view = new Opportunities_View();
                $(this.el).html(opportunities_view.render().el);
                break;
            case 'Vault':
                App.Views.Vault = new App_Views_Vault();
                $(this.el).html(App.Views.Vault.render().el);
                break;
            case 'Dashboard':
                $(this.el).html("");
                break;
            case 'Book':
                var book_view = new Book_View();
                $(this.el).html(book_view.render().el);
                break;
            default:
                $("#iv_main").addClass("Vault");
                App.Views.Vault = new App_Views_Vault();
                $(this.el).html(App.Views.Vault.render().el);
                

                
                break;
              
            }		    
            		    
		    if ($("#iv_main").hasClass("nav-open")){
                App.Models.Inview.set("isNavOpen", '0');
		        $("#iv_main").removeClass("nav-open");
		        $("#iv_main").addClass("nav-closed");
		    }
		    //this.slideMain();
		}
		
		
	});

	return PlaceMain_View;

});

