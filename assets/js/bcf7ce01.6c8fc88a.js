"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[77264],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(n),f=o,g=l["".concat(u,".").concat(f)]||l[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},17714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={},u=void 0,s={unversionedId:"IX. \u2018How-to\u2019 guides/87.6 Use Jedis Instead of Lettuce",id:"IX. \u2018How-to\u2019 guides/87.6 Use Jedis Instead of Lettuce",title:"87.6 Use Jedis Instead of Lettuce",description:"87.6 \u4f7f\u7528Jedis\u6765\u4ee3\u66ffLettuce",source:"@site/docs/IX. \u2018How-to\u2019 guides/87.6 Use Jedis Instead of Lettuce.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/87.6 Use Jedis Instead of Lettuce",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/87.6 Use Jedis Instead of Lettuce",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/87.6 Use Jedis Instead of Lettuce.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"87.5 Deploying a WAR in an Old\uff08Servlet 2.5\uff09Container",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/87.5 Deploying a WAR in an Old\uff08Servlet 2.5\uff09Container"},next:{title:"Spring-Boot-Reference-Guide",permalink:"/Spring-Boot-Reference-Guide/docs/"}},d={},p=[{value:"87.6 \u4f7f\u7528Jedis\u6765\u4ee3\u66ffLettuce",id:"876-\u4f7f\u7528jedis\u6765\u4ee3\u66fflettuce",level:3}],l={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"876-\u4f7f\u7528jedis\u6765\u4ee3\u66fflettuce"},"87.6 \u4f7f\u7528Jedis\u6765\u4ee3\u66ffLettuce"),(0,i.kt)("p",null,"Spring Boot starter\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-data-redis"),"\uff09\u9ed8\u8ba4\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lettuce-io/lettuce-core/"},"Lettuce"),"\u3002\u4f60\u9700\u8981\u6392\u9664\u90a3\u4e2a\u4f9d\u8d56\uff0c\u5e76\u628a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xetorthio/jedis/"},"Jedis"),"\u7684\u4f9d\u8d56\u52a0\u5165\u8fdb\u6765\u3002Spring Boot\u7ba1\u7406\u8fd9\u4e9b\u4f9d\u8d56\uff0c\u4f7f\u8fd9\u4e9b\u6b65\u9aa4\u5c3d\u53ef\u80fd\u5bb9\u6613\u3002"),(0,i.kt)("p",null,"Maven\u7684\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-redis</artifactId>\n    <exclusions>\n        <exclusion>\n            <groupId>io.lettuce</groupId>\n            <artifactId>lettuce-core</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n<dependency>\n    <groupId>redis.clients</groupId>\n    <artifactId>jedis</artifactId>\n</dependency>\n")),(0,i.kt)("p",null,"Gradle\u7684\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},'configurations {\n    compile.exclude module: "lettuce"\n}\n\ndependencies {\n    compile("redis.clients:jedis")\n    // ...\n}\n')))}f.isMDXComponent=!0}}]);