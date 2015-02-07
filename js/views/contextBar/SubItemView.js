define(
	['jquery', 'underscore', 'backbone'],
	function($, _, Backbone){

		/* Creates the Backbone View */
		var SubItemView = Backbone.View.extend({
			tagName: 'tr',
			template: JST['client'],
			render: function(){
				console.log('----------------------- sub list')
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			},
			events : {
				'click .setContextItem': 'setContextItem'
			},
			setContextItem:function(event) {
				var data = this.model.toJSON();
				this.$el.trigger('contextItemChosen', this.model);
			}

		})

		/* return the backbone view*/
		return SubItemView;
	}
)