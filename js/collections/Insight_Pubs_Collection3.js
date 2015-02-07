define([
    'underscore',
    'backbone'
], function( _, Backbone ) {

    var Insight_Pubs_Collection3 = Backbone.Collection.extend({
        url: 'data/insight_pubs3.json'

    });
        
    return Insight_Pubs_Collection3;
});
