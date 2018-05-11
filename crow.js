(function(global, factory){(typeof define==='function' && define.amd)? define(function(){return factory(global)}):factory(global)}(this, function(window){
	var document		= window.document, body = document.body;
	var Crow			= (function(el){
		crow			= (el instanceof Object)? (el.tagName!==undefined)? [el]:el:(!/^<.*?>$/.test(el) && !Number.isInteger(parseFloat(el)))? (!/^\s+$/.test(el.trim()) && el.trim()[0]=="#"? [document.getElementById(el.replace("#",""))]:[].slice.call(document.querySelectorAll(el))):[Crow.createElementFromString(el)];
		crow.__proto__  = {
			addClass: function(class_){
				var toAdd   = class_.split(" ");
				for(var i=0;i<toAdd.length;i++){
					for(var j=0;j<this.length;j++) if(this[j].className.indexOf(toAdd[i])== -1) this[j].className = (this[j].className+" "+toAdd[i]).replace(/^\s+|\s+$/g,'');
				}
				return this;
			},
			toggleClass: function(class_){
				var toToggle	= class_.split(" ");
				for(var i=0;i<toToggle.length;i++){
					for(var j=0;j<this.length;j++) this[j].className = this[j].className.match(new RegExp('(\\s|^)'+toToggle[i]+'(\\s|$)'))? this[j].className.replace(new RegExp('(\\s|^)'+toToggle[i]+'(\\s|$)'), ''):this[j].className+" "+toToggle[i];
				}
				return this;
			},
			hasClass: function(class_){
				var hasClass = class_.split(" "), hasClassVal = false;
				for(var i=0;i<hasClass.length;i++){
					for(var j=0;j<this.length;j++) hasClassVal	= this[j].className.match(new RegExp('(\\s|^)'+hasClass[i]+'(\\s|$)'))? true:hasClassVal;
				}
				return hasClassVal;
			},
			removeClass: function(class_){
				var toRm	= class_.split(" ");
				for(var i=0;i<toRm.length;i++){
					for(var j=0;j<this.length;j++) if(this[j].className.match(new RegExp('(\\s|^)'+toRm[i]+'(\\s|$)'))) this[j].className = this[j].className.replace(new RegExp('(\\s|^)'+toRm[i]+'(\\s|$)'), '');
				}
				return this;
			},
			html: function(html){
				var thisHtml	= '';
				if(html) for(var j=0;j<this.length;j++) this[j].innerHTML = html;
				return html? this:this[this.length-1].innerHTML;
			},
			css: function(style){
				for(var j=0;j<this.length;j++){
					for(var i in style){ this[j].style[i]  = style[i]; }
				}
				return this;
			},
			append: function(html){
				if(html){
					for(var j=0;j<this.length;j++) (html instanceof Object)? ()() [].forEach.call(html, function(item_){ this[j].appendChild(item_); }):this[j].appendChild(Crow.createElementFromString(html));
				}
				return this;
			},
			prepend: function(html){
				if(html){
					for(var j=0;j<this.length;j++) (html instanceof Object)? [].forEach.call(html, function(item_){ this[j].insertBefore(item_, this[j].firstChild); }):this[j].insertBefore(Crow.createElementFromString(html), this[j].firstChild);
				}
				return this;
			},
			after: function(html){
				if(html){
					for(var j=0;j<this.length;j++) (html instanceof Object)? [].forEach.call(html, function(item_){ this[j].parentNode.insertBefore(item_, this[j].nextSibling); }):this[j].parentNode.insertBefore(Crow.createElementFromString(html), this[j].nextSibling);
				}
				return this;
			},
			before: function(html){
				if(html){
					for(var j=0;j<this.length;j++) (html instanceof Object)? [].forEach.call(html, function(item_){ this[j].parentNode.insertBefore(item_, this[j]); }):this[j].parentNode.insertBefore(Crow.createElementFromString(html), this[j]);
				}
				return this;
			},
			remove: function(){
				return (this instanceof Object)? [].forEach.call(this, function(item_){ item_.parentNode.removeChild(item_); }):this.parentNode.removeChild(this);
			},
			attr: function(attr){
				if(typeof attr==="string") return this[0].getAttribute(attr);
				if(attr) (this instanceof Object)? (attr instanceof String)? this[0].getAttribute(attr):[].forEach.call(this, function(item_){ for(var i in attr){ item_.setAttribute(i, attr[i]); } }):(function(){ for(var i in attr){ item_.setAttribute(i, attr[i]); } });
				return this;
			},
			find: function(selector){
				var finds	= [];
				for(var j=0;j<this.length;j++) finds.push([].slice.call(this[j].querySelectorAll(selector)));
				return Crow(finds[0]);
			},
			closest: function(selector){
				var closests	= [];
				for(var j=0;j<this.length;j++) (selector)? closests.push(this[j].closest(selector)):closests.push(this[j].parentNode);
				return Crow(closests);
			},
			show: function(){
				for(var j=0;j<this.length;j++) this[j].style.display  = "";
				return this;
			},
			hide: function(){
				for(var j=0;j<this.length;j++) this[j].style.display  = "none";
				return this;
			},
			eq: function(eq){
				return (parseFloat(eq)>=0 || parseFloat(eq)<=this.length-1)? Crow([this[eq]]):this;
			},
			position: function(){
				return {top:this[0].offsetTop, left:this[0].offsetLeft};
			},
			width: function(newW){
				if(newW) for(var j=0;j<this.length;j++) this[j].style.width  = newW;
				return newW? this:this[this.length-1].offsetWidth;
			},
			height: function(newH){
				if(newH) for(var j=0;j<this.length;j++) this[j].style.height  = newH;
				return newH? this:this[this.length-1].offsetHeight;
			},
			val: function(){
				return this.value? this.value:null;
			},
			prop: function(prop){
				if(prop) for(var j=0;j<this.length;j++) if(this[j][prop]) return true;
				return false;
			},
			load: function(func){
				for(var j=0;j<this.length;j++) this[j].addEventListener('DOMContentLoaded', func);
			},
			animate: function(style, time=300, transition="ease", func){
				for(var j=0;j<this.length;j++){
					this[j].style.transition = "all "+(Number.isInteger(time)? time:300)+"ms "+(typeof transition=="string"? transition:'ease');
					setTimeout(function(){ for(var i in style){ this[j].style[i]   = style[i]; } });
				}
				if(time instanceof Object) setTimeout(function(){ time(this); }, 300);
				if(transition instanceof Object) setTimeout(function(){ transition(this); }, (Number.isInteger(time)? time:300));
				if(func instanceof Object) setTimeout(function(){ func(this); }, (Number.isInteger(time)? time:300));
				return this;
			},
			fadeIn: function(time=300, func){
				for(var j=0;j<this.length;j++){
					this[j].style.transition = "all "+time+"ms ease"; this[j].style.opacity = 1;
				}
				if(func) setTimeout(function(){ return func(this); }, time);
			},
			fadeOut: function(time=300, func){
				for(var j=0;j<this.length;j++){
					this[j].style.transition = "all "+time+"ms ease"; this[j].style.opacity = 0;
				}
				if(func) setTimeout(function(){ return func(this); }, time);
			}
		};
		['focus', 'blur', 'keydown', 'keypress', 'keyup', 'mouseover', 'mouseout', 'mousemove', 'click', 'submit'].forEach(function(action){
			crow.__proto__[action] = function(func){
				for(var j=0;j<this.length;j++) (func)? this[j].addEventListener(action, func, false):this[j][action]();
				return this;
			}
		});
		return crow;
	});
	Crow.ready = function(callback){
		document.addEventListener("DOMContentLoaded", callback(Crow.ready));
	}
	Crow.createElementFromString = function(str){
		return new DOMParser().parseFromString(str, 'text/html').body.firstChild;
	}
	Crow.ajax   = (function(options){
		var xhr = new XMLHttpRequest();
		xhr.__proto__.done  = function(func){
			this.onreadystatechange = function(){ if(this.readyState==4) func(this.responseText, this.status); }
		}
		if(options && options.onprogress){
			xhr.onprogress  = function(e){ if(e.lengthComputable) options.onprogress((e.loaded/e.total)*100, e); }
			xhr.upload.onprogress  = function(e){ if(e.lengthComputable) options.onprogress((e.loaded/e.total)*100, e); }
		}
		xhr.open((options && options.type? options.type:options? options.serialize? 'POST':'GET':'GET'), options && options.url? options.url:document.location.href);
		if(options && options.type=="POST") xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		if(options && options.dataType) xhr.responseType = options.dataType;
		if(options && options.headers) for(var i in options.headers){ xhr.setRequestHeader(i, options.headers[i]); }
		if(options && options.beforeSend) options.beforeSend();
		if(options && options.data && Object.keys(options.data).length>0){
			var newData='';
			(function(){ for(var k in options.data){ (typeof options.data[k]=="object")? (function(){for(var j in options.data[k]){ newData += encodeURIComponent(k)+"["+encodeURIComponent(j)+"]="+encodeURIComponent(options.data[k][j])+"&" }})():newData += encodeURIComponent(k)+"="+encodeURIComponent(options.data[k])+"&"; } })()
			options.data = newData.slice(0, -1);
		}
		xhr.send(options && options.data? options.data:options? options.serialize? new FormData(options.serialize.tagName? options.serialize:options.serialize[0]):null:null);
		return xhr;
	});
	window.$ = Crow;
}));
