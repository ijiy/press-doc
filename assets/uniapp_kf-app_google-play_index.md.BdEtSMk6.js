import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"Google Play 【谷歌支付】","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/kf-app/google-play/index.md","filePath":"uniapp/kf-app/google-play/index.md","lastUpdated":1716256931000}'),e={name:"uniapp/kf-app/google-play/index.md"};function o(t,s,r,c,i,F){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="google-play-【谷歌支付】" tabindex="-1">Google Play 【谷歌支付】 <a class="header-anchor" href="#google-play-【谷歌支付】" aria-label="Permalink to &quot;Google Play 【谷歌支付】&quot;">​</a></h1><ul><li><a href="./app-create">创建应用</a></li></ul><h2 id="google-play-管理中心" tabindex="-1">Google Play 管理中心 <a class="header-anchor" href="#google-play-管理中心" aria-label="Permalink to &quot;Google Play 管理中心&quot;">​</a></h2><ul><li>应用 -&gt; 测试 -&gt; 内部测试 -&gt; 创建新的发布版本 <ul><li>测试用户数量 <ul><li>添加测试设备的Google账号 (谷歌邮箱)</li></ul></li><li>在网页中参与测试 <ul><li>复制链接 <ul><li>在手机上打开 <ul><li>网页底部点击接受邀请 <code>ACCEPT INVITE</code></li><li>然后, 在跳转的页面点 <code>Install the public version on Google Play.</code></li><li>点 安装 <code>Install</code></li><li>然后, 卸载应用, 通过相同版本和签名的<code>自定义调试基座</code>调试支付</li></ul></li></ul></li></ul></li></ul></li></ul><h2 id="项目中" tabindex="-1">项目中 <a class="header-anchor" href="#项目中" aria-label="Permalink to &quot;项目中&quot;">​</a></h2><ul><li><p><a href="https://ext.dcloud.net.cn/plugin?id=13827" target="_blank" rel="noreferrer">Google Pay V5</a></p><ul><li>购买 (66.88元) for 云打包 <ul><li>绑定: AppID, 包名</li><li>购买后需要重新打开HBuilderX</li></ul></li></ul></li><li><p>manifest.json</p><ul><li>App原生插件配置 -&gt; 选择云端插件 <ul><li>勾选购买的插件, 并点击确认</li></ul></li></ul></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#88846F;">// #ifdef APP-PLUS</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> GooglePayV5 </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> uni.</span><span style="color:#A6E22E;">requireNativePlugin</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;GT-GooglePay-V5__PayModule&#39;</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#88846F;">// #endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 产品id</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> inappId;</span></span>
<span class="line"><span style="color:#88846F;">// 用户token</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> token;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">onLoad</span><span style="color:#F8F8F2;">(() </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	// #ifdef APP-PLUS</span></span>
<span class="line"><span style="color:#F8F8F2;">	GooglePayV5.</span><span style="color:#A6E22E;">doInit</span><span style="color:#F8F8F2;">({});</span></span>
<span class="line"><span style="color:#88846F;">	// #endif</span></span>
<span class="line"><span style="color:#F8F8F2;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 谷歌订单支付</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#A6E22E;"> googlePay</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">param</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;谷歌支付参数 =&gt; &#39;</span><span style="color:#F8F8F2;">, param);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	GooglePayV5.</span><span style="color:#A6E22E;">doPayAll</span><span style="color:#F8F8F2;">(param, </span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#66D9EF;font-style:italic;"> =&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;谷歌支付结果 =&gt; &#39;</span><span style="color:#F8F8F2;">, res);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">		if</span><span style="color:#F8F8F2;"> (res.code </span><span style="color:#F92672;">===</span><span style="color:#AE81FF;"> 200</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">			const</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">				orderId,</span></span>
<span class="line"><span style="color:#F8F8F2;">				purchaseToken,</span></span>
<span class="line"><span style="color:#F8F8F2;">				signature,</span></span>
<span class="line"><span style="color:#F8F8F2;">				originalJson: purchaseData,</span></span>
<span class="line"><span style="color:#F8F8F2;">			} </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> res.data[</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">			// 订单确认</span></span>
<span class="line"><span style="color:#88846F;">			/*{</span></span>
<span class="line"><span style="color:#88846F;">				token,</span></span>
<span class="line"><span style="color:#88846F;">				orderId,</span></span>
<span class="line"><span style="color:#88846F;">				purchaseToken,</span></span>
<span class="line"><span style="color:#88846F;">				productId,</span></span>
<span class="line"><span style="color:#88846F;">				purchaseData,</span></span>
<span class="line"><span style="color:#88846F;">				signature,</span></span>
<span class="line"><span style="color:#88846F;">			};*/</span></span>
<span class="line"><span style="color:#F8F8F2;">		} </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			uni.</span><span style="color:#A6E22E;">showToast</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">				title: </span><span style="color:#E6DB74;">\`支付失败: </span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">res.code</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				icon: </span><span style="color:#E6DB74;">&#39;none&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">			});</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	});</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 谷歌订单查询</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#A6E22E;"> googleQuery</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	GooglePayV5.</span><span style="color:#A6E22E;">doQuerySku</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">		inapp: [inappId],</span></span>
<span class="line"><span style="color:#F8F8F2;">	}, </span><span style="color:#FD971F;font-style:italic;">res</span><span style="color:#66D9EF;font-style:italic;"> =&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;谷歌订单查询结果 =&gt; &#39;</span><span style="color:#F8F8F2;">, res);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">		if</span><span style="color:#F8F8F2;"> (res.code </span><span style="color:#F92672;">===</span><span style="color:#AE81FF;"> 200</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#A6E22E;">			googlePay</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">				productId: inappId,</span></span>
<span class="line"><span style="color:#F8F8F2;">				offerToken: </span><span style="color:#E6DB74;">&#39;&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">			});</span></span>
<span class="line"><span style="color:#F8F8F2;">		} </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">			uni.</span><span style="color:#A6E22E;">showToast</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">				title: </span><span style="color:#E6DB74;">\`订单查询失败: </span><span style="color:#F92672;">\${</span><span style="color:#F8F8F2;">res.code</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">				icon: </span><span style="color:#E6DB74;">&#39;none&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">			});</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	});</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 创建订单</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#A6E22E;"> payOrder</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> () </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">	// ...生成订单</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">	googleQuery</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><h2 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h2><ul><li><p>只能内部测试, 不要选择开放式测试或封闭式测试</p></li><li><p><a href="./upload-pem">替换应用签名</a></p></li><li><p><a href="./app-publish">上架谷歌市场</a></p></li></ul>`,9)]))}const u=n(e,[["render",o]]);export{b as __pageData,u as default};
