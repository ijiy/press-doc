import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const m=JSON.parse('{"title":"CSS3 卡片翻转","description":"","frontmatter":{},"headers":[],"relativePath":"webs/effects/css3-rotate.md","filePath":"webs/effects/css3-rotate.md","lastUpdated":1694342534000}'),p={name:"webs/effects/css3-rotate.md"},e=l(`<h1 id="css3-卡片翻转" tabindex="-1">CSS3 卡片翻转 <a class="header-anchor" href="#css3-卡片翻转" aria-label="Permalink to &quot;CSS3 卡片翻转&quot;">​</a></h1><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">div</span><span style="color:#A6E22E;"> class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;card&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">div</span><span style="color:#A6E22E;"> class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;a&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">div</span><span style="color:#A6E22E;"> class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;b&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#A6E22E;">	.card</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		position</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">relative</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		transform-style</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">preserve-3d</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		transition</span><span style="color:#F8F8F2;">: transform </span><span style="color:#AE81FF;">.5</span><span style="color:#F92672;">s</span><span style="color:#66D9EF;"> ease-out</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#A6E22E;">	.b</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#A6E22E;">	.a</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		position</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">absolute</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		top</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		left</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		background</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">#f00</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		backface-visibility</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">hidden</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#A6E22E;">	.b</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		background</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">#00f</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		transform</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rotateY</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">-180</span><span style="color:#F92672;">deg</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">	.card:hover</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		transform</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rotateY</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">180</span><span style="color:#F92672;">deg</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,2),o=[e];function t(c,F,r,i,y,b){return a(),n("div",null,o)}const E=s(p,[["render",t]]);export{m as __pageData,E as default};
