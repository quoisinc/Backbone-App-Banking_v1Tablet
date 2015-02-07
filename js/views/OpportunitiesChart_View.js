define(['jquery', 'backbone', 'underscore','mediator', 
    'text!../../templates/opportunitiesChart.html' 
    ], 
	function($, Backbone, _, Mediator,
	    OpportunitiesChart_Tpl
    ){

	var OpportunitiesChart_View = Backbone.View.extend({
		
		className: "hf-chart-wrapper",
        events: function(){
            return App.Models.Inview.get("isIpad") ?
            {
            	"touchstart .doughnuts span": "folderClick",
            	"touchstart .doughnuts div.on": "dnOnClick",
              	"touchstart .doughnuts div": "dnClick"
              
            } :
            {
            	"click .doughnuts span": "folderClick",
            	"click .doughnuts div.on": "dnOnClick",
              	"click .doughnuts div": "dnClick"
              
            }
        },

		initialize : function() {
	
			_.bindAll(this, 'render', 'dnClick', 'dnOnClick', 'folderClick'); 
			
			//Mediator.subscribe("portfolio:CreateClient", this.createClient);
            //Mediator.subscribe("portfolio:SetInvestobjective", this.setInvestObjective);
            //this.render();
		},

		render : function() {
            console.log("in this");
            var template = _.template( OpportunitiesChart_Tpl );
            $(this.el).append(template);
		    
		    return this;
		},
		
		dnClick: function(ev){
		    Mediator.publish("opp:newHF");
            $('.doughnuts div').removeClass("on");
            $($(ev.target).get(0)).addClass("on");
        },
		
		dnOnClick: function(ev){
		   // Mediator.publish("opp:newHF");
            //$('.doughnuts div').removeClass("on");
            $($(ev.target).get(0)).addClass("showSubs");
        },
		
		folderClick: function(ev){
		    Mediator.publish("e_openMyFolder");
            //$('.doughnuts div').removeClass("on");
            
        }
		
	});

	return OpportunitiesChart_View;

});

