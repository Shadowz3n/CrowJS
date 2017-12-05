(function(global, factory){
    (typeof define==='function' && define.amd)? define(function(){return factory(global)}):factory(global);
}(this, function(window){
    var Crow            = (function(){
        var document    = window.document,
        crow            = {
            /* Init */
            init: function(el){
                return document.querySelectorAll(el) || this;
            },

            /* Add Class */
            addClass: function(class_){
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
    });
}));
