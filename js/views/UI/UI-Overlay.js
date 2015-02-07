define(['jquery', 'backbone', 'underscore','mediator',
    'text!../../../templates/UI/UI-Overlay.html'
    ],
	function($, Backbone, _, Mediator,
        UIOverlay_Tpl
    ) {


	var UIOverlay_View = Backbone.View.extend({
        id: "overlay",
        className: "overlayView",
        initialize: function(){
            _.bindAll(this, 'render', 'close', 'addView');
            this.model.on('change', this.genContentView, this);

            Mediator.subscribe("closeOverlay", this.close);
//            Mediator.subscribe("closeOverlayToPoint", this.closeToPoint);

            Mediator.subscribe("blackhole:overlay", this.closeToPoint);

        },
		events: function(){
            return App.Models.Inview.get("isIpad") ?
            {
                "touchstart": "checkWhereTappedforClose",
                "touchstart #closeButton": "close"

            } :
            {
                "click": "checkWhereTappedforClose",
                "click #closeButton": "close"
            }

		},
        render: function(){

            var template = _.template( UIOverlay_Tpl, {
                hasCloseButton: this.model.get('hasCloseButton')
            } );
            $(this.el).html(template);
            if (this.model.get("hasBlanket")){

                $(this.el).find("#overlay-blanket").css({
                    'background-color': this.model.get("blanketColor"),
                    'opacity': this.model.get("blanketOpacity")

                })

            }

            this.overlayWindow = $(this.el).find("#overlay-content");
            this.contentView  = $(this.el).find("#overlay-content-content");
            this.height = this.model.get('height');
            this.width = this.model.get('width');


            this.overlayWindow.css({
                'position' : 'absolute',
                'width'  : this.width+'px',
                'height' : this.height+'px',
                'left' : ($(window).width()/2) - (this.width/2),
                'top'  : ($(window).height()/2) - (this.height/2)


            });

//            console.log("width: " + $(window).width());

//            this.el.addEventListener('webkitTransitionEnd', function( event ) {
//                    console.log("transition end");
//                    this.remove();
//                },
//            false );


            return this;

        },

        checkWhereTappedforClose : function(e){
//            console.log(e.target.id);
            if ((e.target.id == "overlay-blanket") || (e.target.id == "overlay-close")){
               this.close();
            }

        },

        addView: function(newView){
            $("body").append(this.render().el);
            this.contentView.html(newView.render().el);
        },

        genContentView: function(){
            var newPanel = this.model.get("contentView");
            var contentPanel = $(this.el).find("#overlay-content-content");
            contentPanel.html(newPanel.render().el);
        },

        close: function (){
           console.log("closing");



//            $(this.el).find("#overlay-content").css({
//                "-webkit-transition" : "0.3s"
//            });
//            $(this.el).find("#overlay-content").css({
//                "-webkit-transform": "scale(0.1)",
//                opacity:0.5
//            });



            $(this.el).remove();
        },

        closeToPoint: function (bhPosition){
            $("#overlay-blanket").remove();
            $("#overlay-content").css({
                "position": "absolute"
            });

            var that = this;

            var overlayContentBlock = $("#overlay-content");

            //get current position
            var elPos =  overlayContentBlock.position();
            var elWidth =  overlayContentBlock.width();
            var elHeight =  overlayContentBlock.height();

            var elPosition = {
                elCenterX :  elPos.left + (elWidth/2),
                elCenterY :  elPos.top + (elHeight/2)
            }

            var moveX = elPosition.elCenterX - bhPosition.x;
            var moveY = elPosition.elCenterY - bhPosition.y;

            console.log(elPosition, "elPosition");
            console.log(bhPosition, "bhPosition");


            $("#overlay-content").addClass("animate-slow-to-fast");

            setTimeout(function (){
                $("#overlay-content").css({
                    "-webkit-transform": "translate3d(-"+moveX+"px,-"+moveY+"px,0) scale(0) "
                });
            }, 40);

            setTimeout(function (){
                $("#overlay").remove();
            }, 500);


//            setTimeout(function (){
//                var overlayContentBlock = $("#overlay-content");
//
//                //get current position
//                var elPos =  overlayContentBlock.position();
//                var elWidth =  overlayContentBlock.width();
//                var elHeight =  overlayContentBlock.height();
//
//                var elPosition = {
//                    elCenterX :  elPos.left + (elWidth/2),
//                    elCenterY :  elPos.top + (elHeight/2)
//                }
//            }, 40);

//            $("#overlay-content").css("-webkit-transform", "rotate(7deg) scale(0.1) translate3d(100px,100px,100px)");
//            $("#overlay").remove();


            //$(this.el).remove();
        }




    });

	return UIOverlay_View;

});

