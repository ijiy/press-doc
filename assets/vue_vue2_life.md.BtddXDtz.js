import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const u=JSON.parse('{"title":"vue2 【生命周期钩子】","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vue2/life.md","filePath":"vue/vue2/life.md","lastUpdated":1694342534000}'),e={name:"vue/vue2/life.md"};function r(c,s,t,o,i,F){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="vue2-【生命周期钩子】" tabindex="-1">vue2 【生命周期钩子】 <a class="header-anchor" href="#vue2-【生命周期钩子】" aria-label="Permalink to &quot;vue2 【生命周期钩子】&quot;">​</a></h1><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#88846F;">	// vue实例化完毕</span></span>
<span class="line"><span style="color:#A6E22E;">	beforeCreate</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// 数据/事件 配置完毕</span></span>
<span class="line"><span style="color:#A6E22E;">	created</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// 使用\`render\`渲染模板</span></span>
<span class="line"><span style="color:#A6E22E;">	beforeMount</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// 实例成功挂载到当前组件 (可以获取当前组件的DOM)</span></span>
<span class="line"><span style="color:#A6E22E;">	mounted</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#FD971F;">		this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">$nextTick</span><span style="color:#F8F8F2;"> (() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">			// 确保子组件都挂载完成 (即整个视图都渲染完毕)</span></span>
<span class="line"><span style="color:#F8F8F2;">		});</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// 数据更新时, DOM 改变前</span></span>
<span class="line"><span style="color:#A6E22E;">	beforeUpdate</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// 数据更新时, DOM 改变后</span></span>
<span class="line"><span style="color:#A6E22E;">	updated</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#FD971F;">		this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">$nextTick</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">			// 确保子组件都更新</span></span>
<span class="line"><span style="color:#F8F8F2;">		});</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// keep-alive 缓存的组件, 激活时调用</span></span>
<span class="line"><span style="color:#A6E22E;">	activated</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// keep-alive 缓存的组件, 失活时调用</span></span>
<span class="line"><span style="color:#A6E22E;">	deactivated</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// 实例销毁前 (实例仍然完全可用)</span></span>
<span class="line"><span style="color:#A6E22E;">	beforeDestroy</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// 实例销毁后 (子组件也销毁, 指令被解绑, 侦听被移除)</span></span>
<span class="line"><span style="color:#A6E22E;">	destroyed</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div>`,2)]))}const y=n(e,[["render",r]]);export{u as __pageData,y as default};
