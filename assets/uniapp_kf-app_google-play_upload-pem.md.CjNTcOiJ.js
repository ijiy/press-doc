import{_ as e,c as o,a0 as l,o as s}from"./chunks/framework.Bakaa70P.js";const y=JSON.parse('{"title":"Google Play 【替换应用签名】","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/kf-app/google-play/upload-pem.md","filePath":"uniapp/kf-app/google-play/upload-pem.md","lastUpdated":1715407916000}'),p={name:"uniapp/kf-app/google-play/upload-pem.md"};function t(n,a,r,i,c,d){return s(),o("div",null,a[0]||(a[0]=[l('<h1 id="google-play-【替换应用签名】" tabindex="-1">Google Play 【替换应用签名】 <a class="header-anchor" href="#google-play-【替换应用签名】" aria-label="Permalink to &quot;Google Play 【替换应用签名】&quot;">​</a></h1><ul><li>通过新应用证书<code>*.keystore</code>, 生成<code>*.pem</code>文件</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#A6E22E;">keytool</span><span style="color:#AE81FF;"> -export</span><span style="color:#AE81FF;"> -rfc</span><span style="color:#AE81FF;"> -keystore</span><span style="color:#E6DB74;"> a.keystore</span><span style="color:#AE81FF;"> -alias</span><span style="color:#E6DB74;"> aaaaaa</span><span style="color:#AE81FF;"> -file</span><span style="color:#E6DB74;"> upload_certificate.pem</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="google-play-管理中心" tabindex="-1">Google Play 管理中心 <a class="header-anchor" href="#google-play-管理中心" aria-label="Permalink to &quot;Google Play 管理中心&quot;">​</a></h2><ul><li>应用 -&gt; 设置 -&gt; 应用签名 -&gt; 请求重置上传密钥 <ul><li>申请后, 两天后生效 (<code>收件箱</code>会收到对应信息)</li></ul></li></ul>',5)]))}const g=e(p,[["render",t]]);export{y as __pageData,g as default};
