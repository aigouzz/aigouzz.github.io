(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{"0eaf":function(e,t,c){"use strict";var o=c("7a23");const a=e=>(Object(o["pushScopeId"])("data-v-185b1a6a"),e=e(),Object(o["popScopeId"])(),e),n={class:"simple-header van-hairline--bottom"},l={key:1},r={class:"simple-header-name"},d=a(()=>Object(o["createElementVNode"])("i",{class:"nbicon nbmore"},null,-1)),s=a(()=>Object(o["createElementVNode"])("div",{class:"block"},null,-1));function i(e,t,c,a,i,b){return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("header",n,[a.isback?(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",l,"      ")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",{key:0,class:"nbicon nbfanhui",onClick:t[0]||(t[0]=(...e)=>a.goBack&&a.goBack(...e))})),Object(o["createElementVNode"])("div",r,Object(o["toDisplayString"])(c.name),1),d]),s],64)}c("14d9");var b=c("6605"),u={props:{name:{type:String,default:""},back:{type:String,default:""},noback:{type:Boolean,default:!1}},emits:["callback"],setup(e,t){const c=Object(o["ref"])(e.noback),a=Object(b["d"])(),n=()=>{e.back?a.push({path:e.back}):a.go(-1),t.emit("callback")};return{goBack:n,isback:c}}},p=(c("90db"),c("6b0d")),j=c.n(p);const O=j()(u,[["render",i],["__scopeId","data-v-185b1a6a"]]);t["a"]=O},"360d":function(e,t,c){"use strict";c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return n})),c.d(t,"c",(function(){return l}));var o=c("a27e");function a(e){return o["a"].get("/goods/detail/"+e)}function n(){return o["a"].get("/categories")}function l(e){return o["a"].get("/search",{params:e})}},4545:function(e,t,c){},"5f47":function(e,t,c){"use strict";c.r(t);var o=c("7a23");const a={class:"product-detail"},n={class:"detail-content"},l={class:"detail-swipe-wrap"},r=["src"],d={class:"product-info"},s={class:"product-title"},i=Object(o["createElementVNode"])("div",{class:"product-desc"},"免邮费 顺丰快递",-1),b={class:"product-price"},u={class:"product-intro"},p=Object(o["createElementVNode"])("ul",null,[Object(o["createElementVNode"])("li",null,"概述"),Object(o["createElementVNode"])("li",null,"参数"),Object(o["createElementVNode"])("li",null,"安装服务"),Object(o["createElementVNode"])("li",null,"常见问题")],-1),j=["innerHTML"];function O(e,t,c,O,m,g){const k=Object(o["resolveComponent"])("s-header"),C=Object(o["resolveComponent"])("van-swipe-item"),f=Object(o["resolveComponent"])("van-swipe"),v=Object(o["resolveComponent"])("van-action-bar-icon"),N=Object(o["resolveComponent"])("van-action-bar-button"),V=Object(o["resolveComponent"])("van-action-bar");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(k,{name:"商品详情"}),Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(f,{class:"my-swipe","indicator-color":"#1baeae"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.detail.goodsCarouselList,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(C,{key:t},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:e,alt:""},null,8,r)]),_:2},1024))),128))]),_:1})]),Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("div",s,Object(o["toDisplayString"])(e.detail.goodsName||""),1),i,Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("span",null,"¥"+Object(o["toDisplayString"])(e.detail.sellingPrice||""),1)])]),Object(o["createElementVNode"])("div",u,[p,Object(o["createElementVNode"])("div",{class:"product-content",innerHTML:e.detail.goodsDetailContent||""},null,8,j)])]),Object(o["createVNode"])(V,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{icon:"chat-o",text:"客服"}),Object(o["createVNode"])(v,{icon:"cart-o",badge:O.count?O.count:"",onClick:t[0]||(t[0]=e=>O.goTo()),text:"购物车"},null,8,["badge"]),Object(o["createVNode"])(N,{type:"warning",onClick:O.handleAddCart,text:"加入购物车"},null,8,["onClick"]),Object(o["createVNode"])(N,{type:"danger",onClick:O.goToCart,text:"立即购买"},null,8,["onClick"])]),_:1})])}c("27f1");var m=c("1c96"),g=(c("14d9"),c("6605")),k=c("5502"),C=c("360d"),f=c("8ee6"),v=c("0eaf"),N=c("495f"),V={setup(){const e=Object(g["c"])(),t=Object(g["d"])(),c=Object(k["b"])(),a=Object(o["reactive"])({detail:{goodsCarouselList:[]}});Object(o["onMounted"])(async()=>{const{id:t}=e.params,{data:o}=await Object(C["b"])(t);o.goodsCarouselList=o.goodsCarouselList.map(e=>Object(N["b"])(e)),a.detail=o,c.dispatch("updateCart")}),Object(o["nextTick"])(()=>{const e=document.querySelector(".detail-content");e.scrollTop=0});const n=()=>{t.go(-1)},l=()=>{t.push({path:"/cart"})},r=async()=>{const{resultCode:e}=await Object(f["a"])({goodsCount:1,goodsId:a.detail.goodsId});200==e&&m["a"].success("添加成功"),c.dispatch("updateCart")},d=async()=>{await Object(f["a"])({goodsCount:1,goodsId:a.detail.goodsId}),c.dispatch("updateCart"),t.push({path:"/cart"})},s=Object(o["computed"])(()=>(console.log(111,c.state.cartCount),c.state.cartCount));return{...Object(o["toRefs"])(a),goBack:n,goTo:l,handleAddCart:r,goToCart:d,count:s}},components:{sHeader:v["a"]}},h=(c("734b"),c("6b0d")),E=c.n(h);const w=E()(V,[["render",O]]);t["default"]=w},"734b":function(e,t,c){"use strict";c("4545")},"90db":function(e,t,c){"use strict";c("e70a")},e70a:function(e,t,c){}}]);
//# sourceMappingURL=product.0375e783.js.map