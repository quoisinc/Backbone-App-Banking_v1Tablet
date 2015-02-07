define(['jquery', 'backbone', 'underscore', 'mediator',

    'models/UI/UI-Pane',
    'collections/VaultDocuments',
    'collections/Tags',

    'views/UI/UI-Pane',
    'views/vault/DocumentDetail',

    'text!../../../templates/vault/vaultRelatedDoc.html'




],
    function($, Backbone, _, Mediator,

            UIPane_Model,
            VaultDocuments_Collection,
            Tags_Collection,

            UIPane_View,
            DocumentDetail_View,

            Tpl


        ) {


//        var Summary_View = Backbone.View.extend({
//            initialize: function(){
//                _.bindAll(this, 'render');
//            },
//            render: function () {
//                var documentDetail_View = new DocumentDetail_View({ model: this.model });
//                var relatedDocuments_View = new RelatedDocuments_View({ model: this.model });
//                $(this.el).append(documentDetail_View.render().el);
//                $(this.el).append(relatedDocuments_View.render().el);
//                return this;
//            }
//        });


        var Summary_View = Backbone.View.extend({
            initialize: function(){
                _.bindAll(this, 'render');
            },
            render: function () {

                var relatedDocs_Collection = new VaultDocuments_Collection();
                relatedDocs_Collection.url = 'data/vaultRelatedDocs.json';

                var documentDetail_View = new DocumentDetail_View({ model: this.model });
                var relatedDocuments_View = new RelatedDocuments({
                    collection: relatedDocs_Collection
                });
                $(this.el).append(documentDetail_View.render().el);
                $(this.el).append(relatedDocuments_View.render().el);
                return this;
            }
        });





        var RelatedDocument_View = Backbone.View.extend({
            tagName: "li",
            initialize: function(){
                _.bindAll(this, 'render', 'showDoc');
//                this.model.on('change', this.render, this);



            },
            events: function(){
                return App.Models.Inview.get("isIpad") ?
                {
                    "touchstart": "showDoc"
                } :
                {
                    "click": "showDoc"
                }
            },

            render: function(){
                var template = _.template( Tpl, {
                    title: this.model.get('title'),
                    pubDate: this.model.get('pubDate'),
                    accountNumber: this.model.get('accountNumber')

                } );
                $(this.el).html(template);
                return this;
            },

            showDoc: function(){

                var summary_View = new Summary_View({ model: this.model });

                //new pane model and view
                var paneModel = new UIPane_Model({ paneData: summary_View });
                var paneView = new UIPane_View({model: paneModel});
                App.Views.UIPanel2.addPane(paneView);


            }



        });



        var RelatedDocuments = Backbone.View.extend({

            events: function(){

                return App.Models.Inview.get("isIpad") ?
                {
//                    "touchstart": "clickedNavItem"
                } :
                {
                    "click #deleteAction": "deleteDocument"
                }

            },
            tagName: "div",
            className: "relatedDocs",

            initialize: function(){
                console.log("aaae");
                _.bindAll(this, 'addOne', 'addAll', 'render', 'deleteDocument');
                this.collection.on('reset', this.addAll, this);

                this.collection.fetch();
                Mediator.subscribe("e_DeleteDocumentFromDetail", this.deleteDocument);

                //this.addAll();
            },
            addOne: function(m){
//                console.log("addOne");
                $(this.el).find("ul").append(new RelatedDocument_View({ model: m }).render().el);
            },
            addAll: function(m){
                console.log(this.collection, "THIS COLL");
                $(this.el).append("<div style='padding:10px 0px 0px 20px; color: #9a9a9a; font-size:12px'>Related Documents</div> <ul></ul>");
                if (this.collection)  this.collection.each(this.addOne);
            },

            deleteDocument : function() {
                console.log("deleting doc");
//                this.model.destroy();
                $(this.el).remove();

            },
//            addTag: function(m){
//                if (this.collection){
//                    console.log("111111");
//                    //this.collection.add("tagSting");
//                    this.addOne(m);
//                }else{
//                    console.log("222222");
//                    this.collection = new Tags_Collection();
//                }
//
//
//
//                console.log(this.collection, "adding tag");
//
//            },
//
//
            render: function () {
                return this;
            }
        });


        return RelatedDocuments;

    });
