(function(global, factory){
    (typeof define==='function' && define.amd)? define(function(){return factory(global)}):factory(global);
}(this, function(window){
    var Crow            = (function(el){
        var document    = window.document,
        crow            = document.querySelectorAll(el) || this;
        crow.prototype  = {

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

        return crow;
    });

    Crow.ready = function(callback){
        (/complete|loaded|interactive/.test(document.readyState) && document.body)? callback($):document.addEventListener('DOMContentLoaded', function(){ callback($) }, false);
        return this;
    }

    window.Crow = Crow;
}));

Crow.ready(function(){
    console.log(new Crow("body"));
});
