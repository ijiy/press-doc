import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.B3EJgH_4.js";const D=JSON.parse('{"title":"pnpm","description":"","frontmatter":{},"headers":[],"relativePath":"node/pnpm.md","filePath":"node/pnpm.md","lastUpdated":1715407916000}'),l={name:"node/pnpm.md"},e=p(`<h1 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;pnpm&quot;">​</a></h1><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 安装</span></span>
<span class="line"><span style="color:#A6E22E;">npm</span><span style="color:#E6DB74;"> i</span><span style="color:#E6DB74;"> pnpm</span><span style="color:#AE81FF;"> -g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 初始化</span><span style="color:#F8F8F2;"> (创建) package.json</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 安装</span><span style="color:#E6DB74;"> package.json</span><span style="color:#E6DB74;"> 的所有模块</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 添加</span><span style="color:#F8F8F2;"> (等同于 </span><span style="color:#E6DB74;">npm</span><span style="color:#E6DB74;"> i</span><span style="color:#E6DB74;"> xx</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> add</span><span style="color:#E6DB74;"> xx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 添加</span><span style="color:#F8F8F2;"> (等同于 </span><span style="color:#E6DB74;">npm</span><span style="color:#E6DB74;"> i</span><span style="color:#E6DB74;"> xx</span><span style="color:#AE81FF;"> -D</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> add</span><span style="color:#E6DB74;"> xx</span><span style="color:#AE81FF;"> -D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 添加全局</span><span style="color:#F8F8F2;"> (前提配置: </span><span style="color:#E6DB74;">pnpm</span><span style="color:#E6DB74;"> config</span><span style="color:#E6DB74;"> set</span><span style="color:#E6DB74;"> global-bin-dir</span><span style="color:#E6DB74;"> &quot;D:\\nodejs&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> add</span><span style="color:#E6DB74;"> xx</span><span style="color:#AE81FF;"> -g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 移除</span><span style="color:#F8F8F2;"> (rm, </span><span style="color:#E6DB74;">即</span><span style="color:#E6DB74;"> remove</span><span style="color:#E6DB74;"> 的别名</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> rm</span><span style="color:#E6DB74;"> xx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 当前项目安装的所有模块</span><span style="color:#F8F8F2;"> (ls, </span><span style="color:#E6DB74;">即</span><span style="color:#E6DB74;"> list</span><span style="color:#E6DB74;"> 的别名</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> ls</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> ls</span><span style="color:#AE81FF;"> -g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 运行</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> run</span><span style="color:#E6DB74;"> xx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 更新</span></span>
<span class="line"><span style="color:#A6E22E;">npm</span><span style="color:#E6DB74;"> i</span><span style="color:#E6DB74;"> pnpm</span><span style="color:#AE81FF;"> -g</span></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 不要使用</span><span style="color:#E6DB74;"> pnpm</span><span style="color:#E6DB74;"> 更新</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 更新所有模块到最新版本</span><span style="color:#F8F8F2;"> (latest)</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> up</span><span style="color:#AE81FF;"> --latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 更新xx模块到最新版本</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> up</span><span style="color:#E6DB74;"> xx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 检查</span><span style="color:#F8F8F2;"> (异常, </span><span style="color:#E6DB74;">更新</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> audit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">::</span><span style="color:#E6DB74;"> 指定缓存路径</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> config</span><span style="color:#E6DB74;"> set</span><span style="color:#E6DB74;"> store-dir</span><span style="color:#E6DB74;"> D:/Project/.pnpm-store</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><ul><li>.npmrc, 所有配置命令, 保存在用户目录中 (C:\\Users\\Administrator)</li></ul>`,5),o=[e];function r(c,t,i,E,y,b){return a(),n("div",null,o)}const F=s(l,[["render",r]]);export{D as __pageData,F as default};
