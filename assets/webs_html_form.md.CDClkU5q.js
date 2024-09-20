import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const u=JSON.parse('{"title":"HTML 表单 【form】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/html/form.md","filePath":"webs/html/form.md","lastUpdated":1694342534000}'),p={name:"webs/html/form.md"},o=l(`<h1 id="html-表单-【form】" tabindex="-1">HTML 表单 【form】 <a class="header-anchor" href="#html-表单-【form】" aria-label="Permalink to &quot;HTML 表单 【form】&quot;">​</a></h1><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;!</span><span style="color:#F92672;">DOCTYPE</span><span style="color:#A6E22E;"> html</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">html</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;en&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">meta</span><span style="color:#A6E22E;"> charset</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;UTF-8&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;Document&lt;/</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">form</span><span style="color:#A6E22E;"> onsubmit</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#A6E22E;">submitTest</span><span style="color:#E6DB74;">(</span><span style="color:#F8F8F2;">event</span><span style="color:#E6DB74;">, </span><span style="color:#FD971F;">this</span><span style="color:#E6DB74;">)&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">input</span><span style="color:#A6E22E;"> type</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;text&quot;</span><span style="color:#A6E22E;"> name</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;acc&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">input</span><span style="color:#A6E22E;"> type</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;password&quot;</span><span style="color:#A6E22E;"> name</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;pwd&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">input</span><span style="color:#A6E22E;"> type</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;submit&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">form</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">script</span><span style="color:#A6E22E;"> src</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		$</span><span style="color:#F8F8F2;">.prototype.</span><span style="color:#A6E22E;">serializeObject</span><span style="color:#F92672;"> =</span><span style="color:#66D9EF;font-style:italic;"> function</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			var</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">=</span><span style="color:#FD971F;"> this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">serializeArray</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">				b </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">			for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">var</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> a.length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">				b[a[i].name] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> a[i].value;</span></span>
<span class="line"><span style="color:#F8F8F2;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">			return</span><span style="color:#F8F8F2;"> b;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		function</span><span style="color:#A6E22E;"> submitTest</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">event</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">_this</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">			event.</span><span style="color:#A6E22E;">preventDefault</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">			// 收集数据, 解码jQuery编码的序列化字符串</span></span>
<span class="line"><span style="color:#F8F8F2;">			console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#A6E22E;">decodeURIComponent</span><span style="color:#F8F8F2;">(</span><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(_this).</span><span style="color:#A6E22E;">serialize</span><span style="color:#F8F8F2;">()));</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">			// 提交前可能要编辑数据, 转成对象</span></span>
<span class="line"><span style="color:#F8F8F2;">			console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(_this).</span><span style="color:#A6E22E;">serializeObject</span><span style="color:#F8F8F2;">());</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">html</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>`,2),t=[o];function e(r,c,F,y,i,b){return a(),n("div",null,t)}const E=s(p,[["render",e]]);export{u as __pageData,E as default};
