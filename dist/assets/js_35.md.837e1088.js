import{_ as e,c as t,a as p,w as r,b as a,r as i,o,e as n}from"./app.d22a91b4.js";const c="/dist/assets/js35-1.bc0b31a0.png",l="/dist/assets/js35-2.57fe9c85.png",m="/dist/assets/js35-3.6c789b07.gif",d="/dist/assets/js35-4.9c091fae.gif",_="/dist/assets/js35-4.baaf4847.png",g="/dist/assets/js35-5.f286c287.png",f="/dist/assets/js35-17.f3cab610.png",h="/dist/assets/js35-6.11c1e70a.png",u="/dist/assets/js35-7.29cacb38.png",v="/dist/assets/js35-8.707c799b.png",b="/dist/assets/js35-9.eb3d7f3a.png",j="/dist/assets/js35-10.8e260e10.png",k="/dist/assets/js35-11.30808304.png",P="/dist/assets/js35-12.e6da01ff.png",L="/dist/assets/js35-13.1aa371a8.png",T="/dist/assets/js35-14.517bdf7f.png",A="/dist/assets/js35-15.db25cebd.png",E="/dist/assets/js35-16.ed3662a5.png",$=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u600E\u4E48\u4ECE Performance \u4E2D\u770B\u51FA Event Loop \u6267\u884C\u7684\u6D41\u7A0B\u5462\uFF1F","slug":"\u600E\u4E48\u4ECE-performance-\u4E2D\u770B\u51FA-event-loop-\u6267\u884C\u7684\u6D41\u7A0B\u5462\uFF1F","link":"#\u600E\u4E48\u4ECE-performance-\u4E2D\u770B\u51FA-event-loop-\u6267\u884C\u7684\u6D41\u7A0B\u5462\uFF1F","children":[]},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u6709\u7684\u65F6\u5019\u4F1A\u6389\u5E27\u3001\u5361\u987F","slug":"\u4E3A\u4EC0\u4E48\u6709\u7684\u65F6\u5019\u4F1A\u6389\u5E27\u3001\u5361\u987F","link":"#\u4E3A\u4EC0\u4E48\u6709\u7684\u65F6\u5019\u4F1A\u6389\u5E27\u3001\u5361\u987F","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"js/35.md"}'),x={name:"js/35.md"},S=a('<h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u7F51\u9875\u52A0\u8F7D\u540E\uFF0C\u6D4F\u89C8\u5668\u4F1A\u89E3\u6790 html\u3001\u6267\u884C js\u3001\u6E32\u67D3 css\uFF0C\u8FD9\u4E9B\u5DE5\u4F5C\u90FD\u662F\u5728 Event Loop \u91CC\u5B8C\u6210\u7684\uFF0C\u7406\u89E3\u4E86 Event Loop \u5C31\u80FD\u7406\u89E3\u7F51\u9875\u7684\u8FD0\u884C\u6D41\u7A0B\u3002</p><p>\u4F46\u5F88\u591A\u4EBA\u5BF9 Event Loop \u7684\u7406\u89E3\u53EA\u662F\u505C\u7559\u5728\u6982\u5FF5\u5C42\u9762\uFF0C\u5E76\u6CA1\u770B\u8FC7\u771F\u5B9E\u7684 Event Loop \u662F\u600E\u6837\u7684\u3002</p><p>\u5176\u5B9E\u5728 Performance \u5DE5\u5177\u91CC\u5C31\u53EF\u4EE5\u770B\u5230\uFF0C\u4ECA\u5929\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u4E00\u4E0B\uFF1A</p><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u7F51\u9875\uFF0C\u6211\u8FD9\u91CC\u7528\u7684\u662F react \u6D4B\u8BD5 \u7528\u7684\u7F51\u9875</p><ul><li>\u70B9\u51FB Performance \u9762\u677F\u7684 reload\uFF0C\u5F55\u5236 3 s \u7684\u6570\u636E\uFF1A</li></ul><img src="'+c+'"><ul><li>\u5176\u4E2D Main \u8FD9\u90E8\u5206\u5C31\u662F\u7F51\u9875\u7684\u4E3B\u7EBF\u7A0B\uFF0C\u4E5F\u5C31\u662F\u6267\u884C Event Loop \u7684\u90E8\u5206\uFF1A</li></ul><img src="'+l+'"><p>\u8FD9\u5757\u533A\u57DF\u5305\u542B\u4E86\u6240\u6709 task \u6267\u884C\u7684\u6D41\u7A0B\uFF0C\u6BCF\u4E2A task \u7684\u8C03\u7528\u6808\uFF0C\u56E0\u4E3A\u50CF\u71C3\u70E7\u7684\u706B\u7130\uFF0C\u6240\u4EE5\u4E5F\u53EB\u505A\u706B\u7130\u56FE\u3002</p><p>\u9F20\u6807\u5212\u5230\u60F3\u770B\u7684\u90E8\u5206\uFF0C\u5411\u4E0B\u62D6\u52A8\uFF0C\u5C31\u53EF\u4EE5\u653E\u5927\u90A3\u4E2A\u533A\u57DF\uFF1A</p><img src="'+m+'"><p>\u5DE6\u53F3\u62D6\u52A8\u53EF\u4EE5\u8C03\u6574\u770B\u7684\u4F4D\u7F6E</p><img src="'+d+'"><p>\u5C55\u793A\u7684\u4FE1\u606F\u4E2D\u5F88\u591A\u79CD\u989C\u8272\uFF0C\u8FD9\u4E9B\u989C\u8272\u4EE3\u8868\u7740\u4E0D\u540C\u7684\u542B\u4E49\uFF1A</p><p>\u7070\u8272\u5C31\u4EE3\u8868\u5B8F\u4EFB\u52A1 task\uFF1A</p><img src="'+_+'"><p>\u84DD\u8272\u7684\u662F html \u7684 parse\uFF0C\u6A59\u8272\u7684\u662F\u6D4F\u89C8\u5668\u5185\u90E8\u7684 JS\uFF1A</p><img src="'+g+'"><p>\u7D2B\u8272\u662F\u6837\u5F0F\u7684 reflow\u3001repaint\uFF0C\u7EFF\u8272\u7684\u90E8\u5206\u5C31\u662F\u6E32\u67D3\uFF1A</p><img src="'+f+'"><p>\u5176\u4F59\u7684\u989C\u8272\u90FD\u662F\u7528\u6237 JS \u7684\u6267\u884C\u4E86\uFF0C\u90A3\u4E9B\u53EF\u4EE5\u4E0D\u7528\u533A\u5206\u3002</p><h2 id="\u600E\u4E48\u4ECE-performance-\u4E2D\u770B\u51FA-event-loop-\u6267\u884C\u7684\u6D41\u7A0B\u5462\uFF1F" tabindex="-1">\u600E\u4E48\u4ECE Performance \u4E2D\u770B\u51FA Event Loop \u6267\u884C\u7684\u6D41\u7A0B\u5462\uFF1F <a class="header-anchor" href="#\u600E\u4E48\u4ECE-performance-\u4E2D\u770B\u51FA-event-loop-\u6267\u884C\u7684\u6D41\u7A0B\u5462\uFF1F" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u4E00\u4E0B\uFF1A</p><p>\u4F60\u4F1A\u53D1\u73B0\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u5C31\u4F1A\u6709\u4E00\u4E2A\u8FD9\u79CD\u4EFB\u52A1\uFF1A</p><img src="'+h+'"><p>\u653E\u5927\u4E00\u4E0B\u662F\u8FD9\u6837\u7684</p><img src="'+u+'"><p>\u6267\u884C\u4E86 Animation Frame \u7684\u56DE\u8C03\uFF0C\u7136\u540E\u6267\u884C\u4E86\u56DE\u6D41\u91CD\u7ED8\uFF0C\u6700\u540E\u6267\u884C\u6E32\u67D3\u3002</p><p>\u8FD9\u79CD\u4EFB\u52A1\u6BCF\u9694 16.7 ms \u5C31\u4F1A\u6267\u884C\u4E00\u6B21</p><img src="'+v+'"><p>\u8FD9\u5C31\u662F\u7F51\u9875\u91CC\u600E\u4E48\u6267\u884C\u6E32\u67D3\u7684\u3002</p><p>\u6240\u4EE5\u8BF4 requestAnimationFrame \u7684\u56DE\u8C03\u662F\u5728\u6E32\u67D3\u524D\u6267\u884C\u7684\uFF0CrAF \u548C\u6E32\u67D3\u6784\u6210\u4E86\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u6709\u7684\u65F6\u5019\u4F1A\u6389\u5E27\u3001\u5361\u987F" tabindex="-1">\u4E3A\u4EC0\u4E48\u6709\u7684\u65F6\u5019\u4F1A\u6389\u5E27\u3001\u5361\u987F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6709\u7684\u65F6\u5019\u4F1A\u6389\u5E27\u3001\u5361\u987F" aria-hidden="true">#</a></h2><p>\u5C31\u662F\u56E0\u4E3A\u963B\u585E\u7684\u6E32\u67D3\u7684\u5B8F\u4EFB\u52A1\u7684\u6267\u884C\uFF1A</p><img src="'+b+'"><p>\u5728 Performance \u4E2D\u5BBD\u5EA6\u4EE3\u8868\u65F6\u95F4\uFF0C\u8D85\u8FC7 50ms \u5C31\u88AB\u8BA4\u4E3A\u662F Long Task\uFF0C\u4F1A\u88AB\u6807\u7EA2\uFF09</p><p>\u6211\u4EEC\u505A\u6027\u80FD\u5206\u6790\uFF0C\u5C31\u662F\u8981\u627E\u5230\u8FD9\u4E9B Long Task\uFF0C\u7136\u540E\u4F18\u5316\u6389\u5B83\u3002</p><p>\u90A3\u9664\u4E86 rAF \u548C\u6E32\u67D3\uFF0C\u8FD8\u6709\u54EA\u4E9B\u662F\u5B8F\u4EFB\u52A1\u5462\uFF1F</p><p>\u770B\u4E0B\u5206\u6790\u7684\u7ED3\u679C\u5C31\u77E5\u9053\u4E86\uFF1A</p><p>\u53EF\u4EE5\u770B\u5230 requestIdleCallback \u7684\u56DE\u8C03\u662F\u5B8F\u4EFB\u52A1</p><img src="'+j+'"><p>\u5783\u573E\u56DE\u6536 GC \u662F\u5B8F\u4EFB\u52A1</p><img src="'+k+'"><p>requestAnimationFrame \u7684\u56DE\u8C03\u662F\u5B8F\u4EFB\u52A1</p><img src="'+P+'"><p>html \u4E2D\u76F4\u63A5\u6267\u884C\u7684 script \u4E5F\u662F\u5B8F\u4EFB\u52A1</p><img src="'+L+'"><p>\u8FD9\u4E9B\u9700\u8981\u8BB0\u4E48\uFF1F</p><p>\u4E0D\u9700\u8981\uFF0C\u7528 Performance \u5DE5\u5177\u770B\u4E0B\u5C31\u77E5\u9053\u4E86\u3002</p><p>\u90A3\u5FAE\u4EFB\u52A1\u662F\u600E\u4E48\u6267\u884C\u7684\u5462\uFF1F</p><img src="'+T+'"><p>\u53EF\u4EE5\u770B\u5230 micro task \u53EA\u662F task \u7684\u4E00\u90E8\u5206\uFF0C\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u5C31\u4F1A\u6267\u884C\u6240\u6709\u7684\u5FAE\u4EFB\u52A1\u3002</p><p>\u8FD9\u5C31\u662F\u8FD9\u4E2A\u7F51\u9875\u7684 Event Loop \u6267\u884C\u8FC7\u7A0B\u3002</p><p>\u5F53\u4F60\u5BF9\u8FD9\u4E9B\u719F\u6089\u4E86\u4E4B\u540E\uFF0C\u770B\u5230\u4E0B\u9762\u7684\u706B\u7130\u56FE\uFF0C\u4F60\u5C31\u80FD\u5206\u6790\u51FA\u4E00\u4E9B\u4E1C\u897F\u6765\u4E86</p><img src="'+A+'"><p>\u4E2D\u95F4\u6BD4\u8F83\u5BBD\u7684\u6807\u7EA2\u7684\u5C31\u662F Long Task\uFF0C\u662F\u6027\u80FD\u4F18\u5316\u7684\u4E3B\u8981\u76EE\u6807\u3002</p><p>\u4E00\u4E9B\u6BD4\u8F83\u7A84\u7684\u5468\u671F\u6027\u7684 Task \u5C31\u662F requestAnimationFrame \u56DE\u8C03\u4EE5\u53CA reflow\u3001rapaint \u548C\u6E32\u67D3\u3002</p><p>\u6BD4\u8F83\u957F\u7684\u90A3\u4E2A\u8C03\u7528\u6808\u4E00\u822C\u662F\u9012\u5F52\uFF0C\u800C\u4E14\u9012\u5F52\u5C42\u6570\u7279\u522B\u591A\u3002</p><p>\u5F53\u4F60\u5C55\u5F00\u770B\u7684\u65F6\u5019\uFF0C\u5B83\u4E5F\u80FD\u5C55\u793A\u5B8C\u6574\u7684\u4EE3\u7801\u8FD0\u884C\u6D41\u7A0B\uFF1A</p><img src="'+E+'"><p>\u800C\u5982\u679C\u4F60\u6253\u65AD\u70B9\u8C03\u8BD5\uFF0C\u53EA\u80FD\u770B\u5230\u5176\u4E2D\u7684\u4E00\u4E2A\u8C03\u7528\u6808\uFF0C\u8FD9\u662F\u7528 Performance \u5DE5\u5177\u5206\u6790\u4EE3\u7801\u6D41\u7A0B\u6BD4 debugger \u65AD\u70B9\u8C03\u8BD5\u66F4\u597D\u7684\u5730\u65B9\u3002</p><p>\u5F53\u4F60\u9605\u8BFB\u6E90\u7801\u7684\u65F6\u5019\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 Performance \u770B\u6267\u884C\u6D41\u7A0B\u7684\u5168\u8C8C\uFF0C\u7136\u540E\u518D debugger \u67D0\u4E9B\u5177\u4F53\u7684\u6D41\u7A0B\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>Performance \u5DE5\u5177\u80FD\u591F\u770B\u5230\u7F51\u9875\u7684 Event Loop \u662F\u600E\u4E48\u8FD0\u884C\u7684\uFF0C\u4E0D\u540C\u7684\u989C\u8272\u4EE3\u8868\u4E0D\u540C\u7684\u542B\u4E49\uFF1A</p><ul><li>\u7070\u8272\uFF1Atask</li><li>\u6A59\u8272\uFF1A\u6D4F\u89C8\u5668\u5185\u90E8\u7684 JS</li><li>\u84DD\u8272\uFF1Ahtml parse</li><li>\u7D2B\u8272\uFF1Areflow\u3001repaint</li><li>\u7EFF\u8272\uFF1A\u6E32\u67D3</li><li>\u5176\u4F59\u7684\u989C\u8272\u90FD\u662F\u7528\u6237\u81EA\u5DF1\u7684 JS\u3002</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5BBD\u5EA6\u4EE3\u8868\u4E86\u6267\u884C\u7684\u65F6\u95F4\uFF0C\u8D85\u8FC7 50ms \u5C31\u88AB\u4EFB\u52A1\u662F\u957F\u4EFB\u52A1\uFF0C\u9700\u8981\u4F18\u5316\u3002</p></div><p>\u957F\u5EA6\u4EE3\u8868\u4E86\u8C03\u7528\u6808\u6DF1\u5EA6\uFF0C\u4E00\u822C\u7279\u522B\u957F\u7684\u90FD\u662F\u6709\u9012\u5F52\u5728\u3002</p><p>\u7528 Performance \u5DE5\u5177\u53EF\u4EE5\u5206\u6790\u51FA\u5F88\u591A\u4E1C\u897F\uFF1A</p><ul><li>rAF \u56DE\u8C03\u548C reflow\u3001repaint \u8FD8\u6709\u6E32\u67D3\u6784\u6210\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u6BCF 16.7 ms \u6267\u884C\u4E00\u6B21\u3002</li><li>rAF \u56DE\u8C03\u3001rIC \u56DE\u8C03\u3001GC\u3001html \u4E2D\u7684 script \u7B49\u90FD\u662F\u5B8F\u4EFB\u52A1</li><li>\u5728\u4EFB\u52A1\u6267\u884C\u5B8C\u540E\uFF0C\u6D4F\u89C8\u5668\u4F1A\u6267\u884C\u6240\u6709\u5FAE\u4EFB\u52A1\uFF0C\u4E5F\u5C31\u662F runAllMicroTasks \u90E8\u5206 P- erformance \u53EF\u4EE5\u770B\u5230\u4EE3\u7801\u6267\u884C\u5168\u8C8C\uFF0C\u800C\u65AD\u70B9\u8C03\u8BD5\u7684\u8C03\u7528\u6808\u53EA\u80FD\u770B\u5230\u67D0\u4E00\u6761\u6D41\u7A0B\u3002\u6240\u4EE5\u8C03\u8BD5\u4EE3\u7801\u7684\u65F6\u5019\u53EF\u4EE5 Performance \u548C Debugger \u7ED3\u5408\u6765\u770B\u3002</li></ul><p>\u603B\u4E4B\uFF0C\u4F1A\u7528 Performance \u5DE5\u5177\uFF0C\u4F60\u5C31\u80FD\u6DF1\u5165\u7406\u89E3 Event Loop\uFF0C\u7406\u6E05\u7F51\u9875\u6267\u884C\u7684\u5168\u6D41\u7A0B</p>',71);function C(F,w,I,J,N,V){const s=i("font");return o(),t("div",null,[p(s,{style:{"font-size":"36px"}},{default:r(()=>[n("\u4ECEperformance\u6DF1\u5165\u7406\u89E3eventloop")]),_:1}),S])}const D=e(x,[["render",C]]);export{$ as __pageData,D as default};
