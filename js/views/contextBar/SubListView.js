/* File: relationListView.js
 * it renders the book collection */

define(
	[
		'jquery',
		'underscore',
		'backbone',
		'views/contextBar/SubItemView'
	],
	function($, _, Backbone, SubItemView){

		var SubListView = Backbone.View.extend({
			tagName: 'div',
			className: 'list-filter',
			layoutTemplate: JST['list/dependency'],
			initialize: function(){
				/* NOTE: any initialization required */
				var title = this.collection.models[0].attributes.type.toUpperCase()
				console.log(this.collection.models)
				this.$el.html(this.layoutTemplate({header: title}))
			},
			events : {
				'click .backTrigger': 'goBack'
			},
			goBack: function(){
				this.$el.trigger('slide','back');
				//this.$el.remove();
			},
			render: function(){
				_.each(this.collection.models,function(client){
					this.renderBook(client);
				}, this)
				return this;
			},
			renderBook: function(client){
				var subItemView = new SubItemView({model: client});
				this.$el.find('.listView').append(subItemView.render().el);
			}
		});
		return SubListView;
	}
);