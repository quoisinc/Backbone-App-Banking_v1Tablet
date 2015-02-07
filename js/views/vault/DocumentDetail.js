define(['jquery', 'backbone', 'underscore', 'mediator',

    'collections/VaultDocuments',

    'views/vault/DocumentTags',
    'views/vault/DocumentActions',


    'text!../../../templates/vault/vaultDocumentDetail.html'
    ],
	function($, Backbone, _, Mediator,

             VaultDocuments_Collection,

             DocumentTags_View,
             DocumentActions_View,

             VaultDocumentDetail_Tpl

    ) {


        var DocumentDetail = Backbone.View.extend({
            className: "VaultDocumentDetail",
            events: function(){

            },

            initialize : function() {
                console.log("init DocumentDetail");
                _.bindAll(this, 'render');
                //Mediator.subscribe("e_DeleteDocumentFromDetail", this.deleteDocument);

            },


            render : function() {

                var template = _.template( VaultDocumentDetail_Tpl, {
                    title: this.model.get('title'),
                    pubDate: this.model.get('pubDate'),
                    description: this.model.get('description')
                });

                $(this.el).append(template);


//                console.log(this.model, "Doc detail model");
                if (this.model.tags){
                    var documentTags_View =  new DocumentTags_View({collection:  this.model.tags });
                    $(this.el).find(".mainDocument").append(documentTags_View.render().el);
                }

                var documentActions_View = new DocumentActions_View({ model: this.model});
                $(this.el).find(".mainDocument").append(documentActions_View.render().el);


                //RELATED DOCS
//                var relatedDocs_Collection = new VaultDocuments_Collection();
//                relatedDocs_Collection.url = 'data/vaultRelatedDocs.json';
//
//
//                console.log(relatedDocs_Collection, "relatedDocs_Collection")
//                var relatedDocuments_View  = new RelatedDocuments_View({
//                    collection: relatedDocs_Collection
//                });
//                $(this.el).append(relatedDocuments_View.render().el);


                return this;
            }


        });

        return DocumentDetail;

    });

