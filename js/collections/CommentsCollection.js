define(['underscore', 'backbone', 'models/CommentModel'], 
	function(_, Backbone, CommentModel) {

	var CommentsCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model : CommentModel,
	});

	return CommentsCollection;
});
