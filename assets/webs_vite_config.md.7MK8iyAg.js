import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const d=JSON.parse('{"title":"vite 【配置】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/vite/config.md","filePath":"webs/vite/config.md","lastUpdated":1694342534000}'),p={name:"webs/vite/config.md"},e=l(`<h1 id="vite-【配置】" tabindex="-1">vite 【配置】 <a class="header-anchor" href="#vite-【配置】" aria-label="Permalink to &quot;vite 【配置】&quot;">​</a></h1><p>vite.config.ts</p><h2 id="读取环境" tabindex="-1">读取环境 <a class="header-anchor" href="#读取环境" aria-label="Permalink to &quot;读取环境&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	defineConfig,</span></span>
<span class="line"><span style="color:#F8F8F2;">	loadEnv,</span></span>
<span class="line"><span style="color:#F8F8F2;">} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;vite&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#A6E22E;">loadEnv</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;development&#39;</span><span style="color:#F8F8F2;">, process.</span><span style="color:#A6E22E;">cwd</span><span style="color:#F8F8F2;">()).VITE_USER_NODE_ENV </span><span style="color:#F92672;">===</span><span style="color:#E6DB74;"> &#39;development&#39;</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#88846F;">	// 调试环境</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">export</span><span style="color:#F92672;"> default</span><span style="color:#A6E22E;"> defineConfig</span><span style="color:#F8F8F2;">(({</span><span style="color:#FD971F;font-style:italic;">command</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">mode</span><span style="color:#F8F8F2;">}) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	// 根据当前工作目录中的 \`mode\` 加载 .env 文件</span></span>
<span class="line"><span style="color:#88846F;">	// mode: &#39;development&#39;, &#39;production&#39;</span></span>
<span class="line"><span style="color:#88846F;">	// 设置第三个参数为 &#39;&#39;, 来加载所有环境变量, 而不管是否有 \`VITE_\` 前缀</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#F8F8F2;"> env </span><span style="color:#F92672;">=</span><span style="color:#A6E22E;"> loadEnv</span><span style="color:#F8F8F2;">(mode, process.</span><span style="color:#A6E22E;">cwd</span><span style="color:#F8F8F2;">(), </span><span style="color:#E6DB74;">&#39;&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">	return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">		/**</span></span>
<span class="line"><span style="color:#88846F;">		 * 全局变量定义</span></span>
<span class="line"><span style="color:#88846F;">		 *</span></span>
<span class="line"><span style="color:#88846F;">		 * 构建时被静态替换</span></span>
<span class="line"><span style="color:#88846F;">		 */</span></span>
<span class="line"><span style="color:#F8F8F2;">		define: {</span></span>
<span class="line"><span style="color:#F8F8F2;">			__APP_ENV__: env.APP_ENV,</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	};</span></span>
<span class="line"><span style="color:#F8F8F2;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><ul><li>只能以 VITE_ 开头的变量才被注入项目</li></ul>`,5),o=[e];function t(c,r,i,F,b,y){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
