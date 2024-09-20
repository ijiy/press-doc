import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const d=JSON.parse('{"title":"CSS 预处理器语言 【scss, less】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/css/scss.md","filePath":"webs/css/scss.md","lastUpdated":1715407916000}'),p={name:"webs/css/scss.md"},e=l(`<h1 id="css-预处理器语言-【scss-less】" tabindex="-1">CSS 预处理器语言 【scss, less】 <a class="header-anchor" href="#css-预处理器语言-【scss-less】" aria-label="Permalink to &quot;CSS 预处理器语言 【scss, less】&quot;">​</a></h1><h2 id="less" tabindex="-1">less <a class="header-anchor" href="#less" aria-label="Permalink to &quot;less&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> add</span><span style="color:#E6DB74;"> less</span><span style="color:#AE81FF;"> -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>嵌套</li></ul><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	/* div p */</span></span>
<span class="line"><span style="color:#F92672;">	p</span><span style="color:#F8F8F2;"> {}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>选择器 <code>&amp;</code></li></ul><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	/* div.a */</span></span>
<span class="line"><span style="color:#A6E22E;">	&amp;.a</span><span style="color:#F8F8F2;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	/* div.a */</span></span>
<span class="line"><span style="color:#A6E22E;">	&amp;:after</span><span style="color:#F8F8F2;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	/* .a div */</span></span>
<span class="line"><span style="color:#A6E22E;">	.a</span><span style="color:#A6E22E;"> &amp;</span><span style="color:#F8F8F2;"> {}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">.a</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	/* .a-b */</span></span>
<span class="line"><span style="color:#A6E22E;">	&amp;-</span><span style="color:#F92672;">b</span><span style="color:#F8F8F2;"> {}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>扩展 <code>extend</code></li></ul><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">.a</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.b</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">.c</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#A6E22E;">	&amp;</span><span style="color:#F8F8F2;">:</span><span style="color:#A6E22E;">extend</span><span style="color:#F8F8F2;">(</span><span style="color:#A6E22E;">.a</span><span style="color:#F8F8F2;">, </span><span style="color:#A6E22E;">.b</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/* result */</span></span>
<span class="line"><span style="color:#A6E22E;">.c</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>变量 <code>@</code></li></ul><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">@a: </span><span style="color:#66D9EF;">border</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">@b: </span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">.</span><span style="color:#F8F8F2;">{@a</span><span style="color:#E6DB74;">}</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#A6E22E;">	.a-</span><span style="color:#F8F8F2;">{@b</span><span style="color:#E6DB74;">}</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		{@a</span><span style="color:#E6DB74;">}</span><span style="color:#F92672;">-</span><span style="color:#66D9EF;">color</span><span style="color:#F8F8F2;">: {@b</span><span style="color:#E6DB74;">}</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#E6DB74;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/* result */</span></span>
<span class="line"><span style="color:#E6DB74;">.</span><span style="color:#66D9EF;">border</span><span style="color:#E6DB74;"> .a</span><span style="color:#F92672;">-</span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	border-color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="sass" tabindex="-1">Sass <a class="header-anchor" href="#sass" aria-label="Permalink to &quot;Sass&quot;">​</a></h2><ul><li><p>嵌套, 选择器 和 Less 一样</p></li><li><p>变量 <code>$</code></p></li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">$a: </span><span style="color:#66D9EF;">border</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">$b: </span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">.</span><span style="color:#F8F8F2;">#{a} {</span></span>
<span class="line"><span style="color:#A6E22E;">	.a-</span><span style="color:#F8F8F2;">#{b} {</span></span>
<span class="line"><span style="color:#F8F8F2;">		#{a}-color: #{b};</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F92672;">	&amp;</span><span style="color:#A6E22E;">:after</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">		content</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;is </span><span style="color:#F8F8F2;">#{b}</span><span style="color:#E6DB74;">&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/* result */</span></span>
<span class="line"><span style="color:#A6E22E;">.border</span><span style="color:#A6E22E;"> .a-red</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	border-color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.border:after</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">	content</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;is red&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>扩展 <code>@extend</code></li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">.a</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.b</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">.c</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">	@extend</span><span style="color:#A6E22E;"> .a</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">	@extend</span><span style="color:#A6E22E;"> .b</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/* result */</span></span>
<span class="line"><span style="color:#A6E22E;">.c</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>在 StyleLint 中</li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">%a</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.b</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">	@extend</span><span style="color:#A6E22E;"> %b</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="global" tabindex="-1"><code>:global</code> <a class="header-anchor" href="#global" aria-label="Permalink to &quot;\`:global\`&quot;">​</a></h2><ul><li>作用 <ul><li>所包含的选择器, 不添加<code>scoped</code>序列号</li><li><code>:global</code>没有父选择器包裹, 则作用全局</li></ul></li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">.a</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	:global {</span></span>
<span class="line"><span style="color:#88846F;">		/* 相当于 .a[data-v-xxx] .b */</span></span>
<span class="line"><span style="color:#F8F8F2;">		.b {</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">:global {</span></span>
<span class="line"><span style="color:#88846F;">	/* 相当于 .b */</span></span>
<span class="line"><span style="color:#A6E22E;">	.b</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="全局变量-scss" tabindex="-1">全局变量-scss <a class="header-anchor" href="#全局变量-scss" aria-label="Permalink to &quot;全局变量-scss&quot;">​</a></h2><ul><li>vue.config.js <ul><li>node-sass, node, sass-loader 之间的<a href="https://github.com/sass/node-sass" target="_blank" rel="noreferrer">版本依赖关联</a></li></ul></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">	css: {</span></span>
<span class="line"><span style="color:#F8F8F2;">		extract: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">			loaderOptions: {</span></span>
<span class="line"><span style="color:#F8F8F2;">			sass: {</span></span>
<span class="line"><span style="color:#88846F;">				// data: node-sass@4.*, node@8~14, sass-loader@7+</span></span>
<span class="line"><span style="color:#88846F;">				// prependData: node-sass@5~6, node@15~16, sass-loader@8+</span></span>
<span class="line"><span style="color:#88846F;">				// additionalData: node-sass@7+, node@17+, sass-loader@10+</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">				// variable.scss, 应该定义的是scss变量, 不要定义样式</span></span>
<span class="line"><span style="color:#F8F8F2;">				data: </span><span style="color:#E6DB74;">&#39;@import &quot;@/styles/variable.scss&quot;;&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">			},</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>vite.config.ts</li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">	css: {</span></span>
<span class="line"><span style="color:#F8F8F2;">		devSourcemap: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		preprocessorMaxWorkers: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		preprocessorOptions: {</span></span>
<span class="line"><span style="color:#F8F8F2;">			scss: {</span></span>
<span class="line"><span style="color:#F8F8F2;">				additionalData: </span><span style="color:#E6DB74;">\`@use &quot;@/styles/variable.scss&quot; as *;\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">			},</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="全局变量-less" tabindex="-1">全局变量-less <a class="header-anchor" href="#全局变量-less" aria-label="Permalink to &quot;全局变量-less&quot;">​</a></h2><ul><li>vite.config.ts</li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">	css: {</span></span>
<span class="line"><span style="color:#F8F8F2;">			preprocessorOptions: {</span></span>
<span class="line"><span style="color:#F8F8F2;">				less: {</span></span>
<span class="line"><span style="color:#F8F8F2;">					javascriptEnabled: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					modifyVars: {</span></span>
<span class="line"><span style="color:#88846F;">						// 参考 \\node_modules\\ant-design-vue\\lib\\style\\themes</span></span>
<span class="line"><span style="color:#E6DB74;">						&#39;component-background&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;#fff&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">						&#39;layout-header-background&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;#fff&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">						&#39;layout-body-background&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;#f7f8f9&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">						&#39;link-color&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;#F0B90B&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">						&#39;primary-color&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;#F0B90B&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">						&#39;btn-default-color&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;#909399&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">						&#39;btn-text-shadow&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;none&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6DB74;">						&#39;layout-header-height&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;50px&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6DB74;">						&#39;layout-header-padding&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;0 20px&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">						&#39;page-header-padding&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;20px&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">						&#39;page-header-padding-vertical&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;10px&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					},</span></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#F8F8F2;">			},</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="深度渲染deep" tabindex="-1">深度渲染<code>deep</code> <a class="header-anchor" href="#深度渲染deep" aria-label="Permalink to &quot;深度渲染\`deep\`&quot;">​</a></h2><ul><li><p>vue/cli3 vue2.x</p><ul><li><code>/deep/ .class {}</code></li></ul></li><li><p>vue/cli4 vue2.x</p><ul><li><code>::v-deep .class {}</code></li></ul></li><li><p>vue3</p><ul><li><code>::v-deep(.class) {}</code><ul><li>别名 <ul><li><code>:deep(.class) {}</code></li></ul></li></ul></li></ul></li></ul>`,31),o=[e];function c(r,t,i,F,b,y){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{d as __pageData,m as default};
