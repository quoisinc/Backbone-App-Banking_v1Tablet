define(['backbone','underscore',
    'models/Tag'
], function(Backbone, _,
            Tag_Model
){


    var Tags = Backbone.Collection.extend({
        model: Tag_Model
    });

    return Tags;
});