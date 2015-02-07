/**
 * File: ContextButtonView
 * User: mj69267
 * Date: 3/1/13
 * Time: 5:38 PM
 */

define(
	['jquery', 'underscore', 'backbone', 'mediator'],
	function ($, _, Backbone, Mediator) {
		var NewContextAddButton = Backbone.View.extend({
			tagName: 'button',
			className: 'button icon showListTrigger',
			events: {
				'click ': 'showList'
			},
			initialize: function(){
				this.template = JST['contextAddButton'];
				console.log(this.collection)
			},
			render: function(){
				this.$el.html(this.template());
				return this;
			},
			showList: function(event){
				console.log('Triggering addList')
				this.$el.trigger('addList', {collection:this.collection, event: event})
			}
		});

		/* Return the created Backbone Class, which uses by default the same file name */
		return NewContextAddButton;
	}
);