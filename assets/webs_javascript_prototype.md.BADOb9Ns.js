import{_ as s,c as n,o as a,a1 as l}from"./chunks/framework.B3EJgH_4.js";const b=JSON.parse('{"title":"JS 原型 【prototype】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/javascript/prototype.md","filePath":"webs/javascript/prototype.md","lastUpdated":1715407916000}'),o={name:"webs/javascript/prototype.md"},e=l(`<h1 id="js-原型-【prototype】" tabindex="-1">JS 原型 【prototype】 <a class="header-anchor" href="#js-原型-【prototype】" aria-label="Permalink to &quot;JS 原型 【prototype】&quot;">​</a></h1><h2 id="非空属性的对象" tabindex="-1">非空属性的对象 <a class="header-anchor" href="#非空属性的对象" aria-label="Permalink to &quot;非空属性的对象&quot;">​</a></h2><ul><li><p>都有一个原型对象<code>Prototype</code>, 部分内置属性会直接定义其下, 其中包括<code>__proto__</code>, <code>constructor</code></p></li><li><p>都是由原生&quot;构造器&quot;<strong>new</strong>出来的构造函数</p><ul><li><code>ƒ Function() { [native code] }</code><ul><li>包括<code>Function</code>, <code>Object</code>, <code>Array</code>, <code>RegExp</code>, <code>Date</code>, <code>Symbol</code>, <code>BigInt</code>, <code>Number</code>, <code>Boolean</code>, <code>String</code></li></ul></li><li><code>ƒ Object() { [native code] }</code><ul><li>包括<code>Math</code>, <code>JSON</code>,</li></ul></li></ul></li></ul><details class="details custom-block"><summary>示例</summary><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">// jg: true</span></span>
<span class="line"><span style="color:#F8F8F2;">Function.constructor </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> Object.constructor;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// jg: true</span></span>
<span class="line"><span style="color:#F8F8F2;">Math.constructor </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> JSON.constructor;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details><h2 id="constructor" tabindex="-1"><code>constructor</code> <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;\`constructor\`&quot;">​</a></h2><ul><li>指向该对象的&quot;构造器&quot;, 部分内置属性会定义于此</li></ul><h2 id="proto" tabindex="-1"><code>__proto__</code> <a class="header-anchor" href="#proto" aria-label="Permalink to &quot;\`__proto__\`&quot;">​</a></h2><ul><li>指向<code>Prototype</code>本身, 是&quot;原型链&quot;实现的关键, 最终指向<code>null</code></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">// jg: true</span></span>
<span class="line"><span style="color:#F8F8F2;">Object.__proto__.__proto__.__proto__ </span><span style="color:#F92672;">===</span><span style="color:#AE81FF;"> null</span><span style="color:#F8F8F2;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>原型链, 即函数中返回原型对象(return this), 再指向该原型的属性或函数</li></ul><details class="details custom-block"><summary>示例</summary><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">// 构造器</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#A6E22E;"> Pro</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">a</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#FD971F;">	this</span><span style="color:#F8F8F2;">.a </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> a;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">Pro</span><span style="color:#F8F8F2;">.prototype </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#A6E22E;">	b</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;font-style:italic;">function</span><span style="color:#F8F8F2;"> () {</span></span>
<span class="line"><span style="color:#F8F8F2;">		console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">++</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.a);</span></span>
<span class="line"><span style="color:#F92672;">		return</span><span style="color:#FD971F;"> this</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">	}</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">Pro</span><span style="color:#F8F8F2;">.prototype.</span><span style="color:#A6E22E;">c</span><span style="color:#F92672;"> =</span><span style="color:#66D9EF;font-style:italic;"> function</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F8F8F2;">	console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">++</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.a);</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 构造函数, 调用原型方法, 原型中的 this 指向 Pro, jg: 2 3</span></span>
<span class="line"><span style="color:#F92672;">new</span><span style="color:#A6E22E;"> Pro</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">).</span><span style="color:#A6E22E;">b</span><span style="color:#F8F8F2;">().</span><span style="color:#A6E22E;">c</span><span style="color:#F8F8F2;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></details>`,11),p=[e];function t(c,r,i,F,d,u){return a(),n("div",null,p)}const m=s(o,[["render",t]]);export{b as __pageData,m as default};
