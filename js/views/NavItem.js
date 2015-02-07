define(['jquery', 'backbone', 'underscore','text!../../templates/navItem.html'], 
	function($, Backbone, _, NavItem_Tpl) {

	var App_Views_NavItem = Backbone.View.extend({
		
		
        tagName: "li",
        
        initialize: function(){
            _.bindAll(this, 'render', 'clickedNavItem');

        },
		events: function(){
		    return App.Models.Inview.get('isIpad') ?
		    {
		      "touchstart": "clickedNavItem"
		    } :
		    {
		      "click": "clickedNavItem"
		    }
		},
        clickedNavItem: function(){
            console.log("*********************"+ this.model.get('title'));
          App.Models.Inview.set('currentPlaceID', this.model.get('title'));
         
         

            
            console.log("clicked: "+this.model.get('title'));  
        },
        render: function(){
           
            var template = _.template( NavItem_Tpl, {title: this.model.get('title')} );
//            console.log("in render");
            $(this.el).addClass(this.model.get('className'));
            $(this.el).html(template);
            return this;
        }
        
        
        		
		
		
	});

	return App_Views_NavItem;

});

