define(['jquery', 'backbone', 'underscore','text!../../../templates/ContextAddBankerListItem.html'],
	function($, Backbone, _, ContextAddBankerListItem_Tpl) {

	var ContextAddBankerListItem_View = Backbone.View.extend({
        tagName: "tr",
        initialize: function(){
            _.bindAll(this, 'render', 'clickedNavItem');
        },
		events: function(){
		    return App.Models.Inview.get("isIpad") ?
		    {
		      "touchstart": "clickedNavItem"
		    } :
		    {
		      "click": "clickedNavItem"
		    }
		},
        clickedNavItem: function(){
           App.Models.Context.set("banker", this.model.get('name'));
            App.Models.Context.set("clients", this.model.get('clients'));
          //Inview.app.model.set('currentPlaceID', this.model.get('title')); 
          //  console.log("clicked: "+this.model.get('title'));  
        },
        render: function(){
            var banker = "Banker 2";
		   
		   	if (banker == this.model.get('name')){
				var clients  = this.model.get('clients');
				console.log(clients);
			}
		    
			
            var template = _.template( ContextAddBankerListItem_Tpl, {name: this.model.get('name')} );
            console.log("in render");
            //$(this.el).addClass(this.model.get('className'));
            $(this.el).html(template);
            return this;
        }
        
        
        		
		
		
	});

	return ContextAddBankerListItem_View;

});

