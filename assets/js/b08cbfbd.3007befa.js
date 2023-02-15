"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7462),a=n(7294),o=n(6010),s=n(2466),i=n(6775),l=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=b({queryString:n,groupId:r}),[c,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var f=n(2389);const g="tabList__CuJ",h="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==i&&(c(t),l(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",h,null==s?void 0:s.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},3523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),s=n(5162);const i={slug:"netbootxyz",title:"Boot PXE avec netboot",tags:["reseau","infra","dns"],description:"NetBoot est un utilitaire permettant de faciliter la cr\xe9ation d'un boot PXE. Nous allons voir comment d\xe9ployer NetBoot et garder les assets en local."},l=void 0,u={unversionedId:"Adminsys/netboot.xyz",id:"Adminsys/netboot.xyz",title:"Boot PXE avec netboot",description:"NetBoot est un utilitaire permettant de faciliter la cr\xe9ation d'un boot PXE. Nous allons voir comment d\xe9ployer NetBoot et garder les assets en local.",source:"@site/docs/Adminsys/netboot.xyz.md",sourceDirName:"Adminsys",slug:"/Adminsys/netbootxyz",permalink:"/TheBidouilleur.xyz/docs/Adminsys/netbootxyz",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/netboot.xyz.md",tags:[{label:"reseau",permalink:"/TheBidouilleur.xyz/docs/tags/reseau"},{label:"infra",permalink:"/TheBidouilleur.xyz/docs/tags/infra"},{label:"dns",permalink:"/TheBidouilleur.xyz/docs/tags/dns"}],version:"current",frontMatter:{slug:"netbootxyz",title:"Boot PXE avec netboot",tags:["reseau","infra","dns"],description:"NetBoot est un utilitaire permettant de faciliter la cr\xe9ation d'un boot PXE. Nous allons voir comment d\xe9ployer NetBoot et garder les assets en local."},sidebar:"tutorialSidebar",previous:{title:"Cr\xe9er son d\xe9pot Debian",permalink:"/TheBidouilleur.xyz/docs/Adminsys/creer-repo-debian"},next:{title:"Stocker des secrets dans un d\xe9p\xf4t Git",permalink:"/TheBidouilleur.xyz/docs/Adminsys/sops"}},p={},c=[{value:"Qu\u2019est-ce que le PXE ?",id:"quest-ce-que-le-pxe-",level:2},{value:"NetBoot.xyz",id:"netbootxyz",level:2},{value:"Installer NetBoot",id:"installer-netboot",level:2},{value:"Avec Ansible",id:"avec-ansible",level:3},{value:"Avec Docker",id:"avec-docker",level:3},{value:"Configurer le DHCP pour un d\xe9marrage PXE",id:"configurer-le-dhcp-pour-un-d\xe9marrage-pxe",level:2},{value:"Usage de NetBoot",id:"usage-de-netboot",level:2},{value:"Utiliser ses assets locaux",id:"utiliser-ses-assets-locaux",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"quest-ce-que-le-pxe-"},"Qu\u2019est-ce que le PXE ?"),(0,a.kt)("p",null,"Avant de d\xe9marrer la technique, petite explication des termes : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Le ",(0,a.kt)("strong",{parentName:"li"},"PXE")," ",(0,a.kt)("em",{parentName:"li"},"(Preboot Execution Environment)")," est une technologie permettant d\u2019amorcer une partition de d\xe9marrage via le r\xe9seau ",(0,a.kt)("em",{parentName:"li"},"(et notamment via le protocole TFTP)"),". "),(0,a.kt)("li",{parentName:"ul"},"L\u2019",(0,a.kt)("strong",{parentName:"li"},"IPXE")," est un fork de PXE proposant des fonctionnalit\xe9s suppl\xe9mentaires comme le chiffrement, l\u2019usage du ",(0,a.kt)("strong",{parentName:"li"},"SAN")," / ",(0,a.kt)("strong",{parentName:"li"},"HTTP")," comme protocole, et permet d\u2019utiliser un langage de scripting ! ")),(0,a.kt)("p",null,"Voici un exemple de fichier ",(0,a.kt)("inlineCode",{parentName:"p"},".ipxe")," pour d\xe9marrer sur un Debian 9 ",(0,a.kt)("em",{parentName:"p"},"(Source : ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/AdrianKoshka/ipxe-scripts/blob/master/boot/linux/debian.ipxe"},"D\xe9p\xf4t Github"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"isset ${server-ip} || set server-ip 192.168.1.137\n\n:start\n#console --picture http://boot.ipxe.org/ipxe.png\nmenu debian\nitem --gap --             ---------------------- Net installer -----------------------------\nitem --key 3 Debian9_x86 Debian 9 (3)2-bit net install\nitem --key 6 Debian9_x86_64 Debian 9 (6)4-bit net install\nitem --gap --             ------------------------- Options --------------------------------\nitem --key g goback (G)o back to previous menu\nchoose version && goto ${version} || goto start\n\n:Debian9_x86\necho Booting Debian 9 32-bit\nkernel http://deb.debian.org/debian/dists/stretch/main/installer-i386/current/images/netboot/debian-installer/i386/linux initrd=initrd.gz\ninitrd http://deb.debian.org/debian/dists/stretch/main/installer-i386/current/images/netboot/debian-installer/i386/initrd.gz\nboot || imgfree\ngoto start\n\n:Debian9_x86_64\necho Booting Debian 9 64-bit\nkernel http://deb.debian.org/debian/dists/stretch/main/installer-amd64/current/images/netboot/debian-installer/amd64/linux initrd=initrd.gz\ninitrd http://deb.debian.org/debian/dists/stretch/main/installer-amd64/current/images/netboot/debian-installer/amd64/initrd.gz\nboot || imgfree\ngoto start\n\n:goback\nchain http://${server-ip}/boot/linux.ipxe\n")),(0,a.kt)("h2",{id:"netbootxyz"},"NetBoot.xyz"),(0,a.kt)("p",null,"NetBoot est un site proposant de d\xe9marrer sur un menu sur lequel nous allons choisir diff\xe9rents syst\xe8mes sur lequel booter. (",(0,a.kt)("em",{parentName:"p"},"via des scripts ipxe"),")\nCette solution est pratique lorsque nous n\u2019avons pas moyen d\u2019avoir une cl\xe9 USB bootable et que l\u2019on doit installer un syst\xe8me ",(0,a.kt)("em",{parentName:"p"},"from scratch"),"."),(0,a.kt)("p",null,"Sur certains syst\xe8mes, il est possible de fournir des scripts d\u2019installations ",(0,a.kt)("em",{parentName:"p"},"(ex\xa0: preseed pour debian, kickstart pour rockylinux)"),"."),(0,a.kt)("p",null,"NetBoot permet d\u2019utiliser plusieurs m\xe9thodes d\u2019amor\xe7age sur une machine ",(0,a.kt)("em",{parentName:"p"},"(TFTP, via ISO, IPXE, depuis GRUB)"),", vous trouverez ces m\xe9thodes ",(0,a.kt)("a",{parentName:"p",href:"https://netboot.xyz/docs/category/booting-methods"},"ici")),(0,a.kt)("p",null,"en IPXE voici les commandes \xe0 taper\xa0: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dhcp\nchain --autofree https://boot.netboot.xyz\n")),(0,a.kt)("p",null,"Cet usage peut suffire. Mais dans cette documentation, nous allons utiliser la partie ",(0,a.kt)("em",{parentName:"p"},"selfhost")," de NetBoot pour \xeatre ind\xe9pendant du site."),(0,a.kt)("h2",{id:"installer-netboot"},"Installer NetBoot"),(0,a.kt)("h3",{id:"avec-ansible"},"Avec Ansible"),(0,a.kt)("p",null,"NetBoot fourni un ",(0,a.kt)("em",{parentName:"p"},"role Ansible")," pour l\u2019installation. ",(0,a.kt)("em",{parentName:"p"},"(Solution que je n\u2019ai pas utilis\xe9)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/netbootxyz/netboot.xyz.git /opt/netboot.xyz\ncd /opt/netboot.xyz\nansible-playbook -i inventory site.yml # par d\xe9faut, s'installe sur la machine directement (et non par ssh)\n")),(0,a.kt)("h3",{id:"avec-docker"},"Avec Docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'---\nversion: "2.1"\nservices:\n  netbootxyz:\n    image: ghcr.io/netbootxyz/netbootxyz\n    container_name: netbootxyz\n    volumes:\n      - ./config:/config # optional\n      - ./assets:/assets # optional\n    ports:\n      - 3000:3000\n      - 69:69/udp\n      - 80:80 #optional\n    restart: unless-stopped\n')),(0,a.kt)("p",null,"L\u2019interface WEB est disponible sur le port 3000. (",(0,a.kt)("em",{parentName:"p"},"192.168.1.137:3000"),")"),(0,a.kt)("h2",{id:"configurer-le-dhcp-pour-un-d\xe9marrage-pxe"},"Configurer le DHCP pour un d\xe9marrage PXE"),(0,a.kt)("p",null,"Il faudra avoir les pleins-pouvoirs sur votre DHCP. ",(0,a.kt)("em",{parentName:"p"},"(Je pr\xe9cise puisque ma pauvre livebox ne me permet pas de modifier mes options DHCP par d\xe9faut)"),"\nSi ce n\u2019est pas le cas, je vous invite \xe0 suivre ",(0,a.kt)("a",{parentName:"p",href:"/docs/Adminsys/dnsmasq"},"cette documentation pour cr\xe9er votre propre serveur DHCP avec Dnsmasq"),"."),(0,a.kt)("p",null,"Sur mon DHCP, je cr\xe9e le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/dnsmasq.d/pxe-boot.conf")," qui va indiquer le fichier de d\xe9marrage et le serveur TFTP sur lequel d\xe9marrer\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"dhcp-boot=netboot.xyz.kpxe,pxeserver,192.168.1.137\n")),(0,a.kt)("admonition",{title:"Fichier de d\xe9marrage\u202f? ",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Les fichiers disponibles sont expliqu\xe9s sur le site :\n",(0,a.kt)("img",{alt:"Tableau Fichiers D\xe9marrages Disponibles",src:n(2749).Z,width:"898",height:"650"}))),(0,a.kt)("p",null,"Ensuite, red\xe9marrez votre dnsmasq : "),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"alpine",label:"alpine",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"service dnsmasq restart\n"))),(0,a.kt)(s.Z,{value:"debian/centos",label:"debian/centos",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl restart dnsmasq\n")))),(0,a.kt)("p",null,"Maintenant, notre DHCP va bien renvoyer vers notre serveur TFTP (",(0,a.kt)("em",{parentName:"p"},"netboot"),"). Pour v\xe9rifier que \xe7a soit bien le cas, je vous invite \xe0 passer par un ",(0,a.kt)("strong",{parentName:"p"},"script nmap")," : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c sudo nmap --script broadcast-dhcp-discover\nStarting Nmap 7.80 ( https://nmap.org ) at 2023-02-05 09:14 CET\nPre-scan script results:\n| broadcast-dhcp-discover: \n|   Response 1 of 1: \n|     IP Offered: 192.168.1.67\n|     DHCP Message Type: DHCPOFFER\n|     Server Identifier: 192.168.1.250\n|     IP Address Lease Time: 2m00s\n|     TFTP Server Name: pxeserver\\x00\n|     Bootfile Name: netboot.xyz.kpxe\\x00\n|     Renewal Time Value: 1m00s\n|     Rebinding Time Value: 1m45s\n|     Subnet Mask: 255.255.255.0\n|     Broadcast Address: 192.168.1.255\n|     Domain Name Server: 192.168.1.250\n|     Domain Name: thebidouilleur.xyz\n|_    Router: 192.168.1.1\n")),(0,a.kt)("p",null,"On ne peut pas voir l\u2019IP du serveur TFTP directement ",(0,a.kt)("em",{parentName:"p"},"(Apparemment, il manque une ligne dans le script, voici le ",(0,a.kt)("a",{parentName:"em",href:"https://serverfault.com/a/996093"},"lien d\u2019une r\xe9ponse Stack Overflow si le sujet vous int\xe9resse"),")")),(0,a.kt)("p",null,"Maintenant, on peut d\xe9marrer en PXE sur une machine ! "),(0,a.kt)("h2",{id:"usage-de-netboot"},"Usage de NetBoot"),(0,a.kt)("p",null,"Pour les tests, je passe par des machines virtuelles sur mon Proxmox local."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Amor\xe7age PXE",src:n(5513).Z,width:"1063",height:"542"})),(0,a.kt)("p",null,"On peut d\xe9marrer sur les live-CD/syst\xe8mes propos\xe9s \xe0 partir de cette \xe9tape. Notre NetBoot va communiquer avec le d\xe9p\xf4t GitHub du logiciel ainsi que par le site boot.netboot.xyz."),(0,a.kt)("p",null,"Mais pour \xeatre totalement ind\xe9pendant des serveurs ",(0,a.kt)("em",{parentName:"p"},"(& d\xe9p\xf4t)")," de NetBoot, il va falloir r\xe9aliser ces prochaines \xe9tapes : "),(0,a.kt)("h2",{id:"utiliser-ses-assets-locaux"},"Utiliser ses assets locaux"),(0,a.kt)("p",null,"Si netboot est bien pratique, je me vois mal utiliser \xe7a dans un b\xe2timent de 300 postes en priant pour que la bande passante suffise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-config"},"# set boot domain\nset boot_domain 192.168.1.137\n# ...\n# set location of custom netboot.xyz live assets\nset live_endpoint http://192.168.1.137\n...\n")),(0,a.kt)("p",null,"Ainsi, netboot utilisera ",(0,a.kt)("strong",{parentName:"p"},"notre")," instance, ainsi que ",(0,a.kt)("strong",{parentName:"p"},"nos assets"),". Il est donc important de t\xe9l\xe9charger les fichiers utiles aux distributions/outils sur lequel nous voudrons amorcer nos syst\xe8mes."),(0,a.kt)("p",null,"Dans l\u2019onglet ",(0,a.kt)("strong",{parentName:"p"},"Local Assets"),", il suffira de cocher les fichiers \xe0 r\xe9cup\xe9rer en local. "),(0,a.kt)("p",null,"Ainsi, pour pouvoir d\xe9marrer un clonezilla en version ubuntu depuis notre netboot, il faudra t\xe9l\xe9charger ces fichiers :\n",(0,a.kt)("img",{alt:"Local Assets pour clonezilla-ubuntu",src:n(2938).Z,width:"1579",height:"192"})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Netboot est une solution tr\xe8s compl\xe8te nous permettant d\u2019installer plusieurs machines en m\xeame via un support bien plus moderne qu\u2019une cl\xe9 USB. Celui-ci propose une solution fonctionnelle sans devoir h\xe9berger quoique ce soit, mais nous laisse la possibilit\xe9 de devenir ind\xe9pendant en r\xe9cup\xe9rant les assets sur notre serveur."),(0,a.kt)("p",null,"Ayant d\xe9j\xe0 \xe9t\xe9 dans le cas o\xf9 je devais installer de nombreux postes le plus rapidement possible, je peux maintenir r\xe9it\xe9rer l\u2019exp\xe9rience sans probl\xe8me ",(0,a.kt)("em",{parentName:"p"},"(et notamment avec l\u2019usage de preseed/kickstart)"),"."),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"En lien avec cette page",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Adminsys/dnsmasq"},"Cr\xe9er un DNS/DHCP avec DNSMASQ")))))}m.isMDXComponent=!0},5513:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/demarrage_pxe-1b017d00d5732ab929e701c18b18f0dc.gif"},2938:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/netboot-assets-9000472e3aabafd244766be9c85260b3.png"},2749:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/netboot-filetype-fcfd66ea8949e4b15036734f527bcd40.png"}}]);