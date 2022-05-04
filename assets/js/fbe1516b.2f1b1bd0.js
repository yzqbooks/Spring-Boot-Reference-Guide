"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[77724],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],u={},c=void 0,p={unversionedId:"IV. Spring Boot features/29.5.4 Customizing jOOQ",id:"IV. Spring Boot features/29.5.4 Customizing jOOQ",title:"29.5.4 Customizing jOOQ",description:"29.5.4 \u81ea\u5b9a\u4e49jOOQ",source:"@site/docs/IV. Spring Boot features/29.5.4 Customizing jOOQ.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/29.5.4 Customizing jOOQ",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/29.5.4 Customizing jOOQ",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/29.5.4 Customizing jOOQ.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"29.5.3 jOOQ SQL Dialect",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/29.5.3 jOOQ SQL Dialect"},next:{title:"30.1. Redis",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.1. Redis"}},l={},s=[{value:"29.5.4 \u81ea\u5b9a\u4e49jOOQ",id:"2954-\u81ea\u5b9a\u4e49jooq",level:3}],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"2954-\u81ea\u5b9a\u4e49jooq"},"29.5.4 \u81ea\u5b9a\u4e49jOOQ"),(0,i.kt)("p",null,"\u5b9a\u4e49\u81ea\u5df1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@Bean"),"\uff0c\u5728jOOQ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration"),"\u521b\u5efa\u65f6\u4f7f\u7528\uff0c\u53ef\u4ee5\u5b9e\u73b0\u66f4\u9ad8\u7ea7\u7684\u5b9a\u5236\u3002\u4f60\u53ef\u4ee5\u4e3a\u4ee5\u4e0bjOOQ\u7c7b\u578b\u5b9a\u4e49beans\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ConnectionProvider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TransactionProvider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RecordMapperProvider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RecordListenerProvider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExecuteListenerProvider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VisitListenerProvider"))),(0,i.kt)("p",null,"\u5982\u679c\u60f3\u5168\u9762\u63a7\u5236jOOQ\u914d\u7f6e\uff0c\u4f60\u751a\u81f3\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"org.jooq.Configuration")," ",(0,i.kt)("inlineCode",{parentName:"p"},"@Bean"),"\u3002"))}d.isMDXComponent=!0}}]);