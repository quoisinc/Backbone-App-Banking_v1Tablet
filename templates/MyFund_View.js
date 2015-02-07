define(['jquery', 'backbone', 'underscore','text!../../templates/myFund.html'], 
	function($, Backbone, _, MyFund_Tpl) {

	var MyFund_View = Backbone.View.extend({
		
		
        tagName: "li",
        
        initialize: function(){
            _.bindAll(this, 'render', 'clickedComment');
            
        },
		events: function(){
		    return Inview.isiPad ?
		    {
		      "touchstart": "clickedComment"
		    } :
		    {
		      "click": "clickedComment"
		    }
		},
        clickedComment: function(){
            
          //Inview.app.model.set('currentPlaceID', this.model.get('title')); 
        },

        render: function(){
           
            var template = _.template( MyFund_Tpl, {
                title1: this.model.get('title1'),
                title2: this.model.get('title2'),
                type: this.model.get('type')
            
            });
            
            //$(this.el).addClass(this.model.get('className'));
            $(this.el).html(template);
            return this;
        }
        
        
        		
		
		
	});

	return MyFund_View;

});

