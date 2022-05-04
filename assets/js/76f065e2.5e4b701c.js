"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[76310],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),v=i,d=f["".concat(p,".").concat(v)]||f[v]||s[v]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14890:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={},p=void 0,c={unversionedId:"IV. Spring Boot features/27.4.2 Servlet Context Initialization",id:"IV. Spring Boot features/27.4.2 Servlet Context Initialization",title:"27.4.2 Servlet Context Initialization",description:"27.4.2 Servlet\u4e0a\u4e0b\u6587\u521d\u59cb\u5316",source:"@site/docs/IV. Spring Boot features/27.4.2 Servlet Context Initialization.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/27.4.2 Servlet Context Initialization",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/27.4.2 Servlet Context Initialization",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/27.4.2 Servlet Context Initialization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"27.4.1 Servlets, Filters, and listeners",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/27.4.1 Servlets, Filters, and listeners"},next:{title:"27.4.3 The ServletWebServerApplicationContext",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/27.4.3 The ServletWebServerApplicationContext"}},u={},s=[{value:"27.4.2 Servlet\u4e0a\u4e0b\u6587\u521d\u59cb\u5316",id:"2742-servlet\u4e0a\u4e0b\u6587\u521d\u59cb\u5316",level:3}],f={toc:s};function v(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"2742-servlet\u4e0a\u4e0b\u6587\u521d\u59cb\u5316"},"27.4.2 Servlet\u4e0a\u4e0b\u6587\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u5185\u5d4cservlet\u5bb9\u5668\u4e0d\u4f1a\u76f4\u63a5\u6267\u884cServlet 3.0+\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"javax.servlet.ServletContainerInitializer"),"\u63a5\u53e3\uff0c\u6216Spring\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"org.springframework.web.WebApplicationInitializer"),"\u63a5\u53e3\uff0c\u8fd9\u6837\u8bbe\u8ba1\u7684\u76ee\u7684\u662f\u964d\u4f4ewar\u5305\u5185\u8fd0\u884c\u7684\u7b2c\u4e09\u65b9\u5e93\u7834\u574fSpring Boot\u5e94\u7528\u7684\u98ce\u9669\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u5728Spring Boot\u5e94\u7528\u4e2d\u6267\u884cservlet\u4e0a\u4e0b\u6587\u521d\u59cb\u5316\uff0c\u4f60\u9700\u8981\u6ce8\u518c\u4e00\u4e2a\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"org.springframework.boot.web.servlet.ServletContextInitializer"),"\u63a5\u53e3\u7684bean\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"onStartup"),"\u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6",(0,o.kt)("inlineCode",{parentName:"p"},"ServletContext"),"\uff0c\u5982\u679c\u9700\u8981\u7684\u8bdd\u53ef\u4ee5\u8f7b\u677e\u7528\u6765\u9002\u914d\u4e00\u4e2a\u5df2\u5b58\u5728\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"WebApplicationInitializer"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u626b\u63cfServlets, Filters\u548clisteners")),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528\u4e00\u4e2a\u5185\u5d4c\u5bb9\u5668\u65f6\uff0c\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"@ServletComponentScan"),"\u53ef\u4ee5\u542f\u7528\u5bf9\u6ce8\u89e3",(0,o.kt)("inlineCode",{parentName:"p"},"@WebServlet"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"@WebFilter"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"@WebListener"),"\u7c7b\u7684\u81ea\u52a8\u6ce8\u518c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8")," \u5728\u72ec\u7acb\u7684\u5bb9\u5668\uff08\u975e\u5185\u5d4c\uff09\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"@ServletComponentScan"),"\u4e0d\u8d77\u4f5c\u7528\uff0c\u53d6\u4e3a\u4ee3\u4e4b\u7684\u662f\u5bb9\u5668\u5185\u5efa\u7684discovery\u673a\u5236\u3002"))}v.isMDXComponent=!0}}]);