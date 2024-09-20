import{_ as s,c as a,o as n,a1 as l}from"./chunks/framework.B3EJgH_4.js";const b=JSON.parse('{"title":"uniapp 【全局组件 emits事件总线互相通信】","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/emits.md","filePath":"uniapp/emits.md","lastUpdated":1705132275000}'),p={name:"uniapp/emits.md"},e=l(`<h1 id="uniapp-【全局组件-emits事件总线互相通信】" tabindex="-1">uniapp 【全局组件 <code>emits</code>事件总线互相通信】 <a class="header-anchor" href="#uniapp-【全局组件-emits事件总线互相通信】" aria-label="Permalink to &quot;uniapp 【全局组件 \`emits\`事件总线互相通信】&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><ul><li>参考 <a href="./../vue/vue3/msg-mitt">mitt</a></li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ul><li>触发事件的组件</li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code"><code><span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#A6E22E;"> setup</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;ts&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	uni.</span><span style="color:#A6E22E;">$emit</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;update_page&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>接收事件的组件</li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#A6E22E;"> setup</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;ts&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#88846F;">	// 是否刷新页面</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	let</span><span style="color:#F8F8F2;"> isUpdatePage</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> boolean</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	uni.</span><span style="color:#A6E22E;">$on</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;update_page&#39;</span><span style="color:#F8F8F2;">, () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		isUpdatePage </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> true</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">	});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">	onShow</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">		if</span><span style="color:#F8F8F2;"> (isUpdatePage) {</span></span>
<span class="line"><span style="color:#F8F8F2;">			isUpdatePage </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> false</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#88846F;">			// 更新页面数据</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	});</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,8),t=[e];function o(r,c,i,F,u,y){return n(),a("div",null,t)}const m=s(p,[["render",o]]);export{b as __pageData,m as default};
