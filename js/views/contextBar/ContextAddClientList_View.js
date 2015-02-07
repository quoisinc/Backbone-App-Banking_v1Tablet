define(['jquery', 'backbone', 'underscore', 'views/contextBar/ContextAddClientListItem_View'],
	function($, Backbone, _, ContextAddClientListItem_View) {

	var ContextAddClientList_View = Backbone.View.extend({
		tagName: "table",
		className: "list listView",
		
        initialize: function(){
            _.bindAll(this, 'addOne', 'addAll', 'render');
            //this.collection.bind('reset', this.addAll);
			this.collection.each(this.addOne);
        },
        addOne: function(m){
            $(this.el).append(new ContextAddClientListItem_View({ model: m }).render().el);
        },
        addAll: function(m){
			console.log(this.collection.toJSON());
            this.collection.each(this.addOne);
        }, 
        render: function () {
            return this;
        }		
		
		
	});

	return ContextAddClientList_View;

});




