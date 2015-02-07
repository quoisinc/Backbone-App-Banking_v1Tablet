define(['jquery', 'backbone', 'underscore', 'jqmobile', 'views/Insight_Pub_View'], function($, Backbone, _, JQmobile, Insight_Pub_View) {

	var Insight_Pubs_View = Backbone.View.extend({
		tagName : "ul",
		className : "featuredPubs",

		events : {
			//   "swipeleft" : "swipped"
		},

		initialize : function() {
			_.bindAll(this, 'addOne', 'addAll', 'render');
			this.collection.bind('reset', this.addAll);
			console.log("init Insight_Pubs_View");
		},
		addOne : function(m) {

			$(this.el).append(new Insight_Pub_View({
				model : m
			}).render().el);
		},
		addAll : function(m) {
			this.collection.each(this.addOne);
		},
		render : function() {

			return this;
		}
	});

	return Insight_Pubs_View;

});

