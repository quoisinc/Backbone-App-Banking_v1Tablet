define(['jquery', 'backbone', 'underscore',
    'views/NavItem',
    'text!../../templates/navItems.html'
    ],
	function($, Backbone, _,
             App_Views_NavItem,
             NavItems_Tpl
    ) {

	var App_Views_NavItems = Backbone.View.extend({
		tagName: "aside",
		className: "menu",
		
        initialize: function(){
            _.bindAll(this, 'addOne', 'addAll', 'render');
            this.collection.bind('reset', this.addAll);
        },
        addOne: function(m){
            $(this.el).find("ul:last").append(new App_Views_NavItem({ model: m }).render().el);
        },
        addAll: function(m){
            var template = _.template( NavItems_Tpl );
            $(this.el).append(template);
            this.collection.each(this.addOne);
        }, 
        render: function () {
            return this;
        }		
		
		
	});

	return App_Views_NavItems;

});

