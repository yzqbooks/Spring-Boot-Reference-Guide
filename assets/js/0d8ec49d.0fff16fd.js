"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[74400],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=c(t),f=o,d=g["".concat(l,".").concat(f)]||g[f]||s[f]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},24436:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={},l=void 0,c={unversionedId:"VI. Deploying Spring Boot Applications/Installing Spring Boot Applications",id:"VI. Deploying Spring Boot Applications/Installing Spring Boot Applications",title:"Installing Spring Boot Applications",description:"61. \u5b89\u88c5Spring Boot\u5e94\u7528",source:"@site/docs/VI. Deploying Spring Boot Applications/61. Installing Spring Boot Applications.md",sourceDirName:"VI. Deploying Spring Boot Applications",slug:"/VI. Deploying Spring Boot Applications/Installing Spring Boot Applications",permalink:"/Spring-Boot-Reference-Guide/docs/VI. Deploying Spring Boot Applications/Installing Spring Boot Applications",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VI. Deploying Spring Boot Applications/61. Installing Spring Boot Applications.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploying to the Cloud",permalink:"/Spring-Boot-Reference-Guide/docs/VI. Deploying Spring Boot Applications/Deploying to the Cloud"},next:{title:"What to Read Next",permalink:"/Spring-Boot-Reference-Guide/docs/VI. Deploying Spring Boot Applications/What to Read Next"}},u={},s=[{value:"61. \u5b89\u88c5Spring Boot\u5e94\u7528",id:"61-\u5b89\u88c5spring-boot\u5e94\u7528",level:3}],g={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"61-\u5b89\u88c5spring-boot\u5e94\u7528"},"61. \u5b89\u88c5Spring Boot\u5e94\u7528"),(0,i.kt)("p",null,"\u9664\u4e86\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"java -jar"),"\u8fd0\u884cSpring Boot\u5e94\u7528\uff0c\u5236\u4f5c\u5728Unix\u7cfb\u7edf\u4e0a\u5b8c\u5168\u53ef\u6267\u884c\u7684\u5e94\u7528\u4e5f\u662f\u53ef\u80fd\u7684\u3002\u5b8c\u5168\u53ef\u6267\u884c\u7684jar\u53ef\u4ee5\u50cf\u5176\u5b83\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e00\u6837\u88ab\u6267\u884c\uff0c\u6216\u8005\u53ef\u4ee5\u7528",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#deployment-service"},(0,i.kt)("inlineCode",{parentName:"a"},"init.d"),"\u6216",(0,i.kt)("inlineCode",{parentName:"a"},"systemd"),"\u8fdb\u884c\u6ce8\u518c"),"\u3002\u8fd9\u4f1a\u7b80\u5316\u5e38\u89c1\u751f\u4ea7\u73af\u5883Spring Boot\u5e94\u7528\u7684\u5b89\u88c5\u548c\u7ba1\u7406\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8b66\u544a\u26a0\ufe0f")," \u901a\u8fc7\u5728\u6587\u4ef6\u4e4b\u524d\u5d4c\u5165\u4e00\u6bb5\u989d\u5916\u7684\u811a\u672c\uff0c\u6765\u542f\u52a8\u5b8c\u5168\u53ef\u6267\u884c\u7684Jar\u3002\u76ee\u524d\uff0c\u4e00\u4e9b\u5de5\u5177\u5c1a\u4e0d\u63a5\u53d7\u8fd9\u79cd\u683c\u5f0f\uff0c\u6240\u4ee5\u4f60\u5e76\u4e0d\u603b\u662f\u80fd\u591f\u4f7f\u7528\u8fd9\u9879\u6280\u672f\u3002\u6bd4\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"jar -xf"),"\u53ef\u80fd\u4f1a\u5728\u89e3\u538b\u4e00\u4e2a\u5b8c\u5168\u53ef\u6267\u884c\u7684jar\u6216\u8005war\u6587\u4ef6\u65f6\u6084\u6084\u5730\u5931\u8d25\u3002\u5efa\u8bae\u4f60\u4ec5\u5728\u60f3\u8981\u76f4\u63a5\u6267\u884c\u5b83\u7684\u60c5\u51b5\u4e0b\uff0c\u5c06\u4f60\u7684jar\u6216\u8005war\u6587\u4ef6\u5236\u4f5c\u4e3a\u5b8c\u5168\u53ef\u6267\u884c\u7684\u683c\u5f0f\u3002\u4e0d\u8981\u5728\u53ea\u662f\u60f3\u8981\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"java -jar"),"\u8fd0\u884c\u5b83\uff0c\u6216\u8005\u5728\u4e00\u4e2aservlet\u5bb9\u5668\u90e8\u7f72\u5b83\u7684\u65f6\u5019\u8fd9\u6837\u505a\u3002"),(0,i.kt)("p",null,'\u5728Maven\u4e2d\u6dfb\u52a0\u4ee5\u4e0bplugin\u914d\u7f6e\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a"\u5b8c\u5168\u53ef\u6267\u884c"jar\uff1a'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-maven-plugin</artifactId>\n    <configuration>\n        <executable>true</executable>\n    </configuration>\n</plugin>\n")),(0,i.kt)("p",null,"\u5bf9\u4e8eGradle\uff0c\u7b49\u4ef7\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bootJar {\n    launchScript()\n}\n")),(0,i.kt)("p",null,"\u7136\u540e\u8f93\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"./my-application.jar"),"\u8fd0\u884c\u5e94\u7528\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"my-application"),"\u662f\u4f60\u7684artifact name\uff09\u3002\u5305\u542bjar\u6587\u4ef6\u7684\u76ee\u5f55\u4f1a\u88ab\u5f53\u4f5c\u4f60\u7684\u5e94\u7528\u5de5\u4f5c\u76ee\u5f55\u4f7f\u7528\u3002"))}f.isMDXComponent=!0}}]);