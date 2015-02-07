define([
    'underscore',
    'backbone'
], function( _, Backbone ) {

    var Insight_Pubs_Collection2 = Backbone.Collection.extend({
        url: 'data/insight_pubs2.json'

    });
        
    return Insight_Pubs_Collection2;
});
