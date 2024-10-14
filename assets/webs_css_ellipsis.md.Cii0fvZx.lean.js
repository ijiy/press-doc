import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"CSS 【ellipsis 文本溢出省略号】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/css/ellipsis.md","filePath":"webs/css/ellipsis.md","lastUpdated":1715407916000}'),e={name:"webs/css/ellipsis.md"};function o(t,s,c,i,r,F){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="css-【ellipsis-文本溢出省略号】" tabindex="-1">CSS 【ellipsis 文本溢出省略号】 <a class="header-anchor" href="#css-【ellipsis-文本溢出省略号】" aria-label="Permalink to &quot;CSS 【ellipsis 文本溢出省略号】&quot;">​</a></h1><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#88846F;">/* 单行超出省略 */</span></span>
<span class="line"><span style="color:#A6E22E;">.elps</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	overflow</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">hidden</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	text-overflow</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">ellipsis</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	white-space</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">nowrap</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	line-height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1.3</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/* 双行超出省略 -webkit-box-orient: vertical; 要写在标签的style里 */</span></span>
<span class="line"><span style="color:#A6E22E;">.clamp</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	overflow</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">hidden</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">-webkit-box</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	white-space</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">initial</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	word-break</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">break-all</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	-webkit-box-orient</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">vertical</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	-webkit-line-clamp</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	line-height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1.3</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li><p>问题</p><ul><li>flex / grid, 导致容器默认<code>min-width: auto;</code></li></ul></li><li><p>解决</p><ul><li>容器设置<code>min-width: 0;</code></li></ul></li></ul>`,3)]))}const d=n(e,[["render",o]]);export{b as __pageData,d as default};
