define(['jquery', 'backbone', 'underscore', 'mediator',
    'models/Tag',
    'models/VaultDocument',

    'collections/Tags',

    'views/vault/DocumentTags',


    'text!../../../templates/vault/uploadDocument_addTags.html'
],
	function($, Backbone, _, Mediator,
             Tag_Model,
             VaultDocument_Model,

             Tags_Collection,


             DocumentTags_View,
             UploadDocument_Tpl
        ) {

	var Upload_View = Backbone.View.extend({
        className: "",
        initialize: function(){
            _.bindAll(this, 'render', 'addTag',  'addTag');
            //this.model = App.Models.NewVaultDoc;

            this.model.on('change', this.modelChange, this);




           // console.log(this.documentTags_view);

//            this.model.on('change', this.slideIn, this);

        },
		events: function(){
            return App.Models.Inview.get("isIpad") ?
            {
                "touchstart #addTag": "addTag"
            } :
            {
                "click #addTag": "addTag",
                'keypress input[type=text]': 'filterOnEnter',
                "click #upload": "upload"
            }
		},

        modelChange: function(){
            console.log("changes MODLEL*******8************************");
            //this.drawTags();
        },

        filterOnEnter: function(e){
            console.log(e.keyCode);
            if (e.keyCode != 13) return;
            this.addTag();
        },


//        drawTags: function (){
//            console.log(this.model.get('tags'), "Drawtags");
//           //var documentTags_view = new DocumentTags_View({ collection:  new Tags_Collection( this.model.get('tags')) });
//            $(this.el).find(".contentBody").append(this.documentTags_view.render().el);
//
//        },


        render: function(){
            //var template = _.template( UIPanel_Tpl, { name: this.model.get('name')} );
            var template = _.template( UploadDocument_Tpl );

            $(this.el).html(template);

            //this.documentTags_view = new DocumentTags_View({ collection:  new Tags_Collection() });
            //$(this.el).find(".contentBody").append(this.documentTags_view.render().el);

            console.log( $(this.el).find(".contentBody"), "idk");

            console.log(this.model, "asaasasasasasas");
           // this.drawTags();


            return this;

        },



        addTag: function(){
            console.log("addtag");

            var tagn = $("#tag").val();
            $("#tag").val("");
            var tagModel = new Tag_Model({title: tagn});

            //this.documentTags_view.addTag(tagModel);

            //USING VaultDocument Model
            this.model.addTag(tagModel);
//            this.model.tags = new Tags_Collection(tagsJSON) ;




            var documentTags_view = new DocumentTags_View({ collection:  this.model.tags });
            $(this.el).find(".tagBlock").html(documentTags_view.render().el);


        },


        upload: function(){
            console.log("upload Document");
            console.log(this.model, "Upload Model");

            Mediator.publish("closeOverlayToPoint");

//            var VaultDocuments = Backbone.Collection.extend();
//            var VaultDocumentsGroup = Backbone.Model.extend({
//                vaultDocuments: new VaultDocuments()
//            });

            //if collection (documentsGroup) exists
            var toFolder = this.model.get("toFolder");
            var foundCollection = App.Collections.VaultDocumentsGroups.find(function(item){
                //console.log('Checking values', item, item.get('title'), toFolder);
                if (item.get('title') == toFolder){
                    console.log(item.get('title'));
                    return item;
                }
            });
            foundCollection.documents.add(this.model);


//            var vaultDocuments_Collection = new VaultDocuments(this.model)
//
//            var vaultDocumentsGroup_Model = new VaultDocumentsGroup({
//                title: this.model.get("toFolder"),
//                vaultDocuments: vaultDocuments_Collection
//            });


            //App.Collections.VaultDocumentsGroups.add(vaultDocumentsGroup_Model);
        }
        
        

	});

	return Upload_View;

});

