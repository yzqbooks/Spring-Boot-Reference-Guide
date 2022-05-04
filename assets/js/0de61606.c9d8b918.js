"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[21790],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||l[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71828:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],u={},p=void 0,c={unversionedId:"IV. Spring Boot features/43.4.2 EnvironmentTestUtils",id:"IV. Spring Boot features/43.4.2 EnvironmentTestUtils",title:"43.4.2 EnvironmentTestUtils",description:"43.4.2 EnvironmentTestUtils",source:"@site/docs/IV. Spring Boot features/43.4.2 EnvironmentTestUtils.md",sourceDirName:"IV. Spring Boot features",slug:"/IV. Spring Boot features/43.4.2 EnvironmentTestUtils",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/43.4.2 EnvironmentTestUtils",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IV. Spring Boot features/43.4.2 EnvironmentTestUtils.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"43.4.1 ConfigFileApplicationContextInitializer",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/43.4.1 ConfigFileApplicationContextInitializer"},next:{title:"43.4.3 OutputCapture",permalink:"/Spring-Boot-Reference-Guide/docs/IV. Spring Boot features/43.4.3 OutputCapture"}},s={},l=[{value:"43.4.2 EnvironmentTestUtils",id:"4342-environmenttestutils",level:3}],f={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"4342-environmenttestutils"},"43.4.2 EnvironmentTestUtils"),(0,i.kt)("p",null,"\u4f7f\u7528\u7b80\u5355\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"key=value"),"\u5b57\u7b26\u4e32\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"EnvironmentTestUtils"),"\u5c31\u53ef\u4ee5\u5feb\u901f\u6dfb\u52a0\u5c5e\u6027\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigurableEnvironment"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigurableApplicationContext"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'EnvironmentTestUtils.addEnvironment(env, "org=Spring", "name=Boot");\n')))}m.isMDXComponent=!0}}]);