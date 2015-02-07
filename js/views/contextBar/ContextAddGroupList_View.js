define(['jquery', 'backbone', 'underscore', 'views/contextBar/ContextAddGroupListItem_View'],
	function($, Backbone, _, ContextAddGroupListItem_View) {

	var ContextAddGroupList_View = Backbone.View.extend({
		tagName: "table",
		className: "list listView",
		
        initialize: function(){
            _.bindAll(this, 'addOne', 'addAll', 'render');
            //this.collection.bind('reset', this.addAll);
			this.collection.each(this.addOne);
        },
        addOne: function(m){
            $(this.el).append(new ContextAddGroupListItem_View({ model: m }).render().el);
        },
        addAll: function(m){
			//console.log(this.collection.toJSON());
            this.collection.each(this.addOne);
        }, 
        render: function () {
            return this;
        }		
		
		
	});

	return ContextAddGroupList_View;

});




