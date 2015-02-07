define(['backbone','underscore'], function() {
	var PopUp_Model = Backbone.Model.extend({

		defaults : {
			el : 'div#iv_app',
			visible: false
		},

		initialize : function(options) {
			_.bindAll(this);
		},

	})

	return PopUp_Model;
});
