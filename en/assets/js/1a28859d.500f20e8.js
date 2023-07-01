"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4147],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const o={slug:"creer-deb",title:"Create your own Debian packages",tags:["debian","infra"],description:"Creating your own Debian packages is not as complicated as you might think. We will see how to package your own scripts/programs in an easy and efficient way"},i=void 0,l={unversionedId:"Adminsys/creer-deb",id:"Adminsys/creer-deb",title:"Create your own Debian packages",description:"Creating your own Debian packages is not as complicated as you might think. We will see how to package your own scripts/programs in an easy and efficient way",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Adminsys/creer-deb.md",sourceDirName:"Adminsys",slug:"/Adminsys/creer-deb",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/creer-deb",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/creer-deb.md",tags:[{label:"debian",permalink:"/TheBidouilleur.xyz/en/docs/tags/debian"},{label:"infra",permalink:"/TheBidouilleur.xyz/en/docs/tags/infra"}],version:"current",lastUpdatedAt:1688224230,formattedLastUpdatedAt:"Jul 1, 2023",frontMatter:{slug:"creer-deb",title:"Create your own Debian packages",tags:["debian","infra"],description:"Creating your own Debian packages is not as complicated as you might think. We will see how to package your own scripts/programs in an easy and efficient way"},sidebar:"tutorialSidebar",previous:{title:"Tinc - VPN de Mesh",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/Tinc"},next:{title:"Cr\xe9er son d\xe9pot Debian",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/creer-repo-debian"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Create your own Debian package",id:"create-your-own-debian-package",level:2},{value:"Pre/Post scripts",id:"prepost-scripts",level:2},{value:"Create the archive",id:"create-the-archive",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In my project to create a self-sufficient infrastructure, I sometimes find myself installing small programs on many machines with a ",(0,r.kt)("em",{parentName:"p"},"Makefile")," or a series of commands. And even if it's pretty clean, it's not very practical when you manage a large quantity of servers. So I had the idea to package my programs to simplify the deployment on my machines."),(0,r.kt)("p",null,"So we will see how to create our own ",(0,r.kt)("inlineCode",{parentName:"p"},".deb")," packages !"),(0,r.kt)("p",null,"The requirements are simple:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Be on a Debian-based system"),(0,r.kt)("li",{parentName:"ul"},"Install the following packages:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential binutils lintian debhelper dh-make devscripts\n")),(0,r.kt)("h2",{id:"create-your-own-debian-package"},"Create your own Debian package"),(0,r.kt)("p",null,"I will take a simple example ",(0,r.kt)("a",{parentName:"p",href:"https://kompose.io/"},(0,r.kt)("em",{parentName:"a"},"Kompose"))),(0,r.kt)("p",null,"It's a small script in ",(0,r.kt)("strong",{parentName:"p"},"Go")," allowing to convert ",(0,r.kt)("em",{parentName:"p"},"docker-composes")," into ",(0,r.kt)("em",{parentName:"p"},"YAML Kubernetes")," files. To install it, we download the compiled executable and we put it in a folder of our ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,r.kt)("p",null,"I would then like to create a ",(0,r.kt)("inlineCode",{parentName:"p"},".deb")," that would contain the ",(0,r.kt)("em",{parentName:"p"},"Kompose")," binary and put it in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/bin"),".\nThe official Debian documentation ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("a",{parentName:"em",href:"https://wiki.debian.org/HowToPackageForDebian"},"available here"),")")," is very clear: we have to create a directory which will be considered as the root of our system."),(0,r.kt)("p",null,"Let me explain:"),(0,r.kt)("p",null,"If I want to drop the ",(0,r.kt)("em",{parentName:"p"},"kompose")," file into my ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/bin")," folder. I will then create the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"./kompose_1.28.0-1_amd/usr/bin/"),"."),(0,r.kt)("admonition",{title:"Naming convention",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The documentation offers us a very simple naming convention, You should name your files as follows",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"name_version-revision_architecture.deb")),(0,r.kt)("p",{parentName:"admonition"},"In my case, I name my folder ",(0,r.kt)("inlineCode",{parentName:"p"},"kompose_1.28.0-1_amd64")," ",(0,r.kt)("em",{parentName:"p"},"(the .deb extension will be added at the package creation)"))),(0,r.kt)("p",null,"Now that we know how to drop files into the tree, we need to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBIAN/control")," file."),(0,r.kt)("p",null,"This file gathers the metadata of the ",(0,r.kt)("em",{parentName:"p"},"(Name, maintainer, architecture)")," file, it allows dpkg to name what we just installed and its version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-control"},"Package: kompose\nVersion: 1.28.0\nMaintainer: Quentin JOLY <github@thoughtless.eu>\nArchitecture: amd64\nDescription: Kompose is a conversion tool for Docker Compose to container orchestrators such as Kubernetes (or OpenShift). \n")),(0,r.kt)("p",null,"It is also possible to add ",(0,r.kt)("em",{parentName:"p"},"conflicts")," with other packages, or conversely dependencies before/after installation."),(0,r.kt)("h2",{id:"prepost-scripts"},"Pre/Post scripts"),(0,r.kt)("p",null,"If dropping files is not enough to install your package, it is still possible to run ",(0,r.kt)("em",{parentName:"p"},"{post,pre}{inst,rm}")," scripts. These should be placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBIAN/")," folder ",(0,r.kt)("em",{parentName:"p"},"(the same as for the ",(0,r.kt)("inlineCode",{parentName:"em"},"control")," file)"),"."),(0,r.kt)("p",null,"Here are the 4 possibilities of script launching:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pre installation (",(0,r.kt)("inlineCode",{parentName:"li"},"preinst"),")"),(0,r.kt)("li",{parentName:"ul"},"post installation (",(0,r.kt)("inlineCode",{parentName:"li"},"postinstall"),")"),(0,r.kt)("li",{parentName:"ul"},"pre delete (",(0,r.kt)("inlineCode",{parentName:"li"},"prerm"),")"),(0,r.kt)("li",{parentName:"ul"},"post removal (",(0,r.kt)("inlineCode",{parentName:"li"},"postrm"),")")),(0,r.kt)("p",null,"The use of these scripts allows you to compile the necessary, drop the configuration files, or delete the logs after the deletion."),(0,r.kt)("h2",{id:"create-the-archive"},"Create the archive"),(0,r.kt)("p",null,"Here is our tree with the Kompose executable, my metadata file and my post-installation script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\u2514\u2500\u2500 kompose_1.28.0-1_amd64\n    \u251c\u2500\u2500 DEBIAN\n    \u2502\xa0\xa0 \u251c\u2500\u2500 control\n    \u2502\xa0\xa0 \u2514\u2500\u2500 postinst\n    \u2514\u2500\u2500 usr\n        \u2514\u2500\u2500 bin\n            \u2514\u2500\u2500 kompose\n")),(0,r.kt)("p",null,"Now, the command for creating our ",(0,r.kt)("em",{parentName:"p"},"deb")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"dpkg-deb --build kompose_1.28.0-1_amd64"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c dpkg-deb --build kompose_1.28.0-1_amd64\ndpkg-deb: building package 'kompose' in 'kompose_1.28.0-1_amd64.deb'.\n")),(0,r.kt)("p",null,"Now we just need to send our ",(0,r.kt)("inlineCode",{parentName:"p"},"kompose_1.28.0-1_amd64.deb")," file to a Debian machine and install it with ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo dpkg -i kompose_1.28.0-1_amd64.deb"),"."),(0,r.kt)("admonition",{title:"ZST encryption method",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you get the following error :"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# dpkg -i kompose_1.28.0-1_amd64.deb\ndpkg-deb: error: archive 'kompose_1.28.0-1_amd64.deb' uses unknown compression for member 'control.tar.zst', giving up\ndpkg: error processing archive kompose_1.28.0-1_amd64.deb (--install):\n dpkg-deb --control subprocess returned error exit status 2\nErrors were encountered while processing:\n kompose_1.28.0-1_amd64.deb\n")),(0,r.kt)("p",{parentName:"admonition"},"This is because Debian has changed the package encryption from ",(0,r.kt)("inlineCode",{parentName:"p"},"zstd")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"xz"),". It is possible to solve this problem by extracting the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},".deb")," file, and recreating it using the following procedure:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"file=kompose_1.28.0-1_amd64.deb\nar x $file\nzstd -d < control.tar.zst | xz > control.tar.xz\nzstd -d < data.tar.zst | xz > data.tar.xz\nar -m -c -a sdsd repacked_${file} debian-binary control.tar.xz data.tar.xz\nrm debian-binary control.tar.xz data.tar.xz control.tar.zst data.tar.zst\n"))),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Related to this page",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Adminsys/creer-repo-debian"},"Hosting your Debian repository")))))}c.isMDXComponent=!0}}]);