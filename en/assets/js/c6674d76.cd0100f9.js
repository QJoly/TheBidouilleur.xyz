"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4383],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(t),u=a,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return t?n.createElement(k,i(i({ref:r},m),{},{components:t})):n.createElement(k,i({ref:r},m))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8433:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={slug:"creer-deb",title:"Cr\xe9er ses propres packages Debian"},i=void 0,s={unversionedId:"AdminSys/creer-deb",id:"AdminSys/creer-deb",title:"Cr\xe9er ses propres packages Debian",description:"Dans mon projet de cr\xe9er une infrastructure auto-suffisante, je me retrouve parfois \xe0 installer des petits programmes sur de nombreuses machines via les Makefile ou une s\xe9rie de commandes. Puis j\u2019ai eu l\u2019id\xe9e de cr\xe9er mes propres packages Debian. (Notamment dans le but de cr\xe9er mon propre d\xe9p\xf4t de package)",source:"@site/docs/AdminSys/creer-deb.md",sourceDirName:"AdminSys",slug:"/AdminSys/creer-deb",permalink:"/TheBidouilleur.xyz/en/docs/AdminSys/creer-deb",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/AdminSys/creer-deb.md",tags:[],version:"current",frontMatter:{slug:"creer-deb",title:"Cr\xe9er ses propres packages Debian"},sidebar:"tutorialSidebar",previous:{title:"Tinc - VPN de Mesh",permalink:"/TheBidouilleur.xyz/en/docs/AdminSys/Tinc"},next:{title:"Boot PXE simplifi\xe9 avec netboot",permalink:"/TheBidouilleur.xyz/en/docs/AdminSys/netbootxyz"}},p={},l=[{value:"Les Pr\xe9-requis sont simples :",id:"les-pr\xe9-requis-sont-simples-",level:2},{value:"Cr\xe9er son propre package",id:"cr\xe9er-son-propre-package",level:2},{value:"Scripts pre/post",id:"scripts-prepost",level:2},{value:"Cr\xe9er l\u2019archive",id:"cr\xe9er-larchive",level:2}],m={toc:l};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dans mon projet de cr\xe9er une infrastructure auto-suffisante, je me retrouve parfois \xe0 installer des petits programmes sur de nombreuses machines via les ",(0,a.kt)("em",{parentName:"p"},"Makefile")," ou une s\xe9rie de commandes. Puis j\u2019ai eu l\u2019id\xe9e de cr\xe9er mes propres packages Debian. ",(0,a.kt)("em",{parentName:"p"},"(Notamment dans le but de cr\xe9er mon propre d\xe9p\xf4t de package)")),(0,a.kt)("p",null,"Nous allons donc voir comment cr\xe9er nos propres packages ",(0,a.kt)("inlineCode",{parentName:"p"},".deb")," ! "),(0,a.kt)("h2",{id:"les-pr\xe9-requis-sont-simples-"},"Les Pr\xe9-requis sont simples :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xcatre sur un syst\xe8me bas\xe9 sur Debian"),(0,a.kt)("li",{parentName:"ul"},"Installer les paquets suivants\xa0:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential binutils lintian debhelper dh-make devscripts\n")),(0,a.kt)("h2",{id:"cr\xe9er-son-propre-package"},"Cr\xe9er son propre package"),(0,a.kt)("p",null,"Je vais prendre un exemple simple : ",(0,a.kt)("a",{parentName:"p",href:"https://kompose.io/"},(0,a.kt)("em",{parentName:"a"},"Kompose"))),(0,a.kt)("p",null,"C\u2019est un petit script ",(0,a.kt)("strong",{parentName:"p"},"Go")," permettant de convertir les ",(0,a.kt)("em",{parentName:"p"},"docker-composes")," en fichiers *",(0,a.kt)("em",{parentName:"p"},"YAML")," Kubernetes*. Pour l\u2019installer, on t\xe9l\xe9charge l\u2019ex\xe9cutable compil\xe9 et on le place dans un dossier de notre ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,a.kt)("p",null,"J\u2019aimerais donc cr\xe9er un ",(0,a.kt)("inlineCode",{parentName:"p"},".deb")," qui contiendrait le binaire de ",(0,a.kt)("em",{parentName:"p"},"Kompose")," qui le d\xe9poserait dans ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin"),".\nLa documentation officielle de Debian ",(0,a.kt)("em",{parentName:"p"},"(",(0,a.kt)("a",{parentName:"em",href:"https://wiki.debian.org/HowToPackageForDebian"},"disponible ici"),")")," est tr\xe8s claire : il faut cr\xe9er un r\xe9pertoire qui sera consid\xe9r\xe9 comme la racine de notre syst\xe8me."),(0,a.kt)("p",null,"Je m\u2019explique\xa0: ",(0,a.kt)("br",null),"\nSi je souhaite d\xe9poser le fichier ",(0,a.kt)("em",{parentName:"p"},"kompose")," dans mon dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin"),". Je vais alors cr\xe9er le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"./kompose_1.28.0-1_amd/usr/bin/"),"."),(0,a.kt)("admonition",{title:"Conventions de nommage",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"La documentation nous propose une nomenclature tr\xe8s simple. Il faut nommer vos fichiers comme ci-dessous"),(0,a.kt)("br",null),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"name_version-revision_architecture.deb")),(0,a.kt)("p",{parentName:"admonition"},"Dans mon cas, je nomme mon dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"kompose_1.28.0-1_amd64")," ",(0,a.kt)("em",{parentName:"p"},"(l\u2019extension .deb sera rajout\xe9 \xe0 la cr\xe9ation du package)"))),(0,a.kt)("p",null,"Maintenant que nous savons comment d\xe9poser des fichiers dans l\u2019arborescence, nous devons cr\xe9er le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBIAN/control"),". "),(0,a.kt)("p",null,"Ce fichier regroupe les m\xe9tadonn\xe9es du fichier ",(0,a.kt)("em",{parentName:"p"},"(Nom, mainteneur, architecture)"),", il permet \xe0 dpkg de nommer ce qu\u2019on vient d\u2019installer ainsi que sa version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-control"},"Package: kompose\nVersion: 1.28.0\nMaintainer: Quentin JOLY <github@thoughtless.eu>\nArchitecture: amd64\nDescription: Kompose is a conversion tool for Docker Compose to container orchestrators such as Kubernetes (or OpenShift). \n")),(0,a.kt)("p",null,"Il est \xe9galement possible de rajouter les ",(0,a.kt)("em",{parentName:"p"},"conflits")," avec d\u2019autres paquets, ou \xe0 l\u2019inverse les d\xe9pendances avant/apr\xe8s l\u2019installation."),(0,a.kt)("h2",{id:"scripts-prepost"},"Scripts pre/post"),(0,a.kt)("p",null,"Si d\xe9poser des fichiers n\u2019est pas suffisant pour installer votre paquet, il est toujours possible d\u2019ex\xe9cuter des scripts ",(0,a.kt)("em",{parentName:"p"},"{post,pre}{inst,rm}"),". Ceux-ci doivent se placer dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBIAN/")," ",(0,a.kt)("em",{parentName:"p"},"(le m\xeame que pour le fichier ",(0,a.kt)("inlineCode",{parentName:"em"},"control"),")")),(0,a.kt)("p",null,"Voici les 4 possibilit\xe9s de lancement de script\xa0: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pre installation (",(0,a.kt)("inlineCode",{parentName:"li"},"preinst"),")"),(0,a.kt)("li",{parentName:"ul"},"post installation (",(0,a.kt)("inlineCode",{parentName:"li"},"postinstall"),")"),(0,a.kt)("li",{parentName:"ul"},"pre suppression (",(0,a.kt)("inlineCode",{parentName:"li"},"prerm"),")"),(0,a.kt)("li",{parentName:"ul"},"post suppression (",(0,a.kt)("inlineCode",{parentName:"li"},"postrm"),")")),(0,a.kt)("p",null,"L\u2019usage de ces scripts permet de compiler le n\xe9c\xe9ssaire, d\xe9poser les fichiers de configurations, ou supprimer les logs apr\xe8s la suppression. "),(0,a.kt)("h2",{id:"cr\xe9er-larchive"},"Cr\xe9er l\u2019archive"),(0,a.kt)("p",null,"Voil\xe0 notre arborescence avec l\u2019ex\xe9cutable de Kompose, mon fichier de m\xe9tadonn\xe9e et mon script de post-installation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 kompose_1.28.0-1_amd64\n    \u251c\u2500\u2500 DEBIAN\n    \u2502\xa0\xa0 \u251c\u2500\u2500 control\n    \u2502\xa0\xa0 \u2514\u2500\u2500 postinst\n    \u2514\u2500\u2500 usr\n        \u2514\u2500\u2500 bin\n            \u2514\u2500\u2500 kompose\n")),(0,a.kt)("p",null,"Maintenant, la commande pour cr\xe9er notre ",(0,a.kt)("em",{parentName:"p"},"deb")," est ",(0,a.kt)("inlineCode",{parentName:"p"},"dpkg-deb --build kompose_1.28.0-1_amd64"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c dpkg-deb --build kompose_1.28.0-1_amd64\ndpkg-deb: building package 'kompose' in 'kompose_1.28.0-1_amd64.deb'.\n")),(0,a.kt)("p",null,"Il suffit \xe0 pr\xe9sent d\u2019envoyer notre fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"kompose_1.28.0-1_amd64.deb")," sur une machine Debian et de l\u2019installer avec ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo dpkg -i kompose_1.28.0-1_amd64.deb"),"."),(0,a.kt)("admonition",{title:"M\xe9thode chiffrement ZST",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Si vous tombez sur l\u2019erreur suivante : "),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# dpkg -i kompose_1.28.0-1_amd64.deb\ndpkg-deb: error: archive 'kompose_1.28.0-1_amd64.deb' uses unknown compression for member 'control.tar.zst', giving up\ndpkg: error processing archive kompose_1.28.0-1_amd64.deb (--install):\n dpkg-deb --control subprocess returned error exit status 2\nErrors were encountered while processing:\n kompose_1.28.0-1_amd64.deb\n")),(0,a.kt)("p",{parentName:"admonition"},"C\u2019est parce que Debian a chang\xe9 le chiffrement du package en passant du ",(0,a.kt)("inlineCode",{parentName:"p"},"zstd")," au ",(0,a.kt)("inlineCode",{parentName:"p"},"xz"),". Il est possible de "),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fichier=kompose_1.28.0-1_amd64.deb\nar x $fichier\nzstd -d < control.tar.zst | xz > control.tar.xz\nzstd -d < data.tar.zst | xz > data.tar.xz\nar -m -c -a sdsd repacked_${fichier} debian-binary control.tar.xz data.tar.xz\nrm debian-binary control.tar.xz data.tar.xz control.tar.zst data.tar.zst\n"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Cette page est maintenant termin\xe9e, je n\u2019h\xe9siterais pas \xe0 la compl\xe9ter si j\u2019approfondis le sujet."))}d.isMDXComponent=!0}}]);