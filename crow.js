    (function(global, factory){
        (typeof define==='function' && define.amd)? define(function(){return factory(global)}):factory(global);
    }(this, function(window){
        var document        = window.document;
        var Crow            = (function(el){
            crow            = (el instanceof Object)? el:(!/^<.*?>$/.test(el) && !Number.isInteger(parseFloat(el)))? [].slice.call(document.querySelectorAll(el)):[Crow.createElementFromString(el)];
            crow.__proto__  = {
                addClass: function(class_){
                    var toAdd   = class_.split(" ");
                    for(var i=0;i<toAdd.length;i++){
                        [].forEach.call(crow, function(item){
                            if(item.className.indexOf(toAdd[i])== -1) item.className = (item.className+" "+toAdd[i]).replace(/^\s+|\s+$/g,'');
                        });
                    }
                    return crow;
                },
                toggleClass: function(class_){
                    var toToggle    = class_.split(" ");
                    for(var i=0;i<toToggle.length;i++){
                        [].forEach.call(crow, function(item){
                            item.className = item.className.match(new RegExp('(\\s|^)'+toToggle[i]+'(\\s|$)'))? item.className.replace(new RegExp('(\\s|^)'+toToggle[i]+'(\\s|$)'), ''):item.className+" "+toToggle[i];
                        });
                    }
                    return crow;
                },
                hasClass: function(class_){
                    var hasClass = class_.split(" "), hasClassVal = false;
                    for(var i=0;i<hasClass.length;i++){
                        [].forEach.call(crow, function(item){
                            hasClassVal    = item.className.match(new RegExp('(\\s|^)'+hasClass[i]+'(\\s|$)'))? true:hasClassVal;
                        });
                    }
                    return hasClassVal;
                },
                removeClass: function(class_){
                    var toRm    = class_.split(" ");
                    for(var i=0;i<toRm.length;i++){
                        [].forEach.call(crow, function(item){
                            if(item.className.match(new RegExp('(\\s|^)'+toRm[i]+'(\\s|$)'))) item.className = item.className.replace(new RegExp('(\\s|^)'+toRm[i]+'(\\s|$)'), '');
                        });
                    }
                    return crow;
                },
                html: function(html){
                    var thisHtml    = '';
                    [].forEach.call(crow, function(item){
                        if(html) item.innerHTML = html;
                    });
                    return html? crow:crow[crow.length-1].innerHTML;
                },
                append: function(html){
                    if(html){
                        [].forEach.call(crow, function(item){
                            (html instanceof Object)? [].forEach.call(html, function(item_){ item.appendChild(item_); }):item.appendChild(Crow.createElementFromString(html));
                        });
                    }
                    return crow;
                },
                prepend: function(html){
                    if(html){
                        [].forEach.call(crow, function(item){
                            (html instanceof Object)? [].forEach.call(html, function(item_){ item.insertBefore(item_, item.firstChild); }):item.insertBefore(Crow.createElementFromString(html), item.firstChild);
                        });
                    }
                    return crow;
                },
                after: function(html){
                    if(html){
                        [].forEach.call(crow, function(item){
                            (html instanceof Object)? [].forEach.call(html, function(item_){ item.parentNode.insertBefore(item_, item.nextSibling); }):item.parentNode.insertBefore(Crow.createElementFromString(html), item.nextSibling);
                        });
                    }
                    return crow;
                },
                before: function(html){
                    if(html){
                        [].forEach.call(crow, function(item){
                            (html instanceof Object)? [].forEach.call(html, function(item_){ item.parentNode.insertBefore(item_, item); }):item.parentNode.insertBefore(Crow.createElementFromString(html), item);
                        });
                    }
                    return crow;
                },
                find: function(selector){
                    var finds    = [];
                    [].forEach.call(crow, function(item){
                        finds.push([].slice.call(item.querySelectorAll(selector)));
                    });
                    return finds[0];
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
                        item.style.display  = "";
                    });
                    return crow;
                },
                hide: function(){
                    [].forEach.call(crow, function(item){
                        item.style.display  = "none";
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
