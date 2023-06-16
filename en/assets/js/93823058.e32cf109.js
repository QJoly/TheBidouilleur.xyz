"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5832],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),s=n(6010),l=n(2957),i=n(6550),o=n(5238),u=n(3609),c=n(2560);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,u]=f({queryString:n,groupId:a}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=o??d;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var b=n(1048);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,s.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=v(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},8732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(4137)),s=n(3992),l=n(425);const i={slug:"dnsmasq",title:"DNS / DHCP avec DNSMASQ",tags:["reseau","dns","infra"]},o=void 0,u={unversionedId:"Adminsys/Dnsmasq",id:"Adminsys/Dnsmasq",title:"DNS / DHCP avec DNSMASQ",description:"Introduction",source:"@site/docs/Adminsys/Dnsmasq.md",sourceDirName:"Adminsys",slug:"/Adminsys/dnsmasq",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/dnsmasq",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/Dnsmasq.md",tags:[{label:"reseau",permalink:"/TheBidouilleur.xyz/en/docs/tags/reseau"},{label:"dns",permalink:"/TheBidouilleur.xyz/en/docs/tags/dns"},{label:"infra",permalink:"/TheBidouilleur.xyz/en/docs/tags/infra"}],version:"current",lastUpdatedAt:1686925317,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{slug:"dnsmasq",title:"DNS / DHCP avec DNSMASQ",tags:["reseau","dns","infra"]},sidebar:"tutorialSidebar",previous:{title:"Docs",permalink:"/TheBidouilleur.xyz/en/docs/intro"},next:{title:"Using libvirt as non-root user",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/rootless-libvirt"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"DHCP",id:"dhcp",level:3},{value:"Bail statique",id:"bail-statique",level:4},{value:"DNS",id:"dns",level:3},{value:"Forcer IP sur un domaine",id:"forcer-ip-sur-un-domaine",level:4},{value:"D\xe9sactiver le DNS",id:"d\xe9sactiver-le-dns",level:4}],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Petite pr\xe9sentation de Wikip\xe9dia :"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dnsmasq est un serveur l\xe9ger con\xe7u pour fournir les services DNS, DHCP, Bootstrap Protocol et TFTP pour un petit r\xe9seau, voire pour un poste de travail. Il permet d'offrir un service de nommage des machines du r\xe9seau interne non int\xe9gr\xe9es au service de nommage global (i.e. le service DNS d'Internet). Le service de nommage est associ\xe9 au service d'adressage de telle mani\xe8re que les machines dont le bail DHCP est fourni par Dnsmasq peuvent avoir automatiquement un nom DNS sur le r\xe9seau interne. Le logiciel offre un service DHCP statique ou dynamique.")),(0,r.kt)("p",null,"En r\xe9sum\xe9, Dnsmasq est un package tout-en-un permettant de cr\xe9er un serveur DNS et DHCP."),(0,r.kt)("admonition",{title:"Article non-pr\xe9vu",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\xc0 la base, je pr\xe9voyais simplement de faire un article sur ",(0,r.kt)("strong",{parentName:"p"},"NetBoot"),". Mais je me suis rendu compte qu'il fallait absolument passer par l'\xe9tape DHCP.\nJ'ai donc \xe9crit \xe0 la va-vite cette documentation en tant que ",(0,r.kt)("em",{parentName:"p"},"base")," pour d'autres documentations.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"alpine",label:"alpine",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apk add dnsmasq\n"))),(0,r.kt)(l.Z,{value:"debian/ubuntu",label:"debian/ubuntu",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt install dnsmasq\n"))),(0,r.kt)(l.Z,{value:"centos/rocky",label:"centos/rocky",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yum install dnsmasq\n")))),(0,r.kt)("h3",{id:"dhcp"},"DHCP"),(0,r.kt)("p",null,"Premi\xe8re chose que l'on peut faire avec Dnsmasq est de d\xe9marrer le serveur DHCP. Le fichier de configuration est \xe0 cet emplacement : ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.conf"),". Par d\xe9faut, celui-ci devrait n'avoir aucune ligne d\xe9comment\xe9e en dehors de celles-ci :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"local-service # ne communiquer qu'avec les machines dans notre r\xe9seau\nconf-dir=/etc/dnsmasq.d/,*.conf # importer les fichiers *.conf dans le dossier /etc/dnsmasq.d/\n")),(0,r.kt)("p",null,"Nous allons cr\xe9er un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.d/dhcp.conf")," pour d\xe9marrer notre DHCP :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"# dhcp.conf\nlisten-address=::1,127.0.0.1,192.168.1.250  # adresses d'\xe9coutes\ndhcp-range=192.168.1.50,192.168.1.150,24h   # Plage d'adresses et dur\xe9e des baux\ndomain=thebidouilleur.xyz                   # domaine\ndhcp-option=1,255.255.255.0                 # masque \ndhcp-option=3,192.168.1.1                   # passerelle\n")),(0,r.kt)("p",null,"Une fois notre fichier cr\xe9\xe9, on peut v\xe9rifier la configuration avec ",(0,r.kt)("inlineCode",{parentName:"p"},"dnsmasq --test"),"."),(0,r.kt)("p",null,"Si aucune erreur n'est trouv\xe9e, nous pouvons lancer le service."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"alpine",label:"alpine",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"service dnsmasq start\n"))),(0,r.kt)(l.Z,{value:"debian/centos",label:"debian/centos",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"systemctl start dnsmasq\n")))),(0,r.kt)("h4",{id:"bail-statique"},"Bail statique"),(0,r.kt)("p",null,"Une fonctionnalit\xe9 basique d'un serveur DHCP est de pouvoir attribuer une IP bien pr\xe9cise \xe0 un h\xf4te."),(0,r.kt)("p",null,"Pour attribuer une IP sp\xe9cifique, il est obligatoire de renseigner l'adresse MAC de la machine. On peut trouver cette adresse via la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"ip a"),", l'interface a choisir est bien \xe9videmment celle qui est pr\xe9sente dans notre r\xe9seau."),(0,r.kt)("p",null,"Si l'h\xf4te est accessible en r\xe9seau, vous pouvez utiliser la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"arp"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c arp 192.168.1.29 \nAdresse                  TypeMap AdresseMat          Indicateurs           Iface\n192.168.1.29             ether   ae:1a:60:8a:73:7a   C                     enp47s0\n")),(0,r.kt)("p",null,"Cette adresse doit se r\xe9f\xe9rencer dans la configuration de Dnsmasq. J'ai cr\xe9\xe9 le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.d/static-ip.conf"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"# /etc/dnsmasq.d/static-ip.conf\ndhcp-host=10:bf:48:8b:6d:cf,192.168.1.20\ndhcp-host=ae:1a:60:8a:73:7a,192.168.1.29\n# Ajoutez autant de ligne que d'IP \xe0 fixer\n")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"alpine",label:"alpine",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"service dnsmasq restart\n"))),(0,r.kt)(l.Z,{value:"debian/centos",label:"debian/centos",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"systemctl restart dnsmasq\n")))),(0,r.kt)("h3",{id:"dns"},"DNS"),(0,r.kt)("p",null,"Par d\xe9faut, d\xe8s que l'instruction ",(0,r.kt)("inlineCode",{parentName:"p"},"listen-address")," est d\xe9finie, le serveur DNS est actif. Pour que dnsmasq soit utilis\xe9 en tant que DNS, il faut bien qu'il soit fourni par le DHCP (ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"server=192.168.1.211"),").\nPour sp\xe9cifier des serveurs DNS \xe0 interroger lorsque ",(0,r.kt)("em",{parentName:"p"},"dnsmasq")," re\xe7oit une requete \xe0 r\xe9soudre, cr\xe9ez un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.d/dns.conf")," avec le contenu suivant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"server=192.168.1.211                        \nserver=1.1.1.1                              \n")),(0,r.kt)("h4",{id:"forcer-ip-sur-un-domaine"},"Forcer IP sur un domaine"),(0,r.kt)("p",null,"Cr\xe9er un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.d/override-dns.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"address=/test.com/127.0.0.1 # pointer test.com vers 127.0.0.1\naddress=/.xyz/127.0.0.1     # pointer le wildcard .xyz vers 127.0.0.1\n")),(0,r.kt)("h4",{id:"d\xe9sactiver-le-dns"},"D\xe9sactiver le DNS"),(0,r.kt)("p",null,'Pour d\xe9sactiver la fonctionnalit\xe9 "DNS" de dnsmasq, il suffit juste de pr\xe9ciser \xe0 utiliser le port 0.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"port=0\n")),(0,r.kt)("p",null,"Mais si jamais vous d\xe9sactivez le DNS, il faudra bien fournir ",(0,r.kt)("strong",{parentName:"p"},"une autre IP")," au DHCP ",(0,r.kt)("em",{parentName:"p"},"(pour que les clients ne se retrouvent pas d\xe9pourvus de DNS)"),".\nDans votre fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.d/dhcp.conf"),", rajoutez la ligne :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"dhcp-option=6,192.168.1.211,192.168.1.1\n")),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"En lien avec cette page",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Adminsys/netbootxyz"},"Cr\xe9er un syst\xe8me de Boot PXE avec Netboot")))))}f.isMDXComponent=!0}}]);