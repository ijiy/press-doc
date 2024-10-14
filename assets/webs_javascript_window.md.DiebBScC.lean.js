import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const y=JSON.parse('{"title":"JS 全局对象 【window, location, console】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/javascript/window.md","filePath":"webs/javascript/window.md","lastUpdated":1715407916000}'),e={name:"webs/javascript/window.md"};function o(c,s,r,t,F,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="js-全局对象-【window-location-console】" tabindex="-1">JS 全局对象 【window, location, console】 <a class="header-anchor" href="#js-全局对象-【window-location-console】" aria-label="Permalink to &quot;JS 全局对象 【window, location, console】&quot;">​</a></h1><h2 id="location" tabindex="-1">location <a class="header-anchor" href="#location" aria-label="Permalink to &quot;location&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 域名, 不包括协议</span></span>
<span class="line"><span style="color:#F8F8F2;">location.host</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 问号, 包括问号</span></span>
<span class="line"><span style="color:#F8F8F2;">location.search</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 刷新或打开新页面</span></span>
<span class="line"><span style="color:#F8F8F2;">location.</span><span style="color:#A6E22E;">reload</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 替换当前页面</span></span>
<span class="line"><span style="color:#F8F8F2;">location.</span><span style="color:#A6E22E;">replace</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 协议, &quot;http:&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">location.protocol</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="console" tabindex="-1">console <a class="header-anchor" href="#console" aria-label="Permalink to &quot;console&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;%c链接地址</span><span style="color:#AE81FF;">\\n</span><span style="color:#E6DB74;">https://xx.x.com&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;color: #ff0; font-size: 60px;&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">time</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;开始和结束计时的命名要一样&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">group</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;分组展示&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">info</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;和log相似&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">error</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;错误消息&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">warn</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;警告消息&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">groupEnd</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">timeEnd</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;开始和结束计时的命名要一样&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">table</span><span style="color:#F8F8F2;">([{a: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, b:</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">}, {c: </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">}]); </span><span style="color:#88846F;">// 以表格形式打印出结果, Chrome私有</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 在所属的&lt;script&gt;后面添加内容</span></span>
<span class="line"><span style="color:#F8F8F2;">document.</span><span style="color:#A6E22E;">writeln</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;&lt;pre&gt;保留换行符&lt;/pre&gt;&#39;</span><span style="color:#F8F8F2;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="window" tabindex="-1">window <a class="header-anchor" href="#window" aria-label="Permalink to &quot;window&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 获取窗口尺寸</span></span>
<span class="line"><span style="color:#F8F8F2;">window.innerWidth;</span></span>
<span class="line"><span style="color:#F8F8F2;">window.innerHeight;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 获取文档尺寸, 针对HTML5的文档声明</span></span>
<span class="line"><span style="color:#F8F8F2;">document.body.clientWidth;</span></span>
<span class="line"><span style="color:#F8F8F2;">document.body.clientHeight;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 获取元素高度</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> elem </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.</span><span style="color:#A6E22E;">querySelector</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;.elem&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// jg: 402</span></span>
<span class="line"><span style="color:#F8F8F2;">elem.clientHeight;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 更精准, jg: &#39;402.4px&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">window.</span><span style="color:#A6E22E;">getComputedStyle</span><span style="color:#F8F8F2;">(elem).height;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 文档scroll</span></span>
<span class="line"><span style="color:#F8F8F2;">document.body.scrollTop;</span></span>
<span class="line"><span style="color:#F8F8F2;">document.body.scrollLeft;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> scrollBox </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.</span><span style="color:#A6E22E;">querySelector</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;.scroll-box&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#88846F;">// 参考视口左上角 (x, y)</span></span>
<span class="line"><span style="color:#F8F8F2;">scrollBox.</span><span style="color:#A6E22E;">scrollTo</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 指定滚动速度</span></span>
<span class="line"><span style="color:#F8F8F2;">scrollBox.</span><span style="color:#A6E22E;">scrollTo</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">	top: </span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">	behavior: </span><span style="color:#E6DB74;">&#39;smooth&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 参考当前位置</span></span>
<span class="line"><span style="color:#F8F8F2;">scrollBox.</span><span style="color:#A6E22E;">scrollBy</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 获取相对窗口的位置</span></span>
<span class="line"><span style="color:#F8F8F2;">elem.</span><span style="color:#A6E22E;">getBoundingClientRect</span><span style="color:#F8F8F2;">().left;</span></span>
<span class="line"><span style="color:#F8F8F2;">elem.</span><span style="color:#A6E22E;">getBoundingClientRect</span><span style="color:#F8F8F2;">().top;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 获取相对文档的位置</span></span>
<span class="line"><span style="color:#F8F8F2;">elem.</span><span style="color:#A6E22E;">getBoundingClientRect</span><span style="color:#F8F8F2;">().left </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> document.body.scrollLeft;</span></span>
<span class="line"><span style="color:#F8F8F2;">elem.</span><span style="color:#A6E22E;">getBoundingClientRect</span><span style="color:#F8F8F2;">().top </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> document.body.scrollTop;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,7)]))}const u=n(e,[["render",o]]);export{y as __pageData,u as default};
