define(['jquery', 'backbone', 'underscore', 'mediator',
    'text!../../../templates/UI/UI-Button.html'
],
    function($, Backbone, _, Mediator,
             UIButton_Tpl

        ) {


        var DocumentActions = Backbone.View.extend({
            tagName: "div",
            className: "actions",
            initialize: function(){
                _.bindAll(this, 'render');
            },

            events: function(){

                return App.Models.Inview.get("isIpad") ?
                {
//                    "touchstart": "clickedNavItem"
                } :
                {
                    "click #deleteAction": "deleteDocument"
                }

            },

            deleteDocument : function() {
                console.log(this.model);
                this.model.destroy();
                //Mediator.publish("e_DeleteDocumentFromDetail", this.model);

            },

            render: function(){

                var buttonHTML = "<ul>";

                buttonHTML += "<li>" + _.template(UIButton_Tpl, {iconType: "icon-download icon-dark", id:"downloadAction"}) + "</li>";
                buttonHTML += "<li>" + _.template(UIButton_Tpl, {iconType: "icon-flag icon-dark", id:"flagAction"}) + "</li>";
                buttonHTML += "<li>" + _.template(UIButton_Tpl, {iconType: "icon-addFolder icon-dark", id:"addFolderAction"}) + "</li>";
                buttonHTML += "<li>" + _.template(UIButton_Tpl, {iconType: "icon-tagSmall icon-dark", id:"tagAction"}) + "</li>";
                buttonHTML += "<li class='deleteIC'>" + _.template(UIButton_Tpl, {iconType: "icon-trash", id:"deleteAction"}) + "</li>";
                buttonHTML += "</ul>";


                $(this.el).html(buttonHTML);
                return this;
            }
        });


        return DocumentActions;

    });
