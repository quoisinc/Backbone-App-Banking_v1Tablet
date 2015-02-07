define(['jquery', 'backbone', 'underscore', 'jqmobile'
    ], 
function($, Backbone, _, JQmobile
) {
    var swipeCount = 0;
	var showStackItem = 1;
	
	var Stack_View = Backbone.View.extend({
		tagName: "ul",
		className: "stack s1",
		
		events: {
            "swipeleft" : "swippedLeft",
            "swiperight" : "swippedRight",
            "mousedown": "stopProp",
            "touchstart": "stopProp"
            
        },
        stopProp: function(){
            console.log("aa");
            event.stopPropagation();
        },
       
        swippedLeft: function(){
           
           
          //++swipeCount;
           var ss = showStackItem + 1;
           
           //console.log("swipeCount: "+ swipeCount);
           console.log("showStackItem: "+ showStackItem);

           // $(this.el).addClass("slide-out-left");
           var sr1 = ".stack li.stackLI:nth-child("+showStackItem+")";
           var sr2 = ".stack li.stackLI:nth-child("+ss+")";
           
            $(sr1).removeClass("slide-in-left").removeClass("slide-in-right").removeClass("slide-out-right").addClass("slide-out-left");
            $(sr2).removeClass("slide-out-left").removeClass("slide-in-right").removeClass("slide-out-right").addClass("slide-in-left");

           showStackItem = showStackItem + 1;

        },

        swippedRight: function(){
           
           
           showStackItem = showStackItem - 1;
           console.log("swipeCount: "+ swipeCount);
           console.log("showStackItem: "+ showStackItem);
                      
           var sr1 = ".stack li.stackLI:nth-child("+showStackItem+")";
           
           var ss = showStackItem + 1;
           var sr2 = ".stack li.stackLI:nth-child("+ss+")";

            $(sr1).removeClass("slide-in-left").removeClass("slide-out-left").removeClass("slide-out-right").addClass("slide-in-right");
            $(sr2).removeClass("slide-in-left").removeClass("slide-in-right").removeClass("slide-out-left").addClass("slide-out-right");
            
       
        },

        
        initialize: function(){
            _.bindAll(this,  'render');
            console.log("init Stack_View");
           
        },
       
        render: function () {
            
            console.log(this.options.stackArray);
            
            
            var Stack_LI = Backbone.View.extend({
                tagName: "li",
                    className: "stackLI",
                    render: function(){
                        $(this.el).html(this.options.stackItem);
                        return this;
                    }
                });            
           
            var sss = this.options.stackArray;
            
            for (var i=0;i<sss.length;i++){
                $(this.el).append(new Stack_LI({stackItem: sss[i]}).render().el);
            }
            
    
            return this;
        }       
        	
		
		
	});

	return Stack_View;

});

