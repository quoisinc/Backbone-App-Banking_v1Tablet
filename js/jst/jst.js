/* Namespace for the Javascript Template File */
define(
	['jquery', 'underscore'],
	function ($, _) {
		/* set to use the Mustache syntax */
		/*_.templateSettings = {
		 interpolate : /\{\{(.+?)\}\}/g
		 };*/

		window.JST = {};
		/* JavaScript Template */

		JST['dropDown'] = _.template(
			'<span class="pointer <%= location %>"></span><div class="drop-down-inner animate-bounce-drop"><section class="drop-down-content animate-slow-to-fast" >Content to place here</section></div>'
		);

		JST['banker'] = _.template(

			'<td class="setContextItem"><span class="banker"><%= firstName %> <%= lastName %></span> <span class="align-right"><%= portfolioValue %></span></td>' +
				'<td class="seeDependency disclosure"><span class="icon-all icon-angle-right"></span></td>'
		);

		JST['client'] = _.template(
			'<td class="setContextItem"><span class="banker"><%= firstName %> <%= lastName %></span> <span class="align-right"><%= portfolioValue %></span></td>'
		);

		JST['type'] = _.template(
			'<td class="seeDependency"><span class="icon-all icon-<%=name%>"></span><span class="context-name"><%= name%> </span> <span class="icon-all icon-angle-right pull-right"></span></td>'
		);

		JST['group'] = _.template(
			'<td class="setContextItem"><span class="banker"><%= firstName %> <%= lastName %></span> <span class="align-right"><%= portfolioValue %></span></td>'
		);
		JST['account'] = _.template(
			'<td class="setContextItem"><span class="banker"><%= firstName %> <%= lastName %></span> <span class="align-right"><%= portfolioValue %></span></td>'
		);

		JST['list/dependency'] = _.template(
			'<h5 class="header-list"><a href="#" style="margin: 3px 3px 3px 25px;" class="button back backTrigger pull-left" data-action="close">Back</a><%= header %></h5><form><input class="drop-search" type="search" placeholder="Filter list"/></form><div class="list-viewport"><table class="list listView"></table></div>'
		);
		JST['contextButton'] = _.template(
			'<span class="icon-all icon- <=% type %>"></span> <=% firstName %> <=% type %>'
		);
		/* Member template */
		JST['memberContext'] = _.template(
			'<div class="member-detail"><span class="icon-all icon-member"></span> <span class="member-name"><%= firstName %> <%= lastName %> </span> <a href="#" class="button icon <%=status%>Status"><span class="icon-all icon-dwn-arrow"></span></a></div>' +
				'<div class="member-lock"><span class="lockTrigger icon-all icon-<%=status%>"></span></div>'
		);

		/* ------------------------------------------------------------------------------------------  Member section */
		JST['member'] = _.template(
			'<td class="setContextItem"><span class="banker"><%= firstName %> <%= lastName %></span> <span class="align-right"><%= relation %></span></td>'
		);
		JST['confirmUnlocked'] = _.template(
			'<div class="prompt-view">' +
				'<h5 class="prompt-header">Unlock Context</h5>' +
				'<div class="prompt-field"><p>Click OK to unlock the client context, and you will be able to access other contexts.</p></div>' +
				'<div class="prompt-footer"><button class="button pull-right confirmTrigger">OK</button><button class="button pull-right cancelTrigger">Cancel</button></div>' +
				'</div>'
		);

		JST['passwordPrompt'] = _.template(
			'<div class="prompt-view">' +
				'<h5 class="prompt-header">Enter Password</h5>' +
				'<form class="prompt-field"><input type="password" name="password" value="" /></form>' +
				'<div class="prompt-footer"><button class="button unlockTrigger pull-right">Unlock</button></div>' +
				'</div>'
		);
		/* ----------------------------------------------------------------------------------------- Aside Right Pane */

		JST['asidePane'] = _.template(
			'<div class="aside-content"></div>'
		);

		JST['smartFeed'] = _.template(
			'<div class="aside-tab smart-feed">Smart Feed</div>' +
				'<div class="collapseable-content"></div>'
		);

		JST['smartFeedSection'] = _.template(
			'<h4 id="<%=type%>"><%=name%></h4>' +
				'<section class="animate-drop-down <%=type%>"></section>'
		);

		JST['insightsfeed'] = _.template(
			'<div class="insight-feed" style="background: url\(<%=imageUrl%>\)">' +
				'<span class="book-mark"></span>' +
				'<p class="insight-date"><%=date%></p>' +
				'<h5 class="insight-title"><%=title%></h5>' +
				'</div>'
		);
		JST['statementsfeed'] = _.template(
			'<a class="feed-block" href="<%=url%>"><h5 class="feed-title"><%=title%></h5>' +
				'<p class="feed-caption"><%=caption%> <span class="feed-date"><%=date%></span></p></a>'
		);
		JST['opportunities'] = _.template(
			'<a class="feed-block" href="<%=url%>"><h5 class="feed-title"><%=title%></h5>' +
				'<p class="feed-caption"><%=caption%> <span class="feed-date"><%=date%></span></p></a>'
		);

		/* ------------------------------------------------------------------------------------------ New Context Bar */

		JST['initialContext'] = _.template(
			'<div class="context-location"><span class="icon-all icon-location"></span></div>' +
				'<ul class="context-list"><li class="context-indicator">Set Context</li></ul>'
		);

		JST['contextAddButton'] = _.template(
			'<span class="icon-all icon-add"></span>'
		);

		JST['contextItem'] = _.template(//
			'<button class="button trans flat icon editTrigger"><span class="icon-all icon-<%=type%>"></span><span><%=firstName%> <%=type%></span></button>'
		);

		return JST;
	}
)
