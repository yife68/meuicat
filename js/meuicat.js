function whenDOMReady(){"/privacy/"==location.pathname&&meuicat.addScript("echarts","https://cdn.meuicat.com/gh/UAParser.js/ua-parser.min.js"),meuicat.comments(),meuicat.changeTimeInEssay(),meuicat.reflashEssayWaterFall(),meuicat.tagsBarActive(),meuicat.wowanimation(),"/photos/"==location.pathname&&meuicat.photos(),"/project/"==location.pathname&&meuicat.todolist(),("/"==location.pathname||location.pathname.startsWith("/page/"))&&(meuicat.homeplatform(),meuicat.Tagscolor()),location.pathname.startsWith("/blog/")&&(meuicat.postplatform(),meuicat.postai()),window.onload=()=>{"/privacy/"==location.pathname&&meuicat.getIpInfo()}}whenDOMReady(),document.addEventListener("pjax:complete",whenDOMReady),meuicat.logInfo();var icat={submitInfo:function(){var e=document.querySelector(".submit-box"),t=document.querySelector("#follow");e&&e.classList.toggle("display"),t&&t.classList.toggle("display")},socialInfo:function(){var e=document.querySelector(".card-info-social-icons"),t=document.querySelector(".social-btn");e&&e.classList.toggle("show"),t&&t.classList.toggle("show")},switchCommentBarrage:function(){document.querySelector(".comment-barrage")&&($(".comment-barrage").is(":visible")?($(".comment-barrage").hide(),$(".menu-commentBarrage-text").text("显示热评"),document.querySelector("#consoleCommentBarrage").classList.remove("on"),localStorage.setItem("commentBarrageSwitch","false")):$(".comment-barrage").is(":hidden")&&($(".comment-barrage").show(),$(".menu-commentBarrage-text").text("关闭热评"),document.querySelector("#consoleCommentBarrage").classList.add("on"),localStorage.removeItem("commentBarrageSwitch"))),rm.hideRightMenu()},scrollTo:function(e){const t=document.getElementById(e);if(t){const e=t.getBoundingClientRect().top+window.pageYOffset-80,o=window.pageYOffset,n=e-o;let c=null;window.requestAnimationFrame((function e(t){c||(c=t);const i=t-c,a=(s=Math.min(i/0,1))<.5?2*s*s:(4-2*s)*s-1;var s;window.scrollTo(0,o+n*a),i<600&&window.requestAnimationFrame(e)}))}}};function setMask(){return null!=document.getElementsByClassName("rmMask")[0]?document.getElementsByClassName("rmMask")[0]:(mask=document.createElement("div"),mask.className="rmMask",mask.style.width=window.innerWidth+"px",mask.style.height=window.innerHeight+"px",mask.style.background="#fff",mask.style.opacity=".0",mask.style.position="fixed",mask.style.top="0",mask.style.left="0",mask.style.zIndex=998,document.body.appendChild(mask),document.getElementById("rightMenu").style.zIndex=19198,mask)}function insertAtCursor(e,t){if(document.selection)e.focus(),sel=document.selection.createRange(),sel.text=t,sel.select();else if(e.selectionStart||"0"==e.selectionStart){var o=e.selectionStart,n=e.selectionEnd,c=e.scrollTop;e.value=e.value.substring(0,o)+t+e.value.substring(n,e.value.length),c>0&&(e.scrollTop=c),e.focus(),e.selectionStart=o+t.length,e.selectionEnd=o+t.length}else e.value+=t,e.focus()}let Right_click={};function popupMenu(){window.oncontextmenu=function(e){if(e.ctrlKey||document.body.clientWidth<900)return!0;$(".rightMenu-group.hide").hide(),document.getSelection().toString()&&$("#menu-text").show(),(document.getElementById("post")||document.getElementById("page"))&&$("#menu-post").show();var t=window.document.body;t=e.target;/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(window.getSelection().toString())&&"A"!=t.tagName&&$("#menu-too").show(),"A"==t.tagName&&($("#menu-to").show(),Right_click.open=function(){-1==t.href.indexOf("http://")&&-1==t.href.indexOf("https://")||-1!=t.href.indexOf("yisous.xyz")?pjax.loadUrl(t.href):location.href=t.href},Right_click.openWithNewTab=function(){window.open(t.href)},Right_click.copyLink=function(){let e=t.href,o=document.createElement("textarea");o.value=e,document.body.appendChild(o),o.select(),document.execCommand("Copy"),document.body.removeChild(o)}),"IMG"==t.tagName?($("#menu-img").show(),Right_click.openWithNewTab=function(){window.open(t.src)},Right_click.click=function(){t.click()},Right_click.copyLink=function(){let e=t.src,o=document.createElement("textarea");o.value=e,document.body.appendChild(o),o.select(),document.execCommand("Copy"),document.body.removeChild(o)},Right_click.saveAs=function(){var e=document.createElement("a"),o=t.src,n=o.split("/")[-1];e.href=o,e.download=n,e.click(),window.URL.revokeObjectURL(o)}):"TEXTAREA"!=t.tagName&&"INPUT"!=t.tagName||($("#menu-paste").show(),Right_click.paste=function(){navigator.permissions.query({name:"clipboard-read"}).then((e=>{"granted"==e.state||"prompt"==e.state?navigator.clipboard.readText().then((e=>{console.log(e),insertAtCursor(t,e)})):Snackbar.show({text:"请允许读取剪贴板！",pos:"top-center",showAction:!1})}))});let o=e.clientX+10,n=e.clientY,c=$("#rightMenu").width(),i=$("#rightMenu").height();return o+c>window.innerWidth&&(o-=c+10),n+i>window.innerHeight&&(n-=n+i-window.innerHeight),mask=setMask(),window.onscroll=()=>{Right_click.showRightMenu(!1),window.onscroll=()=>{},document.body.removeChild(mask)},$(".rightMenu-item").click((()=>{document.body.removeChild(mask)})),$(window).resize((()=>{Right_click.showRightMenu(!1),document.body.removeChild(mask)})),mask.onclick=()=>{document.body.removeChild(mask)},Right_click.showRightMenu(!0,n,o),!1},window.addEventListener("click",(function(){Right_click.showRightMenu(!1)}))}Right_click.showRightMenu=function(e,t=0,o=0){let n=$("#rightMenu");n.css("top",t+"px").css("left",o+"px"),e?n.show():n.hide()},Right_click.switchDarkMode=function(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)},Right_click.copyWordsLink=function(){let e=window.location.href,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),Snackbar.show({text:"链接复制成功！快去分享吧！",pos:"bottom-center",showAction:!1})},Right_click.switchReadMode=function(){const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="fas fa-sign-out-alt exit-readmode",e.appendChild(t),t.addEventListener("click",(function o(){e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",o)}))},Right_click.copySelect=function(){document.execCommand("Copy",!1,null),Snackbar.show({text:"复制成功！快去分享吧！",pos:"bottom-center",showAction:!1})},Right_click.translate=function(){document.getElementById("translateLink").click()},Right_click.searchinThisPage=()=>{document.body.removeChild(mask),document.getElementsByClassName("local-search-box--input")[0].value=window.getSelection().toString(),document.getElementsByClassName("search")[0].click();var e=document.createEvent("HTMLEvents");e.initEvent("input",!1,!1),document.getElementsByClassName("local-search-box--input")[0].dispatchEvent(e)},document.body.addEventListener("touchmove",(function(e){}),{passive:!1}),navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||popupMenu();const box=document.documentElement;function addLongtabListener(e,t){let o=0;e.ontouchstart=()=>{o=0,o=setTimeout((()=>{t(),o=0}),380)},e.ontouchmove=()=>{clearTimeout(o),o=0},e.ontouchend=()=>{o&&clearTimeout(o)}}addLongtabListener(box,popupMenu);