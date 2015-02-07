define(
	['jquery', 'underscore', 'backbone', 'views/contextBar/SubListView'],
	function($, _, Backbone, SubListView){

		var ListItemView = Backbone.View.extend({
			tagName: 'tr',
			initialize: function(){
				var templateType = this.model.toJSON().type;
				this.template = JST[templateType];

			},
			render: function(){
				var data = this.model.toJSON();
				this.$el.html(this.template(data));
				return this;
			},
			events : {
				'click .seeDependency': 'seeDependency',
				'click .setContextItem': 'setContextItem'
			},
			seeDependency:function(event) {
				/* get the relation of the model */

				var type = this.model.toJSON().type;
				var subListView = this.listMap[type](this);
				console.log(type, ' Setting dependency !!! ')
				/* trigger custom event for the parent view to insert the view passed as a param*/

				this.$el.trigger('setDependency',subListView);
			},
			setContextItem: function(){
				this.$el.trigger('contextItemChosen', this.model);
			},
			listMap: {
				banker: function(self){
					console.log('whos calling this')
					return new SubListView({collection: new Backbone.Collection(self.model.toJSON().relationships)})
				},
				group: function(self){
					var groups, accounts;
					console.log('is this group? ', self.model)
				},
				account: function(){},
				type: function(self){
					var data = self.model.toJSON(),
						typeName = data.name,
						newViewOut = null,
						tmpList = [];
					console.log('creating allocation: ', self.model);
					console.log('this the type name: ',typeName);
					if(typeName === 'group'){
						newViewOut =  new SubListView({collection: new Backbone.Collection(self.model.toJSON().groups)})
					} else {
						/* Set silently the App.Model.Context.group */
						for(var g in data.groups) {
							for( var acc in data.groups[g].accounts){
								tmpList.push(data.groups[g].accounts[acc])
							}
						};
						newViewOut = new SubListView({collection: new Backbone.Collection(tmpList)})
					}
					return newViewOut;
				}
			}
		})

		return ListItemView; /* return the backbone view*/
	}
)