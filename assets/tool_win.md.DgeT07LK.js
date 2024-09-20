import{_ as d,c as e,o as t,a1 as l}from"./chunks/framework.B3EJgH_4.js";const m=JSON.parse('{"title":"Window系统相关","description":"","frontmatter":{},"headers":[],"relativePath":"tool/win.md","filePath":"tool/win.md","lastUpdated":1716256931000}'),o={name:"tool/win.md"},c=l('<h1 id="window系统相关" tabindex="-1">Window系统相关 <a class="header-anchor" href="#window系统相关" aria-label="Permalink to &quot;Window系统相关&quot;">​</a></h1><h2 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h2><ul><li>截屏</li></ul><table><thead><tr><th>键名</th><th>键值</th><th>备注</th></tr></thead><tbody><tr><td>截屏</td><td><code>Prt ScSysRq</code></td><td>会存到剪贴板, 可在聊天窗口中粘贴</td></tr><tr><td>截取 桌面屏幕</td><td><code>PrtScn</code></td><td>包括多显示器</td></tr><tr><td>截取 当前激活窗口</td><td><code>Alt</code> + <code>PrtScn</code></td><td></td></tr><tr><td>保存截屏</td><td><code>Win</code> + <code>PrtScn</code></td><td><code>截屏</code>, 同时保存到<code>C:\\Users\\Administrator\\Pictures\\Screenshots</code></td></tr></tbody></table><ul><li>常用快捷键</li></ul><table><thead><tr><th>键名</th><th>键值</th><th>备注</th></tr></thead><tbody><tr><td>文件资源管理器</td><td><code>Win</code> + <code>E</code></td><td></td></tr><tr><td>显示桌面</td><td><code>Win</code> + <code>D</code></td><td></td></tr><tr><td>锁定</td><td><code>Win</code> + <code>L</code></td><td></td></tr><tr><td>切换左下角任务栏</td><td><code>Win</code> + <code>T</code></td><td>或左右方向键切换, 或<code>Win + 1~9</code></td></tr><tr><td>右下角任务栏</td><td><code>Win</code> + <code>B</code></td><td>左右方向键切换</td></tr><tr><td>设置</td><td><code>Win</code> + <code>I</code></td><td>Win10/11</td></tr><tr><td>显示任务视图</td><td><code>Win</code> + <code>Tab</code></td><td></td></tr><tr><td>紧贴屏幕边缘</td><td><code>Win</code> + <code>方向键</code></td><td></td></tr><tr><td>窗口任务</td><td><code>Alt</code> + <code>Tab</code></td><td></td></tr><tr><td>关闭</td><td><code>Ctrl</code> + <code>W</code></td><td></td></tr><tr><td>强制关闭</td><td><code>Alt</code> + <code>F4</code></td><td>或<code>Alt + Space + C</code></td></tr><tr><td>创建文件夹</td><td><code>Ctrl</code> + <code>Shift</code> + <code>N</code></td><td></td></tr></tbody></table><ul><li><p>应用快捷键</p><ul><li><code>Win + R</code> -&gt; <code>D:\\WebStorm 2021.1\\bin</code> -&gt; 创建快捷方式<code>webstorm64.exe</code>, 并移到<code>桌面\\ShortcutKey</code><ul><li>右键快捷方式 -&gt; 属性 -&gt; 快捷键 <ul><li>如 <code>Ctrl</code> + <code>Alt</code> + <code>W</code></li><li>修改快捷方式路径, 快捷键失效, 需要删除快捷键并重新设置</li></ul></li></ul></li></ul></li><li><p><code>Win</code>键点击无效</p><ul><li>长按<code>Fn</code></li></ul></li></ul><h2 id="系统信息" tabindex="-1">系统信息 <a class="header-anchor" href="#系统信息" aria-label="Permalink to &quot;系统信息&quot;">​</a></h2><ul><li><p>系统信息 (系统摘要, 组件, 软件环境等)</p><ul><li><code>Win + R</code> -&gt; <code>msinfo32</code></li><li>显卡信息: 组件 -&gt; 显示</li><li>硬盘信息: 组件 -&gt; 存储 -&gt; 硬盘 <ul><li>媒体类型: 固定硬盘</li></ul></li></ul></li><li><p>激活信息</p><ul><li><code>Win + R</code> -&gt; <code>slmgr.vbs -dlv</code></li></ul></li></ul><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><ul><li><code>cmd</code> -&gt; <code>sysdm.cpl</code><ul><li>高级 -&gt; 环境变量</li></ul></li></ul><h2 id="计划关机" tabindex="-1">计划关机 <a class="header-anchor" href="#计划关机" aria-label="Permalink to &quot;计划关机&quot;">​</a></h2><p><code>Win + R</code></p><ul><li><p>弹出提示1分钟后关机</p><ul><li><code>shutdown -s -t 60</code></li></ul></li><li><p>任务栏提示计划的关闭已取消</p><ul><li><code>shutdown -a</code></li></ul></li></ul><h2 id="控制面板" tabindex="-1">控制面板 <a class="header-anchor" href="#控制面板" aria-label="Permalink to &quot;控制面板&quot;">​</a></h2><ul><li><code>Win + R</code> -&gt; <code>control</code><ul><li><code>F4</code> 搜索</li></ul></li></ul><h2 id="ip" tabindex="-1">IP <a class="header-anchor" href="#ip" aria-label="Permalink to &quot;IP&quot;">​</a></h2><p><code>Win + R</code></p><ul><li><p>查看本地IP</p><ul><li><code>cmd</code> -&gt; <code>ipconfig</code></li></ul></li><li><p>测试网络连接</p><ul><li><code>cmd</code> -&gt; <code>ping 192.168.xxx.xxx</code></li></ul></li><li><p>连接远程桌面</p><ul><li><code>cmd</code> -&gt; <code>mstsc</code><ul><li><code>\\\\192.168.xxx.xxx</code><ul><li>输入远程设备的账号, 密码</li></ul></li></ul></li><li>控制面板\\系统和安全\\系统 -&gt; 远程设置 <ul><li>勾选<code>仅允许运行...的计算机连接(更安全)(N)</code></li></ul></li></ul></li><li><p>使用固定IP</p><ul><li>路由器配置问题, 可能导致无法自动获得IP地址</li><li>控制面板\\网络和 Internet\\网络和共享中心 -&gt; 更改适配器设置 <ul><li>右键<code>以太网</code> -&gt; 属性 -&gt; 双击<code>Internet 协议版本 4(TCP/IPv4)</code><ul><li>IP 地址: <code>192.168.0.156</code> (156 尝试设置[0, 255]之间的值)</li><li>子网掩码: <code>255.255.255.0</code></li><li>默认网关: <code>192.168.0.1</code></li><li>首选 DNS 服务器: <code>192.168.0.1</code></li></ul></li></ul></li></ul></li></ul><h2 id="系统优化" tabindex="-1">系统优化 <a class="header-anchor" href="#系统优化" aria-label="Permalink to &quot;系统优化&quot;">​</a></h2><ul><li><p>禁用系统保护</p><ul><li>控制面板\\系统和安全\\系统 -&gt; 系统保护 -&gt; 系统保护 -&gt; 选中驱动器 -&gt; 配置 <ul><li><code>禁用系统保护</code> (或 缩小磁盘的最大使用量) -&gt; <code>删除</code></li></ul></li></ul></li><li><p>设置无分页文件</p><ul><li>控制面板\\系统和安全\\系统 -&gt; 级系统设置 -&gt; 高级 -&gt; 性能 -&gt; 设置 -&gt; 高级 -&gt; 更改 <ul><li>去掉<code>自动管理所有驱动器的分页文件大小</code>的勾选</li><li>选中驱动器 -&gt; 点中<code>无分页文件</code>, 再点旁边的<code>设置</code></li></ul></li></ul></li><li><p>不要开机密码</p><ul><li><code>Win + R</code> -&gt; <code>netplwiz</code><ul><li>取消勾选<code>要使用本计算机, 用户必须输入用户名和密码</code> -&gt; 确定, 并确认自动登陆用户</li></ul></li></ul></li></ul><h2 id="多显示器" tabindex="-1">多显示器 <a class="header-anchor" href="#多显示器" aria-label="Permalink to &quot;多显示器&quot;">​</a></h2><ul><li><p>设置 -&gt; 系统 (<code>Win + I</code>)</p></li><li><p>多显示器</p><ul><li>选择 <code>扩展这些显示器</code></li></ul></li><li><p>重新排列这些显示器</p><ul><li>笔记本显示器, 默认标识为<code>1</code>; 扩展显示器的标识为<code>2</code></li><li>如果扩展显示器在左边, 那就将对应标识拖动到左边</li></ul></li><li><p>设置为主显示器</p><ul><li>点击选中想要成为&quot;主显示器&quot;的显示器对应的标识 <ul><li>勾选<code>设置为主显示器</code></li></ul></li></ul></li></ul><h2 id="搭建本地服务器" tabindex="-1">搭建本地服务器 <a class="header-anchor" href="#搭建本地服务器" aria-label="Permalink to &quot;搭建本地服务器&quot;">​</a></h2><ol><li><p>控制面板\\程序 -&gt; 启用或关闭Windows功能</p><ul><li>勾选<code>internet信息服务</code>及所有子选项的复选框</li></ul></li><li><p>控制面板\\系统和安全\\Windows 防火墙\\允许的应用 -&gt; 更改设置</p><ul><li>勾选<code>万维网服务HTTP</code>右侧的两个复选框</li></ul></li><li><p>将文件放在<code>C:\\inetpub\\wwwroot\\</code>目录下, 通过<code>http://localhost</code> 或 <code>http://本地IP/访问文件</code></p></li></ol><h2 id="ie浏览器" tabindex="-1">IE浏览器 <a class="header-anchor" href="#ie浏览器" aria-label="Permalink to &quot;IE浏览器&quot;">​</a></h2><ul><li><p>关闭IE浏览器</p><ul><li>控制面板\\程序 -&gt; 启用或关闭Windows功能 <ul><li>取消&#39;Internet Explorer 11&#39;对应的复选框</li></ul></li></ul></li><li><p>强制删除桌面IE图标</p><ul><li><code>Win + R</code> -&gt; <code>regedit</code><ul><li>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Desktop\\NameSpace</li><li>右键导出, 在导出的文件中查找<code>Internet Explorer</code>, 并记住其后{}里的编号</li><li>在<code>NameSpace</code>下拉文件夹中找到对应编号的文件夹, 并右键删除, 再刷新桌面</li></ul></li></ul></li><li><p>IE11打不开</p><ul><li><code>Win + R</code> -&gt; <code>regedit</code><ul><li>HKEY_CURRENT_USER\\Software\\Microsoft\\Internet Explorer\\Main</li><li>右键选择<code>高级</code>, 勾选<code>包括可从该对象的父项继承的权限</code></li></ul></li></ul></li></ul><h2 id="chrome" tabindex="-1">Chrome <a class="header-anchor" href="#chrome" aria-label="Permalink to &quot;Chrome&quot;">​</a></h2><ul><li>快捷键</li></ul><table><thead><tr><th>键名</th><th>键值</th><th>备注</th></tr></thead><tbody><tr><td>新标签页</td><td><code>Ctrl</code> + <code>T</code></td><td>当前页面打开</td></tr><tr><td>新标签页</td><td><code>Ctrl</code> + <code>N</code></td><td>新建页面打开</td></tr><tr><td>历史记录</td><td><code>Ctrl</code> + <code>H</code></td><td></td></tr><tr><td>下载记录</td><td><code>Ctrl</code> + <code>J</code></td><td></td></tr><tr><td>保存书签</td><td><code>Ctrl</code> + <code>D</code></td><td></td></tr><tr><td>页内搜索</td><td><code>Ctrl</code> + <code>F</code></td><td>或<code>Ctrl + G</code>, 或<code>F3</code></td></tr><tr><td>源代码</td><td><code>Ctrl</code> + <code>U</code></td><td></td></tr><tr><td>书签栏</td><td><code>Ctrl</code> + <code>Shift</code> + <code>B</code></td><td></td></tr><tr><td>书签详情</td><td><code>Ctrl</code> + <code>Shift</code> + <code>O</code></td><td></td></tr><tr><td>检查</td><td><code>F12</code></td><td>或<code>Ctrl + Shift + I</code>; 控制台<code>Shift + Enter</code>换行</td></tr><tr><td>输入URL</td><td><code>F6</code></td><td></td></tr></tbody></table><ul><li>跨域 <ul><li>Chrome快捷方式 -&gt; 属性 -&gt; 目标(&quot;C:...&quot;) 后面粘贴</li></ul></li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">&quot;C:\\...&quot;</span><span style="color:#AE81FF;"> --args</span><span style="color:#AE81FF;"> --disable-web-security</span><span style="color:#AE81FF;"> --user-data-dir=C:\\MyChromeDevUserData</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="防火墙" tabindex="-1">防火墙 <a class="header-anchor" href="#防火墙" aria-label="Permalink to &quot;防火墙&quot;">​</a></h2><ul><li><p>局域网中打开防火墙, 很多应用可能未允许通过, 可通过<code>360流量防火墙</code>查看正在访问的网络进程, 点击查看对应的文件路径</p></li><li><p><code>防火墙和网络保护</code> -&gt; 允许应用通过防火墙 -&gt; 允许其他应用 -&gt; 浏览 添加以下项</p><ul><li>WebStorm <ul><li><code>D:\\WebStorm 2021.1\\bin\\webstorm.exe</code></li><li><code>D:\\WebStorm 2021.1\\bin\\webstorm64.exe</code></li></ul></li><li>Git <ul><li><code>D:\\Git\\mingw64\\libexec\\git-core\\git-remote-https.exe</code></li></ul></li></ul></li></ul><h2 id="右键添加命令提示符" tabindex="-1">右键添加命令提示符 <a class="header-anchor" href="#右键添加命令提示符" aria-label="Permalink to &quot;右键添加命令提示符&quot;">​</a></h2><ul><li><p>右键目录 -&gt; 添加命令提示符</p><ul><li><code>Win + R</code> -&gt; <code>regedit</code><ul><li>展开 HKEY_CLASSES_ROOT\\Folder\\shell</li><li>右键 shell -&gt; 新建 -&gt; 项 -&gt; 命名为<code>命令提示符A</code></li><li>右键 <code>命令提示符A</code> -&gt; 新建 -&gt; 项 -&gt; 命名为<code>Command</code></li><li>点击 <code>Command</code> -&gt; 双击右侧区域的<code>默认</code><ul><li>数值数据: <code>c:\\windows\\system32\\cmd.exe cd &quot;%1&quot;</code></li></ul></li></ul></li></ul></li><li><p>右键空白区域 -&gt; 添加命令提示符</p><ul><li><code>Win + R</code> -&gt; <code>regedit</code><ul><li>展开 HKEY_CLASSES_ROOT\\Directory\\background\\shell</li><li>右键 shell -&gt; 新建 -&gt; 项 -&gt; 命名为<code>runasadmin</code></li><li>点击 <code>runasadmin</code> -&gt; 双击右侧区域的<code>默认</code><ul><li>修改 -&gt; 数值数据: <code>命令提示符B</code></li></ul></li><li>右侧区域空白区 -&gt; 右键 -&gt; 新建 -&gt; 字符串值 -&gt; 命名为<code>ico</code></li><li>双击 <code>ico</code><ul><li>数值数据: <code>C:\\Windows\\System32\\shell32.dll,24</code></li></ul></li><li>右键 <code>runasadmin</code> -&gt; 新建 -&gt; 项 -&gt; 命名为<code>command</code></li><li>点击 <code>command</code> -&gt; 双击右侧区域的<code>默认</code><ul><li>数值数据: <code>cmd.exe /s /k pushd &quot;%V&quot;</code></li></ul></li></ul></li></ul></li></ul><h2 id="win11-文件夹右键还原旧版菜单-即不要显示更多选项" tabindex="-1">Win11 文件夹右键还原旧版菜单 (即不要<code>显示更多选项</code>) <a class="header-anchor" href="#win11-文件夹右键还原旧版菜单-即不要显示更多选项" aria-label="Permalink to &quot;Win11 文件夹右键还原旧版菜单 (即不要`显示更多选项`)&quot;">​</a></h2><ul><li><code>Win + R</code> -&gt; <code>cmd</code><ul><li><code>reg.exe add &quot;HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32&quot; /f /ve</code></li><li><code>taskkill /f /im explorer.exe &amp; start explorer.exe</code></li></ul></li></ul><h2 id="宽带4线压法" tabindex="-1">宽带4线压法 <a class="header-anchor" href="#宽带4线压法" aria-label="Permalink to &quot;宽带4线压法&quot;">​</a></h2><ul><li>金属片朝上, 从左到右对应 1 2 3 6 针孔, 分别插入 橙 -&gt; 白橙 -&gt; 绿 -&gt; 白绿</li></ul>',40),i=[c];function a(r,u,n,s,h,p){return t(),e("div",null,i)}const b=d(o,[["render",a]]);export{m as __pageData,b as default};
