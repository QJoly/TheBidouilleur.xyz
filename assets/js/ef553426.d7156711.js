"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5611],{4137:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>k});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?n.createElement(k,s(s({ref:r},c),{},{components:t})):n.createElement(k,s({ref:r},c))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9049:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),a=(t(7294),t(4137));const i={slug:"creer-deb",title:"Cr\xe9er ses propres packages Debian",tags:["debian","infra"],description:"Cr\xe9er ses propres packages Debian n'est pas aussi compliqu\xe9 qu'on peut le croire. Nous allons voir comment packager ses propres scripts/programmes de mani\xe8re facile et efficace"},s=void 0,o={unversionedId:"Adminsys/creer-deb",id:"Adminsys/creer-deb",title:"Cr\xe9er ses propres packages Debian",description:"Cr\xe9er ses propres packages Debian n'est pas aussi compliqu\xe9 qu'on peut le croire. Nous allons voir comment packager ses propres scripts/programmes de mani\xe8re facile et efficace",source:"@site/docs/Adminsys/creer-deb.md",sourceDirName:"Adminsys",slug:"/Adminsys/creer-deb",permalink:"/TheBidouilleur.xyz/docs/Adminsys/creer-deb",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/creer-deb.md",tags:[{label:"debian",permalink:"/TheBidouilleur.xyz/docs/tags/debian"},{label:"infra",permalink:"/TheBidouilleur.xyz/docs/tags/infra"}],version:"current",lastUpdatedAt:1687010550,formattedLastUpdatedAt:"17 juin 2023",frontMatter:{slug:"creer-deb",title:"Cr\xe9er ses propres packages Debian",tags:["debian","infra"],description:"Cr\xe9er ses propres packages Debian n'est pas aussi compliqu\xe9 qu'on peut le croire. Nous allons voir comment packager ses propres scripts/programmes de mani\xe8re facile et efficace"},sidebar:"tutorialSidebar",previous:{title:"Tinc - VPN de Mesh",permalink:"/TheBidouilleur.xyz/docs/Adminsys/Tinc"},next:{title:"Cr\xe9er son d\xe9pot Debian",permalink:"/TheBidouilleur.xyz/docs/Adminsys/creer-repo-debian"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Les Pr\xe9-requis sont simples",id:"les-pr\xe9-requis-sont-simples",level:2},{value:"Cr\xe9er son propre package",id:"cr\xe9er-son-propre-package",level:2},{value:"Scripts pre/post",id:"scripts-prepost",level:2},{value:"Cr\xe9er l&#39;archive",id:"cr\xe9er-larchive",level:2}],c={toc:l},m="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Dans mon projet de cr\xe9er une infrastructure auto-suffisante, je me retrouve parfois \xe0 installer des petits programmes sur de nombreuses machines via les ",(0,a.kt)("em",{parentName:"p"},"Makefile")," ou une s\xe9rie de commandes. Et m\xeame si c'est plutot propre, ce n'est pas tr\xe8s pratique lorsque l'on g\xe8re une grande quantit\xe9 de serveur. L'id\xe9e est donc de packager un programme pour simplifier son installation."),(0,a.kt)("p",null,"Nous allons donc voir comment cr\xe9er nos propres packages ",(0,a.kt)("inlineCode",{parentName:"p"},".deb")," !"),(0,a.kt)("h2",{id:"les-pr\xe9-requis-sont-simples"},"Les Pr\xe9-requis sont simples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xcatre sur un syst\xe8me bas\xe9 sur Debian"),(0,a.kt)("li",{parentName:"ul"},"Installer les paquets suivants\xa0:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential binutils lintian debhelper dh-make devscripts\n")),(0,a.kt)("h2",{id:"cr\xe9er-son-propre-package"},"Cr\xe9er son propre package"),(0,a.kt)("p",null,"Je vais prendre un exemple simple : ",(0,a.kt)("a",{parentName:"p",href:"https://kompose.io/"},(0,a.kt)("em",{parentName:"a"},"Kompose"))),(0,a.kt)("p",null,"C'est un petit script ",(0,a.kt)("strong",{parentName:"p"},"Go")," permettant de convertir les ",(0,a.kt)("em",{parentName:"p"},"docker-composes")," en fichiers ",(0,a.kt)("em",{parentName:"p"},"YAML Kubernetes"),". Pour l'installer, on t\xe9l\xe9charge l'ex\xe9cutable compil\xe9 et on le place dans un dossier de notre ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,a.kt)("p",null,"J'aimerais donc cr\xe9er un ",(0,a.kt)("inlineCode",{parentName:"p"},".deb")," qui contiendrait le binaire de ",(0,a.kt)("em",{parentName:"p"},"Kompose")," qui le d\xe9poserait dans ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin"),".\nLa documentation officielle de Debian ",(0,a.kt)("em",{parentName:"p"},"(",(0,a.kt)("a",{parentName:"em",href:"https://wiki.debian.org/HowToPackageForDebian"},"disponible ici"),")")," est tr\xe8s claire : il faut cr\xe9er un r\xe9pertoire qui sera consid\xe9r\xe9 comme la racine de notre syst\xe8me."),(0,a.kt)("p",null,"Je m'explique\xa0: ",(0,a.kt)("br",null),"\nSi je souhaite d\xe9poser le fichier ",(0,a.kt)("em",{parentName:"p"},"kompose")," dans mon dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin"),". Je vais alors cr\xe9er le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"./kompose_1.28.0-1_amd/usr/bin/"),"."),(0,a.kt)("admonition",{title:"Conventions de nommage",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"La documentation nous propose une nomenclature tr\xe8s simple. Il faut nommer vos fichiers comme ci-dessous"),(0,a.kt)("br",null),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"name_version-revision_architecture.deb")),(0,a.kt)("p",{parentName:"admonition"},"Dans mon cas, je nomme mon dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"kompose_1.28.0-1_amd64")," ",(0,a.kt)("em",{parentName:"p"},"(l'extension .deb sera rajout\xe9 \xe0 la cr\xe9ation du package)"))),(0,a.kt)("p",null,"Maintenant que nous savons comment d\xe9poser des fichiers dans l'arborescence, nous devons cr\xe9er le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBIAN/control"),"."),(0,a.kt)("p",null,"Ce fichier regroupe les m\xe9tadonn\xe9es du fichier ",(0,a.kt)("em",{parentName:"p"},"(Nom, mainteneur, architecture)"),", il permet \xe0 dpkg de nommer ce qu'on vient d'installer ainsi que sa version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-control"},"Package: kompose\nVersion: 1.28.0\nMaintainer: Quentin JOLY <github@thoughtless.eu>\nArchitecture: amd64\nDescription: Kompose is a conversion tool for Docker Compose to container orchestrators such as Kubernetes (or OpenShift). \n")),(0,a.kt)("p",null,"Il est \xe9galement possible de rajouter les ",(0,a.kt)("em",{parentName:"p"},"conflits")," avec d'autres paquets, ou \xe0 l'inverse les d\xe9pendances avant/apr\xe8s l'installation."),(0,a.kt)("h2",{id:"scripts-prepost"},"Scripts pre/post"),(0,a.kt)("p",null,"Si d\xe9poser des fichiers n'est pas suffisant pour installer votre paquet, il est toujours possible d'ex\xe9cuter des scripts ",(0,a.kt)("em",{parentName:"p"},"{post,pre}{inst,rm}"),". Ceux-ci doivent se placer dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBIAN/")," ",(0,a.kt)("em",{parentName:"p"},"(le m\xeame que pour le fichier ",(0,a.kt)("inlineCode",{parentName:"em"},"control"),")")),(0,a.kt)("p",null,"Voici les 4 possibilit\xe9s de lancement de script\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pre installation (",(0,a.kt)("inlineCode",{parentName:"li"},"preinst"),")"),(0,a.kt)("li",{parentName:"ul"},"post installation (",(0,a.kt)("inlineCode",{parentName:"li"},"postinstall"),")"),(0,a.kt)("li",{parentName:"ul"},"pre suppression (",(0,a.kt)("inlineCode",{parentName:"li"},"prerm"),")"),(0,a.kt)("li",{parentName:"ul"},"post suppression (",(0,a.kt)("inlineCode",{parentName:"li"},"postrm"),")")),(0,a.kt)("p",null,"L'usage de ces scripts permet de compiler le n\xe9c\xe9ssaire, d\xe9poser les fichiers de configurations, ou supprimer les logs apr\xe8s la suppression."),(0,a.kt)("h2",{id:"cr\xe9er-larchive"},"Cr\xe9er l'archive"),(0,a.kt)("p",null,"Voil\xe0 notre arborescence avec l'ex\xe9cutable de Kompose, mon fichier de m\xe9tadonn\xe9e et mon script de post-installation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u2500 kompose_1.28.0-1_amd64\n    \u251c\u2500\u2500 DEBIAN\n    \u2502\xa0\xa0 \u251c\u2500\u2500 control\n    \u2502\xa0\xa0 \u2514\u2500\u2500 postinst\n    \u2514\u2500\u2500 usr\n        \u2514\u2500\u2500 bin\n            \u2514\u2500\u2500 kompose\n")),(0,a.kt)("p",null,"Maintenant, la commande pour cr\xe9er notre ",(0,a.kt)("em",{parentName:"p"},"deb")," est ",(0,a.kt)("inlineCode",{parentName:"p"},"dpkg-deb --build kompose_1.28.0-1_amd64"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c dpkg-deb --build kompose_1.28.0-1_amd64\ndpkg-deb: building package 'kompose' in 'kompose_1.28.0-1_amd64.deb'.\n")),(0,a.kt)("p",null,"Il suffit \xe0 pr\xe9sent d'envoyer notre fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"kompose_1.28.0-1_amd64.deb")," sur une machine Debian et de l'installer avec ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo dpkg -i kompose_1.28.0-1_amd64.deb"),"."),(0,a.kt)("admonition",{title:"M\xe9thode chiffrement ZST",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Si vous tombez sur l'erreur suivante :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# dpkg -i kompose_1.28.0-1_amd64.deb\ndpkg-deb: error: archive 'kompose_1.28.0-1_amd64.deb' uses unknown compression for member 'control.tar.zst', giving up\ndpkg: error processing archive kompose_1.28.0-1_amd64.deb (--install):\n dpkg-deb --control subprocess returned error exit status 2\nErrors were encountered while processing:\n kompose_1.28.0-1_amd64.deb\n")),(0,a.kt)("p",{parentName:"admonition"},"C'est parce que Debian a chang\xe9 le chiffrement du package en passant du ",(0,a.kt)("inlineCode",{parentName:"p"},"zstd")," au ",(0,a.kt)("inlineCode",{parentName:"p"},"xz"),". Il est possible de r\xe9soudre ce soucis en extrayant le contenu du fichier ",(0,a.kt)("inlineCode",{parentName:"p"},".deb"),", et en le recr\xe9ant en via la proc\xe9dure suivante:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fichier=kompose_1.28.0-1_amd64.deb\nar x $fichier\nzstd -d < control.tar.zst | xz > control.tar.xz\nzstd -d < data.tar.zst | xz > data.tar.xz\nar -m -c -a sdsd repacked_${fichier} debian-binary control.tar.xz data.tar.xz\nrm debian-binary control.tar.xz data.tar.xz control.tar.zst data.tar.zst\n"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Cette page est maintenant termin\xe9e, je n'h\xe9siterais pas \xe0 la compl\xe9ter si j'approfondis le sujet."),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"En lien avec cette page",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Adminsys/creer-repo-debian"},"H\xe9berger son d\xe9p\xf4t Debian")))))}d.isMDXComponent=!0}}]);