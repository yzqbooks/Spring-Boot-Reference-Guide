"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[24924],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=i,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6232:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],p={},s=void 0,c={unversionedId:"IV. Spring Boot features/Sending Email",id:"IV. Spring Boot features/Sending Email",title:"Sending Email",description:"36. \u53d1\u9001\u90ae\u4ef6",source:"@site/docs/IV. Spring Boot features/36. Sending Email.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/Sending Email",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Sending Email",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/36. Sending Email.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validation",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Validation"},next:{title:"Distributed Transactions with JTA",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Distributed Transactions with JTA"}},u={},l=[{value:"36. \u53d1\u9001\u90ae\u4ef6",id:"36-\u53d1\u9001\u90ae\u4ef6",level:3}],m={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"36-\u53d1\u9001\u90ae\u4ef6"},"36. \u53d1\u9001\u90ae\u4ef6"),(0,o.kt)("p",null,"Spring\u6846\u67b6\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"JavaMailSender"),"\u63a5\u53e3\u4e3a\u53d1\u9001\u90ae\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u62bd\u8c61\uff0c\u5e76\u4e14Spring Boot\u4e5f\u4e3a\u5b83\u63d0\u4f9b\u4e86\u81ea\u52a8\u914d\u7f6e\u548c\u4e00\u4e2astarter\u6a21\u5757\u3002\n\u5177\u4f53\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/5.0.4.RELEASE/spring-framework-reference/integration.html#mail"},(0,o.kt)("inlineCode",{parentName:"a"},"JavaMailSender"),"\u53c2\u8003\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"spring.mail.host"),"\u548c\u76f8\u5173\u7684libraries\uff08\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-mail"),"\u5b9a\u4e49\u7684\uff09\u90fd\u53ef\u7528\uff0cSpring Boot\u5c06\u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"JavaMailSender"),"\uff0c\u8be5sender\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"spring.mail"),"\u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u914d\u7f6e\u9879\u8fdb\u4e00\u6b65\u81ea\u5b9a\u4e49\uff0c\u5177\u4f53\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot/tree/v2.0.0.RELEASE/spring-boot-project/spring-boot-autoconfigure/src/main/java/org/springframework/boot/autoconfigure/mail/MailProperties.java"},"MailProperties"),"\u3002"),(0,o.kt)("p",null,"\u7279\u522b\u5730\uff0c\u67d0\u4e9b\u9ed8\u8ba4\u7684\u8d85\u65f6\u503c\u662f\u65e0\u9650\u7684\u3002\u4f60\u53ef\u80fd\u60f3\u6539\u53d8\u5b83\uff0c\u4ee5\u907f\u514d\u7531\u65e0\u54cd\u5e94\u7684\u90ae\u4ef6\u670d\u52a1\u5668\u5f15\u8d77\u7684\u7ebf\u7a0b\u963b\u585e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"spring.mail.properties.mail.smtp.connectiontimeout=5000\nspring.mail.properties.mail.smtp.timeout=3000\nspring.mail.properties.mail.smtp.writetimeout=5000\n")))}f.isMDXComponent=!0}}]);