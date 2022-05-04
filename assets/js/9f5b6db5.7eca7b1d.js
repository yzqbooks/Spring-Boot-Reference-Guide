"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[98669],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,g=s["".concat(l,".").concat(d)]||s[d]||f[d]||i;return t?r.createElement(g,u(u({ref:n},c),{},{components:t})):r.createElement(g,u({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=s;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var p=2;p<i;p++)u[p]=t[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},70987:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return f}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),u=["components"],a={},l=void 0,p={unversionedId:"IV. Spring Boot features/30.10.1 Connecting to InfluxDB",id:"IV. Spring Boot features/30.10.1 Connecting to InfluxDB",title:"30.10.1 Connecting to InfluxDB",description:"30.10.1 \u8fde\u63a5InfluxDB",source:"@site/docs/IV. Spring Boot features/30.10.1 Connecting to InfluxDB.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/30.10.1 Connecting to InfluxDB",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.10.1 Connecting to InfluxDB",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/30.10.1 Connecting to InfluxDB.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"30.10 InfluxDB",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.10 InfluxDB"},next:{title:"30.2. MongoDB",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.2. MongoDB"}},c={},f=[{value:"30.10.1 \u8fde\u63a5InfluxDB",id:"30101-\u8fde\u63a5influxdb",level:3}],s={toc:f};function d(e){var n=e.components,t=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"30101-\u8fde\u63a5influxdb"},"30.10.1 \u8fde\u63a5InfluxDB"),(0,i.kt)("p",null,"\u53ea\u8981",(0,i.kt)("inlineCode",{parentName:"p"},"influxdb-java"),"\u5ba2\u6237\u7aef\u5728\u7c7b\u8def\u5f84\u4e0b\uff0c\u800c\u4e14\u8bbe\u7f6e\u4e86\u6570\u636e\u5e93\u7684url\uff0cSpring Boot\u5c31\u80fd\u81ea\u52a8\u914d\u7f6eInfluxDB\u5b9e\u4f8b\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"spring.influx.url=http://172.0.0.1:8086\n")),(0,i.kt)("p",null,"\u5982\u679c\u8fde\u63a5InfluxDB\u9700\u8981\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u4f60\u53ef\u4ee5\u76f8\u5e94\u5730\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"spring.influx.user"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"spring.influx.password"),"\u3002"),(0,i.kt)("p",null,"InfluxDB\u4f9d\u8d56OkHttp\u3002\u5982\u679c\u4f60\u9700\u8981\u8c03\u6574http\u5ba2\u6237\u7aef",(0,i.kt)("inlineCode",{parentName:"p"},"InfluxDB"),"\u5728\u5e55\u540e\u4f7f\u7528\uff0c\u4f60\u53ef\u4ee5\u6ce8\u518c\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"OkHttpClient.Builder")," bean\u3002"))}d.isMDXComponent=!0}}]);