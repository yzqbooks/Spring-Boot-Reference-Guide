"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[76986],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28001:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={},p=void 0,u={unversionedId:"V. Spring Boot Actuator/54.3.2 Spring WebFlux Metrics",id:"V. Spring Boot Actuator/54.3.2 Spring WebFlux Metrics",title:"54.3.2 Spring WebFlux Metrics",description:"54.3.2 Spring WebFlux\u6307\u6807",source:"@site/docs/V. Spring Boot Actuator/54.3.2 Spring WebFlux Metrics.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/54.3.2 Spring WebFlux Metrics",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.3.2 Spring WebFlux Metrics",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/54.3.2 Spring WebFlux Metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"54.3.1 Spring MVC Metrics",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.3.1 Spring MVC Metrics"},next:{title:"54.3.3 RestTemplate Metrics",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.3.3 RestTemplate Metrics"}},c={},s=[{value:"54.3.2 Spring WebFlux\u6307\u6807",id:"5432-spring-webflux\u6307\u6807",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"5432-spring-webflux\u6307\u6807"},"54.3.2 Spring WebFlux\u6307\u6807"),(0,o.kt)("p",null,"\u81ea\u52a8\u914d\u7f6e\u53ef\u4ee5\u68c0\u6d4bWebFlux\u63a7\u5236\u5668\u5904\u7406\u7684\u6240\u6709\u8bf7\u6c42\u3002\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u52a9\u624b\u7c7b",(0,o.kt)("inlineCode",{parentName:"p"},"RouterFunctionMetrics"),"\u6765\u68c0\u6d4b\u4f7f\u7528WebFlux\u51fd\u6570\u5f0f\u7f16\u7a0b\u6a21\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"http.server.requests"),"\u8fd9\u4e2a\u540d\u79f0\u6765\u751f\u6210\u5ea6\u91cf\u6807\u51c6\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"management.metrics.web.server.requests-metric-name"),"\u5c5e\u6027\u6765\u81ea\u5b9a\u4e49\u540d\u79f0\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u57fa\u4e8e\u6ce8\u89e3\u7684\u7f16\u7a0b\u6a21\u578b\u7684webflux\u76f8\u5173\u6307\u6807\u4f1a\u88ab\u6807\u8bb0\u4e0a\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u65b9\u6cd5"),"\uff0c\u8bf7\u6c42\u7684\u65b9\u6cd5(\u4f8b\u5982\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"GET"),"\u6216",(0,o.kt)("inlineCode",{parentName:"li"},"POST"),")\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uri"),"\uff0c\u8bf7\u6c42\u5728\u53d8\u91cf\u66ff\u6362\u4e4b\u524d\u7684uri\u6a21\u677f\uff0c\u5982\u679c\u53ef\u80fd\u7684\u8bdd(\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"li"},"/api/person/{id}"),")\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u72b6\u6001"),"\uff0c\u54cd\u5e94\u7684HTTP\u72b6\u6001\u7801(\u4f8b\u5982\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"200"),"\u6216",(0,o.kt)("inlineCode",{parentName:"li"},"500"),")\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u5f02\u5e38"),"\uff0c\u5904\u7406\u8bf7\u6c42\u65f6\u629b\u51fa\u7684\u4efb\u4f55\u5f02\u5e38\u7684\u7b80\u5355\u7c7b\u540d\u3002\n\u8981\u81ea\u5b9a\u4e49\u6807\u7b7e\uff0c\u8bf7\u63d0\u4f9b\u4e00\u4e2a\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"li"},"WebFluxTagsProvider"),"\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"@Bean"),"\u3002")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u51fd\u6570\u5f0f\u7f16\u7a0b\u6a21\u578b\u7684\u6307\u6807\u4f1a\u88ab\u6807\u8bb0\u4e0a\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u65b9\u6cd5"),"\uff0c\u8bf7\u6c42\u7684\u65b9\u6cd5(\u4f8b\u5982\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"GET"),"\u6216",(0,o.kt)("inlineCode",{parentName:"li"},"POST"),")\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uri"),"\uff0c\u8bf7\u6c42\u5728\u53d8\u91cf\u66ff\u6362\u4e4b\u524d\u7684uri\u6a21\u677f\uff0c\u5982\u679c\u53ef\u80fd\u7684\u8bdd(\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"li"},"/api/person/{id}"),")\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u72b6\u6001"),"\uff0c\u54cd\u5e94\u7684HTTP\u72b6\u6001\u7801(\u4f8b\u5982\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"200"),"\u6216",(0,o.kt)("inlineCode",{parentName:"li"},"500"),")\u3002\n\u8981\u81ea\u5b9a\u4e49\u6807\u7b7e\uff0c\u8bf7\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"RouterFunctionMetrics"),"\u5b9e\u4f8b\u4e0a\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"defaultTags"),"\u65b9\u6cd5\u3002")))}d.isMDXComponent=!0}}]);