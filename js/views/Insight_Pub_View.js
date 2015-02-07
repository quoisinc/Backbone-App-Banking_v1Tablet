define(['jquery', 'backbone', 'underscore', 'text!../../templates/insight_pub.html'], function($, Backbone, _, Insight_Pub_Tpl) {

	var Insight_Pub_View = Backbone.View.extend({

		tagName : 'li',
		className : 'pubBox',

		events : function() {
			return App.Models.Inview.set("isiPad") ? {
				"touchstart .bookmark" : "onBookmarkClick"
			} : {
				"click .bookmark" : "onBookmarkClick"
			}
		},

		initialize : function() {
			_.bindAll(this, 'render', 'onBookmarkClick');
		},
		render : function() {

			var template = _.template(Insight_Pub_Tpl, {
				category : this.model.get('category'),
				date : this.model.get('date'),
				title : this.model.get('title'),
			});

			$(this.el).html(template);
			
			$(this.el).addClass(this.model.get('category'));
			// var bkgImg = this.model.get('background');

			$(this.el).css('background-image', 'url("imgs/insight/' + this.model.get("background") + '")');
			console.log(this.model.get('background'))
			if (this.model.get('featured') == true) {
				$(this.el).addClass('featured');
			};

			if (this.model.get('bookmarked') == true) {
				$('.bookmark', this.el).addClass("on");
			}
			return this;
		},
		onBookmarkClick : function() {
			//add or remove the "on" class to make the bookmark marked or unmarked
			$(event.target).toggleClass("on");
			
			//update the model
			var newBoolean = (this.model.get('bookmarked') == true) ? false : true;
			this.model.set('bookmarked', newBoolean);
		}
	});

	return Insight_Pub_View;

});

