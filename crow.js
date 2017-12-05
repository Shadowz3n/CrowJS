(function(global, factory){
    (typeof define==='function' && define.amd)? define(function(){return factory(global)}):factory(global);
}(this, function(window){
    var document        = window.document;
    var Crow            = (function(el){
        crow            = [].slice.call(document.querySelectorAll(el)) || {};
        crow.__proto__  = {
            addClass: function(class_){
                [].forEach.call(crow, function(item){
                    item.classList.add(class_.split(" "));
                });
            },
            toggleClass: function(class_){
                [].forEach.call(crow, function(item){
                    item.classList.toggle(class_.split(" "));
                });
            },
            hasClass: function(class_){
                return [].forEach.call(crow, function(item){
                    item.classList.contains(class_.split(" "));
                });
            },
            removeClass: function(class_){
                [].forEach.call(crow, function(item){
                    item.classList.remove(class_.split(" "));
                });
            }
        };
        return crow;
    });

    Crow.ready = function(callback){
        (/complete|loaded|interactive/.test(document.readyState) && document.body)? callback(Crow.ready):document.addEventListener('DOMContentLoaded', function(){callback(Crow.ready)}, false);
        return this;
    }

    window.Crow = Crow;
}));
