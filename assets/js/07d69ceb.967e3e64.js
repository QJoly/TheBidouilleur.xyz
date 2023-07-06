"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1529],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(4137));const a={title:"Blinky - Un petit girophare connect\xe9",slug:"blinky",description:"Blinky est un petit gyrophare connect\xe9 par Enix qui peut vous faciliter la vie durant vos astreintes"},o=void 0,s={permalink:"/TheBidouilleur.xyz/blog/blinky",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2023-06-29-Blinky/index.md",source:"@site/blog/2023-06-29-Blinky/index.md",title:"Blinky - Un petit girophare connect\xe9",description:"Blinky est un petit gyrophare connect\xe9 par Enix qui peut vous faciliter la vie durant vos astreintes",date:"2023-06-29T00:00:00.000Z",formattedDate:"29 juin 2023",tags:[],readingTime:4.51,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Blinky - Un petit girophare connect\xe9",slug:"blinky",description:"Blinky est un petit gyrophare connect\xe9 par Enix qui peut vous faciliter la vie durant vos astreintes"},nextItem:{title:"QuteBrowser - Un navigateur bas\xe9 sur Vim",permalink:"/TheBidouilleur.xyz/blog/QuteBrowser"}},l={authorsImageUrls:[]},u=[{value:"Le Blinky",id:"le-blinky",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Int\xe9gration",id:"int\xe9gration",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Gr\xe2ce \xe0 ",(0,r.kt)("a",{parentName:"p",href:"https://blog.zwindler.fr/2023/06/16/reverse-blinky-enix-part1/"},"ZWindler et sa s\xe9rie de threads Twitter \xe0 propos du reverse d'un petit appareil connect\xe9"),", j'ai d\xe9couvert le projet Blinky. Il s'agit d'un petit gyrophare connect\xe9 qui peut vous faciliter la vie durant vos astreintes."),(0,r.kt)("admonition",{title:"En B\xeata !",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Le projet Blinky est encore en cours de d\xe9veloppement, il est donc possible que certaines choses changent d'ici la sortie de la version d\xe9finitive.")),(0,r.kt)("p",null,"J'ai alors d\xe9cid\xe9 de remplir le ",(0,r.kt)("a",{parentName:"p",href:"https://www.getblinky.io/"},"formulaire pour \xeatre b\xeata-testeur")," et j'ai re\xe7u le mien 1-2 semaines plus tard."),(0,r.kt)("p",null,"Pendant le d\xe9lai d'attente, j'ai commenc\xe9 \xe0 regarder et \xe0 me renseigner ",(0,r.kt)("em",{parentName:"p"},"(via le thread de ZWindler et en posant des questions)")," sur le fonctionnement de l'appareil et sur les possibilit\xe9s qu'il offre."),(0,r.kt)("p",null,"J'ai eu le temps de m'amuser sur MicroPython ",(0,r.kt)("em",{parentName:"p"},"(Firmware pour lancer du Python sur ESP32)"),", je pr\xe9pare une page dessus pour vous montrer ce que j'ai fait, mais avant \xe7a : on va parler du Blinky !"),(0,r.kt)("h2",{id:"le-blinky"},"Le Blinky"),(0,r.kt)("p",null,"Le Blinky est pens\xe9, produit et d\xe9velopp\xe9 par ",(0,r.kt)("a",{parentName:"p",href:"https://www.enix.io/fr"},"Enix"),", une soci\xe9t\xe9 de services informatiques ",(0,r.kt)("em",{parentName:"p"},"(SSII)")," qui propose des services d'infog\xe9rance, de conseil et d'expertise principalement autour du cloud et de Kubernetes. Ils proposent r\xe9guli\xe8rement des talks et des formations sur ces sujets."),(0,r.kt)("p",null,"De ce que j'ai compris, ils ont d\xe9velopp\xe9 une arm\xe9e de gyrophares connect\xe9s pour notifier d'\xe9ventuels probl\xe8mes/\xe9v\xe8nements sur les infrastructures de leurs clients."),(0,r.kt)("p",null,"L'id\xe9e me pla\xeet beaucoup, et je trouve \xe7a tr\xe8s malin de leur part et peut-\xeatre m\xeame un peu plus efficace que les traditionnels mails. ",(0,r.kt)("em",{parentName:"p"},"(Qui sont souvent noy\xe9s dans la masse)")),(0,r.kt)("p",null,"Une fois le Blinky re\xe7u, j'ai pu le tester et le configurer. Je vais vous montrer comment faire."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Blinky + Mon Bureau = &lt;3",src:n(2080).Z,width:"4608",height:"3456"})),(0,r.kt)("p",null,"La connexion au Blinky se fait via WebSerial, un peu comme l'IDE Arduino ou PlatformIO. Il faut donc utiliser un navigateur compatible, comme Chromium ou Edge. Il vous faudra vous rendre sur la page de configuration du Blinky et cr\xe9er un compte\xa0: ",(0,r.kt)("a",{parentName:"p",href:"https://app.getblinky.io"},"app.getblinky.io"),"."),(0,r.kt)("p",null,"D\xe8s la premi\xe8re connexion, le Blinky va vous demander de le configurer. Il faut alors se connecter \xe0 un r\xe9seau WiFi et renseigner les informations de connexion depuis la page de configuration du Blinky."),(0,r.kt)("admonition",{title:"Fr\xe9quence WiFi",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\xe0 noter que le Blinky ne supporte que les fr\xe9quences 2.4GHz ",(0,r.kt)("em",{parentName:"p"},"(cela est d\xfb \xe0 la puce ESP32 qu'il embarque)")," et ne supporte pas les fr\xe9quences 5GHz.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Association WiFi",src:n(398).Z,width:"833",height:"562"})),(0,r.kt)("p",null,"Le Blinky va se connecter \xe0 votre Wifi et vous pourrez l'associer \xe0 une organisation. ",(0,r.kt)("em",{parentName:"p"},"(Si vous n'en avez pas, vous pouvez en cr\xe9er une)")),(0,r.kt)("p",null,"\xe0 retenir que la LED du dessus affiche le statut de connexion au WiFi et que celle du dessous affiche les animations de notification."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Au d\xe9marrage, voici ces diff\xe9rentes animations (attention aux \xe9pileptiques) pour vous informer si le Blinky se connecte bien \xe0 votre WiFi:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Animation au d\xe9marrage du Blinky",src:n(5763).Z,width:"600",height:"338"})),(0,r.kt)("p",null,"\xc0 la fin de l'initialisation, la LED du dessus devrait \xeatre verte. L'\xe9quipe d'Enix a pr\xe9vu une am\xe9lioration pour s'assurer que la LED du dessus ne puisse pas se voir depuis la partie blanche. Pour l'instant, j'envisage de d\xe9monter le Blinky et rajouter une impression 3D ou un peu de scotch noir pour \xe9viter que la lumi\xe8re ne se diffuse trop."),(0,r.kt)("p",null,"Et, une fois connect\xe9, vous pouvez cr\xe9er des animations depuis un \xe9diteur en ligne et les pr\xe9visualiser sur votre navigateur ",(0,r.kt)("em",{parentName:"p"},"(J'aurais aim\xe9 pouvoir les pr\xe9visualiser directement sur le Blinky, mais ce n'est pas encore possible)"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Editeur d&#39;animations",src:n(9748).Z,width:"2216",height:"743"})),(0,r.kt)("p",null,"L'\xe9diteur est tr\xe8s simple \xe0 utiliser et permet de cr\xe9er des animations tr\xe8s rapidement, mais je ne peux pas m'emp\xeacher de penser \xe0 un \xe9diteur plus avanc\xe9 qui permettrait de cr\xe9er des animations \xe0 partir de code mais je peux comprendre que ce ne soit pas la priorit\xe9."),(0,r.kt)("p",null,"Pour l'instant, les couleurs visibles sur le site ne sont pas les m\xeames que celles affich\xe9es sur le Blinky ",(0,r.kt)("em",{parentName:"p"},"(ex avec un Blinky Rouge qui est plut\xf4t rose)"),", mais cela devrait \xeatre corrig\xe9 dans une prochaine version."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Un rouge pas tr\xe8s rouge",src:n(2402).Z,width:"4608",height:"3456"})),(0,r.kt)("h2",{id:"int\xe9gration"},"Int\xe9gration"),(0,r.kt)("p",null,"Il est important de noter que le Blinky seul ne va pas se connecter \xe0 vos services pour r\xe9cup\xe9rer des informations. C'est l'application externe ",(0,r.kt)("em",{parentName:"p"},"(app.getblinky.io)")," qui va envoyer l'instruction au Blinky pour qu'il affiche une animation. ",(0,r.kt)("em",{parentName:"p"},"(Peut-\xeatre un jour une version auto-h\xe9bergeable pour les services sensibles ?)")),(0,r.kt)("p",null,"La principale int\xe9gration est celle du WebHook:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"WebHook",src:n(8604).Z,width:"877",height:"451"})),(0,r.kt)("p",null,"Une requ\xe8te ",(0,r.kt)("em",{parentName:"p"},"(POST ou GET, \xe7a revient au m\xeame)")," est envoy\xe9e \xe0 l'URL du WebHook et l'animation li\xe9e est jou\xe9e sur le Blinky."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Petite id\xe9e : Un webhook g\xe9n\xe9rique qui permettrait de choisir l'animation \xe0 jouer en fonction du JSON envoy\xe9 (m\xeame id\xe9e pour choisir le groupe de Blinky)"),"."),(0,r.kt)("p",null,"L'int\xe9gration Prometheus se fait \xe0 partir de AlertManager. Celle-ci s'appuie sur un Webhook et peut avoir des labels en tant que conditions. Cela permet de faire des notifications diff\xe9rentes en fonction de l'importance de l'alerte."),(0,r.kt)("p",null,"Je n'ai pas encore eu l'occasion de tester, mais \xe7a sera fait prochainement."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Prometheus",src:n(9789).Z,width:"2362",height:"784"})),(0,r.kt)("p",null,"Et, pour finir, l'int\xe9gration avec Gitlab ",(0,r.kt)("em",{parentName:"p"},"(qui supporte plusieurs animations en fonction de l'\xe9v\xe8nement)")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Int\xe9gration Gitlab",src:n(2724).Z,width:"1094",height:"809"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Test\xe9 et approuv\xe9 !)"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Pleins d'am\xe9liorations sont pr\xe9vus pour le Blinky, que \xe7a soit les possibilit\xe9s d'int\xe9gration ou le design de l'appareil. Je suis tr\xe8s content de l'avoir re\xe7u et je suis impatient de voir ce que l'\xe9quipe d'Enix va nous proposer."),(0,r.kt)("p",null,"J'ai personnellement vraiment h\xe2te de la sortie du SDK pour pouvoir le bidouiller un peu plus en profondeur et voir de nouvelles int\xe9grations comme Zabbix, Home-assistant, Gotify ou m\xeame un petit serveur MQTT."))}d.isMDXComponent=!0},2080:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Blinky-bureau-16924abfe1c6b95528f415d8ab46eb54.jpg"},9789:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Prometheus-integration-7b3a9b4f2dac4b097c9c9a82ef399e92.png"},2402:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Rose-PasRouge-bc1593e898dfa68dd145c1a4a9a51313.jpg"},398:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/associate-blinky-929b0ae6aee356913a97925a0c7485c0.png"},2724:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gitlab-26e0e4dabb44a261a32179fd64f9977b.png"},9748:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pattern-creator-deffe77ced760ba129219632201b7d1a.gif"},5763:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/start-animation-6e4c6793d4b5342170bc4d19555e32e3.gif"},8604:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/webhook-example-695659e356dd37551d9b541da49f8208.png"}}]);