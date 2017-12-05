(function(global){
	"use strict";

	var document = window.document;

    function Crow(el){
        if(!el) return this;
        return document.querySelectorAll(el);
    }
	Crow.prototype = {

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
    console.log(new Crow("body"));
})(window);
