let lastSayHello="",scrollSelfInfoContentYear="";var meuicat={comments:function(){fetch("/article.json").then((t=>t.json())).then((t=>{Object.keys(t);fetch("https://twikoo.meuicat.com/",{method:"POST",body:JSON.stringify({event:"GET_RECENT_COMMENTS",accessToken:"091e76c30b8bb8bc672808816ceb87e2",includeReply:!0,pageSize:-1}),headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((({data:t})=>{const e=t.length;document.querySelectorAll(".length-num.icat-pc-comment, .length-num.icat-pe-comment, .N_comments").forEach((t=>{t.classList.contains("N_comments")?t.innerText=e+"条评论":t.innerText=e})),console.log("本站Twikoo总评论数:",e)}))}))},toPage:function(){console.log("执行跳转");var t=document.querySelectorAll(".page-number"),e=parseInt(t[t.length-1].innerHTML),n=document.getElementById("toPageText"),i=parseInt(n.value);if(!isNaN(i)&&i>0&&"0"!==(""+i)[0]&&i<=e){var o=1==i?"/":"/page/"+i+"/#content-inner";document.getElementById("toPageButton").href=o}},listenToPageInputPress(){var t=document.getElementById("toPageText"),e=document.getElementById("toPageButton");t&&(t.addEventListener("keydown",(t=>{13===t.keyCode&&(meuicat.toPage(),pjax.loadUrl(e.href))})),t.addEventListener("input",(function(){""===t.value||"0"===t.value?e.classList.remove("haveValue"):e.classList.add("haveValue");var n=document.querySelectorAll(".page-number"),i=+n[n.length-1].innerHTML;+document.getElementById("toPageText").value>i&&(t.value=i)})))},photos:function(t){let e="https://memos.meuicat.com";fetch(t?`${e}/api/v1/memo?creatorId=1&tag=${t}`:`${e}/api/v1/memo?creatorId=1&tag=2023`).then((t=>t.json())).then((t=>{let n="",i=[];t.forEach((t=>{let n=t.content.match(/\!\[.*?\]\(.*?\)/g);n&&(i=i.concat(n)),t.resourceList.length&&t.resourceList.forEach((t=>{t.externalLink?i.push(`![](${t.externalLink})`):i.push(`![](${e}/o/r/${t.id}/${t.publicId}/${t.filename})`)}))})),i&&i.forEach((t=>{let e,i,o=t.replace(/!\[.*?\]\((.*?)\)/g,"$1"),a=t.replace(/!\[(.*?)\]\(.*?\)/g,"$1");-1!=a.indexOf(" ")?(e=a.split(" ")[0],i=a.split(" ")[1]):i=a,n+=`<div class="gallery-photo"><a href="${o}" data-fancybox="gallery" class="fancybox" data-thumb="${o}"><img class="no-lazyload photo-img" loading='lazy' decoding="async" src="${o}"></a>`,i&&(n+=`<span class="photo-title">${i}</span>`),e&&(n+=`<span class="photo-time">${e}</span>`),n+="</div>"})),document.querySelector(".gallery-photos.page").innerHTML=n,imgStatus.watch(".photo-img",(()=>{waterfall(".gallery-photos")})),window.Lately&&Lately.init({target:".photo-time"})})).catch();var n=document.querySelectorAll(".status-bar-item");Array.from(n).forEach((function(t){t.onclick=function(e){var n=document.querySelectorAll(".status-bar-item.selected");return Array.from(n).forEach((function(t){t.classList.remove("selected")})),t.classList.add("selected"),e.stopPropagation(),e.preventDefault(),!1}}))},diffDate:function(t,e=!1){const n=new Date,i=new Date(t),o=n.getTime()-i.getTime(),a=36e5,r=24*a;let s;const l=GLOBAL_CONFIG.date_suffix||{},c=l.day||"天前",u=l.hour||"小时前",d=l.hour||"分钟前";if(e){const t=o/r,e=o/a,n=o/6e4;s=o/2592e6>=1?i.toLocaleDateString().replace(/\//g,"-"):t>=1?parseInt(t)+" "+c:e>=1?parseInt(e)+" "+u:n>=1?parseInt(n)+" "+d:l.just}else s=parseInt(o/r);return s},changeTimeInEssay:function(){document.querySelector("#icat-bber")&&document.querySelectorAll("#icat-bber time").forEach((function(t){var e=t,n=e.getAttribute("datetime");e.innerText=meuicat.diffDate(n,!0),e.style.display="inline"}))},reflashEssayWaterFall:function(){document.querySelector("#waterfall")&&setTimeout((function(){waterfall("#waterfall"),document.getElementById("waterfall").classList.add("show")}),500)},commentText:function(t){"undefined"!=t&&"null"!=t||(t="好棒！");var e=document.getElementsByClassName("el-textarea__inner")[0],n=document.createEvent("HTMLEvents");if(e){n.initEvent("input",!0,!0);var i=replaceAll(t,"\n","\n> ");e.value="> "+i+"\n\n",e.dispatchEvent(n);var o=document.querySelector("#post-comment").offsetTop;window.scrollTo(0,o-80),e.focus(),e.setSelectionRange(-1,-1),document.getElementById("comment-tips")&&document.getElementById("comment-tips").classList.add("show")}},todolist:function(){fetch("https://memos.meuicat.com/api/v1/memo?creatorId=1&tag=清单").then((t=>t.json())).then((t=>{t.forEach((t=>{let e=t.content,n=e.match(/\[(.*?)\]/g)[0].replace(/\[(.*?)\]/,"$1");e=e.replace(/#.*\s/g,"").replace(/(-\s\[\s\]\s)(.*)/g,'<li><i style="margin-right: 5px;" class="fa-regular fa-circle"></i>$2</li>').replace(/(-\s\[x\]\s)(.*)/g,'<li class="achieve"><i style="margin-right: 5px;" class="fa-regular fa-circle-check"></i>$2</li>');let i=document.createElement("div");i.className="list_item",i.innerHTML=`<h3>${n}</h3><ul>${e}</ul>`,document.getElementById("todolist").appendChild(i)})),waterfall("#todolist")})).catch()},tagsBarActive:function(){var t=decodeURIComponent(window.location.pathname).match(/\/(tags|categories)\/.*?\//),e=document.querySelector("#category-bar");if(t&&e){var n=t[0].split("/")[2];document.getElementById(n).classList.add("select")}},statusbar:function(t){const e=document.getElementById(t);if(e){const n="category-bar-items"===t?"category-bar-button":"status-bar-button",i=document.getElementById(n),o=e.scrollWidth-e.clientWidth;e.scrollLeft+e.clientWidth>=o-8?e.scrollTo({left:0,behavior:"smooth"}):e.scrollBy({left:e.clientWidth,behavior:"smooth"}),e.addEventListener("scroll",(function(){i.style.transform=e.scrollLeft+e.clientWidth>=o-8?"rotate(180deg)":""}),{once:!0})}},logInfo:function(){console.log(`Welcome to:\n%cMeuiCat V3.1.1:%c https://meuicat.com/update/%c\nThis site has been running stably for %c${Math.round(((new Date).getTime()-new Date("2021/10/15 01:32:00").getTime())/864e5)} %c days`,"border:1px #888 solid;border-right:0;border-radius:5px 0 0 5px;padding: 5px 10px;color:white;background:#0084FF;margin:10px 0","border:1px #888 solid;border-left:0;border-radius:0 5px 5px 0;padding: 5px 10px;","","color:#0084FF","")},Weixin:function(){/MicroMessenger/i.test(navigator.userAgent)?window.location.href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkxNzEyNjYxMw==#wechat_redirect":window.open("/wechatOA/")},wowanimation:function(){wow=new WOW({boxClass:"wow",animateClass:"animation-slide-in",offset:0,mobile:!0,live:!0}),wow.init()},homeplatform:function(){fetch("https://cdn.meuicat.com/gh/yife/platform.json").then((t=>t.json())).then((t=>{document.querySelectorAll("#icat-platform").forEach((e=>{const n=e.parentNode.querySelector(".article-title").getAttribute("href");if(t[n]){let i="";for(const e in t[n]){let o="";switch(e){case"wechat":o="wechat",platformtitle="微信公众号";break;case"jianshu":o="jianshu",platformtitle="简书";break;case"zhihu":o="zhihu",platformtitle="知乎";break;case"juejin":o="juejin",platformtitle="稀土掘金"}i+=`<a class="${o}" title="该文章已在${platformtitle}中同步更新" href="${t[n][e]}" target="_blank"><i class="iconfont icat-${o}"></i></a>`}e.innerHTML=`<span>本文同步至：</span><div class="platform-box">${i}</div>`}else e.innerHTML='<span title="该文章在博客首发" onclick="pjax.loadUrl(\'/subscribe/\')">博客独享</span>'}))}))},postplatform:function(){fetch("https://cdn.meuicat.com/gh/yife/platform.json").then((t=>t.json())).then((t=>{document.querySelectorAll("#icat-meta-platform").forEach((e=>{const n=window.location.pathname;if(t[n]){let i=[];for(const e in t[n]){let o="",a="",r="";switch(e){case"wechat":o="wechat",a="微信公众号",r="亦小封";break;case"jianshu":o="jianshu",a="简书",r="亦小封";break;case"zhihu":o="zhihu",a="知乎",r="亦封";break;case"juejin":o="juejin",a="稀土掘金",r="亦封"}i.push(`<a class="${o}" title="ID：${r}" href="${t[n][e]}" target="_blank"><i class="iconfont icat-${o}"></i>${a}</a>`)}if(i.length>0){const t=2===i.length?"&nbsp;、":"，",n=i.join(t);e.innerHTML=`本文将与${n}进行同步更新`}else e.innerHTML='<span title="查看更多更新和订阅细则" onclick="pjax.loadUrl(\'/subscribe/\')">本文由博客首发、独享</span>'}else e.innerHTML='<span title="查看更多更新和订阅细则" onclick="pjax.loadUrl(\'/subscribe/\')">本文由博客首发、独享</span>'}))}))},addScript(t,e,n){if(document.getElementById(t))return n?n():void 0;let i=document.createElement("script");i.src=e,i.id=t,n&&(i.onload=n),document.head.appendChild(i)},getIpInfo:function(){fetch("https://api.qjqq.cn/api/Local").then((t=>t.json())).then((t=>{var e=t.ip,n=t.data.country,i=t.data.prov,o=t.data.city,a=t.data.district,r=t.data.radius,s=Math.floor(r),l=t.data.isp;document.getElementById("userAgentIp").innerHTML=e,document.getElementById("userAgentCountry").innerHTML=n,document.getElementById("userAgentProv").innerHTML=i,document.getElementById("userAgentCity").innerHTML=o,document.getElementById("userAgentDistrict").innerHTML=a,document.getElementById("userAgentRadius").innerHTML=s+"公里",document.getElementById("userAgentISP").innerHTML=l;var c=(new UAParser).getResult();document.getElementById("userAgentOS").innerHTML=c.os.name+" "+c.os.version,document.getElementById("userAgentBrowser").innerHTML=c.browser.name+" "+c.browser.version}))},postai:function(){const t=window.location.pathname;fetch("https://cdn.meuicat.com/gh/yife/abstract.json").then((t=>t.json())).then((e=>{if(t in e){const n=document.createElement("div");n.id="post-ai",n.innerHTML='\n\t\t\t\t<div class="ai-title">\n\t\t\t\t  <a class="ai-title-left" href="/blog/42#Ai文章摘要" title="查看部署" data-pjax-state="">\n\t\t\t\t\t<i class="iconfont icat-Ai-Summary"></i>\n\t\t\t\t\t<div class="ai-title-text">文章摘要</div>\n\t\t\t\t  </a>\n\t\t\t\t  <div class="ai-tag">iCatGPT</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="ai-explanation" style="display: block;">\n\t\t\t\t  加载中...<span class="blinking-cursor"></span>\n\t\t\t\t</div>\n\t\t\t  ';const i=document.querySelector("#post #article-container");i.insertBefore(n,i.firstChild);const o=document.querySelector(".ai-explanation"),a=e[t],r=a.length;let s=0,l=document.querySelector(".blinking-cursor");const c=Math.floor(3*Math.random())+1;setTimeout((()=>{o.innerHTML="",o.appendChild(l);const t=setInterval((()=>{l.parentNode.removeChild(l),o.innerHTML+=a[s],o.appendChild(l),s++,s===r&&(clearInterval(t),l.parentNode.removeChild(l))}),90)}),1e3*c)}})).catch((t=>console.error(t)))},all_tags:function(){document.querySelectorAll("#aside-content .card-tag-cloud").forEach((function(t){t.classList.add("all-tags")}));var t=document.getElementById("more-tags-btn");t&&t.parentNode.removeChild(t)},TagsRandom:function(t){return Math.floor(Math.random()*t)},Tagscolor:function(){const t=document.querySelectorAll("#aside-content .card-tag-cloud a"),e=[];for(;e.length<5;){const n=meuicat.TagsRandom(t.length);e.includes(n)||(e.push(n),t[n].style.color="var(--icat-blue)")}},Introduction:function(){const t=["🤖️ 数码科技爱好者","🔍 分享与热心帮助","🏠 智能家居小能手","🔨 设计开发一条龙","📷 人文摄影的坚定者","🏃 脚踏实地行动派","📚 热爱阅读的书虫迷","🎵 薛之谦七年热爱粉","🏋️‍♀️ 坚韧不拔的健身达人","🍜 走哪吃哪的美食迷","🎮 Minecraft骨灰级玩家","👨‍🍳 一位爱做饭的程序猿"],e=document.getElementById("Introduction");let n=t[Math.floor(Math.random()*t.length)];for(;n===lastSayHello;)n=t[Math.floor(Math.random()*t.length)];e.textContent=n,lastSayHello=n},runtimen:function(){let t=new Date("2021/10/15 00:00:00").getTime(),e=(new Date).getTime(),n=(Math.round((e-t)/1e3)/7884e4).toFixed(2),i=document.getElementById("run-time");i&&(i.innerHTML=`已稳定运行 ${n} 坤年 🏀`),setTimeout(meuicat.runtime,1e3)},fiftyonela:function(){fetch("https://v6-widget.51.la/v6/K05NsEfoZbXF1Nxt/quote.js").then((t=>t.text())).then((t=>{let e=["今日人数","今日访问","昨日人数","昨日访问","本月访问"],n=t.match(/(<\/span><span>).*?(\/span><\/p>)/g);n=n.map((t=>t.replace(/(<\/span><span>)/g,"").replace(/(<\/span><\/p>)/g,"")));let i=document.getElementById("statistic"),o=n[0],a=document.querySelector(".T-box");a&&(a.innerHTML="最近活跃："+o+"&ensp;|&ensp;"+a.innerHTML);for(let t=0;t<n.length;t++){if(!i)return;0!=t&&t!=n.length-1&&(i.innerHTML+='<div><span class="tips">'+e[t-1]+"</span><span id="+e[t-1]+">"+n[t]+"</span></div>")}}))}};if(meuicat.listenToPageInputPress(),isPublicSacrificeDay()){var element=document.documentElement;element.style.filter="grayscale(100%)",element.style.webkitFilter="grayscale(100%)",element.style.MozFilter="grayscale(100%)",element.style.msFilter="grayscale(100%)",element.style.OFilter="grayscale(100%)"}function isPublicSacrificeDay(){var t=new Date,e=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2);return["0707","0909","0918","1109","1213"].includes(e+n)}var percentFlag=!1;function essayScroll(){const t=(document.documentElement.scrollTop||window.pageYOffset)%document.documentElement.clientHeight;t<=99||(t=99),!percentFlag&&t+100>=document.documentElement.clientHeight&&document.querySelector("#waterfall")?setTimeout((()=>{waterfall("#waterfall")}),500):setTimeout((()=>{document.querySelector("#waterfall")&&waterfall("#waterfall")}),500);const e=window.scrollY+document.documentElement.clientHeight;let n=document.getElementById("post-comment")||document.getElementById("footer");(n.offsetTop+n.offsetHeight/2<e||90<t)&&(percentFlag=!0)}function replaceAll(t,e,n){return t.split(e).join(n)}function waterfall(t){function e(t,e){var n=window.getComputedStyle(e);return parseFloat(n["margin"+t])||0}function n(t){return t+"px"}function i(t){return parseFloat(t.style.left)}function o(t){return t.clientWidth}function a(t){return function(t){return parseFloat(t.style.top)}(t)+function(t){return t.clientHeight}(t)+e("Bottom",t)}function r(t){return i(t)+o(t)+e("Right",t)}function s(t){t=t.sort((function(t,e){return a(t)===a(e)?i(e)-i(t):a(e)-a(t)}))}function l(e){o(t)!=g&&(e.target.removeEventListener(e.type,arguments.callee),waterfall(t))}"string"==typeof t&&(t=document.querySelector(t));var c=[].map.call(t.children,(function(t){return t.style.position="absolute",t}));t.style.position="relative";var u=[];c.length&&(c[0].style.top="0px",c[0].style.left=n(e("Left",c[0])),u.push(c[0]));for(var d=1;d<c.length;d++){var h=c[d-1],m=c[d];if(!(r(h)+o(m)<=o(t)))break;m.style.top=h.style.top,m.style.left=n(r(h)+e("Left",m)),u.push(m)}for(;d<c.length;d++){s(u);m=c[d];var f=u.pop();m.style.top=n(a(f)+e("Top",m)),m.style.left=n(i(f)),u.push(m)}s(u);var p=u[0];t.style.height=n(a(p)+e("Bottom",p));var g=o(t);window.addEventListener?window.addEventListener("resize",l):document.body.onresize=l}!function(){this.loaded=0,this.failed=0,this.total=0,this.watch=function(t,e){var n=document.querySelectorAll(t);if(!n.length)return console.log("[imgStatus]: There aren't any images associated with this selector ("+t+")!");this.total=n.length;for(var i=0;i<this.total;i++)isCached(n[i].src)?this._setLoaded(e):n[i].addEventListener?(n[i].addEventListener("load",this._setLoaded.bind(this,e)),n[i].addEventListener("error",this._setFailed.bind(this,e))):(n[i].attachEvent("onload",this._setLoaded.bind(this,e)),n[i].attachEvent("onerror",this._setFailed.bind(this,e)))},this.isCached=function(t){var e=new Image;return e.src=t,e.complete},this._setFailed=function(t,e){++this.failed,"function"==typeof t&&t(this)},this._setLoaded=function(t,e){++this.loaded,"function"==typeof t&&t(this)},this.isDone=function(){return this.loaded+this.failed===this.total},"object"==typeof window&&(window.imgStatus=this)}(),window.Lately=new function(){var t=this;this.lang={second:"秒",minute:"分钟",hour:"小时",day:"天",month:"个月",year:"年",ago:"前",error:"NaN"};var e=function(e){e=new Date(n(e));var i=new function(){this.second=(Date.now()-e.getTime())/1e3,this.minute=this.second/60,this.hour=this.minute/60,this.day=this.hour/24,this.month=this.day/30,this.year=this.month/12},o=Object.keys(i).reverse().find((function(t){return i[t]>=1}));return(o?function(t,e){return Math.floor(t)+e}(i[o],t.lang[o]):t.lang.error)+t.lang.ago},n=function(t){return t=new Date(t&&("number"==typeof t?t:t.replace(/-/g,"/").replace("T"," "))),!isNaN(t.getTime())&&t.getTime()};return{init:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=i.target,a=void 0===o?"time":o,r=i.lang;r&&(t.lang=r);var s=!0,l=!1,c=void 0;try{for(var u,d=document.querySelectorAll(a)[Symbol.iterator]();!(s=(u=d.next()).done);s=!0){var h=u.value,m=n(h.dateTime)||n(h.title)||n(h.innerHTML)||0;if(!m)return;h.title=new Date(m).toLocaleString(),h.innerHTML=e(m)}}catch(t){l=!0,c=t}finally{try{!s&&d.return&&d.return()}finally{if(l)throw c}}},format:e}},function(){var t,e,n,i,o,a=function(t,e){return function(){return t.apply(e,arguments)}},r=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=t:o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o;for(e=n=0,i=(o=this.keys).length;i>n;e=++n)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,a;for(n=i=0,o=(a=this.keys).length;o>i;n=++i)if(a[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,(function(t,e){return e.toUpperCase()})),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=a(this.scrollCallback,this),this.scrollHandler=a(this.scrollHandler,this),this.resetAnimation=a(this.resetAnimation,this),this.start=a(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.element.querySelectorAll("."+this.config.boxClass)).length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.boxes).length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(n=0,i=(o=this.boxes).length;i>n;n++)e=o[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,i,o,a,r;for(r=[],n=0,i=e.length;i>n;n++)a=e[n],r.push(function(){var t,e,n,i;for(i=[],t=0,e=(n=a.addedNodes||[]).length;e>t;t++)o=n[t],i.push(this.doSync(o));return i}.call(t));return r}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,n,i,o,a;if(null==t&&(t=this.element),1===t.nodeType){for(a=[],n=0,i=(o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;i>n;n++)e=o[n],r.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),a.push(this.scrolled=!0)):a.push(void 0);return a}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var n,i,o;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(a){return function(){return a.customStyle(t,e,i,n,o)}}(this))},o.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},o.prototype.resetStyle=function(){var t,e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;n>e;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim():void 0},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,a;for(n in i=[],e)o=e[n],t[""+n]=o,i.push(function(){var e,i,r,s;for(s=[],e=0,i=(r=this.vendors).length;i>e;e++)a=r[e],s.push(t[""+a+n.charAt(0).toUpperCase()+n.substr(1)]=o);return s}.call(this));return i},o.prototype.vendorCSS=function(t,e){var n,o,a,r,s,l;for(r=(s=i(t)).getPropertyCSSValue(e),n=0,o=(a=this.vendors).length;o>n;n++)l=a[n],r=r||s.getPropertyCSSValue("-"+l+"-"+e);return r},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;n>e;e++)(t=i[e])&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,a;return n=t.getAttribute("data-wow-offset")||this.config.offset,o=(a=window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(i=this.offsetTop(t))+t.clientHeight,o>=i&&e>=a},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}.call(this);
/*! WOW - v1.1.2 - 2015-04-07
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT
 */