"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[92141],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),g=o,d=f["".concat(u,".").concat(g)]||f[g]||p[g]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},30168:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={},u=void 0,s={unversionedId:"III. Using Spring Boot/16.2. Disabling Specific Auto-configuration Classes",id:"III. Using Spring Boot/16.2. Disabling Specific Auto-configuration Classes",title:"16.2. Disabling Specific Auto-configuration Classes",description:"16.2. \u7981\u7528\u7279\u5b9a\u7684\u81ea\u52a8\u914d\u7f6e\u7c7b",source:"@site/docs/III. Using Spring Boot/16.2. Disabling Specific Auto-configuration Classes.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/16.2. Disabling Specific Auto-configuration Classes",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/16.2. Disabling Specific Auto-configuration Classes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/16.2. Disabling Specific Auto-configuration Classes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"16.1. Gradually Replacing Auto-configuration",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/16.1. Gradually Replacing Auto-configuration"},next:{title:"19.1. Running from an IDE",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/19.1. Running from an IDE"}},l={},p=[{value:"16.2. \u7981\u7528\u7279\u5b9a\u7684\u81ea\u52a8\u914d\u7f6e\u7c7b",id:"162-\u7981\u7528\u7279\u5b9a\u7684\u81ea\u52a8\u914d\u7f6e\u7c7b",level:3}],f={toc:p};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"162-\u7981\u7528\u7279\u5b9a\u7684\u81ea\u52a8\u914d\u7f6e\u7c7b"},"16.2. \u7981\u7528\u7279\u5b9a\u7684\u81ea\u52a8\u914d\u7f6e\u7c7b"),(0,i.kt)("p",null,"\u5982\u679c\u53d1\u73b0\u542f\u7528\u4e86\u4e0d\u60f3\u8981\u7684\u81ea\u52a8\u914d\u7f6e\u7c7b\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableAutoConfiguration"),"\u6ce8\u89e3\u7684exclude\u5c5e\u6027\u7981\u7528\u5b83\u4eec\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import org.springframework.boot.autoconfigure.*;\nimport org.springframework.boot.autoconfigure.jdbc.*;\nimport org.springframework.context.annotation.*;\n\n@Configuration\n@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})\npublic class MyConfiguration {\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u8be5\u7c7b\u4e0d\u5728classpath\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u6ce8\u89e3\u7684excludeName\u5c5e\u6027\uff0c\u5e76\u6307\u5b9a\u5168\u9650\u5b9a\u540d\u6765\u8fbe\u5230\u76f8\u540c\u6548\u679c\u3002\u6700\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"spring.autoconfigure.exclude"),"\u5c5e\u6027exclude\u591a\u4e2a\u81ea\u52a8\u914d\u7f6e\u9879\uff08\u4e00\u4e2a\u81ea\u52a8\u914d\u7f6e\u9879\u96c6\u5408\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u901a\u8fc7\u6ce8\u89e3\u7ea7\u522b\u6216exclude\u5c5e\u6027\u90fd\u53ef\u4ee5\u5b9a\u4e49\u6392\u9664\u9879\u3002"))}g.isMDXComponent=!0}}]);