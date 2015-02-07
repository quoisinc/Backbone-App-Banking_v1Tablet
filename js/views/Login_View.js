define(['jquery', 'backbone', 'underscore', 'text!../../templates/login.html', 'mediator'], 
	function($, Backbone, _, Login_Tpl, Mediator) {

	var Login_View = Backbone.View.extend({
		events: function(){
		    return Inview.isiPad ?
		    {
		      
		      "touchstart .button": "clickButton",
		      "touchstart input":"clearInput",
		      "blur input":"checkInput"
		    } :
		    {
		      "click .button": "clickButton",
		      "click input":"clearInput",
		      "blur input":"checkInput"
		    }
		},

		initialize : function() {
		    console.log("init loginView");
			_.bindAll(this, 'render', 'clickButton','clearInput','checkInput');
			
			//this.render();
		},

		render : function() {
		    console.log("render loginView");
            var template = _.template( Login_Tpl );
            $(this.el).append(template);
            return this;
		},
        clickButton : function() {
            $(".login-block").addClass("slide-out-left");
            console.log("in click");
            
            setTimeout(function() {
                Inview.app.model.set("auth", true);
                Mediator.publish('authenticated');
                $(this.el).remove();
            },300);
            

        },
        clearInput : function() {
        	if (event.target.value == "Username" || event.target.value == "Password") {
        		event.target.value = "";
        	}
        	// console.log("clear input called");        },
        checkInput: function() {
        	if (event.target.value == "") {
        		event.target.value = (event.target.id == "username") ? "Username" : "Password";
        	}
        }
        
        	
		
	});

	return Login_View;

});

