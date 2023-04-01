"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8647],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(4137));const i={slug:"remarkable",title:"Remarkable, une avanc\xe9e dans les prises de notes",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["quotidien"]},s=void 0,o={permalink:"/TheBidouilleur.xyz/blog/remarkable",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2022-10-14-Remarkable/index.md",source:"@site/blog/2022-10-14-Remarkable/index.md",title:"Remarkable, une avanc\xe9e dans les prises de notes",description:"Introduction",date:"2022-10-14T00:00:00.000Z",formattedDate:"14 octobre 2022",tags:[{label:"quotidien",permalink:"/TheBidouilleur.xyz/blog/tags/quotidien"}],readingTime:3.68,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"remarkable",title:"Remarkable, une avanc\xe9e dans les prises de notes",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["quotidien"]},prevItem:{title:"Gardez vos clusters \xe0 jour",permalink:"/TheBidouilleur.xyz/blog/cluster-maj"},nextItem:{title:"NixOS, Ma nouvelle distribution",permalink:"/TheBidouilleur.xyz/blog/nixos"}},l={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"La Remarkable",id:"la-remarkable",level:2},{value:"Remarkable Fake Cloud",id:"remarkable-fake-cloud",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"R\xe9cemment, j'ai suivi une formation de ~8 mois durant laquelle je n'avais qu'un clavier pour prendre des notes. Pour moi : aucun probl\xe8me, je ne demande que \xe7a : un support que j'utilise personnellement et professionnellement.\nJe tape plut\xf4t vite ",(0,r.kt)("em",{parentName:"p"},"(environ ~100 mots/minutes)"),", j'utilise des macros, et des raccourcis pour me simplifier la vie et si jamais j'ai besoin d'un sch\xe9ma : je prend mon temps sur ",(0,r.kt)("a",{parentName:"p",href:"https://draw.io"},"draw.io"),"."),(0,r.kt)("p",null,"Mais durant des travaux d'\xe9quipes, j'ai compris l'importance ",(0,r.kt)("em",{parentName:"p"},"(et la puissance)")," d'un crayon et d'une feuille de papier.\nSans m\xe9thode de repr\xe9sentation comme des sch\xe9mas : on se perd vite."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"J'ai donc achet\xe9 ",(0,r.kt)("a",{parentName:"p",href:"https://fr.aliexpress.com/item/1005002840252915.html"},(0,r.kt)("em",{parentName:"a"},"The Tablette")),". Un jouet pour enfant fonctionnant comme n'importe quel tableau-magique que l'on avait en \xe9tant enfant.\n",(0,r.kt)("img",{alt:"The Tablette",src:a(3119).Z,width:"442",height:"455"})),(0,r.kt)("p",null,"Et ce jouet de 5\u20ac m'a sauv\xe9 la vie plusieurs fois durant les projets \xe0 plusieurs. C'\xe9tait suffisant pour \xe9viter l'achat de papier durant ces 8 mois."),(0,r.kt)("p",null,"Je garde toujours cette tablette sur mon bureau, mais j'aimerai bien un syst\xe8me similaire mais gardant en m\xe9moire mes \xe9crits/dessins."),(0,r.kt)("p",null,"C'est ainsi que j'ai achet\xe9..."),(0,r.kt)("h2",{id:"la-remarkable"},"La Remarkable"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remarkable 2",src:a(301).Z,width:"1080",height:"1440"})),(0,r.kt)("p",null,"Ayant un coll\xe8gue avec ce m\xeame bijou, j'ai pu me renseigner \xe0 l'avance ",(0,r.kt)("em",{parentName:"p"},"(et m\xeame tester)")," cette ",(0,r.kt)("em",{parentName:"p"},"liseuse"),". C'est une tablette bas\xe9e sous Linux permettant de lire des PDF, et de prendre des notes via un stylet en imitant le plus possible la sensation du papier."),(0,r.kt)("p",null,"La prise en main demande un peu d'entra\xeenement mais apr\xe8s quelques heures on peut se rendre compte de la puissance du jouet entre ses mains."),(0,r.kt)("p",null,"On peut mettre des pdf de son ordinateur vers la tablette via USB ou directement en d\xe9posant les fichiers sur le cloud Remarkable."),(0,r.kt)("admonition",{title:"autres m\xe9thodes",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Je crois qu'il \xe9galement possible de d\xe9poser ses fichiers en wifi directement \u2026 jamais test\xe9")),(0,r.kt)("p",null,"Mais si vous utilisez une tablette remarkable, n'oubliez pas que celle-ci va constamment se synchroniser avec les serveurs AWS de la marque en embarquant vos PDF."),(0,r.kt)("p",null,"C'est tout de m\xeame f\xe2cheux \u2026 Si seulement on avait une solution !"),(0,r.kt)("h3",{id:"remarkable-fake-cloud"},"Remarkable Fake Cloud"),(0,r.kt)("p",null,"Dans son fonctionnement, la remarkable est un ",(0,r.kt)("strong",{parentName:"p"},"Linux")," avec un daemon systemd (nomm\xe9 xochtl) qui va g\xe9rer l'\xe9cran e-ink. Et une fois le mot de passe root obtenu dans les param\xe8tres ",(0,r.kt)("em",{parentName:"p"},"(apr\xe8s avoir lu que remarkable adore l'open-source, d'ailleurs c'est agr\xe9able qu'ils aient laiss\xe9s le plein-pouvoir sur la tablette)")," on peut s'amuser \xe0 faire pleins de choses\u2026"),(0,r.kt)("p",null,"La tablette peut donc acqu\xe9rir de nouvelles fonctionnalit\xe9s et \xe9galement h\xe9berger quelques petites applications ",(0,r.kt)("em",{parentName:"p"},"(dans la limite du raisonnable)"),".\nEt moi ce qui m'a int\xe9ress\xe9 l\xe0-dedans : c'est la possibilit\xe9 d'avoir son propre cloud remarkable pour que ses fichiers restent \xe0 la maison !"),(0,r.kt)("p",null,"Si \xe7a en int\xe9ressent certains, voici le ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ddvk/rmfakecloud"},"lien du GitHub avec le lien vers la documentation"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RMFakeCloud",src:a(5747).Z,width:"690",height:"523"})),(0,r.kt)("p",null,"L'UI me permet d'uploader des PDF qui sont synchronis\xe9s d\xe8s que la tablette est sur le WiFi. Et je peux m\xeame envoyer des fichiers depuis mon propre smtp (chose impossible nativement)."),(0,r.kt)("admonition",{title:"Pour trouver, il faut chercher",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"P'tite parenth\xe8se sur l'auteur (DDVK) du projet.\nIl publie r\xe9guli\xe8rement des programmes pour rendre sa tablette + performante, + ergonomique mais il est tr\xe8s peu actif sur les forums / reddit, je vous invite \xe0 lui laisser une \xe9toile pour \xeatre inform\xe9 de ses nouveaux projets.")),(0,r.kt)("p",null,"Je peux donc fanfaronner en voyant mon utilisateur \xeatre ",(0,r.kt)("em",{parentName:"p"},"admin")," sur la tablette.. :)\n",(0,r.kt)("img",{alt:"General settings",src:a(5511).Z,width:"661",height:"888"})),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"On a commenc\xe9 \xe0 aborder la prise de note de mani\xe8re diff\xe9rente \xe0 la sortie des iPads qui proposaient une exp\xe9rience entre le PC et le smartphone. Remarkable a cr\xe9\xe9 un produit incroyable en proposant une remise \xe0 plat de cette fonctionnalit\xe9 : pas de clavier, pas de souris.. juste un stylet et un \xe9cran ",(0,r.kt)("em",{parentName:"p"},'"papier"'),".\nEt comme la tablette est sous Linux, je suis s\xfbr que nous n'avons pas fini d'exploiter son potentiel en la bidouillant.  (Je n'ai pas pr\xe9cis\xe9, mais nous avons un acc\xe8s root sur la RM2)\n",(0,r.kt)("img",{alt:"Dat acc\xe8s root",src:a(4361).Z,width:"1080",height:"1440"}),"\nHate de voir une remarkable dans un cluster Kubernetes !"),(0,r.kt)("admonition",{title:"S\xe9curit\xe9",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"(Edit le 24/10)\nAttention \xe0 ne rien stocker de confidentiel, la tablette n'est pas chiffr\xe9e ! Bien que les acc\xe8s ne soient pas \xe9vident (Il faudrait d\xe9monter et dump la carte eMMC), il est possible de retrouver vos fichiers assez facilement.\nSi le sujet vous interesse, voici un article qui en parle et porpose m\xeame une solution : ",(0,r.kt)("a",{parentName:"p",href:"https://blog.redteam-pentesting.de/2021/remarkable-encryption/"},"https://blog.redteam-pentesting.de/2021/remarkable-encryption/"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"(Attention, j'ai pas parl\xe9 du prix.. restez accroch\xe9 si vous voulez vous l'acheter)"))))}m.isMDXComponent=!0},301:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1080-952a841466898850d01716f685c70123.jpg"},3119:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/TheTablette-56812fc59cb93f7a5513d79e459ac8da.png"},5511:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/generalsettings-1e3b962fecca4f5309822b091917ce9a.png"},4361:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/password-ca59d17a539006a8f9cbabf56b5f3ede.jpg"},5747:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rmfakecloud-349db19ed06b51183a41ec05a64c1f22.png"}}]);