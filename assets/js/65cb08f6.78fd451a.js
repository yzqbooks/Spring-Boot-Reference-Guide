"use strict";(self.webpackChunkspring=self.webpackChunkspring||[]).push([[93473],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22128:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={},l=void 0,c={unversionedId:"VI. Deploying Spring Boot Applications/60.2 Heroku",id:"VI. Deploying Spring Boot Applications/60.2 Heroku",title:"60.2 Heroku",description:"60.2 Heroku",source:"@site/docs/VI. Deploying Spring Boot Applications/60.2 Heroku.md",sourceDirName:"VI. Deploying Spring Boot Applications",slug:"/VI. Deploying Spring Boot Applications/60.2 Heroku",permalink:"/Spring-Boot-Reference-Guide/docs/VI. Deploying Spring Boot Applications/60.2 Heroku",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/VI. Deploying Spring Boot Applications/60.2 Heroku.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"60.1.1 Binding to Services",permalink:"/Spring-Boot-Reference-Guide/docs/VI. Deploying Spring Boot Applications/60.1.1 Binding to Services"},next:{title:"60.3 Openshift",permalink:"/Spring-Boot-Reference-Guide/docs/VI. Deploying Spring Boot Applications/60.3 Openshift"}},s={},u=[{value:"60.2 Heroku",id:"602-heroku",level:3}],d={toc:u};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"602-heroku"},"60.2 Heroku"),(0,i.kt)("p",null,"Heroku\u662f\u53e6\u5916\u4e00\u4e2a\u6d41\u884c\u7684Paas\u5e73\u53f0\uff0c\u4f60\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Procfile"),"\u6765\u5b9a\u4e49Heroku\u7684\u6784\u5efa\u8fc7\u7a0b\uff0c\u5b83\u63d0\u4f9b\u90e8\u7f72\u5e94\u7528\u6240\u9700\u7684\u6307\u4ee4\u3002Heroku\u4e3aJava\u5e94\u7528\u5206\u914d\u4e00\u4e2a\u7aef\u53e3\uff0c\u786e\u4fdd\u80fd\u591f\u8def\u7531\u5230\u5916\u90e8URI\u3002"),(0,i.kt)("p",null,"\u4f60\u5fc5\u987b\u914d\u7f6e\u4f60\u7684\u5e94\u7528\u76d1\u542c\u6b63\u786e\u7684\u7aef\u53e3\uff0c\u4e0b\u9762\u662f\u7528\u4e8e\u6211\u4eec\u7684starter REST\u5e94\u7528\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Procfile"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"web: java -Dserver.port=$PORT -jar target/demo-0.0.1-SNAPSHOT.jar\n")),(0,i.kt)("p",null,"Spring Boot\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"-D"),"\u53c2\u6570\u4f5c\u4e3a\u5c5e\u6027\uff0c\u901a\u8fc7Spring ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment"),"\u5b9e\u4f8b\u8bbf\u95ee\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"server.port"),"\u914d\u7f6e\u5c5e\u6027\u9002\u5408\u4e8e\u5185\u5d4c\u7684Tomcat\uff0cJetty\u6216Undertow\u5b9e\u4f8b\u542f\u7528\u65f6\u4f7f\u7528\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"$PORT"),"\u73af\u5883\u53d8\u91cf\u88ab\u5206\u914d\u7ed9Heroku Paas\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u8fd9\u5c31\u662f\u4f60\u9700\u8981\u505a\u7684\u6240\u6709\u5185\u5bb9\uff0c\u5bf9\u4e8eHeroku\u90e8\u7f72\u6765\u8bf4\uff0c\u7ecf\u5e38\u505a\u7684\u5de5\u4f5c\u5c31\u662f\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"git push"),"\u5c06\u4ee3\u7801\u63a8\u9001\u5230\u751f\u4ea7\u73af\u5883\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git push heroku master\n\nInitializing repository, done.\nCounting objects: 95, done.\nDelta compression using up to 8 threads.\nCompressing objects: 100% (78/78), done.\nWriting objects: 100% (95/95), 8.66 MiB | 606.00 KiB/s, done.\nTotal 95 (delta 31), reused 0 (delta 0)\n\n-----\x3e Java app detected\n-----\x3e Installing OpenJDK 1.8... done\n-----\x3e Installing Maven 3.3.1... done\n-----\x3e Installing settings.xml... done\n-----\x3e Executing: mvn -B -DskipTests=true clean install\n\n       [INFO] Scanning for projects...\n       Downloading: https://repo.spring.io/...\n       Downloaded: https://repo.spring.io/... (818 B at 1.8 KB/sec)\n        ....\n       Downloaded: http://s3pository.heroku.com/jvm/... (152 KB at 595.3 KB/sec)\n       [INFO] Installing /tmp/build_0c35a5d2-a067-4abc-a232-14b1fb7a8229/target/...\n       [INFO] Installing /tmp/build_0c35a5d2-a067-4abc-a232-14b1fb7a8229/pom.xml ...\n       [INFO] ------------------------------------------------------------------------\n       [INFO] BUILD SUCCESS\n       [INFO] ------------------------------------------------------------------------\n       [INFO] Total time: 59.358s\n       [INFO] Finished at: Fri Mar 07 07:28:25 UTC 2014\n       [INFO] Final Memory: 20M/493M\n       [INFO] ------------------------------------------------------------------------\n\n-----\x3e Discovering process types\n       Procfile declares types -> web\n\n-----\x3e Compressing... done, 70.4MB\n-----\x3e Launching... done, v6\n       http://agile-sierra-1405.herokuapp.com/ deployed to Heroku\n\nTo git@heroku.com:agile-sierra-1405.git\n * [new branch]      master -> master\n")),(0,i.kt)("p",null,"\u73b0\u5728\u4f60\u7684\u5e94\u7528\u5df2\u7ecf\u542f\u52a8\u5e76\u8fd0\u884c\u5728Heroku\u3002"))}g.isMDXComponent=!0}}]);