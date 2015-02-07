define(['jquery', 'backbone', 'underscore','text!../../../templates/ContextAddGroupListItem.html'],
	function($, Backbone, _, ContextAddGroupListItem_Tpl) {

	var ContextAddGroupListItem_View = Backbone.View.extend({
        tagName: "tr",
        initialize: function(){
            _.bindAll(this, 'render', 'clickedNavItem');
        },
		events: function(){
		    return App.Models.Inview.get("isiPad") ?
		    {
		      "touchstart": "clickedNavItem"
		    } :
		    {
		      "click": "clickedNavItem"
		    }
		},
        clickedNavItem: function(){
            App.Models.Context.set("group", this.model.get('name'));
          //Inview.app.model.set('currentPlaceID', this.model.get('title')); 
          //  console.log("clicked: "+this.model.get('title'));  
        },
        render: function(){
            var template = _.template( ContextAddGroupListItem_Tpl, {name: this.model.get('name')} );
            $(this.el).html(template);
            return this;
        }
        
        
        		
		
		
	});

	return ContextAddGroupListItem_View;

});

