import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const m=JSON.parse('{"title":"ECharts 【可视化图表库】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/canvas/echarts.md","filePath":"webs/canvas/echarts.md","lastUpdated":1718695853000}'),p={name:"webs/canvas/echarts.md"},t=l(`<h1 id="echarts-【可视化图表库】" tabindex="-1">ECharts 【可视化图表库】 <a class="header-anchor" href="#echarts-【可视化图表库】" aria-label="Permalink to &quot;ECharts 【可视化图表库】&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">npm</span><span style="color:#E6DB74;"> i</span><span style="color:#E6DB74;"> echarts</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><ul><li>父级盒子要设置绝对宽度<code>px</code>, 不要设置百分比<code>%</code>, 否则折线图可能溢出容器</li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ul><li>App.vue</li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">figure</span><span style="color:#A6E22E;"> class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;css-echarts&quot;</span><span style="color:#A6E22E;"> id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;echarts_bar&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">figure</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">figure</span><span style="color:#A6E22E;"> class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;css-echarts&quot;</span><span style="color:#A6E22E;"> id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;echarts_pie&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">figure</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">figure</span><span style="color:#A6E22E;"> class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;css-echarts&quot;</span><span style="color:#A6E22E;"> id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;echarts_line&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">figure</span><span style="color:#F8F8F2;">&gt;</span></span>
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
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>assets/index.scss <ul><li>注意固定高度</li></ul></li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">.css-echarts</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">300</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	margin-bottom</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">50</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	background</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">#eee</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>assets/index.js</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">// import * as echarts from &#39;echarts&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 按需引入</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 主模块</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#AE81FF;"> *</span><span style="color:#F92672;"> as</span><span style="color:#F8F8F2;"> echarts </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;echarts/lib/echarts&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 柱状图</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#E6DB74;"> &#39;echarts/lib/chart/bar&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 饼状图</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#E6DB74;"> &#39;echarts/lib/chart/pie&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 折线图</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#E6DB74;"> &#39;echarts/lib/chart/line&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 提示框</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#E6DB74;"> &#39;echarts/lib/component/tooltip&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 标题</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#E6DB74;"> &#39;echarts/lib/component/title&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 工具箱</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#E6DB74;"> &#39;echarts/lib/component/toolbox&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">export</span><span style="color:#F92672;"> default</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	name: </span><span style="color:#E6DB74;">&#39;index&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#A6E22E;">	data</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#F92672;">		return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			bar_data: [</span></span>
<span class="line"><span style="color:#F8F8F2;">				[</span><span style="color:#E6DB74;">&#39;nameA&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">11</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">22</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">33</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">				[</span><span style="color:#E6DB74;">&#39;nameB&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">44</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">55</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">				[</span><span style="color:#E6DB74;">&#39;nameC&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">33</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">11</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">			],</span></span>
<span class="line"><span style="color:#F8F8F2;">			pie_data: [</span></span>
<span class="line"><span style="color:#F8F8F2;">				{name: </span><span style="color:#E6DB74;">&#39;a&#39;</span><span style="color:#F8F8F2;">, value: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">},</span></span>
<span class="line"><span style="color:#F8F8F2;">				{name: </span><span style="color:#E6DB74;">&#39;b&#39;</span><span style="color:#F8F8F2;">, value: </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">},</span></span>
<span class="line"><span style="color:#F8F8F2;">				{name: </span><span style="color:#E6DB74;">&#39;c&#39;</span><span style="color:#F8F8F2;">, value: </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">},</span></span>
<span class="line"><span style="color:#F8F8F2;">				{name: </span><span style="color:#E6DB74;">&#39;d&#39;</span><span style="color:#F8F8F2;">, value: </span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">			],</span></span>
<span class="line"><span style="color:#F8F8F2;">			line_data: [</span></span>
<span class="line"><span style="color:#F8F8F2;">				[</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">				[</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">				[</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">				[</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">			],</span></span>
<span class="line"><span style="color:#F8F8F2;">		};</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#A6E22E;">	mounted</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#FD971F;">		this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">getEchartsBar</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#FD971F;">		this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">getEchartsPie</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#FD971F;">		this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">getEchartsLine</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">	methods: {</span></span>
<span class="line"><span style="color:#A6E22E;">		getEchartsBar</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			const</span><span style="color:#F8F8F2;"> echartsBar </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> echarts.</span><span style="color:#A6E22E;">init</span><span style="color:#F8F8F2;">(echarts_bar);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">			// 显示loading</span></span>
<span class="line"><span style="color:#F8F8F2;">			echartsBar.</span><span style="color:#A6E22E;">showLoading</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			echartsBar.</span><span style="color:#A6E22E;">setOption</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#88846F;">				// 容器 (不包括\`柱体描述文字\`)</span></span>
<span class="line"><span style="color:#F8F8F2;">				grid: {</span></span>
<span class="line"><span style="color:#F8F8F2;">					left: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					containLabel: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					bottom: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					top: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					right: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#88846F;">				// 标题</span></span>
<span class="line"><span style="color:#F8F8F2;">				title: {</span></span>
<span class="line"><span style="color:#F8F8F2;">					text: </span><span style="color:#E6DB74;">&#39;柱状图&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					x: </span><span style="color:#E6DB74;">&#39;center&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#88846F;">				// 鼠标悬浮提示框</span></span>
<span class="line"><span style="color:#F8F8F2;">				tooltip: {},</span></span>
<span class="line"><span style="color:#F8F8F2;">				legend: {},</span></span>
<span class="line"><span style="color:#F8F8F2;">				yAxis: {},</span></span>
<span class="line"><span style="color:#F8F8F2;">				xAxis: {</span></span>
<span class="line"><span style="color:#88846F;">					// 声明x轴为\`类目轴\` (yAxis也是如此设置类目轴, 另一方自动为 type: &#39;value&#39;)</span></span>
<span class="line"><span style="color:#F8F8F2;">					type: </span><span style="color:#E6DB74;">&#39;category&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">					// 轴线</span></span>
<span class="line"><span style="color:#F8F8F2;">					axisLine: {</span></span>
<span class="line"><span style="color:#88846F;">						// 是否显示 (默认true)</span></span>
<span class="line"><span style="color:#F8F8F2;">						show: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					},</span></span>
<span class="line"><span style="color:#88846F;">					// 坐标刻度文字</span></span>
<span class="line"><span style="color:#F8F8F2;">					axisLabel: {</span></span>
<span class="line"><span style="color:#88846F;">						// 是否显示 (默认true)</span></span>
<span class="line"><span style="color:#F8F8F2;">						show: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">						// 文字样式 (有文字的地方都可以这样配置)</span></span>
<span class="line"><span style="color:#F8F8F2;">						textStyle: {</span></span>
<span class="line"><span style="color:#F8F8F2;">							fontSize: </span><span style="color:#AE81FF;">13</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">							fontWeight: </span><span style="color:#E6DB74;">&#39;bold&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">							color: </span><span style="color:#E6DB74;">&#39;#333&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">						},</span></span>
<span class="line"><span style="color:#88846F;">						// 格式化文字</span></span>
<span class="line"><span style="color:#A6E22E;">						formatter</span><span style="color:#F8F8F2;">: (</span><span style="color:#FD971F;font-style:italic;">value</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#E6DB74;"> \`</span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">value</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">人\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					},</span></span>
<span class="line"><span style="color:#88846F;">					// 坐标刻度线</span></span>
<span class="line"><span style="color:#F8F8F2;">					axisTick: {</span></span>
<span class="line"><span style="color:#88846F;">						// 是否显示 (默认true)</span></span>
<span class="line"><span style="color:#F8F8F2;">						show: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					},</span></span>
<span class="line"><span style="color:#88846F;">					// 坐标分割线 (坐标刻度线的延申)</span></span>
<span class="line"><span style="color:#F8F8F2;">					splitLine: {</span></span>
<span class="line"><span style="color:#88846F;">						// 是否显示 (默认true)</span></span>
<span class="line"><span style="color:#F8F8F2;">						show: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					},</span></span>
<span class="line"><span style="color:#88846F;">					// \`多轴数据\`的柱体参考刻度区间居中 (默认true, \`多轴数据\`参考刻度线居中, \`单轴数据\`参考刻度区间居中)</span></span>
<span class="line"><span style="color:#F8F8F2;">					boundaryGap: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">					// 反向分布 (意义不大, 可以通过反向数据实现)</span></span>
<span class="line"><span style="color:#F8F8F2;">					inverse: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#88846F;">				// \`多轴数据\`的展示数</span></span>
<span class="line"><span style="color:#F8F8F2;">				series: [</span></span>
<span class="line"><span style="color:#F8F8F2;">					{type: </span><span style="color:#E6DB74;">&#39;bar&#39;</span><span style="color:#F8F8F2;">},</span></span>
<span class="line"><span style="color:#F8F8F2;">					{</span></span>
<span class="line"><span style="color:#88846F;">						// 必须声明图标类型</span></span>
<span class="line"><span style="color:#F8F8F2;">						type: </span><span style="color:#E6DB74;">&#39;bar&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">						// 柱体宽度</span></span>
<span class="line"><span style="color:#F8F8F2;">						barWidth: </span><span style="color:#AE81FF;">20</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">						// 柱体描述文字</span></span>
<span class="line"><span style="color:#F8F8F2;">						label: {</span></span>
<span class="line"><span style="color:#88846F;">							// 是否显示 (默认false)</span></span>
<span class="line"><span style="color:#F8F8F2;">							show: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">							// 显示位置 (默认居中)</span></span>
<span class="line"><span style="color:#F8F8F2;">							position: </span><span style="color:#E6DB74;">&#39;right&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">							// 与柱体的距离</span></span>
<span class="line"><span style="color:#F8F8F2;">							distance: </span><span style="color:#AE81FF;">10</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">							textStyle: {</span></span>
<span class="line"><span style="color:#F8F8F2;">								fontSize: </span><span style="color:#AE81FF;">13</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">								fontWeight: </span><span style="color:#E6DB74;">&#39;bold&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">								color: </span><span style="color:#E6DB74;">&#39;#333&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">							},</span></span>
<span class="line"><span style="color:#88846F;">							// 格式化文字 (默认对应的 value 值)</span></span>
<span class="line"><span style="color:#A6E22E;">							formatter</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">item</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F92672;">								return</span><span style="color:#E6DB74;"> \`</span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">item.value</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">人\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">							},</span></span>
<span class="line"><span style="color:#F8F8F2;">						},</span></span>
<span class="line"><span style="color:#F8F8F2;">					},</span></span>
<span class="line"><span style="color:#F8F8F2;">				],</span></span>
<span class="line"><span style="color:#F8F8F2;">				dataset: {</span></span>
<span class="line"><span style="color:#88846F;">					// \`多轴数据\`对应提示名</span></span>
<span class="line"><span style="color:#F8F8F2;">					dimensions: [</span><span style="color:#AE81FF;">null</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;tipA&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;tipB&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;tipC&#39;</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#88846F;">					// [类目名, 该类目对应\`多轴数据\`]</span></span>
<span class="line"><span style="color:#F8F8F2;">					source: </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.bar_data,</span></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#F8F8F2;">			});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">			// 隐藏loading</span></span>
<span class="line"><span style="color:#A6E22E;">			setTimeout</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> echartsBar.</span><span style="color:#A6E22E;">hideLoading</span><span style="color:#F8F8F2;">(), </span><span style="color:#AE81FF;">50</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#A6E22E;">		getEchartsPie</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#F8F8F2;">			echarts.</span><span style="color:#A6E22E;">init</span><span style="color:#F8F8F2;">(echarts_pie).</span><span style="color:#A6E22E;">setOption</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">				title: {</span></span>
<span class="line"><span style="color:#F8F8F2;">					text: </span><span style="color:#E6DB74;">&#39;饼状图&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#88846F;">				// 南丁格尔图</span></span>
<span class="line"><span style="color:#F8F8F2;">				roseType: </span><span style="color:#E6DB74;">&#39;angle&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				series: [{</span></span>
<span class="line"><span style="color:#F8F8F2;">					type: </span><span style="color:#E6DB74;">&#39;pie&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					data: </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.pie_data,</span></span>
<span class="line"><span style="color:#F8F8F2;">				}],</span></span>
<span class="line"><span style="color:#F8F8F2;">			});</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#A6E22E;">		getEchartsLine</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#F8F8F2;">			echarts.</span><span style="color:#A6E22E;">init</span><span style="color:#F8F8F2;">(echarts_line).</span><span style="color:#A6E22E;">setOption</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">				title: {</span></span>
<span class="line"><span style="color:#F8F8F2;">					text: </span><span style="color:#E6DB74;">&#39;折线图&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#F8F8F2;">				tooltip: {},</span></span>
<span class="line"><span style="color:#F8F8F2;">				toolbox: {</span></span>
<span class="line"><span style="color:#F8F8F2;">					feature: {</span></span>
<span class="line"><span style="color:#F8F8F2;">						dataView: {},</span></span>
<span class="line"><span style="color:#F8F8F2;">						saveAsImage: {</span></span>
<span class="line"><span style="color:#F8F8F2;">							pixelRatio: </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">						},</span></span>
<span class="line"><span style="color:#F8F8F2;">						restore: {},</span></span>
<span class="line"><span style="color:#F8F8F2;">					},</span></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#F8F8F2;">				xAxis: {},</span></span>
<span class="line"><span style="color:#F8F8F2;">				yAxis: {},</span></span>
<span class="line"><span style="color:#F8F8F2;">				series: [{</span></span>
<span class="line"><span style="color:#F8F8F2;">					type: </span><span style="color:#E6DB74;">&#39;line&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">					// 曲线</span></span>
<span class="line"><span style="color:#F8F8F2;">					smooth: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					data: </span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.line_data,</span></span>
<span class="line"><span style="color:#F8F8F2;">				}],</span></span>
<span class="line"><span style="color:#F8F8F2;">			});</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br></div></div><h2 id="文献-🎨" tabindex="-1">文献 🎨 <a class="header-anchor" href="#文献-🎨" aria-label="Permalink to &quot;文献 🎨&quot;">​</a></h2><ul><li><a href="https://echarts.apache.org/zh/tutorial.html" target="_blank" rel="noreferrer">文档</a></li></ul>`,14),e=[t];function o(r,c,F,i,y,b){return a(),n("div",null,e)}const E=s(p,[["render",o]]);export{m as __pageData,E as default};
