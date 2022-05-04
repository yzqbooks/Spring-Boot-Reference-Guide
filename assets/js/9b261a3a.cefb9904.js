"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[89421],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,g=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81821:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={},u=void 0,s={unversionedId:"IV. Spring Boot features/29.3.3. Creating and Dropping JPA Databases",id:"IV. Spring Boot features/29.3.3. Creating and Dropping JPA Databases",title:"29.3.3. Creating and Dropping JPA Databases",description:"29.3.3. \u521b\u5efa\u548c\u5220\u9664JPA\u6570\u636e\u5e93",source:"@site/docs/IV. Spring Boot features/29.3.3. Creating and Dropping JPA Databases.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/29.3.3. Creating and Dropping JPA Databases",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/29.3.3. Creating and Dropping JPA Databases",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/29.3.3. Creating and Dropping JPA Databases.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"29.3.2. Spring Data JPA Repositories",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/29.3.2. Spring Data JPA Repositories"},next:{title:"29.3.4. Open EntityManager in View",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/29.3.4. Open EntityManager in View"}},c={},l=[{value:"29.3.3. \u521b\u5efa\u548c\u5220\u9664JPA\u6570\u636e\u5e93",id:"2933-\u521b\u5efa\u548c\u5220\u9664jpa\u6570\u636e\u5e93",level:3}],d={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"2933-\u521b\u5efa\u548c\u5220\u9664jpa\u6570\u636e\u5e93"},"29.3.3. \u521b\u5efa\u548c\u5220\u9664JPA\u6570\u636e\u5e93"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u6709\u5728\u4f60\u4f7f\u7528\u5185\u5d4c\u6570\u636e\u5e93\uff08H2, HSQL\u6216Derby\uff09\u65f6\uff0cJPA\u6570\u636e\u5e93\u624d\u4f1a\u88ab\u81ea\u52a8\u521b\u5efa\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"spring.jpa.*"),"\u5c5e\u6027\u663e\u5f0f\u7684\u8bbe\u7f6eJPA\uff0c\u6bd4\u5982\uff0c\u5c06\u4ee5\u4e0b\u914d\u7f6e\u6dfb\u52a0\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u4e2d\u53ef\u4ee5\u521b\u5efa\u548c\u5220\u9664\u8868\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"spring.jpa.hibernate.ddl-auto=create-drop\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," Hibernate\u81ea\u5df1\u5185\u90e8\u5bf9\u521b\u5efa\uff0c\u5220\u9664\u8868\u652f\u6301\u7684\u5c5e\u6027\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"hibernate.hbm2ddl.auto"),"\uff08\u5982\u679c\u4f60\u8bb0\u5f97\u66f4\u597d\uff09\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"spring.jpa.properties.*"),"\u8bbe\u7f6eHibernate\u5176\u4ed6\u7684native\u5c5e\u6027\uff08\u524d\u7f00\u5728\u88ab\u6dfb\u52a0\u5230\u5b9e\u4f53\u7ba1\u7406\u5668\u4e4b\u524d\u4f1a\u88ab\u53bb\u6389\uff09\u3002\u4e0b\u9762\u662f\u7ed9Hibernate\u8bbe\u7f6eJPA\u5c5e\u6027\u7684\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"`spring.jpa.properties.hibernate.globally_quoted_identifiers=true`\n")),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u4f20\u9012\u5230Hibernate\u5b9e\u4f53\u7ba1\u7406\u5668\u91cc\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"hibernate.globally_quoted_identifiers"),"\u5c5e\u6027\u3002"),(0,i.kt)("p",null,"\u901a\u5e38\uff0cDDL\u6267\u884c\uff08\u6216\u9a8c\u8bc1\uff09\u88ab\u5ef6\u8fdf\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationContext"),"\u542f\u52a8\u540e\uff0c\u8fd9\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"spring.jpa.generate-ddl"),"\u6807\u7b7e\u63a7\u5236\uff0c\u5982\u679cHibernate\u81ea\u52a8\u914d\u7f6e\u88ab\u6fc0\u6d3b\uff0c\u90a3\u8be5\u6807\u8bc6\u5c31\u4e0d\u4f1a\u88ab\u4f7f\u7528\uff0c\u56e0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"ddl-auto"),"\u8bbe\u7f6e\u7c92\u5ea6\u66f4\u7ec6\u3002"))}f.isMDXComponent=!0}}]);