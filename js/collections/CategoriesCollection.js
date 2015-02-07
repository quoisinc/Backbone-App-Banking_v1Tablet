define([
	'underscore',
	'backbone',
	'models/CategoryModel'
], function( _, Backbone, CategoryModel ) {

	var CategoriesCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: CategoryModel,

	});
		
	return CategoriesCollection;
});
