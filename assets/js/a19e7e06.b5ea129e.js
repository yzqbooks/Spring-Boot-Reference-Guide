"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[91682],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},47879:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],u={},c=void 0,p={unversionedId:"IV. Spring Boot features/46.5.3 Starter Module",id:"IV. Spring Boot features/46.5.3 Starter Module",title:"46.5.3 Starter Module",description:"46.5.3 Starter\u6a21\u5757",source:"@site/docs/IV. Spring Boot features/46.5.3 Starter Module.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/46.5.3 Starter Module",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/46.5.3 Starter Module",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/46.5.3 Starter Module.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"46.5.2 Autoconfigure Module",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/46.5.2 Autoconfigure Module"},next:{title:"47.1 Requirements",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/47.1 Requirements"}},s={},l=[{value:"46.5.3 Starter\u6a21\u5757",id:"4653-starter\u6a21\u5757",level:3}],f={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"4653-starter\u6a21\u5757"},"46.5.3 Starter\u6a21\u5757"),(0,a.kt)("p",null,"starter\u6a21\u5757\u5b9e\u9645\u662f\u4e00\u4e2a\u7a7ajar\u3002\u5b83\u7684\u76ee\u7684\u662f\u63d0\u4f9b\u4f7f\u7528\u8be5library\u6240\u9700\u7684\u5fc5\u8981\u4f9d\u8d56\u3002"),(0,a.kt)("p",null,"\u4e0d\u8981\u5bf9\u6dfb\u52a0\u4f60\u7684starter\u7684\u9879\u76ee\u505a\u4efb\u4f55\u5047\u8bbe\u3002\u5982\u679c\u4f60\u6b63\u5728\u81ea\u52a8\u914d\u7f6e\u7684library\u9700\u8981\u5176\u4ed6starter\uff0c\u4e00\u5b9a\u8981\u63d0\u5230\u5b83\u3002\u63d0\u4f9b\u4e00\u4e2a\u5408\u9002\u7684\u9ed8\u8ba4\u4f9d\u8d56\u96c6\u53ef\u80fd\u6bd4\u8f83\u56f0\u96be\uff0c\u7279\u522b\u662f\u5b58\u5728\u5927\u91cf\u53ef\u9009\u4f9d\u8d56\u65f6\uff0c\u4f60\u5e94\u8be5\u907f\u514d\u5f15\u5165\u4efb\u4f55\u975e\u5fc5\u9700\u7684\u4f9d\u8d56\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u4e0d\u5e94\u5f53\u5305\u542b\u53ef\u9009\u7684\u4f9d\u8d56\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," \u65e0\u8bba\u54ea\u79cd\u65b9\u5f0f\uff0c\u4f60\u7684starter\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\uff08\u5982\u679c\u4f60\u7684starter\u4f9d\u8d56\u53e6\u5916\u7684starter\uff0c\u5c31\u4e0d\u9700\u8981\u6dfb\u52a0\uff09\u5730\u5f15\u7528\u6838\u5fc3\u7684Spring Boot starter\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"spring-boot-starter"),"\uff09\u3002 \u5982\u679c\u4e00\u4e2a\u9879\u76ee\u53ea\u7528\u4f60\u81ea\u5b9a\u4e49\u7684starter\u521b\u5efa\uff0cSpring Boot\u7684\u6838\u5fc3\u7279\u6027\u4f1a\u56e0\u4e3a\u6838\u5fc3starter\u7684\u5b58\u5728\u800c\u542f\u7528\u3002"))}d.isMDXComponent=!0}}]);