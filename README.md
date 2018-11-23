

# [CrowJS - API Documentation](https://shadowz3n.github.io/CrowJS/)

External URL: https://cdn.rawgit.com/Shadowz3n/CrowJS/master/crow.js

# CrowJS

this Javascript lib is based on jQuery, Zepto, VueJS.
weighing much less and with much more performance


# Selector
```javascript
$("body");
$(".class");
$("#id");
$(".class, .other_class, #id");
$("<div>teste</div>");

or create some elements:

$({});
$(new Image());
$(new Object());
```



# Classes

Add Class:

```javascript
$("body").addClass("test");
```

Remove Class:

```javascript
$("body").removeClass("test");
```

Toggle Class:

```javascript
$("body").toggleClass("test");
```


# Actions
```javascript
	Actions:
		focus, blur, keydown, keypress, keyup, mouseover, mouseout, mousemove, click, submit
```

```javascript
$("body").click(function(e){
	console.log(e);
	console.log(this);
});
```



# HTML

Change some HTML:

```javascript
$("body").html("test");
```
 
Getting contents:

```javascript
console.log($("body").html());
```
  
Append some HTML:

```javascript
$("body").append('<div>test</div>');
or
var newDiv = $('<div></div>');
$("body").append(newDiv);
```
  
Prepend some HTML:

```javascript
$("body").prepend('<div>test</div>');
or
var newDiv = $('<div></div>');
$("body").prepend(newDiv);
```
	
Append after some HTML:

```javascript
$("body").after('<div>test</div>');
or
var newDiv = $('<div></div>');
$("body").after(newDiv);
```
	
Append before some HTML:

```javascript
$("body").before('<div>test</div>');
```
or
```javascript
var newDiv = $('<div></div>');
$("body").before(newDiv);
```
	
Remove element(s):

```javascript
$("div").remove();
```


# Manipulation

	
Change an attribute(s):

```javascript
$("body").attr({'data-attr1':'test', 'data-attr2':'test2'});
```
	
Find something:

```javascript
$("body").find(".class");
```

Get closest content:

```javascript
$("div").closest(".class");
```
	
Get element by index:

```javascript
$("div").eq(0);
```
	
Get element(s) position(s):

```javascript
console.log($("div").position());
```
	
Get or change element(s) width(s):

```javascript
console.log($("div").width());
```
and 
```javascript
$("div").width(300);
```
	
Get or change element(s) height(s):

```javascript
console.log($("div").height());
```

and 

```javascript
$("div").height(300);
```
	
Get input value:

```javascript
console.log($("input").val());
```
 
 
# CSS & Animation

 
Manipulate css:

```javascript
$("body").css({'margin-top':'20px', 'margin-left':'20px'});
```

Animation "animate(css, time, transition, function)":

```javascript
$("body").animate({'margin-top':'20px', 'margin-left':'20px'}, 300, "ease", func);
```

Fade In "fadeIn(time, function)":

```javascript
$("div").fadeIn(300, func);
```
	
Fade Out "fadeOut(time, function)":

```javascript
$("div").fadeOut(300, func);
```
	
Show something:

```javascript
$("div").show();
```

Hide something:

```javascript
$("div").hide();
```
	
	
	
# Ajax

Parameters:

```javascript
	url: "default: document.location.href"
	type: "default: GET"
	data: "default: undefined"
	beforeSend: "function"
	dataType: "default: undefined"
	headers: "default: undefined"
```
	

Serialize all form:

```javascript
$.ajax({
	serialize:$("#form")
});
```
	
Get upload progress:

```javascript
$.ajax({
	onprogress:function(per){
		console.log(per);
	},
	serialize:$("#form")
});
```
	
Send post:

```javascript
$.ajax({
	type:"POST",
	data:{name:"Henrique", lastname:"Bissoli"}
});
```
	
Send get:

```javascript
$.ajax({
	url:document.location.href
});
```
	
On Ajax done:

```javascript
$.ajax({
	url:document.location.href
}).done(function(data){
	console.log(data);
});
```
	
Change Ajax headers:

```javascript
$("#this_form").submit(function(e){
    e.preventDefault();
    $.ajax({
	headers:{'header1':'test', 'header2':'test2'}
    });
});
```
