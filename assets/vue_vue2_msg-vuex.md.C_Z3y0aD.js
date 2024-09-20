import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const y=JSON.parse('{"title":"vue2 【全局变量 (可互通) 全局状态store中管理变量】","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vue2/msg-vuex.md","filePath":"vue/vue2/msg-vuex.md","lastUpdated":1694342534000}'),p={name:"vue/vue2/msg-vuex.md"},e=l(`<h1 id="vue2-【全局变量-可互通-全局状态store中管理变量】" tabindex="-1">vue2 【全局变量 (可互通) 全局状态<code>store</code>中管理变量】 <a class="header-anchor" href="#vue2-【全局变量-可互通-全局状态store中管理变量】" aria-label="Permalink to &quot;vue2 【全局变量 (可互通) 全局状态\`store\`中管理变量】&quot;">​</a></h1><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ul><li>状态管理 (store/index.js)</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#88846F;">	// 状态管理的变量</span></span>
<span class="line"><span style="color:#F8F8F2;">	state: {</span></span>
<span class="line"><span style="color:#F8F8F2;">		count: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">	mutations: {</span></span>
<span class="line"><span style="color:#88846F;">		// 同步改变 state 的方法</span></span>
<span class="line"><span style="color:#A6E22E;">		increment</span><span style="color:#F8F8F2;"> (state, n) {</span></span>
<span class="line"><span style="color:#F8F8F2;">			state.count </span><span style="color:#F92672;">+=</span><span style="color:#F8F8F2;"> n;</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">	actions: {</span></span>
<span class="line"><span style="color:#88846F;">		// 异步改变 state 的方法</span></span>
<span class="line"><span style="color:#A6E22E;">		incrementAsync</span><span style="color:#F8F8F2;"> ({ commit }, n) {</span></span>
<span class="line"><span style="color:#A6E22E;">			commit</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;increment&#39;</span><span style="color:#F8F8F2;">, n);</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">	modules: {</span></span>
<span class="line"><span style="color:#88846F;">		// 状态管理颗粒化</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>使用状态管理的变量</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> store </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;@/store&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 触发异步方法</span></span>
<span class="line"><span style="color:#F8F8F2;">store.</span><span style="color:#A6E22E;">dispatch</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;incrementAsync&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 触发同步方法</span></span>
<span class="line"><span style="color:#F8F8F2;">store.</span><span style="color:#A6E22E;">commit</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;increment&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">	computed: {</span></span>
<span class="line"><span style="color:#88846F;">		// 让 store 的数据可响应</span></span>
<span class="line"><span style="color:#A6E22E;">		count</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#F92672;">			return</span><span style="color:#F8F8F2;"> store.state.count;</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,6),t=[e];function o(r,c,i,F,b,u){return a(),n("div",null,t)}const d=s(p,[["render",o]]);export{y as __pageData,d as default};
