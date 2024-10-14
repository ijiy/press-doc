import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"vue3 【插槽】","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vue3/slot.md","filePath":"vue/vue3/slot.md","lastUpdated":1715407916000}'),t={name:"vue/vue3/slot.md"};function e(o,s,F,c,r,y){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="vue3-【插槽】" tabindex="-1">vue3 【插槽】 <a class="header-anchor" href="#vue3-【插槽】" aria-label="Permalink to &quot;vue3 【插槽】&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><ul><li><p>提取自 <a href="./../dev3/">极简调试配置</a></p></li><li><p>应用场景</p><ul><li>在子组件中挖槽, 供父组件插入内容</li></ul></li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ul><li>父组件 (App.vue)</li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">section</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">h2</span><span style="color:#F8F8F2;">&gt;父组件&lt;/</span><span style="color:#F92672;">h2</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">Aa</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">				子组件, 通过</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#AE81FF;">&amp;lt;</span><span style="color:#F8F8F2;">slot /</span><span style="color:#AE81FF;">&amp;gt;</span><span style="color:#F8F8F2;"> &lt;/</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">				或</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#AE81FF;">&amp;lt;</span><span style="color:#F8F8F2;">slot name=&quot;default&quot; /</span><span style="color:#AE81FF;">&amp;gt;</span><span style="color:#F8F8F2;"> &lt;/</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">				挖一个默认的槽</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">				父组件, 除</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#AE81FF;">&amp;lt;</span><span style="color:#F8F8F2;">template /</span><span style="color:#AE81FF;">&amp;gt;</span><span style="color:#F8F8F2;"> &lt;/</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">				包裹的内容, 其余内容都会插入该槽中</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;通常默认插槽只有一个&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;"> #</span><span style="color:#A6E22E;">header</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					子组件, 通过</span></span>
<span class="line"><span style="color:#F8F8F2;">					&lt;</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#AE81FF;">&amp;lt;</span><span style="color:#F8F8F2;">slot name=&quot;header&quot; /</span><span style="color:#AE81FF;">&amp;gt;</span><span style="color:#F8F8F2;"> &lt;/</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					挖一个命名为header的槽</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					父组件, 用</span></span>
<span class="line"><span style="color:#F8F8F2;">					&lt;</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#AE81FF;">&amp;lt;</span><span style="color:#F8F8F2;">template #header</span><span style="color:#AE81FF;">&amp;gt;</span><span style="color:#F8F8F2;"> &lt;/</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					包裹的内容, 会插入指定命名的槽中</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;"> #</span><span style="color:#A6E22E;">footer</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">{ content }</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					{{ content }}</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					子组件, 通过</span></span>
<span class="line"><span style="color:#F8F8F2;">					&lt;</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#AE81FF;">&amp;lt;</span><span style="color:#F8F8F2;">slot name=&quot;footer&quot; content=&quot;xxx&quot; /</span><span style="color:#AE81FF;">&amp;gt;</span><span style="color:#F8F8F2;"> &lt;/</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					导出插槽中的内容</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					父组件, 通过</span></span>
<span class="line"><span style="color:#F8F8F2;">					&lt;</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#AE81FF;">&amp;lt;</span><span style="color:#F8F8F2;">template #footer=&quot;{ content }&quot;</span><span style="color:#AE81FF;">&amp;gt;</span><span style="color:#F8F8F2;"> &lt;/</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					&lt;</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#AE81FF;">&amp;#123;&amp;#123;</span><span style="color:#F8F8F2;"> content </span><span style="color:#AE81FF;">&amp;#125;&amp;#125;</span><span style="color:#F8F8F2;"> &lt;/</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					引入具名插槽抛出的内容</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					父组件, 通过</span></span>
<span class="line"><span style="color:#F8F8F2;">					&lt;</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#AE81FF;">&amp;lt;</span><span style="color:#F8F8F2;">template #default=&quot;{ content }&quot;</span><span style="color:#AE81FF;">&amp;gt;</span><span style="color:#F8F8F2;"> &lt;/</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					&lt;</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt; </span><span style="color:#AE81FF;">&amp;#123;&amp;#123;</span><span style="color:#F8F8F2;"> content </span><span style="color:#AE81FF;">&amp;#125;&amp;#125;</span><span style="color:#F8F8F2;"> &lt;/</span><span style="color:#F92672;">code</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">					引入默认插槽抛出的内容</span></span>
<span class="line"><span style="color:#F8F8F2;">				&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;/</span><span style="color:#F92672;">Aa</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">section</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#A6E22E;"> setup</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;ts&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> Aa </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;@/components/Aa.vue&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><ul><li>子组件 (components/Aa.vue) <ul><li>通过默认插槽或具名插槽接收数据</li><li>通过绑定数据方式, 向往抛出数据</li></ul></li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">section</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">h2</span><span style="color:#F8F8F2;">&gt;子组件&lt;/</span><span style="color:#F92672;">h2</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">figure</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">figcaption</span><span style="color:#F8F8F2;">&gt;插槽中接收内容-默认插槽:&lt;/</span><span style="color:#F92672;">figcaption</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">slot</span><span style="color:#F44747;"> /</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;/</span><span style="color:#F92672;">figure</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">figure</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">figcaption</span><span style="color:#F8F8F2;">&gt;插槽中接收内容-具名插槽:&lt;/</span><span style="color:#F92672;">figcaption</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">slot</span><span style="color:#A6E22E;"> name</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;header&quot;</span><span style="color:#F44747;"> /</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;/</span><span style="color:#F92672;">figure</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">figure</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">figcaption</span><span style="color:#F8F8F2;">&gt;插槽中抛出内容-具名插槽:&lt;/</span><span style="color:#F92672;">figcaption</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			&lt;</span><span style="color:#F92672;">slot</span><span style="color:#A6E22E;"> name</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;footer&quot;</span><span style="color:#A6E22E;"> content</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;xxx&quot;</span><span style="color:#F44747;"> /</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;/</span><span style="color:#F92672;">figure</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">section</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,8)]))}const u=n(t,[["render",e]]);export{b as __pageData,u as default};
