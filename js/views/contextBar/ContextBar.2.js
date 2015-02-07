define([
	'jquery', 'backbone', 'underscore', 'mediator',
	'views/DropDown',
	'views/contextBar/ListView',
	'views/contextBar/ContextMemberView'
],
	function ($, Backbone, _, Mediator, DropDown, ListView, ContextMemberView) {

		var ContextBar_View = Backbone.View.extend({
			buttonTree    :{},
			activeDropDown:null,
			library       :new Backbone.Collection(),
			dependency    :null,
			count         :0,
			total         :0,
			markup        :'',
			mode          :'add',
			edit          :null,
			id            :'contextBar',
			iconLocation  :'<li class="fake-li divided"><span class="icon-all icon-location"></span></li>',
			setLocation   :'<li class="fake-li"><button class="button trans flat icon"><span class="icon-all icon-location"></span> <span>Set Context</span></button></li>',
			addButton     :'<a id="addNewContext" class="button icon"><span class="icon-all icon-add"></span></a>',
			events        :function () {
				return App.Models.Inview.get("isIpad") ?
				{
					"touchstart #addNewContext"     :"addContextLevel",
					"touchstart .editContextTrigger":"editContext",
					/* Listening to Custom events */
					"contextItemChosen"             :"setContextItem",
					"removeSelection"          :"selectionDelete"
				} :
				{
					"click #addNewContext"     :"addContextLevel",
					"click .editContextTrigger":"editContext",
					/* Listening to Custom events */
					"contextItemChosen"        :"setContextItem",
					"removeSelection"          :"selectionDelete"
				}
			},
			initialize    :function () {
				App.Models.Context = this.model;
				this.model.on('change', this.render, this);
				this.total = _.size(this.model.defaults) - 2; // Minus the member & root model
			},

			render         :function () {
				var diff = this.model.changedAttributes(),
					member = null;
				//console.log("render ContextBar_View | this.count: ", this.count,' this.total', this.total);
				for (var att in this.model.toJSON()) {
					if (att !== 'root' && att !== 'member') {
						if (this.model.has(att)) {
							//console.log('render --------------------------------------- ',att);
							var data = this.model.get(att).toJSON();
							this.markup += "<li>" + this.genButton(this.model.get(att).toJSON()) + "</li>";
						}
					}
				}
				if ((this.dependency && this.count >= 0)) {
					this.markup = "<ul class='list inline drill'>" + this.markup + "</ul>";
				} else {
					this.markup = "<ul class='list inline drill'>" + this.setLocation + "</ul>";
				}
				this.$el.html(this.markup);
				if (this.count === 0 || (this.dependency && this.count < this.total)) {
					this.$el.append(this.addButton)
				}
				/* shows member if there is client selected */
				if (this.model.has('client')) {
					member = new ContextMemberView({model:this.model.get('member')});
					this.$el.append(member.render().el);
				}
				return this;
			},
			updateSelection:function (diff) {
				var data = null;
				for (var att in diff) {
					if (att !== 'root') {
						data = this.model.get(att).toJSON();
						$(this.edit.currentTarget).html('<span class="icon-all icon-' + data.type + '"></span>&nbsp;' + data.firstName + '&nbsp;' + data.type);
						if (this.activeDropDown) {
							this.activeDropDown.remove();
							this.library.off('reset');
						}
						;
						this.edit = null;
					}
				}
			},
			appendButton   :function (newBtn) {
				for (var btn in this.buttonTree) {
					if (this.buttonTree[btn]) {
						if (this.buttonTree[btn].dependecy) {
							this.appendButton(newBtn)
						}
					} else {
						this.buttonTree.btn = newBtn;
					}
				}
			},
			genButton      :function (selected) {
				return '<button data-type="' + selected.type + '" class="editContextTrigger button trans flat icon"><span class="icon-all icon-' + selected.type + '"></span>&nbsp;' + selected.firstName + '&nbsp;' + selected.type + '</button>';
			},
			addContextLevel:function (event) {
				event.stopPropagation();
				event.preventDefault();
				var dynamicHeight = 0;
				/* it closes any open drop down context */
				if (this.activeDropDown) {
					this.activeDropDown.destroy();
					this.library.off('reset');
				}
				/* Populate drop down  first list */
				this.dependency = this.model.getDependency();

				/* create drop down overlay */
				this.activeDropDown = new DropDown({top:5, left:event.currentTarget.offsetLeft, height:550, event:event, position:'left'});
				/* it renders it into the context bar */
				this.$el.append(this.activeDropDown.render().el);
				this.library.on('reset', function () {
					// create a view for the list
					var listView = new ListView({collection:this.library});
					// appends the list to the drop down content div
					this.$el.find('.drop-down-content').html(listView.render().el);
					dynamicHeight = this.$el.find('.drop-down-content').height();
					dynamicHeight = (dynamicHeight >= 550) ? 550 : dynamicHeight;
					this.activeDropDown.$el.find('.drop-down-inner').css({height:dynamicHeight});
					this.activeDropDown.$el.find('.list-viewport').css({height:dynamicHeight - 86});
				}, this);
				/* Trigger a reset event on the collection with a json */
				this.library.reset(this.dependency);
			},
			setContextItem :function (event, model) {
				var type = model.type,
					tmp = null;
				//console.log(' --------------------------------------- setContextItem : ', type)
				switch (type) {
					case 'banker':
						this.count = 0;
						this.markup = this.iconLocation;
						this.model.set({banker:new Backbone.Model(model), client:null, group:null, account:null});
						break;
					case 'client':
						this.markup = this.iconLocation;
						if (!this.model.has('banker') && this.edit) {
							this.count = 1;
							this.model.set({client:new Backbone.Model(model), banker:null, group:null, account:null});
						} else {
							this.count = 2;
							this.model.set({client:new Backbone.Model(model), group:null, account:null});
						}
						;
						tmp = new Backbone.Model({"firstName":"All", "lastName":"Members", "status":"unlocked", "type":"member", "relation":"default"})
						this.model.set({member:tmp}, {silent:true});
						break;
					case 'group':
						this.markup = this.iconLocation;
						this.count = (this.count === 2 ) ? 3 : 2;
						//console.log('group: ',this.count)
						this.model.set({group:new Backbone.Model(model), account:null});

						break;
					case 'account':
						this.markup = this.iconLocation;
						this.count = (this.count <= 4) ? 4 : ++this.count;
						this.model.set({account:new Backbone.Model(model)});
						break;
					case 'member':
						this.markup = this.iconLocation;
						this.model.set({member:new Backbone.Model(model)});
						//console.log('Member has been Set: ', this.model.get('member'));
						break;
				}
				;
				this.edit = false;
				if (this.activeDropDown) {
					this.activeDropDown.destroy();
					this.library.off('reset');
				}

			},

			editContext    :function (event) {
				var contextModel = this.model,
					target = $(event.currentTarget).data('type'),
					dynamicHeight = 0;
				event.stopPropagation();
				event.preventDefault();
				this.edit = true;
				//console.log('Edit target: ',target, 'this.edit', this.edit);

				/* it closes any open drop down context */
				if (this.activeDropDown) {
					this.activeDropDown.destroy();
					this.library.off('reset');
				}
				;
				/* Populate drop down  first list */
				this.dependency = this.model.getCollection(target);
				//console.log('this.dependency: ', target, ' : ',this.dependency)
				this.activeDropDown = new DropDown({top:7, left:event.currentTarget.offsetLeft, height:550, event:event, position:'left'});
				//it renders it into the context bar
				this.$el.append(this.activeDropDown.render().el);
				this.library.on('reset', function () {
					//console.log('this.library: ', this.library.models[0].attributes.type)
					// create a view for the list
					var listView = new ListView({collection:this.library, remove:this.library.models[0].attributes.type});
					// appends the list to the drop down content div
					this.$el.find('.drop-down-content').html(listView.render().el);
					dynamicHeight = this.$el.find('.drop-down-content').height();
					dynamicHeight = (dynamicHeight >= 550) ? 550 : dynamicHeight;
					this.activeDropDown.$el.find('.drop-down-inner').css({height:dynamicHeight});
					this.activeDropDown.$el.find('.list-viewport').css({height:dynamicHeight - 86});
				}, this);
				//Trigger a reset event on the collection with a json
				this.library.reset(this.dependency);
			},
			selectionDelete:function (event, selection) {
				var self = this,
					tmp = null;
				//console.log('Deleting this: ',selection)
				switch (selection) {
					case 'banker':
						this.markup = this.setLocation;
						this.count = 0;
						this.model.set({banker:null, client:null, group:null, account:null});
						tmp = new Backbone.Model({"firstName":"All", "lastName":"Members", "status":"unlocked", "type":"member", "relation":"default"})
						this.model.set({member:tmp}, {silent:true});
						break;
					case 'client':
						this.markup = this.iconLocation;
						this.count = 1;
						this.model.set({ client:null, group:null, account:null});
						tmp = new Backbone.Model({"firstName":"All", "lastName":"Members", "status":"unlocked", "type":"member", "relation":"default"})
						this.model.set({member:tmp}, {silent:true});
						break;
					case 'group':
						this.markup = this.iconLocation;
						this.count = 2;
						this.model.set({group:null, account:null})
						break;
					case 'account':
						this.count = 3;
						this.markup = this.iconLocation;
						this.model.set({ account:null})
						break;
				}
				;
				this.edit = false;
				if (this.activeDropDown) {
					this.activeDropDown.destroy();
					this.library.off('reset');
				}
			}

		});
		return ContextBar_View;
	});