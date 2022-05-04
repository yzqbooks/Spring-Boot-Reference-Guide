"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[6369],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],p={},c=void 0,u={unversionedId:"V. Spring Boot Actuator/50.8.1 Receiving Input",id:"V. Spring Boot Actuator/50.8.1 Receiving Input",title:"50.8.1 Receiving Input",description:"50.8.1 \u63a5\u6536\u8f93\u5165",source:"@site/docs/V. Spring Boot Actuator/50.8.1 Receiving Input.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/50.8.1 Receiving Input",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/50.8.1 Receiving Input",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/50.8.1 Receiving Input.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"50.8 Implementing Custom Endpoints",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/50.8 Implementing Custom Endpoints"},next:{title:"50.8.2 Custom Web Endpoints",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/50.8.2 Custom Web Endpoints"}},l={},s=[{value:"50.8.1 \u63a5\u6536\u8f93\u5165",id:"5081-\u63a5\u6536\u8f93\u5165",level:3}],f={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"5081-\u63a5\u6536\u8f93\u5165"},"50.8.1 \u63a5\u6536\u8f93\u5165"),(0,i.kt)("p",null,"\u5728\u4e00\u4e2a\u7aef\u70b9\u4e0a\u7684\u64cd\u4f5c\u4f1a\u901a\u8fc7\u5b83\u4eec\u7684\u53c2\u6570\u63a5\u6536\u6570\u636e\u3002\u5f53\u8be5\u7aef\u70b9\u901a\u8fc7\u7f51\u7edc\u66b4\u9732\u7684\u65f6\u5019\uff0c\u8fd9\u4e9b\u53c2\u6570\u7684\u503c\u53d6\u81eaURL\u67e5\u8be2\u53c2\u6570\u548cJSON\u8bf7\u6c42\u4f53\u3002\u5f53\u8be5\u7aef\u70b9\u901a\u8fc7JMX\u66b4\u9732\u7684\u65f6\u5019\uff0c\u8fd9\u4e9b\u53c2\u6570\u4f1a\u6620\u5c04\u5230MBean\u64cd\u4f5c\u7684\u53c2\u6570\u4e0a\u3002\u53c2\u6570\u9ed8\u8ba4\u5fc5\u9700\u3002\u4f46\u662f\uff0c\u5b83\u4eec\u53ef\u4ee5\u901a\u8fc7\u6807\u6ce8",(0,i.kt)("inlineCode",{parentName:"p"},"@org.springframework.lang.Nullable"),"\u6210\u4e3a\u53ef\u9009\u9879\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u4e3a\u4e86\u5141\u8bb8\u8f93\u5165\u6620\u5c04\u5230\u64cd\u4f5c\u65b9\u6cd5\u7684\u53c2\u6570\u4e0a\uff0c\u5b9e\u73b0\u7aef\u70b9\u7684\u4ee3\u7801\u5e94\u8be5\u5e26\u4e0a",(0,i.kt)("inlineCode",{parentName:"p"},"-parameters"),"\u7f16\u8bd1\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528Spring Boot\u7684Gradle\u63d2\u4ef6\uff0c\u6216\u662fMaven\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-parent"),"\uff0c\u8fd9\u4f1a\u81ea\u52a8\u53d1\u751f\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8f93\u5165\u7c7b\u578b\u8f6c\u6362")),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\uff0c\u4f20\u9012\u5230\u7aef\u70b9\u64cd\u4f5c\u65b9\u6cd5\u7684\u53c2\u6570\u4f1a\u81ea\u52a8\u8f6c\u6362\u5230\u9700\u8981\u7684\u7c7b\u578b\u3002\u5728\u8c03\u7528\u64cd\u4f5c\u65b9\u6cd5\u4e4b\u524d\uff0c\u901a\u8fc7JMX\u6216\u8005HTTP\u8bf7\u6c42\u63a5\u6536\u7684\u8f93\u5165\u4f1a\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationConversionService"),"\u7684\u5b9e\u4f8b\u8f6c\u6362\u5230\u9700\u8981\u7684\u7c7b\u578b\u3002"))}m.isMDXComponent=!0}}]);