import{_ as a,c as e,a0 as n,o as l}from"./chunks/framework.Bakaa70P.js";const u=JSON.parse('{"title":"CSS 伪元素 【after, before, marker, ...】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/css/after.md","filePath":"webs/css/after.md","lastUpdated":1715407916000}'),o={name:"webs/css/after.md"};function r(p,s,t,c,i,d){return l(),e("div",null,s[0]||(s[0]=[n(`<h1 id="css-伪元素-【after-before-marker-】" tabindex="-1">CSS 伪元素 【after, before, marker, ...】 <a class="header-anchor" href="#css-伪元素-【after-before-marker-】" aria-label="Permalink to &quot;CSS 伪元素 【after, before, marker, ...】&quot;">​</a></h1><h2 id="before-after" tabindex="-1">before, after <a class="header-anchor" href="#before-after" aria-label="Permalink to &quot;before, after&quot;">​</a></h2><blockquote><p><code>::after</code>选择器, 在被选元素的内容后面插入内容 <code>::before</code>选择器, 在被选元素的内容前面插入内容</p></blockquote><ul><li><p>适用于 <a href="./../html/list">列表元素</a>, 也可以用于非<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element" target="_blank" rel="noreferrer">可替换元素</a></p></li><li><p>通过<a href="./content">content</a>属性改变伪元素内容</p></li><li><p>旧语法 <code>:after</code>, <code>:before</code></p></li><li><p>常用于</p><ul><li><a href="./border#太极">格式化为块布局</a></li><li><a href="./content">插入内容和计数器排序</a></li></ul></li></ul><h2 id="marker" tabindex="-1">marker <a class="header-anchor" href="#marker" aria-label="Permalink to &quot;marker&quot;">​</a></h2><blockquote><p><code>::marker</code>选择器, 选择列表项的标记</p></blockquote><ul><li><p>适用于 <a href="./../html/list">列表元素</a></p></li><li><p>通过<a href="./content">content</a>属性改变伪元素内容</p></li></ul><h2 id="滚动条的伪元素" tabindex="-1">滚动条的伪元素 <a class="header-anchor" href="#滚动条的伪元素" aria-label="Permalink to &quot;滚动条的伪元素&quot;">​</a></h2><ul><li><p>如<code>::-webkit-scrollbar</code>等</p></li><li><p>参考<a href="./scroll">CSS 滚动条</a></p></li></ul><h2 id="selection-匹配选中的文本" tabindex="-1"><code>::selection</code>, 匹配选中的文本 <a class="header-anchor" href="#selection-匹配选中的文本" aria-label="Permalink to &quot;\`::selection\`, 匹配选中的文本&quot;">​</a></h2><ul><li>只可改变文本背景或字体颜色</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F92672;">p</span><span style="color:#A6E22E;">::selection</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	background</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">#000</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	color</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">#fff</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="first-line-匹配文本第一行" tabindex="-1"><code>::first-line</code>, 匹配文本第一行 <a class="header-anchor" href="#first-line-匹配文本第一行" aria-label="Permalink to &quot;\`::first-line\`, 匹配文本第一行&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F92672;">p</span><span style="color:#A6E22E;">::first-line</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	font-weight</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">bold</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="first-letter-匹配文本首字符" tabindex="-1"><code>::first-letter</code>, 匹配文本首字符 <a class="header-anchor" href="#first-letter-匹配文本首字符" aria-label="Permalink to &quot;\`::first-letter\`, 匹配文本首字符&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F92672;">p</span><span style="color:#A6E22E;">::first-letter</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	color</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">#f00</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="webkit-input-placeholder-改变placeholder颜色" tabindex="-1"><code>::-webkit-input-placeholder</code>, 改变<code>placeholder</code>颜色 <a class="header-anchor" href="#webkit-input-placeholder-改变placeholder颜色" aria-label="Permalink to &quot;\`::-webkit-input-placeholder\`, 改变\`placeholder\`颜色&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F92672;">input</span><span style="color:#A6E22E;">::-webkit-input-placeholder</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	color</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">#666</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><ul><li>单独的伪元素不应该结合<code>:hover</code>等伪类使用</li></ul><p>错误示例</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#A6E22E;">::after:hover</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>正确示例</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F92672;">div</span><span style="color:#A6E22E;">::after:hover</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>伪元素不应该使用<code>transition</code>等动画</li></ul><p>错误示例</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#A6E22E;">::after</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	transition</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">s</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,27)]))}const F=a(o,[["render",r]]);export{u as __pageData,F as default};
