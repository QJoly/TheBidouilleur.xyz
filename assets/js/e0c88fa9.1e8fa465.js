"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={slug:"caddy",title:"Mon voyage autour des loadbalancers",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"},tags:["proxmox","packer","devops"]},i=void 0,u={permalink:"/blog/caddy",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2021-09-14-Caddy/index.md",source:"@site/blog/2021-09-14-Caddy/index.md",title:"Mon voyage autour des loadbalancers",description:"Changelog (janv 2022) - Aujourd'hui, j'ai remplac\xe9 Caddy par Traefik, \xe0 voir dans un futur article",date:"2021-09-14T00:00:00.000Z",formattedDate:"14 septembre 2021",tags:[{label:"proxmox",permalink:"/blog/tags/proxmox"},{label:"packer",permalink:"/blog/tags/packer"},{label:"devops",permalink:"/blog/tags/devops"}],readingTime:2.365,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8",imageURL:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"}],frontMatter:{slug:"caddy",title:"Mon voyage autour des loadbalancers",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://git.thoughtless.eu",image_url:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8",imageURL:"https://git.thoughtless.eu/avatars/05bed00fb8cb64b8e3b222f797bcd3d8"},tags:["proxmox","packer","devops"]},prevItem:{title:"Utilisation de Loki pour Centraliser les logs",permalink:"/blog/loki-grafana"},nextItem:{title:"Pr\xe9sentation rapide de Docker-Swarm",permalink:"/blog/presentation-docker-swarm"}},s={authorsImageUrls:[void 0]},l=[],c={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Changelog (janv 2022) - Aujourd'hui, j'ai remplac\xe9 Caddy par Traefik, \xe0 voir dans un futur article")),(0,n.kt)("p",null,"Dans ma courte vie d'informaticien, je n'ai toujours eu qu'une seule IP publique. Celle de mon serveur OVH sur lequel vous visualisez le site actuellement. Et en sachant que j'ai de nombreux services Web, il m'a rapidement \xe9t\xe9 n\xe9c\xe9ssaire de chercher les diff\xe9rents solutions permettant d'installer un ",(0,n.kt)("strong",{parentName:"p"},"Reverse Proxy")," efficace qui servirait \xe0 rediriger mes utilisateurs vers l'application voulue en fonction du domaine. "),(0,n.kt)("p",null,"Dans ma longue qu\xeate (qui n'est certainement pas achev\xe9e), j'ai eu l'occassion de tester de ",(0,n.kt)("em",{parentName:"p"},"nombreuses")," solutions comme Haproxy, Apache2, Nginx et maintenant.. Caddy"),(0,n.kt)("p",null,"Haproxy a \xe9t\xe9 pour moi le plus facile et le plus pratique pour d\xe9marrer, bonne documentation, incorpore de nombreux outils permettant de v\xe9rifier la configuration, ou rajouter des authentifications. J'ai \xe9t\xe9 satisfait durant quelques ann\xe9es. "),(0,n.kt)("p",null,"(Je ne compte pas Apache2, qui a \xe9t\xe9 pratique pour d\xe9buter sans installer un service d\xe9di\xe9 \xe0 mon besoin de redirection)"),(0,n.kt)("p",null,"Ensuite, j'ai utilis\xe9 ",(0,n.kt)("strong",{parentName:"p"},"aaPanel")," (dont vous trouverez un article sur ce site) me permettant d'avoir une toute un panel web pour mes sites et mes redirections ! ",(0,n.kt)("em",{parentName:"p"},"J'ai abandonn\xe9 en sachant que c'\xe9tait un syst\xe8me bien ficel\xe9 dans lequel j'avais peu de libert\xe9 en terme d'\xe9dition de config")),(0,n.kt)("p",null,"Puis mon besoin inutile d'avoir une interface Web m'a men\xe9 vers ",(0,n.kt)("strong",{parentName:"p"},"NPM")," (",(0,n.kt)("em",{parentName:"p"},"Nginx Proxy Manager"),") dont vous trouverez plus d'information ",(0,n.kt)("a",{parentName:"p",href:"https://nginxproxymanager.com/"},"ici"),". Qui m'\xe9tait tr\xe8s pratique en sachant qu'il \xe9tait sous forme de conteneur Docker, et proposant une interface g\xe9rant la cr\xe9ation de redirection ainsi que le SSL, toujours chez ",(0,n.kt)("strong",{parentName:"p"},"let's encrypt"),".\nMais \xe0 chaque expiration de certificat, NPM m'obligeait \xe0 aller manuellement s\xe9l\xe9ctionner un-par-un chaque certificat \xe0 update : et \xe7a, c'\xe9tait impensable en sachant le nombre de domaine que j'ai cr\xe9\xe9. "),(0,n.kt)("p",null,"Aujourd'hui, mon attention se porte vers ",(0,n.kt)("strong",{parentName:"p"},"Caddy")," qui, pour l'instant, correspond exactement \xe0 ce que je souhaite, et avec une simplicit\xe9 incroyable. "),(0,n.kt)("h1",{id:"caddy"},"Caddy"),(0,n.kt)("p",null,"Caddy est, comme vous l'aurez compris, un reverse-proxy assez polyvalent et tr\xe8s utilis\xe9 dans certains conteneurs Docker ! Celui-ci g\xe9n\xe8re automatiquement vos certificats (et configure les redirections automatiquement) sans aucun soucis avec Let's Encrypt. Caddy est assez l\xe9ger et vous \xe9vitera les configurations \xe0 ralonge, voici un exemple b\xeate : "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"thoughtless.eu {\n    reverse_proxy 192.168.5.125:8062\n    log {\n        output file /var/log/caddy/thoughtless.eu_access.log\n    }\n}\n")),(0,n.kt)("p",null,"Cette ligne cr\xe9era une redirection en reverse-proxy avec la configuration par d\xe9fault : "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Caddy updatera / generera des certificats chaque fois que c'est n\xe9c\xe9ssaire"),(0,n.kt)("li",{parentName:"ul"},"Il redirigera automatiquement les requetes en http:// vers le https://"),(0,n.kt)("li",{parentName:"ul"},"Il \xe9criera des logs des acc\xe8s dans un fichier")),(0,n.kt)("p",null,"En apache2 / Haproxy, \xe7a aurait pris un chou\xefa + de lignes. "),(0,n.kt)("p",null,"Mais attendons de voir, Caddy est encore tr\xe8s neuf pour moi, et je suis s\xfbr que mon prochain besoin m'orientera vers une autre solution telle que Traefik par exemple ! "),(0,n.kt)("p",null,"Bonne courage dans votre longue qu\xeate autour des reverse-proxy"))}p.isMDXComponent=!0}}]);