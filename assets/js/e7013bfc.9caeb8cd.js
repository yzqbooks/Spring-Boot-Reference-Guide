"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[76745],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(t),d=o,f=g["".concat(p,".").concat(d)]||g[d]||s[d]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},72161:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={},p=void 0,u={unversionedId:"III. Using Spring Boot/19.4. Using the Gradle Plugin",id:"III. Using Spring Boot/19.4. Using the Gradle Plugin",title:"19.4. Using the Gradle Plugin",description:"19.4. \u4f7f\u7528Gradle\u63d2\u4ef6\u8fd0\u884c",source:"@site/docs/III. Using Spring Boot/19.4. Using the Gradle Plugin.md",sourceDirName:"III. Using Spring Boot",slug:"/III. Using Spring Boot/19.4. Using the Gradle Plugin",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/19.4. Using the Gradle Plugin",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/III. Using Spring Boot/19.4. Using the Gradle Plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"19.3. Using the Maven Plugin",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/19.3. Using the Maven Plugin"},next:{title:"19.5. Hot Swapping",permalink:"/Spring-Boot-Reference-Guide/docs/III. Using Spring Boot/19.5. Hot Swapping"}},c={},s=[{value:"19.4. \u4f7f\u7528Gradle\u63d2\u4ef6\u8fd0\u884c",id:"194-\u4f7f\u7528gradle\u63d2\u4ef6\u8fd0\u884c",level:3}],g={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"194-\u4f7f\u7528gradle\u63d2\u4ef6\u8fd0\u884c"},"19.4. \u4f7f\u7528Gradle\u63d2\u4ef6\u8fd0\u884c"),(0,i.kt)("p",null,"Spring Boot Gradle\u63d2\u4ef6\u4e5f\u5305\u542b\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"bootRun"),"\u4efb\u52a1\uff0c\u53ef\u7528\u6765\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u65e0\u8bba\u4f60\u4f55\u65f6\u5e94\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.boot"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"java plugins"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"bootRun"),"\u4efb\u52a1\u603b\u4f1a\u88ab\u6dfb\u52a0\u8fdb\u53bb\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ gradle bootRun\n")),(0,i.kt)("p",null,"\u4f60\u53ef\u80fd\u8fd8\u4f1a\u60f3\u4f7f\u7528\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883\u53d8\u91cf",(0,i.kt)("inlineCode",{parentName:"p"},"JAVA_OPTS"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ export JAVA_OPTS=-Xmx1024m\n")))}d.isMDXComponent=!0}}]);