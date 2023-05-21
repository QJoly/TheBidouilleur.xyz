"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),p=a,k=c["".concat(l,".").concat(p)]||c[p]||m[p]||i;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1039:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(4137));const i={sidebar_position:1},o="Docs",s={unversionedId:"intro",id:"intro",title:"Docs",description:"Bienvenue sur les documentations de la Bidouille.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/TheBidouilleur.xyz/docs/intro",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"DNS / DHCP avec DNSMASQ",permalink:"/TheBidouilleur.xyz/docs/Adminsys/dnsmasq"}},l={},d=[{value:"Administration Syst\xe8me",id:"administration-syst\xe8me",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Me suivre",id:"me-suivre",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docs"},"Docs"),(0,a.kt)("p",null,"Bienvenue sur les documentations de la Bidouille.\nVous trouverez ici des aides et des inspirations sur les sujets que je traite durant mon temps libre."),(0,a.kt)("h2",{id:"administration-syst\xe8me"},"Administration Syst\xe8me"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Documentations Administration Syst\xe8me"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Adminsys/dnsmasq"},"DNS / DHCP avec DNSMASQ"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Adminsys/creer-deb"},"Cr\xe9er ses propres packages Debian"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Adminsys/creer-repo-debian"},"Cr\xe9er son d\xe9p\xf4t Debian"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Adminsys/rootless-libvirt"},"Utiliser libvirt en utilisateur non-root"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Adminsys/loki"},"Centraliser vos logs avec Loki"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Adminsys/MultiArch-Build"},"Cr\xe9er des images Docker multiarchitectures"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Adminsys/netbootxyz"},"Syst\xe8me de boot PXE simple avec netboot"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Adminsys/packer-alpine"},"Introduction \xe0 Packer"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Adminsys/sops"},"Stocker des secrets dans un d\xe9p\xf4t Git"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Adminsys/testinfra"},"V\xe9rification configuration syst\xe8me avec testinfra"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Adminsys/Tinc"},"Tinc, un VPN de Mesh"))))),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Documentations Kubernetes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Kubernetes/kind"},"Kubernetes INside Docker - KIND"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Kubernetes/getting-started-cert-manager"},"Cert-Manager - Gestionnaire de certificat"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Kubernetes/K9S"},"K9S - Interface TUI"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Kubernetes/longhorn-fsck"},"Lancer un Fsck sur Longhorn"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Kubernetes/registre-prive"},"Utiliser un registre priv\xe9 pour vos d\xe9ploiements"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Kubernetes/kaniko"},"Build une image docker avec Kaniko"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/Kubernetes/kube-client"},"Guide pour utiliser kubectl sur machine cliente"))))),(0,a.kt)("h2",{id:"me-suivre"},"Me suivre"),(0,a.kt)("p",null,"Vous pourrez \xe9galement me retrouver sur Twitter :"),(0,a.kt)("a",{href:"https://twitter.com/TheBidouilleur?ref_src=twsrc%5Etfw",class:"twitter-follow-button","data-size":"large","data-show-count":"false"},"Suivre @TheBidouilleur"),(0,a.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}))}m.isMDXComponent=!0}}]);