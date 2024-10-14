import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"swiper 【vue】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/effects/vue-swiper.md","filePath":"webs/effects/vue-swiper.md","lastUpdated":1715407916000}'),e={name:"webs/effects/vue-swiper.md"};function t(o,s,r,c,F,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="swiper-【vue】" tabindex="-1">swiper 【vue】 <a class="header-anchor" href="#swiper-【vue】" aria-label="Permalink to &quot;swiper 【vue】&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#A6E22E;">npm</span><span style="color:#E6DB74;"> i</span><span style="color:#E6DB74;"> swiper</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">swiper</span></span>
<span class="line"><span style="color:#A6E22E;">		class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;c-swiper&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		:style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;\`height: \${height}px\`&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		:pagination</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;pagination&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		:initialSlide</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;initialSlide&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		@slideChange</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;slideChange&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">slot</span><span style="color:#A6E22E;"> name</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;slide&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">slot</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">swiper</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> SwiperCore, {</span></span>
<span class="line"><span style="color:#F8F8F2;">		Pagination,</span></span>
<span class="line"><span style="color:#F8F8F2;">	} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;swiper&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> {Swiper} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;swiper/vue&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#E6DB74;"> &#39;swiper/swiper.less&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	SwiperCore.</span><span style="color:#A6E22E;">use</span><span style="color:#F8F8F2;">([</span></span>
<span class="line"><span style="color:#F8F8F2;">		Pagination,</span></span>
<span class="line"><span style="color:#F8F8F2;">	]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">	export</span><span style="color:#F92672;"> default</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		name: </span><span style="color:#E6DB74;">&#39;c_swiper&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		components: {</span></span>
<span class="line"><span style="color:#F8F8F2;">			Swiper,</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">		props: {</span></span>
<span class="line"><span style="color:#F8F8F2;">			height: {</span></span>
<span class="line"><span style="color:#F8F8F2;">				type: Number,</span></span>
<span class="line"><span style="color:#F8F8F2;">				default: </span><span style="color:#AE81FF;">585</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">			},</span></span>
<span class="line"><span style="color:#F8F8F2;">			pagination: {</span></span>
<span class="line"><span style="color:#F8F8F2;">				type: [Boolean, Object],</span></span>
<span class="line"><span style="color:#F8F8F2;">				default: {</span></span>
<span class="line"><span style="color:#F8F8F2;">					clickable: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#F8F8F2;">			},</span></span>
<span class="line"><span style="color:#F8F8F2;">			initialSlide: {</span></span>
<span class="line"><span style="color:#F8F8F2;">				type: Number,</span></span>
<span class="line"><span style="color:#F8F8F2;">				default: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">			}</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#A6E22E;">		setup</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">prop</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">context</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F92672;">			return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#A6E22E;">				slideChange</span><span style="color:#F8F8F2;">: </span><span style="color:#FD971F;font-style:italic;">swiper</span><span style="color:#66D9EF;font-style:italic;"> =&gt;</span><span style="color:#F8F8F2;"> context.</span><span style="color:#A6E22E;">emit</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;slideChange&#39;</span><span style="color:#F8F8F2;">, swiper),</span></span>
<span class="line"><span style="color:#F8F8F2;">			};</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	};</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">style</span><span style="color:#A6E22E;"> scoped</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;less&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#A6E22E;">	.c-swiper</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		::</span><span style="color:#F92672;">v-deep</span><span style="color:#F8F8F2;">(</span><span style="color:#A6E22E;">.swiper-pagination</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">flex</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			align-items</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">center</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;">			justify</span><span style="color:#F92672;">-</span><span style="color:#66D9EF;">content</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">center</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			position</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">absolute</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;">			bottom</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">30</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;">			left</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;">			width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;">			height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">8</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">		::</span><span style="color:#F92672;">v-deep</span><span style="color:#F8F8F2;">(</span><span style="color:#A6E22E;">.swiper-pagination-bullet</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			position</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">relative</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;">			z-index</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;">			width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">15</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;">			height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">8</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;">			margin</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#AE81FF;"> 6</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;">			background</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rgba</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">0.3</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#66D9EF;">			border-radius</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">4</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">		::</span><span style="color:#F92672;">v-deep</span><span style="color:#F8F8F2;">(</span><span style="color:#A6E22E;">.swiper-pagination-bullet-active</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;">			width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">56</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">c-swiper</span></span>
<span class="line"><span style="color:#A6E22E;">		:height</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;620&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		:initialSlide</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;test.active&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		@slideChange</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;slideChange&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		:pagination</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">template</span><span style="color:#A6E22E;"> v-slot</span><span style="color:#F8F8F2;">:</span><span style="color:#A6E22E;">slide</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">swiper-slide</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">swiper-slide</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">c-swiper</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">button</span><span style="color:#A6E22E;"> @click</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;test.active = 1&quot;</span><span style="color:#F8F8F2;">&gt;slideTo(1)&lt;/</span><span style="color:#F92672;">button</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		reactive,</span></span>
<span class="line"><span style="color:#F8F8F2;">		watch,</span></span>
<span class="line"><span style="color:#F8F8F2;">	} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;vue&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> {SwiperSlide} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;swiper/vue&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">	export</span><span style="color:#F92672;"> default</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		components: {</span></span>
<span class="line"><span style="color:#F8F8F2;">			SwiperSlide,</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#A6E22E;">		setup</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			let</span><span style="color:#F8F8F2;"> newSwiper;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			const</span><span style="color:#F8F8F2;"> test.active </span><span style="color:#F92672;">=</span><span style="color:#A6E22E;"> reactive</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">				active: </span><span style="color:#AE81FF;">0</span></span>
<span class="line"><span style="color:#F8F8F2;">			});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			const</span><span style="color:#A6E22E;"> slideChange</span><span style="color:#F92672;"> =</span><span style="color:#FD971F;font-style:italic;"> swiper</span><span style="color:#66D9EF;font-style:italic;"> =&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">				newSwiper </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> swiper;</span></span>
<span class="line"><span style="color:#F8F8F2;">				test.active </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> swiper.activeIndex;</span></span>
<span class="line"><span style="color:#F8F8F2;">			};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">			watch</span><span style="color:#F8F8F2;">(</span></span>
<span class="line"><span style="color:#F8F8F2;">				() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> test.active,</span></span>
<span class="line"><span style="color:#FD971F;font-style:italic;">				val</span><span style="color:#66D9EF;font-style:italic;"> =&gt;</span><span style="color:#F8F8F2;"> newSwiper.</span><span style="color:#A6E22E;">slideTo</span><span style="color:#F8F8F2;">(val)</span></span>
<span class="line"><span style="color:#F8F8F2;">			);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">			return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">				test,</span></span>
<span class="line"><span style="color:#F8F8F2;">				slideChange,</span></span>
<span class="line"><span style="color:#F8F8F2;">			};</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	};</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h2 id="文献-🎨" tabindex="-1">文献 🎨 <a class="header-anchor" href="#文献-🎨" aria-label="Permalink to &quot;文献 🎨&quot;">​</a></h2><ul><li><a href="https://swiperjs.com/vue" target="_blank" rel="noreferrer">https://swiperjs.com/vue</a></li></ul>`,9)]))}const u=n(e,[["render",t]]);export{b as __pageData,u as default};
