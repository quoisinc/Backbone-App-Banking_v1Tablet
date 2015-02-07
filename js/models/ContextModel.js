/**
 * File: ContextModel
 * User: mj69267
 * Date: 2/28/13
 * Time: 11:04 AM
 */

define(
	['jquery', 'underscore', 'backbone'],
	function ($, _, Backbone) {
		var ContextModel = Backbone.Model.extend({
			defaults:{
				banker: null,
				client: null,
				group: null,
				account: null,
				member : new Backbone.Model({
												"firstName": "All",
												"lastName": "Members",
												"status": "unlocked",
												"type": "member",
												"relation": "default"
											}),
				root: null
			},
			getCollection: function(target){
				var dependency = null;
				switch (target) {
					case 'banker':
						dependency = BSDATA.bankers
						break;
					case 'client':
						if(!this.has('banker')){
							dependency = BSDATA.bankers
						} else {
							dependency = this.get('banker').toJSON().relationships;
						}
						break;
					case 'group':
						dependency = this.get('client').toJSON().groups;
						break;
					case 'account':
						dependency = this.get('group').toJSON().accounts;
				}
				return dependency;
			},
			getDependency: function(){
				if(!this.has('banker') && !this.has('client')){
					return BSDATA.bankers
				}

					if(this.has('client')){

						if(this.has('group')){

							if(this.has('account')){
								/* otherwise returns null*/
								return null
							} else {
								return this.get('group').toJSON().accounts
							}
						} else {
							/* Returns the accounts for the group */

							return this.get('client').toJSON().groups
						}

					} else {
						/* Returns the groups for the client */
						return this.get('banker').toJSON().relationships;
					}
			}
		})
		return ContextModel;
	}
);