"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[906],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},35774:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),p=["components"],a={},u=void 0,c={unversionedId:"V. Spring Boot Actuator/50.8 Implementing Custom Endpoints",id:"V. Spring Boot Actuator/50.8 Implementing Custom Endpoints",title:"50.8 Implementing Custom Endpoints",description:"50.8 \u5b9e\u73b0\u81ea\u5b9a\u4e49\u7aef\u70b9",source:"@site/docs/V. Spring Boot Actuator/50.8 Implementing Custom Endpoints.md",sourceDirName:"V. Spring Boot Actuator",slug:"/V. Spring Boot Actuator/50.8 Implementing Custom Endpoints",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/50.8 Implementing Custom Endpoints",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/V. Spring Boot Actuator/50.8 Implementing Custom Endpoints.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"50.7 CORS Support",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/50.7 CORS Support"},next:{title:"50.8.1 Receiving Input",permalink:"/Spring-Boot-Reference-Guide/docs/V. Spring Boot Actuator/50.8.1 Receiving Input"}},l={},m=[{value:"50.8 \u5b9e\u73b0\u81ea\u5b9a\u4e49\u7aef\u70b9",id:"508-\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7aef\u70b9",level:3}],s={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"508-\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7aef\u70b9"},"50.8 \u5b9e\u73b0\u81ea\u5b9a\u4e49\u7aef\u70b9"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u6dfb\u52a0\u4e00\u4e2a\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@Endpoint"),"\u6807\u6ce8\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@Bean"),"\uff0c\u4efb\u4f55\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@ReadOperation"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"@WriteOperation"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"p"},"@DeleteOperation"),"\u6807\u6ce8\u7684\u65b9\u6cd5\u90fd\u4f1a\u81ea\u52a8\u901a\u8fc7JMX\u66b4\u9732\uff0c\u5728\u7f51\u7edc\u5e94\u7528\u91cc\u5219\u4f1a\u901a\u8fc7HTTP\u66b4\u9732\u3002\u4f7f\u7528Jersey\u3001Spring MVC\u6216\u8005Spring WebFlux\u65f6\uff0c\u7aef\u70b9\u4f1a\u901a\u8fc7HTTP\u66b4\u9732\u3002"),(0,i.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@JmxEndpoint"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"p"},"@WebEndpoint"),"\uff0c\u7f16\u5199\u6280\u672f\u7279\u5b9a\u7684\u7aef\u70b9\u3002\u8fd9\u4e9b\u7aef\u70b9\u53d7\u5230\u5bf9\u5e94\u6280\u672f\u7684\u9650\u5236\u3002\u6bd4\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"@WebEndpoint"),"\u53ea\u80fd\u901a\u8fc7HTTP\u66b4\u9732\uff0c\u4e0d\u80fd\u901a\u8fc7JMX\u66b4\u9732\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@EndpointWebExtension"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"p"},"@EndpointJmxExtension"),"\u7f16\u5199\u6280\u672f\u7279\u5b9a\u7684\u6269\u5c55\u3002\u8fd9\u4e9b\u6ce8\u89e3\u8ba9\u4f60\u63d0\u4f9b\u6280\u672f\u7279\u5b9a\u7684\u64cd\u4f5c\uff0c\u6765\u58f0\u660e\u4e00\u4e2a\u65e2\u5b58\u7684\u7aef\u70b9\u3002"),(0,i.kt)("p",null,"\u6700\u540e\uff0c\u5982\u679c\u4f60\u9700\u8981\u8bbf\u95ee\u7f51\u7edc\u6846\u67b6\u7279\u5b9a\u7684\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5b9e\u73b0Servlet\u6216\u8005Spring ",(0,i.kt)("inlineCode",{parentName:"p"},"@Controller"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"@RestController"),"\u7aef\u70b9\u3002\u4f46\u662f\uff0c\u5b83\u4eec\u5c06\u4e0d\u80fd\u901a\u8fc7JMX\u66b4\u9732\uff0c\u4e5f\u4e0d\u80fd\u7528\u4e8e\u53e6\u5916\u7684\u7f51\u7edc\u6846\u67b6\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u5982\u679c\u4f60\u6dfb\u52a0\u7aef\u70b9\u4f5c\u4e3a\u4e00\u4e2a\u5e93\u7279\u6027\uff0c\u8003\u8651\u5c06\u4e00\u4e2a\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@ManagementContextConfiguration"),"\u6807\u6ce8\u7684\u914d\u7f6e\u7c7b\u6dfb\u52a0\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"/META-INF/spring.factories"),"\u4e2d\uff0c\u4e14key\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.boot.actuate.autoconfigure.web.ManagementContextConfiguration"),"\u3002\u8fd9\u6837\uff0c\u5982\u679c\u4f60\u7684\u7528\u6237\u8981\u6c42\u4e00\u4e2a\u72ec\u7acb\u7684\u7ba1\u7406\u7aef\u53e3\u6216\u5730\u5740\uff0c\u7aef\u70b9\u5c06\u8ddf\u5176\u5b83\u7f51\u7edc\u7aef\u70b9\u4e00\u6837\u79fb\u52a8\u5230\u4e00\u4e2a\u5b50\u4e0a\u4e0b\u6587\u4e2d\u3002"))}d.isMDXComponent=!0}}]);