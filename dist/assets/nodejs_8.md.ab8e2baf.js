import{_ as n,c as a,a as l,w as p,b as o,r as e,o as t,e as c}from"./app.20a10a6b.js";const r="/dist/assets/nodejs8-1.d99f822b.png",i="/dist/assets/nodejs8-2.6cc028af.png",y="/dist/assets/nodejs8-3.dcffd212.png",k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4E8C\u3001\u6D41\u7A0B","slug":"\u4E8C\u3001\u6D41\u7A0B","link":"#\u4E8C\u3001\u6D41\u7A0B","children":[]},{"level":2,"title":"\u4E09\u3001\u9898\u76EE","slug":"\u4E09\u3001\u9898\u76EE","link":"#\u4E09\u3001\u9898\u76EE","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"nodejs/8.md"}'),F={name:"nodejs/8.md"},D=o('<h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u5728\u6D4F\u89C8\u5668\u4E8B\u4EF6\u5FAA\u73AF (opens new window)\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230javascript\u5728\u6D4F\u89C8\u5668\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF0C\u5176\u662F\u6839\u636EHTML5\u5B9A\u4E49\u7684\u89C4\u8303\u6765\u5B9E\u73B0</p><p>\u800C\u5728NodeJS\u4E2D\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u662F\u57FA\u4E8Elibuv\u5B9E\u73B0\uFF0Clibuv\u662F\u4E00\u4E2A\u591A\u5E73\u53F0\u7684\u4E13\u6CE8\u4E8E\u5F02\u6B65IO\u7684\u5E93\uFF0C\u5982\u4E0B\u56FE\u6700\u53F3\u4FA7\u6240\u793A\uFF1A</p><img src="'+r+'"><p>\u4E0A\u56FEEVENT_QUEUE \u7ED9\u4EBA\u770B\u8D77\u6765\u53EA\u6709\u4E00\u4E2A\u961F\u5217\uFF0C\u4F46EventLoop\u5B58\u57286\u4E2A\u9636\u6BB5\uFF0C\u6BCF\u4E2A\u9636\u6BB5\u90FD\u6709\u5BF9\u5E94\u7684\u4E00\u4E2A\u5148\u8FDB\u5148\u51FA\u7684\u56DE\u8C03\u961F\u5217</p><h2 id="\u4E8C\u3001\u6D41\u7A0B" tabindex="-1">\u4E8C\u3001\u6D41\u7A0B <a class="header-anchor" href="#\u4E8C\u3001\u6D41\u7A0B" aria-hidden="true">#</a></h2><p>\u4E0A\u8282\u8BB2\u5230\u4E8B\u4EF6\u5FAA\u73AF\u5206\u6210\u4E86\u516D\u4E2A\u9636\u6BB5\uFF0C\u5BF9\u5E94\u5982\u4E0B\uFF1A</p><img src="'+i+'"><ul><li>timers\u9636\u6BB5\uFF1A\u8FD9\u4E2A\u9636\u6BB5\u6267\u884Ctimer\uFF08setTimeout\u3001setInterval\uFF09\u7684\u56DE\u8C03</li><li>\u5B9A\u65F6\u5668\u68C0\u6D4B\u9636\u6BB5(timers)\uFF1A\u672C\u9636\u6BB5\u6267\u884C timer \u7684\u56DE\u8C03\uFF0C\u5373 setTimeout\u3001setInterval \u91CC\u9762\u7684\u56DE\u8C03\u51FD\u6570</li><li>I/O\u4E8B\u4EF6\u56DE\u8C03\u9636\u6BB5(I/O callbacks)\uFF1A\u6267\u884C\u5EF6\u8FDF\u5230\u4E0B\u4E00\u4E2A\u5FAA\u73AF\u8FED\u4EE3\u7684 I/O \u56DE\u8C03\uFF0C\u5373\u4E0A\u4E00\u8F6E\u5FAA\u73AF\u4E2D\u672A\u88AB\u6267\u884C\u7684\u4E00\u4E9BI/O\u56DE\u8C03</li><li>\u95F2\u7F6E\u9636\u6BB5(idle, prepare)\uFF1A\u4EC5\u7CFB\u7EDF\u5185\u90E8\u4F7F\u7528</li><li>\u8F6E\u8BE2\u9636\u6BB5(poll)\uFF1A\u68C0\u7D22\u65B0\u7684 I/O \u4E8B\u4EF6;\u6267\u884C\u4E0E I/O \u76F8\u5173\u7684\u56DE\u8C03\uFF08\u51E0\u4E4E\u6240\u6709\u60C5\u51B5\u4E0B\uFF0C\u9664\u4E86\u5173\u95ED\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u90A3\u4E9B\u7531\u8BA1\u65F6\u5668\u548C setImmediate() \u8C03\u5EA6\u7684\u4E4B\u5916\uFF09\uFF0C\u5176\u4F59\u60C5\u51B5 node \u5C06\u5728\u9002\u5F53\u7684\u65F6\u5019\u5728\u6B64\u963B\u585E</li><li>\u68C0\u67E5\u9636\u6BB5(check)\uFF1AsetImmediate() \u56DE\u8C03\u51FD\u6570\u5728\u8FD9\u91CC\u6267\u884C</li><li>\u5173\u95ED\u4E8B\u4EF6\u56DE\u8C03\u9636\u6BB5(close callback)\uFF1A\u4E00\u4E9B\u5173\u95ED\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5982\uFF1Asocket.on(&#39;close&#39;, ...)</li><li>\u6BCF\u4E2A\u9636\u6BB5\u5BF9\u5E94\u4E00\u4E2A\u961F\u5217\uFF0C\u5F53\u4E8B\u4EF6\u5FAA\u73AF\u8FDB\u5165\u67D0\u4E2A\u9636\u6BB5\u65F6, \u5C06\u4F1A\u5728\u8BE5\u9636\u6BB5\u5185\u6267\u884C\u56DE\u8C03\uFF0C\u76F4\u5230\u961F\u5217\u8017\u5C3D\u6216\u8005\u56DE\u8C03\u7684\u6700\u5927\u6570\u91CF\u5DF2\u6267\u884C, \u90A3\u4E48\u5C06\u8FDB\u5165\u4E0B\u4E00\u4E2A\u5904\u7406\u9636\u6BB5</li></ul><p>\u9664\u4E86\u4E0A\u8FF06\u4E2A\u9636\u6BB5\uFF0C\u8FD8\u5B58\u5728process.nextTick\uFF0C\u5176\u4E0D\u5C5E\u4E8E\u4E8B\u4EF6\u5FAA\u73AF\u7684\u4EFB\u4F55\u4E00\u4E2A\u9636\u6BB5\uFF0C\u5B83\u5C5E\u4E8E\u8BE5\u9636\u6BB5\u4E0E\u4E0B\u9636\u6BB5\u4E4B\u95F4\u7684\u8FC7\u6E21, \u5373\u672C\u9636\u6BB5\u6267\u884C\u7ED3\u675F, \u8FDB\u5165\u4E0B\u4E00\u4E2A\u9636\u6BB5\u524D, \u6240\u8981\u6267\u884C\u7684\u56DE\u8C03\uFF0C\u7C7B\u4F3C\u63D2\u961F</p><p>\u6D41\u7A0B\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><img src="'+y+`"><p>\u5728Node\u4E2D\uFF0C\u540C\u6837\u5B58\u5728\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\uFF0C\u4E0E\u6D4F\u89C8\u5668\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF\u76F8\u4F3C</p><p>\u5FAE\u4EFB\u52A1\u5BF9\u5E94\u6709\uFF1A</p><ul><li>next tick queue\uFF1Aprocess.nextTick</li><li>other queue\uFF1APromise\u7684then\u56DE\u8C03\u3001queueMicrotask</li></ul><p>\u5B8F\u4EFB\u52A1\u5BF9\u5E94\u6709\uFF1A</p><ul><li>timer queue\uFF1AsetTimeout\u3001setInterval</li><li>poll queue\uFF1AIO\u4E8B\u4EF6</li><li>check queue\uFF1AsetImmediate</li><li>close queue\uFF1Aclose\u4E8B\u4EF6</li></ul><p>\u5176\u6267\u884C\u987A\u5E8F\u4E3A\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>next tick microtask queue</p><p>other microtask queue</p><p>timer queue</p><p>poll queue</p><p>check queue</p><p>close queue</p></div><h2 id="\u4E09\u3001\u9898\u76EE" tabindex="-1">\u4E09\u3001\u9898\u76EE <a class="header-anchor" href="#\u4E09\u3001\u9898\u76EE" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4E0A\u9762\u7684\u5B66\u4E60\uFF0C\u4E0B\u9762\u5F00\u59CB\u770B\u770B\u9898\u76EE</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">async1</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async1 start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">async2</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async1 end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">async2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setTimeout0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setTimeout2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setImmediate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">nextTick</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nextTick1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">async1</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">nextTick</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nextTick2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5206\u6790\u8FC7\u7A0B\uFF1A</p><ul><li><p>\u5148\u627E\u5230\u540C\u6B65\u4EFB\u52A1\uFF0C\u8F93\u51FAscript start</p></li><li><p>\u9047\u5230\u7B2C\u4E00\u4E2A setTimeout\uFF0C\u5C06\u91CC\u9762\u7684\u56DE\u8C03\u51FD\u6570\u653E\u5230 timer \u961F\u5217\u4E2D</p></li><li><p>\u9047\u5230\u7B2C\u4E8C\u4E2A setTimeout\uFF0C300ms\u540E\u5C06\u91CC\u9762\u7684\u56DE\u8C03\u51FD\u6570\u653E\u5230 timer \u961F\u5217\u4E2D</p></li><li><p>\u9047\u5230\u7B2C\u4E00\u4E2AsetImmediate\uFF0C\u5C06\u91CC\u9762\u7684\u56DE\u8C03\u51FD\u6570\u653E\u5230 check \u961F\u5217\u4E2D</p></li><li><p>\u9047\u5230\u7B2C\u4E00\u4E2A nextTick\uFF0C\u5C06\u5176\u91CC\u9762\u7684\u56DE\u8C03\u51FD\u6570\u653E\u5230\u672C\u8F6E\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\u6267\u884C</p></li><li><p>\u6267\u884C async1\u51FD\u6570\uFF0C\u8F93\u51FA async1 start</p></li><li><p>\u6267\u884C async2 \u51FD\u6570\uFF0C\u8F93\u51FA async2\uFF0Casync2 \u540E\u9762\u7684\u8F93\u51FA async1 end\u8FDB\u5165\u5FAE\u4EFB\u52A1\uFF0C\u7B49\u5F85\u4E0B\u4E00\u8F6E\u7684\u4E8B\u4EF6\u5FAA\u73AF</p></li><li><p>\u9047\u5230\u7B2C\u4E8C\u4E2A\uFF0C\u5C06\u5176\u91CC\u9762\u7684\u56DE\u8C03\u51FD\u6570\u653E\u5230\u672C\u8F6E\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\u6267\u884C</p></li><li><p>\u9047\u5230 new Promise\uFF0C\u6267\u884C\u91CC\u9762\u7684\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF0C\u8F93\u51FA promise1\u3001promise2</p></li><li><p>then\u91CC\u9762\u7684\u56DE\u8C03\u51FD\u6570\u8FDB\u5165\u5FAE\u4EFB\u52A1\u961F\u5217</p></li><li><p>\u9047\u5230\u540C\u6B65\u4EFB\u52A1\uFF0C\u8F93\u51FA script end</p></li><li><p>\u6267\u884C\u4E0B\u4E00\u8F6E\u56DE\u5230\u51FD\u6570\uFF0C\u5148\u4F9D\u6B21\u8F93\u51FA nextTick \u7684\u51FD\u6570\uFF0C\u5206\u522B\u662F nextTick1\u3001nextTick2</p></li><li><p>\u7136\u540E\u6267\u884C\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u4F9D\u6B21\u8F93\u51FA async1 end\u3001promise3</p></li><li><p>\u6267\u884Ctimer \u961F\u5217\uFF0C\u4F9D\u6B21\u8F93\u51FA setTimeout0</p></li><li><p>\u63A5\u7740\u6267\u884C check \u961F\u5217\uFF0C\u4F9D\u6B21\u8F93\u51FA setImmediate</p></li><li><p>300ms\u540E\uFF0Ctimer \u961F\u5217\u5B58\u5728\u4EFB\u52A1\uFF0C\u6267\u884C\u8F93\u51FA setTimeout2</p></li></ul><p>\u6267\u884C\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>script start</p><p>async1 start</p><p>async2</p><p>promise1</p><p>promise2</p><p>script end</p><p>nextTick1</p><p>nextTick2</p><p>async1 end</p><p>promise3</p><p>setTimeout0</p><p>setImmediate</p><p>setTimeout2</p></div><p>\u6700\u540E\u6709\u4E00\u9053\u662F\u5173\u4E8EsetTimeout\u4E0EsetImmediate\u7684\u8F93\u51FA\u987A\u5E8F</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">setTimeout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">setImmediate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8F93\u51FA\u60C5\u51B5\u5982\u4E0B\uFF1A</p><p>\u60C5\u51B5\u4E00\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">setTimeout</span></span>
<span class="line"><span style="color:#A6ACCD;">setImmediate</span></span>
<span class="line"></span></code></pre></div><p>\u60C5\u51B5\u4E8C\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">setImmediate</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout</span></span>
<span class="line"></span></code></pre></div><p>\u5206\u6790\u4E0B\u6D41\u7A0B\uFF1A</p><ul><li>\u5916\u5C42\u540C\u6B65\u4EE3\u7801\u4E00\u6B21\u6027\u5168\u90E8\u6267\u884C\u5B8C\uFF0C\u9047\u5230\u5F02\u6B65API\u5C31\u585E\u5230\u5BF9\u5E94\u7684\u9636\u6BB5</li><li>\u9047\u5230setTimeout\uFF0C\u867D\u7136\u8BBE\u7F6E\u7684\u662F0\u6BEB\u79D2\u89E6\u53D1\uFF0C\u4F46\u5B9E\u9645\u4E0A\u4F1A\u88AB\u5F3A\u5236\u6539\u62101ms\uFF0C\u65F6\u95F4\u5230\u4E86\u7136\u540E\u585E\u5165times\u9636\u6BB5</li><li>\u9047\u5230setImmediate\u585E\u5165check\u9636\u6BB5</li><li>\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\uFF0C\u8FDB\u5165Event Loop</li><li>\u5148\u8FDB\u5165times\u9636\u6BB5\uFF0C\u68C0\u67E5\u5F53\u524D\u65F6\u95F4\u8FC7\u53BB\u4E861\u6BEB\u79D2\u6CA1\u6709\uFF0C\u5982\u679C\u8FC7\u4E861\u6BEB\u79D2\uFF0C\u6EE1\u8DB3setTimeout\u6761\u4EF6\uFF0C\u6267\u884C\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u8FC71\u6BEB\u79D2\uFF0C\u8DF3\u8FC7</li><li>\u8DF3\u8FC7\u7A7A\u7684\u9636\u6BB5\uFF0C\u8FDB\u5165check\u9636\u6BB5\uFF0C\u6267\u884CsetImmediate\u56DE\u8C03</li><li>\u8FD9\u91CC\u7684\u5173\u952E\u5728\u4E8E\u8FD91ms\uFF0C\u5982\u679C\u540C\u6B65\u4EE3\u7801\u6267\u884C\u65F6\u95F4\u8F83\u957F\uFF0C\u8FDB\u5165Event Loop\u7684\u65F6\u50191\u6BEB\u79D2\u5DF2\u7ECF\u8FC7\u4E86\uFF0CsetTimeout\u5148\u6267\u884C\uFF0C\u5982\u679C1\u6BEB\u79D2\u8FD8\u6CA1\u5230\uFF0C\u5C31\u5148\u6267\u884C\u4E86setImmediate</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://segmentfault.com/a/1190000012258592" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000012258592</a></li><li><a href="https://juejin.cn/post/6844904100195205133" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904100195205133</a></li></ul>`,37);function A(C,m,u,d,h,g){const s=e("font");return t(),a("div",null,[l(s,{style:{"font-size":"36px"}},{default:p(()=>[c("NodeJS\u7684\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236")]),_:1}),D])}const _=n(F,[["render",A]]);export{k as __pageData,_ as default};
