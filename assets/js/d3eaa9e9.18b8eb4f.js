"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[54791],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return s}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(r),s=o,d=f["".concat(l,".").concat(s)]||f[s]||g[s]||i;return r?t.createElement(d,a(a({ref:n},p),{},{components:r})):t.createElement(d,a({ref:n},p))}));function s(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91533:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return g}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],u={},l=void 0,c={unversionedId:"IX. \u2018How-to\u2019 guides/78.1.1 Configure Logback for File-only Output",id:"IX. \u2018How-to\u2019 guides/78.1.1 Configure Logback for File-only Output",title:"78.1.1 Configure Logback for File-only Output",description:"78.1.1 \u914d\u7f6elogback\u53ea\u8f93\u51fa\u5230\u6587\u4ef6",source:"@site/docs/IX. \u2018How-to\u2019 guides/78.1.1 Configure Logback for File-only Output.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/78.1.1 Configure Logback for File-only Output",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/78.1.1 Configure Logback for File-only Output",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/78.1.1 Configure Logback for File-only Output.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"78.1 Configure Logback for Logging",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/78.1 Configure Logback for Logging"},next:{title:"78.2 Configure Log4j for Logging",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/78.2 Configure Log4j for Logging"}},p={},g=[{value:"78.1.1 \u914d\u7f6elogback\u53ea\u8f93\u51fa\u5230\u6587\u4ef6",id:"7811-\u914d\u7f6elogback\u53ea\u8f93\u51fa\u5230\u6587\u4ef6",level:3}],f={toc:g};function s(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"7811-\u914d\u7f6elogback\u53ea\u8f93\u51fa\u5230\u6587\u4ef6"},"78.1.1 \u914d\u7f6elogback\u53ea\u8f93\u51fa\u5230\u6587\u4ef6"),(0,i.kt)("p",null,"\u5982\u679c\u60f3\u7981\u7528\u63a7\u5236\u53f0\u65e5\u5fd7\u8bb0\u5f55\uff0c\u53ea\u5c06\u8f93\u51fa\u5199\u5165\u6587\u4ef6\u4e2d\uff0c\u4f60\u9700\u8981\u4e00\u4e2a\u53ea\u5bfc\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"file-appender.xml"),"\u800c\u4e0d\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"console-appender.xml"),"\u7684\u81ea\u5b9a\u4e49",(0,i.kt)("inlineCode",{parentName:"p"},"logback-spring.xml"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n    <include resource="org/springframework/boot/logging/logback/defaults.xml" />\n    <property name="LOG_FILE" value="${LOG_FILE:-${LOG_PATH:-${LOG_TEMP:-${java.io.tmpdir:-/tmp}}/}spring.log}"/>\n    <include resource="org/springframework/boot/logging/logback/file-appender.xml" />\n    <root level="INFO">\n        <appender-ref ref="FILE" />\n    </root>\n</configuration>\n')),(0,i.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"logging.file"),"\u6dfb\u52a0\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"logging.file=myapplication.log\n")))}s.isMDXComponent=!0}}]);