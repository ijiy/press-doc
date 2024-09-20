import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const m=JSON.parse('{"title":"webview混合开发 【APP端示例】","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/kf-app/hybrid/for-app.md","filePath":"uniapp/kf-app/hybrid/for-app.md","lastUpdated":1705029044000}'),p={name:"uniapp/kf-app/hybrid/for-app.md"},e=l(`<h1 id="webview混合开发-【app端示例】" tabindex="-1">webview混合开发 【APP端示例】 <a class="header-anchor" href="#webview混合开发-【app端示例】" aria-label="Permalink to &quot;webview混合开发 【APP端示例】&quot;">​</a></h1><ul><li><a href="./for-web">WEB端示例</a></li></ul><h2 id="nvue页面示例" tabindex="-1">nvue页面示例 <a class="header-anchor" href="#nvue页面示例" aria-label="Permalink to &quot;nvue页面示例&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">web-view</span></span>
<span class="line"><span style="color:#A6E22E;">		ref</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;ref_web&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		:</span><span style="color:#A6E22E;">src</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">webSrc</span><span style="color:#F8F8F2;">&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">		style</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#66D9EF;font-style:italic;">flex</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">;</span><span style="color:#F8F8F2;">&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		@</span><span style="color:#A6E22E;">on-post-message</span><span style="color:#F8F8F2;">=</span><span style="color:#F8F8F2;">&quot;</span><span style="color:#F8F8F2;">onPostMessage</span><span style="color:#F8F8F2;">&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">	/&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#A6E22E;"> setup</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		shallowRef,</span></span>
<span class="line"><span style="color:#F8F8F2;">	} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;vue&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		onLoad,</span></span>
<span class="line"><span style="color:#F8F8F2;">		onUnload,</span></span>
<span class="line"><span style="color:#F8F8F2;">	} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;@dcloudio/uni-app&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">	import</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		useStore,</span></span>
<span class="line"><span style="color:#F8F8F2;">	} </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;@/store&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#F8F8F2;"> store </span><span style="color:#F92672;">=</span><span style="color:#A6E22E;"> useStore</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	// ref webview</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#F8F8F2;"> ref_web </span><span style="color:#F92672;">=</span><span style="color:#A6E22E;"> shallowRef</span><span style="color:#F8F8F2;">({});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	// 向web传递 加载好的本地资源路径</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#A6E22E;"> evalAssets</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		ref_web.value.</span><span style="color:#A6E22E;">evalJs</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">\`getAppData(&quot;assets&quot;, </span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">JSON.</span><span style="color:#A6E22E;">stringify</span><span style="color:#F8F8F2;">(store.file.assetsPath)</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">)\`</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">	};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	// web 是否初始化完毕</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	let</span><span style="color:#F8F8F2;"> webReady;</span></span>
<span class="line"><span style="color:#88846F;">	// 资源是否加载完毕</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	let</span><span style="color:#F8F8F2;"> assetsReady;</span></span>
<span class="line"><span style="color:#88846F;">	// 接收数据</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	let</span><span style="color:#F8F8F2;"> detailData;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	// web 初始化完毕</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#A6E22E;"> webIsReady</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">		if</span><span style="color:#F8F8F2;"> (webReady) {</span></span>
<span class="line"><span style="color:#A6E22E;">			evalAssets</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">		} </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			assetsReady </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> true</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	// 接收web的数据</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#A6E22E;"> onPostMessage</span><span style="color:#F92672;"> =</span><span style="color:#FD971F;font-style:italic;"> evt</span><span style="color:#66D9EF;font-style:italic;"> =&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		detailData </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> JSON.</span><span style="color:#A6E22E;">parse</span><span style="color:#F8F8F2;">(evt.detail.data);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">		switch</span><span style="color:#F8F8F2;"> (detailData.eType) {</span></span>
<span class="line"><span style="color:#F92672;">			case</span><span style="color:#E6DB74;"> &#39;goback&#39;</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">				uni.</span><span style="color:#A6E22E;">navigateBack</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">					delta: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">					animationType: </span><span style="color:#E6DB74;">&#39;fade-out&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				});</span></span>
<span class="line"><span style="color:#F92672;">				break</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">			case</span><span style="color:#E6DB74;"> &#39;refresh&#39;</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">				uni.</span><span style="color:#A6E22E;">$emit</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;web_refresh&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F92672;">				break</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">			case</span><span style="color:#E6DB74;"> &#39;logs&#39;</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">				uni.</span><span style="color:#A6E22E;">$emit</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;web_log&#39;</span><span style="color:#F8F8F2;">, detailData.eData.</span><span style="color:#A6E22E;">map</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">item</span><span style="color:#66D9EF;font-style:italic;"> =&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">					item.isWeb </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> true</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">					return</span><span style="color:#F8F8F2;"> item;</span></span>
<span class="line"><span style="color:#F8F8F2;">				}));</span></span>
<span class="line"><span style="color:#F92672;">				break</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">			case</span><span style="color:#E6DB74;"> &#39;ready&#39;</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F92672;">				if</span><span style="color:#F8F8F2;"> (assetsReady) {</span></span>
<span class="line"><span style="color:#A6E22E;">					evalAssets</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">				} </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">					webReady </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> true</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">				}</span></span>
<span class="line"><span style="color:#F92672;">				break</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	// 最终跳转地址</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#F8F8F2;"> webSrc </span><span style="color:#F92672;">=</span><span style="color:#A6E22E;"> shallowRef</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#88846F;">	// 未加载完资源的地址</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	let</span><span style="color:#F8F8F2;"> wSrc </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> \`/index.html?token=</span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">store.userInfo.token</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	let</span><span style="color:#F8F8F2;"> subLoading;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">	onLoad</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#88846F;">		// 本地调试地址或远程地址, 如 http://192.168.1.1:8081</span></span>
<span class="line"><span style="color:#F8F8F2;">		localDomain,</span></span>
<span class="line"><span style="color:#88846F;">		// 打包环境: &#39;prod&#39; 正式环境, &#39;test&#39; 测试环境</span></span>
<span class="line"><span style="color:#F8F8F2;">		mode,</span></span>
<span class="line"><span style="color:#F8F8F2;">	} </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		wSrc </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> localDomain</span></span>
<span class="line"><span style="color:#F92672;">			?</span><span style="color:#E6DB74;"> \`</span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">localDomain</span><span style="color:#F92672;">}\${</span><span style="color:#F8F8F2;">wSrc</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">\`</span></span>
<span class="line"><span style="color:#F92672;">			:</span><span style="color:#E6DB74;"> \`/html</span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">wSrc</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">		wSrc </span><span style="color:#F92672;">+=</span><span style="color:#E6DB74;"> \`&amp;mode=</span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">mode</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">		if</span><span style="color:#F8F8F2;"> (</span><span style="color:#E6DB74;">&#39;判断资源加载完成&#39;</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">			webSrc.value </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> \`</span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">wSrc</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">&amp;assets=</span><span style="color:#F92672;">\${</span><span style="color:#A6E22E;">encodeURIComponent</span><span style="color:#F8F8F2;">(store.file.assetsPath)</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">\`</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		} </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			webSrc.value </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> wSrc;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">			// 通过 subNVues, 自定义加载界面</span></span>
<span class="line"><span style="color:#F8F8F2;">			subLoading </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> uni.</span><span style="color:#A6E22E;">getSubNVueById</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;sub_loading&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			subLoading.</span><span style="color:#A6E22E;">show</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;none&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			uni.</span><span style="color:#A6E22E;">$once</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;loading-complete&#39;</span><span style="color:#F8F8F2;">, webIsReady);</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">	onUnload</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		subLoading </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> uni.</span><span style="color:#A6E22E;">$off</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;loading-complete&#39;</span><span style="color:#F8F8F2;">, webIsReady);</span></span>
<span class="line"><span style="color:#F8F8F2;">	});</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br></div></div>`,4),o=[e];function t(r,c,F,i,y,b){return a(),n("div",null,o)}const E=s(p,[["render",t]]);export{m as __pageData,E as default};
