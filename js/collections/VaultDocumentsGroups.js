define(['backbone','underscore',

    'models/VaultDocumentsGroup'

], function(Backbone, _,
            
            VaultDocumentsGroup_Model
){


    var VaultDocumentsGroups = Backbone.Collection.extend({
        url: 'data/vault.json',
        model : VaultDocumentsGroup_Model
    });

    return VaultDocumentsGroups;
});