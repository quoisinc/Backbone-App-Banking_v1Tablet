define([
    'underscore',
    'backbone'
], function( _, Backbone ) {

    var Insight_Pubs_Collection = Backbone.Collection.extend({
        url: 'data/insight_pubs.json'

    });
        
    return Insight_Pubs_Collection;
});
