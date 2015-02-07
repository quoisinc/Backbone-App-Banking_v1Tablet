/**
 * File: ContextPassword
 * User: mj69267
 * Date: 3/8/13
 * Time: 4:19 PM
 */

define(
	['jquery', 'underscore', 'backbone', 'mediator'],
	function ($, _, Backbone, Mediator) {

		var ContextPassword = Backbone.View.extend({
			className: 'content',
			events: {
				'click .unlockTrigger': 'verifyPassword',
				'click .confirmTrigger': 'confirmUnlock',
				'click .cancelTrigger': 'cancel'
			},
			initialize: function(){
				this.passwordPromptTemplate = JST['passwordPrompt'];
				this.confirmUnlockedTemplate = JST['confirmUnlocked'];
				//console.log('Model: ',this.model)
			},
			render: function(){
				this.$el.html(this.passwordPromptTemplate());
				return this;
			},
			verifyPassword: function(){
				//console.log('verify password before before unlocking...');
				this.$el.html(this.confirmUnlockedTemplate())

			},
			confirmUnlock: function(){
				//console.log('About to confirm unlock! ', this.model)
				Mediator.publish('closeOverlay');
				this.model.set({status: 'unlocked'})
			},
			cancel: function(){
				Mediator.publish('closeOverlay');
			}
		})

		/* Return the created Backbone Class, which uses by default the same file name */
		return ContextPassword;
	}
);