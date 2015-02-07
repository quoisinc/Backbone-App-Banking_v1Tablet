define(['jquery', 'backbone', 'underscore',

    'models/UI/UI-Panel',
    'models/UI/UI-Pane',
    'models/VaultDocument',

    'views/vault/UploadDocumentAddTags',
    'views/UI/UI-Panel',
    'views/UI/UI-Pane',

    'text!../../../templates/vault/uploadDocument.html',
    'text!../../../templates/vault/uploadDocument_addTags.html'


],
	function($, Backbone, _,

             UIPanel_Model,
             UIPane_Model,
             VaultDoc_Model,


             UploadDocumentAddTags_View,
             UIPanel_View,
             UIPane_View,

             UploadDocument_Tpl,
             UploadDocumentAddTags_Tpl
    ) {





	var Upload_View = Backbone.View.extend({
        className: "uploadDocumentView",



        initialize: function(){
            _.bindAll(this, 'render', 'addTagsPanel', 'contentChanged', 'addTagToDocument');
            this.inputContent = this.$('input#documentTitle');
               this.model = new VaultDoc_Model();


        },
		events: function(){
            return App.Models.Inview.get("isIpad") ?
            {
                "touchstart #addTagsButton": "addTagsPanel"
            } :
            {
//                "change input":  "contentChanged",
//                "change textarea":  "contentChanged",
                "click #addTagsButton": "addTagsPanel",
                "click #addTag": "addTagToDocument"
            }
		},



        render: function(){
            //var template = _.template( UIPanel_Tpl, { name: this.model.get('name')} );

            var folderList = [];
            var groupSelected = "";
            App.Collections.VaultDocumentsGroups.each(function(m){
                folderList.push(m.get("title"));
                if (m.get("isSelected")) groupSelected = m.get("title");
            })

            var template = _.template( UploadDocument_Tpl, {
                "folderList": folderList,
                "groupSelected": groupSelected
            } );

//            $(this.el).html(template);





            //CREATE PANEL FOR UPLOAD SCREENS
            var uploadPanelModel = new UIPanel_Model( {
                'itemID': 'uploadPanel',
                'transitionIn' : false
            } );
            App.Views.UIPanel3 = new UIPanel_View( { model: uploadPanelModel } );
            var uploadPaneModel1 = new UIPane_Model({ title: "Secure Upload", paneData: template, transitionIn: false});
            var uploadPaneView1 = new UIPane_View({ model : uploadPaneModel1 });
            $(this.el).html(App.Views.UIPanel3.render().el);
            App.Views.UIPanel3.addPane(uploadPaneView1);






            return this;

        },


        contentChanged: function(e) {


            var changed = e.currentTarget;
            var value = $("#"+changed.id).val();
            var obj = "{\""+changed.id +"\":\""+value+"\"}";
            var objInst = JSON.parse(obj);
           // this.model.set(objInst);

            console.log(objInst);
            // if you use local storage save
            //this.model.save({content: input.val()});

            // if you send request to server is prob. good idea to set the var and save at the end, in a blur event or in some sync. maintenance timer.
            // this.model.set({content: input.val()});
        },

        addTagsPanel: function(){

            //VALIDATE
            var documentTitle = $("#documentTitle").val();
            var documentDescription = $("#documentDescription").val();
            var folder = $("#folder").val();
            console.log(folder, ": Folder");

//            App.Models.NewVaultDoc = new VaultDoc_Model({
            this.model = new VaultDoc_Model({
                title: documentTitle,
                description: documentDescription,
                toFolder: folder
            })



            var addTagsPanel_View  = new UploadDocumentAddTags_View({model: this.model});

//            var template2 = _.template( UploadDocumentAddTags_Tpl );
            var uploadPaneModel2 = new UIPane_Model({ title: "Secure Upload: Add Tags", paneData: addTagsPanel_View});
            var uploadPaneView2 = new UIPane_View({ model : uploadPaneModel2 });
            App.Views.UIPanel3.addPane(uploadPaneView2);

//            var uploadDocumentAddTags_View = new UploadDocumentAddTags_View();
//            App.Views.UIPanel3.model.set('currPanel', uploadDocumentAddTags_View);

        },

        addTagToDocument: function(){
//            var tag = $("#tag").val();
//            App.Models.NewVaultDoc.addTag(tag);

        }
        
        

	});

	return Upload_View;

});

