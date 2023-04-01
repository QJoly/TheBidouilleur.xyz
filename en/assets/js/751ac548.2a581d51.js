"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4381],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=i,b=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(4137));const o={slug:"cluster-arm",title:"Cr\xe9ation d'un cluster ARM"},a=void 0,l={unversionedId:"Homelab/Cluster-ARM",id:"Homelab/Cluster-ARM",title:"Cr\xe9ation d'un cluster ARM",description:"Apr\xe8s avoir fait mumuse avec mon Dell R610 qui consomme 120W au repos, je me suis toujours pos\xe9 la question de la consommation en \xe9lectricit\xe9 de mes appareils. Je m'interesse donc \xe0 un Homelab qui pourrait \xeatre le plus \xe9conome possible en \xe9nergie.",source:"@site/docs/Homelab/Cluster-ARM.md",sourceDirName:"Homelab",slug:"/Homelab/cluster-arm",permalink:"/TheBidouilleur.xyz/en/docs/Homelab/cluster-arm",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Homelab/Cluster-ARM.md",tags:[],version:"current",frontMatter:{slug:"cluster-arm",title:"Cr\xe9ation d'un cluster ARM"},sidebar:"tutorialSidebar",previous:{title:"Exposing your containers without NAT with Cloudflared",permalink:"/TheBidouilleur.xyz/en/docs/Homelab/cloudflared"},next:{title:"Kubernetes INside Docker",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/kind"}},u={},s=[{value:"Explication du projet",id:"explication-du-projet",level:2},{value:"Besoins obligatoires",id:"besoins-obligatoires",level:3},{value:"Besoins optionnels",id:"besoins-optionnels",level:3},{value:"Un boitier des plus atypique",id:"un-boitier-des-plus-atypique",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apr\xe8s avoir fait ",(0,i.kt)("em",{parentName:"p"},"mumuse")," avec mon Dell R610 qui consomme 120W au repos, je me suis toujours pos\xe9 la question de la consommation en \xe9lectricit\xe9 de mes appareils. Je m'interesse donc \xe0 un Homelab qui pourrait \xeatre le plus \xe9conome possible en \xe9nergie."),(0,i.kt)("p",null,"Et la solution : pas besoin de la chercher bien loin !"),(0,i.kt)("p",null,"L'",(0,i.kt)("strong",{parentName:"p"},"ARM")," est pour l'instant la solution la plus rentable en terme de rapport \xe9nergie/performance. ",(0,i.kt)("em",{parentName:"p"},"(j'essaierai un jour de passer sur de l'alderlake pour du ",(0,i.kt)("strong",{parentName:"em"},"amd64"),")"),"\nLe prix me permettra de prendre un plus grand nombre d'appareil et de m'orienter vers ma source principale d'apprentissage du moment : ",(0,i.kt)("strong",{parentName:"p"},"KUBERNETES")," !"),(0,i.kt)("h2",{id:"explication-du-projet"},"Explication du projet"),(0,i.kt)("p",null," J'utilise actuellement un vieux Laptop de r\xe9cup\xe9ration. Celui-ci est \xe9quip\xe9 d'un Intel i3, et 12Go de m\xe9moire vive DDR3.  J'y ai install\xe9 Proxmox et 4 machines virtuelles qui forment un cluster k3s qui fonctionne tr\xe8s bien."),(0,i.kt)("p",null,"Ce setup est fonctionnel et me suffit pour le moment. Mais.. car il en faut un, je me demande si je ne peux pas faire plus simple, plus \xe9conomique (en \xe9nergie) et avec une facilit\xe9 de r\xe9paration/maintenance mat\xe9riel. (ex: si mon laptop meurt, toutes mes VMs aussi)."),(0,i.kt)("p",null,"Et pour r\xe9pondre \xe0 cette probl\xe9matique, je m'int\xe9resse de plus en plus aux micro-ordinateurs tels que les Raspberry Pi."),(0,i.kt)("h3",{id:"besoins-obligatoires"},"Besoins obligatoires"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Petit (j'aimerai \xe9viter de repasser sur un Wyse)"),(0,i.kt)("li",{parentName:"ul"},"Faible consommation (Processeur ARM?)"),(0,i.kt)("li",{parentName:"ul"},"Minimum 4 n\u0153uds"),(0,i.kt)("li",{parentName:"ul"},"Minimum 4Go/noeuds"),(0,i.kt)("li",{parentName:"ul"},"Rapport prix/perf raisonnable (payer  100\u20ac  pour  une  petite  machine  \xe0  2Go  de  RAM  \u2192  non)")),(0,i.kt)("h3",{id:"besoins-optionnels"},"Besoins optionnels"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open-Hardware"),(0,i.kt)("li",{parentName:"ul"},"Mat\xe9riel homog\xe8ne")),(0,i.kt)("h2",{id:"un-boitier-des-plus-atypique"},"Un boitier des plus atypique"),(0,i.kt)("p",null,"Comme on dit en cuisine : ",(0,i.kt)("em",{parentName:"p"},"l'int\xe9rieur est aussi important que l'ext\xe9rieur"),"\nJe recycle une vieille ampli Marshall pour y mettre les diff\xe9rentes machines au m\xeame endroit, \xe7a permettra de pouvoir d\xe9placer le cluster facilement (et de le soulever pour le m\xe9nage)"),(0,i.kt)("admonition",{title:"Article en cours de r\xe9daction",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Cette page est toujours en \xe9criture.")))}m.isMDXComponent=!0}}]);