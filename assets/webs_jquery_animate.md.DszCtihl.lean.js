import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const E=JSON.parse('{"title":"jQuery 动画 【animate】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/jquery/animate.md","filePath":"webs/jquery/animate.md","lastUpdated":1694342534000}'),o={name:"webs/jquery/animate.md"};function e(F,s,r,c,t,y){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="jquery-动画-【animate】" tabindex="-1">jQuery 动画 【animate】 <a class="header-anchor" href="#jquery-动画-【animate】" aria-label="Permalink to &quot;jQuery 动画 【animate】&quot;">​</a></h1><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#88846F;">// 显示和隐藏, toggle()</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">show</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;slow&#39;</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// hide()</span></span>
<span class="line"><span style="color:#A6E22E;">	$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">		height: </span><span style="color:#E6DB74;">&#39;show&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		width: </span><span style="color:#E6DB74;">&#39;show&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		opacity: </span><span style="color:#E6DB74;">&#39;show&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}, </span><span style="color:#AE81FF;">600</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 淡入和淡出, fadeToggle()</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">fadeIn</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;normal&#39;</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// fadeOut()</span></span>
<span class="line"><span style="color:#A6E22E;">	$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">		opacity: </span><span style="color:#E6DB74;">&#39;show&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}, </span><span style="color:#AE81FF;">400</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 划入和划出, slideToggle()</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">slideDown</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;fast&#39;</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// slideUp()</span></span>
<span class="line"><span style="color:#A6E22E;">	$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">		height: </span><span style="color:#E6DB74;">&#39;show&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}, </span><span style="color:#AE81FF;">200</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">	$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">stop</span><span style="color:#F8F8F2;">().</span><span style="color:#A6E22E;">slideToggle</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;slow&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#A6E22E;">		$</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">is</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;:hidden&#39;</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">?</span><span style="color:#A6E22E;"> $</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">addClass</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;x&#39;</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">:</span><span style="color:#A6E22E;"> $</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">removeClass</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;x&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">	});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 渐变</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">fadeTo</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">.1</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#A6E22E;">	$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">		opacity: </span><span style="color:#AE81FF;">.1</span></span>
<span class="line"><span style="color:#F8F8F2;">	}, </span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 累积动画</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">	width: </span><span style="color:#E6DB74;">&#39;+=10&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">}, </span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 同时动画</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">	width: </span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">	height: </span><span style="color:#AE81FF;">100</span></span>
<span class="line"><span style="color:#F8F8F2;">}, </span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 顺序动画</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">	width: </span><span style="color:#AE81FF;">100</span></span>
<span class="line"><span style="color:#F8F8F2;">}, </span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">	height: </span><span style="color:#AE81FF;">100</span></span>
<span class="line"><span style="color:#F8F8F2;">}, </span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 非动画插队执行</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">	width: </span><span style="color:#AE81FF;">100</span></span>
<span class="line"><span style="color:#F8F8F2;">}).</span><span style="color:#A6E22E;">css</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;height&#39;</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 停止动画</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">stop</span><span style="color:#F8F8F2;">().</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({ </span><span style="color:#88846F;">// 结束当前动画, 然后执行队列中其他动画</span></span>
<span class="line"><span style="color:#F8F8F2;">	width: </span><span style="color:#AE81FF;">100</span></span>
<span class="line"><span style="color:#F8F8F2;">});</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">stop</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// 结束当前动画, 并直接进入动画的末状态, 然后执行队列中其他动画</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">stop</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({ </span><span style="color:#88846F;">// 结束当前和队列中的动画, 队列中没动画就不需要true参数</span></span>
<span class="line"><span style="color:#F8F8F2;">	width: </span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">	height: </span><span style="color:#AE81FF;">100</span></span>
<span class="line"><span style="color:#F8F8F2;">});</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">stop</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// 结束当前和队列中的动画, 并直接进入动画的末状态</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 延迟动画</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">	width: </span><span style="color:#AE81FF;">100</span></span>
<span class="line"><span style="color:#F8F8F2;">}).</span><span style="color:#A6E22E;">delay</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">fadeOut</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 判断动画状态</span></span>
<span class="line"><span style="color:#F92672;">!</span><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">is</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;:animated&#39;</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#A6E22E;"> $</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;p&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">	width: </span><span style="color:#AE81FF;">100</span></span>
<span class="line"><span style="color:#F8F8F2;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 同级变化</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">toggleClass</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;x&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">siblings</span><span style="color:#F8F8F2;">().</span><span style="color:#A6E22E;">removeClass</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;x&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">siblings</span><span style="color:#F8F8F2;">().</span><span style="color:#A6E22E;">removeClass</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;x&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">end</span><span style="color:#F8F8F2;">().</span><span style="color:#A6E22E;">toggleClass</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;x&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 运动到页面底部</span></span>
<span class="line"><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;html, body&#39;</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">animate</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">	scrollTop: </span><span style="color:#A6E22E;">$</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;body&#39;</span><span style="color:#F8F8F2;">)[</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">].scrollHeight</span></span>
<span class="line"><span style="color:#F8F8F2;">}, </span><span style="color:#AE81FF;">300</span><span style="color:#F8F8F2;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div>`,2)]))}const b=n(o,[["render",e]]);export{E as __pageData,b as default};
