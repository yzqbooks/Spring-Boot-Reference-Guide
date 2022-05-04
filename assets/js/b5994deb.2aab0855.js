"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[49032],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,d=s["".concat(p,".").concat(f)]||s[f]||l[f]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var g={};for(var p in r)hasOwnProperty.call(r,p)&&(g[p]=r[p]);g.originalType=e,g.mdxType="string"==typeof e?e:o,i[1]=g;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},69946:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return g},metadata:function(){return u},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],g={},p=void 0,u={unversionedId:"IX. \u2018How-to\u2019 guides/78.2 Configure Log4j for Logging",id:"IX. \u2018How-to\u2019 guides/78.2 Configure Log4j for Logging",title:"78.2 Configure Log4j for Logging",description:"78.2 \u914d\u7f6eLog4j",source:"@site/docs/IX. \u2018How-to\u2019 guides/78.2 Configure Log4j for Logging.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/78.2 Configure Log4j for Logging",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/78.2 Configure Log4j for Logging",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/78.2 Configure Log4j for Logging.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"78.1.1 Configure Logback for File-only Output",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/78.1.1 Configure Logback for File-only Output"},next:{title:"78.2.1 Use YAML or JSON to Configure Log4j 2",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/78.2.1 Use YAML or JSON to Configure Log4j 2"}},c={},l=[{value:"78.2 \u914d\u7f6eLog4j",id:"782-\u914d\u7f6elog4j",level:3}],s={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"782-\u914d\u7f6elog4j"},"78.2 \u914d\u7f6eLog4j"),(0,a.kt)("p",null,"\u5982\u679c",(0,a.kt)("a",{parentName:"p",href:"https://logging.apache.org/log4j/2.x"},"Log4j 2"),"\u51fa\u73b0\u5728\u7c7b\u8def\u5f84\u4e0b\uff0cSpring Boot\u4f1a\u5c06\u5176\u4f5c\u4e3a\u65e5\u5fd7\u914d\u7f6e\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528starter\u8fdb\u884c\u4f9d\u8d56\u88c5\u914d\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u9700\u8981\u6392\u9664Logback\uff0c\u7136\u540e\u5305\u542blog4j 2\u3002\u5982\u679c\u4e0d\u4f7f\u7528starters\uff0c\u9664\u4e86\u6dfb\u52a0Log4j 2\uff0c\u4f60\u8fd8\u9700\u8981\u63d0\u4f9b",(0,a.kt)("inlineCode",{parentName:"p"},"spring-jcl"),"\u4f9d\u8d56\uff08\u81f3\u5c11\uff09\u3002"),(0,a.kt)("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u53ef\u80fd\u5c31\u662f\u901a\u8fc7starter\uff0c\u5c3d\u7ba1\u5b83\u9700\u8981\u6392\u9664\u4e00\u4e9b\u4f9d\u8d56\uff0c\u6bd4\u5982\uff0c\u5728Maven\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter</artifactId>\n    <exclusions>\n        <exclusion>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-logging</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-log4j2</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," Log4j starters\u4f1a\u6536\u96c6\u597d\u4f9d\u8d56\u4ee5\u6ee1\u8db3\u666e\u901a\u65e5\u5fd7\u8bb0\u5f55\u7684\u9700\u6c42\uff08\u6bd4\u5982\uff0cTomcat\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.logging"),"\uff0c\u4f46\u4f7f\u7528Log4j 2\u4f5c\u4e3a\u8f93\u51fa\uff09\u3002\u5177\u4f53\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot/tree/v2.0.0.RELEASE/spring-boot-samples/spring-boot-sample-actuator-log4j2"},"Actuator Log4j 2"),"\u7684\u793a\u4f8b\uff0c\u4e86\u89e3\u5982\u4f55\u5c06\u5b83\u7528\u4e8e\u5b9e\u6218\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," \u901a\u8fc7\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.logging.manager"),"\u7cfb\u7edf\u5c5e\u6027\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.logging.log4j.jul.LogManager"),"\uff0c\u6765\u914d\u7f6e\u5b83\u7684",(0,a.kt)("a",{parentName:"p",href:"https://logging.apache.org/log4j/2.0/log4j-jul/index.html"},"JDK\u65e5\u5fd7\u9002\u914d\u5668"),"\uff0c\u786e\u4fdd\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.logging"),"\u6267\u884c\u7684\u8c03\u8bd5\u65e5\u5fd7\u88ab\u8def\u7531\u5230Log4j 2\u3002"))}f.isMDXComponent=!0}}]);