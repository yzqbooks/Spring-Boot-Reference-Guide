"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[76183],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),g=o,d=f["".concat(s,".").concat(g)]||f[g]||l[g]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},79797:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},s=void 0,p={unversionedId:"IV. Spring Boot features/32.3.2 Receiving a Message",id:"IV. Spring Boot features/32.3.2 Receiving a Message",title:"32.3.2 Receiving a Message",description:"32.3.2 \u63a5\u6536\u6d88\u606f",source:"@site/docs/IV. Spring Boot features/32.3.2 Receiving a Message.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/32.3.2 Receiving a Message",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/32.3.2 Receiving a Message",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/32.3.2 Receiving a Message.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"32.3.1 Sending a Message",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/32.3.1 Sending a Message"},next:{title:"32.3.3 Additional Kafka Properties",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/32.3.3 Additional Kafka Properties"}},u={},l=[{value:"32.3.2 \u63a5\u6536\u6d88\u606f",id:"3232-\u63a5\u6536\u6d88\u606f",level:3}],f={toc:l};function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"3232-\u63a5\u6536\u6d88\u606f"},"32.3.2 \u63a5\u6536\u6d88\u606f"),(0,a.kt)("p",null,"\u5f53\u5b8c\u6210Apache Kafka\u7684\u57fa\u7840\u914d\u7f6e\uff0c\u4efb\u4f55\u7684bean\u90fd\u53ef\u4ee5\u6807\u6ce8\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"@KafkaListener"),"\uff0c\u6765\u521b\u5efa\u4e00\u4e2a\u76d1\u542c\u5668\u7aef\u70b9\u3002\u5982\u679c\u6ca1\u6709\u5b9a\u4e49",(0,a.kt)("inlineCode",{parentName:"p"},"KafkaListenerContainerFactory"),"\uff0c\u4e00\u4e2a\u9ed8\u8ba4\u7684\u5c06\u4f1a\u7528\u5b9a\u4e49\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"spring.kafka.listener.*"),"\u91cc\u7684\u952e\u503c\u81ea\u52a8\u914d\u7f6e\u3002\u53e6\u5916\uff0c\u5982\u679c\u5b9a\u4e49\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"RecordMessageConverter")," bean\uff0c\u5b83\u4f1a\u81ea\u52a8\u5173\u8054\u5230\u9ed8\u8ba4\u7684\u5de5\u5382\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u7ec4\u4ef6\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"someTopic"),"\u4e3b\u9898\u4e0a\u521b\u5efa\u4e86\u4e00\u4e2a\u76d1\u542c\u5668\u7aef\u70b9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Component\npublic class MyBean {\n\n    @KafkaListener(topics = "someTopic")\n    public void processMessage(String content) {\n        // ...\n    }\n\n}\n')))}g.isMDXComponent=!0}}]);