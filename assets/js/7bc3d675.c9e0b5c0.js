"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[30753],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,g=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return t?r.createElement(g,p(p({ref:n},c),{},{components:t})):r.createElement(g,p({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var l=2;l<i;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},80389:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),p=["components"],a={},u=void 0,l={unversionedId:"IX. \u2018How-to\u2019 guides/74.7 Change Configuration Depending on the Environment",id:"IX. \u2018How-to\u2019 guides/74.7 Change Configuration Depending on the Environment",title:"74.7 Change Configuration Depending on the Environment",description:"74.7 \u6839\u636e\u73af\u5883\u6539\u53d8\u914d\u7f6e",source:"@site/docs/IX. \u2018How-to\u2019 guides/74.7 Change Configuration Depending on the Environment.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/74.7 Change Configuration Depending on the Environment",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/74.7 Change Configuration Depending on the Environment",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/74.7 Change Configuration Depending on the Environment.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"74.6 Set the Active Spring Profiles",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/74.6 Set the Active Spring Profiles"},next:{title:"74.8 Discover Built-in Options for External Properties",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/74.8 Discover Built-in Options for External Properties"}},c={},s=[{value:"74.7 \u6839\u636e\u73af\u5883\u6539\u53d8\u914d\u7f6e",id:"747-\u6839\u636e\u73af\u5883\u6539\u53d8\u914d\u7f6e",level:3}],f={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"747-\u6839\u636e\u73af\u5883\u6539\u53d8\u914d\u7f6e"},"74.7 \u6839\u636e\u73af\u5883\u6539\u53d8\u914d\u7f6e"),(0,i.kt)("p",null,"\u4e00\u4e2aYAML\u6587\u4ef6\u5b9e\u9645\u4e0a\u662f\u4e00\u7cfb\u5217\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"---"),"\u7ebf\u5206\u5272\u7684\u6587\u6863\uff0c\u6bcf\u4e2a\u6587\u6863\u90fd\u88ab\u5355\u72ec\u89e3\u6790\u4e3a\u4e00\u4e2a\u5e73\u5766\u7684\uff08flattened\uff09map\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4e00\u4e2aYAML\u6587\u6863\u5305\u542b\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"spring.profiles"),"\u5173\u952e\u5b57\uff0c\u90a3profiles\u7684\u503c\uff08\u4ee5\u9017\u53f7\u5206\u5272\u7684profiles\u5217\u8868\uff09\u5c06\u88ab\u4f20\u5165Spring\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Environment.acceptsProfiles()"),"\u65b9\u6cd5\uff0c\u5e76\u4e14\u5982\u679c\u8fd9\u4e9bprofiles\u7684\u4efb\u4f55\u4e00\u4e2a\u88ab\u6fc0\u6d3b\uff0c\u5bf9\u5e94\u7684\u6587\u6863\u88ab\u5305\u542b\u5230\u6700\u7ec8\u7684\u5408\u5e76\u4e2d\uff08\u5426\u5219\u4e0d\u4f1a\uff09\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 9000\n---\n\nspring:\n  profiles: development\nserver:\n  port: 9001\n\n---\n\nspring:\n  profiles: production\nserver:\n  port: 0\n")),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u9ed8\u8ba4\u7684\u7aef\u53e3\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"9000"),"\uff0c\u4f46\u5982\u679cSpring profile ",(0,i.kt)("inlineCode",{parentName:"p"},"development"),"\u751f\u6548\u5219\u8be5\u7aef\u53e3\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"9001"),"\uff0c\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"production"),"\u751f\u6548\u5219\u5b83\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," YAML\u6587\u6863\u4ee5\u5b83\u4eec\u51fa\u73b0\u7684\u987a\u5e8f\u5408\u5e76\uff0c\u6240\u4ee5\u540e\u9762\u7684\u503c\u4f1a\u8986\u76d6\u524d\u9762\u7684\u503c\u3002"),(0,i.kt)("p",null,"\u60f3\u8981\u4f7f\u7528profiles\u6587\u4ef6\u5b8c\u6210\u540c\u6837\u7684\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"application-${profile}.properties"),"\u6307\u5b9a\u7279\u6b8a\u7684\uff0cprofile\u76f8\u5173\u7684\u503c\u3002"))}d.isMDXComponent=!0}}]);