if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const t=e=>i(e,l),u={module:{uri:l},exports:a,require:t};s[l]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(n(...e),a)))}}define(["./workbox-de803542"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/@vue-b15b3ec4.js",revision:null},{url:"assets/Base64-6ee2df25.js",revision:null},{url:"assets/Footer.vuevuetypescriptsetuptruelang-6f849bfc.js",revision:null},{url:"assets/Hash-5f90aa49.js",revision:null},{url:"assets/Home-1369c219.js",revision:null},{url:"assets/index-a31e5042.css",revision:null},{url:"assets/index-d6f30692.js",revision:null},{url:"assets/Json-d9431b7b.js",revision:null},{url:"assets/Layout-11f24fca.js",revision:null},{url:"assets/pinia-3eeae971.js",revision:null},{url:"assets/plugin-vueexport-helper-c27b6911.js",revision:null},{url:"assets/Snippets-1dab5a70.js",revision:null},{url:"assets/vue-4ed993c7.js",revision:null},{url:"assets/vue-demi-71ba0ef2.js",revision:null},{url:"assets/vue-router-56647813.js",revision:null},{url:"avatar-dark.svg",revision:"5b3b30f30b254adfe2d67af859110108"},{url:"avatar.svg",revision:"af4246df138a9fab7c912dcbc3986e02"},{url:"index.html",revision:"ea21bddeface3755e7b9bd16023c6d1d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"avatar.svg",revision:"af4246df138a9fab7c912dcbc3986e02"},{url:"avatar-dark.svg",revision:"5b3b30f30b254adfe2d67af859110108"},{url:"manifest.webmanifest",revision:"1b635a5b7fcd82c5b941d821f7a5e71c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https?:\/\/at\.alicdn\.com\/.*/i,new e.CacheFirst({cacheName:"icon-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
