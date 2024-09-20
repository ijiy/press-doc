import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const E=JSON.parse('{"title":"svg 【圆形进度】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/canvas/svg-round.md","filePath":"webs/canvas/svg-round.md","lastUpdated":1694342534000}'),p={name:"webs/canvas/svg-round.md"},e=l(`<h1 id="svg-【圆形进度】" tabindex="-1">svg 【圆形进度】 <a class="header-anchor" href="#svg-【圆形进度】" aria-label="Permalink to &quot;svg 【圆形进度】&quot;">​</a></h1><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;!</span><span style="color:#F92672;">DOCTYPE</span><span style="color:#A6E22E;"> html</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">html</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;en&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">meta</span><span style="color:#A6E22E;"> charset</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;UTF-8&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;Document&lt;/</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">		svg</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			transform</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rotate</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">-90</span><span style="color:#F92672;">deg</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">svg</span><span style="color:#A6E22E;"> id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;id_svg&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#88846F;">		&lt;!--内圆背景; r=&quot;49&quot;小1像素, 是为了避免锯齿溢出--&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">circle</span></span>
<span class="line"><span style="color:#A6E22E;">			cx</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			cy</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			r</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;49&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			fill</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;#f0f&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&gt;&lt;/</span><span style="color:#F92672;">circle</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		&lt;!--进度条背景--&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">circle</span></span>
<span class="line"><span style="color:#A6E22E;">			cx</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			cy</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			r</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;45&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			stroke-width</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;10&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			stroke</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;#FFE8CC&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			fill</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;none&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&gt;&lt;/</span><span style="color:#F92672;">circle</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		&lt;!--进度条--&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">circle</span></span>
<span class="line"><span style="color:#A6E22E;">			class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;svg-bar&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			cx</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			cy</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			r</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;45&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			stroke-width</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;10&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			stroke</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;#F2AE57&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			fill</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;none&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&gt;&lt;/</span><span style="color:#F92672;">circle</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">svg</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">button</span><span style="color:#A6E22E;"> onclick</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#A6E22E;">svgInit</span><span style="color:#E6DB74;">(</span><span style="color:#AE81FF;">2</span><span style="color:#E6DB74;">, </span><span style="color:#AE81FF;">0</span><span style="color:#E6DB74;">)&quot;</span><span style="color:#F8F8F2;">&gt;初始化&lt;/</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">button</span><span style="color:#A6E22E;"> onclick</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#A6E22E;">svgStart</span><span style="color:#E6DB74;">()&quot;</span><span style="color:#F8F8F2;">&gt;开始&lt;/</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">button</span><span style="color:#A6E22E;"> onclick</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#A6E22E;">svgStop</span><span style="color:#E6DB74;">()&quot;</span><span style="color:#F8F8F2;">&gt;暂停&lt;/</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#88846F;">		// 倒计总时间</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		let</span><span style="color:#F8F8F2;"> duration;</span></span>
<span class="line"><span style="color:#88846F;">		// 已用时间</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		let</span><span style="color:#F8F8F2;"> progress;</span></span>
<span class="line"><span style="color:#88846F;">		// 剩余时间</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		let</span><span style="color:#F8F8F2;"> lefTime;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 弧长</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		const</span><span style="color:#F8F8F2;"> svgC </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 45</span><span style="color:#F92672;"> *</span><span style="color:#AE81FF;"> 2</span><span style="color:#F92672;"> *</span><span style="color:#F8F8F2;"> Math.PI;</span></span>
<span class="line"><span style="color:#88846F;">		// svg</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		const</span><span style="color:#F8F8F2;"> svgBar </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.</span><span style="color:#A6E22E;">querySelector</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;.svg-bar&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 开始时间</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		let</span><span style="color:#F8F8F2;"> timeStart;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 播放状态</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		let</span><span style="color:#F8F8F2;"> svgPlay </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> false</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		function</span><span style="color:#A6E22E;"> svgInit</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">d</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">p</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">			duration </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> d;</span></span>
<span class="line"><span style="color:#F8F8F2;">			progress </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			svgPlay </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> false</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">			lefTime </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> duration </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> progress;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			svgBar.style.cssText </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> \`stroke-dasharray: </span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">svgC</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">, </span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">svgC</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">;\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">			svgBar.style.cssText </span><span style="color:#F92672;">+=</span><span style="color:#E6DB74;"> \`stroke-dashoffset: </span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">svgC </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> lefTime </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> duration</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			svgBar.classList.</span><span style="color:#A6E22E;">remove</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;cla-circle&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">		svgInit</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 开始</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		function</span><span style="color:#A6E22E;"> svgStart</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F92672;">			if</span><span style="color:#F8F8F2;"> (svgPlay) {</span></span>
<span class="line"><span style="color:#F92672;">				return</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			svgPlay </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> true</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">			lefTime </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> duration </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> progress;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			const</span><span style="color:#F8F8F2;"> style </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document.</span><span style="color:#A6E22E;">createElement</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;style&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			style.innerHTML </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> \`</span></span>
<span class="line"><span style="color:#E6DB74;">				@keyframes ani_circle {</span></span>
<span class="line"><span style="color:#E6DB74;">					0% {stroke-dashoffset: </span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">svgC </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> lefTime </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> duration</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">;}</span></span>
<span class="line"><span style="color:#E6DB74;">					100% {stroke-dashoffset: 0;}</span></span>
<span class="line"><span style="color:#E6DB74;">				}</span></span>
<span class="line"><span style="color:#E6DB74;">				.cla-circle {</span></span>
<span class="line"><span style="color:#E6DB74;">					animation: ani_circle </span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">lefTime</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">s cubic-bezier(0, 0, 1, 1) forwards;</span></span>
<span class="line"><span style="color:#E6DB74;">				}</span></span>
<span class="line"><span style="color:#E6DB74;">			\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			document.</span><span style="color:#A6E22E;">getElementsByTagName</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;head&#39;</span><span style="color:#F8F8F2;">)[</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">].</span><span style="color:#A6E22E;">appendChild</span><span style="color:#F8F8F2;">(style);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			svgBar.style.cssText </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> \`stroke-dasharray: </span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">svgC</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">, </span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">svgC</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">;\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			svgBar.classList.</span><span style="color:#A6E22E;">add</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;cla-circle&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 暂停</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		function</span><span style="color:#A6E22E;"> svgStop</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F92672;">			if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">svgPlay) {</span></span>
<span class="line"><span style="color:#F92672;">				return</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			svgPlay </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> false</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">			progress </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">new</span><span style="color:#A6E22E;"> Date</span><span style="color:#F8F8F2;">() </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> timeStart) </span><span style="color:#F92672;">/</span><span style="color:#AE81FF;"> 1e3</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">			lefTime </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> duration </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> progress;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			svgBar.style.cssText </span><span style="color:#F92672;">+=</span><span style="color:#E6DB74;"> \`stroke-dashoffset: </span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">svgC </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> lefTime </span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;"> duration</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">;\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">			svgBar.classList.</span><span style="color:#A6E22E;">remove</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;cla-circle&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		svgBar.</span><span style="color:#A6E22E;">addEventListener</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;animationstart&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">evt</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">			timeStart </span><span style="color:#F92672;">=</span><span style="color:#F92672;"> new</span><span style="color:#A6E22E;"> Date</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">		});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		svgBar.</span><span style="color:#A6E22E;">addEventListener</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;animationend&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">evt</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">			svgPlay </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> false</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">			progress </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			svgBar.style.cssText </span><span style="color:#F92672;">+=</span><span style="color:#E6DB74;"> \`stroke-dashoffset: 0;\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">			svgBar.classList.</span><span style="color:#A6E22E;">remove</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;cla-circle&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">		});</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">html</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br></div></div>`,2),t=[e];function o(r,c,F,y,i,b){return a(),n("div",null,t)}const m=s(p,[["render",o]]);export{E as __pageData,m as default};
