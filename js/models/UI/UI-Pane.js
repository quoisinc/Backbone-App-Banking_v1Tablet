define(['backbone','underscore'], function(Backbone, _) {


    var Pane = Backbone.Model.extend({
        defaults: {
            title: "",
            paneData: null,
            transitionIn: true
        }
    });

    return Pane;


});




