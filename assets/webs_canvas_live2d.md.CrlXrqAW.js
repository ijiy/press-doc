import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const m=JSON.parse('{"title":"live2d 【二次元看板娘】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/canvas/live2d.md","filePath":"webs/canvas/live2d.md","lastUpdated":1715407916000}'),p={name:"webs/canvas/live2d.md"},e=l(`<h1 id="live2d-【二次元看板娘】" tabindex="-1">live2d 【二次元看板娘】 <a class="header-anchor" href="#live2d-【二次元看板娘】" aria-label="Permalink to &quot;live2d 【二次元看板娘】&quot;">​</a></h1><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;!</span><span style="color:#F92672;">DOCTYPE</span><span style="color:#A6E22E;"> html</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">html</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;en&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">meta</span><span style="color:#A6E22E;"> charset</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;UTF-8&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;Document&lt;/</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">script</span><span style="color:#A6E22E;"> src</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;https://l2dwidget.js.org/lib/L2Dwidget.min.js&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		L2Dwidget.</span><span style="color:#A6E22E;">on</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;*&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">name</span><span style="color:#66D9EF;font-style:italic;"> =&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(name);</span></span>
<span class="line"><span style="color:#F8F8F2;">		}).</span><span style="color:#A6E22E;">init</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">			dialog: {</span></span>
<span class="line"><span style="color:#F8F8F2;">				enable: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">, 							</span><span style="color:#88846F;">// 是否对话</span></span>
<span class="line"><span style="color:#F8F8F2;">				script: {</span></span>
<span class="line"><span style="color:#E6DB74;">					&#39;every idle 10s&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;$hitokoto$&#39;</span><span style="color:#F8F8F2;">, 	</span><span style="color:#88846F;">// 自动对话</span></span>
<span class="line"><span style="color:#E6DB74;">					&#39;tap body&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;用户点击人物的身体&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">					&#39;tap face&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;用户点击人物的脸&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">				}</span></span>
<span class="line"><span style="color:#F8F8F2;">			}</span></span>
<span class="line"><span style="color:#F8F8F2;">		});</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">html</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="文献-🎨" tabindex="-1">文献 🎨 <a class="header-anchor" href="#文献-🎨" aria-label="Permalink to &quot;文献 🎨&quot;">​</a></h2><ul><li><a href="https://github.com/EYHN/hexo-helper-live2d/blob/master/README.zh-CN.md" target="_blank" rel="noreferrer">文档</a></li></ul>`,4),t=[e];function o(r,c,F,i,y,b){return a(),n("div",null,t)}const u=s(p,[["render",o]]);export{m as __pageData,u as default};
