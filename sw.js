if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let u={};const t=e=>i(e,l),a={module:{uri:l},exports:u,require:t};s[l]=Promise.all(r.map((e=>a[e]||t(e)))).then((e=>(n(...e),u)))}}define(["./workbox-de803542"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/@vue-bc8ac499.js",revision:null},{url:"assets/Base64-fee4f883.js",revision:null},{url:"assets/Footer.vuevuetypescriptsetuptruelang-c8c463b3.js",revision:null},{url:"assets/Hash-ebb9cde0.js",revision:null},{url:"assets/Home-bc03c764.js",revision:null},{url:"assets/index-2467c9df.js",revision:null},{url:"assets/index-eab2cca8.css",revision:null},{url:"assets/Json-424e9f5d.js",revision:null},{url:"assets/jsonHighlight-fe0564c3.js",revision:null},{url:"assets/Layout-e7d21ad8.js",revision:null},{url:"assets/pinia-e2ddd066.js",revision:null},{url:"assets/plugin-vueexport-helper-c27b6911.js",revision:null},{url:"assets/Snippets-debe8466.js",revision:null},{url:"assets/useAutofocus-db826f82.js",revision:null},{url:"assets/vue-4ed993c7.js",revision:null},{url:"assets/vue-demi-71ba0ef2.js",revision:null},{url:"assets/vue-router-1019b0f4.js",revision:null},{url:"avatar-dark.svg",revision:"5b3b30f30b254adfe2d67af859110108"},{url:"avatar.svg",revision:"af4246df138a9fab7c912dcbc3986e02"},{url:"index.html",revision:"0cf47f289eae66eb0a9738b40513a2c0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"avatar.svg",revision:"af4246df138a9fab7c912dcbc3986e02"},{url:"avatar-dark.svg",revision:"5b3b30f30b254adfe2d67af859110108"},{url:"manifest.webmanifest",revision:"1b635a5b7fcd82c5b941d821f7a5e71c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https?:\/\/at\.alicdn\.com\/.*/i,new e.CacheFirst({cacheName:"icon-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));