import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const m=JSON.parse('{"title":"表格勾选","description":"","frontmatter":{},"headers":[],"relativePath":"webs/ui-library/element/table-selection.md","filePath":"webs/ui-library/element/table-selection.md","lastUpdated":1694342534000}'),p={name:"webs/ui-library/element/table-selection.md"},e=l(`<h1 id="表格勾选" tabindex="-1">表格勾选 <a class="header-anchor" href="#表格勾选" aria-label="Permalink to &quot;表格勾选&quot;">​</a></h1><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">el-dialog</span></span>
<span class="line"><span style="color:#F8F8F2;">	:</span><span style="color:#A6E22E;">title</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">dialogTable.title</span><span style="color:#F8F8F2;">&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">	:</span><span style="color:#A6E22E;">visible</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">sync</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">dialogTable.show</span><span style="color:#F8F8F2;">&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">	width</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;1200px&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;el-table</span></span>
<span class="line"><span style="color:#F8F8F2;">		ref=&quot;tables&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		:data=&quot;table.data&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		@selection-change=&quot;val =&gt; tableSelect(val)&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		row-key=&quot;id&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;el-table-column</span></span>
<span class="line"><span style="color:#F8F8F2;">			type=&quot;selection&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">			width=&quot;54&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">			reserve-selection</span></span>
<span class="line"><span style="color:#F8F8F2;">		&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/el-table&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">el-dialog</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F92672;">	return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		selectData: [], </span><span style="color:#88846F;">// 表格勾选操作的数据</span></span>
<span class="line"><span style="color:#F8F8F2;">		selectLast: [], </span><span style="color:#88846F;">// 最终确认勾选的数据</span></span>
<span class="line"><span style="color:#F8F8F2;">		dialogTable: { </span><span style="color:#88846F;">// 弹窗</span></span>
<span class="line"><span style="color:#F8F8F2;">			title: </span><span style="color:#E6DB74;">&#39;x&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">			show: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">},</span></span>
<span class="line"><span style="color:#F8F8F2;">methods: {</span></span>
<span class="line"><span style="color:#88846F;">	// 显示弹窗</span></span>
<span class="line"><span style="color:#A6E22E;">	showTable</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#FD971F;">		this</span><span style="color:#F8F8F2;">.selectData </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> _.</span><span style="color:#A6E22E;">cloneDeepWith</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.selectLast);</span></span>
<span class="line"><span style="color:#FD971F;">		this</span><span style="color:#F8F8F2;">.dialogTable.show </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FD971F;">		this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">getTableData</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#FD971F;">			this</span><span style="color:#F8F8F2;">.$refs.tables.selection.</span><span style="color:#A6E22E;">map</span><span style="color:#F8F8F2;">((</span><span style="color:#FD971F;font-style:italic;">v1</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">i1</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">				!</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.selectData.</span><span style="color:#A6E22E;">map</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">v2</span><span style="color:#66D9EF;font-style:italic;"> =&gt;</span><span style="color:#F8F8F2;"> v2.id).</span><span style="color:#A6E22E;">includes</span><span style="color:#F8F8F2;">(v1.id) </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#FD971F;"> this</span><span style="color:#F8F8F2;">.$refs.tables.selection.</span><span style="color:#A6E22E;">splice</span><span style="color:#F8F8F2;">(i1, </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">			});</span></span>
<span class="line"><span style="color:#F8F8F2;">		});</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	// 勾选</span></span>
<span class="line"><span style="color:#A6E22E;">	tableSelect</span><span style="color:#F8F8F2;">(vl) {</span></span>
<span class="line"><span style="color:#FD971F;">		this</span><span style="color:#F8F8F2;">.selectData </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> vl;</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	// 确认勾选</span></span>
<span class="line"><span style="color:#A6E22E;">	submitSelect</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#FD971F;">		this</span><span style="color:#F8F8F2;">.selectLast </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> _.</span><span style="color:#A6E22E;">cloneDeepWith</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.selectData);</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	// 请求表格数据</span></span>
<span class="line"><span style="color:#A6E22E;">	getTableData</span><span style="color:#F8F8F2;">(page </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">, callback </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Function) {</span></span>
<span class="line"><span style="color:#A6E22E;">		setTimeout</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			table.data </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [];</span></span>
<span class="line"><span style="color:#A6E22E;">			callback</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">		});</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,3),t=[e];function o(c,r,F,i,y,b){return a(),n("div",null,t)}const d=s(p,[["render",o]]);export{m as __pageData,d as default};
