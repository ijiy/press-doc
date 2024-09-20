import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const d=JSON.parse('{"title":"webview混合开发 【WEB端示例】","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/kf-app/hybrid/for-web.md","filePath":"uniapp/kf-app/hybrid/for-web.md","lastUpdated":1715407916000}'),p={name:"uniapp/kf-app/hybrid/for-web.md"},e=l(`<h1 id="webview混合开发-【web端示例】" tabindex="-1">webview混合开发 【WEB端示例】 <a class="header-anchor" href="#webview混合开发-【web端示例】" aria-label="Permalink to &quot;webview混合开发 【WEB端示例】&quot;">​</a></h1><h2 id="数据接收" tabindex="-1">数据接收 <a class="header-anchor" href="#数据接收" aria-label="Permalink to &quot;数据接收&quot;">​</a></h2><ul><li>链接携带 <ul><li>token</li><li>mode: &#39;prod&#39; 正式环境, &#39;test&#39; 测试环境</li><li>assets: APP资源路径 <ul><li>需要 <code>decodeURIComponent</code> 解码</li><li>资源未加载完成将不会有 <code>assets</code></li></ul></li></ul></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#E6DB74;">&#39;/index.html?mode=test&amp;token=xxx&amp;assets=zzz&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	mode,</span></span>
<span class="line"><span style="color:#F8F8F2;">	token,</span></span>
<span class="line"><span style="color:#F8F8F2;">	assets,</span></span>
<span class="line"><span style="color:#F8F8F2;">} </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Object.</span><span style="color:#A6E22E;">fromEntries</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">new</span><span style="color:#A6E22E;"> URLSearchParams</span><span style="color:#F8F8F2;">(location.search));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>动态注入 <ul><li>assets: APP资源路径 <ul><li>仅当资源未加载完成, 才动态注入资源路径</li><li>需要web初始化完成(<code>getFromApp</code>可接收数据)后通知APP</li></ul></li></ul></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#A6E22E;"> getFromApp</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">vType</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">vData</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F92672;">	switch</span><span style="color:#F8F8F2;"> (vType) {</span></span>
<span class="line"><span style="color:#F92672;">		case</span><span style="color:#E6DB74;"> &#39;assets&#39;</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">			console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(vData);</span></span>
<span class="line"><span style="color:#F92672;">			break</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">		case</span><span style="color:#E6DB74;"> &#39;onShow&#39;</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">			console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;后续可能补充: 后台 -&gt; 前台&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F92672;">			break</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">		case</span><span style="color:#E6DB74;"> &#39;onHide&#39;</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">			console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;后续可能补充: 前台 -&gt; 后台&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F92672;">			break</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="数据上传" tabindex="-1">数据上传 <a class="header-anchor" href="#数据上传" aria-label="Permalink to &quot;数据上传&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#A6E22E;"> postToApp</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">eType</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">eData</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">	uni.webView.</span><span style="color:#A6E22E;">postMessage</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">		data: JSON.</span><span style="color:#A6E22E;">stringify</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">			eType: eType,</span></span>
<span class="line"><span style="color:#F8F8F2;">			eData: eData,</span></span>
<span class="line"><span style="color:#F8F8F2;">		}),</span></span>
<span class="line"><span style="color:#F8F8F2;">	});</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 上传日志</span></span>
<span class="line"><span style="color:#A6E22E;">postToApp</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;logs&#39;</span><span style="color:#F8F8F2;">, [</span></span>
<span class="line"><span style="color:#F8F8F2;">	{</span></span>
<span class="line"><span style="color:#F8F8F2;">		date: Date.</span><span style="color:#A6E22E;">now</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">		desc: </span><span style="color:#E6DB74;">&#39;@P home =&gt; paramId:123&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">	{</span></span>
<span class="line"><span style="color:#F8F8F2;">		date: Date.</span><span style="color:#A6E22E;">now</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">		desc: </span><span style="color:#E6DB74;">&#39;@R url =&gt; {json: ...}&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/*</span></span>
<span class="line"><span style="color:#88846F;">* web初始化完成</span></span>
<span class="line"><span style="color:#88846F;">* 目的是通知APP可以发送数据</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span>
<span class="line"><span style="color:#A6E22E;">postToApp</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;ready&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/**</span></span>
<span class="line"><span style="color:#88846F;"> * 通知APP刷新相关页面</span></span>
<span class="line"><span style="color:#88846F;"> * 在返回前可多次执行</span></span>
<span class="line"><span style="color:#88846F;"> */</span></span>
<span class="line"><span style="color:#A6E22E;">postToApp</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;refresh&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/**</span></span>
<span class="line"><span style="color:#88846F;"> * 返回上一级页面</span></span>
<span class="line"><span style="color:#88846F;"> * 纯粹返回也可使用 uni.webView.navigateBack({ delta: 1 });</span></span>
<span class="line"><span style="color:#88846F;"> */</span></span>
<span class="line"><span style="color:#A6E22E;">postToApp</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;goback&#39;</span><span style="color:#F8F8F2;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="日志格式" tabindex="-1">日志格式 <a class="header-anchor" href="#日志格式" aria-label="Permalink to &quot;日志格式&quot;">​</a></h2><ul><li><p>普通内容</p><ul><li><code>option =&gt; desc</code></li><li>等同于 <code>@C option =&gt; desc</code></li></ul></li><li><p>进入页面</p><ul><li><code>@P home</code></li><li><code>@P test =&gt; urlParam</code></li></ul></li><li><p>接口请求</p><ul><li><code>@R url =&gt; res</code></li></ul></li><li><p>异常信息 (大多数是 catch 抛出, 比如 接口请求, try)</p><ul><li><code>@E url =&gt; errMsg</code></li><li><code>@E try =&gt; errMsg</code></li></ul></li></ul><h2 id="多媒体" tabindex="-1">多媒体 <a class="header-anchor" href="#多媒体" aria-label="Permalink to &quot;多媒体&quot;">​</a></h2><ul><li>音频</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki monokai vp-code"><code><span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">audio</span></span>
<span class="line"><span style="color:#A6E22E;">	id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;id_audio&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">	@ended</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;audioEnd&quot;</span></span>
<span class="line"><span style="color:#F44747;">/</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">	audioCallback: </span><span style="color:#AE81FF;">null</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#A6E22E;">	audioEnd</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F92672;">		if</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.audioCallback) {</span></span>
<span class="line"><span style="color:#FD971F;">			this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">audioCallback</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#FD971F;">			this</span><span style="color:#F8F8F2;">.audioCallback </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> null</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	/**</span></span>
<span class="line"><span style="color:#88846F;">	 * 调用即播放音频</span></span>
<span class="line"><span style="color:#88846F;">	 * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#F8F8F2;"> src</span><span style="color:#88846F;"> 音频路径, 支持网络和本地路径</span></span>
<span class="line"><span style="color:#88846F;">	 * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#F8F8F2;"> callback</span><span style="color:#88846F;"> 音频播放结束的回调函数</span></span>
<span class="line"><span style="color:#88846F;">	 * </span><span style="color:#66D9EF;font-style:italic;">@example</span></span>
<span class="line"><span style="color:#88846F;">		 playAudio(&#39;xx/xxx.mp3&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#88846F;">			 // audio play has ended</span></span>
<span class="line"><span style="color:#88846F;">		 });</span></span>
<span class="line"><span style="color:#88846F;">	 */</span></span>
<span class="line"><span style="color:#A6E22E;">	playAudio</span><span style="color:#F8F8F2;">(src, callback) {</span></span>
<span class="line"><span style="color:#F92672;">		if</span><span style="color:#F8F8F2;"> (id_audio.paused) {</span></span>
<span class="line"><span style="color:#F8F8F2;">			id_audio.src </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> src;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">			id_audio.</span><span style="color:#A6E22E;">play</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">			if</span><span style="color:#F8F8F2;"> (callback) {</span></span>
<span class="line"><span style="color:#FD971F;">				this</span><span style="color:#F8F8F2;">.audioCallback </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> callback;</span></span>
<span class="line"><span style="color:#F8F8F2;">			}</span></span>
<span class="line"><span style="color:#F8F8F2;">		} </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			id_audio.</span><span style="color:#A6E22E;">pause</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	// 停止音频, &quot;返回&quot;或src为空, 都会停止停止音视频</span></span>
<span class="line"><span style="color:#A6E22E;">	stopAudio</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">		id_audio.</span><span style="color:#A6E22E;">pause</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><ul><li>视频</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki monokai vp-code"><code><span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">video</span></span>
<span class="line"><span style="color:#A6E22E;">	id</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;id_video&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">	preload</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;auto&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">	autoplay</span></span>
<span class="line"><span style="color:#A6E22E;">	controls</span></span>
<span class="line"><span style="color:#A6E22E;">	playsinline</span></span>
<span class="line"><span style="color:#A6E22E;">	controlsList</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;nodownload noplaybackrate&quot;</span></span>
<span class="line"><span style="color:#F44747;">/</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">// 赋予本地或网络视频地址, 即自动播放</span></span>
<span class="line"><span style="color:#F8F8F2;">id_video.src </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &#39;xx/xxx.mp4&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">id_video.</span><span style="color:#A6E22E;">addEventListener</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;ended&#39;</span><span style="color:#F8F8F2;">, () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	// 视频播放结束的回调函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">	// 手动结束视频 或 id_video.style.display = &#39;none&#39;;</span></span>
<span class="line"><span style="color:#F8F8F2;">	id_video.src </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &#39;&#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">/*需要指定宽高; display 设置为 block, flex, inline-flex, 以避免底部白边*/</span></span>
<span class="line"><span style="color:#F92672;">video</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">block</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>动态注入<code>&lt;video&gt;</code>将无法自动播放</p>`,19),o=[e];function c(r,t,i,F,b,y){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{d as __pageData,m as default};
