"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[55390],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(r),g=o,d=f["".concat(u,".").concat(g)]||f[g]||l[g]||i;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60189:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={},u=void 0,p={unversionedId:"III. Using Spring Boot/README",id:"III. Using Spring Boot/README",title:"README",description:"\u4f7f\u7528Spring Boot",source:"@site/docs/III. Using Spring Boot/README.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"9.1. Servlet Containers",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/9.1. Servlet Containers"},next:{title:"Build Systems",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/Build Systems"}},s={},l=[{value:"\u4f7f\u7528Spring Boot",id:"\u4f7f\u7528spring-boot",level:3}],f={toc:l};function g(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u4f7f\u7528spring-boot"},"\u4f7f\u7528Spring Boot"),(0,i.kt)("p",null,"\u672c\u7ae0\u8282\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Spring Boot\uff0c\u4e0d\u4ec5\u8986\u76d6\u6784\u5efa\u7cfb\u7edf\uff0c\u81ea\u52a8\u914d\u7f6e\uff0c\u5982\u4f55\u8fd0\u884c\u5e94\u7528\u7b49\u4e3b\u9898\uff0c\u8fd8\u5305\u62ec\u4e00\u4e9bSpring Boot\u7684\u6700\u4f73\u5b9e\u8df5\u3002\u5c3d\u7ba1Spring Boot\u672c\u8eab\u6ca1\u6709\u4ec0\u4e48\u7279\u522b\u7684\uff08\u8ddf\u5176\u4ed6\u4e00\u6837\uff0c\u5b83\u53ea\u662f\u53e6\u4e00\u4e2a\u4f60\u53ef\u4ee5\u4f7f\u7528\u7684\u5e93\uff09\uff0c\u4f46\u4ecd\u6709\u4e00\u4e9b\u5efa\u8bae\uff0c\u5982\u679c\u9075\u5faa\u7684\u8bdd\u5c06\u4f1a\u4e8b\u534a\u529f\u500d\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u521a\u63a5\u89e6Spring Boot\uff0c\u90a3\u6700\u597d\u5148\u9605\u8bfb\u4e0a\u4e00\u7ae0\u8282\u7684","[Getting Started]","(../II. Getting started/README.md)\u6307\u5357\u3002"))}g.isMDXComponent=!0}}]);