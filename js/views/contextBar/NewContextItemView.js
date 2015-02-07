/**
 * File: ContextButtonView
 * User: mj69267
 * Date: 3/1/13
 * Time: 5:38 PM
 */

define(
	['jquery', 'underscore', 'backbone', 'mediator'],
	function ($, _, Backbone, Mediator) {
		var NewContextItemView = Backbone.View.extend({
			tagName: 'li',
			events: {
				'click .editTrigger': 'setEditMode'
			},
			initialize: function(){
				this.template = JST['contextItem'];
				this.model.on('destroy', this.killView, this);
				this.model.on('change:all', this.render, this)
			},
			render: function(){
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			},
			setEditMode: function(event){
				this.$el.trigger('editMode', {model:this.model, event: event})
			},
			killView: function(){
				this.undelegateEvents()
				this.remove();
			}
		});

		/* Return the created Backbone Class, which uses by default the same file name */
		return NewContextItemView;
	}
);