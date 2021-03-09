/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "69dd7d3ed9cd1c8f11a7e18f0699ca19"
  },
  {
    "url": "assets/css/0.styles.872130de.css",
    "revision": "8c2417272a1140ec248c30852a69a467"
  },
  {
    "url": "assets/img/home-bg.f5396e30.jpg",
    "revision": "f5396e308f85adecbf70b6f59918b5bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e0d46219.js",
    "revision": "b77941db0f11c564b3e7e4215f8ab414"
  },
  {
    "url": "assets/js/10.9d33a636.js",
    "revision": "0567e2d4b98763eaead8cd796889e457"
  },
  {
    "url": "assets/js/11.4a939c6a.js",
    "revision": "f3329a8964184054378c410556051245"
  },
  {
    "url": "assets/js/12.26f42ba0.js",
    "revision": "7af83f7333b86a94243df1433f0b472d"
  },
  {
    "url": "assets/js/13.cc660f86.js",
    "revision": "c8c4b362d79f085eb5e324ee11692933"
  },
  {
    "url": "assets/js/14.d59816d1.js",
    "revision": "8595861d522f2df94a6f4ed729fff09b"
  },
  {
    "url": "assets/js/15.d574c646.js",
    "revision": "1e6b8bf3745738b312ca169a5566ea10"
  },
  {
    "url": "assets/js/16.ccf58d63.js",
    "revision": "c6dc81f14f47158a50ae431e1a3e6374"
  },
  {
    "url": "assets/js/17.e6a89239.js",
    "revision": "a742db286670054b873e04b63df8fe00"
  },
  {
    "url": "assets/js/18.367567c6.js",
    "revision": "a7bfb1c492682f93a7a407f6b17c103b"
  },
  {
    "url": "assets/js/19.fa858edb.js",
    "revision": "37b5b811ae1b7e8f11aa7709f19cc492"
  },
  {
    "url": "assets/js/20.ccc1f342.js",
    "revision": "0d10e5755d887d67064e09eb4dbe16fb"
  },
  {
    "url": "assets/js/21.e10c633c.js",
    "revision": "0d2b2f5a4ee6d119805eb74c45822591"
  },
  {
    "url": "assets/js/22.2a0bc801.js",
    "revision": "5bb2dbd7950ba7c1fe61f08da9eb0f05"
  },
  {
    "url": "assets/js/23.bb3065e8.js",
    "revision": "460c5f40ef93213f30ffff8b69f8c0b8"
  },
  {
    "url": "assets/js/24.8bbeb21e.js",
    "revision": "ff1d4ca15abc6f8a36690e8ce8b297e5"
  },
  {
    "url": "assets/js/25.413d7c6e.js",
    "revision": "1009fbbdcb93d40a882c68ca9fa8da66"
  },
  {
    "url": "assets/js/26.28cfa500.js",
    "revision": "fde3a8a23a96b326f6ff91b1b903685f"
  },
  {
    "url": "assets/js/27.4d8056ee.js",
    "revision": "6747c55778f108933b9e7949c701ee4f"
  },
  {
    "url": "assets/js/28.cbae1f59.js",
    "revision": "8d40080e61662ceb89c05f669117f193"
  },
  {
    "url": "assets/js/29.4c2ee3c2.js",
    "revision": "65eb9690d99e3560b324756c25f6bb68"
  },
  {
    "url": "assets/js/30.6762afc2.js",
    "revision": "2ce20ecdc68cd01e2c0b01c77a6105e7"
  },
  {
    "url": "assets/js/31.1a38d7e5.js",
    "revision": "8f05835c0d78a28430eb0b5924aba1e0"
  },
  {
    "url": "assets/js/4.b0d01004.js",
    "revision": "277586c62be2cd01680f7b79690d0ca9"
  },
  {
    "url": "assets/js/5.245b1580.js",
    "revision": "e25808760557bff8e6a3cb4755eecf05"
  },
  {
    "url": "assets/js/6.c8ec5037.js",
    "revision": "177b7412234b10a20bfe4b8a7e085303"
  },
  {
    "url": "assets/js/7.aa24893a.js",
    "revision": "3196e4af031095c7d105281208502060"
  },
  {
    "url": "assets/js/8.ba33497e.js",
    "revision": "8d1d55bf3c1353de20418afcd25b35b8"
  },
  {
    "url": "assets/js/9.b68ee958.js",
    "revision": "94fc0b91109e00563072ce28a9bd34d4"
  },
  {
    "url": "assets/js/app.bc8f5b1d.js",
    "revision": "099833322c1c9172fcc0d639eaf37efa"
  },
  {
    "url": "assets/js/vendors~flowchart.61a7b9af.js",
    "revision": "936eba2f8cceae5b6d2cfee24183d0e9"
  },
  {
    "url": "category/Build.html",
    "revision": "bcd2d60883f4c28a67c2874adebcf3be"
  },
  {
    "url": "category/index.html",
    "revision": "94d5e33ca0319d0e53a03824f5d1ecac"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "212120fe51272d22989f141e542c97fb"
  },
  {
    "url": "category/Linux.html",
    "revision": "75fc1f402309346bc9abacae61d8fc4a"
  },
  {
    "url": "category/TypeScript.html",
    "revision": "3b20303531c82db477e633ae2df7e335"
  },
  {
    "url": "head.png",
    "revision": "91b1450a787bfd8157b6ff1f0c4c9229"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "cd7f05c5fbc9f13806d70018981e9a60"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "cb52b6277b7102171fcff2f072edceb3"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "06799835f74da6d9033975b6c3e8a0e8"
  },
  {
    "url": "index.html",
    "revision": "01ff1dac6bba1a106b2b4bc63bd18689"
  },
  {
    "url": "tag/CentOS.html",
    "revision": "341183d7872b14b8d1a50edf5614d703"
  },
  {
    "url": "tag/CORS.html",
    "revision": "fdb9c1a6fa6ff8c8aa4ed7f7685aaf3f"
  },
  {
    "url": "tag/File.html",
    "revision": "eedabbcca1373d7f52c2362be3a32dab"
  },
  {
    "url": "tag/index.html",
    "revision": "4ceb95264672121cda5f3e73860b700f"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "c948364538b988b603896df3787f97ff"
  },
  {
    "url": "tag/JS Function.html",
    "revision": "ff453395445c6d691644ddf9361d592d"
  },
  {
    "url": "tag/MySQL.html",
    "revision": "d2ae83abf8d1d439e6bca34e0c59114e"
  },
  {
    "url": "tag/Rollup.html",
    "revision": "7b18d3e148703e6aca3c7c8557cbb53e"
  },
  {
    "url": "tag/TS Basis.html",
    "revision": "12ca9bf9eef6922fed175a25ebf87cbb"
  },
  {
    "url": "tag/TypeScript.html",
    "revision": "674a70b41981f43d43192e07ecb20a12"
  },
  {
    "url": "tag/数据结构.html",
    "revision": "8004c81cfb71439f93097d9eb6b1f71e"
  },
  {
    "url": "timeLine/index.html",
    "revision": "16836e066edee8cbd1913648e2c798bc"
  },
  {
    "url": "views/env/linux/CentOS-install-mysql.html",
    "revision": "6d379fe7f21f768e80d4c3fff1593f54"
  },
  {
    "url": "views/frontend/build/JS-SDK项目构建（rollup多文件打包）.html",
    "revision": "e3450673ac91a0f13336b31ebbbac0cb"
  },
  {
    "url": "views/frontend/javascript/data-structure/01list.html",
    "revision": "84cc8fe37d8045ffd8a4287894c7b220"
  },
  {
    "url": "views/frontend/javascript/data-structure/02stack.html",
    "revision": "dc618155d55882bdd105f681bd9f690f"
  },
  {
    "url": "views/frontend/javascript/data-structure/03queue.html",
    "revision": "fe409015edd722eaf4eebdf070367c53"
  },
  {
    "url": "views/frontend/javascript/data-structure/04link.html",
    "revision": "32fac6bca729271031bbd0ea25888b16"
  },
  {
    "url": "views/frontend/javascript/function/reverse-number.html",
    "revision": "2149a201968fc0e2582297b0f1d7297f"
  },
  {
    "url": "views/frontend/javascript/function/throttle-debounce.html",
    "revision": "76093eb967dc0727783d3586444031ec"
  },
  {
    "url": "views/frontend/javascript/native/image-preview.html",
    "revision": "c962d78aab4301ada07bf1c960aade85"
  },
  {
    "url": "views/frontend/javascript/native/父子窗口通信（postMessage）.html",
    "revision": "4da435fe009a00cbb87848b51c94bb27"
  },
  {
    "url": "views/frontend/typescript/basis/01type.html",
    "revision": "d5ea9b6302eb562be6fb0fd2f9a34128"
  },
  {
    "url": "views/frontend/typescript/basis/02declare.html",
    "revision": "6b50bb17e6761d3b454e79c3dcb08292"
  },
  {
    "url": "views/frontend/typescript/basis/03interface.html",
    "revision": "1825bbd42c903ecb18e0f50fc42b2c19"
  },
  {
    "url": "views/frontend/typescript/basis/04class.html",
    "revision": "dddbd65b9b80ef1a14b068bca3043650"
  },
  {
    "url": "views/frontend/typescript/basis/05function.html",
    "revision": "d9f15e4071163d711b84a0cc65c7f27f"
  },
  {
    "url": "views/frontend/typescript/basis/06generic.html",
    "revision": "c5dae270d0d56180f2c2a18d8726004f"
  },
  {
    "url": "views/frontend/typescript/basis/07inferrence.html",
    "revision": "2f0f3fc7cbc17da7eac831e2a6745295"
  },
  {
    "url": "views/frontend/typescript/basis/08advance.html",
    "revision": "d4809b47857f93cb0de252a5d404567e"
  },
  {
    "url": "views/other/about.html",
    "revision": "2dd27a86e9d6e017fe2e5025d16ee32d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
