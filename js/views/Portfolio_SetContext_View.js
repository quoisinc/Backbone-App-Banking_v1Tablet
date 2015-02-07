define(['jquery', 'backbone', 'underscore', 'mediator',
        'text!../../templates/portfolio-setContext.html'
    ], 
	function($, Backbone, _, Mediator,
        PortSetContext_Tpl
    ){

	var Portfolio_SetContext_View = Backbone.View.extend({
	    id: 'port-setContext',
	    className: 'window-dk',
	    
		events: function(){
		    return App.Models.Inview.get("isIpad") ?
		    {
		      "touchstart .button": "nextWin"
		    } :
		    {
		      "click .button": "nextWin"
		    }
		},		


		initialize : function() {
		    console.log("init Portfolio_CreateClient_View");
			_.bindAll(this, 'render', 'nextWin');
			$(this.el).addClass('slide-in-left');
			
		},

		render : function() {

            var template = _.template( PortSetContext_Tpl );
            $(this.el).append(template);
            return this;
		}, 
		
		nextWin : function (){
		    $(this.el).removeClass('slide-in-left');
		    $(this.el).addClass('slide-out-left');
            setTimeout(func, 400);
             function func() {
                $(".slide-out-left").remove();
            }
            
            Mediator.publish("portfolio:CreateClient");
            
		}
		
		
	});

	return Portfolio_SetContext_View;

});

