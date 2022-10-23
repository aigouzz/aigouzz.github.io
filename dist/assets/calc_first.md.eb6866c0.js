import{_ as s,c as n,o as a,b as l}from"./app.6f0f475c.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u7B97\u6CD51-3","slug":"\u7B97\u6CD51-3","link":"#\u7B97\u6CD51-3","children":[]}],"relativePath":"calc/first.md"}'),e={name:"calc/first.md"},p=l(`<h3 id="\u7B97\u6CD51-3" tabindex="-1">\u7B97\u6CD51-3 <a class="header-anchor" href="#\u7B97\u6CD51-3" aria-hidden="true">#</a></h3><h4 id="\u7B2C\u4E00\u9898\uFF1A\u4E24\u6570\u4E4B\u548C" tabindex="-1">\u7B2C\u4E00\u9898\uFF1A\u4E24\u6570\u4E4B\u548C <a class="header-anchor" href="#\u7B2C\u4E00\u9898\uFF1A\u4E24\u6570\u4E4B\u548C" aria-hidden="true">#</a></h4><ul><li>\u63CF\u8FF0 \u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \u548C\u4E00\u4E2A\u76EE\u6807\u503C target\uFF0C\u8BF7\u4F60\u5728\u8BE5\u6570\u7EC4\u4E2D\u627E\u51FA\u548C\u4E3A\u76EE\u6807\u503C\u7684\u90A3\u4E24\u4E2A\u6574\u6570\uFF0C\u5E76\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807\u3002</li><li>\u96BE\u5EA6 \u7B80\u5355</li><li>\u5B9E\u4F8B\uFF1A</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">nums = [2, 7, 11, 155],target = 9</span></span>
<span class="line"><span style="color:#A6ACCD;">\u56E0\u4E3Anums[0] + nums[1] = 2 + 7 = 9</span></span>
<span class="line"><span style="color:#A6ACCD;">return [0, 1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u89E3\u51B3\u65B9\u6CD5<br> \u66B4\u529B\u7834\u89E3\u6CD5\uFF1A</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function sumPlus(arr, target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  for(let i=0;i &lt; arr.length;i ++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let res = target - arr[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">      for(let j = i + 1;j &lt; arr.length;j ++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if(arr[j] == res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              return [i, j];</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return [];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53D6\u5DE7\u6CD5\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function sumPlus(arr, target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  for(let i=0;i &lt; arr.length;i ++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let res = target - arr[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(arr.includes(res)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return [i, arr.indexOf(res)];</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  return [];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u7B2C\u4E8C\u9898\uFF1A\u56DE\u6587\u6570" tabindex="-1">\u7B2C\u4E8C\u9898\uFF1A\u56DE\u6587\u6570 <a class="header-anchor" href="#\u7B2C\u4E8C\u9898\uFF1A\u56DE\u6587\u6570" aria-hidden="true">#</a></h4><ul><li>\u63CF\u8FF0<br> \u5224\u65AD\u4E00\u4E2A\u6574\u6570\u662F\u5426\u662F\u56DE\u6587\u6570\u3002\u56DE\u6587\u6570\u662F\u6307\u6B63\u5E8F\uFF08\u4ECE\u5DE6\u5411\u53F3\uFF09\u548C\u5012\u5E8F\uFF08\u4ECE\u53F3\u5411\u5DE6\uFF09\u8BFB\u90FD\u662F\u4E00\u6837\u7684\u6574\u6570</li><li>\u5B9E\u4F8B<br> 12321 true 123431 false -12321 false</li><li>\u89E3\u51B3\u65B9\u6CD5</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function isPalintrome(num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let arr = num.toString().split(&#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  let arrTo = num.toString().split(&#39;&#39;).reverse();</span></span>
<span class="line"><span style="color:#A6ACCD;">  let res = arr.every((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return item == arrTo[index];</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  return res;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u7B2C\u4E09\u9898\uFF1A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32" tabindex="-1">\u7B2C\u4E09\u9898\uFF1A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32 <a class="header-anchor" href="#\u7B2C\u4E09\u9898\uFF1A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32" aria-hidden="true">#</a></h4><ul><li>\u63CF\u8FF0<br> \u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u627E\u51FA\u5176\u4E2D\u4E0D\u542B\u6709\u91CD\u590D\u5B57\u7B26\u7684 \u6700\u957F\u5B50\u4E32 \u548C \u957F\u5EA6</li><li>\u5B9E\u4F8B <blockquote><p>\u8F93\u5165: &quot;abcabcbb&quot;<br> \u8F93\u51FA: 3<br> \u89E3\u91CA: \u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;abc&quot;\uFF0C\u5176\u957F\u5EA6\u4E3A 3\u3002<br> \u8F93\u5165: &quot;pwwkew&quot;<br> \u8F93\u51FA: 3<br> \u89E3\u91CA: \u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;wke&quot;\uFF0C\u5176\u957F\u5EA6\u4E3A 3\u3002 \u8BF7\u6CE8\u610F\uFF0C\u4F60\u7684\u7B54\u6848\u5FC5\u987B\u662F \u5B50\u4E32 \u7684\u957F\u5EA6\uFF0C&quot;pwke&quot; \u662F\u4E00\u4E2A\u5B50\u5E8F\u5217\uFF0C\u4E0D\u662F\u5B50\u4E32</p></blockquote><ul><li>\u89E3\u51B3\u65B9\u6CD5</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function findMaxSon(str) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let cached = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul>`,13),t=[p];function r(o,c,i,C,A,u){return a(),n("div",null,t)}const D=s(e,[["render",r]]);export{y as __pageData,D as default};
