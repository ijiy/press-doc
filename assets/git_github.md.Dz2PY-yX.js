import{_ as n,c as a,a0 as e,o as l}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"GitHub","description":"","frontmatter":{},"headers":[],"relativePath":"git/github.md","filePath":"git/github.md","lastUpdated":1726832197000}'),i={name:"git/github.md"};function p(o,s,c,t,r,d){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="github" tabindex="-1">GitHub <a class="header-anchor" href="#github" aria-label="Permalink to &quot;GitHub&quot;">​</a></h1><h2 id="github-pages" tabindex="-1">github-pages <a class="header-anchor" href="#github-pages" aria-label="Permalink to &quot;github-pages&quot;">​</a></h2><ul><li>前往项目<a href="https://github.com/ijiy/press" target="_blank" rel="noreferrer">github</a> -&gt; 切换<code>master</code>分支 -&gt; <code>Settings</code> (不是右上角入口, 是和<code>Code</code>同行的) <ul><li><code>Pages</code> -&gt; <code>Build and deployment</code> -&gt; <code>Source</code></li></ul></li></ul><h3 id="单页面构建" tabindex="-1">单页面构建 <a class="header-anchor" href="#单页面构建" aria-label="Permalink to &quot;单页面构建&quot;">​</a></h3><ul><li>选择<code>GitHub Actions</code></li></ul><ol><li><p>选择<code>Static HTML</code>自动构建</p></li><li><p>通过<code>npm</code>自动构建</p><ul><li>项目根目录下新增<code>.github\\workflows\\deploy.yml</code></li></ul></li></ol><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span>name: Deploy</span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  workflow_dispatch: {}</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches:</span></span>
<span class="line"><span>      - master</span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  deploy:</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    permissions:</span></span>
<span class="line"><span>      pages: write</span></span>
<span class="line"><span>      id-token: write</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      name: github-pages</span></span>
<span class="line"><span>      url: \${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - uses: actions/checkout@v3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          fetch-depth: 0</span></span>
<span class="line"><span>      - uses: actions/setup-node@v3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          node-version: 16</span></span>
<span class="line"><span>          cache: npm</span></span>
<span class="line"><span>      - run: npm install --frozen-lockfile</span></span>
<span class="line"><span>      - name: Build</span></span>
<span class="line"><span>        run: npm run build</span></span>
<span class="line"><span>      - uses: actions/configure-pages@v2</span></span>
<span class="line"><span>      - uses: actions/upload-pages-artifact@v1</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          path: docs/.vitepress/dist</span></span>
<span class="line"><span>      - name: Deploy</span></span>
<span class="line"><span>        id: deployment</span></span>
<span class="line"><span>        uses: actions/deploy-pages@v1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ul><li>之后每次<code>merge</code>到<code>master</code>分支都会触发Pages的构建 <ul><li>提交前, 本地先执行<code>build</code>, 确保构建成功</li></ul></li></ul><h3 id="多页面构建" tabindex="-1">多页面构建 <a class="header-anchor" href="#多页面构建" aria-label="Permalink to &quot;多页面构建&quot;">​</a></h3><ul><li><p>选择<code>Deploy from a branch</code></p></li><li><p>Branch选择<code>master</code> -&gt; <code>Save</code></p><ul><li>然后开始自动构建</li><li><code>Actions</code> (和<code>Code</code>同行的), 查看构建详情</li><li>构建好后, 在<code>Build and deployment</code>上面会显示访问地址</li></ul></li></ul><h2 id="访问加速" tabindex="-1">访问加速 <a class="header-anchor" href="#访问加速" aria-label="Permalink to &quot;访问加速&quot;">​</a></h2><ol><li><p>前往下载<a href="https://github.com/oldj/SwitchHosts/releases" target="_blank" rel="noreferrer">SwitchHosts</a></p><ul><li>页面搜索<code>Assets</code>, 并点开下拉 <ul><li>下载<code>SwitchHosts_windows_installer_x64_***.exe</code><ul><li>如<code>SwitchHosts_windows_installer_x64_4.2.0.6105.exe</code> (百度网盘)</li></ul></li></ul></li><li>下载完后, 安装应用 <ul><li>下一步</li><li>目标文件夹 -&gt; <code>d:\\SwitchHosts</code></li><li>安装</li></ul></li><li>安装过程会弹出360警告 <ul><li>允许程序的所有操作</li></ul></li></ul></li><li><p>安装好后, 添加hosts</p><ul><li>点击在应用界面的左上角<code>+</code><ul><li><code>Hosts 类型</code>, 选择<code>远程</code></li><li><code>Hosts 标题</code>, <code>GitHub520</code> (随意)</li><li><code>URL</code>, <code>https://raw.hellogithub.com/hosts</code></li><li><code>自动刷新</code>, 选择<code>1小时</code></li></ul></li><li>确定</li></ul></li><li><p>启用添加的hosts</p><ul><li><code>选项</code>中有切换开关按钮, 打开或关闭</li></ul></li></ol><ul><li>其它 <ul><li>右键 <code>D:\\SwitchHosts\\SwitchHosts.exe</code> 固定到&quot;开始&quot;</li><li>手动更新hosts <ul><li>右键<code>选项</code> -&gt; <code>刷新</code></li></ul></li><li>关闭窗口后, 转为后台进程, 无法直接通过点击应用再次打开 <ul><li>在<code>任务管理器</code>中结束该进程, 然后再打开应用</li></ul></li></ul></li></ul><h2 id="gitcode" tabindex="-1">gitcode <a class="header-anchor" href="#gitcode" aria-label="Permalink to &quot;gitcode&quot;">​</a></h2><p>相当于github的克隆版, 能更快的访问github资源</p><ul><li><p>访问<a href="https://gitcode.com" target="_blank" rel="noreferrer">gitcode</a></p><ul><li>通过搜索获取github资源</li></ul></li><li><p>原本访问 <code>https://github.com/vuejs/vue</code></p><ul><li>可以改成 <code>https://gitcode.com/vuejs/vue</code></li></ul></li></ul><h2 id="token" tabindex="-1">token <a class="header-anchor" href="#token" aria-label="Permalink to &quot;token&quot;">​</a></h2><p>比如仓库地址 <code>https://github.com/ijiy/admin-diy.git</code></p><ul><li><p>生成token</p><ul><li>仓库页面的右上角点击头像 -&gt; Settings -&gt; Developer settings -&gt; Personal access tokens -&gt; Tokens (classic) -&gt; Generate new token (classic) <ul><li>输入 <code>Note</code> (用途: 可以是仓库名); <code>Expiration</code> (有效期: 可以自定义日期, 最长一年); 勾选全部 -&gt; Generate token</li><li>复制生成的token: <code>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</code></li></ul></li></ul></li><li><p>设置token</p></li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#A6E22E;">git</span><span style="color:#E6DB74;"> remote</span><span style="color:#E6DB74;"> set-url</span><span style="color:#E6DB74;"> origin</span><span style="color:#E6DB74;"> https://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@github.com/ijiy/admin-diy.git</span></span>
<span class="line"><span style="color:#A6E22E;">git</span><span style="color:#E6DB74;"> remote</span><span style="color:#E6DB74;"> set-url</span><span style="color:#E6DB74;"> origin</span><span style="color:#E6DB74;"> https://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@github.com/ijiy/press-doc.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,20)]))}const h=n(i,[["render",p]]);export{b as __pageData,h as default};
