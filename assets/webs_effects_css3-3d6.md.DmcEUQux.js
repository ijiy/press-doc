import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const u=JSON.parse('{"title":"六面体 [CSS3]","description":"","frontmatter":{},"headers":[],"relativePath":"webs/effects/css3-3d6.md","filePath":"webs/effects/css3-3d6.md","lastUpdated":1694342534000}'),p={name:"webs/effects/css3-3d6.md"},t=l(`<h1 id="六面体-css3" tabindex="-1">六面体 [CSS3] <a class="header-anchor" href="#六面体-css3" aria-label="Permalink to &quot;六面体 [CSS3]&quot;">​</a></h1><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;!</span><span style="color:#F92672;">DOCTYPE</span><span style="color:#A6E22E;"> html</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">html</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;en&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">meta</span><span style="color:#A6E22E;"> charset</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;UTF-8&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;Document&lt;/</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">		body</span><span style="color:#F8F8F2;">, </span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			margin</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F92672;">		ul</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			position</span><span style="color:#F8F8F2;">:</span><span style="color:#66D9EF;">relative</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">200</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">200</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			padding</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			margin</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">200</span><span style="color:#F92672;">px</span><span style="color:#66D9EF;"> auto</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-transform-style</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">preserve-3d</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-animation</span><span style="color:#F8F8F2;">: t </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">s</span><span style="color:#66D9EF;"> infinite</span><span style="color:#66D9EF;"> linear</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-transform-origin</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">50</span><span style="color:#F92672;">%</span><span style="color:#AE81FF;"> 50</span><span style="color:#F92672;">%</span><span style="color:#AE81FF;"> 100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F92672;">		li</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			position</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">absolute</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			list-style</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">none</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			background</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">royalblue</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F92672;">		li</span><span style="color:#A6E22E;">:nth-child</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-transform-origin</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#AE81FF;"> 100</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-transform</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rotateY</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">-90</span><span style="color:#F92672;">deg</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			background</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">indigo</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F92672;">		li</span><span style="color:#A6E22E;">:nth-child</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-transform-origin</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">%</span><span style="color:#AE81FF;"> 100</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-transform</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rotateY</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">90</span><span style="color:#F92672;">deg</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			background</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">turquoise</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F92672;">		li</span><span style="color:#A6E22E;">:nth-child</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-transform</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">translateZ</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">200</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			background</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">gold</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F92672;">		li</span><span style="color:#A6E22E;">:nth-child</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-transform-origin</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#66D9EF;"> top</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-transform</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rotateX</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">90</span><span style="color:#F92672;">deg</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			background</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">darkorange</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F92672;">		li</span><span style="color:#A6E22E;">:last-child</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-transform-origin</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#66D9EF;"> bottom</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			-webkit-transform</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rotateX</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">-90</span><span style="color:#F92672;">deg</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			background</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">purple</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F92672;">		@-webkit-keyframes</span><span style="color:#FD971F;font-style:italic;"> t</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			100% {</span><span style="color:#66D9EF;font-style:italic;">-webkit-transform</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rotate3d</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">360</span><span style="color:#F92672;">deg</span><span style="color:#F8F8F2;">)}</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">li</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">ul</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">html</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div>`,2),o=[t];function e(F,r,c,y,i,b){return a(),n("div",null,o)}const E=s(p,[["render",e]]);export{u as __pageData,E as default};
