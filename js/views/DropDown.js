/**
 * File: DropDown
 * User: mj69267
 * Date: 2/26/13
 * Time: 12:14 PM
 */

define(
	['jquery', 'underscore', 'backbone','jst/jst' ],
	function ($, _, Backbone, JST) {
		/* TODO: Need to extend (View, Model, Collection, etc) */
		var DropDown = Backbone.View.extend({
			defaults : {
				top: 0,
				left: 0,
				width: 300,
				height: 500,
				position: 'left',
				pointer: {
					top: 0,
					left: '50%'
				}
			},
			className: 'drop-down',
			template: JST['dropDown'],
			render: function(){
				this.$el.html(this.template({location: 'top'}));
				//this.$el.find('.drop-down-inner').css({height: this.options.height});
				if(this.options.position === 'right'){
					this.$el.find('.pointer').css({left: this.options.width-(this.options.event.currentTarget.offsetWidth)});
				} else {
					this.$el.find('.pointer').css({left: this.options.pointer.left});
				}

				return this;
			},
			events : {
				'slide': 'slider'
			},
			initialize: function(){
				var oTop, oLeft, pLeft, self = this;
				oTop = ((this.options.event.currentTarget.offsetHeight) + this.options.top);
				this.options = _.extend(this.defaults, this.options)
				if(this.options.position === 'right'){
					/* Right position setup */
					oLeft = this.options.event.currentTarget.offsetLeft-(this.options.event.currentTarget.offsetWidth*2);
					pLeft = (this.options.event.currentTarget.offsetWidth/2)-10;
					this.options.pointer.left = pLeft;
					this.$el.css({ top: oTop, right: oLeft, width: this.options.width})
				} else {
					/* --------------------------------------------------------- Left position setup */
					oLeft = this.options.event.currentTarget.offsetLeft-20;
					pLeft = (this.options.event.currentTarget.offsetWidth/2)+10;
					this.options.pointer.left = pLeft;
					this.$el.css({ top: oTop, left: oLeft, width: this.options.width})
				}
				$('#iv_main').append('<div class="back-drop"></div>').click(function(event){
					event.stopPropagation();
					event.preventDefault();
					if(event.target.className === 'back-drop'){
						self.destroy();
					}
				});
			},
			slider: function(e,indicator){
				var context = this,
					direction = {
						back: function(){
							return 0;
						},
						forward: function(){
							return '-300px';
						}
					};
				this.$el.find('.drop-down-content').css({ transform: "translatex("+direction[indicator]()+")"})
			},
			destroy: function(){
				this.remove();
				this.unbind();
				$('body').find('.back-drop').remove();
			}
		})

		/* Return the created Backbone Class, which uses by default the same file name */
		return DropDown;
	}
);