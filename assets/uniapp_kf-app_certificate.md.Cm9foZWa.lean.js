import{_ as a,c as n,a0 as l,o as e}from"./chunks/framework.Bakaa70P.js";const u=JSON.parse('{"title":"签名证书","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/kf-app/certificate.md","filePath":"uniapp/kf-app/certificate.md","lastUpdated":1721206549000}'),p={name:"uniapp/kf-app/certificate.md"};function o(c,s,r,i,t,d){return e(),n("div",null,s[0]||(s[0]=[l(`<h1 id="签名证书" tabindex="-1">签名证书 <a class="header-anchor" href="#签名证书" aria-label="Permalink to &quot;签名证书&quot;">​</a></h1><h2 id="两种生成方式" tabindex="-1">两种生成方式 <a class="header-anchor" href="#两种生成方式" aria-label="Permalink to &quot;两种生成方式&quot;">​</a></h2><ol><li><p><a href="#jdk">JDK</a></p></li><li><p>[Android Studio](#Android Studio)</p></li></ol><h2 id="jdk" tabindex="-1">JDK <a class="header-anchor" href="#jdk" aria-label="Permalink to &quot;JDK&quot;">​</a></h2><ul><li><p><a href="https://www.oracle.com/cn/java/technologies/downloads" target="_blank" rel="noreferrer">JDK</a></p><ul><li>选择<code>JDK 21</code> -&gt; <code>Windows</code> -&gt; <code>x64 Installer</code></li></ul></li><li><p>安装路径</p><ul><li><code>D:\\Java\\jdk-17</code></li></ul></li><li><p>命令提示符</p></li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> cd到用于存放签名证书的目录</span></span>
<span class="line"><span style="color:#66D9EF;">cd</span><span style="color:#E6DB74;"> /d</span><span style="color:#E6DB74;"> D:</span><span style="color:#AE81FF;">\\P</span><span style="color:#E6DB74;">roject</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 设置临时环境变量</span><span style="color:#F8F8F2;"> (相当于 </span><span style="color:#E6DB74;">cd</span><span style="color:#E6DB74;"> /d</span><span style="color:#E6DB74;"> D:</span><span style="color:#AE81FF;">\\J</span><span style="color:#E6DB74;">ava</span><span style="color:#AE81FF;">\\j</span><span style="color:#E6DB74;">dk-21</span><span style="color:#AE81FF;">\\b</span><span style="color:#E6DB74;">in</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#E6DB74;"> PATH=%PATH%</span><span style="color:#F8F8F2;">;</span><span style="color:#A6E22E;">&quot;D:\\Java\\jdk-21\\bin&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">keytool</span><span style="color:#AE81FF;"> -genkey</span><span style="color:#AE81FF;"> -alias</span><span style="color:#E6DB74;"> aaaaaa</span><span style="color:#AE81FF;"> -keyalg</span><span style="color:#E6DB74;"> RSA</span><span style="color:#AE81FF;"> -keysize</span><span style="color:#AE81FF;"> 2048</span><span style="color:#AE81FF;"> -validity</span><span style="color:#AE81FF;"> 36500</span><span style="color:#AE81FF;"> -keystore</span><span style="color:#E6DB74;"> gsm_app.keystore</span></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> aaaaaa,</span><span style="color:#E6DB74;"> 证书别名</span><span style="color:#F8F8F2;"> (要记住: </span><span style="color:#E6DB74;">打包配置需要</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> gsm_app.keystore,</span><span style="color:#E6DB74;"> 导出文件</span><span style="color:#F8F8F2;"> (命名可以是 </span><span style="color:#E6DB74;">公司名称_应用名称,</span><span style="color:#E6DB74;"> 如gsm_app</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 36500,</span><span style="color:#E6DB74;"> 证书有效期</span><span style="color:#F8F8F2;"> (100年)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 输入密钥库口令:</span><span style="color:#F8F8F2;"> (不会显示, </span><span style="color:#E6DB74;">实际已输入,</span><span style="color:#E6DB74;"> 要记住:</span><span style="color:#E6DB74;"> 打包配置需要,</span><span style="color:#E6DB74;"> 查看证书需要</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#A6E22E;">aaaaaa</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 再次输入新口令:</span></span>
<span class="line"><span style="color:#A6E22E;">aaaaaa</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 您的名字与姓氏是什么?</span></span>
<span class="line"><span style="color:#A6E22E;">qp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 您的组织单位名称是什么?</span><span style="color:#F8F8F2;"> (公司全称)</span></span>
<span class="line"><span style="color:#A6E22E;">xxx有限公司</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 您的组织名称是什么?</span><span style="color:#F8F8F2;"> (公司全称)</span></span>
<span class="line"><span style="color:#A6E22E;">xxx有限公司</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 您所在的城市或区域名称是什么?</span></span>
<span class="line"><span style="color:#A6E22E;">厦门市</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 您所在的省/市/自治区名称是什么?</span></span>
<span class="line"><span style="color:#A6E22E;">福建省</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 该单位的双字母国家/地区代码是什么?</span></span>
<span class="line"><span style="color:#A6E22E;">CN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> ...是否正确?</span></span>
<span class="line"><span style="color:#A6E22E;">y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 查看证书信息</span></span>
<span class="line"><span style="color:#A6E22E;">keytool</span><span style="color:#AE81FF;"> -list</span><span style="color:#AE81FF;"> -v</span><span style="color:#AE81FF;"> -keystore</span><span style="color:#E6DB74;"> gsm_app.keystore</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 输入密钥库口令</span></span>
<span class="line"><span style="color:#A6E22E;">aaaaaa</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 复制</span><span style="color:#E6DB74;"> MD5</span></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 复制</span><span style="color:#E6DB74;"> SHA1</span></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 复制</span><span style="color:#E6DB74;"> SHA-256</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="android-studio" tabindex="-1">Android Studio <a class="header-anchor" href="#android-studio" aria-label="Permalink to &quot;Android Studio&quot;">​</a></h2><ul><li><p>前提: <code>Gradle</code>已安装成功</p></li><li><p><code>Build</code> -&gt; <code>Generate Signed Bundle / APK...</code></p><ul><li>勾选<code>APK</code></li><li><code>Next</code></li><li>点击<code>Create new...</code><ul><li><code>Key store path:</code><ul><li>点击右侧的<code>文件夹图标</code> -&gt; 选择<code>D:\\Project\\当前项目目录\\app</code>, 然后<code>File name</code>输入<code>aaaaaa</code> -&gt; <code>OK</code></li></ul></li><li><code>Password:</code> (输入密钥库口令, 要记住) <ul><li><code>aaaaaa</code></li></ul></li><li><code>Confrim:</code> (再次输入新口令) <ul><li><code>aaaaaa</code></li></ul></li><li><code>Alias:</code> (证书别名, 要记住) <ul><li>&#39;aaaaaa&#39;</li></ul></li><li><code>Validity (years)</code> (证书有效期) <ul><li>100</li></ul></li><li><code>First and Last Name:</code> (您的名字与姓氏) <ul><li>qp</li></ul></li><li><code>Organizational Unit:</code> (您的组织单位名称) <ul><li>xxx有限公司</li></ul></li><li><code>Organization:</code> (您的组织名称) <ul><li>xxx有限公司</li></ul></li><li><code>City or Locality:</code> (您所在的城市或区域名称) <ul><li>厦门市</li></ul></li><li><code>State or Province:</code> (您所在的省/市/自治区名称) <ul><li>福建省</li></ul></li><li><code>Country Code (XX):</code> (该单位的双字母国家/地区代码) <ul><li>CN</li></ul></li></ul></li><li><code>OK</code> (此时, 会生成<code>D:\\Project\\当前项目目录\\app\\aaaaaa.jks</code>)</li><li><code>Cancel</code></li></ul></li><li><p>查看证书信息</p><ul><li>app/build.gradle <ul><li><code>keyAlias &#39;key0&#39;</code>, 改成 <code>keyAlias &#39;aaaaaa&#39;</code></li><li><code>keyPassword &#39;123456&#39;</code>, 改成 <code>keyPassword &#39;aaaaaa&#39;</code></li><li><code>storeFile file(&#39;test.jks&#39;)</code>, 改成 <code>storeFile file(&#39;aaaaaa.jks&#39;)</code></li><li><code>storePassword &#39;123456&#39;</code>, 改成 <code>storePassword &#39;aaaaaa&#39;</code></li></ul></li><li>点击<code>Run / Debug Configurations</code> (鼠标hover显示该名称)</li><li>下拉选择<code>Edit Configurations...</code></li><li>点左上角的<code>+</code> -&gt; <code>Gradle</code><ul><li><code>Name:</code> 修改为<code>signingReport</code></li><li><code>Run</code> 输入<code>signingReport</code></li><li><code>Gradle project:</code> 当前项目目录 (默认, 后面查看时要改成<code>D:\\Project\\当前项目目录\\app</code>)</li><li>勾选<code>Store as project file</code><ul><li>把输出目录改成<code>D:\\Project\\当前项目目录\\app</code></li></ul></li><li><code>OK</code></li></ul></li><li>运行<code>signingReport</code><ul><li>复制 MD5: <code>28:BB:98:8A:BA:1B:6C:19:81:D6:69:13:7F:80:84:4C</code></li><li>复制 SHA1: <code>B4:1B:B8:2F:FE:7B:8D:18:4F:2A:AE:C9:8E:0F:FC:73:53:7C:E0:81</code></li><li>复制 SHA-256: <code>B0:F3:55:2A:7F:63:C9:DA:21:64:FF:F1:23:8A:80:08:D0:2A:52:2A:8A:45:25:24:E3:9A:DB:4B:50:61:CB:00</code></li></ul></li></ul></li></ul>`,8)]))}const E=a(p,[["render",o]]);export{u as __pageData,E as default};
