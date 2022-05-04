"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[53990],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(t),g=o,d=f["".concat(c,".").concat(g)]||f[g]||s[g]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75633:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],u={},c=void 0,l={unversionedId:"III. Using Spring Boot/16.1. Gradually Replacing Auto-configuration",id:"III. Using Spring Boot/16.1. Gradually Replacing Auto-configuration",title:"16.1. Gradually Replacing Auto-configuration",description:"16.1. \u9010\u6b65\u66ff\u6362\u81ea\u52a8\u914d\u7f6e",source:"@site/docs/III. Using Spring Boot/16.1. Gradually Replacing Auto-configuration.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/16.1. Gradually Replacing Auto-configuration",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/16.1. Gradually Replacing Auto-configuration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/16.1. Gradually Replacing Auto-configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"15.2. Importing XML Configuration",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/15.2. Importing XML Configuration"},next:{title:"16.2. Disabling Specific Auto-configuration Classes",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/16.2. Disabling Specific Auto-configuration Classes"}},p={},s=[{value:"16.1. \u9010\u6b65\u66ff\u6362\u81ea\u52a8\u914d\u7f6e",id:"161-\u9010\u6b65\u66ff\u6362\u81ea\u52a8\u914d\u7f6e",level:3}],f={toc:s};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"161-\u9010\u6b65\u66ff\u6362\u81ea\u52a8\u914d\u7f6e"},"16.1. \u9010\u6b65\u66ff\u6362\u81ea\u52a8\u914d\u7f6e"),(0,i.kt)("p",null,"\u81ea\u52a8\u914d\u7f6e\uff08Auto-configuration\uff09\u662f\u975e\u4fb5\u5165\u6027\u7684\uff0c\u4efb\u4f55\u65f6\u5019\u4f60\u90fd\u53ef\u4ee5\u5b9a\u4e49\u81ea\u5df1\u7684\u914d\u7f6e\u7c7b\u6765\u66ff\u6362\u81ea\u52a8\u914d\u7f6e\u7684\u7279\u5b9a\u90e8\u5206\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u6dfb\u52a0\u81ea\u5df1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"DataSource"),"  bean\uff0c\u9ed8\u8ba4\u7684\u5185\u5d4c\u6570\u636e\u5e93\u652f\u6301\u5c06\u4e0d\u88ab\u8003\u8651\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u67e5\u770b\u5f53\u524d\u5e94\u7528\u542f\u52a8\u4e86\u54ea\u4e9b\u81ea\u52a8\u914d\u7f6e\u9879\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd0\u884c\u5e94\u7528\u65f6\u6253\u5f00",(0,i.kt)("inlineCode",{parentName:"p"},"--debug"),"\u5f00\u5173\uff0c\u8fd9\u5c06\u4e3a\u6838\u5fc3\u65e5\u5fd7\u5f00\u542fdebug\u65e5\u5fd7\u7ea7\u522b\uff0c\u5e76\u5c06\u914d\u7f6e\u60c5\u51b5\u8f93\u51fa\u5230\u63a7\u5236\u53f0\u3002"))}g.isMDXComponent=!0}}]);