define(['backbone','underscore',
    'models/Tag',
    'collections/Tags'

], function(Backbone, _,
            Tag_Model,
            Tags_Collection


    ){

    var VaultDocument = Backbone.Model.extend({

		defaults : {
            title: "Not specified",
            type: "PDF",
            link: "test.pdf",
            accountNumber: "ACC1234456789101112",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis blandit urna id sagittis. Quisque rhoncus magna eget risus pharetra eleifend.",
            "pubDate":
            {       "month": 2
                ,

                    "day": 29
                ,

                    "year": 2012
            }

        },

        //tags: new

//        parse: function(response) {
//            console.log(response);
//            var tagsJSON = response.tags;
//            this.tags = new Tags_Collection(tagsJSON) ;
//            return response;
//        },

		initialize : function(options) {
			_.bindAll(this, 'addTag');



            console.log("In herer");

            this.tags = new Tags_Collection(this.get("tags"));

		},

        addTag: function(tagModel){
            console.log("in add Tag VaultDocument model ");
            if(this.tags){
                this.tags.add(tagModel);
            }else{
                this.tags = new Tags_Collection(tagModel)
            }


        }

    })

	return VaultDocument;
});




