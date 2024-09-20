import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const m=JSON.parse('{"title":"jQuery 请求 【ajax】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/jquery/ajax.md","filePath":"webs/jquery/ajax.md","lastUpdated":1715407916000}'),p={name:"webs/jquery/ajax.md"},e=l(`<h1 id="jquery-请求-【ajax】" tabindex="-1">jQuery 请求 【ajax】 <a class="header-anchor" href="#jquery-请求-【ajax】" aria-label="Permalink to &quot;jQuery 请求 【ajax】&quot;">​</a></h1><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;!</span><span style="color:#F92672;">DOCTYPE</span><span style="color:#A6E22E;"> html</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">html</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;en&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">meta</span><span style="color:#A6E22E;"> charset</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;UTF-8&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;Document&lt;/</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">form</span><span style="color:#A6E22E;"> onsubmit</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#A6E22E;">formSubmit</span><span style="color:#E6DB74;">(</span><span style="color:#F8F8F2;">event</span><span style="color:#E6DB74;">)&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">form</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">script</span><span style="color:#A6E22E;"> src</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js&quot;</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		$.</span><span style="color:#A6E22E;">ajaxSetup</span><span style="color:#F8F8F2;">({ </span><span style="color:#88846F;">// 全局配置</span></span>
<span class="line"><span style="color:#F8F8F2;">			type: String, </span><span style="color:#88846F;">// &#39;GET&#39;, &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#F8F8F2;">			timeout: Number,</span></span>
<span class="line"><span style="color:#F8F8F2;">		});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">		$</span><span style="color:#F8F8F2;">(document)</span></span>
<span class="line"><span style="color:#F8F8F2;">		.</span><span style="color:#A6E22E;">ajaxSuccess</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">		.</span><span style="color:#A6E22E;">ajaxError</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">		.</span><span style="color:#A6E22E;">ajaxComplete</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">		.</span><span style="color:#A6E22E;">ajaxSend</span><span style="color:#F8F8F2;">() </span><span style="color:#88846F;">// 发送前</span></span>
<span class="line"><span style="color:#F8F8F2;">		.</span><span style="color:#A6E22E;">ajaxStart</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">		.</span><span style="color:#A6E22E;">ajaxStop</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		$.</span><span style="color:#A6E22E;">ajax</span><span style="color:#F8F8F2;">().</span><span style="color:#A6E22E;">abort</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		function</span><span style="color:#A6E22E;"> formSubmit</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">event</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">			event.</span><span style="color:#A6E22E;">preventDefault</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			$.</span><span style="color:#A6E22E;">ajax</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">				url: String,</span></span>
<span class="line"><span style="color:#F8F8F2;">				data: {},</span></span>
<span class="line"><span style="color:#88846F;">				// &#39;GET&#39;, &#39;POST&#39;</span></span>
<span class="line"><span style="color:#F8F8F2;">				type: String,</span></span>
<span class="line"><span style="color:#88846F;">				// 返回数据类型: html, jsonp...</span></span>
<span class="line"><span style="color:#F8F8F2;">				dataType: String,</span></span>
<span class="line"><span style="color:#88846F;">				// 请求超时时间</span></span>
<span class="line"><span style="color:#F8F8F2;">				timeout: Number,</span></span>
<span class="line"><span style="color:#88846F;">				// true, 是否异步</span></span>
<span class="line"><span style="color:#F8F8F2;">				async: Boolean,</span></span>
<span class="line"><span style="color:#88846F;">				// false, 是否跨域</span></span>
<span class="line"><span style="color:#F8F8F2;">				crossDomain: Boolean,</span></span>
<span class="line"><span style="color:#88846F;">				// false, 是否开启缓存</span></span>
<span class="line"><span style="color:#F8F8F2;">				cache: Boolean,</span></span>
<span class="line"><span style="color:#88846F;">				// true, 是否触发全局ajax事件, 如 ajaxStart</span></span>
<span class="line"><span style="color:#F8F8F2;">				global: Boolean,</span></span>
<span class="line"><span style="color:#88846F;">				// 编码</span></span>
<span class="line"><span style="color:#F8F8F2;">				contentType: String,</span></span>
<span class="line"><span style="color:#88846F;">				// 指定当前ajax的关联对象</span></span>
<span class="line"><span style="color:#F8F8F2;">				context: Object,</span></span>
<span class="line"><span style="color:#88846F;">				// false, 是否等一个请求完才允许继续请求</span></span>
<span class="line"><span style="color:#F8F8F2;">				ifModified: Boolean,</span></span>
<span class="line"><span style="color:#88846F;">				// false, 是否采用传统序列化数据</span></span>
<span class="line"><span style="color:#F8F8F2;">				traditional: Boolean,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">				success</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">status</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">xhr</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#A6E22E;">				error</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">xhr</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">status</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">text</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#A6E22E;">				complete</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">xhr</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">status</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#88846F;">				// 发送前</span></span>
<span class="line"><span style="color:#A6E22E;">				beforeSend</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">				},</span></span>
<span class="line"><span style="color:#F8F8F2;">			})</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">html</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><h2 id="文献-🎨" tabindex="-1">文献 🎨 <a class="header-anchor" href="#文献-🎨" aria-label="Permalink to &quot;文献 🎨&quot;">​</a></h2><ul><li><p><a href="https://www.jquery123.com" target="_blank" rel="noreferrer">jQuery官网</a></p></li><li><p><a href="https://www.jquery123.com" target="_blank" rel="noreferrer">jQuery中文网</a></p></li></ul>`,4),t=[e];function o(r,c,F,i,y,b){return a(),n("div",null,t)}const E=s(p,[["render",o]]);export{m as __pageData,E as default};
