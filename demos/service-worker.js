if(!self.define){let e,i={};const a=(a,o)=>(a=new URL(a+".js",o).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(o,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const b=e=>a(e,c),t={module:{uri:c},exports:d,require:b};i[c]=Promise.all(o.map((e=>t[e]||b(e)))).then((e=>(s(...e),d)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue3-init-demos"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/demos/css/app.46fd063c.css",revision:null},{url:"/demos/css/chunk-vendors.bd302e37.css",revision:null},{url:"/demos/index.html",revision:"5f85f1cd24ddb7ed646c66dc1cf62ce7"},{url:"/demos/js/app.fe78854b.js",revision:null},{url:"/demos/js/chunk-vendors.4957a6be.js",revision:null},{url:"/demos/js/my.22850798.js",revision:null},{url:"/demos/manifest.json",revision:"450901a1d88b7ad221eb54ab568dbc9a"},{url:"/demos/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/demos/static/emoji/aixin.webp",revision:"021c46a7850c84972b06f1a3d38bbd32"},{url:"/demos/static/emoji/aojiao.webp",revision:"aba48f62816dc7188eed1f8490220ef1"},{url:"/demos/static/emoji/baoquan.webp",revision:"5f34c1d590d53842d177370a314f2158"},{url:"/demos/static/emoji/baoyou.webp",revision:"6169a55ca3e77e957d116e62c12cd923"},{url:"/demos/static/emoji/chaokaixin.webp",revision:"ae39a92f3628d86882c49517e2278ac6"},{url:"/demos/static/emoji/chaozan.webp",revision:"3065a70ffa6e7e04b1d9cc67f7219b70"},{url:"/demos/static/emoji/chigua.webp",revision:"efff8e8a53d99b9219199c619af4ef53"},{url:"/demos/static/emoji/cold.webp",revision:"3e5d9e0564a612d48105d82cb4233f6a"},{url:"/demos/static/emoji/dacall.webp",revision:"b2e79b83adb672844635c2df7e7a160d"},{url:"/demos/static/emoji/daku.webp",revision:"c04ed798ab69bba52993282e15d03815"},{url:"/demos/static/emoji/daxiao.webp",revision:"5c6723289b81e875fc3e573d76f4d878"},{url:"/demos/static/emoji/doge.webp",revision:"f3b4620e8d0a12a19988efe3323a51f5"},{url:"/demos/static/emoji/dq.webp",revision:"f2870327283d72ef2e23044099f55320"},{url:"/demos/static/emoji/dx.webp",revision:"b83514210957f7ccd69ce9e4b2e5e5c7"},{url:"/demos/static/emoji/eyes.webp",revision:"f38c1e8c62f88391e8c409f5cee4cfe4"},{url:"/demos/static/emoji/fanbaiyan.webp",revision:"83b97327cfffb356c2fcae1a1c4369a9"},{url:"/demos/static/emoji/fengdou.webp",revision:"a164300d3ef3de0c34841da6c775f6f0"},{url:"/demos/static/emoji/ganga.webp",revision:"e28b52186ae54f28f5477bffbb7a36dd"},{url:"/demos/static/emoji/goutou.webp",revision:"373a66a679ea0b69d073e1f0f6b50d88"},{url:"/demos/static/emoji/guai.webp",revision:"97d2c6625de4d1f17319c7750c847729"},{url:"/demos/static/emoji/guzhang.webp",revision:"a47963b2f0e6f2f83e90f3c84d8f3042"},{url:"/demos/static/emoji/han.webp",revision:"47bcca7da75a0e20cfbb7d2763566c5a"},{url:"/demos/static/emoji/haqian.webp",revision:"a0ddd293ebeca274cd86b89af32e22ca"},{url:"/demos/static/emoji/heart.webp",revision:"0f43fa660f9063f6a5fc6b545a844dc5"},{url:"/demos/static/emoji/hejiu.webp",revision:"bc636903dcc8facb9b852ee07d500508"},{url:"/demos/static/emoji/huaji.webp",revision:"d49690816283c08e2153352823b2a00e"},{url:"/demos/static/emoji/hx.webp",revision:"83fbb6ac67f3dc24e0a111a2f637316b"},{url:"/demos/static/emoji/jianxiao.webp",revision:"feb85573325cfbd67972d204c4db496f"},{url:"/demos/static/emoji/jingxi.webp",revision:"c3905a6ef516a01b2431332087717cdb"},{url:"/demos/static/emoji/jingya.webp",revision:"6a16892a12b7c1133637c123613f9499"},{url:"/demos/static/emoji/kouzhao.webp",revision:"53b83ce4f1fc266ba28e06bbac341a4c"},{url:"/demos/static/emoji/kungou.webp",revision:"e5001b3c231c7bf20b20367f46cd5c37"},{url:"/demos/static/emoji/layanjing.webp",revision:"f38c1e8c62f88391e8c409f5cee4cfe4"},{url:"/demos/static/emoji/lianhong.webp",revision:"e9f39bbacaef8b1ae00665f1ee9ceb0f"},{url:"/demos/static/emoji/like.webp",revision:"208fcfa8a7beb29fb773996cf35fb594"},{url:"/demos/static/emoji/linghunchuqiao.webp",revision:"25925b7bdfe3e5ff6f53908e265e2a78"},{url:"/demos/static/emoji/miaoa.webp",revision:"6e51db144185c5941852f7df44d6b789"},{url:"/demos/static/emoji/mojing.webp",revision:"d55d6f709c4c23e7e25ef690f326a292"},{url:"/demos/static/emoji/nanguo.webp",revision:"155674a53fb73d7ad784fa963adcd45b"},{url:"/demos/static/emoji/oh.webp",revision:"d274fb106dfca3d0dff31163ece18113"},{url:"/demos/static/emoji/ok.webp",revision:"ce69e406693845a6a5d24282dd34de44"},{url:"/demos/static/emoji/piezui.webp",revision:"8f6054d38d523e5b910b9c31e4274292"},{url:"/demos/static/emoji/shengbing.webp",revision:"c688c336b536fa857d322fc404162910"},{url:"/demos/static/emoji/shengli.webp",revision:"3a03bc9110fe172b87c077aaa702524f"},{url:"/demos/static/emoji/shengqi.webp",revision:"f20795a79d466cfe74df49149ec33386"},{url:"/demos/static/emoji/sikao.webp",revision:"52fad341a2e55176e4ac3110bd7418f1"},{url:"/demos/static/emoji/sl.webp",revision:"6ec5571b172dc419bb1f08943af8cf05"},{url:"/demos/static/emoji/smile.webp",revision:"46137954555ab169f565621b2186c971"},{url:"/demos/static/emoji/star.webp",revision:"75a83351a4ecfd3a5b011589a82c4c80"},{url:"/demos/static/emoji/teeth.webp",revision:"d982898ee9d2e6dd05a888243a0b9415"},{url:"/demos/static/emoji/teng.webp",revision:"0abf83d1803c495ec0a0da38440c0218"},{url:"/demos/static/emoji/tiaopi.webp",revision:"a57b33947ac3ba6acc7900a3a214b5b4"},{url:"/demos/static/emoji/touxiao.webp",revision:"c9f08026fd81ff4fa1ee698ef84632ed"},{url:"/demos/static/emoji/tu.webp",revision:"847bff3dd8b9b4bb5154e664427e8df7"},{url:"/demos/static/emoji/tushe.webp",revision:"1f6f213098bd0d5452cdb1caa7487bf9"},{url:"/demos/static/emoji/tv/bishi.webp",revision:"decd412f3d0f870c068499b0176a3fa8"},{url:"/demos/static/emoji/tv/bizui.webp",revision:"e5c2a2be6c10530c505e6a46dbef4a87"},{url:"/demos/static/emoji/tv/chan.webp",revision:"5a4e3d5f0cda9226d5962cbe91921c40"},{url:"/demos/static/emoji/tv/dai.webp",revision:"f5e103581afd40a99f06a225bd60bb1c"},{url:"/demos/static/emoji/tv/daku.webp",revision:"638bd91ed9db9bbe36abf74c9da8ecd5"},{url:"/demos/static/emoji/tv/dalao.webp",revision:"4a52541d1a43ef01ca04cadb3d0d3e25"},{url:"/demos/static/emoji/tv/dalian.webp",revision:"92220f14635051c46ee636dd4e98ccf6"},{url:"/demos/static/emoji/tv/dianzan.webp",revision:"9c5fcb0f3d43fb44db0d06f942c92ca1"},{url:"/demos/static/emoji/tv/doge.webp",revision:"6fc2ba7ab75006ef4b098b09a358b38f"},{url:"/demos/static/emoji/tv/facai.webp",revision:"cf4e16b3f6e13e126ad7845549289939"},{url:"/demos/static/emoji/tv/fanu.webp",revision:"95b36d154185e097d685aa65be8d5ed7"},{url:"/demos/static/emoji/tv/ganga.webp",revision:"bcb7b7e03e8055714485af878f2ce746"},{url:"/demos/static/emoji/tv/guilian.webp",revision:"03ebf4040962a66ef66178af8d4e6bd8"},{url:"/demos/static/emoji/tv/guzhang.webp",revision:"cd41ce59d5d73f63b856469bfd3e2105"},{url:"/demos/static/emoji/tv/haixiu.webp",revision:"e019d3976a969244cf660842a14b7fd6"},{url:"/demos/static/emoji/tv/huaixiao.webp",revision:"47dc5bde7b34fc2951ec310ca601f395"},{url:"/demos/static/emoji/tv/jingxia.webp",revision:"04cf06716bbe2361d7dc699c41d76cbf"},{url:"/demos/static/emoji/tv/keai.webp",revision:"fc87c08af8025c3c04f3ee6150ac3759"},{url:"/demos/static/emoji/tv/koubi.webp",revision:"bfff216b1d24cb804f251b946860f313"},{url:"/demos/static/emoji/tv/kun.webp",revision:"b8e949c6a262cbacfd81958420ce915b"},{url:"/demos/static/emoji/tv/lenmo.webp",revision:"8026c85ed8bda1444bd29af6742ab949"},{url:"/demos/static/emoji/tv/liubixue.webp",revision:"94073b40438073b6285e0dd289af37e5"},{url:"/demos/static/emoji/tv/liuhan.webp",revision:"52e1576de79d1f69c0c5340a9e206dbe"},{url:"/demos/static/emoji/tv/liulei.webp",revision:"8a6759b115641df146c4d953c3702e26"},{url:"/demos/static/emoji/tv/miantian.webp",revision:"624cc0cc1080345928d3efad0db659c9"},{url:"/demos/static/emoji/tv/mudengkoudai.webp",revision:"2b81aaa53b0f3980fd63ae0bd5fc5cbd"},{url:"/demos/static/emoji/tv/nanguo.webp",revision:"1ab552c8834c904eb675d317a42d6c30"},{url:"/demos/static/emoji/tv/outu.webp",revision:"b0b9d1a99c4617966ee9831ef07c7c31"},{url:"/demos/static/emoji/tv/qinqin.webp",revision:"893d26d644504e6ab798da9a5792db47"},{url:"/demos/static/emoji/tv/se.webp",revision:"ab191ec69a2b727d268b653eea5db785"},{url:"/demos/static/emoji/tv/shengbing.webp",revision:"a10d8ba69e11ef3c39dc18f412bf0a98"},{url:"/demos/static/emoji/tv/shengqi.webp",revision:"6168e845ef86d92afab09acb43d72a93"},{url:"/demos/static/emoji/tv/shuizhe.webp",revision:"e3e196dda277b64ed1651d9bc400f7b8"},{url:"/demos/static/emoji/tv/sikao.webp",revision:"1920283acafdff464fdfe7a52d3ddd7a"},{url:"/demos/static/emoji/tv/tiaokan.webp",revision:"812a5a153b644fc096cd2998d1147902"},{url:"/demos/static/emoji/tv/tiaopi.webp",revision:"cb410f9bdc54c739ca17884852c186eb"},{url:"/demos/static/emoji/tv/touxiao.webp",revision:"eedbe0fffa60e558df6e55ab5a08a3e8"},{url:"/demos/static/emoji/tv/tuxue.webp",revision:"f5f3a1c8c3f784d3aa7d223754c84419"},{url:"/demos/static/emoji/tv/tv.webp",revision:"e96a7a7ec6929061a8f4f254f1242c5e"},{url:"/demos/static/emoji/tv/weiqu.webp",revision:"4dbacc08f2663ea2fb6955b8fbf07c7b"},{url:"/demos/static/emoji/tv/weixiao.webp",revision:"11df9bdb9e04388b2fd3b84196855ed4"},{url:"/demos/static/emoji/tv/wenhao.webp",revision:"590da74b3c0b69b0fb99ea7e1b7fcb1f"},{url:"/demos/static/emoji/tv/wunai.webp",revision:"8b05e6cddc124ac1fa883b847f245630"},{url:"/demos/static/emoji/tv/xiaoku.webp",revision:"b11b0e509568c64ccb63511762dc0877"},{url:"/demos/static/emoji/tv/xieyanxiao.webp",revision:"0e3c2da5d4a02634c5270d881aa021c2"},{url:"/demos/static/emoji/tv/yiwen.webp",revision:"af958f1ad0acbca7642485cc86ee626d"},{url:"/demos/static/emoji/tv/yun.webp",revision:"4c9f3278025c1aa0187a91b0baead54c"},{url:"/demos/static/emoji/tv/zaijian.webp",revision:"acdde4fcfa366b4cdcdd5a799167ef0d"},{url:"/demos/static/emoji/tv/zhoumei.webp",revision:"71cb59ecc6bc7085aef19cdafbb46521"},{url:"/demos/static/emoji/tv/zhuakuang.webp",revision:"9461972b6ddb2c4dcd54d80787ab22b0"},{url:"/demos/static/emoji/weiqu.webp",revision:"d9e0492d55aec2a91e5ffa8947612228"},{url:"/demos/static/emoji/wulian.webp",revision:"9c1560f66b078107c50787d59c978530"},{url:"/demos/static/emoji/wulianku.webp",revision:"3f06accc5af3dce9650f12858d0004bc"},{url:"/demos/static/emoji/wuyan.webp",revision:"9735cf4d7785f205fce30f4b5e29cca6"},{url:"/demos/static/emoji/wy.webp",revision:"c713028f9c7a4a9d200b1c5eb233b48d"},{url:"/demos/static/emoji/xia.webp",revision:"77ea96aca823a819bf3d00b862fd057d"},{url:"/demos/static/emoji/xiaoku.webp",revision:"0331d1856723669c3656158448e58270"},{url:"/demos/static/emoji/xq.webp",revision:"1daca83e0875a3fd75397016b8e91d14"},{url:"/demos/static/emoji/xusheng.webp",revision:"053451824d3d1f7fc2bf0614d890f2a9"},{url:"/demos/static/emoji/yh.webp",revision:"30f7a0946f547695637af8742fffd153"},{url:"/demos/static/emoji/yinxian.webp",revision:"33ce18fa55214d92621ae3605252e389"},{url:"/demos/static/emoji/zaijian.webp",revision:"4e113549a993811a1f7b34e1f989caa1"},{url:"/demos/static/emoji/zanghu.webp",revision:"ca079b54ff2a5bdba6728996c704fbe6"},{url:"/demos/static/emoji/zhichi.webp",revision:"612464f63a33f92745176466c90f2ead"},{url:"/demos/static/emoji/zhuakuang.webp",revision:"cafdbd9e767fe4961f79b029dbd9be47"},{url:"/demos/static/img/blindfold.webp",revision:"60fe6f244fde080ba105df7bca84a628"},{url:"/demos/static/img/commentBack.webp",revision:"c9e6254ff7429e52b5b7f56d8acfb44a"},{url:"/demos/static/img/greeting.webp",revision:"80fcb2e69944119f5b98d655ce90b619"},{url:"/demos/static/img/normal.webp",revision:"421198efa89af18abcb45858583cceaf"},{url:"/demos/static/u.webp",revision:"7cd624e482f8c3a1ea233fa70b3baca3"}],{})}));
//# sourceMappingURL=service-worker.js.map
