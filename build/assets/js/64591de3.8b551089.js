"use strict";(self.webpackChunkriscv_package_guide=self.webpackChunkriscv_package_guide||[]).push([[731],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return o}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},A=Object.keys(e);for(r=0;r<A.length;r++)a=A[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)a=A[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,A=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),o=n,g=d["".concat(c,".").concat(o)]||d[o]||s[o]||A;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var A=a.length,l=new Array(A);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<A;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3696:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=a(7462),n=a(3366),A=(a(7294),a(3905)),l=["components"],i={},c="PR \u7684\u6307\u5f15",u={unversionedId:"guide/PR-guide",id:"guide/PR-guide",title:"PR \u7684\u6307\u5f15",description:"\u63d0 PR \u7684\u4e00\u4e9b\u5efa\u8bae\u3002",source:"@site/docs/guide/3-PR-guide.md",sourceDirName:"guide",slug:"/guide/PR-guide",permalink:"/docs/guide/PR-guide",editUrl:"https://github.com/Avimitin/RISC-V_Daily_Notes/docs/guide/3-PR-guide.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6784\u5efa\u6307\u5f15",permalink:"/docs/guide/build-guide"},next:{title:"\u5de5\u5177\u4ecb\u7ecd",permalink:"/docs/guide/tools"}},p=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",children:[],level:2},{value:"\u5982\u4f55\u521b\u5efa patch",id:"\u5982\u4f55\u521b\u5efa-patch",children:[{value:"\u8fd8\u672a stage \u4fee\u6539",id:"\u8fd8\u672a-stage-\u4fee\u6539",children:[],level:3},{value:"\u5df2\u7ecf stage \u4e86\u4fee\u6539",id:"\u5df2\u7ecf-stage-\u4e86\u4fee\u6539",children:[],level:3},{value:"\u5982\u679c\u6709\u4e8c\u8fdb\u5236\u6587\u4ef6\u88ab\u4fee\u6539",id:"\u5982\u679c\u6709\u4e8c\u8fdb\u5236\u6587\u4ef6\u88ab\u4fee\u6539",children:[],level:3},{value:"\u5982\u4f55\u7528 git \u6253\u8865\u4e01",id:"\u5982\u4f55\u7528-git-\u6253\u8865\u4e01",children:[],level:3},{value:"\u8865\u4e01\u7684\u683c\u5f0f",id:"\u8865\u4e01\u7684\u683c\u5f0f",children:[],level:3}],level:2},{value:"\u63d0\u4ea4 PR \u7684\u4e00\u4e9b\u683c\u5f0f\u6ce8\u610f\u4e8b\u9879",id:"\u63d0\u4ea4-pr-\u7684\u4e00\u4e9b\u683c\u5f0f\u6ce8\u610f\u4e8b\u9879",children:[{value:"\u6570\u7ec4\u7684\u683c\u5f0f",id:"\u6570\u7ec4\u7684\u683c\u5f0f",children:[],level:3},{value:"\u4e0d\u8981\u63d0\u4ea4 <code>arch=(any)</code>",id:"\u4e0d\u8981\u63d0\u4ea4-archany",children:[],level:3},{value:"\u5982\u679c\u4e0a\u6e38\u628a\u8fd9\u4e2a\u5305\u4fee\u597d\u4e86",id:"\u5982\u679c\u4e0a\u6e38\u628a\u8fd9\u4e2a\u5305\u4fee\u597d\u4e86",children:[],level:3}],level:2},{value:"\u5982\u4f55\u628a PR \u7684\u5185\u5bb9\u4ee5 patch \u5f62\u5f0f\u4e0b\u8f7d",id:"\u5982\u4f55\u628a-pr-\u7684\u5185\u5bb9\u4ee5-patch-\u5f62\u5f0f\u4e0b\u8f7d",children:[],level:2},{value:"\u672c\u5730\u7248\u672c\u8fc7\u8001",id:"\u672c\u5730\u7248\u672c\u8fc7\u8001",children:[],level:2},{value:"\u4fee\u6539 PKGREL",id:"\u4fee\u6539-pkgrel",children:[],level:2}],s={toc:p};function d(e){var t=e.components,i=(0,n.Z)(e,l);return(0,A.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"pr-\u7684\u6307\u5f15"},"PR \u7684\u6307\u5f15"),(0,A.kt)("p",null,"\u63d0 PR \u7684\u4e00\u4e9b\u5efa\u8bae\u3002"),(0,A.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"\u6240\u6709 PR \u4f18\u5148\u63d0\u4ea4\u4e0a\u6e38\uff0c\n\u7136\u540e\u5728 rv64 \u4e2d\u5f15\u7528\u4e0a\u6e38 patch\u3002\uff08\u63d0\u4ea4\u4e0a\u6e38\u7684patch\u4f1a\u52a0\u94b1)")),(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"PR \u4e2d\u9700\u8981\u5177\u4f53\u5199\u6e05\u695a\u4fee\u6539\u7684\u539f\u56e0\u3002\n\u4ee5\u540e\u65b9\u4fbf\u7ef4\u62a4\uff0c\u770b\u7740\u8fd9\u4e2a\u4fee\u6539\u5c31\u77e5\u9053\u539f\u56e0")),(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"\u4fee\u6539 pkgbuild \u4e2d\u7684\u5185\u5bb9\u4e5f\u9700\u8981\u5199\u6e05\u695a\u4fee\u6539\u539f\u56e0\uff0c\n\u7279\u522b\u662f\u6dfb\u52a0 make \u53c2\u6570\uff0c \u4fee\u6539 cflags \u4e4b\u7c7b\u7684\u3002\n\u9700\u8981\u5199\u4e00\u4e0b\u8fd9\u4e48\u4fee\u6539\u7684\u539f\u56e0")),(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"\u5982\u679c\u8fd9\u4e2a patch \u5e94\u8be5\u9700\u8981\u53cd\u9988\u4e0a\u6e38\u6216\u8005\u4ea4\u7ed9 Arch\uff0c\u8981\u5728\n\u6539\u52a8\u91cc\u6ce8\u660e\u7ed9\u4e0a\u6e38\u7684 PR \u7684\u94fe\u63a5\uff0c\u6216\u8005\u7ed9 Arch \u7684 BUG Report \u94fe\u63a5\u3002"))),(0,A.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa-patch"},"\u5982\u4f55\u521b\u5efa patch"),(0,A.kt)("h3",{id:"\u8fd8\u672a-stage-\u4fee\u6539"},"\u8fd8\u672a stage \u4fee\u6539"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=bash",title:"bash"},"git diff > riscv64.patch\n")),(0,A.kt)("h3",{id:"\u5df2\u7ecf-stage-\u4e86\u4fee\u6539"},"\u5df2\u7ecf stage \u4e86\u4fee\u6539"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=bash",title:"bash"},"git diff --cached > riscv64.patch\n")),(0,A.kt)("h3",{id:"\u5982\u679c\u6709\u4e8c\u8fdb\u5236\u6587\u4ef6\u88ab\u4fee\u6539"},"\u5982\u679c\u6709\u4e8c\u8fdb\u5236\u6587\u4ef6\u88ab\u4fee\u6539"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=bash",title:"bash"},"git diff --cached --binary > riscv64.patch\n")),(0,A.kt)("h3",{id:"\u5982\u4f55\u7528-git-\u6253\u8865\u4e01"},"\u5982\u4f55\u7528 git \u6253\u8865\u4e01"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=bash",title:"bash"},"git apply riscv64.patch\n")),(0,A.kt)("h3",{id:"\u8865\u4e01\u7684\u683c\u5f0f"},"\u8865\u4e01\u7684\u683c\u5f0f"),(0,A.kt)("p",null,"\u7528\u4e0a\u8ff0\u65b9\u6cd5\u6253\u51fa\u6765\u7684\u8865\u4e01\u901a\u5e38\u662f\u4ee5\u4e0b\u7684\u683c\u5f0f\uff1a"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=riscv64.patch",title:"riscv64.patch"},"diff --git a/trunk/PKGBUILD b/trunk/PKGBUILD\n--- a/trunk/PKGBUILD\n+++ b/trunk/PKGBUILD\n")),(0,A.kt)("p",null,"\u4f60\u9700\u8981\u5220\u9664\u6389\u6240\u6709\u7684 ",(0,A.kt)("inlineCode",{parentName:"p"},"a/trunk")," \u548c ",(0,A.kt)("inlineCode",{parentName:"p"},"b/trunk")," \u5b57\u7b26\uff1a"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=riscv64.patch",title:"riscv64.patch"},"diff --git PKGBUILD PKGBUILD\n--- PKGBUILD\n+++ PKGBUILD\n")),(0,A.kt)("p",null,"\u4e5f\u53ef\u4ee5\u7528\u4e0b\u9762\u8fd9\u4e2a\u811a\u672c\u6765\u76f4\u63a5\u53bb\u9664\u8fd9\u4e9b\u5b57\u7b26\uff1a"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=console",title:"console"},"git diff --no-index --no-prefix PKGBUILD.orig PKGBUILD | filterdiff --clean --strip=1 > riscv64.patch\n")),(0,A.kt)("h2",{id:"\u63d0\u4ea4-pr-\u7684\u4e00\u4e9b\u683c\u5f0f\u6ce8\u610f\u4e8b\u9879"},"\u63d0\u4ea4 PR \u7684\u4e00\u4e9b\u683c\u5f0f\u6ce8\u610f\u4e8b\u9879"),(0,A.kt)("h3",{id:"\u6570\u7ec4\u7684\u683c\u5f0f"},"\u6570\u7ec4\u7684\u683c\u5f0f"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=PKGBUILD",title:"PKGBUILD"},"source=(\"http://www.frodo.looijaard.name/system/files/software/${pkgname}/${pkgname}-${pkgver}.tar.gz\"\n        'psiconv.patch')\n\nmd5sums=('286e427b10f4d10aaeef1944210a2ea6'\n         '4fb974d3ae3058de435050d1595f269b')\n")),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"Reference:\n",(0,A.kt)("a",{parentName:"p",href:"https://github.com/felixonmars/archriscv-packages/pull/148/commits/839b90f662cc942f9c1b1f80284d93e4d48dd5a5"},"https://github.com/felixonmars/archriscv-packages/pull/148/commits/839b90f662cc942f9c1b1f80284d93e4d48dd5a5"))),(0,A.kt)("h3",{id:"\u4e0d\u8981\u63d0\u4ea4-archany"},"\u4e0d\u8981\u63d0\u4ea4 ",(0,A.kt)("inlineCode",{parentName:"h3"},"arch=(any)")),(0,A.kt)("p",null,"\u6709\u4e9b\u5305\u53ea\u9700\u8981\u628a arch \u6539\u6210 any \u5c31\u80fd\u7f16\u8bd1\u4e86\uff0c\n\u8fd9\u79cd\u5305\u4e0d\u9700\u8981 PR\uff0c\n\u5728\u7fa4\u91cc\u7528\u547d\u4ee4 ",(0,A.kt)("inlineCode",{parentName:"p"},"/mark {PACKAGE} ready")," \u5c31\u884c\u3002"),(0,A.kt)("p",null,"\u5728\u63d0\u4ea4\u8865\u4e01\u7684\u65f6\u5019\uff0c\n\u5982\u679c\u4e3a\u4e86\u5728 RISC-V \u91cc\u7f16\u8bd1\u6539\u4e86 arch \u7684\u503c\uff0c\n\u63d0 PR \u7684\u65f6\u5019\u8bb0\u5f97\u5220\u6389\u8fd9\u90e8\u5206\u7684\u4fee\u6539\u3002"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"Reference:\n",(0,A.kt)("a",{parentName:"p",href:"https://github.com/felixonmars/archriscv-packages/pull/488/commits/116365a132e9e973ab152514d59ed6688fdc3799"},"https://github.com/felixonmars/archriscv-packages/pull/488/commits/116365a132e9e973ab152514d59ed6688fdc3799"))),(0,A.kt)("h3",{id:"\u5982\u679c\u4e0a\u6e38\u628a\u8fd9\u4e2a\u5305\u4fee\u597d\u4e86"},"\u5982\u679c\u4e0a\u6e38\u628a\u8fd9\u4e2a\u5305\u4fee\u597d\u4e86"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"\u7528 cherry-pick")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=PKGBUILD",title:"PKGBUILD"}," prepare() {\n   cd $pkgname\n+  git cherry-pick -n 508c0f94e5f182e50ff61be6e04f72574dee97cb  # patch: Don't alter or try to write [GtkChild] fields\n+  git cherry-pick -n e8a0aeec350ea80349582142c0e8e3cd3f1bce38  # patch: Reference of [GtkChild] fields is handled by GtkBuilder, type must be unowned\n }\n")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4ece\u4e0a\u6e38\u4e0b\u8f7d patch")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=PKGBUILD",title:"PKGBUILD"},"+source=(https://github.com/MegaGlest/megaglest-source/releases/download/${pkgver}/megaglest-source-${pkgver}.tar.xz{,.asc}\n+        ftp-fixes.patch::https://github.com/MegaGlest/megaglest-source/commit/5a3520540276a6fd06f7c88e571b6462978e3eab.patch)\n\n+prepare() {\n+  cd megaglest-${pkgver}\n+\n+  patch -Np1 -i ../ftp-fixes.patch\n+}\n")),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"Reference:"),(0,A.kt)("ul",{parentName:"blockquote"},(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://github.com/felixonmars/archriscv-packages/pull/165"},"https://github.com/felixonmars/archriscv-packages/pull/165")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://github.com/felixonmars/archriscv-packages/pull/345"},"https://github.com/felixonmars/archriscv-packages/pull/345")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://github.com/felixonmars/archriscv-packages/pull/348"},"https://github.com/felixonmars/archriscv-packages/pull/348")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://github.com/felixonmars/archriscv-packages/pull/405"},"https://github.com/felixonmars/archriscv-packages/pull/405")))),(0,A.kt)("h2",{id:"\u5982\u4f55\u628a-pr-\u7684\u5185\u5bb9\u4ee5-patch-\u5f62\u5f0f\u4e0b\u8f7d"},"\u5982\u4f55\u628a PR \u7684\u5185\u5bb9\u4ee5 patch \u5f62\u5f0f\u4e0b\u8f7d"),(0,A.kt)("p",null,"\u627e\u5230 PR \u7684\u90a3\u6761 commit\uff0c\u5728 URL \u540e\u8fb9\u52a0 .patch/.diff \u5c31\u80fd\u62ff\u5230 raw contents\u3002\n\u6bd4\u5982\n",(0,A.kt)("a",{parentName:"p",href:"https://github.com/felixonmars/archriscv-packages/pull/470/commits/95242a8b610854ef64c8b5e304756ba6a4d4302d"},"PR #470"),",\n\u53bb\u6389 commit \u540e\u7684\u90a3\u4e00\u4e32\uff0c\u76f4\u63a5\u52a0\u4e0a .patch\u3002"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=diff",title:"diff"},"-...kages/pull/470/commits/95242a8b610854ef64c8b5e304756ba6a4d4302d\n\n+...kages/pull/470.patch\n")),(0,A.kt)("p",null,"\u73b0\u5728 GitHub \u4e5f\u5df2\u7ecf\u63d0\u4f9b\u4e86\u8d85\u94fe\u63a5\u8df3\u8f6c\uff0c\u70b9\u51fb\u5373\u53ef\u8df3\u8f6c\u3002"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"image",src:a(5972).Z})),(0,A.kt)("h2",{id:"\u672c\u5730\u7248\u672c\u8fc7\u8001"},"\u672c\u5730\u7248\u672c\u8fc7\u8001"),(0,A.kt)("p",null,"\u5047\u8bbe\u53d1\u5e03\u7684\u7248\u672c\u7279\u522b\u665a\uff0c\u5f15\u7528 patch \u4f1a\u884c\u6570\u4e0d\u5bf9\u5e94\u51b2\u7a81\u7684\u8bdd\uff0c\u4f18\u5148\u53d1 issue\n\u50ac\u4e0a\u6e38\u53d1\u65b0\u7248\u672c\u3002"),(0,A.kt)("h2",{id:"\u4fee\u6539-pkgrel"},"\u4fee\u6539 PKGREL"),(0,A.kt)("p",null,"pkgrel \u4e0d\u80fd\u8d85\u8fc7 x86 \u4e3b\u7ebf\uff0c\u5982\u679c\u9700\u8981\u91cd\u65b0\u6253\u5305\uff0c\u63a8\u8350 0.1 \u5f80\u4e0a\u52a0\u3002"))}d.isMDXComponent=!0},5972:function(e,t){t.Z="data:image/png;base64,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"}}]);