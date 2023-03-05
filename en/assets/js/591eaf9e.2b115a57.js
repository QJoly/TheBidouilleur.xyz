"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[730],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,v=m["".concat(u,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=n(7462),r=(n(7294),n(4137));const s={slug:"abuseipdb-fail2ban",title:"Signalez vos attaquants avec Fail2Ban",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["S\xe9curit\xe9","fail2ban"],description:"Ne restez pas neutre face aux attaques sur vos services expos\xe9s. Signalez chacune des IPs suspectes \xe0 partir de Fail2Ban et rendez le web un peu plus s\xfbr chaque jour."},i=void 0,l={permalink:"/TheBidouilleur.xyz/en/blog/abuseipdb-fail2ban",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2023-03-03-Signalez-vos-attaquants/index.md",source:"@site/blog/2023-03-03-Signalez-vos-attaquants/index.md",title:"Signalez vos attaquants avec Fail2Ban",description:"Ne restez pas neutre face aux attaques sur vos services expos\xe9s. Signalez chacune des IPs suspectes \xe0 partir de Fail2Ban et rendez le web un peu plus s\xfbr chaque jour.",date:"2023-03-03T00:00:00.000Z",formattedDate:"March 3, 2023",tags:[{label:"S\xe9curit\xe9",permalink:"/TheBidouilleur.xyz/en/blog/tags/securite"},{label:"fail2ban",permalink:"/TheBidouilleur.xyz/en/blog/tags/fail-2-ban"}],readingTime:2.935,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"abuseipdb-fail2ban",title:"Signalez vos attaquants avec Fail2Ban",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["S\xe9curit\xe9","fail2ban"],description:"Ne restez pas neutre face aux attaques sur vos services expos\xe9s. Signalez chacune des IPs suspectes \xe0 partir de Fail2Ban et rendez le web un peu plus s\xfbr chaque jour."},nextItem:{title:"Mon mat\xe9riel",permalink:"/TheBidouilleur.xyz/en/blog/Mon-Setup"}},u={authorsImageUrls:[void 0]},o=[{value:"Fail2Ban",id:"fail2ban",level:2},{value:"Fail2Ban avec Proxmox",id:"fail2ban-avec-proxmox",level:3},{value:"D\xe9noncer les IPs suspectes",id:"d\xe9noncer-les-ips-suspectes",level:2}],p={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"D\xe8s lors que nous exposons un service en ligne, celui-ci se fait harceler de bots et d'attaques en tout genre.\nCes bots ont pour objectif de trouver la moindre petite faille pour obtenir un acc\xe8s \xe0 votre serveur et en tirer quelque chose de lucratif ",(0,r.kt)("em",{parentName:"p"},"(Minages, Botnet, Ransomware)"),". "),(0,r.kt)("p",null,"La bonne pratique est donc de ne pas ",(0,r.kt)("strong",{parentName:"p"},"pas")," exposer les services sensibles ",(0,r.kt)("em",{parentName:"p"},"(et mettre en place un VPN/Tunnel SSH)"),", mais certains cas nous obligent \xe0 bafouer cette r\xe8gle."),(0,r.kt)("p",null,"Par exemple, si vous h\xe9bergez des WordPress, les pages administrateurs seront cibles d'attaques, les clients les plus exigeants voudront un Proxmox accessible depuis Internet, ou votre bastion est un simple serveur SSH."),(0,r.kt)("p",null,"Vous connaissez d\xe9j\xe0 les risques d'exposer ces acc\xe8s sur Internet et je ne vais pas non-plus vous pr\xe9senter de solutions universelles pour prot\xe9ger vos services. "),(0,r.kt)("p",null,"Le message que je souhaite vous faire passer est de ",(0,r.kt)("strong",{parentName:"p"},"d\xe9noncer vos attaquants"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Et \xe9videmment : je ne vous parle pas d'\xe9plucher vos logs ligne-par-ligne pour r\xe9cup\xe9rer les IPs suspectes.")),(0,r.kt)("p",null,"Une solution simple et polyvalente est : ",(0,r.kt)("strong",{parentName:"p"},"fail2ban"),"."),(0,r.kt)("h2",{id:"fail2ban"},"Fail2Ban"),(0,r.kt)("p",null,"Fail2Ban est un programme tr\xe8s simple en Python qui va lire vos fichiers de log, extraire les tentatives de connection \xe9chou\xe9es via une ",(0,r.kt)("em",{parentName:"p"},"regex"),", et agir en cons\xe9quence."),(0,r.kt)("p",null,"Par exemple, lire les tentatives d'authentifiction en SSH et bloquer temporairement les IPs via des r\xe8gles IPTables. Ou envoyer un mail lorsqu'un utilisateur se trompe de mot de passe 3 fois sur votre Drupal."),(0,r.kt)("p",null,"Nativement, ",(0,r.kt)("em",{parentName:"p"},"Fail2Ban")," peut surveiller Apache2, Postfix, proftpd et bien d'autres... "),(0,r.kt)("p",null,"Mais cr\xe9er vos r\xe8gles n'est pas bien compliqu\xe9, on va donc cr\xe9er 2 r\xe8gles nous-m\xeame. "),(0,r.kt)("h3",{id:"fail2ban-avec-proxmox"},"Fail2Ban avec Proxmox"),(0,r.kt)("p",null,"Cr\xe9ez le filtre avec la regex identifiant les erreurs d'authentifications dans le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fail2ban/filter.d/proxmox.conf"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"[Definition]\nfailregex = pvedaemon\\[.*authentication failure; rhost=<HOST> user=.* msg=.*\nignoreregex =\n")),(0,r.kt)("p",null,"et enfin le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fail2ban/jail.d/proxmox.conf")," qui va d\xe9finir les ports qui seront bloqu\xe9s \xe0 l'IP suspecte et les fichiers de log \xe0 surveiller."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"[proxmox]\nenabled = true\nport = https,http,8006\nfilter = proxmox\nlogpath = /var/log/daemon.log\nmaxretry = 3\nbantime = 3600\naction = %(action_)s\n")),(0,r.kt)("p",null,"Vous pouvez v\xe9rifier la syntaxe et red\xe9marrer ",(0,r.kt)("em",{parentName:"p"},"fail2ban")," avec ",(0,r.kt)("inlineCode",{parentName:"p"},"fail2ban-client reload"),"."),(0,r.kt)("p",null,"Simple, non ? Maintenant, place \xe0 la d\xe9lation ! "),(0,r.kt)("h2",{id:"d\xe9noncer-les-ips-suspectes"},"D\xe9noncer les IPs suspectes"),(0,r.kt)("p",null,"Lorsqu'un num\xe9ro suspect m'appelle, j'ai souvent le reflexe (inutile?) de chercher le num\xe9ro sur Google et de voir si le num\xe9ro a d\xe9j\xe0 \xe9t\xe9 signal\xe9."),(0,r.kt)("p",null,"C'est pareil avec les adresses IP ! "),(0,r.kt)("p",null,"Une IP de Chine vient visiter votre blog ? \ud83d\udc40 C'est peut-\xeatre un Fran\xe7ais habitant \xe0 l'\xe9tranger, ou un vilain robot qui cherche des adresses mails pour vous envoyer des spams/phishing."),(0,r.kt)("p",null,"Et v\xe9rifier si l'IP a une mauvaise r\xe9putation est la premi\xe8re chose \xe0 faire. C'est l'int\xearet du site ",(0,r.kt)("a",{parentName:"p",href:"https://www.abuseipdb.com"},"AbuseIPDB"),"."),(0,r.kt)("p",null,"En cr\xe9ant un compte, vous pourrez signalez des IPs sur le site via l'IHM, ou l'API."),(0,r.kt)("p",null,"Et c'est justement cette API qui va nous permettre de signaler automatiquement les adresses IP louches."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Et en plus, vous pourrez cr\xe9er un super widget sur votre site pour montrer le nombre d'IP que vous avez signal\xe9)")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.abuseipdb.com/contributor/106797.svg",alt:'"AbuseIPDB Badge"'})),(0,r.kt)("p",null,"Et pour faire ce signalement automatique, il suffit de modifier vos ",(0,r.kt)("inlineCode",{parentName:"p"},"jails")," sur ",(0,r.kt)("em",{parentName:"p"},"Fail2Ban")," en ajoutant une ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," qui va faire un reporting sur AbuseIPDB: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'action = %(action_)s\n         %(action_abuseipdb)s[abuseipdb_apikey="VOTRE_API_ABUSEIPDB", abuseipdb_category="18,21"]\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"... sachant que la cat\xe9gorie ",(0,r.kt)("inlineCode",{parentName:"em"},"18")," correspond aux attaques par brute-force, et ",(0,r.kt)("inlineCode",{parentName:"em"},"21")," aux attaques sur pages WEB.")," "),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Ce genre de configuration ne va pas directement augmenter la s\xe9curit\xe9 de vos services, il faut garder en t\xeate que c'est une action qui a simplement pour but de rendre la vie dure aux attaquants/m\xe9chants robots."))}c.isMDXComponent=!0}}]);