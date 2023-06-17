"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9718],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,u[1]=o;for(var l=2;l<i;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(4137));const i={slug:"K9S",title:"K9S - Une interface en TUI pour administrer votre cluster"},u=void 0,o={unversionedId:"Kubernetes/k9s",id:"Kubernetes/k9s",title:"K9S - Une interface en TUI pour administrer votre cluster",description:"Apr\xe8s m'\xeatre fait la main sur kubectl (l'utilitaire permettant de g\xe9rer un cluster kubernetes), j'ai commenc\xe9 \xe0 trouver son utilisation lente, ennuyante et peu ergonomique.",source:"@site/docs/Kubernetes/k9s.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/K9S",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/K9S",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Kubernetes/k9s.md",tags:[],version:"current",lastUpdatedAt:1687010550,formattedLastUpdatedAt:"17 juin 2023",frontMatter:{slug:"K9S",title:"K9S - Une interface en TUI pour administrer votre cluster"},sidebar:"tutorialSidebar",previous:{title:"Lancer un Fsck sur Longhorn",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/longhorn-fsck"},next:{title:"Build une image docker sur un cluster kubernetes",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/kaniko"}},s={},l=[{value:"K9S",id:"k9s",level:2}],c={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apr\xe8s m'\xeatre fait la main sur kubectl ",(0,a.kt)("em",{parentName:"p"},"(l'utilitaire permettant de g\xe9rer un cluster kubernetes)"),", j'ai commenc\xe9 \xe0 trouver son utilisation lente, ennuyante et peu ergonomique.\nFaire un ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n monitoring")," par-ci, un ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs -n thebidouilleur docusaurus-x38jsu8")," par l\xe0. \xc7a va 2 min, mais on passe plus de temps \xe0 taper les commandes qu'\xe0 analyser le r\xe9sultat.\nC'est pourquoi je me suis renseign\xe9 sur une interface me permettant de faire en quelques actions les m\xeames t\xe2ches r\xe9currentes."),(0,a.kt)("p",null,"Et c'est ainsi que je suis tomb\xe9 sur ",(0,a.kt)("strong",{parentName:"p"},"K9S"),"."),(0,a.kt)("h2",{id:"k9s"},"K9S"),(0,a.kt)("p",null,"K9S est un utilitaire fonctionnant exactement de la m\xeame mani\xe8re que ",(0,a.kt)("em",{parentName:"p"},"kubectl"),". Il va envoyer des requ\xeates HTTPS aux ma\xeetres du cluster et va afficher le r\xe9sultat."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Petite d\xe9mo provenant du site officiel"),(0,a.kt)("a",{href:"https://asciinema.org/a/305944",target:"_blank"},(0,a.kt)("img",{src:"https://asciinema.org/a/305944.svg"}))),(0,a.kt)("p",null,"Je connaissais d\xe9j\xe0 l'existence de ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://k8slens.dev/"},"Lens"))," que je trouve lourd et complexe d'utilisation et face \xe0 \xe7a, K9S coche toutes les cases de mes attentes."),(0,a.kt)("p",null,"K9S permet de :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Voir les logs des pods"),(0,a.kt)("li",{parentName:"ul"},"Ouvrir un port vers un pod"),(0,a.kt)("li",{parentName:"ul"},"Voir en Yaml le manifest d'un pod/deployment"),(0,a.kt)("li",{parentName:"ul"},"\xc9diter les configmaps"),(0,a.kt)("li",{parentName:"ul"},"Faire du caf\xe9")),(0,a.kt)("p",null,"K9S fonctionne avec des raccourcis similaires \xe0 ceux de ",(0,a.kt)("strong",{parentName:"p"},"VIM"),". Le binaire ne p\xe8se que quelques m\xe9gaoctets. Et aucune d\xe9pendance n'est requise ",(0,a.kt)("em",{parentName:"p"},"(en dehors du fait de bien poss\xe9der le kubeconfig)"),"."))}m.isMDXComponent=!0}}]);