define(['jquery', 'backbone', 'underscore', 'mediator',
        'text!../../templates/portfolio-setInvestObjective.html'
    ], 
	function($, Backbone, _, Mediator,
        PortSetInvestObjective_Tpl
    ){

	var Portfolio_SetInvestmentObjective_View = Backbone.View.extend({
	    id: 'port-setInvestmentObjective',
	    className: 'window-dk',
	    
		events: function(){
		    return Inview.isiPad ?
		    {
		      "touchstart .button": "nextWin"
		    } :
		    {
		      "click .button": "nextWin"
		    }
		},		


		initialize : function() {
		    console.log("init Portfolio_SetInvestmentObjective_View");
			_.bindAll(this, 'render', 'nextWin');
			$(this.el).addClass('slide-in-left');
			
		},

		render : function() {

            var template = _.template( PortSetInvestObjective_Tpl );
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
		    
            
		}
		
		
	});

	return Portfolio_SetInvestmentObjective_View;

});

