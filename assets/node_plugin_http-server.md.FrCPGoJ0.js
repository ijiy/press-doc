import{_ as s,c as a,o as e,a1 as n}from"./chunks/framework.B3EJgH_4.js";const b=JSON.parse('{"title":"http-server 【本地服务器】","description":"","frontmatter":{},"headers":[],"relativePath":"node/plugin/http-server.md","filePath":"node/plugin/http-server.md","lastUpdated":1715407916000}'),l={name:"node/plugin/http-server.md"},p=n(`<h1 id="http-server-【本地服务器】" tabindex="-1"><a href="https://github.com/http-party/http-server" target="_blank" rel="noreferrer">http-server 【本地服务器】</a> <a class="header-anchor" href="#http-server-【本地服务器】" aria-label="Permalink to &quot;[http-server 【本地服务器】](https://github.com/http-party/http-server)&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">npm</span><span style="color:#E6DB74;"> i</span><span style="color:#E6DB74;"> http-server</span><span style="color:#AE81FF;"> -g</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> cd</span><span style="color:#E6DB74;"> 到项目根目录</span><span style="color:#F8F8F2;"> (根目录下包含 </span><span style="color:#E6DB74;">index.html</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#A6E22E;">http-server</span><span style="color:#AE81FF;"> -c-1</span><span style="color:#AE81FF;"> --port</span><span style="color:#AE81FF;"> 8080</span><span style="color:#AE81FF;"> -P</span><span style="color:#E6DB74;"> http://xx.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#AE81FF;"> -c-1,</span><span style="color:#E6DB74;"> 禁止缓存</span><span style="color:#F8F8F2;"> (调试 </span><span style="color:#E6DB74;">index.html</span><span style="color:#E6DB74;"> 引用的js等资源时必要</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#AE81FF;"> --port,</span><span style="color:#E6DB74;"> 端口</span><span style="color:#F8F8F2;"> (默认8080)</span></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#AE81FF;"> -P,</span><span style="color:#E6DB74;"> 代理</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="移动端访问" tabindex="-1">移动端访问 <a class="header-anchor" href="#移动端访问" aria-label="Permalink to &quot;移动端访问&quot;">​</a></h2><ul><li><p>防火墙和网络保护 -&gt; 关闭<code>专用网络</code>防火墙</p></li><li><p>连接相同局域网</p></li></ul><h2 id="https" tabindex="-1">https <a class="header-anchor" href="#https" aria-label="Permalink to &quot;https&quot;">​</a></h2><ul><li>项目根目录 -&gt; 右键 -&gt; <code>Git Bash Here</code></li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">openssl</span><span style="color:#E6DB74;"> req</span><span style="color:#AE81FF;"> -newkey</span><span style="color:#E6DB74;"> rsa:2048</span><span style="color:#AE81FF;"> -new</span><span style="color:#AE81FF;"> -nodes</span><span style="color:#AE81FF;"> -x509</span><span style="color:#AE81FF;"> -days</span><span style="color:#AE81FF;"> 3650</span><span style="color:#AE81FF;"> -keyout</span><span style="color:#E6DB74;"> key.pem</span><span style="color:#AE81FF;"> -out</span><span style="color:#E6DB74;"> cert.pem</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">http-server</span><span style="color:#AE81FF;"> -S</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,11),o=[p];function t(r,c,i,d,h,u){return e(),a("div",null,o)}const F=s(l,[["render",t]]);export{b as __pageData,F as default};
