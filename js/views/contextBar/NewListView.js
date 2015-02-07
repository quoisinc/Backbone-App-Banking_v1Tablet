/* File: bankerList.js
 * it renders the book collection */

define(
	[
		'jquery',
		'underscore',
		'backbone',
		'views/contextBar/NewListItemView'
	],
	function($, _, Backbone, ListItemView){

		var ListView = Backbone.View.extend({
			tagName: 'div',
			className: 'list-filter',
			initialize: function(){
				var title = this.collection.models[0].attributes.type.toUpperCase(),
					removeLink = '',
					removeCopy = '',
					currentSelection ='',
					finalOutput = null,
					modelSet = this.options.remove;
				/* Extending the collection width a search method  */
				this.collection.search = function(letters){
					if(letters == "") return this;
					var pattern = new RegExp(letters.toLowerCase()),
						attr;
					var list =  this.filter(function(data) {
						attr = data.get("firstName")+data.get("lastName");
						attr = attr.toLowerCase()
						return pattern.test(attr);
					});
					return new Backbone.Collection(list)
				};
				this.collection.on('reset', this.render, this)
				if(modelSet){
					switch(modelSet.toJSON().type){

						case 'banker':
								currentSelection = modelSet.toJSON(); //App.Models.Context.toJSON().banker.attributes;
								removeCopy = 'banker '+ currentSelection.firstName + ' ' + currentSelection.lastName;
							break;
						case 'client':
							currentSelection = currentSelection = modelSet.toJSON(); //App.Models.Context.toJSON().client.attributes;
							removeCopy = 'relationship '+ currentSelection.firstName + ' ' + currentSelection.lastName;
							break;
						case 'group':
							currentSelection = currentSelection = modelSet.toJSON(); //App.Models.Context.toJSON().group.attributes;
							removeCopy = 'group '+ currentSelection.firstName + ' ' + currentSelection.lastName;
							break;
						case 'account':
							currentSelection = currentSelection = modelSet.toJSON(); //App.Models.Context.toJSON().account.attributes;
							removeCopy = 'account '+ currentSelection.firstName + ' ' + currentSelection.lastName;
							break;

					};
					removeLink = '<div class="button trans flat icon"><span class="icon-all icon-close removeTrigger"></span> Remove '+removeCopy+'</div>';
				}
				finalOutput = (removeLink === '')? title : removeLink;
				this.$el.html('<h5 class="header-list"><span class="display-name">'+finalOutput+'</span></h5><form><input class="drop-search" type="search" placeholder="Filter List" /></form><div class="list-viewport"><table class="list listView"></table></div>');
			},
			events : {
				'setDependency' : 'addDependency',
				'click .removeTrigger': 'onRemove',
				'keyup .drop-search': 'listFilter'
			},
			render: function(){
				this.renderList(this.collection);
				return this;
			},
			renderList: function(list){
				this.$el.find('.listView').html('');
				_.each(list.models,function(item){
					this.renderItem(item);
				}, this)
			},
			renderItem: function(item){
				var itemView = new ListItemView({model: item});
				this.$el.find('.listView').append(itemView.render().el);
			},
			addDependency: function(event, clientsView){
				this.$el.next().remove();
				this.$el.parent().append(clientsView.render().el);
				this.$el.trigger('slide','forward')
			},
			onRemove: function(){
				this.$el.trigger('removeSelection', this.options.remove)
			},
			listFilter: function(event){
				var word = event.currentTarget.value;
				this.renderList(this.collection.search(word));
			}
		});
		return ListView;
	}
);