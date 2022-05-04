"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[22180],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72779:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={},p=void 0,l={unversionedId:"III. Using Spring Boot/20.2.6. Customizing the Restart Classloader",id:"III. Using Spring Boot/20.2.6. Customizing the Restart Classloader",title:"20.2.6. Customizing the Restart Classloader",description:"20.2.6 \u81ea\u5b9a\u4e49restart\u7c7b\u52a0\u8f7d\u5668",source:"@site/docs/III. Using Spring Boot/20.2.6. Customizing the Restart Classloader.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/20.2.6. Customizing the Restart Classloader",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.6. Customizing the Restart Classloader",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/20.2.6. Customizing the Restart Classloader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"20.2.5. Using a Trigger File",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.5. Using a Trigger File"},next:{title:"20.2.7. Known Limitations",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/20.2.7. Known Limitations"}},c={},u=[{value:"20.2.6 \u81ea\u5b9a\u4e49restart\u7c7b\u52a0\u8f7d\u5668",id:"2026-\u81ea\u5b9a\u4e49restart\u7c7b\u52a0\u8f7d\u5668",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"2026-\u81ea\u5b9a\u4e49restart\u7c7b\u52a0\u8f7d\u5668"},"20.2.6 \u81ea\u5b9a\u4e49restart\u7c7b\u52a0\u8f7d\u5668"),(0,i.kt)("p",null,"\u6b63\u5982\u4e4b\u524d",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#using-spring-boot-restart-vs-reload"},"Restart vs Reload"),"\u7ae0\u8282\u8ba8\u8bba\u7684\uff0c\u91cd\u542f\u529f\u80fd\u662f\u901a\u8fc7\u4e24\u4e2a\u7c7b\u52a0\u8f7d\u5668\u5b9e\u73b0\u7684\u3002\u5bf9\u4e8e\u5927\u90e8\u5206\u5e94\u7528\u6765\u8bf4\u662f\u6ca1\u95ee\u9898\u7684\uff0c\u4f46\u6709\u65f6\u5019\u5b83\u53ef\u80fd\u5bfc\u81f4\u7c7b\u52a0\u8f7d\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\uff0c\u5728IDE\u91cc\u6253\u5f00\u7684\u9879\u76ee\u4f1a\u901a\u8fc7'restart'\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d\uff0c\u5176\u4ed6\u5e38\u89c4\u7684",(0,i.kt)("inlineCode",{parentName:"p"},".jar"),"\u6587\u4ef6\u4f1a\u4f7f\u7528'basic'\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d\u3002\u5982\u679c\u4f60\u5de5\u4f5c\u5728\u4e00\u4e2a\u591a\u6a21\u5757\u7684\u9879\u76ee\u4e0b\uff0c\u5e76\u4e14\u4e0d\u662f\u6bcf\u4e2a\u6a21\u5757\u90fd\u5bfc\u5165IDE\u91cc\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u81ea\u5b9a\u4e49\u4e00\u4e9b\u4e1c\u897f\u3002\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"META-INF/spring-devtools.properties"),"\u6587\u4ef6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"spring-devtools.properties"),"\u6587\u4ef6\u53ef\u4ee5\u5305\u542b",(0,i.kt)("inlineCode",{parentName:"p"},"restart.exclude."),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"restart.include."),"\u524d\u7f00\u7684\u5c5e\u6027\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"include"),"\u5143\u7d20\u5b9a\u4e49\u4e86\u90a3\u4e9b\u9700\u8981\u52a0\u8f7d\u8fdb'restart'\u7c7b\u52a0\u8f7d\u5668\u4e2d\u7684\u5b9e\u4f53\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"exclude"),"\u5143\u7d20\u5b9a\u4e49\u4e86\u90a3\u4e9b\u9700\u8981\u52a0\u8f7d\u8fdb'basic'\u7c7b\u52a0\u8f7d\u5668\u4e2d\u7684\u5b9e\u4f53\uff0c\u8fd9\u4e9b\u5c5e\u6027\u7684\u503c\u662f\u4e00\u4e2a\u5c06\u5e94\u7528\u5230classpath\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"restart.include.companycommonlibs=/mycorp-common-[\\\\w-]+\\.jar\nrestart.include.projectcommon=/mycorp-myproj-[\\\\w-]+\\.jar\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u6240\u6709\u5c5e\u6027\u7684keys\u5fc5\u987b\u552f\u4e00\uff0c\u53ea\u8981\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"restart.include."),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"restart.exclude."),"\u5f00\u5934\u90fd\u4f1a\u8003\u8651\u8fdb\u53bb\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u6240\u6709\u6765\u81eaclasspath\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"META-INF/spring-devtools.properties"),"\u90fd\u4f1a\u88ab\u52a0\u8f7d\uff0c\u4f60\u53ef\u4ee5\u5c06\u6587\u4ef6\u6253\u5305\u8fdb\u5de5\u7a0b\u6216\u5de5\u7a0b\u4f7f\u7528\u7684\u5e93\u91cc\u3002"))}m.isMDXComponent=!0}}]);