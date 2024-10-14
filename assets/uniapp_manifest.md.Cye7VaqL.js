import{_ as n,c as a,a0 as p,o as l}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"uniapp 【manifest】","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/manifest.md","filePath":"uniapp/manifest.md","lastUpdated":1705132275000}'),t={name:"uniapp/manifest.md"};function e(o,s,r,c,i,u){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="uniapp-【manifest】" tabindex="-1">uniapp 【manifest】 <a class="header-anchor" href="#uniapp-【manifest】" aria-label="Permalink to &quot;uniapp 【manifest】&quot;">​</a></h1><h2 id="manifest-json-app-plus-配置" tabindex="-1"><code>manifest.json</code> -&gt; <code>app-plus</code> 配置 <a class="header-anchor" href="#manifest-json-app-plus-配置" aria-label="Permalink to &quot;\`manifest.json\` -&gt; \`app-plus\` 配置&quot;">​</a></h2><div class="language-json5 line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#E6DB74;">	&quot;usingComponents&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">	// nvue 的编译模式</span></span>
<span class="line"><span style="color:#E6DB74;">	&quot;nvueCompiler&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;uni-app&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">	// nvue 的样式编译模式</span></span>
<span class="line"><span style="color:#E6DB74;">	&quot;nvueStyleCompiler&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;uni-app&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">	// 编译器版本</span></span>
<span class="line"><span style="color:#E6DB74;">	&quot;compilerVersion&quot;</span><span style="color:#F8F8F2;">: 3,</span></span>
<span class="line"><span style="color:#88846F;">	// nvue 首页启动模式,</span></span>
<span class="line"><span style="color:#E6DB74;">	&quot;nvueLaunchMode&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;fast&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">	// 开屏动画</span></span>
<span class="line"><span style="color:#E6DB74;">	&quot;splashscreen&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">		&quot;alwaysShowBeforeRender&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">		&quot;waiting&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">		&quot;autoclose&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">		&quot;delay&quot;</span><span style="color:#F8F8F2;">: 0</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// 分包优化</span></span>
<span class="line"><span style="color:#E6DB74;">	&quot;optimization&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">		&quot;subPackages&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// h5 和 as 版本不一提示紧急处理, 适用于调试, 上线需确保版本一致</span></span>
<span class="line"><span style="color:#E6DB74;">	&quot;compatible&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">		&quot;ignoreVersion&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	//	iOS端软键盘上方横条去除方案</span></span>
<span class="line"><span style="color:#E6DB74;">	&quot;softinputNavBar&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;none&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">	// 使用的模块</span></span>
<span class="line"><span style="color:#E6DB74;">	&quot;modules&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">		&quot;Share&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">			&quot;description&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;分享, 打开小程序&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#E6DB74;">		&quot;Webview-x5&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">			&quot;description&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;x5内核, 仅安卓支持&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#E6DB74;">		&quot;VideoPlayer&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">			&quot;description&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;原生视频, hybrid不需要&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#E6DB74;">		&quot;Bluetooth&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">			&quot;description&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;经典蓝牙&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#88846F;">	// 云打包专用</span></span>
<span class="line"><span style="color:#E6DB74;">	&quot;distribute&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">		&quot;android&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">			&quot;permissions&quot;</span><span style="color:#F8F8F2;">: [</span></span>
<span class="line"><span style="color:#88846F;">				// 需要硬件 - 照相机, dcloud_properties.xml 中启用 &lt;feature name=&quot;Camera&quot;</span></span>
<span class="line"><span style="color:#E6DB74;">				&quot;&lt;uses-feature android:name=</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">android.hardware.camera</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">/&gt;&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">				// 需要硬件 - 照相机 - 自动聚焦</span></span>
<span class="line"><span style="color:#E6DB74;">				&quot;&lt;uses-feature android:name=</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">android.hardware.camera.autofocus</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">/&gt;&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">				// 权限 - 照相机</span></span>
<span class="line"><span style="color:#E6DB74;">				&quot;&lt;uses-permission android:name=</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">android.permission.CAMERA</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">/&gt;&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">				// 权限 - 锁屏运行</span></span>
<span class="line"><span style="color:#E6DB74;">				&quot;&lt;uses-permission android:name=</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">android.permission.WAKE_LOCK</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">/&gt;&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">				// 权限 - 振动</span></span>
<span class="line"><span style="color:#E6DB74;">				&quot;&lt;uses-permission android:name=</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">android.permission.VIBRATE</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#E6DB74;">/&gt;&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">			],</span></span>
<span class="line"><span style="color:#88846F;">			// 安卓CPU兼容 (打的包会更小)</span></span>
<span class="line"><span style="color:#E6DB74;">			&quot;abiFilters&quot;</span><span style="color:#F8F8F2;">: [</span></span>
<span class="line"><span style="color:#E6DB74;">				&quot;armeabi-v7a&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">				&quot;arm64-v8a&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">				&quot;x86&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">			],</span></span>
<span class="line"><span style="color:#88846F;">			// 当前支持版本号</span></span>
<span class="line"><span style="color:#E6DB74;">			&quot;targetSdkVersion&quot;</span><span style="color:#F8F8F2;">: 32,</span></span>
<span class="line"><span style="color:#88846F;">			// 最低支持版本号, 不能低于 21</span></span>
<span class="line"><span style="color:#E6DB74;">			&quot;minSdkVersion&quot;</span><span style="color:#F8F8F2;">: 21,</span></span>
<span class="line"><span style="color:#88846F;">			// 首次打开不显示 存储等权限</span></span>
<span class="line"><span style="color:#E6DB74;">			&quot;permissionExternalStorage&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">				&quot;request&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;none&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">			},</span></span>
<span class="line"><span style="color:#88846F;">			// 首次打开不显示 电话等权限</span></span>
<span class="line"><span style="color:#E6DB74;">			&quot;permissionPhoneState&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#E6DB74;">				&quot;request&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;none&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">			},</span></span>
<span class="line"><span style="color:#88846F;">			// 插件自动配置权限</span></span>
<span class="line"><span style="color:#E6DB74;">			&quot;autoSdkPermissions&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div>`,3)]))}const y=n(t,[["render",e]]);export{b as __pageData,y as default};
