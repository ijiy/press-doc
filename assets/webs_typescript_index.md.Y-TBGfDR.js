import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const b=JSON.parse('{"title":"TypeScript 【介绍】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/typescript/index.md","filePath":"webs/typescript/index.md","lastUpdated":1716256931000}'),e={name:"webs/typescript/index.md"},p=l(`<h1 id="typescript-【介绍】" tabindex="-1">TypeScript 【介绍】 <a class="header-anchor" href="#typescript-【介绍】" aria-label="Permalink to &quot;TypeScript 【介绍】&quot;">​</a></h1><blockquote><p>TypeScript相当于JavaScript的基础上添加<code>静态类型</code>, 即人为添加的一种编程约束和用法提示, 为开发工具提供更多的验证和帮助, 提高代码质量, 减少错误</p></blockquote><h2 id="类型声明" tabindex="-1">类型声明 <a class="header-anchor" href="#类型声明" aria-label="Permalink to &quot;类型声明&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">// 声明类型为 string</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> a</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 推断类型为 string</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> b </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &#39;xxx&#39;</span><span style="color:#F8F8F2;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="tsc" tabindex="-1">tsc <a class="header-anchor" href="#tsc" aria-label="Permalink to &quot;tsc&quot;">​</a></h2><ul><li>TS编译器, 即将TS编译成JS</li></ul><h2 id="架构" tabindex="-1">架构 <a class="header-anchor" href="#架构" aria-label="Permalink to &quot;架构&quot;">​</a></h2><ul><li>明确类型和完整性组织 <ul><li>不要返回<code>undefined</code><ul><li>数组空数据, 应该返回<code>[]</code>, 即<code>arr: any[]</code>, 而不是<code>arr?: any[]</code></li><li>字符串空数据, 应该返回\`\`, 即<code>str: string</code>, 而不是<code>str?: string</code></li></ul></li><li>服务器返回字段要完整, 即使返回数据为空, 都要保留<code>[]</code>, \`\`, 而不是返回缺省值, 或<code>null</code></li></ul></li></ul><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">import</span><span style="color:#F92672;"> type</span><span style="color:#F8F8F2;"> {ElForm} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;element-plus/es&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> {ElLoading, </span><span style="color:#F92672;">type</span><span style="color:#F8F8F2;"> LoadingOptions} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;element-plus&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">interface</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">State</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	count</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> number</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">type</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">CounterAction</span><span style="color:#F92672;"> =</span></span>
<span class="line"><span style="color:#F92672;">	|</span><span style="color:#F8F8F2;"> { type</span><span style="color:#F92672;">:</span><span style="color:#E6DB74;"> &quot;reset&quot;</span><span style="color:#F8F8F2;"> }</span></span>
<span class="line"><span style="color:#F92672;">	|</span><span style="color:#F8F8F2;"> { type</span><span style="color:#F92672;">:</span><span style="color:#E6DB74;"> &quot;setCount&quot;</span><span style="color:#F8F8F2;">; value</span><span style="color:#F92672;">:</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">State</span><span style="color:#F8F8F2;">[</span><span style="color:#E6DB74;">&quot;count&quot;</span><span style="color:#F8F8F2;">] }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">interface</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">TSLayout</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	// 主题-是否深色</span></span>
<span class="line"><span style="color:#F8F8F2;">	isDark</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> boolean</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#88846F;">	// 是否显示 面包屑</span></span>
<span class="line"><span style="color:#F8F8F2;">	isCrumb</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> boolean</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#88846F;">	// 是否显示 顶部栏</span></span>
<span class="line"><span style="color:#F8F8F2;">	isHeader</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> boolean</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#88846F;">	// 是否显示logo</span></span>
<span class="line"><span style="color:#F8F8F2;">	showLogo</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> boolean</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/**</span></span>
<span class="line"><span style="color:#88846F;"> * 修改布局配置的值</span></span>
<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#F8F8F2;"> key</span><span style="color:#88846F;"> 布局配置集合的key</span></span>
<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#F8F8F2;"> value</span><span style="color:#88846F;"> 修改后的值</span></span>
<span class="line"><span style="color:#88846F;"> */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#A6E22E;"> updateLayout</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> &lt;</span><span style="color:#A6E22E;text-decoration:underline;">T</span><span style="color:#F92672;"> extends</span><span style="color:#F92672;"> keyof</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">TSLayout</span><span style="color:#F8F8F2;">&gt;(</span></span>
<span class="line"><span style="color:#FD971F;font-style:italic;">	key</span><span style="color:#F92672;">:</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">T</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#FD971F;font-style:italic;">	value</span><span style="color:#F92672;">:</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">TSLayout</span><span style="color:#F8F8F2;">[</span><span style="color:#A6E22E;text-decoration:underline;">T</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	layout[key] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> value;</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 忽略特定的类型错误</span></span>
<span class="line"><span style="color:#88846F;">// @ts-expect-error 7016</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="内置" tabindex="-1">内置 <a class="header-anchor" href="#内置" aria-label="Permalink to &quot;内置&quot;">​</a></h2><ul><li>对象递归可选 <ul><li><code>type Partial&lt;T&gt; = { [P in keyof T]?: T[P] | undefined; }</code></li></ul></li></ul><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">type</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">TSXy</span><span style="color:#F92672;"> =</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">Partial</span><span style="color:#F8F8F2;">(&lt;{a</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span><span style="color:#F8F8F2;">; b</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span><span style="color:#F8F8F2;">}&gt;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 新对象继承部分属性</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> xy</span><span style="color:#F92672;">:</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">TSXy</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	a: </span><span style="color:#E6DB74;">&#39;&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">interface</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">TSAb</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	a</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">	b</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> string</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 更新部分参数</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#A6E22E;"> xy</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">arg</span><span style="color:#F92672;">:</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">Partial</span><span style="color:#F8F8F2;">&lt;</span><span style="color:#A6E22E;text-decoration:underline;">TSAb</span><span style="color:#F8F8F2;">&gt;) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	// 只用到 arg.a</span></span>
<span class="line"><span style="color:#F8F8F2;">	console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(arg.a);</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="文献-🎨" tabindex="-1">文献 🎨 <a class="header-anchor" href="#文献-🎨" aria-label="Permalink to &quot;文献 🎨&quot;">​</a></h2><ul><li><p><a href="https://www.tslang.cn/docs" target="_blank" rel="noreferrer">文档</a></p><ul><li>查看左侧的 <code>手册指南</code>, <code>声明文件</code>, <code>项目配置</code></li></ul></li><li><p><a href="https://ts.xcatliu.com/introduction/what-is-typescript.html" target="_blank" rel="noreferrer">TypeScript 入门教程</a></p></li><li><p><a href="https://jkchao.github.io/typescript-book-chinese" target="_blank" rel="noreferrer">深入理解 TypeScript</a></p></li><li><p><a href="http://www.json2ts.com" target="_blank" rel="noreferrer">js生成ts类型工具</a></p></li></ul>`,18),o=[p];function t(r,c,i,F,y,u){return a(),n("div",null,o)}const m=s(e,[["render",t]]);export{b as __pageData,m as default};
