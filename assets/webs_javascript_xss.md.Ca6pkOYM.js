import{_ as e,c as a,o as s,a1 as t}from"./chunks/framework.B3EJgH_4.js";const u=JSON.parse('{"title":"理论篇.安全 【XSS, CSRF】","description":"","frontmatter":{},"headers":[],"relativePath":"webs/javascript/xss.md","filePath":"webs/javascript/xss.md","lastUpdated":1704160720000}'),i={name:"webs/javascript/xss.md"},r=t('<h1 id="理论篇-安全-【xss-csrf】" tabindex="-1">理论篇.安全 【XSS, CSRF】 <a class="header-anchor" href="#理论篇-安全-【xss-csrf】" aria-label="Permalink to &quot;理论篇.安全 【XSS, CSRF】&quot;">​</a></h1><h2 id="xss" tabindex="-1">XSS <a class="header-anchor" href="#xss" aria-label="Permalink to &quot;XSS&quot;">​</a></h2><ul><li><p>跨站脚本攻击 (Cross Site Scripting, 避免与CSS混淆)</p></li><li><p>设置HttpOnly, 使js无法读取cookie</p></li><li><p>对提交内容进行验证, 防止注入敏感信息</p></li><li><p>cookie和其它验证绑定, 避免cookie泄露的危险</p></li></ul><h2 id="csrf" tabindex="-1">CSRF <a class="header-anchor" href="#csrf" aria-label="Permalink to &quot;CSRF&quot;">​</a></h2><ul><li><p>跨站请求伪造 (Cross Site Request Forgery)</p></li><li><p>请求时附带 token</p></li><li><p>请求的header附带 token</p></li></ul>',5),o=[r];function l(c,n,p,_,d,S){return s(),a("div",null,o)}const f=e(i,[["render",l]]);export{u as __pageData,f as default};
