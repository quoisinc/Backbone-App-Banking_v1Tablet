define(['backbone','underscore'], function(Backbone, _) {
    var model = Backbone.Model.extend({

        defaults : {
            position : 'center',
            height : '400',
            width : '500',
            isModal: false,
            hasCloseButton: true,
            hasBlanket: true,
            blanketColor: "#000000",
            blanketOpacity: "0.5",
            contentView: null
        }

    });

	return model;
});




