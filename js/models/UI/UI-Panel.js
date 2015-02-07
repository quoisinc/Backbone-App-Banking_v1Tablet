define(['backbone','underscore',
    'collections/UI/UI-Panes'
    ], function(Backbone, _,
        UIPanes_Coll

    ) {







    var model = Backbone.Model.extend({

        defaults : {
            height : '100%',
            width : '100%',
            retainPanes : true,
            panelType: 'navigation',  // types: step, carosel
            entryDirection: 'leftSide',
            contentPanes: new UIPanes_Coll()
        },



        initialize : function() {
            _.bindAll(this, 'addPane');
//            console.log("in panel model");

        },
        addPane : function (paneObj){
//            console.log("addpane model");
//            console.log(paneObj);
            //var newPane = new Pane(paneObj);
           //this.contentPanes.add(newPane);
           // console.log(this.get('contentPanes'));
        }



    });

	return model;
});




