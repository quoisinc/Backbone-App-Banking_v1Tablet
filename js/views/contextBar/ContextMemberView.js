/**
 * File: ContextMemberView
 * User: mj69267
 * Date: 3/6/13
 * Time: 11:35 AM
 */

define(
	[
		'jquery',
		'underscore',
		'backbone',
		'views/contextBar/NewListView',
		'views/DropDown',
		'views/contextBar/ContextPassword',
		'views/UI/UI-Overlay',
		'models/UI/UI-Overlay'
	],
	function ($, _, Backbone, ListView, DropDown, ContextPassword, UIOverlay, UIOverlayModel) {

		var ContextMemberView = Backbone.View.extend({
			activeDropDown: null,
			memberList: new Backbone.Collection(),
			className: 'member-context pull-right',
			parent: $('#contextBar'),
			events: {
				'click .lockTrigger': 'locking',
				'click .unlockedStatus': 'displayList',
				'click .setContextItem':'closeOverlay'
			},
			initialize: function(){
				/* !IMPORTANT: Place the template definition here to avoid cache issue */
				this.template = JST['memberContext'];
				this.model.on('change', this.render, this);
			},
			render: function(){
				var data = this.model.toJSON()
				this.$el.html(this.template(data));
				if(data.status === 'unlocked'){
					this.$el.trigger('lock',{locked:false});
				}
				return this;
			},
			locking: function(event){
				var password = '',
					passwordPrompt = null,
					overlay;

				if(this.model.get('status') ===  'locked'){
					/* Password view setup */
					passwordPrompt = new ContextPassword({model: this.model});
					/* Overlay Model & view Setup*/
					overlay = new UIOverlay({model: new UIOverlayModel({width: 300, height: 237})});
					overlay.addView(passwordPrompt)
				 } else {
				    this.model.set({status: 'locked'});
					this.$el.trigger('lock',{locked:true})
				 }

			},
			closeOverlay: function(event){
				this.activeDropDown.destroy();
			},
			displayList: function(event){
				var dynamicHeight = 0;
				/* it closes any open drop down context */
				if(this.activeDropDown){
					this.activeDropDown.destroy();
					this.memberList.off('reset');
				}
				/* create drop down overlay */
				this.activeDropDown = new DropDown({top: 5, left: event.currentTarget.offsetLeft, height: 550, position: 'right', event: event});
				/* it renders it into the context bar */
				this.$el.append(this.activeDropDown.render().el);
				this.memberList.on('reset', function(){
					// create a view for the list
					var listView = new ListView({collection: this.memberList});
					// appends the list to the drop down content div
					this.$el.find('.drop-down-content').html(listView.render().el);
					dynamicHeight = this.$el.find('.drop-down-content').height();
					dynamicHeight = (dynamicHeight >= 550)? 550 : dynamicHeight;
					this.activeDropDown.$el.find('.drop-down-inner').css({height: dynamicHeight});
					this.activeDropDown.$el.find('.list-viewport').css({height: dynamicHeight-86});
				}, this);
				/* Trigger a reset event on the collection with a json */
				this.memberList.reset(BSDATA.members);
			}
		})

		/* Return the created Backbone Class, which uses by default the same file name */
		return ContextMemberView;
	}
);