define(['backbone','underscore'], function(Backbone, _) {
	var CategoryModel = Backbone.Model.extend({

		defaults : {
			catId : 'Category ID',
			catName : 'Category Name',
			catURL : 'Category URL'
			},

		initialize : function(options) {
			_.bindAll(this);
		}
	})

	return CategoryModel;
});
