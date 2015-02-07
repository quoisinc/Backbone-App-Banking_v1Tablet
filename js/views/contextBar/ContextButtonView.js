/**
 * File: ContextButtonView
 * User: mj69267
 * Date: 3/1/13
 * Time: 5:38 PM
 */

define(
	['jquery', 'underscore', 'backbone'],
	function ($, _, Backbone) {
		var ContextButtonView = Backbone.View.extend({
			tagName: 'button',
			className: 'editContextTrigger button trans flat icon',
			template: _.template('<span class="icon-all icon-<%= type %>"></span> <%= firstName %> <%= type %>'),
			events: {
				'click .editContextTrigger': 'setEditMode'
			},
			render: function(){
				console.log('ContextButtonView:  ', this.model)
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			},
			setEditMode: function(){
				this.trigger('editMode', this.model)
			}
		});

		/* Return the created Backbone Class, which uses by default the same file name */
		return ContextButtonView;
	}
);