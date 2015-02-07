define(['jquery', 'backbone', 'underscore','text!../../../templates/ContextAddClientListItem.html'],
	function($, Backbone, _, ContextAddClientListItem_Tpl) {

	var ContextAddClientListItem_View = Backbone.View.extend({
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
            App.Models.Context.set("client", this.model.get('name'));
            App.Models.Context.set("groups", this.model.get('groups'));
          //Inview.app.model.set('currentPlaceID', this.model.get('title')); 
          //  console.log("clicked: "+this.model.get('title'));  
        },
        render: function(){
            var template = _.template( ContextAddClientListItem_Tpl, {name: this.model.get('name')} );
            $(this.el).html(template);
            return this;
        }
        
        
        		
		
		
	});

	return ContextAddClientListItem_View;

});

