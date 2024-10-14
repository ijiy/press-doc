import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"穿梭框","description":"","frontmatter":{},"headers":[],"relativePath":"webs/ui-library/element/transfer.md","filePath":"webs/ui-library/element/transfer.md","lastUpdated":1694342534000}'),e={name:"webs/ui-library/element/transfer.md"};function t(o,s,r,c,F,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="穿梭框" tabindex="-1">穿梭框 <a class="header-anchor" href="#穿梭框" aria-label="Permalink to &quot;穿梭框&quot;">​</a></h1><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">el-transfer</span></span>
<span class="line"><span style="color:#A6E22E;">		filterable</span></span>
<span class="line"><span style="color:#A6E22E;">		filter-placeholder</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;请输入&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		v-model</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;custom.value&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		:data</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;custom.data&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		:props</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;{</span></span>
<span class="line"><span style="color:#E6DB74;">	        key: &#39;id&#39;,</span></span>
<span class="line"><span style="color:#E6DB74;">	    }&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		:titles</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;[&#39;可选择列&#39;, &#39;已选择列&#39;]&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		:render-content</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;renderFunc&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">	/&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">export</span><span style="color:#F92672;"> default</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#A6E22E;">	data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F92672;">		return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			custom: {</span></span>
<span class="line"><span style="color:#88846F;">				// 穿梭框的所有数据</span></span>
<span class="line"><span style="color:#F8F8F2;">				data: [</span></span>
<span class="line"><span style="color:#F8F8F2;">					{</span></span>
<span class="line"><span style="color:#F8F8F2;">						label: </span><span style="color:#E6DB74;">&#39;label必须的字段, 用于显示&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">						id: </span><span style="color:#E6DB74;">&#39;唯一键值项 key, 可通过 props.key 自定义该字段, 默认 key: &quot;&quot;&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">						other: </span><span style="color:#E6DB74;">&#39;其它字段&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">					}</span></span>
<span class="line"><span style="color:#F8F8F2;">				],</span></span>
<span class="line"><span style="color:#88846F;">				// 右侧选中的数据, [key]</span></span>
<span class="line"><span style="color:#F8F8F2;">				value: [],</span></span>
<span class="line"><span style="color:#F8F8F2;">			},</span></span>
<span class="line"><span style="color:#A6E22E;">			renderFunc</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">h</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">option</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#88846F;">				// 鼠标悬浮显示完整内容</span></span>
<span class="line"><span style="color:#F92672;">				return</span><span style="color:#F8F8F2;"> &lt;</span><span style="color:#F92672;">span</span><span style="color:#A6E22E;"> title</span><span style="color:#F92672;">={</span><span style="color:#F8F8F2;">option.label</span><span style="color:#F92672;">}</span><span style="color:#F8F8F2;">&gt;</span><span style="color:#F92672;">{</span><span style="color:#F8F8F2;">option.label</span><span style="color:#F92672;">}</span><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">span</span><span style="color:#F8F8F2;">&gt;;</span></span>
<span class="line"><span style="color:#F8F8F2;">			},</span></span>
<span class="line"><span style="color:#F8F8F2;">		};</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">style</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;scss&quot;</span><span style="color:#A6E22E;"> scoped</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#88846F;">/* 中间按钮垂直排布 */</span></span>
<span class="line"><span style="color:#A6E22E;">.el-transfer__buttons</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">inline-flex</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	flex-direction</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">column</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">	.el-button</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		margin-left</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,2)]))}const u=n(e,[["render",t]]);export{b as __pageData,u as default};
