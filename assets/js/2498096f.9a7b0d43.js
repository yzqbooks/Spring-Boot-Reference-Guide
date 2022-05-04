"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[23454],{3905:function(n,e,r){r.d(e,{Zo:function(){return l},kt:function(){return d}});var t=r(67294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function i(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function a(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function p(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var u=t.createContext({}),c=function(n){var e=t.useContext(u),r=e;return n&&(r="function"==typeof n?n(e):a(a({},e),n)),r},l=function(n){var e=c(n.components);return t.createElement(u.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,i=n.originalType,u=n.parentName,l=p(n,["components","mdxType","originalType","parentName"]),s=c(r),d=o,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return r?t.createElement(f,a(a({ref:e},l),{},{components:r})):t.createElement(f,a({ref:e},l))}));function d(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=r.length,a=new Array(i);a[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=n,p.mdxType="string"==typeof n?n:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},20360:function(n,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],p={},u=void 0,c={unversionedId:"IV. Spring Boot features/23.8. Using the ApplicationRunner or CommandLineRunner",id:"IV. Spring Boot features/23.8. Using the ApplicationRunner or CommandLineRunner",title:"23.8. Using the ApplicationRunner or CommandLineRunner",description:"23.8. \u4f7f\u7528ApplicationRunner\u6216CommandLineRunner",source:"@site/docs/IV. Spring Boot features/23.8. Using the ApplicationRunner or CommandLineRunner.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/23.8. Using the ApplicationRunner or CommandLineRunner",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/23.8. Using the ApplicationRunner or CommandLineRunner",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/23.8. Using the ApplicationRunner or CommandLineRunner.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"23.7. Accessing Application Arguments",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/23.7. Accessing Application Arguments"},next:{title:"23.9. Application Exit",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/23.9. Application Exit"}},l={},m=[{value:"23.8. \u4f7f\u7528ApplicationRunner\u6216CommandLineRunner",id:"238-\u4f7f\u7528applicationrunner\u6216commandlinerunner",level:3}],s={toc:m};function d(n){var e=n.components,r=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"238-\u4f7f\u7528applicationrunner\u6216commandlinerunner"},"23.8. \u4f7f\u7528ApplicationRunner\u6216CommandLineRunner"),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"SpringApplication"),"\u542f\u52a8\u540e\u6267\u884c\u4e00\u4e9b\u7279\u6b8a\u7684\u4ee3\u7801\uff0c\u4f60\u53ef\u4ee5\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationRunner"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"CommandLineRunner"),"\u63a5\u53e3\uff0c\u8fd9\u4e24\u4e2a\u63a5\u53e3\u5de5\u4f5c\u65b9\u5f0f\u76f8\u540c\uff0c\u90fd\u53ea\u63d0\u4f9b\u5355\u4e00\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"run"),"\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4ec5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"SpringApplication.run(\u2026)"),"\u5b8c\u6210\u4e4b\u524d\u8c03\u7528\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CommandLineRunner"),"\u63a5\u53e3\u80fd\u591f\u8bbf\u95eestring\u6570\u7ec4\u7c7b\u578b\u7684\u5e94\u7528\u53c2\u6570\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationRunner"),"\u4f7f\u7528\u7684\u662f\u4e4b\u524d\u63cf\u8ff0\u8fc7\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationArguments"),"\u63a5\u53e3\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import org.springframework.boot.*\nimport org.springframework.stereotype.*\n\n@Component\npublic class MyBean implements CommandLineRunner {\n\n    public void run(String... args) {\n        // Do something...\n    }\n\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u67d0\u4e9b\u5b9a\u4e49\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"CommandLineRunner"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationRunner")," beans\u9700\u8981\u4ee5\u7279\u5b9a\u7684\u987a\u5e8f\u8c03\u7528\uff0c\u4f60\u53ef\u4ee5\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.core.Ordered"),"\u63a5\u53e3\u6216\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.core.annotation.Order"),"\u6ce8\u89e3\u3002"))}d.isMDXComponent=!0}}]);