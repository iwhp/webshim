(function(b){if(!(b.support.validity===true&&(b('<input type="datetime-local" />')[0].type!=="datetime-local"||b('<input type="range" />')[0].type!=="range"))){var i=b.webshims.inputTypes;b.webshims.addInputType=function(a,d){i[a]=d};var j={};b.webshims.addValidityRule=function(a,d){j[a]=d};var m=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"];b.webshims.attr("validity",{elementNames:["input"],getter:function(a){var d=
a.validity;if(!d)return d;var c={};b.each(m,function(f,g){c[g]=d[g]});if(!b.attr(a,"willValidate"))return c;var k=b(a),n=k.val(),l={};c.customError=!!b.data(a,"hasCustomError");if(c.customError)c.valid=false;if((a.nodeName||"").toLowerCase()=="select")return c;b.each(j,function(f,g){var e;if(g(k,n,l)){c[f]=true;if(c.valid){if((e=b.webshims.activeValidationMessages[f])&&typeof e!=="string")e=e[l.type||(a.getAttribute("type")||"").toLowerCase()]||e.defaultMessage||f;a.setCustomValidity(e)}c.valid=false}});
c.valid&&a.setCustomValidity("");return c}});b.webshims.addMethod("setCustomValidity",function(a){a+="";this.setCustomValidity(a);b.data(this,"hasCustomError",!!a)});var h=function(a){if(i[(a.getAttribute&&this.getAttribute("type")||"").toLowerCase()])b.attr(a,"validity")};b.webshims.attr("value",{elementNames:["input"],setter:function(a,d,c){c();h(a)},getter:true});var o=b.fn.val;b.fn.val=function(){var a=o.apply(this,arguments);this.each(function(){h(this)});return a};document.addEventListener&&
document.addEventListener("change",function(a){h(a.target)},true);b.webshims.addReady(function(a){b("input",a).each(function(){h(this)})})}})(jQuery);
