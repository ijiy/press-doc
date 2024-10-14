import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const u=JSON.parse('{"title":"uniapp 【安卓隐私与政策提示框】","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/android-privacy.md","filePath":"uniapp/android-privacy.md","lastUpdated":1715407916000}'),o={name:"uniapp/android-privacy.md"};function t(e,s,F,c,r,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="uniapp-【安卓隐私与政策提示框】" tabindex="-1">uniapp 【安卓隐私与政策提示框】 <a class="header-anchor" href="#uniapp-【安卓隐私与政策提示框】" aria-label="Permalink to &quot;uniapp 【安卓隐私与政策提示框】&quot;">​</a></h1><ul><li><p>在 <code>manifest.json</code> 同级别的目录下, 创建<code>androidPrivacy.json</code></p><ul><li>存在即适用于<code>HBuilderX工程</code>和<code>安卓原生工程</code></li></ul></li><li><p>androidPrivacy.json</p></li></ul><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    &quot;version&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;1&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    &quot;prompt&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;template&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    &quot;title&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;服务协议和隐私政策&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    &quot;message&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;请您务必审慎阅读、充分理解《服务协议》和《隐私政策》各条款，包括但不限于：为了更好地向您提供服务，我们需要收集您的设备标识、操作日志等信息用于分析、优化应用性能。&lt;br/&gt;您可阅读&lt;a href=</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#CFCFC2;">policy</span><span style="color:#AE81FF;">\\\\</span><span style="color:#CFCFC2;">service.html</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#CFCFC2;">&gt;《服务协议》&lt;/a&gt;和&lt;a href=</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#CFCFC2;">policy</span><span style="color:#AE81FF;">\\\\</span><span style="color:#CFCFC2;">index.html</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#CFCFC2;">&gt;《隐私政策》&lt;/a&gt;了解详细信息。如果您同意，请点击下面“同意并接受”按钮开始接受我们的服务。&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    &quot;buttonAccept&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;同意并接受&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    &quot;buttonRefuse&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;暂不同意&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    &quot;hrefLoader&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;system|default&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    &quot;second&quot;</span><span style="color:#F8F8F2;"> : {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        &quot;title&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;确认提示&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        &quot;message&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;进入应用前，您需先同意&lt;a href=</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#CFCFC2;">policy</span><span style="color:#AE81FF;">\\\\</span><span style="color:#CFCFC2;">service.html</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#CFCFC2;">&gt;《服务协议》&lt;/a&gt;和&lt;a href=</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#CFCFC2;">policy</span><span style="color:#AE81FF;">\\\\</span><span style="color:#CFCFC2;">index.html</span><span style="color:#AE81FF;">\\&quot;</span><span style="color:#CFCFC2;">&gt;《隐私政策》&lt;/a&gt;，否则将退出应用。&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        &quot;buttonAccept&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;同意并继续&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        &quot;buttonRefuse&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;退出应用&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    &quot;styles&quot;</span><span style="color:#F8F8F2;"> : {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        &quot;backgroundColor&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;#F5F7F9&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        &quot;borderRadius&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;5px&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        &quot;title&quot;</span><span style="color:#F8F8F2;"> : {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">            &quot;color&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;#000000&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        &quot;buttonAccept&quot;</span><span style="color:#F8F8F2;"> : {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">            &quot;color&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;#F9C40E&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        &quot;buttonRefuse&quot;</span><span style="color:#F8F8F2;"> : {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">            &quot;color&quot;</span><span style="color:#F8F8F2;"> : </span><span style="color:#CFCFC2;">&quot;#999999&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ul><li>创建 项目根目录\\hybrid\\policy <ul><li><code>index.html</code>, 隐私政策文件</li><li><code>service.html</code>, 服务协议文件</li></ul></li></ul><p>index.html</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;!</span><span style="color:#F92672;">DOCTYPE</span><span style="color:#A6E22E;"> html</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">html</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;zh-Hans-CN&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">meta</span><span style="color:#A6E22E;"> charset</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;UTF-8&quot;</span><span style="color:#F8F8F2;">/&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">meta</span><span style="color:#A6E22E;"> name</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;viewport&quot;</span><span style="color:#A6E22E;"> content</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;width=device-width&quot;</span><span style="color:#F8F8F2;">/&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;隐私政策&lt;/</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">h1</span><span style="color:#F8F8F2;">&gt;隐私政策&lt;/</span><span style="color:#F92672;">h1</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">article</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;">&gt;1. 内容详情&lt;/</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">article</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">footer</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		我们的产品基于DCloud uni-app(5+ App/Wap2App)开发，应用运行期间需要收集您的设备唯一识别码（IMEI/android ID/DEVICE_ID/IDFA、SIM 卡 IMSI 信息、OAID）以提供统计分析服务，并通过应用启动数据及异常错误日志分析改进性能和用户体验，为用户提供更好的服务。</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">footer</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">html</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>service.html</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">&lt;!</span><span style="color:#F92672;">DOCTYPE</span><span style="color:#A6E22E;"> html</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">html</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;zh-Hans-CN&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">meta</span><span style="color:#A6E22E;"> charset</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;UTF-8&quot;</span><span style="color:#F8F8F2;">/&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">meta</span><span style="color:#A6E22E;"> name</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;viewport&quot;</span><span style="color:#A6E22E;"> content</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;width=device-width&quot;</span><span style="color:#F8F8F2;">/&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;服务协议&lt;/</span><span style="color:#F92672;">title</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">head</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">h1</span><span style="color:#F8F8F2;">&gt;服务协议&lt;/</span><span style="color:#F92672;">h1</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;</span><span style="color:#F92672;">article</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">		&lt;</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;">&gt;1. 内容详情&lt;/</span><span style="color:#F92672;">p</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">	&lt;/</span><span style="color:#F92672;">article</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">body</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">html</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,8)]))}const b=n(o,[["render",t]]);export{u as __pageData,b as default};
