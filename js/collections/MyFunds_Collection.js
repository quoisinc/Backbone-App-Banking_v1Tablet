define([
    'underscore',
    'backbone'
], function( _, Backbone ) {

    var MyFunds_Collection = Backbone.Collection.extend({
        url: 'data/MyFunds.json'

    });

    return MyFunds_Collection;
});