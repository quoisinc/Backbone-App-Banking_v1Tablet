define([
        'jquery', 'backbone', 'underscore', 'mediator',
		'models/Context',
		'views/contextBar/ContextAdd'
    ], 
	function(
	    $, Backbone, _, Mediator,
		App_Models_Context,
		App_Views_ContextAdd
	){



	var ContextBar_View = Backbone.View.extend({
	    id: 'contextBar',
		events: function(){
            return App.Models.Inview.get("isIpad") ?
            {
              "touchstart #addNewContext": "addContextLevel"
            } :
            {
              "click #addNewContext": "addContextLevel",
			  "click #context-banker": "changeBanker",
			  "click #context-client": "changeClient",
  			  "click #context-group": "changeGroup"
            }
        },      
		initialize : function() {
		    console.log("init contextBar_View");
			_.bindAll(this, 'render', 'genButton', 'addContextLevel', 'changeBanker', 'changeClient', 'changeGroup');
			
			
			Mediator.subscribe("e_contextChange", this.render);
            App.Models.Context = new App_Models_Context();


		},

		render : function() {
		    console.log("render ContextBar_View");

			this.banker = App.Models.Context.getBanker();
			this.client = App.Models.Context.getClient();
			this.group = App.Models.Context.getGroup();


			var contextCount = 0;
			var markup = "";
			
			if(this.banker){ 
				markup += "<li>"+this.genButton("banker", this.banker) +"</li>";  
				++contextCount;

				if(this.client){ 
					markup += "<li>"+this.genButton("client", this.client) +"</li>";  
					++contextCount;
			
					if(this.group){ 
						markup += "<li>"+this.genButton("group", this.group) +"</li>";  
						++contextCount;
					}
				}
			}
			console.log("render");
			
			
			var addButton = "<a id=\"addNewContext\" class=\"button icon\"><span class=\"icon-all icon-add\"></span></a>";
			
			if (contextCount > 0){ 
				markup = "<a class=\"button trans flat icon\"><span class=\"icon-all icon-location\"></span></a><ul class='list inline drill'>" + markup + "</ul>"; 
			}else{
				markup = "<a class=\"button trans flat icon\"><span class=\"icon-all icon-location\"></span><span>Set Context</span></a>";
			}
			$(this.el).html(markup + addButton); 
			
            return this;
		},




		genButton: function(id, name){
		    return "<button id=\"context-"+id+"\" class='button trans flat icon'><span class='icon-all icon-chat'></span>"+name+"</button>";
		},
		




		addContextLevel: function(ev){
			$('.contextAdd').remove();
			
			var contextLevel = "";
			if (this.group){
				currentContextLevel  = "group";
			}else if (this.client){
				currentContextLevel  = "client";
			}else if (this.banker){
				currentContextLevel  = "banker";
			}else{ 
				currentContextLevel  = "";
			}


            App.Views.ContextAdd = new App_Views_ContextAdd({
				'currentContextLevel':	currentContextLevel,
				'offsetLeft': ev.currentTarget.offsetLeft
			});
			$(this.el).append(App.Views.ContextAdd.el);
		},



		changeBanker: function(ev){
			$('.contextAdd').remove();
			var contextAdd_view = new App_Views_ContextAdd({
				'currentContextLevel':	'',
				'offsetLeft': ev.currentTarget.offsetLeft
			});
			$(this.el).append(contextAdd_view.el);
		},



		changeClient: function(ev){
			$('.contextAdd').remove();
			var contextAdd_view = new App_Views_ContextAdd({
				'currentContextLevel':	'banker',
				'offsetLeft': ev.currentTarget.offsetLeft
			});
			$(this.el).append(contextAdd_view.el);
		},
		
		
		changeGroup: function(ev){
			$('.contextAdd').remove();
			var contextAdd_view = new App_Views_ContextAdd({
				'currentContextLevel':	'client',
				'offsetLeft': ev.currentTarget.offsetLeft
			});
			$(this.el).append(contextAdd_view.el);
		}

		
		
		
	});

	return ContextBar_View;

});

