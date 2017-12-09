(function(global, factory){
    (typeof define==='function' && define.amd)? define(function(){return factory(global)}):factory(global);
}(this, function(window){
    var document        = window.document;
    var Crow            = (function(el){
        crow            = (!/^<.*?>$/.test(el) && !Number.isInteger(parseFloat(el)) && !(el instanceof Object))? [].slice.call(document.querySelectorAll(el)):[].slice.call(Crow.createElementFromString(el));
        crow.__proto__  = {
            addClass: function(class_){
            	var toAdd	= class_.split(" ");
            	for(var i=0;i<toAdd.length;i++){
            		[].forEach.call(crow, function(item){
	                    item.classList.add(toAdd[i]);
	                });
            	}
                return crow;
            },
            toggleClass: function(class_){
            	var toToggle	= class_.split(" ");
            	for(var i=0;i<toToggle.length;i++){
            		[].forEach.call(crow, function(item){
	                    item.classList.toggle(toToggle[i]);
	                });
            	}
                return crow;
            },
            hasClass: function(class_){
            	var hasClass = class_.split(" "), hasClassVal = false;
            	for(var i=0;i<hasClass.length;i++){
            		[].forEach.call(crow, function(item){
            			hasClass    = item.classList.contains(toToggle[i])? true:hasClass;
	                });
            	}
                return hasClassVal;
            },
            removeClass: function(class_){
            	var toRm	= class_.split(" ");
            	for(var i=0;i<toRm.length;i++){
            		[].forEach.call(crow, function(item){
	                    item.classList.remove(toRm[i]);
	                });
            	}
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
                    if(html) item.parentNode.insertBefore((html instanceof Object)? html:Crow.createElementFromString(html), item.nextSibling);
                });
                return crow;
            },
            before: function(html){
                [].forEach.call(crow, function(item){
                    if(html) item.parentNode.insertBefore((html instanceof Object)? html:Crow.createElementFromString(html), item);
                });
                return crow;
            },
            find: function(selector){
            	var finds    = [];
                [].forEach.call(crow, function(item){
                	finds.push([].slice.call(item.querySelectorAll(selector)));
                });
                return finds;
            },
            closest: function(selector){
                var closests    = [];
                [].forEach.call(crow, function(item){
                    (selector)? closests.push(item.closest(selector)):closests.push(item.parentNode);
                });
                return closests;
            },
            show: function(){
            	[].forEach.call(crow, function(item){
            		item.style.display	= "";
                });
                return crow;
            },
            hide: function(){
            	[].forEach.call(crow, function(item){
            		item.style.display	= "none";
                });
                return crow;
            },
            click: function(func){
                document.addEventListener("click", function(e){
                    [].forEach.call(crow, function(item){
                        if(e.target==item || e.target.parentNode==item) func();
                    });
                }, false);
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
        return new DOMParser().parseFromString(str, 'text/html').documentElement.querySelector('body').firstChild;
    }

    Crow.ajax   = (function(options){
        var xhr = new XMLHttpRequest();
        if(options && options.url){
            xhr.open((options.type? options.type:'GET'), options.url);
            if(options.type=="POST") xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
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
