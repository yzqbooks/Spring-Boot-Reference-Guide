"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[31763],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),s=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(t),f=o,m=l["".concat(a,".").concat(f)]||l[f]||p[f]||i;return t?n.createElement(m,u(u({ref:r},d),{},{components:t})):n.createElement(m,u({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=l;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var s=2;s<i;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},60349:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),u=["components"],c={},a=void 0,s={unversionedId:"IX. \u2018How-to\u2019 guides/Embedded Web Servers",id:"IX. \u2018How-to\u2019 guides/Embedded Web Servers",title:"Embedded Web Servers",description:"75. \u5185\u5d4c\u7f51\u7edc\u670d\u52a1\u5668",source:"@site/docs/IX. \u2018How-to\u2019 guides/75. Embedded Web Servers.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/Embedded Web Servers",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/Embedded Web Servers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/75. Embedded Web Servers.md",tags:[],version:"current",sidebarPosition:75,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Properties and Configuration",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/Properties and Configuration"},next:{title:"Spring MVC",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/Spring MVC"}},d={},p=[{value:"75. \u5185\u5d4c\u7f51\u7edc\u670d\u52a1\u5668",id:"75-\u5185\u5d4c\u7f51\u7edc\u670d\u52a1\u5668",level:3}],l={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"75-\u5185\u5d4c\u7f51\u7edc\u670d\u52a1\u5668"},"75. \u5185\u5d4c\u7f51\u7edc\u670d\u52a1\u5668"),(0,i.kt)("p",null,"\u6bcf\u4e2aSpring Boot\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u90fd\u5305\u542b\u4e00\u4e2a\u5d4c\u5165\u5f0f\u7f51\u7edc\u670d\u52a1\u5668\u3002\u8be5\u7279\u6027\u4f1a\u5bfc\u81f4\u8bb8\u591a\u64cd\u4f5c\u95ee\u9898\uff0c\u5305\u62ec\u5982\u4f55\u66f4\u6539\u5d4c\u5165\u5f0f\u670d\u52a1\u5668\u4ee5\u53ca\u5982\u4f55\u914d\u7f6e\u5d4c\u5165\u5f0f\u670d\u52a1\u5668\u3002\u672c\u8282\u5c06\u56de\u7b54\u8fd9\u4e9b\u95ee\u9898\u3002"))}f.isMDXComponent=!0}}]);