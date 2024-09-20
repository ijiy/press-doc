import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const m=JSON.parse('{"title":"JS MutationObserver 【元素内容侦听器】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/javascript/observer-mutation.md","filePath":"webs/javascript/observer-mutation.md","lastUpdated":1721206549000}'),p={name:"webs/javascript/observer-mutation.md"},e=l(`<h1 id="js-mutationobserver-【元素内容侦听器】" tabindex="-1">JS MutationObserver 【元素内容侦听器】 <a class="header-anchor" href="#js-mutationobserver-【元素内容侦听器】" aria-label="Permalink to &quot;JS MutationObserver 【元素内容侦听器】&quot;">​</a></h1><ul><li><p>侦听元素的内容变化, 如文字</p></li><li><p>示例</p></li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;!</span><span style="color:#F92672;">DOCTYPE</span><span style="color:#A6E22E;"> html</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">html</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">meta</span><span style="color:#A6E22E;"> charset</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;utf-8&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">		body</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			margin</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F92672;">		div</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">flex</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">span</span><span style="color:#A6E22E;"> id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;id_span&quot;</span><span style="color:#F8F8F2;">&gt;a&lt;/</span><span style="color:#F92672;">span</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		const</span><span style="color:#F8F8F2;"> obs </span><span style="color:#F92672;">=</span><span style="color:#F92672;"> new</span><span style="color:#A6E22E;"> MutationObserver</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;内容变化 =&gt; &#39;</span><span style="color:#F8F8F2;">, id_span.innerHTML);</span></span>
<span class="line"><span style="color:#F8F8F2;">		});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		obs.</span><span style="color:#A6E22E;">observe</span><span style="color:#F8F8F2;">(id_span, {</span></span>
<span class="line"><span style="color:#88846F;">			// 侦听输入修改文字需要</span></span>
<span class="line"><span style="color:#F8F8F2;">			childList: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">			// 侦听DOM修改文字需要 (如打开控制台修改文字)</span></span>
<span class="line"><span style="color:#F8F8F2;">			characterData: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">			// 侦听DOM修改文字需要</span></span>
<span class="line"><span style="color:#F8F8F2;">			subtree: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">		setTimeout</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			id_span.innerHTML </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &#39;ab&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}, </span><span style="color:#AE81FF;">2e3</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">		setTimeout</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			id_span.innerHTML </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &#39;abc&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}, </span><span style="color:#AE81FF;">4e3</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">		setTimeout</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">			// 此处不会触发侦听回调 (侦听是异步的, 在内容变化后再触发侦听回调)</span></span>
<span class="line"><span style="color:#F8F8F2;">			id_span.innerHTML </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &#39;abcd&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">			// 停止侦听</span></span>
<span class="line"><span style="color:#F8F8F2;">			obs.</span><span style="color:#A6E22E;">disconnect</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">		}, </span><span style="color:#AE81FF;">6e3</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">html</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div>`,3),t=[e];function o(r,c,F,i,y,b){return a(),n("div",null,t)}const d=s(p,[["render",o]]);export{m as __pageData,d as default};
