/**
 * File: AsidePane
 * User: mj69267
 * Date: 3/12/13
 * Time: 12:06 PM
 */

define(
	['jquery', 'underscore', 'backbone', 'mediator'],
	function ($, _, Backbone, Mediator) {

		var AsidePane = Backbone.View.extend({
			className:'aside-right-pane',
			events: {},
			initialize: function(){
				var self = this
				this.template = JST['asidePane'];
				this.viewportWidth = $(document).width();
				Mediator.subscribe('updateView', this.rePosition)
				$(window).on('resize', function(){
					Mediator.publish('updateView', self)
				});
			},
			render: function(){
				this.$el.html(this.template());
				this.$el.css({left: this.viewportWidth})
				return this;
			},
			rePosition: function(self){
				self.viewportWidth = $(window).width();
				self.viewportHeight = $(window).height();
				self.$el.css({left: self.viewportWidth, height: self.viewportHeight });
				self.$el.find('.aside-content').height(self.viewportHeight-155);
			},
			update: function(view){
				this.$el.find('.aside-content').height($(window).height()-161).append(view)
			}
		})

		/* Return the created Backbone Class, which uses by default the same file name */
		return AsidePane;
	}
);