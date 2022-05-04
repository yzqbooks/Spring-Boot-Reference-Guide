"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[47404],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60387:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={},c=void 0,s={unversionedId:"IV. Spring Boot features/31.1 Supported Cache Providers",id:"IV. Spring Boot features/31.1 Supported Cache Providers",title:"31.1 Supported Cache Providers",description:"31.1 \u652f\u6301\u7684\u7f13\u5b58\u63d0\u4f9b\u5546",source:"@site/docs/IV. Spring Boot features/31.1 Supported Cache Providers.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/31.1 Supported Cache Providers",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/31.1 Supported Cache Providers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/31.1 Supported Cache Providers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"30.9.3 Embedded In-memory LDAP Server",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.9.3 Embedded In-memory LDAP Server"},next:{title:"31.1.1 Generic",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/31.1.1 Generic"}},l={},u=[{value:"31.1 \u652f\u6301\u7684\u7f13\u5b58\u63d0\u4f9b\u5546",id:"311-\u652f\u6301\u7684\u7f13\u5b58\u63d0\u4f9b\u5546",level:3}],m={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"311-\u652f\u6301\u7684\u7f13\u5b58\u63d0\u4f9b\u5546"},"31.1 \u652f\u6301\u7684\u7f13\u5b58\u63d0\u4f9b\u5546"),(0,o.kt)("p",null,"\u7f13\u5b58\u62bd\u8c61\u4e0d\u63d0\u4f9b\u5b9e\u9645\u7684\u5b58\u50a8\uff0c\u800c\u662f\u4f9d\u8d56\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"org.springframework.cache.Cache"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"org.springframework.cache.CacheManager"),"\u63a5\u53e3\u7684\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b9a\u4e49\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"CacheManager"),"\u7c7b\u578b\u7684bean\uff0c\u6216\u4e00\u4e2a\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"cacheResolver"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"CacheResolver"),"\uff08\u67e5\u770b",(0,o.kt)("inlineCode",{parentName:"p"},"CachingConfigurer"),"\uff09\uff0cSpring Boot\u5c06\u5c1d\u8bd5\u4ee5\u4e0b\u63d0\u4f9b\u5546\uff08\u6309\u8fd9\u4e2a\u987a\u5e8f)\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-caching-provider-generic"},"Generic"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-caching-provider-jcache"},"JCache (JSR-107)"),"(EhCache 3, Hazelcast, Infinispan, etc)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-caching-provider-ehcache2"},"EhCache 2.x"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-caching-provider-hazelcast"},"Hazelcast"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-caching-provider-infinispan"},"Infinispan"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-caching-provider-couchbase"},"Couchbase"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-caching-provider-redis"},"Redis"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-caching-provider-caffeine"},"Caffeine"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-caching-provider-simple"},"Simple")),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("strong",{parentName:"p"},"\u63d0\u793a")," ",(0,o.kt)("inlineCode",{parentName:"p"},"spring.cache.type"),"\u5c5e\u6027\u53ef\u5f3a\u5236\u6307\u5b9a\u4f7f\u7528\u7684\u7f13\u5b58\u63d0\u4f9b\u5546\uff0c\u5982\u679c\u9700\u8981\u5728\u4e00\u4e9b\u73af\u5883\uff08\u6bd4\u5982\uff0c\u6d4b\u8bd5\uff09\u4e2d",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-caching-provider-none"},"\u7981\u7528\u5168\u90e8\u7f13\u5b58"),"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8be5\u5c5e\u6027\u3002"),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("strong",{parentName:"p"},"\u63d0\u793a")," \u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-cache"),"\u201cStarter\u201d\u6765\u5feb\u901f\u6dfb\u52a0\u57fa\u7840\u7684\u7f13\u5b58\u4f9d\u8d56\u3002\u201cStarter\u201d\u5e26\u6765\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"spring-context-support"),"\uff1a\u5982\u679c\u4f60\u624b\u52a8\u6dfb\u52a0\u4f9d\u8d56\uff0c\u4e3a\u4e86\u4f7f\u7528JCache\u3001EhCache2.x\u6216\u8005Guava\u7684\u652f\u6301\uff0c\u4f60\u5fc5\u987b\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"spring-context-support"),"\u3002"),(0,o.kt)("p",{parentName:"li"}," \u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"CacheManager"),"\u662fSpring Boot\u81ea\u52a8\u914d\u7f6e\u7684\uff0c\u4f60\u53ef\u4ee5\u5728\u5b83\u5b8c\u5168\u521d\u59cb\u5316\u524d\uff0c\u901a\u8fc7\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"CacheManagerCustomizer"),"\u63a5\u53e3\u8fdb\u4e00\u6b65\u914d\u7f6e\uff0c\u4ee5\u4e0b\u8bbe\u7f6e\u6807\u5fd7\u8868\u660e\u7a7a\u503c\u5e94\u5f53\u4f20\u9012\u7ed9\u5e95\u5c42\u6620\u5c04\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic CacheManagerCustomizer<ConcurrentMapCacheManager> cacheManagerCustomizer() {\n   return new CacheManagerCustomizer<ConcurrentMapCacheManager>() {\n       @Override\n       public void customize(ConcurrentMapCacheManager cacheManager) {\n           cacheManager.setAllowNullValues(false);\n       }\n   };\n}\n")),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," \u5728\u4ee5\u4e0a\u793a\u4f8b\u4e2d\uff0c\u5e0c\u671b\u5f97\u5230\u4e00\u4e2a\u81ea\u52a8\u914d\u7f6e\u597d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrentMapCacheManager"),"\u3002\u5982\u679c\u6ca1\u6709\u914d\u7f6e\uff08\u8981\u4e48\u4f60\u63d0\u4f9b\u4f60\u81ea\u5df1\u7684\u914d\u7f6e\uff0c\u8981\u4e48\u4e00\u4e2a\u4e0d\u540c\u7684\u7f13\u5b58\u63d0\u4f9b\u5546\u88ab\u81ea\u52a8\u914d\u7f6e\uff09\uff0c\u5219\u81ea\u5b9a\u4e49\u5668\uff08customizer\uff09\u5c06\u4e0d\u4f1a\u88ab\u8c03\u7528\u3002\u81ea\u5b9a\u4e49\u5668\u4f60\u6dfb\u52a0\u591a\u5c11\u90fd\u53ef\u4ee5\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"@Order"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"Ordered"),"\u5bf9\u5b83\u4eec\u8fdb\u884c\u6392\u5e8f\u3002"))))}d.isMDXComponent=!0}}]);