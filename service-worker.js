if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let s={};const l=e=>i(e,o),c={module:{uri:o},exports:s,require:l};t[o]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),s)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"8e9e7713e7689a9b6533a6bbdaf4b800"},{url:"/",revision:"index-20231220101544216"},{url:"about/",revision:"about-20231220101544216"}],{})}));