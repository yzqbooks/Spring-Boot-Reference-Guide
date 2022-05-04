"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[60951],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),f=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=f(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=f(t),m=a,d=s["".concat(p,".").concat(m)]||s[m]||l[m]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var f=2;f<i;f++)o[f]=t[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},63828:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return l}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={},p=void 0,f={unversionedId:"IV. Spring Boot features/31.1.8 Caffeine",id:"IV. Spring Boot features/31.1.8 Caffeine",title:"31.1.8 Caffeine",description:"31.1.8 Caffeine",source:"@site/docs/IV. Spring Boot features/31.1.8 Caffeine.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/31.1.8 Caffeine",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/31.1.8 Caffeine",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/31.1.8 Caffeine.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"31.1.7 Redis",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/31.1.7 Redis"},next:{title:"31.1.9 Simple",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/31.1.9 Simple"}},u={},l=[{value:"31.1.8 Caffeine",id:"3118-caffeine",level:3}],s={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"3118-caffeine"},"31.1.8 Caffeine"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ben-manes/caffeine"},"Caffeine"),"\u662fJava 8\u5bf9Guava\u7f13\u5b58\u7684\u91cd\u5199\u7248\u672c\uff0c\u53d6\u4ee3\u4e86Guava\u3002\u5982\u679c\u51fa\u73b0Caffeine\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"CaffeineCacheManager"),"\uff08\u7531",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-cache")," Starter\u63d0\u4f9b\uff09\u5c06\u4f1a\u81ea\u52a8\u914d\u7f6e\u3002\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"spring.cache.cache-names"),"\u5c5e\u6027\u53ef\u4ee5\u5728\u542f\u52a8\u65f6\u521b\u5efa\u7f13\u5b58\uff0c\u5e76\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u914d\u7f6e\u4e2d\u7684\u4e00\u4e2a\u8fdb\u884c\u81ea\u5b9a\u4e49\uff08\u6309\u6307\u793a\u7684\u987a\u5e8f\uff09\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"spring.cache.caffeine.spec"),"\u5b9a\u4e49\u7684\u7279\u6b8a\u7f13\u5b58"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"com.github.benmanes.caffeine.cache.CaffeineSpec")," bean\u5b9a\u4e49"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"com.github.benmanes.caffeine.cache.Caffeine")," bean\u5b9a\u4e49")),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u914d\u7f6e\u521b\u5efa\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"cache1 "),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"cache2"),"\u7f13\u5b58\uff0c\u6700\u5927\u6570\u91cf\u4e3a500\uff0c\u5b58\u6d3b\u65f6\u95f4\u4e3a10\u5206\u949f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"spring.cache.cache-names=cache1,cache2\nspring.cache.caffeine.spec=maximumSize=500,expireAfterAccess=600s\n")),(0,i.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u5982\u679c\u5b9a\u4e49\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"com.github.benmanes.caffeine.cache.CacheLoader"),"\uff0c\u5b83\u4f1a\u81ea\u52a8\u5173\u8054\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"CaffeineCacheManager"),"\u3002\u7531\u4e8e\u8be5",(0,i.kt)("inlineCode",{parentName:"p"},"CacheLoader"),"\u5c06\u5173\u8054\u88ab\u8be5\u7f13\u5b58\u7ba1\u7406\u5668\u7ba1\u7406\u7684\u6240\u6709\u7f13\u5b58\uff0c\u6240\u4ee5\u5b83\u5fc5\u987b\u5b9a\u4e49\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"CacheLoader<Object, Object>"),"\u3002\u81ea\u52a8\u914d\u7f6e\u5c06\u5ffd\u7565\u6240\u6709\u6cdb\u578b\u7c7b\u578b\u3002"))}m.isMDXComponent=!0}}]);