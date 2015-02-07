define(['backbone','underscore',
    'models/Tag',
    'models/VaultDocument'

], function(Backbone, _,
            Tag_Model,
            VaultDocument_Model
){

var vaultDocument_Model = new VaultDocument_Model();

    var VaultDocuments = Backbone.Collection.extend({
        model: VaultDocument_Model
    });

    return VaultDocuments;
});