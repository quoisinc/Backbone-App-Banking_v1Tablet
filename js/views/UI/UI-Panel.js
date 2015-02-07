define(['jquery', 'backbone', 'underscore',
    'views/UI/UI-Pane',
    'models/UI/UI-Pane',
    'text!../../../templates/UI/UI-Panel.html'
    ],
	function($, Backbone, _,
        UIPane_View,
        UIPane_Model,
        UIPanel_Tpl

    ) {

	var UIPanel_View = Backbone.View.extend({
        attributes : function(){
            return {
                id : this.model.get("itemID")
            }
        },

        className: "panelView",

        initialize: function(){
            _.bindAll(this, 'render');
            //$(window).on('resize', this.render)
            this.entryDirection = this.model.get("entryDirection");


        },

		events: function(){

            return App.Models.Inview.get("isIpad") ?
            {
                "touchstart .backPane": "goToPrevPane"
            } :
            {
                "click .backPane": "goToPrevPane"
            }

        },

        render: function(){
            console.log("rerender");
            var template = _.template( UIPanel_Tpl );
            $(this.el).html(template);

            this.wholePanel =  $(this.el).find("#panelViewArea");
            this.wholePanel.addClass("animate-slow-to-fast");
//            this.wholePanel.append("<div class='paneView'></div>");
            this.wholePanel.append("<div class='paneView'></div>");
            this.wholePanel.append("<div class='paneView'></div>");





//            this.prevPanel  = this.wholePanel.find("div.paneView:nth-child(1)");
            this.currPanel  = this.wholePanel.find("div.paneView:nth-child(1)");
            this.nextPanel  = this.wholePanel.find("div.paneView:nth-child(2)");
            this.currentWidth = this.currPanel.width() + 1;
            this.slidePosition = 0;

            var that = this;




            return this;

        },

        addPane: function(paneView){
            console.log("IN addPANE")

            this.currPanel = $(this.el).find("#panelViewArea div.paneView:nth-child(1)");



            if (!paneView.model.get("transitionIn")){
                this.currPanel.html(paneView.render().el);
            }else{


                if (this.entryDirection == "leftSide"){
                    // SLIDE IN DIRECTION = LEFT ***************************************************
                    this.nextPanel = $(this.el).find("#panelViewArea div.paneView:last-child");
                    this.model.get("contentPanes").add(paneView);
                    this.nextPanel.html(paneView.render().el);
                    this.slideInLeft();

                }else if (this.entryDirection == "rightSide"){
                    // SLIDE IN DIRECTION = RIGHT ***************************************************

                    //shift
                    this.shiftViewInitial();
                    this.wholePanel.prepend("<div class='paneView'></div>");
                    this.nextPanel = $(this.el).find("#panelViewArea div.paneView:first-child");

                    this.nextPanel.html(paneView.render().el);


                    // add to beginning of collection
                    // this.model.get("contentPanes").add(paneView).at( this.model.get("contentPanes").0);


//                    this.slideInRight();
                    var that = this;
                    setTimeout(function (){
                        that.slideInRight();
                    }, 50);

                }

            }


            var paneHTML = "<div class='panelHeading'>" + paneView.model.get("title") + "</div>";




        },

        slideInLeft: function(){

            this.wholePanel.append("<div class='paneView'></div>");
            this.currentWidth = this.currPanel.width();
           // if(!this.slidePosition) this.slidePosition = this.currentWidth;
            var slideAmount = this.slidePosition + this.currentWidth;
            this.slidePosition = slideAmount;
            console.log(slideAmount, "slideAmount");


            var slideL = "translate3d(-"+slideAmount+"px, 0, 0)";
            $(this.el).find("#panelViewArea").css({
               // "-webkit-transition" : "0.3s",
                "-webkit-transform" : slideL
            });
        },


        slideInRight: function(){
            console.log("SLIDE IN RIGHT")
            this.currentWidth = this.currPanel.width();
            var slideAmount = this.slidePosition - this.currentWidth;
//            this.slidePosition = slideAmount;
            this.slidePosition = slideAmount;
            console.log(slideAmount, "slideInRight");

//            /var slideL = "translate3d("+slideAmount+"px, 0, 0)";





            var slideL = "translate3d(0px, 0, 0)";
            $(this.el).find("#panelViewArea").css({
                "-webkit-transform" : slideL
            });
            //this.wholePanel.prepend("<div class='paneView'></div>");
        },

        shiftViewInitial: function(){

            console.log("shiftViewInitial:")

//            this.currPanel = $(this.el);
//
//            this.currentWidth = this.currPanel.width();
//            console.log($(this.el), "this.currentWidth");
//            var slideL2 = "translate3d(-"+this.currentWidth+"px, 0, 0)";
//            console.log($(this.el).find("#panelViewArea"));
            this.wholePanel.addClass("noTransitionTime");
            this.wholePanel.css({
                "-webkit-transform" : "translate3d(-100%, 0, 0)"
            });

            var ppp = this.wholePanel;
            setTimeout(function (){
                ppp.removeClass("noTransitionTime");
            }, 10);
        },

        goToPrevPane: function(){
            var slideAmount = this.slidePosition - this.currentWidth;
            this.slidePosition = slideAmount;
            var slideL = "translate3d("+slideAmount+"px, 0, 0)";
            $(this.el).find("#panelViewArea").css({
                //"-webkit-transition" : "0.3s",
                "-webkit-transform" : slideL
            });
        }

        

	});

	return UIPanel_View;

});

