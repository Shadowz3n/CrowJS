

# [CrowJS - API Documentation](https://shadowz3n.github.io/CrowJS/)

External URL: https://cdn.rawgit.com/Shadowz3n/CrowJS/master/crow.js

# CrowJS

this Javascript lib is based on jQuery, Zepto, VueJS.
weighing much less and with much more performance


# Selector
	```
	c("body");
	c(".class");
	c("#id");
	c(".class, .other_class, #id");
	
	or create some elements:
	
	c("<div>teste</div>");
	```



# Classes

Add Class:

	```
	c("body").addClass("test");
	```

Remove Class:

	```
	c("body").removeClass("test");
	```

Toggle Class:

	```
	c("body").toggleClass("test");
	```


# Actions
	```
		Actions:
			focus, blur, keydown, keypress, keyup, mouseover, mouseout, mousemove, click, submit
	```

	```
	c("body").click(function(e){
		console.log(e);
		console.log(this);
	});
	```



# HTML

Change some HTML:

	```
	c("body").html("test");
	```
 
Getting contents:

	```
	console.log(c("body").html());
	```
  
Append some HTML:

	```
	c("body").append('<div>test</div>');
	or
	var newDiv = c('<div></div>');
	c("body").append(newDiv);
	```
  
Prepend some HTML:

	```
	c("body").prepend('<div>test</div>');
	or
	var newDiv = c('<div></div>');
	c("body").prepend(newDiv);
	```
	
Append after some HTML:

	```
	c("body").after('<div>test</div>');
	or
	var newDiv = c('<div></div>');
	c("body").after(newDiv);
	```
	
Append before some HTML:

	```
	c("body").before('<div>test</div>');
	or
	var newDiv = c('<div></div>');
	c("body").before(newDiv);
	
Remove element(s):

	```
	c("div").remove();
	```


# Manipulation

	
Change an attribute(s):

	```
	c("body").attr({'data-attr1':'test', 'data-attr2':'test2'});
	```
	
Find something:

	```
	c("body").find(".class");
	```
Get closest content:

	```
	c("div").closest(".class");
	```
	
Get element by index:

	```
	c("div").eq(0);
	```
	
Get element(s) position(s):

	```
	console.log(c("div").position());
	```
	
Get or change element(s) width(s):

	```
	console.log(c("div").width());
	and 
	c("div").width(300);
	```
	
Get or change element(s) height(s):

	```
	console.log(c("div").height());
	and 
	c("div").height(300);
	```
	
Get input value:

	```
	console.log(c("input").val());
	```
 
 
# CSS & Animation

 
Manipulate css:

	```
	c("body").css({'margin-top':'20px', 'margin-left':'20px'});
	```

Animation "animate(css, time, transition, function)":

	```
	c("body").animate({'margin-top':'20px', 'margin-left':'20px'}, 300, "ease", func);
	```

Fade In "fadeIn(time, function)":

	```
	c("div").fadeIn(300, func);
	```
	
Fade Out "fadeOut(time, function)":

	```
	c("div").fadeOut(300, func);
	```
	
Show something:

	```
	c("div").show();
	```

Hide something:

	```
	c("div").hide();
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
	c.ajax({
		upload:c("#form")
	});
	```
	
Get upload progress:

	```
	c.ajax({
		onprogress:function(per){
			console.log(per);
		},
		upload:c("#form")
	});
	```
	
Send post:

	```
	c.ajax({
		type:"POST",
		data:{name:"Henrique", lastname:"Bissoli"}
	});
	```
	
Send get:

	```
	c.ajax({
		url:document.location.href
	});
	```
	
On Ajax done:

	```
	c.ajax({
		url:document.location.href
	}).done(function(data){
		console.log(data);
	});
	```
	
Change Ajax headers:

	```
	c("#this_form").submit(function(e){
	    e.preventDefault();
	    c.ajax({
	    	headers:{'header1':'test', 'header2':'test2'}
	    });
	});
	```
