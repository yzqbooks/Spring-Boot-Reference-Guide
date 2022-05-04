"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[60176],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),g=o,f=d["".concat(p,".").concat(g)]||d[g]||l[g]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27488:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={},p=void 0,u={unversionedId:"III. Using Spring Boot/20.2.2. Excluding Resources",id:"III. Using Spring Boot/20.2.2. Excluding Resources",title:"20.2.2. Excluding Resources",description:"20.2.2 \u6392\u9664\u8d44\u6e90",source:"@site/docs/III. Using Spring Boot/20.2.2. Excluding Resources.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/20.2.2. Excluding Resources",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.2. Excluding Resources",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/20.2.2. Excluding Resources.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"20.2.1. Logging changes in condition evaluation",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.1. Logging changes in condition evaluation"},next:{title:"20.2.3. Watching Additional Paths",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.3. Watching Additional Paths"}},s={},l=[{value:"20.2.2 \u6392\u9664\u8d44\u6e90",id:"2022-\u6392\u9664\u8d44\u6e90",level:3}],d={toc:l};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"2022-\u6392\u9664\u8d44\u6e90"},"20.2.2 \u6392\u9664\u8d44\u6e90"),(0,i.kt)("p",null,"\u67d0\u4e9b\u8d44\u6e90\u7684\u53d8\u5316\u6ca1\u5fc5\u8981\u89e6\u53d1\u91cd\u542f\uff0c\u6bd4\u5982Thymeleaf\u6a21\u677f\u53ef\u4ee5\u968f\u65f6\u7f16\u8f91\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f4d\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"/META-INF/maven"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"/META-INF/resources"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"/resources"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"/static"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"/public"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"/templates"),"\u4e0b\u7684\u8d44\u6e90\u53d8\u66f4\u4e0d\u4f1a\u89e6\u53d1\u91cd\u542f\uff0c\u4f46\u4f1a\u89e6\u53d1\u5b9e\u65f6\u91cd\u8f7d\uff08live reload\uff09\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"spring.devtools.restart.exclude"),"\u5c5e\u6027\u81ea\u5b9a\u4e49\u8fd9\u4e9b\u6392\u9664\u89c4\u5219\uff0c\u6bd4\u5982\uff0c\u4e3a\u4e86\u53ea\u6392\u9664",(0,i.kt)("inlineCode",{parentName:"p"},"/static"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"/public"),"\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"spring.devtools.restart.exclude=static/**,public/**\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u5982\u679c\u4f60\u60f3\u4fdd\u7559\u9ed8\u8ba4\u5c5e\u6027\uff0c\u5e76\u6dfb\u52a0\u5176\u4ed6\u7684\u6392\u9664\u89c4\u5219\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"spring.devtools.restart.additional-exclude"),"\u5c5e\u6027\u4f5c\u4e3a\u4ee3\u66ff\u3002"))}g.isMDXComponent=!0}}]);