(function(global, factory){
	"use strict";

	var document = window.document;

	Crow = function(selector, context){
		return new Crow.fn.init(selector);
	}

	Crow.fn	= Crow.prototype = {

		/* Init */
		init: function(el){
			if(!el) return this;
			return document.querySelectorAll(el);
		},

		/* Add Class */
		addClass: function(class_){
			console.log(this);
			this.classList.add(class_.split(" "));
		},

		/* Toggle Class */
		toggleClass: function(class_){
			return this.classList.toggle(class_);
		},

		/* Has Class */
		hasClass: function(class_){
			return this.classList.contains(class_);
		},

		/* Remove Class */
		removeClass: function(class_){
			return this.classList.remove(class_.split(" "));
		}
	};

	Crow("body");
})(window);
