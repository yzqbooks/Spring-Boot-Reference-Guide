"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[35022],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,f=m["".concat(u,".").concat(g)]||m[g]||l[g]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30706:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},u=void 0,p={unversionedId:"V. Spring Boot Actuator/51.2 Customizing the Management Server Port",id:"V. Spring Boot Actuator/51.2 Customizing the Management Server Port",title:"51.2 Customizing the Management Server Port",description:"51.2  \u81ea\u5b9a\u4e49\u7ba1\u7406\u670d\u52a1\u5668\u7aef\u53e3",source:"@site/docs/V. Spring Boot Actuator/51.2 Customizing the Management Server Port.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/51.2 Customizing the Management Server Port",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/51.2 Customizing the Management Server Port",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/51.2 Customizing the Management Server Port.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"51.1 Customizing the Management Endpoint Paths",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/51.1 Customizing the Management Endpoint Paths"},next:{title:"51.3 Configuring Management-specific SSL",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/51.3 Configuring Management-specific SSL"}},s={},l=[{value:"51.2  \u81ea\u5b9a\u4e49\u7ba1\u7406\u670d\u52a1\u5668\u7aef\u53e3",id:"512--\u81ea\u5b9a\u4e49\u7ba1\u7406\u670d\u52a1\u5668\u7aef\u53e3",level:3}],m={toc:l};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"512--\u81ea\u5b9a\u4e49\u7ba1\u7406\u670d\u52a1\u5668\u7aef\u53e3"},"51.2  \u81ea\u5b9a\u4e49\u7ba1\u7406\u670d\u52a1\u5668\u7aef\u53e3"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u57fa\u4e8e\u4e91\u7684\u90e8\u7f72\uff0c\u4f7f\u7528\u9ed8\u8ba4\u7684HTTP\u7aef\u53e3\u66b4\u9732\u7ba1\u7406\u7aef\u70b9\uff08endpoints\uff09\u662f\u660e\u667a\u7684\u9009\u62e9\u3002\u7136\u800c\uff0c\u5982\u679c\u4f60\u7684\u5e94\u7528\u662f\u5728\u81ea\u5df1\u7684\u6570\u636e\u4e2d\u5fc3\u8fd0\u884c\uff0c\u90a3\u4f60\u53ef\u80fd\u503e\u5411\u4e8e\u4f7f\u7528\u4e00\u4e2a\u4e0d\u540c\u7684HTTP\u7aef\u53e3\u6765\u66b4\u9732\u7aef\u70b9\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"management.server.port"),"\u5c5e\u6027\uff0c\u6765\u6539\u53d8HTTP\u7aef\u53e3\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"management.server.port=8081\n")))}g.isMDXComponent=!0}}]);