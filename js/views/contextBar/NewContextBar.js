/**
 * File: NewContextBar
 * User: mj69267
 * Date: 3/21/13
 * Time: 1:38 PM
 */

define(
	[   'jquery',
		'underscore',
		'backbone',
		'mediator',
		'views/contextBar/NewContextItemView',
		'views/DropDown',
		'views/contextBar/NewListView',
		'views/contextBar/ContextMemberView',
		'views/contextBar/NewContextAddButton'
	],

	function ($, _, Backbone, Mediator, NewContextItemView, DropDown, ListView, ContextMemberView, NewContextAddButton) {

		var NewContextBar = Backbone.View.extend({
			id             : 'contextBar',
			nextContextList: null,
			newList        : null,
			activeDropDown : null,
			contextBucket  : null,
			editMode       : null,
			updateMode     : null,
			$memberView    : null,
			memberModel    : new Backbone.Model({
				"firstName": "All",
				"lastName" : "Members",
				"status"   : "unlocked",
				"type"     : "member",
				"relation" : "default"
			}),
			events         : function () {
				return App.Models.Inview.get("isIpad") ?
				{
					//"touchstart .showListTrigger":"createList",
					"touchstart .addTrigger": "addOne",
					/* Listening to Custom events */
					"contextItemChosen"     : "addOne",
					"removeSelection"       : "removeOne",
					"editMode"              : "editOne",
					"addList"               : "addNext"
				} :
				{
					//"click .showListTrigger":"createList",
					"click .addTrigger": "addOne",
					/* Listening to Custom events */
					"contextItemChosen": "addOne",
					"removeSelection"  : "removeOne",
					"editMode"         : "editOne",
					"addList"          : "addNext",
					"lock"              : "lockContext"
				}
			},
			initialize     : function () {
				App.Models.Context = {banker: null, client: null, group: null, account: null};
				this.subView = {banker: null, client: null, group: null, account: null};
				this.nextContextList = new Backbone.Collection(this.collection.models);
				this.newList = new Backbone.Collection(this.collection.models);
				this.template = JST['initialContext'];
				this.contextItem = JST['contextItem'];
			},
			render         : function () {
				/* create button */
				var btn = new NewContextAddButton({collection: this.newList});
				this.$el.html(this.template());
				this.contextBucket = this.$el.find('ul.context-list');
				/* append button */
				this.$el.append(btn.render().el);
				return this;
			},
			lockContext : function(event, data){
				console.log(event.type, data.locked)

				if(data.locked) {
					   /* remove class trigger from member and client */
					this.subView.banker.$el.find('button').removeClass('editTrigger');
					this.subView.client.$el.find('button').removeClass('editTrigger');
					console.log('needs to lock context')
				} else {
					/* add trigger class to member and client */
					this.subView.banker.$el.find('button').addClass('editTrigger');
					this.subView.client.$el.find('button').addClass('editTrigger');
					console.log('unlock context now')
				}

			},
			addOne         : function (event, data) {
				var type = data.toJSON().type;
				console.log(App.Models.Context, ' == ',type)
				if(type != 'member'){
					this.$el.addClass('partial');
					if (type === 'account') {
						this.$el.addClass('context-complete');
					}
					if (App.Models.Context[type]) {
						// This is an update
						console.log('Need to do an update');
						this.updateMode = type;
						this.removeOne('event', data);
					}
					if(App.Models.Context.group === null && type === 'account'){
						console.log('TODO: add the group of this account')
						this.groupLogic(this,data);
					};
					this.contextType[type](this, data);

					App.Models.Context[type] = data;
					var contextItem = new NewContextItemView({model: App.Models.Context[type]});
					this.contextBucket.append(contextItem.render().el);
					this.subView[type] = contextItem;
				} else {
					/* Member only */
					this.memberModel.set(data);
				}
				this.activeDropDown.destroy();
				this.updateMode = null;
			},
			groupLogic: function(self, data){

				var id = data.cid,
					clientAlloc = App.Models.Context.client.attributes.allocations,
					item, g, acc, nameMatch = data.attributes.firstName,
					theCollection = null;
				console.log(id, data.attributes.firstName, ' ', data.attributes.lastName)

				for(item in clientAlloc){
					if(clientAlloc[item].name === 'account'){
						for( g in clientAlloc[item].groups){
							for (acc in clientAlloc[item].groups[g].accounts) {

								if(clientAlloc[item].groups[g].accounts[acc].firstName === nameMatch){
									theCollection = new Backbone.Collection(clientAlloc[item].groups);

									theCollection.forEach(function(model){

										_.each(model.attributes.accounts, function(acc){
											if(nameMatch === acc.firstName){

												console.log(nameMatch, ' match ',acc)
												console.log('Model ',model)
												App.Models.Context.group = model;
												var itemView = new NewContextItemView({model: model});
												self.contextBucket.append(itemView.render().el);
												self.subView.group =  itemView;

											}
										})
									}, this)

								}

							}
						}

					}
				};

			},
			editOne        : function (event, data) {
				console.log('---------------------- Listening edit a context');
				this.editMode = data.model;
				//this.newList = this.nextContextList;
				this.nextContextList = data.model.collection;
				this.createList(data.event);
			},
			addNext        : function (event, data) {
				console.log('---------------------- Listening add a context');
				this.editMode = null;
				this.nextContextList = this.newList;
				this.createList(data.event);
			},
			removeOne      : function (event, model) {
				var type = model.toJSON().type;
				switch (type) {
					case 'banker':
						if (!this.updateMode) {
							this.$el.removeClass('partial context-complete');
						}
						for (var key in App.Models.Context) {
							if (App.Models.Context.hasOwnProperty(key) && App.Models.Context[key] !== null) {
								App.Models.Context[key] = null;
								this.subView[key].remove();
							}
						}
						/* if the member is set, it will remove it */
						if(this.subView.member){
							this.subView.member.remove();
							this.memberModel.set({
								"firstName": "All",
								"lastName" : "Members",
								"status"   : "unlocked",
								"type"     : "member",
								"relation" : "default"
							})
						}
						this.$el.removeClass('context-complete');
						this.newList = new Backbone.Collection(BSDATA.bankers)
						break;
					case 'client':
						this.subView.client.remove();
						this.newList = App.Models.Context.client.collection;

						if (App.Models.Context.group) {
							this.subView.group.remove();
							App.Models.Context.group = null;
						}
						if (App.Models.Context.account) {
							this.subView.account.remove();
							App.Models.Context.account = null;
						}
						this.$el.removeClass('context-complete');
						if (App.Models.Context.banker === null && !this.updateMode) {
							this.$el.removeClass('partial');
							this.newList = new Backbone.Collection(BSDATA.bankers)
						}
						/* if the member is set, it will remove it */
						if(this.subView.member){
							this.subView.member.remove();
							this.memberModel.set({
								"firstName": "All",
								"lastName" : "Members",
								"status"   : "unlocked",
								"type"     : "member",
								"relation" : "default"
							})
						}

						break;
					case 'group':
						this.subView.group.remove();
						console.log(App.Models.Context)
						console.log('----------------------------')

						this.newList = new Backbone.Collection(App.Models.Context.client.attributes.allocations)
						if (App.Models.Context.account) {
							this.subView.account.remove();
							App.Models.Context.account = null;
						}
						App.Models.Context.group = null;
						this.$el.removeClass('context-complete');
						break;
					case 'account':
						this.subView.account.remove();
						this.newList = App.Models.Context.account.collection;
						if (!this.updateMode) {
							this.$el.removeClass('context-complete');
						}
						break;
				}
				this.editMode = null;

				this.activeDropDown.destroy()
			},
			createList     : function (event) {
				if (this.activeDropDown) {
					this.activeDropDown.destroy();
				}
				console.log('will create list: ', this.nextContextList.models[0].attributes.type);
				var listView = new ListView({collection: this.nextContextList, remove: this.editMode}),
					dynamicHeight = 0;
				this.activeDropDown = new DropDown({top: 5, left: event.currentTarget.offsetLeft, height: 550, event: event, position: 'left'});
				this.$el.append(this.activeDropDown.render().el);
				this.activeDropDown.$el.find('.drop-down-content').html(listView.render().el);
				dynamicHeight = this.$el.find('.drop-down-content').height();
				dynamicHeight = (dynamicHeight >= 550) ? 550 : dynamicHeight;
				this.activeDropDown.$el.find('.drop-down-inner').css({height: dynamicHeight});
				this.activeDropDown.$el.find('.list-viewport').css({height: dynamicHeight - 86});
			},
			contextType    : {
				'banker' : function (self, model) {
					/* Set next context to this model relations*/
					self.nextContextList = new Backbone.Collection(model.toJSON().relationships);
					self.newList = new Backbone.Collection(model.toJSON().relationships);
				},
				'client' : function (self, model) {
					self.nextContextList = new Backbone.Collection(model.toJSON().allocations);
					self.newList = new Backbone.Collection(model.toJSON().allocations);

					/* add member context */
					self.subView.member = new ContextMemberView({model: self.memberModel});
					self.$el.append(self.subView.member.render().el);
				},
				'allocations': function(){
					console.log('to set the accounts and groups')
				},
				'group'  : function (self, model) {

					self.nextContextList = new Backbone.Collection(model.toJSON().accounts);
					self.newList = new Backbone.Collection(model.toJSON().accounts);
				},
				'account': function (self, model) {
					//self.nextContextList = new Backbone.Collection(BSDATA.bankers);
					//self.newList = new Backbone.Collection(BSDATA.bankers);

				},
				'member': function(self, model){
					 self.memberModel.set(model,{silent:true});
				}
			}
		})

		/* Return the created Backbone Class, which uses by default the same file name */
		return NewContextBar;
	}
);