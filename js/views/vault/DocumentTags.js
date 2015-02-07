define(['jquery', 'backbone', 'underscore',
    'collections/Tags',
    'text!../../../templates/vault/vaultDocumentTag.html'
],
	function($, Backbone, _,
             Tags_Collection,
             VaultDocumentTag_Tpl
    ) {




        var VaultDocumentTag_View = Backbone.View.extend({
            tagName: "li",
            initialize: function(){
                _.bindAll(this, 'render', 'removeTag');
//                this.model.on('change', this.render, this);



            },
            events: function(){
                return App.Models.Inview.get("isIpad") ?
                {
                    "touchstart": "removeTag"
                } :
                {
                    "click": "removeTag"
                }
            },

            render: function(){
              //  console.log(this.model, "render doc tags");
                var template = _.template( VaultDocumentTag_Tpl, { title: this.model.get('title') } );
                $(this.el).html(template);
                return this;
            },

            removeTag: function(){

                console.log(this, "removing tag");
                this.model.destroy();
                this.remove();

            }



        });



        var DocumentTags = Backbone.View.extend({
            tagName: "div",
            className: "tags",



            initialize: function(){
                _.bindAll(this, 'addOne', 'addAll', 'render', 'modelChange');
               // this.collection.on('change', this.addAll, this);

                this.addAll();
            },
            addOne: function(m){
                console.log("in add1111111111111111112");
                $(this.el).find("ul").append(new VaultDocumentTag_View({ model: m }).render().el);
            },
            addAll: function(m){
                $(this.el).append("<ul></ul>");
                console.log("in add22222222222222222222222222222");
               // console.log(this.collection.length);
                if (this.collection)  this.collection.each(this.addOne);
            },
            modelChange: function(){
              console.log("changes MODLEL***********");
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
                //console.log("Render Doc Tags");

                return this;
            }
        });


        return DocumentTags;

    });

