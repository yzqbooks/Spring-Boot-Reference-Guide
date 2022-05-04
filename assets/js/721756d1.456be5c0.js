"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[21040],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,g=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82582:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],u={},l=void 0,p={unversionedId:"IX. \u2018How-to\u2019 guides/86.1 Generate Build Information",id:"IX. \u2018How-to\u2019 guides/86.1 Generate Build Information",title:"86.1 Generate Build Information",description:"86.1 \u751f\u6210\u6784\u5efa\u4fe1\u606f",source:"@site/docs/IX. \u2018How-to\u2019 guides/86.1 Generate Build Information.md",sourceDirName:"IX. \u2018How-to\u2019 guides",slug:"/IX. \u2018How-to\u2019 guides/86.1 Generate Build Information",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/86.1 Generate Build Information",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IX. \u2018How-to\u2019 guides/86.1 Generate Build Information.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"85.4 Reload Java Classes without Restarting the Container",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/85.4 Reload Java Classes without Restarting the Container"},next:{title:"86.2 Generate Git Information",permalink:"/Spring-Boot-Reference-Guide/docs/IX. \u2018How-to\u2019 guides/86.2 Generate Git Information"}},c={},s=[{value:"86.1 \u751f\u6210\u6784\u5efa\u4fe1\u606f",id:"861-\u751f\u6210\u6784\u5efa\u4fe1\u606f",level:3}],d={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"861-\u751f\u6210\u6784\u5efa\u4fe1\u606f"},"86.1 \u751f\u6210\u6784\u5efa\u4fe1\u606f"),(0,i.kt)("p",null,"Maven\u63d2\u4ef6\u548cGradle\u63d2\u4ef6\u90fd\u652f\u6301\u4ea7\u751f\u5305\u542b\u9879\u76ee\u7248\u672c\u3001\u5750\u6807\u3001\u540d\u79f0\u7684\u6784\u5efa\u4fe1\u606f\u3002\u8be5\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6dfb\u52a0\u5176\u4ed6\u5c5e\u6027\u3002\u5f53\u8fd9\u4e9b\u6587\u4ef6\u51fa\u73b0\u65f6\uff0cSpring Boot\u81ea\u52a8\u914d\u7f6e\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"BuildProperties")," bean\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u8ba9Maven\u751f\u6210\u6784\u5efa\u4fe1\u606f\uff0c\u4f60\u9700\u8981\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"build-info")," goal\u6dfb\u52a0\u4e00\u4e2aexecution\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n            <version>2.0.0.RELEASE</version>\n            <executions>\n                <execution>\n                    <goals>\n                        <goal>build-info</goal>\n                    </goals>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u66f4\u591a\u8be6\u60c5\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/maven-plugin"},"Spring Boot Maven\u63d2\u4ef6\u6587\u6863"),"\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528Gradle\u5b9e\u73b0\u540c\u6837\u6548\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"springBoot {\n    buildInfo()\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8")," \u66f4\u591a\u8be6\u60c5\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.0.0.RELEASE/gradle-plugin/reference/html/#integrating-with-actuator-build-info"},"Spring Boot Gradle\u63d2\u4ef6\u6587\u6863"),"\u3002"))}f.isMDXComponent=!0}}]);