"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[70924],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70731:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={},l=void 0,c={unversionedId:"IV. Spring Boot features/23.5. Application Events and Listeners",id:"IV. Spring Boot features/23.5. Application Events and Listeners",title:"23.5. Application Events and Listeners",description:"23.5. \u5e94\u7528\u4e8b\u4ef6\u548c\u76d1\u542c\u5668",source:"@site/docs/IV. Spring Boot features/23.5. Application Events and Listeners.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/23.5. Application Events and Listeners",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/23.5. Application Events and Listeners",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/23.5. Application Events and Listeners.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"23.4. Fluent Builder API",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/23.4. Fluent Builder API"},next:{title:"23.6. Web Environment",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/23.6. Web Environment"}},s={},u=[{value:"23.5. \u5e94\u7528\u4e8b\u4ef6\u548c\u76d1\u542c\u5668",id:"235-\u5e94\u7528\u4e8b\u4ef6\u548c\u76d1\u542c\u5668",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"235-\u5e94\u7528\u4e8b\u4ef6\u548c\u76d1\u542c\u5668"},"23.5. \u5e94\u7528\u4e8b\u4ef6\u548c\u76d1\u542c\u5668"),(0,o.kt)("p",null,"\u9664\u4e86\u5e38\u89c1\u7684Spring\u6846\u67b6\u4e8b\u4ef6\uff0c\u6bd4\u5982",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/5.0.4.RELEASE/javadoc-api/org/springframework/context/event/ContextRefreshedEvent.html"},"ContextRefreshedEvent"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"SpringApplication"),"\u4e5f\u4f1a\u53d1\u9001\u5176\u4ed6\u7684\u5e94\u7528\u4e8b\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," \u6709\u4e9b\u4e8b\u4ef6\u5b9e\u9645\u4e0a\u662f\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"ApplicationContext"),"\u521b\u5efa\u524d\u89e6\u53d1\u7684\uff0c\u6240\u4ee5\u4f60\u4e0d\u80fd\u5728\u90a3\u4e9b\u4e8b\u4ef6\uff08\u5904\u7406\u7c7b\uff09\u4e2d\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"@Bean"),"\u6ce8\u518c\u76d1\u542c\u5668\uff0c\u53ea\u80fd\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"SpringApplication.addListeners(\u2026)"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"SpringApplicationBuilder.listeners(\u2026)"),"\u65b9\u6cd5\u6ce8\u518c\u3002\u5982\u679c\u60f3\u8ba9\u76d1\u542c\u5668\u81ea\u52a8\u6ce8\u518c\uff0c\u800c\u4e0d\u5173\u5fc3\u5e94\u7528\u7684\u521b\u5efa\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u5728\u5de5\u7a0b\u4e2d\u6dfb\u52a0\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"META-INF/spring.factories"),"\u6587\u4ef6\uff0c\u5e76\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"org.springframework.context.ApplicationListener"),"\u4f5c\u4e3akey\u6307\u5411\u90a3\u4e9b\u76d1\u542c\u5668\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"org.springframework.context.ApplicationListener=com.example.project.MyListener\n")),(0,o.kt)("p",null,"\u5e94\u7528\u8fd0\u884c\u65f6\uff0c\u4e8b\u4ef6\u4f1a\u4ee5\u4e0b\u9762\u7684\u6b21\u5e8f\u53d1\u9001\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u8fd0\u884c\u5f00\u59cb\uff0c\u4f46\u9664\u4e86\u76d1\u542c\u5668\u6ce8\u518c\u548c\u521d\u59cb\u5316\u4ee5\u5916\u7684\u4efb\u4f55\u5904\u7406\u4e4b\u524d\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"ApplicationStartingEvent"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728Environment\u5c06\u88ab\u7528\u4e8e\u5df2\u77e5\u7684\u4e0a\u4e0b\u6587\uff0c\u4f46\u5728\u4e0a\u4e0b\u6587\u88ab\u521b\u5efa\u524d\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"ApplicationEnvironmentPreparedEvent"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728refresh\u5f00\u59cb\u524d\uff0c\u4f46\u5728bean\u5b9a\u4e49\u5df2\u88ab\u52a0\u8f7d\u540e\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"ApplicationPreparedEvent"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u4e0a\u4e0b\u6587\u66f4\u65b0\u540e\uff0c\u4f46\u5728\u4efb\u4f55\u5e94\u7528\u548c\u547d\u4ee4\u884c\u8fd0\u884c\u5668\u88ab\u8c03\u7528\u524d\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"ApplicationStartedEvent"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u4efb\u4f55\u5e94\u7528\u548c\u547d\u4ee4\u884c\u8fd0\u884c\u5668\u88ab\u8c03\u7528\u540e\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"ApplicationReadyEvent"),"\uff0c\u8868\u793a\u5e94\u7528\u51c6\u5907\u597d\u63a5\u6536\u8bf7\u6c42\u4e86\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8\u8fc7\u7a0b\u4e2d\u5982\u679c\u51fa\u73b0\u5f02\u5e38\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"ApplicationFailedEvent"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," \u901a\u5e38\u4e0d\u9700\u8981\u4f7f\u7528\u5e94\u7528\u4e8b\u4ef6\uff0c\u4f46\u77e5\u9053\u5b83\u4eec\u7684\u5b58\u5728\u662f\u6709\u7528\u7684\uff08\u5728\u67d0\u4e9b\u573a\u5408\u53ef\u80fd\u4f1a\u4f7f\u7528\u5230\uff09\uff0c\u6bd4\u5982\uff0c\u5728Spring Boot\u5185\u90e8\u4f1a\u4f7f\u7528\u4e8b\u4ef6\u5904\u7406\u5404\u79cd\u4efb\u52a1\u3002"),(0,o.kt)("p",null,"\u5e94\u7528\u4e8b\u4ef6\u901a\u8fc7Spring\u6846\u67b6\u7684\u4e8b\u4ef6\u53d1\u5e03\u673a\u5236\u53d1\u9001\u3002\u6b64\u673a\u5236\u7684\u4e00\u90e8\u5206\u786e\u4fdd\u4e86\u4e00\u4e2a\u53d1\u5e03\u5230\u5b50\u4e0a\u4e0b\u6587\u91cc\u7684\u76d1\u542c\u5668\u7684\u4e8b\u4ef6\uff0c\u4e5f\u4f1a\u53d1\u5e03\u5230\u4efb\u4f55\u7956\u5148\u4e0a\u4e0b\u6587\u91cc\u7684\u76d1\u542c\u5668\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u7684\u5e94\u7528\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"SpringApplication"),"\u5b9e\u4f8b\u7684\u5c42\u7ea7\uff0c\u76d1\u542c\u5668\u53ef\u80fd\u4f1a\u63a5\u6536\u5230\u5e94\u7528\u4e8b\u4ef6\u7684\u591a\u4e2a\u76f8\u540c\u7c7b\u578b\u7684\u5b9e\u4f8b\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u8ba9\u4f60\u7684\u76d1\u542c\u5668\u533a\u5206\u4e00\u4e2a\u4e8b\u4ef6\u662f\u5bf9\u5e94\u5b83\u7684\u4e0a\u4e0b\u6587\u8fd8\u662f\u5b50\u5b59\u4e0a\u4e0b\u6587\uff0c\u5b83\u5e94\u5f53\u8bf7\u6c42\u5b83\u7684\u5e94\u7528\u4e0a\u4e0b\u6587\u88ab\u6ce8\u5165\uff0c\u7136\u540e\u6bd4\u8f83\u6ce8\u5165\u7684\u4e0a\u4e0b\u6587\u4e0e\u4e8b\u4ef6\u7684\u4e0a\u4e0b\u6587\u3002\u4e0a\u4e0b\u6587\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"ApplicationContextAware"),"\u6ce8\u5165\u3002\u6216\u8005\uff0c\u5982\u679c\u76d1\u542c\u5668\u662f\u4e00\u4e2abean\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"@Autowired"),"\u3002"))}m.isMDXComponent=!0}}]);