import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const y=JSON.parse('{"title":"Git上传忽略 【.gitignore】","description":"","frontmatter":{},"headers":[],"relativePath":"convention/gitignore.md","filePath":"convention/gitignore.md","lastUpdated":1694342534000}'),p={name:"convention/gitignore.md"},e=l(`<h1 id="git上传忽略-【-gitignore】" tabindex="-1">Git上传忽略 【.gitignore】 <a class="header-anchor" href="#git上传忽略-【-gitignore】" aria-label="Permalink to &quot;Git上传忽略 【.gitignore】&quot;">​</a></h1><p>.gitignore</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;"># 苹果存储库</span></span>
<span class="line"><span style="color:#A6E22E;">.DS_Store</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 模块</span></span>
<span class="line"><span style="color:#A6E22E;">node_modules</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 打包目录</span></span>
<span class="line"><span style="color:#A6E22E;">/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># SSR 打包目录</span></span>
<span class="line"><span style="color:#A6E22E;">/dist-ssr</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 环境</span></span>
<span class="line"><span style="color:#A6E22E;">.env.local</span></span>
<span class="line"><span style="color:#A6E22E;">.env.*.local</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 异常记录</span></span>
<span class="line"><span style="color:#A6E22E;">npm-debug.log*</span></span>
<span class="line"><span style="color:#A6E22E;">yarn-debug.log*</span></span>
<span class="line"><span style="color:#A6E22E;">yarn-error.log*</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm-debug.log*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 编辑器配置</span></span>
<span class="line"><span style="color:#A6E22E;">.idea</span></span>
<span class="line"><span style="color:#A6E22E;">.vscode</span></span>
<span class="line"><span style="color:#F92672;">*</span><span style="color:#F8F8F2;">.suo</span></span>
<span class="line"><span style="color:#F92672;">*</span><span style="color:#F8F8F2;">.ntvs</span><span style="color:#F92672;">*</span></span>
<span class="line"><span style="color:#F92672;">*</span><span style="color:#F8F8F2;">.njsproj</span></span>
<span class="line"><span style="color:#F92672;">*</span><span style="color:#F8F8F2;">.sln</span></span>
<span class="line"><span style="color:#F92672;">*</span><span style="color:#F8F8F2;">.sw</span><span style="color:#F92672;">?</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,3),r=[e];function o(c,i,t,b,u,m){return a(),n("div",null,r)}const g=s(p,[["render",o]]);export{y as __pageData,g as default};
