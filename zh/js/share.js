!function(d){d("#downloadPic").click(function(){var e=document.getElementById("post-content");d("#post-content").addClass("sharebg"),document.getElementById("post-content-header").style.display="block",document.getElementById("layer-mask").style.display="block";var l=document.body.appendChild(e);l.style.position="absolute",l.style.top=0,l.style.left=0,l.style.zIndex=-1;var t=l.offsetWidth,n=l.offsetHeight,o=document.createElement("canvas"),a=o.getContext("2d");o.width=3*t,o.height=3*n,o.style.width=t+"px",o.style.height=n+"px",a.scale(3,3),window.pageYOffset=0,document.documentElement.scrollTop=0,document.body.scrollTop=0,html2canvas(l,{allowTaint:!0,useCORS:!0,scale:window.devicePixelRatio,width:t,height:n}).then(function(e){var t=e.toDataURL("image/png").replace("image/png","image/octet-stream"),n=document.getElementById("post-container").appendChild(l);document.getElementById("post-content-header").style.display="none",document.getElementById("layer-mask").style.display="none",d("#post-content").removeClass("sharebg"),n.style.position="",n.style.top="",n.style.left="",n.style.zIndex="";var o=(new Date).getTime()+".png";s(t,o)});var s=function(e,t){var n=document.createElementNS("http://www.w3.org/1999/xhtml","a");n.href=e,n.download=t;var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(o)}})}(jQuery);