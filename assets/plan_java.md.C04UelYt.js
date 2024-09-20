import{_ as e,c as l,o as a,a1 as r}from"./chunks/framework.B3EJgH_4.js";const g=JSON.parse('{"title":"JAVA","description":"","frontmatter":{},"headers":[],"relativePath":"plan/java.md","filePath":"plan/java.md","lastUpdated":1716256931000}'),t={name:"plan/java.md"},i=r('<h1 id="java" tabindex="-1">JAVA <a class="header-anchor" href="#java" aria-label="Permalink to &quot;JAVA&quot;">​</a></h1><h2 id="maven" tabindex="-1"><a href="https://blog.csdn.net/weixin_44458365/article/details/118416385" target="_blank" rel="noreferrer">Maven</a> <a class="header-anchor" href="#maven" aria-label="Permalink to &quot;[Maven](https://blog.csdn.net/weixin_44458365/article/details/118416385)&quot;">​</a></h2><ul><li>作用 <ol><li>管理依赖：管理Jar及其下载，版本</li><li>构建项目：完成项目代码的编译、测试、打包和部署</li></ol></li></ul><h2 id="springboot" tabindex="-1"><a href="https://www.cnblogs.com/sss4/p/16312148.html" target="_blank" rel="noreferrer">SpringBoot</a> <a class="header-anchor" href="#springboot" aria-label="Permalink to &quot;[SpringBoot](https://www.cnblogs.com/sss4/p/16312148.html)&quot;">​</a></h2><p>SpringBoot2</p><p>问题 *是搭配 <code>SQL</code> (MyBatis), 还是搭配 <code>NoSQL</code> (Redis, MongoDB, RabbitMQ) + 实际业务中会用redis做mybatis的二级缓存 + 不行的就选择 Redis</p><ul><li>搭配: <a href="https://www.springcloud.cc/spring-security.html" target="_blank" rel="noreferrer">Spring Security</a><ul><li>SpringSecurity+OAuth2, 实现认证授权和安全保护; 实现SSO单点登录</li></ul></li></ul><p>自动化配置、条件注解、Java配置</p><ul><li><p><a href="https://www.zhihu.com/education/video-course/1483149993993678849" target="_blank" rel="noreferrer">SSM 框架 SpringSpringMVCMyBatis</a></p><ul><li>SSM 是当今企业开发中必备基础框架，学习完该套课程，可以进行几乎所有功能性项目开发，例如购物网站、社交网站、办公系统等。</li></ul></li><li><p><a href="https://blog.csdn.net/lsl5713/article/details/124451398" target="_blank" rel="noreferrer">Mybatis</a></p><ul><li><a href="https://www.bilibili.com/video/BV1rE41197jR" target="_blank" rel="noreferrer">MybatisPlus</a></li><li>将SQL语句和Java代码进行分离，让大家更注重于业务逻辑的实现</li></ul></li><li><p><a href="https://www.bilibili.com/video/BV1LQ4y127n4" target="_blank" rel="noreferrer">SpringCloud+RabbitMQ+Docker+Redis+搜索+分布式</a></p></li></ul><h2 id="如何学习" tabindex="-1"><a href="https://blog.csdn.net/itcast_cn/article/details/129537187" target="_blank" rel="noreferrer">如何学习</a> <a class="header-anchor" href="#如何学习" aria-label="Permalink to &quot;[如何学习](https://blog.csdn.net/itcast_cn/article/details/129537187)&quot;">​</a></h2><ul><li><a href="https://www.springcloud.cc/spring-cloud-dalston.html" target="_blank" rel="noreferrer">SpringCloud</a></li></ul><h2 id="开发工具" tabindex="-1">开发工具 <a class="header-anchor" href="#开发工具" aria-label="Permalink to &quot;开发工具&quot;">​</a></h2><ul><li><a href="https://www.jetbrains.com/help/idea/spring-boot.html" target="_blank" rel="noreferrer">IntelliJ IDEA</a><ul><li><a href="https://baijiahao.baidu.com/s?id=1743008317921350114" target="_blank" rel="noreferrer">IntelliJ安装激活</a><ul><li><a href="https://www.jb51.net/article/268258.htm" target="_blank" rel="noreferrer">安装激活</a></li></ul></li><li><a href="https://apifox.com/help/ide-plugin/idea-plugin/quickstart/practice" target="_blank" rel="noreferrer">快速生成 API 文档, 并同步到Apifox</a></li><li><a href="https://www.java-doc.cn/article/7" target="_blank" rel="noreferrer">Webstorm安装激活</a></li></ul></li></ul><h2 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h2><ul><li><p>Activiti7+Camunda实现业务流程</p></li><li><p>Spring Cloud Gateway实现微服务网关，</p><ul><li>Ribbon实现负载均衡，</li><li>Feign实现服务调用，</li><li>Bus实现消息总线，</li><li>Stream实现事件驱动，</li><li>Sleuth实现链路跟踪，</li><li>Turbine实现集群聚合监控</li></ul></li><li><p>Spring Scheduling Tasks实现分布式任务调度</p></li><li><p>Redis作为分布式缓存，实现高性能数据读取</p><ul><li>Mybatis + Mybatis-Plus作为持久层框架，读写性能好，更适合SQL的优化。</li></ul></li><li><p>MongoDB作为高性能数据存储，实现统计服务</p></li><li><p>Elasticsearch作为分布式大数据搜索分析引擎，Logstash作为分布式实时数据采集日志组件，Kibana作为分布式数据可视化日志组件</p></li><li><p>Prometheus时序数据监控和Grafana可视化平台</p></li><li><p>Swagger实现接口文档和协同开发</p></li></ul><h2 id="sentinel" tabindex="-1">Sentinel <a class="header-anchor" href="#sentinel" aria-label="Permalink to &quot;Sentinel&quot;">​</a></h2><ul><li><p>应用: 微服务</p><ul><li>分布式、多语言异构化服务架构的流量治理组件</li><li>主要以流量为切入点，从流量路由、流量控制、流量整形、熔断降级、系统自适应过载保护、热点流量防护等多个维度来帮助开发者保障微服务的稳定性</li></ul></li><li><p><a href="https://gitee.com/mirrors/Sentinel" target="_blank" rel="noreferrer">gitee</a></p></li><li><p><a href="https://sentinelguard.io/zh-cn/docs/introduction.html" target="_blank" rel="noreferrer">中文文档</a></p></li></ul><h2 id="其它文献" tabindex="-1">其它文献 <a class="header-anchor" href="#其它文献" aria-label="Permalink to &quot;其它文献&quot;">​</a></h2><ul><li><p><a href="https://blog.csdn.net/weixin_47971206/article/details/121711708" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_47971206/article/details/121711708</a></p></li><li><p><a href="https://www.yiibai.com/spring-boot" target="_blank" rel="noreferrer">https://www.yiibai.com/spring-boot</a></p></li><li><p><a href="https://gitee.com/xiandafu/springboot-plus" target="_blank" rel="noreferrer">https://gitee.com/xiandafu/springboot-plus</a></p></li><li><p><a href="https://blog.csdn.net/weixin_40516924/article/details/126255949" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_40516924/article/details/126255949</a></p></li><li><p><a href="https://blog.csdn.net/m0_52433668/article/details/123229226" target="_blank" rel="noreferrer">https://blog.csdn.net/m0_52433668/article/details/123229226</a></p></li><li><p><a href="https://spring.io/projects/spring-boot" target="_blank" rel="noreferrer">https://spring.io/projects/spring-boot</a></p></li><li><p><a href="https://blog.csdn.net/SoulNone/article/details/127572997" target="_blank" rel="noreferrer">Thymeleaf</a></p><ul><li>模板引擎</li></ul></li><li><p><a href="https://blog.csdn.net/weixin_45410366/article/details/125031959" target="_blank" rel="noreferrer">JWT</a></p><ul><li>用于用户登录鉴权</li></ul></li></ul>',19),n=[i];function o(s,p,h,c,d,u){return a(),l("div",null,n)}const f=e(t,[["render",o]]);export{g as __pageData,f as default};
