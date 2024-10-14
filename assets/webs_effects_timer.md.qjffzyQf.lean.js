import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"倒计时 【JS】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/effects/timer.md","filePath":"webs/effects/timer.md","lastUpdated":1694342534000}'),e={name:"webs/effects/timer.md"};function o(t,s,r,c,F,y){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="倒计时-【js】" tabindex="-1">倒计时 【JS】 <a class="header-anchor" href="#倒计时-【js】" aria-label="Permalink to &quot;倒计时 【JS】&quot;">​</a></h1><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#88846F;">/**</span></span>
<span class="line"><span style="color:#88846F;"> *</span></span>
<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#F8F8F2;"> date</span><span style="color:#88846F;"> 倒计时时间对象</span></span>
<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#F8F8F2;"> callback</span><span style="color:#88846F;"> 倒计时结束的回调</span></span>
<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@example</span></span>
<span class="line"><span style="color:#88846F;">	qpTime({</span></span>
<span class="line"><span style="color:#88846F;">		s: 开始 (时间戳 | Date)</span></span>
<span class="line"><span style="color:#88846F;">		e: 结束,</span></span>
<span class="line"><span style="color:#88846F;">		m: 毫秒</span></span>
<span class="line"><span style="color:#88846F;">	}, res =&gt; {</span></span>
<span class="line"><span style="color:#88846F;">		res = {</span></span>
<span class="line"><span style="color:#88846F;">			d: 天,</span></span>
<span class="line"><span style="color:#88846F;">			h: 时,</span></span>
<span class="line"><span style="color:#88846F;">			m: 分,</span></span>
<span class="line"><span style="color:#88846F;">			s: 秒,</span></span>
<span class="line"><span style="color:#88846F;">			i: 毫秒,</span></span>
<span class="line"><span style="color:#88846F;">			t: 时间戳</span></span>
<span class="line"><span style="color:#88846F;">		}</span></span>
<span class="line"><span style="color:#88846F;">	});</span></span>
<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@return</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">{number}</span><span style="color:#88846F;"> 返回计时器对象</span></span>
<span class="line"><span style="color:#88846F;"> */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#A6E22E;"> qpTime</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">date</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">callback</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	var</span><span style="color:#F8F8F2;"> t </span><span style="color:#F92672;">=</span><span style="color:#FD971F;"> this</span><span style="color:#F8F8F2;">.t,</span></span>
<span class="line"><span style="color:#F8F8F2;">		n </span><span style="color:#F92672;">=</span><span style="color:#F92672;"> new</span><span style="color:#A6E22E;"> Date</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">		k </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> date.m </span><span style="color:#F92672;">?</span><span style="color:#AE81FF;"> 100</span><span style="color:#F92672;"> :</span><span style="color:#AE81FF;"> 1e3</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		l </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> date.e </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> date.s;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	t </span><span style="color:#F92672;">=</span><span style="color:#A6E22E;"> setInterval</span><span style="color:#F8F8F2;">(z, k);</span></span>
<span class="line"><span style="color:#A6E22E;">	z</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	function</span><span style="color:#A6E22E;"> z</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		var</span><span style="color:#F8F8F2;"> c </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> l </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">new</span><span style="color:#F8F8F2;"> Date </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> n),</span></span>
<span class="line"><span style="color:#F8F8F2;">			d </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">				d: </span><span style="color:#E6DB74;">&#39;00&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				h: </span><span style="color:#E6DB74;">&#39;00&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				m: </span><span style="color:#E6DB74;">&#39;00&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				s: </span><span style="color:#E6DB74;">&#39;00&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				i: </span><span style="color:#E6DB74;">&#39;00&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				t: </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">			};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AE81FF;">		0</span><span style="color:#F92672;"> &lt;</span><span style="color:#F8F8F2;"> c </span><span style="color:#F92672;">?</span><span style="color:#F8F8F2;"> (d </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			d: </span><span style="color:#A6E22E;">y</span><span style="color:#F8F8F2;">(Math.</span><span style="color:#A6E22E;">floor</span><span style="color:#F8F8F2;">(c </span><span style="color:#F92672;">/</span><span style="color:#AE81FF;"> 1e3</span><span style="color:#F92672;"> /</span><span style="color:#AE81FF;"> 60</span><span style="color:#F92672;"> /</span><span style="color:#AE81FF;"> 60</span><span style="color:#F92672;"> /</span><span style="color:#AE81FF;"> 24</span><span style="color:#F8F8F2;">)),</span></span>
<span class="line"><span style="color:#F8F8F2;">			h: </span><span style="color:#A6E22E;">y</span><span style="color:#F8F8F2;">(Math.</span><span style="color:#A6E22E;">floor</span><span style="color:#F8F8F2;">(c </span><span style="color:#F92672;">/</span><span style="color:#AE81FF;"> 1e3</span><span style="color:#F92672;"> /</span><span style="color:#AE81FF;"> 60</span><span style="color:#F92672;"> /</span><span style="color:#AE81FF;"> 60</span><span style="color:#F92672;"> %</span><span style="color:#AE81FF;"> 24</span><span style="color:#F8F8F2;">)),</span></span>
<span class="line"><span style="color:#F8F8F2;">			m: </span><span style="color:#A6E22E;">y</span><span style="color:#F8F8F2;">(Math.</span><span style="color:#A6E22E;">floor</span><span style="color:#F8F8F2;">(c </span><span style="color:#F92672;">/</span><span style="color:#AE81FF;"> 1e3</span><span style="color:#F92672;"> /</span><span style="color:#AE81FF;"> 60</span><span style="color:#F92672;"> %</span><span style="color:#AE81FF;"> 60</span><span style="color:#F8F8F2;">)),</span></span>
<span class="line"><span style="color:#F8F8F2;">			s: </span><span style="color:#A6E22E;">y</span><span style="color:#F8F8F2;">(Math.</span><span style="color:#A6E22E;">floor</span><span style="color:#F8F8F2;">(c </span><span style="color:#F92672;">/</span><span style="color:#AE81FF;"> 1e3</span><span style="color:#F92672;"> %</span><span style="color:#AE81FF;"> 60</span><span style="color:#F8F8F2;">)),</span></span>
<span class="line"><span style="color:#F8F8F2;">			i: </span><span style="color:#A6E22E;">y</span><span style="color:#F8F8F2;">(Math.</span><span style="color:#A6E22E;">floor</span><span style="color:#F8F8F2;">(c </span><span style="color:#F92672;">%</span><span style="color:#AE81FF;"> 1e3</span><span style="color:#F92672;"> /</span><span style="color:#AE81FF;"> 10</span><span style="color:#F8F8F2;">)),</span></span>
<span class="line"><span style="color:#F8F8F2;">			t: c</span></span>
<span class="line"><span style="color:#F8F8F2;">		}) </span><span style="color:#F92672;">:</span><span style="color:#A6E22E;"> clearInterval</span><span style="color:#F8F8F2;">(t);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">		return</span><span style="color:#A6E22E;"> callback</span><span style="color:#F8F8F2;">(d);</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	function</span><span style="color:#A6E22E;"> y</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">e</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F92672;">		return</span><span style="color:#AE81FF;"> 10</span><span style="color:#F92672;"> &gt;</span><span style="color:#F8F8F2;"> e </span><span style="color:#F92672;">?</span><span style="color:#E6DB74;"> &#39;0&#39;</span><span style="color:#F92672;"> +</span><span style="color:#F8F8F2;"> e </span><span style="color:#F92672;">:</span><span style="color:#F8F8F2;"> e;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">	return</span><span style="color:#F8F8F2;"> t;</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div>`,2)]))}const m=n(e,[["render",o]]);export{b as __pageData,m as default};
