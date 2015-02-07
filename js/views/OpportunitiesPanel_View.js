define(['jquery', 'backbone', 'underscore','mediator', 
    'text!../../templates/opportunitiesPanel.html' 
    ], 
	function($, Backbone, _, Mediator,
	    OpportunitiesPanel_Tpl
    ){

	var OpportunitiesPanel_View = Backbone.View.extend({
		id: "opPanel",

		events: function(){
		    return App.Models.Inview.get("isIpad") ?
		    {
		      "touchstart h2": "growAccord"
		    } :
		    {
		      "click h2": "growAccord"
		    }
		},
		initialize : function() {

			_.bindAll(this, 'render', 'growAccord'); 
            
			
			
			Mediator.subscribe("opp:newHF", this.render);
            //Mediator.subscribe("portfolio:SetInvestobjective", this.setInvestObjective);
            
		},

		render : function() {
            
            var template = _.template( OpportunitiesPanel_Tpl );
            $(this.el).html(template);  
            
            setTimeout( function() {
                $("#accordion").addClass('first');
                
            },350);
           
		    
		    return this;
		},
		
		growAccord: function(ev) {
		    var wasOn = false;
		    
            var pp = $($(ev.target)).parent();
            
            

            
            
            
            
            var whichID = pp.attr("id");
            var accordPos = "";
            
            if(whichID == "performance"){
                accordPos = 'first';
            }else if (whichID == "overview"){
                accordPos = 'second';
            }else{
                accordPos = 'third';
            }
            
            
            

            
            
            try{
                
                var classes = $("#accordion").attr("class");
                var result = new Array();
                if (classes != "first"){
                               
                    result = classes.split("_");
                    
                }else{
                    result[0] = "first";
                }
                console.log(result.length);



                
                
                
                //console.log(currentAccClass.length)
                if (result.length < 2){
                    $("#accordion").removeClass();
                    $("#accordion").addClass("first_"+accordPos);
  
                }else{
                     classStr = result[1] + "_" + accordPos;
                     $("#accordion").removeClass();
                    $("#accordion").addClass(classStr);
                }
                
                //console.log(currentAccClass.length);
            }catch(e){}            
            
            
            
            if (pp.hasClass('on')){
                wasOn = true;
                
            }	
            pp.removeClass("off");	    
		    
		    $('#accordion section').each(function(index) {
		        //$(this).removeClass('off');
		        if ($(this).hasClass('on')) {
		            $(this).removeClass('on');
                    $(this).addClass('off');
                }
		            
                
            });

            if(wasOn == false) pp.addClass('on');
		    
           
            
        }
		
		
		
	});

	return OpportunitiesPanel_View;

});

