"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[74071],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),b=i,d=f["".concat(c,".").concat(b)]||f[b]||u[b]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45397:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={},c=void 0,p={unversionedId:"IV. Spring Boot features/Calling REST Services with WebClient",id:"IV. Spring Boot features/Calling REST Services with WebClient",title:"Calling REST Services with WebClient",description:"34. \u4f7f\u7528WebClient\u8c03\u7528REST\u670d\u52a1",source:"@site/docs/IV. Spring Boot features/34. Calling REST Services with WebClient.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/Calling REST Services with WebClient",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Calling REST Services with WebClient",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/34. Calling REST Services with WebClient.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Calling REST Services with RestTemplate",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Calling REST Services with RestTemplate"},next:{title:"Validation",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/Validation"}},s={},u=[{value:"34. \u4f7f\u7528WebClient\u8c03\u7528REST\u670d\u52a1",id:"34-\u4f7f\u7528webclient\u8c03\u7528rest\u670d\u52a1",level:3}],f={toc:u};function b(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"34-\u4f7f\u7528webclient\u8c03\u7528rest\u670d\u52a1"},"34. \u4f7f\u7528WebClient\u8c03\u7528REST\u670d\u52a1"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7c7b\u8def\u5f84\u4e0a\u5b58\u5728Spring WebFlux\uff0c\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"WebClient"),"\u8c03\u7528REST\u670d\u52a1\u3002\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"RestTemplate"),"\u76f8\u6bd4\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"WebClient"),"\u66f4\u6709\u51fd\u6570\u5f0f\u7684\u611f\u89c9,\u800c\u4e14\u5b8c\u5168\u662f\u54cd\u5e94\u5f0f\u7684\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"WebClient.create()"),"\u521b\u5efa\u4f60\u81ea\u5df1\u7684client\u5b9e\u4f8b\u3002\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/5.0.4.RELEASE/spring-framework-reference/web.html#web-reactive-client"},"\u4e0eWebClient\u6709\u5173\u7684\u7ae0\u8282"),"\u3002"),(0,o.kt)("p",null,"Spring Boot\u4e3a\u4f60\u521b\u5efa\u5e76\u9884\u5148\u914d\u7f6e\u4e86\u8fd9\u6837\u4e00\u4e2abuilder\u3002\u6bd4\u5982\uff0c\u5ba2\u6237\u7aefHTTP\u7f16\u89e3\u7801\u5668\u4f1a\u4ee5\u4e0e\u670d\u52a1\u5668\u7aef\u76f8\u540c\u7684\u65b9\u5f0f\u88ab\u914d\u7f6e\u597d\uff08\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/reference/htmlsingle/#boot-features-webflux-httpcodecs"},"WebFlux HTTP\u7f16\u89e3\u7801\u5668\u7684\u81ea\u52a8\u914d\u7f6e"),"\uff09\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u5178\u578b\u7684\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Service\npublic class MyService {\n\n    private final WebClient webClient;\n\n    public MyBean(WebClient.Builder webClientBuilder) {\n        this.webClient = webClientBuilder.baseUrl("http://example.org").build();\n    }\n\n    public Mono<Details> someRestCall(String name) {\n        return this.webClient.get().url("/{name}/details", name)\n                        .retrieve().bodyToMono(Details.class);\n    }\n\n}\n')))}b.isMDXComponent=!0}}]);