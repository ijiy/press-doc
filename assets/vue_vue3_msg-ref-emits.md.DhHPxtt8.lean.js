import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"vue3 【父子组件 (可互通) ref引用子组件对象】","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vue3/msg-ref-emits.md","filePath":"vue/vue3/msg-ref-emits.md","lastUpdated":1715407916000}'),e={name:"vue/vue3/msg-ref-emits.md"};function t(o,s,c,r,F,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="vue3-【父子组件-可互通-ref引用子组件对象】" tabindex="-1">vue3 【父子组件 (可互通) <code>ref</code>引用子组件对象】 <a class="header-anchor" href="#vue3-【父子组件-可互通-ref引用子组件对象】" aria-label="Permalink to &quot;vue3 【父子组件 (可互通) \`ref\`引用子组件对象】&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><ul><li><p>提取自 <a href="./../dev3/">极简调试配置</a></p></li><li><p>应用场景</p><ul><li>多个子组件的回调, 触发父组件的同一个方法</li><li>子组件更新父组件的其它数据 (更新绑定的响应式对象, 应该使用<code>v-model</code>方式)</li><li>父组件使用子组件DOM</li><li>父组件向子组件传递只有子组件需要用到的动态数据</li><li>父组件更新子组件数据</li></ul></li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ul><li>父组件 (App.vue) <ul><li>通过<code>ref</code>调用子组件方法, 实现向下通信</li></ul></li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">section</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">h2</span><span style="color:#F8F8F2;">&gt;父组件&lt;/</span><span style="color:#F92672;">h2</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">input</span></span>
<span class="line"><span style="color:#A6E22E;">			v-model</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;dataSRt.inputVal&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			placeholder</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;向子组件通信&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			@input</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;setChildMsg&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;">&gt;来自子组件数据: {{dataSRt.childData}}&lt;/</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">section</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">Aa</span></span>
<span class="line"><span style="color:#A6E22E;">		ref</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;ref_aa&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		@changeParentMsg</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;changeParentMsg&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">	/&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#A6E22E;"> setup</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;ts&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> Aa </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;@/components/Aa.vue&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		shallowRef,</span></span>
<span class="line"><span style="color:#F8F8F2;">		shallowReactive,</span></span>
<span class="line"><span style="color:#F8F8F2;">	} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;vue&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	interface</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">TSSRt</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		inputVal</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span></span>
<span class="line"><span style="color:#F8F8F2;">		childData</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#F8F8F2;"> ref_aa </span><span style="color:#F92672;">=</span><span style="color:#A6E22E;"> shallowRef</span><span style="color:#F8F8F2;">&lt;</span><span style="color:#A6E22E;text-decoration:underline;">InstanceType</span><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">typeof</span><span style="color:#F8F8F2;"> Aa&gt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#F8F8F2;"> dataSRt</span><span style="color:#F92672;">:</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">TSSRt</span><span style="color:#F92672;"> =</span><span style="color:#A6E22E;"> shallowReactive</span><span style="color:#F8F8F2;">(&lt;</span><span style="color:#A6E22E;text-decoration:underline;">TSSRt</span><span style="color:#F8F8F2;">&gt;{</span></span>
<span class="line"><span style="color:#F8F8F2;">		inputVal: </span><span style="color:#E6DB74;">&#39;&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		childData: </span><span style="color:#E6DB74;">&#39;&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">	});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	/**</span></span>
<span class="line"><span style="color:#88846F;">	 * 设置子组件数据</span></span>
<span class="line"><span style="color:#88846F;">	 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#A6E22E;"> setChildMsg</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		ref_aa.value?.</span><span style="color:#A6E22E;">changeChildMsg</span><span style="color:#F8F8F2;">(dataSRt.inputVal);</span></span>
<span class="line"><span style="color:#F8F8F2;">	};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	/**</span></span>
<span class="line"><span style="color:#88846F;">	 * 接收子组件数据</span></span>
<span class="line"><span style="color:#88846F;">	 * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#F8F8F2;"> data</span><span style="color:#88846F;"> 输入内容</span></span>
<span class="line"><span style="color:#88846F;">	 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#A6E22E;"> changeParentMsg</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">data</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		dataSRt.childData </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> data;</span></span>
<span class="line"><span style="color:#F8F8F2;">	};</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><ul><li>子组件 (components/Aa.vue) <ul><li>通过<code>emits</code>触发父组件的方法, 实现向上通信</li></ul></li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">section</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">h2</span><span style="color:#F8F8F2;">&gt;子组件&lt;/</span><span style="color:#F92672;">h2</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">input</span></span>
<span class="line"><span style="color:#A6E22E;">			v-model</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;dataSRt.inputVal&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			placeholder</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;向父组件通信&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">			@input</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;setParentMsg&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;">&gt;来自父组件数据: {{dataSRt.parentData}}&lt;/</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">section</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#A6E22E;"> setup</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;ts&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		shallowReactive,</span></span>
<span class="line"><span style="color:#F8F8F2;">	} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;vue&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	interface</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">TSSRt</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		inputVal</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span></span>
<span class="line"><span style="color:#F8F8F2;">		parentData</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#F8F8F2;"> dataSRt</span><span style="color:#F92672;">:</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">TSSRt</span><span style="color:#F92672;"> =</span><span style="color:#A6E22E;"> shallowReactive</span><span style="color:#F8F8F2;">(&lt;</span><span style="color:#A6E22E;text-decoration:underline;">TSSRt</span><span style="color:#F8F8F2;">&gt;{</span></span>
<span class="line"><span style="color:#F8F8F2;">		inputVal: </span><span style="color:#E6DB74;">&#39;&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		parentData: </span><span style="color:#E6DB74;">&#39;&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">	});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#F8F8F2;"> emits </span><span style="color:#F92672;">=</span><span style="color:#A6E22E;"> defineEmits</span><span style="color:#F8F8F2;">&lt;{</span></span>
<span class="line"><span style="color:#F8F8F2;">		changeParentMsg</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span></span>
<span class="line"><span style="color:#F8F8F2;">	}&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	/**</span></span>
<span class="line"><span style="color:#88846F;">	 * 设置父组件数据</span></span>
<span class="line"><span style="color:#88846F;">	 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#A6E22E;"> setParentMsg</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#A6E22E;">		emits</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;changeParentMsg&#39;</span><span style="color:#F8F8F2;">, dataSRt.inputVal);</span></span>
<span class="line"><span style="color:#F8F8F2;">	};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	/**</span></span>
<span class="line"><span style="color:#88846F;">	 * 接收父组件数据</span></span>
<span class="line"><span style="color:#88846F;">	 * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#F8F8F2;"> data</span><span style="color:#88846F;"> 输入内容</span></span>
<span class="line"><span style="color:#88846F;">	 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#A6E22E;"> changeChildMsg</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">data</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		dataSRt.parentData </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> data;</span></span>
<span class="line"><span style="color:#F8F8F2;">	};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">	defineExpose</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">		changeChildMsg,</span></span>
<span class="line"><span style="color:#F8F8F2;">	});</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div>`,8)]))}const u=n(e,[["render",t]]);export{b as __pageData,u as default};
