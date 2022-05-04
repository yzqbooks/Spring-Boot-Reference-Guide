"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[35254],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,g=m["".concat(u,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46336:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},u=void 0,s={unversionedId:"V. Spring Boot Actuator/51.4 Customizing the Management Server Address",id:"V. Spring Boot Actuator/51.4 Customizing the Management Server Address",title:"51.4 Customizing the Management Server Address",description:"51.4 \u81ea\u5b9a\u4e49\u7ba1\u7406\u670d\u52a1\u5668\u5730\u5740",source:"@site/docs/V. Spring Boot Actuator/51.4 Customizing the Management Server Address.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/51.4 Customizing the Management Server Address",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/51.4 Customizing the Management Server Address",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/51.4 Customizing the Management Server Address.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"51.3 Configuring Management-specific SSL",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/51.3 Configuring Management-specific SSL"},next:{title:"51.5 Disabling HTTP Endpoints",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/51.5 Disabling HTTP Endpoints"}},p={},l=[{value:"51.4 \u81ea\u5b9a\u4e49\u7ba1\u7406\u670d\u52a1\u5668\u5730\u5740",id:"514-\u81ea\u5b9a\u4e49\u7ba1\u7406\u670d\u52a1\u5668\u5730\u5740",level:3}],m={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"514-\u81ea\u5b9a\u4e49\u7ba1\u7406\u670d\u52a1\u5668\u5730\u5740"},"51.4 \u81ea\u5b9a\u4e49\u7ba1\u7406\u670d\u52a1\u5668\u5730\u5740"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"management.server.address"),"\u5c5e\u6027\u6765\u5b9a\u4e49\u7ba1\u7406\u7aef\u70b9\u4f7f\u7528\u7684\u5730\u5740\uff0c\u8fd9\u5728\u4f60\u53ea\u60f3\u76d1\u542c\u5185\u90e8\u6216\u9762\u5411\u751f\u4ea7\u73af\u5883\u7684\u7f51\u7edc\uff0c\u6216\u53ea\u76d1\u542c\u6765\u81ea",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),"\u7684\u8fde\u63a5\u65f6\u975e\u5e38\u6709\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," \u5f53\u7aef\u53e3\u8ddf\u4e3b\u5e94\u7528\u670d\u52a1\u5668\u4e0d\u4e00\u6837\u65f6\uff0c\u4f60\u53ea\u80fd\u76d1\u542c\u4e00\u4e2a\u4e0d\u540c\u7684\u5730\u5740\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684application.properties\u793a\u4f8b\u4e0d\u5141\u8bb8\u8fdc\u7a0b\u8bbf\u95ee\u7ba1\u7406\u670d\u52a1\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"management.server.port=8081\nmanagement.server.address=127.0.0.1\n")))}d.isMDXComponent=!0}}]);