(function(global, factory){
    (typeof define==='function' && define.amd)? define(function(){return factory(global)}):factory(global);
}(this, function(window){
    var document        = window.document;
    var Crow            = (function(el){
        crow            = (!/^<.*?>$/.test(el) && !Number.isInteger(parseFloat(el)))? [].slice.call(document.querySelectorAll(el)):Crow.createElementFromString(el);
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
                    if(html) item.appendChild((html instanceof Object)? html:Crow.createElementFromString(html));
                });
                return crow;
            },
            prepend: function(html){
                [].forEach.call(crow, function(item){
                    if(html) item.insertBefore((html instanceof Object)? html:Crow.createElementFromString(html), item.firstChild);
                });
                return crow;
            },
            after: function(html){
                [].forEach.call(crow, function(item){
                    if(html) item.parentNode.insertBefore(Crow.createElementFromString(html), item.nextSibling);
                });
                return crow;
            },
            before: function(html){
                [].forEach.call(crow, function(item){
                    if(html) item.parentNode.insertBefore(Crow.createElementFromString(html), item);
                });
                return crow;
            },
            click: function(func){
                [].forEach.call(crow, function(item){
                    item.addEventListener("click", func);
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

    Crow.createElementFromString = function(str){
        element = new DOMParser().parseFromString(str, 'text/html');
        child = element.documentElement.querySelector('body').firstChild;
        return child;
    }

    Crow.ajax   = (function(options){
        var xhr = new XMLHttpRequest();
        if(options && options.url){
            xhr.open((options.type? options.type:'GET'), options.url);
            xhr.onload = function(){
                if(xhr.status===200){
                    xhr.data    = xhr.responseText;
                }
            }
            if(options.dataType) xhr.responseType = options.dataType;
            if(options.headers){
                for(var i in options.headers){
                    xhr.setRequestHeader(i, options.headers[i]);
                }
            }
            xhr.__proto__.percent = function(){
                return (xhr instanceof window.XMLHttpRequest)? xhr.addEventListener('porcentagem', this.progress, false):true;
                return (xhr.upload)? xhr.upload.addEventListener('porcentagem', this.progress, false):true;
                return xhr;
            }
            xhr.__proto__.done    = function(){
                return (this instanceof window.XMLHttpRequest)? this.responseText:this;
            }
            xhr.send((options.data? encodeURI(options.data):null));
        }
        return xhr;
    });

    window.Crow = Crow;
}));
