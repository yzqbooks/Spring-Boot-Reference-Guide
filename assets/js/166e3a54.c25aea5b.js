"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[99084],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58411:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={},p=void 0,c={unversionedId:"V. Spring Boot Actuator/54.3.3 RestTemplate Metrics",id:"V. Spring Boot Actuator/54.3.3 RestTemplate Metrics",title:"54.3.3 RestTemplate Metrics",description:"54.3.3 RestTemplate\u6307\u6807",source:"@site/docs/V. Spring Boot Actuator/54.3.3 RestTemplate Metrics.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/54.3.3 RestTemplate Metrics",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.3.3 RestTemplate Metrics",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/54.3.3 RestTemplate Metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"54.3.2 Spring WebFlux Metrics",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.3.2 Spring WebFlux Metrics"},next:{title:"54.3.4 Spring Integration metrics",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/54.3.4 Spring Integration metrics"}},u={},s=[{value:"54.3.3 RestTemplate\u6307\u6807",id:"5433-resttemplate\u6307\u6807",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"5433-resttemplate\u6307\u6807"},"54.3.3 RestTemplate\u6307\u6807"),(0,a.kt)("p",null,"\u4f7f\u7528\u81ea\u52a8\u914d\u7f6e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"RestTemplateBuilder"),"\u521b\u5efa\u7684\u4efb\u4f55",(0,a.kt)("inlineCode",{parentName:"p"},"RestTemplate"),"\u5de5\u5177\u90fd\u662f\u542f\u7528\u7684\u3002\u4e5f\u53ef\u4ee5\u624b\u52a8\u5e94\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"MetricsRestTemplateCustomizer"),"\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528\u540d\u79f0",(0,a.kt)("inlineCode",{parentName:"p"},"http.client.requests"),"\u751f\u6210\u5ea6\u91cf\u6807\u51c6\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"management.metrics.web.client.requests-metric-name"),"\u5c5e\u6027\u6765\u5b9a\u5236\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7531\u88c5\u5907\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"RestTemplate"),"\u751f\u6210\u7684\u6307\u6807\u7528\u4ee5\u4e0b\u4fe1\u606f\u6807\u8bb0\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u65b9\u6cd5"),"\uff0c\u8bf7\u6c42\u7684\u65b9\u6cd5(\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"GET"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"POST"),")\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri"),"\uff0c\u8bf7\u6c42\u5728\u53d8\u91cf\u66ff\u6362\u4e4b\u524d\u7684uri\u6a21\u677f\uff0c\u5982\u679c\u53ef\u80fd\u7684\u8bdd(\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"/api/person/{id}"),")\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u72b6\u6001"),"\uff0c\u54cd\u5e94\u7684HTTP\u72b6\u6001\u7801(\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"200"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"500"),")\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u5ba2\u6237\u7aef\u540d\u79f0"),", URI\u7684\u4e3b\u673a\u90e8\u5206\u3002\n\u8981\u81ea\u5b9a\u4e49\u6807\u8bb0\uff0c\u8bf7\u63d0\u4f9b\u4e00\u4e2a\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"RestTemplateExchangeTagsProvider"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"@Bean"),"\u3002\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"RestTemplateExchangeTags"),"\u4e2d\u6709\u65b9\u4fbf\u7684\u9759\u6001\u51fd\u6570\u3002")))}d.isMDXComponent=!0}}]);