import{_ as e,c as s,a0 as l,o}from"./chunks/framework.Bakaa70P.js";const m=JSON.parse('{"title":"APP视频支持","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/kf-app/sdk/video.md","filePath":"uniapp/kf-app/sdk/video.md","lastUpdated":1715407916000}'),n={name:"uniapp/kf-app/sdk/video.md"};function p(t,a,i,r,d,c){return o(),s("div",null,a[0]||(a[0]=[l('<h1 id="app视频支持" tabindex="-1">APP视频支持 <a class="header-anchor" href="#app视频支持" aria-label="Permalink to &quot;APP视频支持&quot;">​</a></h1><h2 id="云打包配置" tabindex="-1">云打包配置 <a class="header-anchor" href="#云打包配置" aria-label="Permalink to &quot;云打包配置&quot;">​</a></h2><ul><li>manifest.json -&gt; app-plus -&gt; modules</li></ul><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#E6DB74;">&quot;VideoPlayer&quot;</span><span style="color:#F8F8F2;">: {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安卓离线配置" tabindex="-1">安卓离线配置 <a class="header-anchor" href="#安卓离线配置" aria-label="Permalink to &quot;安卓离线配置&quot;">​</a></h2><ul><li><p>app\\libs</p><ul><li>media-release.aar</li><li>weex_videoplayer-release.aar</li></ul></li><li><p>app\\src\\main\\assets\\data\\dcloud_properties.xml -&gt; <code>&lt;features&gt;</code></p></li></ul><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">feature</span><span style="color:#A6E22E;"> name</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;VideoPlayer&quot;</span><span style="color:#A6E22E;"> value</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;io.dcloud.media.MediaFeatureImpl&quot;</span><span style="color:#F8F8F2;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',7)]))}const b=e(n,[["render",p]]);export{m as __pageData,b as default};
