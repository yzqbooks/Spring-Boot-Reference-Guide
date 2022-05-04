"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[63820],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,d=l["".concat(c,".").concat(f)]||l[f]||g[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},52028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return g}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={},c=void 0,u={unversionedId:"IV. Spring Boot features/30.2.3. Spring Data MongoDB Repositories",id:"IV. Spring Boot features/30.2.3. Spring Data MongoDB Repositories",title:"30.2.3. Spring Data MongoDB Repositories",description:"30.2.3. Spring Data MongoDB\u4ed3\u5e93",source:"@site/docs/IV. Spring Boot features/30.2.3. Spring Data MongoDB Repositories.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/30.2.3. Spring Data MongoDB Repositories",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.2.3. Spring Data MongoDB Repositories",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/30.2.3. Spring Data MongoDB Repositories.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"30.2.2. MongoTemplate",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.2.2. MongoTemplate"},next:{title:"30.2.4 Embedded Mongo",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/30.2.4 Embedded Mongo"}},s={},g=[{value:"30.2.3. Spring Data MongoDB\u4ed3\u5e93",id:"3023-spring-data-mongodb\u4ed3\u5e93",level:3}],l={toc:g};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"3023-spring-data-mongodb\u4ed3\u5e93"},"30.2.3. Spring Data MongoDB\u4ed3\u5e93"),(0,a.kt)("p",null,"Spring Data\u5305\u542b\u7684\u4ed3\u5e93\u4e5f\u652f\u6301MongoDB\uff0c\u6b63\u5982\u4e0a\u9762\u8ba8\u8bba\u7684JPA\u4ed3\u5e93\uff0c\u57fa\u4e8e\u65b9\u6cd5\u540d\u81ea\u52a8\u521b\u5efa\u67e5\u8be2\u662f\u57fa\u672c\u7684\u539f\u5219\u3002"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u4e0d\u7ba1\u662fSpring Data JPA\u8fd8\u662fSpring Data MongoDB\u90fd\u5171\u4eab\u76f8\u540c\u7684\u57fa\u7840\u8bbe\u65bd\u3002\u6240\u4ee5\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0a\u9762\u7684JPA\u793a\u4f8b\uff0c\u5e76\u5047\u8bbe\u90a3\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"City"),"\u73b0\u5728\u662f\u4e00\u4e2aMongo\u6570\u636e\u7c7b\u800c\u4e0d\u662fJPA ",(0,a.kt)("inlineCode",{parentName:"p"},"@Entity"),"\uff0c\u5b83\u5c06\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\u5de5\u4f5c\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package com.example.myapp.domain;\n\nimport org.springframework.data.domain.*;\nimport org.springframework.data.repository.*;\n\npublic interface CityRepository extends Repository<City, Long> {\n\n    Page<City> findAll(Pageable pageable);\n\n    City findByNameAndCountryAllIgnoringCase(String name, String country);\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," \u4f60\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"@EntityScan"),"\u6ce8\u89e3\u81ea\u5b9a\u4e49\u6587\u6863\u626b\u63cf\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8")," \u60f3\u8be6\u7ec6\u4e86\u89e3Spring Data MongoDB\uff0c\u5305\u62ec\u5b83\u4e30\u5bcc\u7684\u5bf9\u8c61\u6620\u5c04\u6280\u672f\uff0c\u53ef\u4ee5\u67e5\u770b\u5b83\u7684",(0,a.kt)("a",{parentName:"p",href:"https://projects.spring.io/spring-data-mongodb/"},"\u53c2\u8003\u6587\u6863"),"\u3002"))}f.isMDXComponent=!0}}]);