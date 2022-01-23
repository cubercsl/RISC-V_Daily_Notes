"use strict";(self.webpackChunkriscv_package_guide=self.webpackChunkriscv_package_guide||[]).push([[644],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=p(r),f=o,d=g["".concat(a,".").concat(f)]||g[f]||s[f]||i;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=g;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4054:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return g}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],u={},a="\u5982\u4f55\u7ed9 Arch \u62a5 BUG",p={unversionedId:"guide/bug-report",id:"guide/bug-report",title:"\u5982\u4f55\u7ed9 Arch \u62a5 BUG",description:"\u9996\u5148\u8bf7\u901a\u8bfb\u8fd9\u7bc7 wiki \u3002",source:"@site/docs/guide/5-bug-report.md",sourceDirName:"guide",slug:"/guide/bug-report",permalink:"/docs/guide/bug-report",editUrl:"https://github.com/Avimitin/RISC-V_Daily_Notes/docs/guide/5-bug-report.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5de5\u5177\u4ecb\u7ecd",permalink:"/docs/guide/tools"},next:{title:"\u5947\u5947\u602a\u602a\u7684\u9519\u8bef\u4eec",permalink:"/docs/record/collection"}},l=[],s={toc:l};function g(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5982\u4f55\u7ed9-arch-\u62a5-bug"},"\u5982\u4f55\u7ed9 Arch \u62a5 BUG"),(0,i.kt)("p",null,"\u9996\u5148\u8bf7\u901a\u8bfb\u8fd9\u7bc7 wiki ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/Bug_reporting_guidelines"},"https://wiki.archlinux.org/title/Bug_reporting_guidelines"),"\u3002"),(0,i.kt)("p",null,"\u7136\u540e\u641c\u7d22\u4f60\u8981\u62a5 BUG \u7684\u5305: ",(0,i.kt)("a",{parentName:"p",href:"https://archlinux.org/packages/"},"https://archlinux.org/packages/"),'\uff0c\u5728\u8be6\u60c5\u9875\u7684\u53f3\u8fb9\u6709\u4e00\u4e2a\nPackage Action \u7684\u5c0f\u65b9\u6846\u3002\u70b9\u51fb\u5176\u4e2d\u7b2c\u4e8c\u884c\u7b2c\u4e00\u4e2a "Bug Reports"\uff0c\u770b\u770b\u6709\u6ca1\u6709\u4eba\u5df2\u7ecf\u63d0\u4ea4\n\u4f60\u9047\u5230\u7684 BUG\u3002\u5982\u679c\u6709\u5c31\u53ef\u4ee5\u7b49\u7740\u4e86\u3002\u5982\u679c\u662f\u6025\u5305\u7684\u8bdd\u4f60\u53ef\u4ee5\u5148\u81ea\u5df1\u52a8\u624b\u4fee\u3002'),(0,i.kt)("p",null,'\u5982\u679c\u6ca1\u6709\u4eba\u63d0\u4ea4\u8fc7\u76f8\u4f3c\u7684 BUG\uff0c\u90a3\u4e48\u70b9\u51fb\u7b2c\u4e8c\u884c\u7b2c\u4e8c\u4e2a "Add New Bug"\uff0c\u65b0\u7684\u9875\u9762\u4f1a\u751f\u6210\u597d\u6a21\u677f\uff0c\n\u6309\u7167\u63d0\u793a\u586b\u5199\u5373\u53ef\u3002\u5de6\u8fb9\u7684\u90a3\u4e9b\u83dc\u5355\u9879\u4e0d\u7528\u81ea\u5df1\u4fee\u6539\u3002'),(0,i.kt)("p",null,"\u5982\u679c\u662f\u666e\u901a\u7684\u65e0\u6cd5\u6784\u5efa\uff0cSUMMARY \u90a3\u4e00\u884c\u586b FTBFS \u5373\u53ef\uff0c\u7136\u540e\u5728\u5e95\u4e0b\u63cf\u5199\u9047\u5230\u4e86\u4ec0\u4e48\u9519\u8bef\u3002\n\u62a5 BUG \u7684\u65f6\u5019\u5e26\u4e0a\u600e\u4e48\u4fee\u4f18\u5148\u4e8e\u81ea\u5df1\u5728 RISCV \u7684\u4ed3\u5e93\u4fee\u3002(\u5728 Arch \u62a5\u6709\u6548\u7684 BUG \u4e5f\u7b97\u5728\u5de5\u4f5c\u91cf\u91cc\u7684)"),(0,i.kt)("p",null,'\u5982\u679c\u662f outdated \u7684\u5305\uff0c\u4e0d\u8981\u62a5 BUG\u3002\u5728 Package Action \u90a3\u4e00\u680f\u6709 "Flag Package Out-of-Date" \u7684\u529f\u80fd\u3002'))}g.isMDXComponent=!0}}]);