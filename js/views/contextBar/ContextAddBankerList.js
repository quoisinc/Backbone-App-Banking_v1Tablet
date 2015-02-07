define(['jquery', 'backbone', 'underscore',
    'views/contextBar/ContextAddBankerListItem'
    ],
	function($, Backbone, _,
        App_Views_ContextAddBankerListItem
    ) {

	var ContextAddBankerList_View = Backbone.View.extend({
		tagName: "table",
		className: "list listView",
		
        initialize: function(){
            _.bindAll(this, 'addOne', 'addAll', 'render');
            this.collection.bind('reset', this.addAll);
        },
        addOne: function(m){
            $(this.el).append(new App_Views_ContextAddBankerListItem({ model: m }).render().el);
        },
        addAll: function(m){
			console.log(this.collection.toJSON());
            this.collection.each(this.addOne);
        }, 
        render: function () {
            return this;
        }		
		
		
	});

	return ContextAddBankerList_View;

});




