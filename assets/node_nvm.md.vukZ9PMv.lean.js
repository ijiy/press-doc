import{_ as s,c as a,a0 as l,o as e}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"nvm 【切换node版本】","description":"","frontmatter":{},"headers":[],"relativePath":"node/nvm.md","filePath":"node/nvm.md","lastUpdated":1718695853000}'),p={name:"node/nvm.md"};function r(o,n,i,t,c,m){return e(),a("div",null,n[0]||(n[0]=[l(`<h1 id="nvm-【切换node版本】" tabindex="-1">nvm 【切换node版本】 <a class="header-anchor" href="#nvm-【切换node版本】" aria-label="Permalink to &quot;nvm 【切换node版本】&quot;">​</a></h1><ul><li><p><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">下载</a></p><ul><li><a href="https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.exe" target="_blank" rel="noreferrer">nvm-setup.exe</a></li></ul></li><li><p>卸载原有的 nodejs</p></li><li><p>安装 -&gt; D:\\nvm -&gt; D:\\nodes</p></li><li><p>开始 -&gt; Windows 系统 -&gt; 命令提示符 (如果系统账户不是<code>Administrator</code>, 需要执行<code>右键 -&gt; 更多 -&gt; 以管理员身份运行</code>)</p></li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 设置node和npm的下载镜像</span></span>
<span class="line"><span style="color:#A6E22E;">nvm</span><span style="color:#E6DB74;"> node_mirror</span><span style="color:#E6DB74;"> https://npmmirror.com/mirrors/node/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">nvm</span><span style="color:#E6DB74;"> npm_mirror</span><span style="color:#E6DB74;"> https://npmmirror.com/mirrors/npm/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 查看可安装的版本</span><span style="color:#F8F8F2;"> (ls </span><span style="color:#E6DB74;">即</span><span style="color:#E6DB74;"> list</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#A6E22E;">nvm</span><span style="color:#E6DB74;"> ls</span><span style="color:#E6DB74;"> available</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 安装指定版本</span></span>
<span class="line"><span style="color:#A6E22E;">nvm</span><span style="color:#E6DB74;"> install</span><span style="color:#AE81FF;"> 14.16.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 卸载指定版本,</span><span style="color:#E6DB74;"> 或删除nvm安装目录下的对应文件夹</span></span>
<span class="line"><span style="color:#A6E22E;">nvm</span><span style="color:#E6DB74;"> uninstall</span><span style="color:#AE81FF;"> 14.16.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 使用指定版本</span></span>
<span class="line"><span style="color:#A6E22E;">nvm</span><span style="color:#E6DB74;"> use</span><span style="color:#AE81FF;"> 14.16.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 查看已安装的版本</span></span>
<span class="line"><span style="color:#A6E22E;">nvm</span><span style="color:#E6DB74;"> ls</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="手动下载" tabindex="-1">手动下载 <a class="header-anchor" href="#手动下载" aria-label="Permalink to &quot;手动下载&quot;">​</a></h2><ul><li><p>node版本安装失败的可能情况</p><ul><li>Could not retrieve <a href="https://npmmirror.com/mirrors/node/index.json" target="_blank" rel="noreferrer">https://npmmirror.com/mirrors/node/index.json</a>.</li><li>部分node版本可能安装失败</li><li>最新node版本可能无法安装</li></ul></li><li><p>解决方案</p><ul><li>前往<a href="https://nodejs.org/dist" target="_blank" rel="noreferrer">所有版本列表</a>, 找到想要的版本 <ul><li><a href="https://nodejs.org/dist/latest" target="_blank" rel="noreferrer">最新版本列表</a></li></ul></li><li>下载以<code>-win-x64.zip</code>结尾的文件 <ul><li>如<code>node-v22.2.0-win-x64.zip</code></li></ul></li><li>解压到nvm安装目录 <ul><li><code>D:\\nvm\\node-v22.2.0-win-x64</code></li></ul></li><li>将<code>node-v22.2.0-win-x64</code>文件名修改为<code>v22.2.0</code></li><li>此时, <code>nvm ls</code> 就会显示新增的版本</li></ul></li></ul>`,5)]))}const u=s(p,[["render",r]]);export{b as __pageData,u as default};
