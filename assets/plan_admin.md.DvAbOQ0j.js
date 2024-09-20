import{_ as l,c as i,o as a,a1 as e}from"./chunks/framework.B3EJgH_4.js";const b=JSON.parse('{"title":"DIY Admin","description":"","frontmatter":{},"headers":[],"relativePath":"plan/admin.md","filePath":"plan/admin.md","lastUpdated":1716256931000}'),r={name:"plan/admin.md"},t=e('<h1 id="diy-admin" tabindex="-1">DIY Admin <a class="header-anchor" href="#diy-admin" aria-label="Permalink to &quot;DIY Admin&quot;">​</a></h1><h2 id="优弊" tabindex="-1">优弊 <a class="header-anchor" href="#优弊" aria-label="Permalink to &quot;优弊&quot;">​</a></h2><ul><li><p>兼容性</p><ul><li>响应式支持所有设备 (比如在手机上自动展示友好的界面)</li><li>支持绝大多数现代浏览器, 包括 移动端浏览器和webview (如在微信中打开)</li><li>不支持IE系列浏览器 (高性能舍弃方案, 会提示在谷歌浏览器上打开)</li></ul></li><li><p>运营文档</p><ul><li>非技术角度使用项目的文档</li></ul></li></ul><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><ul><li><p>vue3, element</p></li><li><p>vite</p></li></ul><h2 id="参考框架" tabindex="-1">参考框架 <a class="header-anchor" href="#参考框架" aria-label="Permalink to &quot;参考框架&quot;">​</a></h2><h2 id="从菜单开始" tabindex="-1">从菜单开始 <a class="header-anchor" href="#从菜单开始" aria-label="Permalink to &quot;从菜单开始&quot;">​</a></h2><h3 id="权限管理" tabindex="-1">权限管理 <a class="header-anchor" href="#权限管理" aria-label="Permalink to &quot;权限管理&quot;">​</a></h3><h3 id="会员管理" tabindex="-1">会员管理 <a class="header-anchor" href="#会员管理" aria-label="Permalink to &quot;会员管理&quot;">​</a></h3><h3 id="日志中心" tabindex="-1">日志中心 <a class="header-anchor" href="#日志中心" aria-label="Permalink to &quot;日志中心&quot;">​</a></h3><h3 id="内部系统" tabindex="-1">内部系统 <a class="header-anchor" href="#内部系统" aria-label="Permalink to &quot;内部系统&quot;">​</a></h3><h4 id="员工管理" tabindex="-1">员工管理 <a class="header-anchor" href="#员工管理" aria-label="Permalink to &quot;员工管理&quot;">​</a></h4><h4 id="任务管理" tabindex="-1">任务管理 <a class="header-anchor" href="#任务管理" aria-label="Permalink to &quot;任务管理&quot;">​</a></h4><h3 id="关于" tabindex="-1">关于 <a class="header-anchor" href="#关于" aria-label="Permalink to &quot;关于&quot;">​</a></h3><ul><li><p>开发想法 (即展示当前md)</p></li><li><p>使用文档</p><ul><li>基于<code>vitepress</code><ul><li>Git 【协作流程】: <code>docs/git/git-team.md</code></li></ul></li></ul></li></ul><h3 id="重构中心" tabindex="-1">重构中心 <a class="header-anchor" href="#重构中心" aria-label="Permalink to &quot;重构中心&quot;">​</a></h3><ul><li><p>目的</p><ul><li><strong>DIY</strong>的精髓所在</li><li>通过运营方式改变页面风格</li><li>以数据为核心, 以账号或配置方式交付</li></ul></li><li><p>潜在 (代码写死)</p><ul><li>所有<code>保存</code>按钮偏右边</li><li>颜色选择提供备选方案和自定义方案</li></ul></li><li><p>数据</p><ul><li>返回一个json, 标准格式 <ul><li>name: <strong>风格名称</strong></li><li>version: 同账号版本号递增, 从1开始</li><li>description</li><li>author, 保存者姓名</li><li>keywords, [保存者账号, 保存时间]</li><li>list: { base: {fontSize: normal/big, color: #333}, config: [&#39;base&#39;, &#39;menu&#39;] }</li></ul></li><li>提交参数, 只有修改项</li></ul></li><li><p>菜单子项</p><ul><li><a href="#风格配置">风格配置</a></li></ul></li></ul><h4 id="风格配置" tabindex="-1">风格配置 <a class="header-anchor" href="#风格配置" aria-label="Permalink to &quot;风格配置&quot;">​</a></h4><ul><li><p>表单 (每个模块共有)</p><ul><li>输入框: 风格应用的目标账号, 默认当前账号</li><li>输入框: 请输入<strong>风格名称</strong></li><li>生成json</li><li><a href="#风格配置记录">记录</a></li><li>保存</li></ul></li><li><p>Tab (可左右滚动)</p><ul><li>基础 (base) <ul><li>字号 (对应 <code>fontSize.scss</code>) <ul><li>正常模式</li><li>关爱模式</li></ul></li><li>字色 (注意 背景色)</li><li>背景色</li><li>Logo</li></ul></li><li>设置 (config) <ul><li>提示: 全部取消勾选, 将不显示设置按钮</li><li>表格 (可拖动, 可勾选, 全选) <ul><li>全屏 (绝大多数Admin都有的, 功能同F11, 意义不大, 改成)</li></ul></li></ul></li><li>登录 <ul><li>登录框是否居中</li><li>页面背景 <ul><li>动态背景 (比如渐变背景色冒着气泡, canvas实现)</li></ul></li><li>验证模式 <ul><li>滑动</li><li>点文字</li><li>旋转到正确位置</li></ul></li></ul></li><li>菜单 <ul><li>布局</li><li>菜单背景色</li><li>菜单文字颜色</li><li>菜单激活背景色</li><li>菜单激活文字颜色</li></ul></li></ul></li></ul><h5 id="风格配置记录" tabindex="-1">风格配置记录 <a class="header-anchor" href="#风格配置记录" aria-label="Permalink to &quot;风格配置记录&quot;">​</a></h5><ul><li>保存的风格都会生成一条记录 (基本来源同保存的json) <ul><li><strong>风格名称</strong></li><li>备注</li></ul></li></ul><h2 id="组件化" tabindex="-1">组件化 <a class="header-anchor" href="#组件化" aria-label="Permalink to &quot;组件化&quot;">​</a></h2><ul><li>搜索 <ul><li>Session中保存搜索条件</li><li>qp-form, (npm发布)</li></ul></li></ul><h2 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-label="Permalink to &quot;模块化&quot;">​</a></h2><ul><li>每个页面对应一个文件 <ul><li>非紧密关联的页面, 都单独一个文件 (view -&gt; page)</li><li>page: {assets, api, <em>.vue,</em>.scss, README.md} <ul><li>api <ul><li>页面接口函数</li></ul></li><li>README.md <ul><li>页面接口文档</li></ul></li></ul></li></ul></li></ul><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p>src -&gt; *</p><ul><li><p>api, 通用接口</p><ul><li>config.js <ul><li>所有接口地址</li></ul></li><li>index.js <ul><li>通用接口函数 (比如获取项目配置)</li></ul></li></ul></li><li><p>assets, 通用资源</p><ul><li>images, 通用图片 <ul><li>logo</li></ul></li><li>styles, 通用样式 <ul><li>reset.css (可能不需要这个, 大多数标签都用view)</li></ul></li></ul></li><li><p>components, 自定义组件</p><ul><li>q-form</li></ul></li></ul><h2 id="view" tabindex="-1">view <a class="header-anchor" href="#view" aria-label="Permalink to &quot;view&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/weixin_42404521/article/details/114530338" target="_blank" rel="noreferrer">vue2-org-tree</a></li></ul><h2 id="框架参考" tabindex="-1">框架参考 <a class="header-anchor" href="#框架参考" aria-label="Permalink to &quot;框架参考&quot;">​</a></h2><ul><li><p><a href="https://gitee.com/wonderful-code/buildadmin" target="_blank" rel="noreferrer">BuildAdmin</a></p><ul><li><a href="https://demo.buildadmin.com/#/admin/dashboard" target="_blank" rel="noreferrer">演示地址</a></li></ul></li><li><p><a href="https://gitee.com/y_project/RuoYi-Vue" target="_blank" rel="noreferrer">若依 Admin</a></p><ul><li><a href="http://vue.ruoyi.vip/index" target="_blank" rel="noreferrer">演示地址</a></li></ul></li><li><p><a href="https://fantastic-admin.gitee.io" target="_blank" rel="noreferrer">Fantastic-admin</a></p><ul><li><a href="https://fantastic-admin.gitee.io/pro-example" target="_blank" rel="noreferrer">演示地址</a></li></ul></li></ul><h2 id="技术参考" tabindex="-1">技术参考 <a class="header-anchor" href="#技术参考" aria-label="Permalink to &quot;技术参考&quot;">​</a></h2><ul><li><a href="http://www.jimureport.com" target="_blank" rel="noreferrer">积木报表</a></li></ul>',34),o=[t];function u(n,h,d,s,c,p){return a(),i("div",null,o)}const f=l(r,[["render",u]]);export{b as __pageData,f as default};
