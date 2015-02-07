define(['jquery', 'backbone', 'underscore','text!../../../templates/UI/UI-Pane.html'],
	function($, Backbone, _, UIPane_Tpl) {

	var UIPane_View = Backbone.View.extend({

        initialize: function(){
            _.bindAll(this, 'render');
        },

		events: function(){
		},

        render: function(){


            if ( this.model.get("paneData") ){
//                console.log("In 1*");


                var template = _.template( UIPane_Tpl , {
                    title: this.model.get('title')
                });
                $(this.el).html(template);

                //PANEDATA MIGHT BE A TEMPLATE OR A VIEW
                try
                {
                    $(this.el).append(this.model.get("paneData").render().el);
                }
                catch(err) //Template with not render method
                {
                    $(this.el).append(this.model.get("paneData"));
                }

            }else{
//                console.log("In 2*");
//                console.log(this.model.get("paneData"));
                $(this.el).html(template);
            }


            return this;

        }


        

	});

	return UIPane_View;

});

