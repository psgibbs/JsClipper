/*
* TotalStorage v. 1.1.2
* Copyright (c) 2012 Jared Novack & Upstatement (upstatement.com)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* @author Jared Novack/jared@upstatement.com
* @url http://upstatement.com/blog/2012/01/jquery-local-storage-done-right-and-easy/
*/
if (typeof(jQuery) != "undefined")
(function(c){var e=window.localStorage,f;f="undefined"==typeof e||"undefined"==typeof window.JSON?!1:!0;c.totalStorage=function(b,a){return c.totalStorage.impl.init(b,a)};c.totalStorage.setItem=function(b,a){return c.totalStorage.impl.setItem(b,a)};c.totalStorage.getItem=function(b){return c.totalStorage.impl.getItem(b)};c.totalStorage.getAll=function(){return c.totalStorage.impl.getAll()};c.totalStorage.deleteItem=function(b){return c.totalStorage.impl.deleteItem(b)};c.totalStorage.impl={init:function(b,
a){return"undefined"!=typeof a?this.setItem(b,a):this.getItem(b)},setItem:function(b,a){if(!f)try{return c.cookie(b,a),a}catch(d){console.log("Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality. You can get it at https://github.com/carhartl/jquery-cookie")}var g=JSON.stringify(a);e.setItem(b,g);return this.parseResult(g)},getItem:function(b){if(!f)try{return this.parseResult(c.cookie(b))}catch(a){return null}return this.parseResult(e.getItem(b))},
deleteItem:function(b){if(!f)try{return c.cookie(b,null),!0}catch(a){return!1}e.removeItem(b);return!0},getAll:function(){var b=[];if(f)for(d in e)d.length&&b.push({key:d,value:this.parseResult(e.getItem(d))});else try{for(var a=document.cookie.split(";"),d=0;d<a.length;d++){var g=a[d].split("=")[0];b.push({key:g,value:this.parseResult(c.cookie(g))})}}catch(h){return null}return b},parseResult:function(b){var a;try{a=JSON.parse(b),"true"==a&&(a=!0),"false"==a&&(a=!1),parseFloat(a)==a&&"object"!=typeof a&&
(a=parseFloat(a))}catch(c){}return a}}})(jQuery);