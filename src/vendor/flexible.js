(function(g,j){var n=g.document;var b=n.documentElement;var l=n.querySelector('meta[name="viewport"]');var o=0;var d=0;var e;var i=j.flexible||(j.flexible={});if(l){var f=l.getAttribute("content").match(/initial\-scale=([\d\.]+)/);if(f){d=parseFloat(f[1]);o=parseInt(1/d)}}if(!o&&!d){var h=g.navigator.appVersion.match(/android/gi);var c=g.navigator.appVersion.match(/iphone/gi);var m=g.devicePixelRatio;if(c){if(m>=3&&(!o||o>=3)){o=3}else{if(m>=2&&(!o||o>=2)){o=2}else{o=1}}}else{o=1}d=1/o}b.setAttribute("data-dpr",o);if(!l){l=n.createElement("meta");l.setAttribute("name","viewport");l.setAttribute("content","initial-scale="+d+", maximum-scale="+d+", minimum-scale="+d+", user-scalable=no");if(b.firstElementChild){b.firstElementChild.appendChild(l)}else{var a=n.createElement("div");a.appendChild(l);n.write(a.innerHTML)}}function k(){var p=b.getBoundingClientRect().width;if(p/o>540){p=540*o}var q=p/10;b.style.fontSize=q+"px";i.rem=g.rem=q}g.addEventListener("resize",function(){clearTimeout(e);e=setTimeout(k,300)},false);g.addEventListener("pageshow",function(p){if(p.persisted){clearTimeout(e);e=setTimeout(k,300)}},false);k();i.dpr=g.dpr=o;i.refreshRem=k})(window,window["lib"]||(window["lib"]={}));