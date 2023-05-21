"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4284],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const i={title:"Simple DebianRepository - D\xe9ployer un d\xe9p\xf4t Debian en 2min",slug:"DebianRepository",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["Debian"],description:"DebianRepository est un projet bas\xe9 sur Docker permettant de d\xe9ployer un d\xe9p\xf4t de paquets Debian en quelques secondes"},s=void 0,o={permalink:"/TheBidouilleur.xyz/blog/DebianRepository",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2023-04-10-DebianRepository-Projet/index.md",source:"@site/blog/2023-04-10-DebianRepository-Projet/index.md",title:"Simple DebianRepository - D\xe9ployer un d\xe9p\xf4t Debian en 2min",description:"DebianRepository est un projet bas\xe9 sur Docker permettant de d\xe9ployer un d\xe9p\xf4t de paquets Debian en quelques secondes",date:"2023-04-10T00:00:00.000Z",formattedDate:"10 avril 2023",tags:[{label:"Debian",permalink:"/TheBidouilleur.xyz/blog/tags/debian"}],readingTime:3.8,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{title:"Simple DebianRepository - D\xe9ployer un d\xe9p\xf4t Debian en 2min",slug:"DebianRepository",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["Debian"],description:"DebianRepository est un projet bas\xe9 sur Docker permettant de d\xe9ployer un d\xe9p\xf4t de paquets Debian en quelques secondes"},prevItem:{title:"IPFS - un protocole pour archiver et partager des fichiers",permalink:"/TheBidouilleur.xyz/blog/ipfs"},nextItem:{title:"Dagger.io, un CI Universel",permalink:"/TheBidouilleur.xyz/blog/dagger"}},l={authorsImageUrls:[void 0]},p=[{value:"Qu&#39;est-ce que Simple Debian-Repository ?",id:"quest-ce-que-simple-debian-repository-",level:2},{value:"Comment lancer le projet ?",id:"comment-lancer-le-projet-",level:2},{value:"Comment ajouter un paquet ?",id:"comment-ajouter-un-paquet-",level:2},{value:"Customisation",id:"customisation",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Si vous visitez r\xe9guli\xe8rement mon blog, vous avez sans doute remarqu\xe9 que j'ai un faible pour les projets bas\xe9s sur Docker. J'utilise Docker dans mes infrastructures pour la reproductibilit\xe9, la simplicit\xe9 des d\xe9ploiements et la facilit\xe9 de maintenance. ",(0,a.kt)("em",{parentName:"p"},"(C'est d'ailleurs pour ces raisons que j'ai d\xe9cid\xe9 de passer sur Kubernetes)"),"."),(0,a.kt)("p",null,"Cette ann\xe9e, j'ai \xe9crit 2 pages permettant respectivement d'apprendre \xe0 cr\xe9er des fichiers ",(0,a.kt)("inlineCode",{parentName:"p"},".deb")," et d'h\xe9berger un d\xe9p\xf4t de paquets Debian avec ",(0,a.kt)("inlineCode",{parentName:"p"},"Aptly"),". J'ai d\xe9cid\xe9 de reprendre mon tutoriel concernant ",(0,a.kt)("em",{parentName:"p"},"Aptly")," pour en faire un programme tout-en-un : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/QJoly/DebianRepository"},"Simple Debian-Repository"),"."),(0,a.kt)("h2",{id:"quest-ce-que-simple-debian-repository-"},"Qu'est-ce que Simple Debian-Repository ?"),(0,a.kt)("p",null,"Simple Debian-Repository est un projet en ",(0,a.kt)("strong",{parentName:"p"},"Bash")," qui va packager ",(0,a.kt)("em",{parentName:"p"},"un-par-un")," les applicatifs dans ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," et les d\xe9poser dans ",(0,a.kt)("inlineCode",{parentName:"p"},"repo-list")," sous forme de ",(0,a.kt)("inlineCode",{parentName:"p"},".deb")," avant de les publier sur un serveur web. Celui-ci g\xe8re \xe9galement la signature des paquets en g\xe9n\xe9rant une cl\xe9 GPG."),(0,a.kt)("h2",{id:"comment-lancer-le-projet-"},"Comment lancer le projet ?"),(0,a.kt)("p",null,"Le projet est ",(0,a.kt)("em",{parentName:"p"},"plug and play"),", il suffit de lancer le Docker pour lancer la cr\xe9ation du d\xe9p\xf4t (",(0,a.kt)("em",{parentName:"p"},"et de la cl\xe9 GPG"),"). Une fois le d\xe9p\xf4t cr\xe9\xe9, vous pouvez ajouter vos paquets dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," en respectant la nomenclature des fichiers ",(0,a.kt)("inlineCode",{parentName:"p"},".deb"),"."),(0,a.kt)("p",null,"Exemple de lancement \xe0 partir d'un dossier vide :"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://asciinema.org/a/N9JL3ih6jwoLJX4r58Y51NHlf"},(0,a.kt)("img",{parentName:"a",src:"https://asciinema.org/a/N9JL3ih6jwoLJX4r58Y51NHlf.svg",alt:"asciicast"}))),(0,a.kt)("p",null,"Par d\xe9faut, 2 programmes 'exemples' seront install\xe9s dans le d\xe9p\xf4t : ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"goodbye-world"),". Vous pourrez les supprimer en effa\xe7ant les dossiers et ",(0,a.kt)("inlineCode",{parentName:"p"},".deb")," dans ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"repo-list"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm -r src/stable/hello-world src/unstable/goodbye-world/\nrm repo-list/stable/hello-world_1.0.0-1_all.deb repo-list/unstable/goodbye-world_1.0.0-1_all.deb\n")),(0,a.kt)("h2",{id:"comment-ajouter-un-paquet-"},"Comment ajouter un paquet ?"),(0,a.kt)("p",null,"Le projet propose 2 d\xe9p\xf4ts par d\xe9faut : ",(0,a.kt)("inlineCode",{parentName:"p"},"stable")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"unstable"),". Vous pouvez ajouter autant de d\xe9p\xf4ts que vous le souhaitez en cr\xe9ant un dossier dans ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"repo-list"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Cr\xe9ation du d\xe9p\xf4t 'testing'\nmkdir -p src/testing repo-list/testing\n")),(0,a.kt)("p",null,"Vous pourrez trouver ma documentation \xe0 propos de la cr\xe9ation de paquets Debian ",(0,a.kt)("a",{parentName:"p",href:"docs/Adminsys/creer-deb"},"ici"),"."),(0,a.kt)("p",null,"Le script va chercher les dossiers \xe0 packager dans ",(0,a.kt)("inlineCode",{parentName:"p"},"src/NOM_APP/NOM_APP_VERSION-REV_ARCH"),"."),(0,a.kt)("p",null,"C.-\xe0-d. que si vous voulez packager l'application ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),", vous devez d'abord cr\xe9er un dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," dans ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," et cr\xe9er le dossier qui correspondra \xe0 la version du paquet. Par exemple, pour packager la version ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0")," de l'application ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \xe0 la r\xe9vision 1, il vous fraudra cr\xe9er le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"foo/foo_1.0.0-1_all")," dans ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," et y placer les fichiers n\xe9cessaires \xe0 la cr\xe9ation du paquet."),(0,a.kt)("p",null,"Exemple de cr\xe9ation de paquet ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/stable/foo/foo_1.0.0-1_all\ncd src/stable/foo/foo_1.0.0-1_all\nmkdir DEBIAN\ntouch DEBIAN/control # Ajouter les informations du paquet\nmkdir -p usr/bin\necho -e '#!/bin/bash\\necho \"bar\"' > usr/bin/foo\nchmod +x usr/bin/foo\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Il est possible de placer des fichiers ",(0,a.kt)("inlineCode",{parentName:"p"},".deb")," dans ",(0,a.kt)("inlineCode",{parentName:"p"},"repo-list/stable")," si vous voulez importer des paquets d\xe9j\xe0 packag\xe9s.")),(0,a.kt)("h2",{id:"customisation"},"Customisation"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"N'\xe9tant vraiment pas tr\xe8s bon en programmation web, j'ai utilis\xe9 le code de ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/flexdinesh/dev-landing-page"},"Flexdinesh")," pour la page d'accueil.")),(0,a.kt)("p",null,"Lors du lancement du projet, celui-ci va cr\xe9er une page web affichant les \xe9tapes permettant d'ajouter le d\xe9p\xf4t \xe0 votre machine. Il existe 2 variables d'environnements pour personnaliser cette page :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"REPO_NAME")," : Nom du d\xe9p\xf4t (celui-ci sera affich\xe9 dans la page d'accueil et permettra de nommer les fichiers dans les instructions)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WEB_URL"),"   : URL du d\xe9p\xf4t (pour afficher la bonne URL dans les instructions)")),(0,a.kt)("p",null,"Vous pourrez \xe9galement modifier la couleur du fond de la page d'accueil en modifiant le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"html"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n <meta charset="utf-8">\n <meta http-equiv="X-UA-Compatible" content="IE=edge">\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n <title>REPO_NAME</title>\n\n <link rel="icon" href="favicon.ico" type="image/png" />\n\n <link href="https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:300" rel="stylesheet">\n <link href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" rel="stylesheet">\n <link rel="stylesheet" href="css/reset.css">\n <link rel="stylesheet" href="css/styles.css">\n \x3c!-- <link rel="stylesheet" href="css/themes/indigo-white.css"> --\x3e\n \x3c!-- <link rel="stylesheet" href="css/themes/green-white.css"> --\x3e\n \x3c!-- <link rel="stylesheet" href="css/themes/red-white.css"> --\x3e\n \x3c!-- <link rel="stylesheet" href="css/themes/grey-white.css"> --\x3e\n \x3c!-- <link rel="stylesheet" href="css/themes/white-indigo.css"> --\x3e\n <link rel="stylesheet" href="css/themes/white-blue.css"> \n \x3c!-- <link rel="stylesheet" href="css/themes/white-grey.css"> --\x3e\n \x3c!-- <link rel="stylesheet" href="css/themes/white-red.css"> --\x3e\n \x3c!-- <link rel="stylesheet" href="css/themes/yellow-black.css"> --\x3e\n</head>\n')),(0,a.kt)("p",null,"Vous n'avez qu'\xe0 d\xe9-commenter la ligne correspondant au th\xe8me de votre choix."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Page d&#39;accueil",src:n(4697).Z,width:"2275",height:"722"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note si vous doutez de mon choix de couleur par d\xe9faut : je suis daltonien.")," ;)"),(0,a.kt)("p",null,"Tout comme le th\xe8me, les diff\xe9rents liens disponibles sur la page d'accueil doivent \xeatre modifi\xe9s dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/QJoly/DebianRepository"},"Simple Debian-Repository")," est un projet qui permet de d\xe9ployer rapidement un d\xe9p\xf4t de paquets Debian. Il est tr\xe8s simple \xe0 utiliser et \xe0 personnaliser. Si vous avez des suggestions d'am\xe9lioration, n'h\xe9sitez pas \xe0 me contacter sur Twitter ou \xe0 ouvrir une issue sur le projet. Celui-ci n'est pas adapt\xe9 \xe0 un usage en production, mais il me suffit pour mes besoins personnels."),(0,a.kt)("p",null,"En cr\xe9ant ce projet, j'ai \xe9galement cr\xe9\xe9 un second d\xe9p\xf4t Github, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/QJoly/src-packages-deb"},"src-packages-deb")," pour stocker certaines applications avant de les packager en ",(0,a.kt)("inlineCode",{parentName:"p"},".deb"),". N'h\xe9sitez pas \xe0 y jeter un \u0153il si vous souhaitez contribuer ou peupler votre d\xe9p\xf4t avec quelques applications."))}d.isMDXComponent=!0},4697:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/theme-840d79eddc31a74a2d22fc1096743dc7.png"}}]);