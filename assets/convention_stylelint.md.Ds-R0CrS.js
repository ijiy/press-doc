import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const b=JSON.parse('{"title":"Stylelint格式化 【.stylelintrc】","description":"","frontmatter":{},"headers":[],"relativePath":"convention/stylelint.md","filePath":"convention/stylelint.md","lastUpdated":1707209816000}'),e={name:"convention/stylelint.md"};function o(t,s,r,c,F,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="stylelint格式化-【-stylelintrc】" tabindex="-1">Stylelint格式化 【.stylelintrc】 <a class="header-anchor" href="#stylelint格式化-【-stylelintrc】" aria-label="Permalink to &quot;Stylelint格式化 【.stylelintrc】&quot;">​</a></h1><ul><li>.stylelintrc.cjs</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">module</span><span style="color:#F8F8F2;">.</span><span style="color:#66D9EF;font-style:italic;">exports</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">	root: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">	rules: {</span></span>
<span class="line"><span style="color:#88846F;">		// 以下摘选自标准规则 (stylelint-config-standard)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 正确的优先级覆盖 (错误: .b .a {} .a {}, 正确: .a {} .b .a {})</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;no-descending-specificity&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 禁止 重复定义变量 (错误: --qp-w: 1, --qp-w: 2)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;declaration-block-no-duplicate-custom-properties&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 重复属性 (错误: width: 1, width: 2) (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;declaration-block-no-duplicate-properties&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 重复字体 (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;font-family-no-duplicate-names&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 关键帧中出现重复选择器 (错误: 100%{}, 100%{})</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;keyframe-block-no-duplicate-selectors&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 重复导入样式规则</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;no-duplicate-at-import-rules&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 重复选择器</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;no-duplicate-selectors&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 禁止 空的样式块</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;block-no-empty&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 空的注释</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;comment-no-empty&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 空样式的文件 (空的&lt;style&gt; 和 vue/no-empty-component-block 一样)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;no-empty-source&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 正确的色值</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;color-no-invalid-hex&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 要求 calc中运算符左右要有空格 (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;function-calc-no-unspaced-operator&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 关键帧中使用 !important (MDN: 关键帧中出现的 !important 将会被忽略)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;keyframe-declaration-no-important&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 要求 媒体查询中规范书写逻辑运算符 (错误: @media not(...), 正确: @media not (...))</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;media-query-no-invalid&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 双斜杠注释 (// 不是css的标准, 可能引起意外的问题)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;no-invalid-double-slash-comments&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 要求 字符串属性值之间不要换行 (正确: font-family: &quot;Microsoft YaHei&quot;)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;string-no-newline&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 禁止 不规范的空格</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;no-irregular-whitespace&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 使用var引用变量</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;custom-property-no-missing-var-function&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 规范的渐变方向</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;function-linear-gradient-no-nonstandard-direction&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 正确的缩写和全写的顺序 (IDE会提示)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;declaration-block-no-shorthand-property-overrides&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 正确的选择器匹配值 (错误: :nth-child(0), 正确: :nth-child(1))</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;selector-anb-no-unmatchable&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 禁止 未知的属性方法 (错误: transform: unknown(1))</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;function-no-unknown&#39;</span><span style="color:#F8F8F2;">: [</span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">, {ignoreFunctions: [</span><span style="color:#E6DB74;">&#39;v-bind&#39;</span><span style="color:#F8F8F2;">]}],</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 未知的属性 (错误: colr: red)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;property-no-unknown&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 未知的伪类</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;selector-pseudo-class-no-unknown&#39;</span><span style="color:#F8F8F2;">: [</span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">, {ignorePseudoClasses: [</span><span style="color:#E6DB74;">&#39;deep&#39;</span><span style="color:#F8F8F2;">]}],</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 未知的伪元素</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;selector-pseudo-element-no-unknown&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 禁止 未知的标签选择器</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;selector-type-no-unknown&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 禁止 0px (正确: 0) (IDE会提示) (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;length-zero-no-unit&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 属性方法是小写的 (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;function-name-case&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;lower&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 要求 标签选择器是小写的 (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;selector-type-case&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;lower&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 要求 属性值是小写的 (自动修复) (v-bind(xX)也会被修复成小写, 需要改成v-bind(&quot;xX&quot;))</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;value-keyword-case&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;lower&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 属性之间不要有换行 (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;declaration-empty-line-before&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;never&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 颜色方法的值要用逗号分隔 (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;color-function-notation&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;legacy&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 要求 使用短色值 (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;color-hex-length&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;short&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 要求 使用Level 4 CSS的写法 (错误: :not(a):not(div) {}, 正确: :not(a, div) {}) (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;selector-not-notation&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;complex&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 要求 正确的伪元素写法 (错误: :after, 正确: ::after) (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;selector-pseudo-element-colon-notation&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;double&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 规范的类名 (eg: .ab-cd, .el-xx)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;selector-class-pattern&#39;</span><span style="color:#F8F8F2;">: [</span><span style="color:#E6DB74;">&#39;(^[a-z][-a-zA-Z0-9])|(^el-)+$&#39;</span><span style="color:#F8F8F2;">, {resolveNestedSelectors: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">}],</span></span>
<span class="line"><span style="color:#88846F;">		// 要求 规范的动画名 (eg: ani_wave)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;keyframes-name-pattern&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;ani_.+&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 字体只在需要的时候添加引号 (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;font-family-name-quotes&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;always-where-required&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 要求 url()使用引号 (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;function-url-quotes&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;never&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 要求 选择器属性不要加引号 (错误: [class|=&quot;top&quot;], 正确: [class|=top]) (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;selector-attribute-quotes&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;never&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 属性值简写 (错误: margin: 1px 1px; 正确: margin: 1px;) (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;shorthand-property-no-redundant-values&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 要求 注释前后有空格 (正确: /* xx */) (自动修复)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;comment-whitespace-inside&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;always&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 以下摘选自非标准规则</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">		// 禁止 色值为#aaaa或#aaaaaaa (正确: #aaa或#aaaaaa)</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;color-hex-alpha&#39;</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39;never&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">		// 允许 单位</span></span>
<span class="line"><span style="color:#E6DB74;">		&#39;unit-allowed-list&#39;</span><span style="color:#F8F8F2;">: [</span><span style="color:#E6DB74;">&#39;px&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;em&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;%&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;vh&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;vw&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;s&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;ms&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;deg&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;fr&#39;</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">	},</span></span>
<span class="line"><span style="color:#F8F8F2;">	overrides: [</span></span>
<span class="line"><span style="color:#F8F8F2;">		{</span></span>
<span class="line"><span style="color:#F8F8F2;">			files: </span><span style="color:#E6DB74;">&#39;src/**/*.vue&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">			customSyntax: </span><span style="color:#E6DB74;">&#39;postcss-html&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">		{</span></span>
<span class="line"><span style="color:#F8F8F2;">			files: </span><span style="color:#E6DB74;">&#39;src/**/*.scss&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">			customSyntax: </span><span style="color:#E6DB74;">&#39;postcss-scss&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">		},</span></span>
<span class="line"><span style="color:#F8F8F2;">	],</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br></div></div>`,3)]))}const u=n(e,[["render",o]]);export{b as __pageData,u as default};
