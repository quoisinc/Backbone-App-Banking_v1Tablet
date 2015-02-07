define(['jquery', 'backbone', 'underscore','mediator', 
    'views/PlaceHead',
    'views/Portfolio_SetContext_View',
    'views/Portfolio_CreateClient_View',
    'views/Portfolio_SetInvestmentObjective_View',
	'views/asidePane/asidePane',
	'views/asidePane/smartFeed'
    ], 
	function($, Backbone, _, Mediator,
	    PlaceHead_View, 
	    Portfolio_SetContext_View, 
	    Portfolio_CreateClient_View,
	    Portfolio_SetInvestmentObjective_View,
		AsidePaneView,
		SmartFeedView
    ){

	var Portfolio_View = Backbone.View.extend({
		events: {
		},

		initialize : function() {
		    console.log("init portfolioView");
			_.bindAll(this, 'render', 'createClient', 'setInvestObjective');
			
			Mediator.subscribe("portfolio:CreateClient", this.createClient);
            Mediator.subscribe("portfolio:SetInvestobjective", this.setInvestObjective);
		},

		render : function() {

            /*var portfolio_setContext_view = new Portfolio_SetContext_View();
            $(this.el).append(portfolio_setContext_view.render().el);*/

			/* Create the hidden aside pane -- this could hold a number of tabs[smartFeed, Help, etc]*/
			var asidePane = new AsidePaneView();
			this.$el.append(asidePane.render().el);

			/* create a the smart feed vertical tab */
			var smartFeed = new SmartFeedView({collection: new Backbone.Collection(BSDATA.smartFeed)});
			/* Update the hidden aside pane */
			asidePane.update(smartFeed.render().el)

           
            return this;
		},
		
		createClient: function(){
            var portfolio_createClient_view = new Portfolio_CreateClient_View();
            $(this.el).append(portfolio_createClient_view.render().el);
            return this;		    
		},
		setInvestObjective: function(){
		    var portfolio_setInvestObj_view = new Portfolio_SetInvestmentObjective_View();
            $(this.el).append(portfolio_setInvestObj_view.render().el);
            return this;            
        }

		
		
	});

	return Portfolio_View;

});

