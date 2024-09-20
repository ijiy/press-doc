import{_ as e,c as l,o as a,a1 as i}from"./chunks/framework.B3EJgH_4.js";const b=JSON.parse('{"title":"SourceTree","description":"","frontmatter":{},"headers":[],"relativePath":"git/sourcetree.md","filePath":"git/sourcetree.md","lastUpdated":1716256931000}'),t={name:"git/sourcetree.md"},r=i(`<h1 id="sourcetree" tabindex="-1"><a href="https://www.sourcetreeapp.com" target="_blank" rel="noreferrer">SourceTree</a> <a class="header-anchor" href="#sourcetree" aria-label="Permalink to &quot;[SourceTree](https://www.sourcetreeapp.com)&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li><p>前提安装<a href="https://git-scm.com/download/win" target="_blank" rel="noreferrer">git</a></p></li><li><p>前往下载<a href="https://www.sourcetreeapp.com" target="_blank" rel="noreferrer">Sourcetree</a></p></li><li><p>安装 (没有安装路径选择) -&gt; 登录 Bitbucket -&gt; 勾选 <code>Mercurial</code> 和 <code>默认配置自动换行处理</code> (上传会将LF转化成CRLF)</p><ul><li>下一步, 显示默认用户信息 (默认Bitbucket的登录邮箱和用户名), 可修改或之后修改 (工具 -&gt; 选项 -&gt; 一般 -&gt; 默认用户信息)</li><li>下一步, 提示<code>加载SSH密钥</code>, 选择否</li></ul></li></ul><h2 id="克隆" tabindex="-1">克隆 <a class="header-anchor" href="#克隆" aria-label="Permalink to &quot;克隆&quot;">​</a></h2><ul><li><p>HTTPS</p><ul><li>访问需要登录远程, 常用连接方式, 仓库地址为<code>https://gitee.com/xx/yy.git</code>格式</li><li>粘贴仓库地址, 首次会弹出<code>Enter your credentials for &#39;https://gitee.com/&#39;</code><ul><li>Username: gitee绑定的邮箱地址</li><li>Password: gitee的登录密码</li></ul></li></ul></li><li><p>SSH</p><ul><li>不用登录远程, 需要<a href="#公钥">公钥</a>对接</li></ul></li></ul><h2 id="公钥" tabindex="-1">公钥 <a class="header-anchor" href="#公钥" aria-label="Permalink to &quot;公钥&quot;">​</a></h2><ul><li><p>工具 -&gt; 创建或导入SSH密钥 -&gt; Generate (鼠标在进度条里外不停滑动)</p></li><li><p>复制生成的密钥, 粘贴到</p><ul><li>Gitee -&gt; 设置 -&gt; SSH公钥</li></ul></li><li><p>Save private key (保存 .ppk, 保存合适的位置, 后面最好不要删除, 当密钥缓存失效/被360等清除, 可重新导入)</p><ul><li>右键 任务栏 <strong>Pageant</strong> 图标 -&gt; Add Key (选择保存的 .ppk)</li></ul></li><li><p>Gitee -&gt; 设置 -&gt; 邮箱管理</p><ul><li>去掉勾选 <strong>不公开我的邮箱地址</strong> 或 选择提示中的邮箱地址</li></ul></li></ul><h2 id="创建仓库-gitee" tabindex="-1">创建仓库 <a href="https://gitee.com" target="_blank" rel="noreferrer">Gitee</a> <a class="header-anchor" href="#创建仓库-gitee" aria-label="Permalink to &quot;创建仓库 [Gitee](https://gitee.com)&quot;">​</a></h2><ul><li>新建仓库 <ul><li>仓库名称 可与项目名一样</li><li>创建</li></ul></li></ul><h2 id="初始化本地环境" tabindex="-1">初始化本地环境 <a class="header-anchor" href="#初始化本地环境" aria-label="Permalink to &quot;初始化本地环境&quot;">​</a></h2><ul><li>项目根目录中, 右键 -&gt; Git Bash Here</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">git</span><span style="color:#E6DB74;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 采用全局的声明用户, 跳过此步骤</span></span>
<span class="line"><span style="color:#A6E22E;">git</span><span style="color:#E6DB74;"> config</span><span style="color:#E6DB74;"> user.name</span><span style="color:#E6DB74;"> &quot;yyy&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">git</span><span style="color:#E6DB74;"> config</span><span style="color:#E6DB74;"> user.email</span><span style="color:#E6DB74;"> &quot;xxx@qq.com&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="添加项目" tabindex="-1">添加项目 <a class="header-anchor" href="#添加项目" aria-label="Permalink to &quot;添加项目&quot;">​</a></h2><ol><li><p>New tab -&gt; Add</p></li><li><p>浏览 -&gt; 添加本地创建的git项目</p></li><li><p>添加</p></li></ol><h2 id="关联远端" tabindex="-1">关联远端 <a class="header-anchor" href="#关联远端" aria-label="Permalink to &quot;关联远端&quot;">​</a></h2><ol><li><p>设置 -&gt; 远程仓库 -&gt; 添加</p></li><li><p>远端名称: 不填, 勾选 <strong>默认远端</strong></p></li><li><p>URL/路径: 粘贴从 Gitee 复制的SSH地址</p></li></ol><h2 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h2><ol><li><p>获取</p><ul><li>如果远程仓库为空, 可跳过该步骤</li><li>如果远程仓库不为空, 获取前查看<a href="#冲突">冲突</a></li><li>SSH会缓存密钥, 重启后再次执行 获取</li></ul></li><li><p>拉取(勾选 master) -&gt; 暂存所有 -&gt; 输入描述并勾选立即推送 -&gt; 提交</p></li></ol><h2 id="冲突" tabindex="-1">冲突 <a class="header-anchor" href="#冲突" aria-label="Permalink to &quot;冲突&quot;">​</a></h2><p>先 暂存所有, 再 获取</p><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><ul><li><p>确保 Sourcetree 的账号和 Gitee 仓库成员匹配, 否则:</p><ul><li>删除 AppData\\Local\\Atlassian\\SourceTree 的 <code>userhosts</code> 和 <code>passwd</code></li><li>重启 Sourcetree</li></ul></li><li><p>使用远程分支</p><ul><li>不要直接拉去远程分支, 先拉去主分支<code>master</code>: Sourcetree -&gt; 分支 <ul><li>新分支: 要和远程分支同名, 否则后续直接提交会在远程创建一个新分支</li><li>不要勾选<code>检出新分支</code></li></ul></li><li>拉去 -&gt; <code>要拉取的远程分支</code>选择远程同名的分支</li></ul></li></ul><h2 id="mac" tabindex="-1">Mac <a class="header-anchor" href="#mac" aria-label="Permalink to &quot;Mac&quot;">​</a></h2><ul><li>每次访问远程仓库要求输入仓库密码 <ul><li>解决: 终端 (右上角) <ul><li><code>git config credential.helper store</code> -&gt; 要求输入 管理员登录密码</li><li><code>git pull</code> -&gt; 要求输入 远程仓库的 用户名和密码</li></ul></li></ul></li></ul>`,24),o=[r];function s(n,c,p,u,d,h){return a(),l("div",null,o)}const m=e(t,[["render",s]]);export{b as __pageData,m as default};
