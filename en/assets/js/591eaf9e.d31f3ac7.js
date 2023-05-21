"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[730],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=o(a),d=r,v=c["".concat(u,".").concat(d)]||c[d]||m[d]||s;return a?n.createElement(v,i(i({ref:t},p),{},{components:a})):n.createElement(v,i({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=a(7462),r=(a(7294),a(4137));const s={slug:"abuseipdb-fail2ban",title:"Signalez vos attaquants avec Fail2Ban",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["S\xe9curit\xe9","fail2ban"],description:"Ne restez pas neutre face aux attaques sur vos services expos\xe9s. Signalez chacune des IPs suspectes \xe0 partir de Fail2Ban et rendez le web un peu plus s\xfbr chaque jour"},i=void 0,l={permalink:"/TheBidouilleur.xyz/en/blog/abuseipdb-fail2ban",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2023-03-03-Signalez-vos-attaquants/index.md",source:"@site/blog/2023-03-03-Signalez-vos-attaquants/index.md",title:"Signalez vos attaquants avec Fail2Ban",description:"Ne restez pas neutre face aux attaques sur vos services expos\xe9s. Signalez chacune des IPs suspectes \xe0 partir de Fail2Ban et rendez le web un peu plus s\xfbr chaque jour",date:"2023-03-03T00:00:00.000Z",formattedDate:"March 3, 2023",tags:[{label:"S\xe9curit\xe9",permalink:"/TheBidouilleur.xyz/en/blog/tags/securite"},{label:"fail2ban",permalink:"/TheBidouilleur.xyz/en/blog/tags/fail-2-ban"}],readingTime:3,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"abuseipdb-fail2ban",title:"Signalez vos attaquants avec Fail2Ban",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["S\xe9curit\xe9","fail2ban"],description:"Ne restez pas neutre face aux attaques sur vos services expos\xe9s. Signalez chacune des IPs suspectes \xe0 partir de Fail2Ban et rendez le web un peu plus s\xfbr chaque jour"},prevItem:{title:"Dagger.io, un CI Universel",permalink:"/TheBidouilleur.xyz/en/blog/dagger"},nextItem:{title:"Mon mat\xe9riel",permalink:"/TheBidouilleur.xyz/en/blog/Mon-Setup"}},u={authorsImageUrls:[void 0]},o=[{value:"Fail2Ban",id:"fail2ban",level:2},{value:"Fail2Ban avec Proxmox",id:"fail2ban-avec-proxmox",level:3},{value:"D\xe9noncer les IPs suspectes",id:"d\xe9noncer-les-ips-suspectes",level:2}],p={toc:o},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"D\xe8s lors que nous exposons un service en ligne, celui-ci se fait harceler de bots et d'attaques en tout genre.\nCes bots ont pour objectif de trouver la moindre petite faille pour obtenir un acc\xe8s \xe0 votre serveur et en tirer quelque chose de lucratif ",(0,r.kt)("em",{parentName:"p"},"(Minages, Botnet, Ransomware)"),"."),(0,r.kt)("p",null,"La bonne pratique est donc de ne pas ",(0,r.kt)("strong",{parentName:"p"},"pas")," exposer les services sensibles ",(0,r.kt)("em",{parentName:"p"},"(et mettre en place un VPN/Tunnel SSH)"),", mais certains cas nous obligent \xe0 bafouer cette r\xe8gle."),(0,r.kt)("p",null,"Par exemple, si vous h\xe9bergez des WordPress, les pages administrateurs seront cibles d'attaques, les clients les plus exigeants voudront un Proxmox accessible depuis Internet, ou votre bastion est un simple serveur SSH."),(0,r.kt)("p",null,"Vous connaissez d\xe9j\xe0 les risques d'exposer ces acc\xe8s sur Internet et je ne vais pas non-plus vous pr\xe9senter de solutions universelles pour prot\xe9ger vos services."),(0,r.kt)("p",null,"Le message que je souhaite vous faire passer est de ",(0,r.kt)("strong",{parentName:"p"},"d\xe9noncer vos attaquants"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Et \xe9videmment : je ne vous parle pas d'\xe9plucher vos logs ligne-par-ligne pour r\xe9cup\xe9rer les IPs suspectes.")),(0,r.kt)("p",null,"Une solution simple et polyvalente est : ",(0,r.kt)("strong",{parentName:"p"},"fail2ban"),"."),(0,r.kt)("h2",{id:"fail2ban"},"Fail2Ban"),(0,r.kt)("p",null,"Fail2Ban est un programme tr\xe8s simple en Python qui va lire vos fichiers de log, extraire les tentatives de connection \xe9chou\xe9es via une ",(0,r.kt)("em",{parentName:"p"},"regex"),", et agir en cons\xe9quence."),(0,r.kt)("p",null,"Par exemple, lire les tentatives d'authentification en SSH et bloquer temporairement les IPs via des r\xe8gles IPTables. Ou envoyer un mail lorsqu'un utilisateur se trompe de mot de passe 3 fois sur votre Drupal."),(0,r.kt)("p",null,"Nativement, ",(0,r.kt)("em",{parentName:"p"},"Fail2Ban")," peut surveiller Apache2, Postfix, proftpd et bien d'autres..."),(0,r.kt)("p",null,"Mais cr\xe9er vos r\xe8gles n'est pas bien compliqu\xe9, on va donc cr\xe9er 2 r\xe8gles nous-m\xeame."),(0,r.kt)("h3",{id:"fail2ban-avec-proxmox"},"Fail2Ban avec Proxmox"),(0,r.kt)("p",null,"Cr\xe9ez le filtre avec la regex identifiant les erreurs d'authentifications dans le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fail2ban/filter.d/proxmox.conf"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"[Definition]\nfailregex = pvedaemon\\[.*authentication failure; rhost=<HOST> user=.* msg=.*\nignoreregex =\n")),(0,r.kt)("p",null,"Et enfin le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fail2ban/jail.d/proxmox.conf")," qui va d\xe9finir les ports qui seront bloqu\xe9s \xe0 l'IP suspecte et les fichiers de log \xe0 surveiller."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"[proxmox]\nenabled = true\nport = https,http,8006\nfilter = proxmox\nlogpath = /var/log/daemon.log\nmaxretry = 3\nbantime = 3600\naction = %(action_)s\n")),(0,r.kt)("p",null,"Vous pouvez v\xe9rifier la syntaxe et red\xe9marrer ",(0,r.kt)("em",{parentName:"p"},"fail2ban")," avec ",(0,r.kt)("inlineCode",{parentName:"p"},"fail2ban-client reload"),"."),(0,r.kt)("p",null,"Simple, non ? Maintenant, place \xe0 la d\xe9lation !"),(0,r.kt)("h2",{id:"d\xe9noncer-les-ips-suspectes"},"D\xe9noncer les IPs suspectes"),(0,r.kt)("p",null,"Lorsqu'un num\xe9ro suspect m'appelle, j'ai souvent le r\xe9flexe (inutile\u202f?) de chercher le num\xe9ro sur Google et de voir si le num\xe9ro a d\xe9j\xe0 \xe9t\xe9 signal\xe9."),(0,r.kt)("p",null,"C'est pareil avec les adresses IP !"),(0,r.kt)("p",null,"Une IP de Chine vient visiter votre blog ? \ud83d\udc40 C'est peut-\xeatre un Fran\xe7ais habitant \xe0 l'\xe9tranger, ou un vilain robot qui cherche des adresses mails pour vous envoyer des spams/phishing."),(0,r.kt)("p",null,"Et v\xe9rifier si l'IP a une mauvaise r\xe9putation est la premi\xe8re chose \xe0 faire. C'est l'int\xe9r\xeat du site ",(0,r.kt)("a",{parentName:"p",href:"https://www.abuseipdb.com"},"AbuseIPDB"),"."),(0,r.kt)("p",null,"En cr\xe9ant un compte, vous pourrez signaler des IPs sur le site via l'IHM ou l'API."),(0,r.kt)("p",null,"Et c'est justement cette API qui va nous permettre de signaler automatiquement les adresses IP louches."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Et en plus, vous pourrez cr\xe9er un super widget sur votre site pour montrer le nombre d'IP que vous avez signal\xe9.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.abuseipdb.com/contributor/106797.svg",alt:'"AbuseIPDB Badge"'})),(0,r.kt)("p",null,"Et pour faire ce signalement automatique, il suffit de modifier vos ",(0,r.kt)("inlineCode",{parentName:"p"},"jails")," sur ",(0,r.kt)("em",{parentName:"p"},"Fail2Ban")," en ajoutant une ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," qui va faire un reporting sur AbuseIPDB:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'action = %(action_)s\n         %(action_abuseipdb)s[abuseipdb_apikey="VOTRE_API_ABUSEIPDB", abuseipdb_category="18,21"]\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"... sachant que la cat\xe9gorie ",(0,r.kt)("inlineCode",{parentName:"em"},"18")," correspond aux attaques par brute-force, et ",(0,r.kt)("inlineCode",{parentName:"em"},"21")," aux attaques sur pages WEB.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Ce genre de configuration ne va pas directement augmenter la s\xe9curit\xe9 de vos services, il faut garder en t\xeate que c'est une action qui a simplement pour but de rendre la vie dure aux attaquants/m\xe9chants robots. Rendons le web plus s\xfbr, sans se rajouter une charge de travail suppl\xe9mentaire."))}m.isMDXComponent=!0}}]);