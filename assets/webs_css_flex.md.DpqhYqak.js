import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const y=JSON.parse('{"title":"CSS 弹性布局 【flex】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/css/flex.md","filePath":"webs/css/flex.md","lastUpdated":1715407916000}'),e={name:"webs/css/flex.md"},p=l(`<h1 id="css-弹性布局-【flex】" tabindex="-1">CSS 弹性布局 【flex】 <a class="header-anchor" href="#css-弹性布局-【flex】" aria-label="Permalink to &quot;CSS 弹性布局 【flex】&quot;">​</a></h1><blockquote><p>布局方向, 要么针对纵向, 要么针对横向</p></blockquote><h2 id="容器" tabindex="-1">容器 <a class="header-anchor" href="#容器" aria-label="Permalink to &quot;容器&quot;">​</a></h2><ul><li>行与块</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	/* 容器作为块, 独占一行 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">flex</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	/* 容器可与其它行模块, 同行并存 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">inline-flex</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>方向 <ul><li>默认横向</li></ul></li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	/* 内容纵向布局 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	flex-direction</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">column</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>换行 <ul><li>默认不换行</li></ul></li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	/* 内容超出容器自动换行 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	flex-wrap</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">wrap</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>位置 <ul><li>当纵向布局, 以下位置方式相反 (即 justify-content 变为垂直布局)</li><li>文字垂直居中, 需要添加<code>line-height: 1;</code></li></ul></li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	/* 水平居中 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	justify-content</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">center</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	/* 垂直居中 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	align-items</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">center</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	/* 水平左右分开 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	justify-content</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">space-between</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	/* 垂直居底 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	align-items</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">flex-end</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="单元模块" tabindex="-1">单元模块 <a class="header-anchor" href="#单元模块" aria-label="Permalink to &quot;单元模块&quot;">​</a></h2><ul><li>禁止弹性</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	/* 尺寸固定, 不受周边单元模块的挤压 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	flex</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">none</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>自动伸缩</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">div</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	/* 占据剩余空间 */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	flex</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,17),c=[p];function o(i,r,t,F,b,u){return a(),n("div",null,c)}const m=s(e,[["render",o]]);export{y as __pageData,m as default};
