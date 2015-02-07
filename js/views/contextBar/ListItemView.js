define(
	['jquery', 'underscore', 'backbone', 'views/contextBar/SubListView'],
	function($, _, Backbone, SubListView){

		var ListItemView = Backbone.View.extend({
			tagName: 'tr',
			render: function(){
				var data = this.model.toJSON(),
					templateType = data.type;
				this.template = JST[templateType];
				this.$el.html(this.template(data));
				return this;
			},
			events : {
				'click .seeDependency': 'seeDependency',
				'click .setContextItem': 'setContextItem'
			},
			seeDependency:function(event) {

				if(!App.Models.Context.has('banker')){
					// Set the banker to be the root but leave banker null on the context
					App.Models.Context.set({root: this.model},{silent:true});
				}
				var subListView = new SubListView({collection: new Backbone.Collection(this.model.toJSON().relationships)}); // Reference to this view
				event.preventDefault();
				/* trigger custom event for the parent view to insert the view passed as a param*/
				this.$el.trigger('setDependency',subListView);
			},
			setContextItem: function(){
				var data = this.model.toJSON();
				this.$el.trigger('contextItemChosen', data);
			}
		})

		return ListItemView; /* return the backbone view*/
	}
)