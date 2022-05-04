"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[17368],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88573:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},p=void 0,s={unversionedId:"IV. Spring Boot features/Calling REST Services with RestTemplate",id:"IV. Spring Boot features/Calling REST Services with RestTemplate",title:"Calling REST Services with RestTemplate",description:"33. \u4f7f\u7528RestTemplate\u8c03\u7528REST\u670d\u52a1",source:"@site/docs/IV. Spring Boot features/33. Calling REST Services with RestTemplate.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/Calling REST Services with RestTemplate",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Calling REST Services with RestTemplate",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/33. Calling REST Services with RestTemplate.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Messaging",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Messaging"},next:{title:"Calling REST Services with WebClient",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Calling REST Services with WebClient"}},c={},u=[{value:"33. \u4f7f\u7528RestTemplate\u8c03\u7528REST\u670d\u52a1",id:"33-\u4f7f\u7528resttemplate\u8c03\u7528rest\u670d\u52a1",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"33-\u4f7f\u7528resttemplate\u8c03\u7528rest\u670d\u52a1"},"33. \u4f7f\u7528RestTemplate\u8c03\u7528REST\u670d\u52a1"),(0,i.kt)("p",null,"\u5982\u679c\u5e94\u7528\u9700\u8981\u8c03\u7528\u8fdc\u7a0bREST\u670d\u52a1\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528Spring\u6846\u67b6\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"RestTemplate"),"\u7c7b\u3002\u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"RestTemplate"),"\u5b9e\u4f8b\u7ecf\u5e38\u5728\u4f7f\u7528\u524d\u9700\u8981\u81ea\u5b9a\u4e49\uff0cSpring Boot\u5c31\u6ca1\u6709\u63d0\u4f9b\u4efb\u4f55\u81ea\u52a8\u914d\u7f6e\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"RestTemplate")," bean\u3002\u4e0d\u8fc7\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u81ea\u52a8\u914d\u7f6e\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"RestTemplateBuilder"),"\u521b\u5efa\u81ea\u5df1\u9700\u8981\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"RestTemplate"),"\u5b9e\u4f8b\u3002\u81ea\u52a8\u914d\u7f6e\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"RestTemplateBuilder"),"\u4f1a\u786e\u4fdd\u5e94\u7528\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"RestTemplate"),"\u5b9e\u4f8b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"HttpMessageConverters"),"\u662f\u5408\u9002\u7684\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u5178\u578b\u7684\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Service\npublic class MyService {\n\n    private final RestTemplate restTemplate;\n\n    public MyBean(RestTemplateBuilder restTemplateBuilder) {\n        this.restTemplate = restTemplateBuilder.build();\n    }\n\n    public Details someRestCall(String name) {\n        return this.restTemplate.getForObject("/{name}/details", Details.class, name);\n    }\n\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," ",(0,i.kt)("inlineCode",{parentName:"p"},"RestTemplateBuilder"),"\u5305\u542b\u5f88\u591a\u6709\u7528\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u7528\u4e8e\u5feb\u901f\u914d\u7f6e\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"RestTemplate"),"\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},'builder.basicAuthorization("user", "password").build()'),"\u6dfb\u52a0\u57fa\u672c\u7684\u8ba4\u8bc1\u652f\u6301\uff08BASIC auth\uff09\u3002"))}f.isMDXComponent=!0}}]);