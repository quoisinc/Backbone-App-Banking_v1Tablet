/**
 * File: smartFeed
 * User: mj69267
 * Date: 3/12/13
 * Time: 2:57 PM
 */

define(
	['jquery', 'underscore', 'backbone', 'mediator'],
	function ($, _, Backbone, Mediator) {
		var smartFeed = Backbone.View.extend({
			className:'collapseable animate-slow-to-fast',
			events:{
				'click h4': 'expandContent',
				'click .aside-tab': 'slideTab'
			},
			$previous : null,
			initialize: function(){
				console.clear();
				/* Main template */
				this.template = JST['smartFeed'];
				/* Sections */
				this.sectionView = JST['smartFeedSection'];
				/* Feeds */
				this.insightsfeed = JST['insightsfeed'];
				this.statementsfeed = JST['statementsfeed'];
				this.opportunities = JST['opportunities'];

				this.collectionSize = this.collection.length;
			},
			render:function(){
				this.$el.html(this.template());
				/* Loop the fee types */
				this.collection.forEach(function(item){
					var data = item.toJSON()
					this.$el.find('.collapseable-content').append(this.sectionView(data));
					/* Loop the docs of each feed type*/
					_.each(data.documents, function(doc){
						this.$el.find('section.'+data.type).append(this[data.type](doc));
					}, this)

				}, this)
				return this;
			},
			expandContent: function(event){
				var diff = this.collectionSize,
					pHeight = this.$el.parent().height(),
					nextHeight = pHeight -(diff*35),
					$pane = $(event.currentTarget);
				if($pane.next().hasClass('expanded')){
					$pane.next().css({height: 0}).removeClass('expanded');
					$pane.removeClass('expanded');
					this.$previous = null;
				} else {
					if(this.$previous){
						this.$previous.next().css({height: 0}).removeClass('expanded');
						this.$previous.removeClass('expanded');
					}
					$pane.next().css({height: nextHeight}).addClass('expanded');
					$pane.addClass('expanded');
					this.$previous = $pane;
				}
			},
			slideTab: function(context){
				var self = this;
				if (this.$el.hasClass('open')) {
					$('.back-drop-dark').off('click.dark');
					$('#iv_main').find('.back-drop-dark').remove();
					this.$el.removeClass('open')
				} else {
					this.$el.addClass('open')
					$('#iv_main').append('<div class="back-drop-dark animate-opacity"></div>')
					this.backDropListen();
				};
				window.setTimeout(function(){
					var $h4 = self.$el.find('h4').first();
					if(!self.$previous){
						$h4.click();
					}

				}, 600)
			},
			backDropListen: function(){
				var self = this;
				$('.back-drop-dark').css({background: 'rgba(0,0,0, 0.5)'}).on('click.dark', function(){
					$('.back-drop-dark').off('click.dark');
					$('#iv_main').find('.back-drop-dark').remove();
					self.$el.removeClass('open')
				});
			}

		})

		/* Return the created Backbone Class, which uses by default the same file name */
		return smartFeed;
	}
);