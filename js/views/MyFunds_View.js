define(['jquery', 'backbone', 'underscore', 'views/MyFund_View', 'text!../../templates/myFunds.html'], 
	function($, Backbone, _, MyFund_View, MyFunds_Tpl) {

	var MyFunds_View = Backbone.View.extend({
		tagName: "ul",
		
		
        initialize: function(){
            _.bindAll(this, 'addOne', 'addAll', 'render');
            this.collection.bind('reset', this.addAll);
        },
        addOne: function(m){
            $(this.el).append(new MyFund_View({ model: m }).render().el);
        },
        addAll: function(m){
            //var template = _.template( MyFunds_Tpl );
            //$(this.el).append(template);
            this.collection.each(this.addOne);
        }, 
        render: function () {
            return this;
        }		
		
		
	});

	return MyFunds_View;

});

