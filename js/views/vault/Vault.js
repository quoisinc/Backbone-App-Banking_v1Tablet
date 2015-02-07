define(['jquery', 'backbone', 'underscore','mediator',

    'models/UI/UI-Panel',
    'models/UI/UI-Overlay',
    'models/UI/UI-Pane',
    'models/VaultDocument',
    'models/VaultDocumentsGroup',
    'models/Tag',

    'collections/Tags',
    'collections/VaultDocuments',
    'collections/VaultDocumentsGroups',

    'views/PlaceHead',
    'views/UI/UI-Panel',
    'views/UI/UI-Pane',
    'views/UI/UI-Overlay',
    'views/vault/UploadDocument',
    'views/vault/DocumentTags',
    'views/vault/DocumentActions',
    'views/vault/RelatedDocuments',
    'views/UI/UI-Test',
    'views/vault/DocumentDetail',


    'text!../../../templates/vault/vault.html',
    'text!../../../templates/vault/vaultDocumentsListItem-L0.html',
    'text!../../../templates/vault/vaultDocumentsListItem-L1.html',
    'text!../../../templates/vault/vaultDocumentDetail.html'

    ],
	function($, Backbone, _, Mediator,

        UIPanel_Model,
        UIOverlay_Model,
        UIPane_Model,
        VaultDocument_Model,
        VaultDocumentsGroup_Model,
        Tag_Model,

        Tags_Collection,
        VaultDocuments_Collection,
        VaultDocumentsGroups_Collection,

	    PlaceHead_View,
        UIPanel_View,
        UIPane_View,
        UIOverlay_View,
        UploadDocument_View,
        DocumentTags_View,
        DocumentActions_View,
        RelatedDocuments_View,
        UITest_View,
        DocumentDetail_View,

        Vault_Tpl,
        VaultListItemL0_Tpl,
        VaultListItemL1_Tpl,
        VaultDocumentDetail_Tpl,
        VaultDocumentTag_Tpl
    ){








//
//
//    var VaultDocuments = Backbone.Collection.extend({
//        model: VaultDocument_Model,
//        url: 'data/vault.json'
//    });
//
//    var VaultDocumentsGroup = Backbone.Model.extend({
//        defaults: {
//            title: "NA"
//        },
//        vaultDocuments: new VaultDocuments()
//    });
//
//    var VaultDocumentsGroups = Backbone.Collection.extend({
//        url : "vaultDocumentGroups",
//        model : VaultDocumentsGroup
//    });
//
//
//
















    //GROUPS
    var VaultListL0Item_View = Backbone.View.extend({
        tagName: "tr",
        initialize: function(){
            _.bindAll(this, 'render', 'clickedNavItem', 'itemAdded');

            if (this.model.documents){
                this.model.documents.bind('add', this.itemAdded, this);
            }


        },
        events: function(){
            return App.Models.Inview.get("isIpad") ?
            {
                "touchstart": "clickedNavItem"
            } :
            {
                "click": "clickedNavItem"
            }
        },

        itemAdded: function(){

            console.log($(this.el).offset(), "ITEM has been added to collection");

            var elem = $(this.el);
            var elPos = elem.offset();

            //BLACK HOLE OVERLAY
            var bhPosition = {
                x: elPos.left + (elem.width() / 2),
                y: elPos.top + (elem.height() / 2)
            }

            Mediator.publish("blackhole:overlay", bhPosition);

//            $(this.el).css({
//                "background": "white"
//
//            });

        },
        render: function(){

            var template = _.template( VaultListItemL0_Tpl, { title: this.model.get('title') } );
//            console.log(this.model);

           $(this.el).html(template);
            return this;
        },


        clickedNavItem: function(){
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");

            this.model.collection.each( function(model){
                model.set("isSelected", false);
            });
            this.model.set("isSelected", true);

            $(this.el).addClass("selected");
            $(this.el).siblings().removeClass("selected");
            console.log(this.model,"clicked Model")

            App.Views.VaultListL1 = new VaultListL1({
                collection: this.model.documents
            });

            //$('.column-2').find("#nextPanel").html(App.Views.VaultListL1.render().el);
            var paneModel = new UIPane_Model({

                paneData: App.Views.VaultListL1
            });
            var paneView = new UIPane_View({model: paneModel});
            App.Views.UIPanel.addPane(paneView);

            //App.Views.UIPanel.model.set('currPanel', App.Views.VaultListL1);

        }

    });


    var VaultListL0 = Backbone.View.extend({
        tagName: "table",
        className: "list listView",

        initialize: function(){
//            console.log("Init VaultListL0");
            _.bindAll(this, 'addOne', 'addAll', 'render', 'collectionChange');
            this.collection.bind('reset', this.addAll);
            this.collection.bind('add', this.addAll);

            this.addAll();
        },
        addOne: function(m){
            $(this.el).append(new VaultListL0Item_View({ model: m }).render().el);
        },
        addAll: function(m){
            //console.log(this.collection.toJSON());
            $(this.el).html("");

            this.collection.each(this.addOne);
        },

        collectionChange: function(){
            console.log("MAiN model change");
        },
        render: function () {
            return this;
        }
    });






        var Summary_View = Backbone.View.extend({
            className: "summaryView",
            initialize: function(){
                _.bindAll(this, 'render', 'deleteDocument');
                this.model.on('remove', this.deleteDocument, this);
            },

            deleteDocument : function(m) {

                console.log(m, "changing deleting doc *********************************************");
                //m.destroy();
                $(this.el).remove();

            },

            render: function () {

                var relatedDocs_Collection = new VaultDocuments_Collection();
                relatedDocs_Collection.url = 'data/vaultRelatedDocs.json';

                var documentDetail_View = new DocumentDetail_View({ model: this.model });
                var relatedDocuments_View = new RelatedDocuments_View({
                    collection: relatedDocs_Collection
                });
                $(this.el).append(documentDetail_View.render().el);
                $(this.el).append(relatedDocuments_View.render().el);
                return this;
            }
        });




        var VaultListL1Item_View = Backbone.View.extend({
            tagName: "tr",
            initialize: function(){
                _.bindAll(this, 'render', 'clickedNavItem', 'deleteItemFromList');
                this.model.bind('remove', this.deleteItemFromList, this);
            },
            events: function(){
                return App.Models.Inview.get("isIpad") ?
                {
                    "touchstart": "clickedNavItem"
                } :
                {
                    "click": "clickedNavItem"
                }
            },

            render: function(){

                var template = _.template( VaultListItemL1_Tpl, {
                    title: this.model.get('title'),
                    pubDate: this.model.get('pubDate'),
                    accountNumber: this.model.get('accountNumber')
                } );
//                console.log("in render");

                $(this.el).html(template);
                return this;
            },


            deleteItemFromList: function(m){

                var heightOfLI = $(this.el).height();

                var that = this;
                $(this.el).css({
                    "height" : heightOfLI+"px",
                    "overflow" : "hidden",
                    "display": "block",
                    "opacity": 0
                });

                setTimeout(function (){
                    $(that.el).css({
                        "height" : "0px"
                    });
                }, 50);

                setTimeout(function (){
                    $(that.el).remove();
                }, 400);


            },

            clickedNavItem: function(){

                $(this.el).addClass("selected");
                $(this.el).siblings().removeClass("selected");

                var summary_View = new Summary_View({ model: this.model });






                var paneModel = new UIPane_Model({
                    paneData: summary_View
                });
                console.log(paneModel, "paneModel")
                var paneView = new UIPane_View({model: paneModel});
                console.log(paneView, "paneView")
                App.Views.UIPanel2.addPane(paneView);


            }

        });


        var VaultListL1 = Backbone.View.extend({
            tagName: "table",
            className: "list listView light",

            initialize: function(){
//                console.log("Init VaultListL1");
                _.bindAll(this, 'addOne', 'addAll', 'render');
                this.collection.bind('reset', this.addAll);
//                this.collection.bind('remove', this.onRemove, this);
                this.collection.bind('add', this.onAdd, this);
                this.addAll();
            },
            addOne: function(m){
                $(this.el).append(new VaultListL1Item_View({ model: m }).render().el);
            },
            addAll: function(m){
                this.collection.each(this.addOne);
            },

            onRemove: function(m){
                console.log(m, "m")
                 $(this.el).html("");
                this.addAll(m);
            },

            onAdd: function(m){
                $(this.el).html("");
                this.addAll(m);
            },
            render: function () {
                return this;
            }

        });




        var Vault_View = Backbone.View.extend({
        className: "three-column",
        events: function(){
            return App.Models.Inview.get("isIpad") ?
            {
                "touchstart #uploadFile": "uploadFile"
            } :
            {
                "click #uploadFile": "uploadFile",
                "click #test" : "testOverlay"
            }
        },


        testOverlay: function(){

            var uitest_view = new UITest_View();

            //CREATE OVERLAY
            var overlayModel = new UIOverlay_Model({
                'height': 200,
                'width': 200,
                'hasCloseButton': false
            });
            App.Views.Overlay = new UIOverlay_View({ model: overlayModel });
            App.Views.Overlay.addView(uitest_view);

        },

		initialize : function() {
		    console.log("init Vault");
			_.bindAll(this, 'render');


            var vaultDocumentsGroup_Model = new VaultDocumentsGroup_Model();

            App.Collections.VaultDocumentsGroups = new VaultDocumentsGroups_Collection({model: vaultDocumentsGroup_Model});
            App.Collections.VaultDocumentsGroups.fetch();

            App.Views.VaultListL0 = new VaultListL0({
               collection: App.Collections.VaultDocumentsGroups
           });


		},


        uploadFile : function(){

            console.log("generate upload file view");

            var uploadDocument_View = new UploadDocument_View();

            //CREATE OVERLAY
            App.Models.Overlay = new UIOverlay_Model({
                height: 500,
                width: 640
            });
            App.Views.Overlay = new UIOverlay_View({ model: App.Models.Overlay });

            //ADD PANEL TO OVERLAY
            App.Views.Overlay.addView(uploadDocument_View);


        },



		render : function() {
            var template = _.template( Vault_Tpl );
            $(this.el).append(template);

//            var ee = $(this.el).html();
//            console.log(ee);
            $(this.el).find('.column-1').prepend(App.Views.VaultListL0.render().el);

            var M = Backbone.Model.extend({
                defaults : {
                    itemID : null
                }
            });

            App.Views.UIPanel = new UIPanel_View( {
                model: new UIPanel_Model( {
                    'itemID': 'L2',
                    'entryDirection': "rightSide"
                })
            });
            $(this.el).find('.column-2').html(App.Views.UIPanel.render().el);


            App.Views.UIPanel2 = new UIPanel_View( {
                model: new UIPanel_Model( {
                    'itemID': 'L3',
                    'entryDirection': "rightSide"
                } )
            } );
            $(this.el).find('.column-3').html(App.Views.UIPanel2.render().el);


            return this;
		}


	});

	return Vault_View;



});

