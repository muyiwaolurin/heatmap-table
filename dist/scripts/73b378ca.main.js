(function(){"use strict";var a,b,c,d,e,f,g,h,i;c=function(a){var b;return b=a.toString(16),1===b.length?"0"+b:b},h=function(a,b,d){return"#"+c(a)+c(b)+c(d)},e=function(a){return Math.max.apply(Math,a)},f=function(a){return Math.min.apply(Math,a)},a=function(a){var b,c,d;for(d=0,c=0;c<a.length;)d+=parseFloat(a[c]),c++;return b=d/a.length,Math.round(b)},i=function(a){return a.sort()},g=function(a){var b,c,d;return b={},d=[],c=0,a=a.sort(),a[Math.round(a.length/2)]},b=function(a){var b,c,d;switch(b=void 0,c=void 0,d=void 0,b=[],c=[],d=[],a){case"GYR":b=[243,81,88],c=[254,233,144],d=[84,180,104];break;case"RYG":b=[84,180,104],c=[254,233,144],d=[243,81,88];break;case"GWR":b=[243,81,88],c=[256,256,256],d=[84,180,104];break;default:b=[243,81,88],c=[254,233,144],d=[84,180,104]}return{firstColor:b,secondColor:c,thirdColor:d}},this.ColorScale=function(a,b){var c,e;return e="",c=$("select#color-scale-select"),c.change(function(){return e=$("#color-scale-select option:selected").val(),d(a,b,e),!0}),d(a,b,e)},d=function(c,d,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;return console.log("HeatMap Started ... "),s=$("table#"+c+" tbody td."+d).map(function(){return parseFloat($(this).text())}).get(),o=e(s),m=a(s),p=f(s),q=g(s),n=b(i),v=n.firstColor[0],u=n.firstColor[1],t=n.firstColor[2],l=n.secondColor[0],k=n.secondColor[1],j=n.secondColor[2],y=n.thirdColor[0],x=n.thirdColor[1],w=n.thirdColor[2],r=100,$("table#"+c+" tbody td."+d).each(function(){var a,b,c,d,e,f;return f=parseFloat($(this).text()),q>f&&(d=parseInt(Math.round((f-p)/(q-p)*100).toFixed(0)),e=parseInt((v+d*(l-v)/(r-1)).toFixed(0)),c=parseInt((u+d*(k-u)/(r-1)).toFixed(0)),a=parseInt((t+d*(j-t)/(r-1)).toFixed(0)),b=h(e,c,a),$(this).css({backgroundColor:b})),f===q&&(e=l,c=k,a=j,b=h(e,c,a),$(this).css({backgroundColor:b})),f>q?(d=parseInt(Math.round((f-q)/(o-q)*100).toFixed(0)),e=parseInt((l+d*(y-l)/(r-1)).toFixed(0)),c=parseInt((k+d*(x-k)/(r-1)).toFixed(0)),a=parseInt((j+d*(w-j)/(r-1)).toFixed(0)),b=h(e,c,a),$(this).css({backgroundColor:b})):void 0})}}).call(this);