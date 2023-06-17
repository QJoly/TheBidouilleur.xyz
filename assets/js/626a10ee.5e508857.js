"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4798],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(7462),o=(r(7294),r(4137));const a={slug:"presentation-docker-swarm",title:"Pr\xe9sentation rapide de Docker-Swarm",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["docker","swarm","containers","cluster"]},i=void 0,u={permalink:"/TheBidouilleur.xyz/blog/presentation-docker-swarm",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2021-06-29-docker-swarm/index.md",source:"@site/blog/2021-06-29-docker-swarm/index.md",title:"Pr\xe9sentation rapide de Docker-Swarm",description:"Introduction",date:"2021-06-29T00:00:00.000Z",formattedDate:"29 juin 2021",tags:[{label:"docker",permalink:"/TheBidouilleur.xyz/blog/tags/docker"},{label:"swarm",permalink:"/TheBidouilleur.xyz/blog/tags/swarm"},{label:"containers",permalink:"/TheBidouilleur.xyz/blog/tags/containers"},{label:"cluster",permalink:"/TheBidouilleur.xyz/blog/tags/cluster"}],readingTime:5.185,hasTruncateMarker:!0,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"presentation-docker-swarm",title:"Pr\xe9sentation rapide de Docker-Swarm",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["docker","swarm","containers","cluster"]},prevItem:{title:"Mon voyage autour des loadbalancers",permalink:"/TheBidouilleur.xyz/blog/caddy"}},l={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Le monde de la conteneurisation a apport\xe9 de nombreuses choses dans l'administration syst\xe8me, et a actualis\xe9 le concept de DevOps. Mais une des choses principales que nous apporte les conteneurs (et particuli\xe8rement Docker), c'est ",(0,o.kt)("strong",{parentName:"p"},"l'automatisation"),".\nEt bien que Docker soit d\xe9j\xe0 complet avec le d\xe9ploiement de service, on peut aller un peu plus loin en automatisant la gestion des conteneurs ! Et pour r\xe9pondre \xe0 \xe7a : ",(0,o.kt)("em",{parentName:"p"},"Docker Inc.")," propose un outil adapt\xe9 pour l'orchestration automatique d'instance : ",(0,o.kt)("strong",{parentName:"p"},"Docker Swarm"),"."))}m.isMDXComponent=!0}}]);