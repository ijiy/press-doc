import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const m=JSON.parse('{"title":"文字无缝滚动 【vue】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/effects/seamless-scroll.md","filePath":"webs/effects/seamless-scroll.md","lastUpdated":1715407916000}'),p={name:"webs/effects/seamless-scroll.md"},e=l(`<h1 id="文字无缝滚动-【vue】" tabindex="-1">文字无缝滚动 【vue】 <a class="header-anchor" href="#文字无缝滚动-【vue】" aria-label="Permalink to &quot;文字无缝滚动 【vue】&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">npm</span><span style="color:#E6DB74;"> i</span><span style="color:#E6DB74;"> vue-seamless-scroll</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="app-vue" tabindex="-1">App.vue <a class="header-anchor" href="#app-vue" aria-label="Permalink to &quot;App.vue&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">vue-seamless-scroll</span><span style="color:#A6E22E;"> class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;seamless-scroll&quot;</span><span style="color:#F8F8F2;"> :</span><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">list</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;"> :</span><span style="color:#A6E22E;">class-option</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">optionSeamless</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;</span><span style="color:#F92672;">li</span><span style="color:#F92672;"> v-for</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">item </span><span style="color:#F92672;">in</span><span style="color:#F8F8F2;"> list</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#A6E22E;"> v-text</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">item.name</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;/</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;/</span><span style="color:#F92672;">vue-seamless-scroll</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">style</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;sass&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">	@import </span><span style="color:#E6DB74;">&quot;assets/index.scss&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> index </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;./assets/index&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">	export</span><span style="color:#F92672;"> default</span><span style="color:#F8F8F2;"> index;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="assets-index-js" tabindex="-1">assets/index.js <a class="header-anchor" href="#assets-index-js" aria-label="Permalink to &quot;assets/index.js&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> Vue </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;vue&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> scroll </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;vue-seamless-scroll&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">Vue.</span><span style="color:#A6E22E;">use</span><span style="color:#F8F8F2;">(scroll);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">export</span><span style="color:#F92672;"> default</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	name: </span><span style="color:#E6DB74;">&#39;index&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#A6E22E;">	data</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#F92672;">		return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			list: [</span></span>
<span class="line"><span style="color:#F8F8F2;">				{</span></span>
<span class="line"><span style="color:#F8F8F2;">					name: </span><span style="color:#E6DB74;">&#39;a&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#F8F8F2;">				{</span></span>
<span class="line"><span style="color:#F8F8F2;">					name: </span><span style="color:#E6DB74;">&#39;b&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#F8F8F2;">				{</span></span>
<span class="line"><span style="color:#F8F8F2;">					name: </span><span style="color:#E6DB74;">&#39;c&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">				}</span></span>
<span class="line"><span style="color:#F8F8F2;">			]</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">	computed: {</span></span>
<span class="line"><span style="color:#A6E22E;">		optionSeamless</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#F92672;">			return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">				step: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 滚动步伐</span></span>
<span class="line"><span style="color:#F8F8F2;">				limitMoveNum: </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 默认 5, 执行滚动的数据长度</span></span>
<span class="line"><span style="color:#F8F8F2;">				hoverStop: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 鼠标悬停</span></span>
<span class="line"><span style="color:#F8F8F2;">				direction: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 0 下; 1 上; 2 左; 3 右</span></span>
<span class="line"><span style="color:#F8F8F2;">				singleHeight: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 单步停顿高度</span></span>
<span class="line"><span style="color:#F8F8F2;">				singleWidth: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				waitTime: </span><span style="color:#AE81FF;">1e3</span><span style="color:#88846F;"> // 单步停顿时间</span></span>
<span class="line"><span style="color:#F8F8F2;">			}</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="assets-index-scss" tabindex="-1">assets/index.scss <a class="header-anchor" href="#assets-index-scss" aria-label="Permalink to &quot;assets/index.scss&quot;">​</a></h2><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">.seamless-scroll</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	overflow</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">hidden</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">200</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">	li</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		line-height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="文献-🎨" tabindex="-1">文献 🎨 <a class="header-anchor" href="#文献-🎨" aria-label="Permalink to &quot;文献 🎨&quot;">​</a></h2><ul><li><a href="https://gitcode.net/mirrors/chenxuan0000/vue-seamless-scroll?utm_source=csdn_github_accelerator" target="_blank" rel="noreferrer">文档</a></li></ul>`,11),o=[e];function t(r,c,F,i,y,b){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{m as __pageData,d as default};
