# CrowJS

this Javascript lib is based on jQuery, Zepto, VueJS.
weighing much less and with much more performance

# Classes

Add Class:
	```javascript
	c("body").addClass("test");
	```

Remove Class:
	```javascript
	c("body").removeClass("test");
	```

Toggle Class:
	```javascript
	c("body").toggleClass("test");
	```

# HTML

Change some HTML:
	c("body").html("test");
 
Getting contents:
	console.log(c("body").html());
  
Append some HTML:
	```javascript
	c("body").append('<div>test</div>');
	```
	or
	```javascript
	var newDiv = c('<div></div>');
	c("body").append(newDiv);
	```
  
Prepend some HTML:
	```javascript
	c("body").prepend('<div>test</div>');
	```
	or
	```javascript
	var newDiv = c('<div></div>');
	c("body").prepend(newDiv);
	```
	
Remove element:
	```javascript
	c("div").remove();
	```
  
 
# CSS & Animation
 
Manipulate css:
	```javascript
	c("body").css({'margin-top':'20px', 'margin-left':'20px'});
	```

Animation "animate(css, time, transition, function)":
	```javascript
	c("body").animate({'margin-top':'20px', 'margin-left':'20px'}, 300, "ease", func);
	```

Fade In "fadeIn(time, function)":
	```javascript
	c("div").fadeIn(300, func);
	```
	
Fade Out "fadeOut(time, function)":
	```javascript
	c("div").fadeOut(300, func);
	```
	
Show something:
	```javascript
	c("div").show();
	```

Hide something:
	```javascript
	c("div").hide();
	```
