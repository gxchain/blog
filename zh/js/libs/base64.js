var Base64=function(){"use strict";function t(r){var t,e,n,o,a,h,c,C="",d=0;for(r=function(r){var t,e,n="";for(r=r.replace(/\r\n/g,"\n"),e=0;e<r.length;e++)(t=r.charCodeAt(e))<128?n+=String.fromCharCode(t):(127<t&&t<2048?n+=String.fromCharCode(t>>6|192):(n+=String.fromCharCode(t>>12|224),n+=String.fromCharCode(t>>6&63|128)),n+=String.fromCharCode(63&t|128));return n}(r);d<r.length;)o=(t=r.charCodeAt(d++))>>2,a=(3&t)<<4|(e=r.charCodeAt(d++))>>4,h=(15&e)<<2|(n=r.charCodeAt(d++))>>6,c=63&n,isNaN(e)?h=c=64:isNaN(n)&&(c=64),C+=f.charAt(o),C+=f.charAt(a),C+=f.charAt(h),C+=f.charAt(c);return C}function e(r){var t,e,n,o,a,h,c="",C=0;for(r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");C<r.length;)t=f.indexOf(r.charAt(C++))<<2|(o=f.indexOf(r.charAt(C++)))>>4,e=(15&o)<<4|(a=f.indexOf(r.charAt(C++)))>>2,n=(3&a)<<6|(h=f.indexOf(r.charAt(C++))),c+=String.fromCharCode(t),64!==a&&(c+=String.fromCharCode(e)),64!==h&&(c+=String.fromCharCode(n));return function(r){for(var t="",e=0,n=0,o=0,a=0;e<r.length;)(n=r.charCodeAt(e))<128?(t+=String.fromCharCode(n),e++):191<n&&n<224?(o=r.charCodeAt(e+1),t+=String.fromCharCode((31&n)<<6|63&o),e+=2):(o=r.charCodeAt(e+1),a=r.charCodeAt(e+2),t+=String.fromCharCode((15&n)<<12|(63&o)<<6|63&a),e+=3);return t}(c)}var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{encode:t,decode:e,decodeToHex:function(r){return function(r){var t,e="";for(t=0;t<r.length;t++)e+=r.charCodeAt(t).toString(16);return e}(e(r))},encodeFromHex:function(r){return t(function(r){var t,e="";for(0<r.length%2&&(r="0"+r),t=0;t<r.length;t+=2)e+=String.fromCharCode(parseInt(r.charAt(t)+r.charAt(t+1),16));return e}(r))}}}();