"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1871],{4137:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>c});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var a=r.createContext({}),u=function(e){var t=r.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(i),c=n,v=m["".concat(a,".").concat(c)]||m[c]||d[c]||o;return i?r.createElement(v,s(s({ref:t},p),{},{components:i})):r.createElement(v,s({ref:t},p))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=i[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},6926:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=i(7462),n=(i(7294),i(4137));const o={slug:"rootless-libvirt",title:"Utiliser libvirt en utilisateur non-root",tags:["virtualisation"]},s=void 0,l={unversionedId:"Adminsys/Libvirt",id:"Adminsys/Libvirt",title:"Utiliser libvirt en utilisateur non-root",description:"Qu\u2019est-ce que libvirt ?",source:"@site/docs/Adminsys/Libvirt.md",sourceDirName:"Adminsys",slug:"/Adminsys/rootless-libvirt",permalink:"/TheBidouilleur.xyz/docs/Adminsys/rootless-libvirt",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/Libvirt.md",tags:[{label:"virtualisation",permalink:"/TheBidouilleur.xyz/docs/tags/virtualisation"}],version:"current",frontMatter:{slug:"rootless-libvirt",title:"Utiliser libvirt en utilisateur non-root",tags:["virtualisation"]},sidebar:"tutorialSidebar",previous:{title:"DNS / DHCP avec DNSMASQ",permalink:"/TheBidouilleur.xyz/docs/Adminsys/dnsmasq"},next:{title:"Loki - Surveillance de logs",permalink:"/TheBidouilleur.xyz/docs/Adminsys/loki"}},a={},u=[{value:"Qu\u2019est-ce que libvirt ?",id:"quest-ce-que-libvirt-",level:2},{value:"Usage de libvirt en rootless",id:"usage-de-libvirt-en-rootless",level:2}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"quest-ce-que-libvirt-"},"Qu\u2019est-ce que libvirt ?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"libvirt est une biblioth\xe8que, une API, un daemon et des outils en logiciel libre de gestion de la virtualisation. Elle est notamment utilis\xe9e par KVM, Xen, VMware ESX, QEMU et d\u2019autres solutions de virtualisation. ")),(0,n.kt)("p",null,"Je suis un adepte de Proxmox comme Hyperviseur, je l\u2019utilise dans mes environnements de \u201cproduction\u201d. Mais lorsque je n\u2019ai pas le besoin d\u2019un tel environnement, je pr\xe9f\xe8re m\u2019orienter vers Libvirt que je trouve plus l\xe9ger et plus agr\xe9able \xe0 utiliser au quotidien.\nAinsi, qu\u2019il s\u2019agisse d\u2019un serveur ou d\u2019une workstation, j\u2019installe toujours libvirt ",(0,n.kt)("em",{parentName:"p"},"(avant m\xeame d\u2019en avoir le besoin)"),". "),(0,n.kt)("p",null,"Cette page vous indiquera les \xe9tapes \xe0 suivre pour utiliser libvirt sur votre workstation sans devoir passer en ",(0,n.kt)("inlineCode",{parentName:"p"},"root"),"."),(0,n.kt)("admonition",{title:"Libvirt est d\xe9j\xe0 rootless",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Libvirt propose d\xe9j\xe0 un socket rootless. L\u2019interet de donner l\u2019acc\xe8s au socket ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu:///system")," ",(0,n.kt)("em",{parentName:"p"},"(uniquement pour root par d\xe9faut)")," est de permettre \xe0 plusieurs utilisateurs d\u2019avoir le m\xeame pool de VM."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"virsh -c qemu:///session list\n"))),(0,n.kt)("h2",{id:"usage-de-libvirt-en-rootless"},"Usage de libvirt en rootless"),(0,n.kt)("p",null,"Nous n\u2019allons pas permettre \xe0 votre utilisateur de se connecter au socket Libvirt system directement. En revanche, nous allons modifier ses permissions pour permettre \xe0 un groupe complet d\u2019y avoir acc\xe8s.\nCe groupe sera ",(0,n.kt)("inlineCode",{parentName:"p"},"libvirt"),", qui devrait d\xe9j\xe0 \xeatre pr\xe9sent sur votre machine."),(0,n.kt)("p",null,"V\xe9rifiez l\u2019existence du groupe ",(0,n.kt)("inlineCode",{parentName:"p"},"libvirt"),": "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u25aagrep libvirt /etc/group\nlibvirt:x:138:libvirtdbus\nlibvirt-qemu:x:64055:libvirt-qemu\nlibvirt-dnsmasq:x:139:\nlibvirtdbus:x:141:\n")),(0,n.kt)("p",null,"Si jamais le groupe n\u2019existe pas, vous devrez le cr\xe9er via la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo groupadd --system libvirt"),". "),(0,n.kt)("p",null,"Ensuite, Ajoutez votre utilisateur au groupe ",(0,n.kt)("inlineCode",{parentName:"p"},"libvirt")," ",(0,n.kt)("em",{parentName:"p"},"(dans mon cas, mon utilisateur est "),"kiko",(0,n.kt)("em",{parentName:"p"},")")," : ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo usermod -a -G libvirt kiko")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"V\xe9rifiez que votre utilisateur est bien dans le groupe ",(0,n.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"libvirt")),(0,n.kt)("p",{parentName:"admonition"},"La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," n\u2019affichera pas de suite la modification, tentez plus un ",(0,n.kt)("inlineCode",{parentName:"p"},"id $(whoami)"))),(0,n.kt)("p",null,"Une fois que notre utilisateur bien pr\xe9sent dans le groupe ",(0,n.kt)("inlineCode",{parentName:"p"},"libvirt"),", nous allons indiquer \xe0 libvirt que le socket devrait avoir des permissions\nDans le fichier ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/libvirt/libvirtd.conf"),", d\xe9commettez ces deux lignes\xa0: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},'unix_sock_group = "libvirt"\nunix_sock_rw_perms = "0770"\n')),(0,n.kt)("p",null,"Maintenant, il te reste qu\u2019\xe0 red\xe9marrer le service libvirt : ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart libvirtd.service")),(0,n.kt)("p",null,"Pour tester : ",(0,n.kt)("inlineCode",{parentName:"p"},"virsh -c qemu:///system list")))}d.isMDXComponent=!0}}]);