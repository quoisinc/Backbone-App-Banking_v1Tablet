define([
    'underscore',
    'backbone'
], function( _, Backbone, MainNav_Model ) {

    var MainNav_Collection = Backbone.Collection.extend({
        url: 'data/mainNavigation.json'

    });
        
    return MainNav_Collection;
});
