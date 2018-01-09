# CrowJS

this Javascript lib is based on jQuery, Zepto, VueJS.
weighing much less and with much more performance

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
	
Remove element:

	```
	c("div").remove();
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
