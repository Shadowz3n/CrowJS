

External URL: https://cdn.rawgit.com/Shadowz3n/CrowJS/master/crow.js

# CrowJS

this Javascript lib is based on jQuery, Zepto, VueJS.
weighing much less and with much more performance


# Selector
	```
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

	```
	$("body").addClass("test");
	```

Remove Class:

	```
	$("body").removeClass("test");
	```

Toggle Class:

	```
	$("body").toggleClass("test");
	```


# Actions
	```
		Actions:
			focus, blur, keydown, keypress, keyup, mouseover, mouseout, mousemove, click, submit
	```

	```
	$("body").click(function(e){
		console.log(e);
		console.log(this);
	});
	```



# HTML

Change some HTML:

	```
	$("body").html("test");
	```
 
Getting contents:

	```
	console.log($("body").html());
	```
  
Append some HTML:

	```
	$("body").append('<div>test</div>');
	or
	var newDiv = $('<div></div>');
	$("body").append(newDiv);
	```
  
Prepend some HTML:

	```
	$("body").prepend('<div>test</div>');
	or
	var newDiv = $('<div></div>');
	$("body").prepend(newDiv);
	```
	
Append after some HTML:

	```
	$("body").after('<div>test</div>');
	or
	var newDiv = $('<div></div>');
	$("body").after(newDiv);
	```
	
Append before some HTML:

	```
	$("body").before('<div>test</div>');
	or
	var newDiv = $('<div></div>');
	$("body").before(newDiv);
	
Remove element(s):

	```
	$("div").remove();
	```


# Manipulation

	
Change an attribute(s):

	```
	$("body").attr({'data-attr1':'test', 'data-attr2':'test2'});
	```
	
Find something:

	```
	$("body").find(".class");
	```
Get closest content:

	```
	$("div").closest(".class");
	```
	
Get element by index:

	```
	$("div").eq(0);
	```
	
Get element(s) position(s):

	```
	console.log($("div").position());
	```
	
Get or change element(s) width(s):

	```
	console.log($("div").width());
	and 
	$("div").width(300);
	```
	
Get or change element(s) height(s):

	```
	console.log($("div").height());
	and 
	$("div").height(300);
	```
	
Get input value:

	```
	console.log($("input").val());
	```
 
 
# CSS & Animation

 
Manipulate css:

	```
	$("body").css({'margin-top':'20px', 'margin-left':'20px'});
	```

Animation "animate(css, time, transition, function)":

	```
	$("body").animate({'margin-top':'20px', 'margin-left':'20px'}, 300, "ease", func);
	```

Fade In "fadeIn(time, function)":

	```
	$("div").fadeIn(300, func);
	```
	
Fade Out "fadeOut(time, function)":

	```
	$("div").fadeOut(300, func);
	```
	
Show something:

	```
	$("div").show();
	```

Hide something:

	```
	$("div").hide();
	```
	
	
	
# Ajax

Parameters:

	```
		url: "default: document.location.href"
		type: "default: GET"
		data: "default: undefined"
		beforeSend: "function"
		dataType: "default: undefined"
		headers: "default: undefined"
	```
	

Serialize all form:

	```
	$.ajax({
		serialize:$("#form")
	});
	```
	
Get upload progress:

	```
	$.ajax({
		onprogress:function(per){
			console.log(per);
		},
		serialize:$("#form")
	});
	```
	
Send post:

	```
	$.ajax({
		type:"POST",
		data:{name:"Henrique", lastname:"Bissoli"}
	});
	```
	
Send get:

	```
	$.ajax({
		url:document.location.href
	});
	```
	
On Ajax done:

	```
	$.ajax({
		url:document.location.href
	}).done(function(data){
		console.log(data);
	});
	```
	
Change Ajax headers:

	```
	$("#this_form").submit(function(e){
	    e.preventDefault();
	    $.ajax({
	    	headers:{'header1':'test', 'header2':'test2'}
	    });
	});
	```
