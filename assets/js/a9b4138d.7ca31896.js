"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[78269],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34160:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={},u=void 0,c={unversionedId:"V. Spring Boot Actuator/Loggers",id:"V. Spring Boot Actuator/Loggers",title:"Loggers",description:"53. \u8bb0\u5f55\u5668",source:"@site/docs/V. Spring Boot Actuator/53. Loggers.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/Loggers",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/Loggers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/53. Loggers.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monitoring and Management over JMX",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/Monitoring and Management over JMX"},next:{title:"Metrics",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/Metrics"}},p={},s=[{value:"53. \u8bb0\u5f55\u5668",id:"53-\u8bb0\u5f55\u5668",level:3}],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"53-\u8bb0\u5f55\u5668"},"53. \u8bb0\u5f55\u5668"),(0,i.kt)("p",null,"Spring Boot\u6267\u884c\u5668\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u67e5\u770b\u548c\u914d\u7f6e\u4f60\u7684\u5e94\u7528\u7684\u8bb0\u5f55\u5668\u7ea7\u522b\u3002\u4f60\u53ef\u4ee5\u67e5\u770b\u6574\u4e2a\u7684\u5217\u8868\u6216\u8005\u5355\u4e2a\u7684\u8bb0\u5f55\u5668\u914d\u7f6e\u3002\u5355\u4e2a\u7684\u8bb0\u5f55\u5668\u914d\u7f6e\u7531\u660e\u786e\u914d\u7f6e\u7684\u65e5\u5fd7\u7ea7\u522b\u548c\u65e5\u5fd7\u6846\u67b6\u63d0\u4f9b\u7684\u6709\u6548\u65e5\u5fd7\u7ea7\u522b\u7ec4\u6210\u3002\u8fd9\u4e9b\u7ea7\u522b\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRACE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DEBUG")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INFO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WARN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ERROR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FATAL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OFF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"null"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\u8868\u660e\u6ca1\u6709\u660e\u786e\u7684\u914d\u7f6e\u3002"))}m.isMDXComponent=!0}}]);