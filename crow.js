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
                return crow;
            },
            toggleClass: function(class_){
                [].forEach.call(crow, function(item){
                    item.classList.toggle(class_.split(" "));
                });
                return crow;
            },
            hasClass: function(class_){
                var hasClass    = false;
                [].forEach.call(crow, function(item){
                    hasClass    = item.classList.contains(class_.split(" "))? true:hasClass;
                });
                return hasClass;
            },
            removeClass: function(class_){
                [].forEach.call(crow, function(item){
                    item.classList.remove(class_.split(" "));
                });
                return crow;
            },
            html: function(html){
                var thisHtml    = '';
                [].forEach.call(crow, function(item){
                    if(html) item.innerHTML = html;
                    thisHtml = item.innerHTML;
                });
                return html? crow:thisHtml;
            },
            append: function(html){
                [].forEach.call(crow, function(item){
                    if(html) item.innerHTML += html;
                });
                return crow;
            },
            prepend: function(html){
                [].forEach.call(crow, function(item){
                    if(html) item.innerHTML = html+item.innerHTML;
                });
                return crow;
            }
        };
        return crow;
    });

    Crow.ready = function(callback){
        (/complete|loaded|interactive/.test(document.readyState) && document.body)? callback(Crow.ready):document.addEventListener('DOMContentLoaded', function(){callback(Crow.ready)}, false);
        return this;
    }

    Crow.ajax   = function(options){
        var xhr = new XMLHttpRequest();
        if(options && options.url){
            xhr.open((options.type? options.type:'GET'), options.url);
            xhr.onload = function(){
                if(xhr.status===200){
                    
                }
            }
            if(options.dataType) xhr.responseType = options.dataType;
            if(options.headers){
                for(var i in options.headers){
                    xhr.setRequestHeader(i, options.headers[i]);
                }
            }
            xhr.send((options.data? encodeURI(options.data):null));
        }
        return xhr;
    }

    window.Crow = Crow;
}));
