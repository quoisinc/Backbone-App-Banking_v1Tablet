define(['backbone','underscore',

    'collections/VaultDocuments'

], function(Backbone, _,

            VaultDocuments_Collection
){


    var VaultDocumentsGroup = Backbone.Model.extend({
        defaults: {
            title: "NA",
            isSelected: false
        },

        //tags: new

        parse: function(response) {
            var docsJSON = response.documents;
            console.log(response);
            this.documents = new VaultDocuments_Collection(docsJSON) ;
            return response;
        }

    });

    return VaultDocumentsGroup;
});