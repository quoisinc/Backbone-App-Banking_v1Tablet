define([
    'underscore',
    'backbone',
    'models/UI/UI-Pane'
], function( _, Backbone,
    UIPane_Model

    ) {

    var Panes = Backbone.Collection.extend({
        model: UIPane_Model
    });
        
    return Panes;
});
