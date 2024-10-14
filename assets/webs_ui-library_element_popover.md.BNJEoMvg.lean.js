import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"popover","description":"","frontmatter":{},"headers":[],"relativePath":"webs/ui-library/element/popover.md","filePath":"webs/ui-library/element/popover.md","lastUpdated":1711102103000}'),e={name:"webs/ui-library/element/popover.md"};function t(o,s,r,c,i,F){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="popover" tabindex="-1">popover <a class="header-anchor" href="#popover" aria-label="Permalink to &quot;popover&quot;">​</a></h1><ul><li><code>v-if</code>要在<code>&lt;el-popover&gt;</code>上, 而不是<code>reference</code>的元素上</li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">el-popover</span></span>
<span class="line"><span style="color:#F92672;">	v-if</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">xxx</span><span style="color:#F8F8F2;">&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">	ref</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;popover&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">	placement</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;right&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">	trigger</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;click&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">	:</span><span style="color:#A6E22E;">width</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#AE81FF;">80</span><span style="color:#F8F8F2;">&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;template #reference&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;el-link type=&quot;primary&quot; :underline=&quot;false&quot;&gt; 更多 &lt;/el-link&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/template&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;div&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;el-link</span></span>
<span class="line"><span style="color:#F8F8F2;">			type=&quot;primary&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">			:underline=&quot;false&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">			@click=&quot;xxx(scope.row)&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			x</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;/el-link&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;div class=&quot;mt-10&quot;&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;el-link</span></span>
<span class="line"><span style="color:#F8F8F2;">			type=&quot;primary&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">			:underline=&quot;false&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">			@click=&quot;yyy(scope.row)&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">			y</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;/el-link&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">el-popover</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,3)]))}const y=n(e,[["render",t]]);export{b as __pageData,y as default};
