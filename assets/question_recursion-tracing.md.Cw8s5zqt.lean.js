import{_ as n,c as a,a0 as l,o as p}from"./chunks/framework.Bakaa70P.js";const u=JSON.parse('{"title":"递归回溯","description":"","frontmatter":{},"headers":[],"relativePath":"question/recursion-tracing.md","filePath":"question/recursion-tracing.md","lastUpdated":1715407916000}'),e={name:"question/recursion-tracing.md"};function o(t,s,r,c,F,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="递归回溯" tabindex="-1">递归回溯 <a class="header-anchor" href="#递归回溯" aria-label="Permalink to &quot;递归回溯&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><blockquote><p>给你一个整数数组 nums, 要求返回该数组所有可能的子集</p></blockquote><ul><li>示例 <ul><li>输入: <code>nums = [1,2,3]</code></li><li>输出: <code>[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]</code></li></ul></li></ul><h2 id="解题" tabindex="-1">解题 <a class="header-anchor" href="#解题" aria-label="Permalink to &quot;解题&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#88846F;">/**</span></span>
<span class="line"><span style="color:#88846F;"> * 递归回溯</span></span>
<span class="line"><span style="color:#88846F;"> * </span><span style="color:#66D9EF;font-style:italic;">@param</span><span style="color:#F8F8F2;"> nums</span><span style="color:#88846F;"> 数值数组</span></span>
<span class="line"><span style="color:#88846F;"> */</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#A6E22E;"> recursionTracing</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">nums</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> number</span><span style="color:#F8F8F2;">[])</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> number</span><span style="color:#F8F8F2;">[][] </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#F8F8F2;"> numArrs</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> number</span><span style="color:#F8F8F2;">[][] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">	const</span><span style="color:#A6E22E;"> recursionHandle</span><span style="color:#F92672;"> =</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">index</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> number</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">selectNum</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> number</span><span style="color:#F8F8F2;">[]) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">		numArrs.</span><span style="color:#A6E22E;">push</span><span style="color:#F8F8F2;">(selectNum);</span></span>
<span class="line"><span style="color:#88846F;">		// 可排除 []</span></span>
<span class="line"><span style="color:#88846F;">		// index &amp;&amp; numArrs.push(selectNum);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">		let</span><span style="color:#F8F8F2;"> i</span><span style="color:#F92672;">:</span><span style="color:#66D9EF;font-style:italic;"> number</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">		for</span><span style="color:#F8F8F2;"> (i </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> index; i </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> nums.length; i</span><span style="color:#F92672;">++</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#A6E22E;">			recursionHandle</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">1</span><span style="color:#F92672;"> +</span><span style="color:#F8F8F2;"> i, [</span><span style="color:#F92672;">...</span><span style="color:#F8F8F2;">selectNum, nums[i]]);</span></span>
<span class="line"><span style="color:#F8F8F2;">		}</span></span>
<span class="line"><span style="color:#F8F8F2;">	};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">	recursionHandle</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, []);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">	return</span><span style="color:#F8F8F2;"> numArrs;</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#A6E22E;">recursionTracing</span><span style="color:#F8F8F2;">([</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">]));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,6)]))}const b=n(e,[["render",o]]);export{u as __pageData,b as default};
