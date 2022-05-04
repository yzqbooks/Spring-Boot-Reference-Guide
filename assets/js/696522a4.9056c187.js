"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[86538],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35819:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},p=void 0,u={unversionedId:"II. Getting Started/11.1. Creating the POM",id:"II. Getting Started/11.1. Creating the POM",title:"11.1. Creating the POM",description:"11.1. \u521b\u5efaPOM",source:"@site/docs/II. Getting Started/11.1. Creating the POM.md",sourceDirName:"II. Getting Started",slug:"/II. Getting Started/11.1. Creating the POM",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/11.1. Creating the POM",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/II. Getting Started/11.1. Creating the POM.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"10.3. Upgrading from an Earlier Version of Spring Boot",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/10.3. Upgrading from an Earlier Version of Spring Boot"},next:{title:"11.2. Adding Classpath Dependencies",permalink:"/Spring-Boot-Reference-Guide/docs/II. Getting Started/11.2. Adding Classpath Dependencies"}},l={},s=[{value:"11.1. \u521b\u5efaPOM",id:"111-\u521b\u5efapom",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"111-\u521b\u5efapom"},"11.1. \u521b\u5efaPOM"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u4ee5\u521b\u5efa\u4e00\u4e2aMaven ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u6587\u4ef6\u4f5c\u4e3a\u5f00\u59cb\u5427\uff0c\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u662f\u6784\u5efa\u9879\u76ee\u7684\u5904\u65b9\uff01\u6253\u5f00\u4f60\u6700\u559c\u6b22\u7684\u6587\u672c\u7f16\u8f91\u5668\uff0c\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>myproject</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.0.0.RELEASE</version>\n    </parent>\n\n    \x3c!-- Additional lines to be added here... --\x3e\n\n</project>\n')),(0,a.kt)("p",null,"\u8fd9\u6837\u4e00\u4e2a\u53ef\u5de5\u4f5c\u7684\u6784\u5efa\u5c31\u5b8c\u6210\u4e86\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"mvn package"),'\u6d4b\u8bd5\u5b83\uff08\u6682\u65f6\u5ffd\u7565"jar\u5c06\u662f\u7a7a\u7684-\u6ca1\u6709\u5305\u542b\u4efb\u4f55\u5185\u5bb9\uff01"\u7684\u8b66\u544a\uff09\u3002'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8"),"\uff1a\u6b64\u523b\uff0c\u4f60\u53ef\u4ee5\u5c06\u8be5\u9879\u76ee\u5bfc\u5165\u5230IDE\u4e2d\uff08\u5927\u591a\u6570\u73b0\u4ee3\u7684Java IDE\u90fd\u5305\u542b\u5bf9Maven\u7684\u5185\u5efa\u652f\u6301\uff09\u3002\u7b80\u5355\u8d77\u89c1\uff0c\u6211\u4eec\u7ee7\u7eed\u4f7f\u7528\u666e\u901a\u7684\u6587\u672c\u7f16\u8f91\u5668\u5b8c\u6210\u8be5\u793a\u4f8b\u3002"))}m.isMDXComponent=!0}}]);