"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7154],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(k,s(s({ref:n},p),{},{components:t})):r.createElement(k,s({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={title:"Tinc - VPN de Mesh"},s=void 0,o={unversionedId:"AdminSys/Tinc",id:"AdminSys/Tinc",title:"Tinc - VPN de Mesh",description:"Introduction",source:"@site/docs/AdminSys/Tinc.md",sourceDirName:"AdminSys",slug:"/AdminSys/Tinc",permalink:"/TheBidouilleur.xyz/docs/AdminSys/Tinc",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/AdminSys/Tinc.md",tags:[],version:"current",frontMatter:{title:"Tinc - VPN de Mesh"},sidebar:"tutorialSidebar",previous:{title:"Installation de la stack Loki",permalink:"/TheBidouilleur.xyz/docs/AdminSys/Loki"},next:{title:"Build Docker multi-architecture",permalink:"/TheBidouilleur.xyz/docs/DevOps/MultiArch Build"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation du serveur",id:"installation-du-serveur",level:3},{value:"Installation d&#39;un client",id:"installation-dun-client",level:3},{value:"Configuration Nix pour rejoindre le r\xe9seau Tinc",id:"configuration-nix-pour-rejoindre-le-r\xe9seau-tinc",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Je dispose de 3 serveurs diff\xe9rents: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Un serveur d\xe9di\xe9 en cloud ",(0,i.kt)("em",{parentName:"li"},"(avec une dizaine de VMs)")),(0,i.kt)("li",{parentName:"ul"},"Un cluster de raspberry \xe0 la maison ",(0,i.kt)("em",{parentName:"li"},"(4 machines)")),(0,i.kt)("li",{parentName:"ul"},"Et un serveur de redondance dans un autre DC")),(0,i.kt)("p",null,"Et juste avec ces machines, \xe7a fait un bon nombre d'acc\xe8s \xe0 g\xe9rer sur ma workstation. De plus, les machines peuvent difficilement communiquer entre elles ",(0,i.kt)("em",{parentName:"p"},"(en local je passe par des redirections ssh)"),", et il m'est impossible de faire communiquer mes machines sans ouvrir un acc\xe8s. "),(0,i.kt)("p",null,"C'est pourquoi j'\xe9tais en pleine recherche d'une solution comme Wireguard en tant que VPN Mesh (",(0,i.kt)("a",{parentName:"p",href:"https://www.scaleway.com/en/docs/tutorials/wireguard-mesh-vpn/"},"exemple ici"),"), et je suis tomb\xe9 sur un article de ZWindler explicant sa solution autour de Tinc. "),(0,i.kt)("p",null,"Cette page n'est qu'une reprise de son tutoriel en r\xe9adaptant certains points. "),(0,i.kt)("h3",{id:"installation-du-serveur"},"Installation du serveur"),(0,i.kt)("p",null,"La machine hote de l'h\xe9bergeur est une VM sur mon d\xe9di\xe9 ayant Debian 11 comme distribution.\nTinc est directement disponible sur les d\xe9pots officiels sans aucune action (pas besoin d'ajouter les paquets unstables) "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt install tinc\n")),(0,i.kt)("p",null,'Dans mon cas, je cr\xe9\xe9 "vpnforky" ',(0,i.kt)("em",{parentName:"p"},"(forky \xe9tant le nom de mon d\xe9di\xe9)"),", celui-ci doit \xeatre d\xe9clar\xe9 dans le fichier nets.boot ",(0,i.kt)("strong",{parentName:"p"},"si vous utilisez sysvinit")," ",(0,i.kt)("em",{parentName:"p"},"(sinon on pourra passer par systemd)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mkdir -p /etc/tinc/vpnforky/hosts\necho "vpnforky" >> /etc/tinc/nets.boot # inutile si vous utilisez systemd\n')),(0,i.kt)("p",null,"Nous allons cr\xe9er le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/tinc/vpnforky/tinc.conf")," pour d\xe9finir le nom de notre machine. (servertinc dans mon cas)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Name = servertinc\nAddressFamily = ipv4\nInterface = tun0\n")),(0,i.kt)("p",null,"Puis on va cr\xe9er le fichier r\xe9pr\xe9sentant notre machine dans le r\xe9seau du VPN ainsi que l'endpoint (ip) accessible par toutes les machines"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Address = 100.100.100.100\nSubnet = 10.0.0.1/32\n")),(0,i.kt)("p",null,"Ce fichier sera complet\xe9 par g\xe9n\xe9ration des cl\xe9s RSA permettant l'authentification des machines du r\xe9seau. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tincd -n vpnforky -K4096\n")),(0,i.kt)("p",null,"Nous allons \xe9galement cr\xe9er 2 scripts Bash pour configurer notre IP Priv\xe9e dans le r\xe9seau mesh.\n/etc/tinc/vpnforky/tinc-up"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nip link set $INTERFACE up\nip addr add 10.0.0.1/32 dev $INTERFACE\nip route add 10.0.0.0/24 dev $INTERFACE\n")),(0,i.kt)("p",null," /etc/tinc/vpnforky/tinc-down"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nip route del 10.0.0.0/24 dev $INTERFACE\nip addr del 10.0.0.1/32 dev $INTERFACE\nip link set $INTERFACE down\n")),(0,i.kt)("p",null,"et rendre ces scripts executales"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 755 /etc/tinc/vpnforky/tinc-*\n")),(0,i.kt)("p",null,"Nous n'avons plus besoin de faire quoique ce soit pour configurer le serveur. (Nous reviendrons un peu plus tard pour autoriser des machines \xe0 se connecter)"),(0,i.kt)("p",null,"On d\xe9marre le VPN"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status tinc@vpnforky\n")),(0,i.kt)("h3",{id:"installation-dun-client"},"Installation d'un client"),(0,i.kt)("p",null,'Maintenant, on va cr\xe9er notre premier hote externe au r\xe9seau. Mon client se nomme "offsite"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt install tinc\nmkdir -p /etc/tinc/vpnforky/hosts\n")),(0,i.kt)("p",null,"On va cr\xe9er notre fichier /etc/tinc/vpnforky/tinc.conf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Name = offsite\nAddressFamily = ipv4\nInterface = tun0\nConnectTo = servertinc\n")),(0,i.kt)("p",null,"Notez que maintenant, nous avons un ConnectTo qui permettra de dire quelle machine est notre serveur. "),(0,i.kt)("p",null,"On cr\xe9\xe9 le fichier hote (qui sera compl\xe9t\xe9 automatiquement)  /etc/tinc/vpnforky/hosts/offsite"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Subnet = 10.0.0.2/32\n")),(0,i.kt)("p",null,"G\xe9n\xe9ration des cl\xe9s"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tincd -n vpnforky -K4096\n")),(0,i.kt)("p",null,"Et comme pour le serveur, on cr\xe9\xe9 les scripts de configuration r\xe9seau\n/etc/tinc/vpnforky/tinc-up"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nip link set $INTERFACE up\nip addr add 10.0.0.2/32 dev $INTERFACE\nip route add 10.0.0.0/24 dev $INTERFACE\n")),(0,i.kt)("p",null," /etc/tinc/vpnforky/tinc-down"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nip route del 10.0.0.0/24 dev $INTERFACE\nip addr del 10.0.0.2/32 dev $INTERFACE\nip link set $INTERFACE down\n")),(0,i.kt)("p",null,"et rendre ces scripts executales"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 755 /etc/tinc/vpnforky/tinc-*\n")),(0,i.kt)("p",null,"Maintenant que notre client est bien configur\xe9, nous allons copier le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/tinc/vpnforky/hosts/offsite")," (",(0,i.kt)("em",{parentName:"p"},"contenant notre IP-VPN et notre certificat"),")  ",(0,i.kt)("strong",{parentName:"p"},"vers")," le dossier /etc/tinc/vpnforky/hosts ",(0,i.kt)("strong",{parentName:"p"},"du serveur Tinc"),". Cela permettra d'authentifier notre machine pour se connecter au r\xe9seau. "),(0,i.kt)("p",null,"Notre machine poss\xe8de bien la bonne IP et on peut maintenant ping dans notre r\xe9seau. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"root@offsite:~# systemctl start tinc@vpnforky\nroot@offsite:~# ping -c 3 10.0.0.1\nPING 10.0.0.1 (10.0.0.1) 56(84) bytes of data.\n64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=157 ms\n64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=156 ms\n64 bytes from 10.0.0.1: icmp_seq=3 ttl=64 time=156 ms\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(Les d\xe9lais sont assez \xe9lev\xe9s, je pense que c'est d\xfb \xe0 ma VM Tinc qui n'est pas puissante, et ne poss\xe8de pas un grand d\xe9bit)")),(0,i.kt)("p",null,"S'il faut ajouter d'autres machines, il faudra suivre la m\xeame proc\xe9dure ",(0,i.kt)("em",{parentName:"p"},"(Installer tinc, g\xe9n\xe9rer certificat et fichier h\xf4te, ajouter le fichier sur le serveur)"),". "),(0,i.kt)("h2",{id:"configuration-nix-pour-rejoindre-le-r\xe9seau-tinc"},"Configuration Nix pour rejoindre le r\xe9seau Tinc"),(0,i.kt)("p",null,"Voici le fichier ",(0,i.kt)("strong",{parentName:"p"},"Nix")," me permettant de rejoindre le VPN avec l'ip ",(0,i.kt)("strong",{parentName:"p"},"10.0.0.101"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'{ config, pkgs, ... }:\n\nlet\n  myMeshIp   = "10.0.0.101";\n  myMeshMask = "255.255.255.255";\n  myMeshName = "vpnforky";\nin {\n\n  networking.firewall.enable = false; # todo : ajouter seulement bon port\n\n  environment.etc = {\n      "tinc/vpnforky/tinc-up".source = pkgs.writeScript "tinc-up-vpnforky" \'\'\n          #!/bin/sh\n          ${pkgs.iproute2}/bin/ip link set $INTERFACE up\n          ${pkgs.iproute2}/bin/ip addr add 10.0.0.101/32 dev $INTERFACE\n          ${pkgs.iproute2}/bin/ip route add 10.0.0.0/24 dev $INTERFACE\n      \'\';\n      "tinc/vpnforky/tinc-down".source = pkgs.writeScript "tinc-down-vpnforky" \'\'\n          #!/bin/sh\n          ${pkgs.iproute2}/bin/ip addr del 10.0.0.101/32 dev $INTERFACE\n          ${pkgs.iproute2}/bin/ip route del 10.0.0.0/24 dev $INTERFACE\n          ${pkgs.iproute2}/bin/ip link set $INTERFACE down\n      \'\';\n  };\n  networking.interfaces."tinc.${myMeshName}".ipv4.addresses = [{ address = myMeshIp; prefixLength = 32; }];\n  services.tinc.networks."${myMeshName}"= {\n\n    name          = "nixwork";      # le nom de notre machine\n\n    debugLevel    = 4;            \n    chroot        = false;       \n    interfaceType = "tap";      \n\n    extraConfig   = \'\'\n      ConnectTo  = servertinc\n      ExperimentalProtocol = yes\n      PrivateKeyFile        = "/etc/tinc/vpnforky/rsa_key.priv" # ce fichier doit avoir +r en permission\n    \'\';\n    hosts = {\n      servertinc = \'\'\n        Address = 100.100.100.100\n        Subnet = 10.0.0.1/32\n\n        -----BEGIN RSA PUBLIC KEY-----\n        censored\n        -----END RSA PUBLIC KEY-----\n        \'\';\n      nixwork = \'\'\n        Subnet  = 10.0.0.101/32\n        -----BEGIN RSA PUBLIC KEY-----\n        censored\n        -----END RSA PUBLIC KEY-----\n \n      \'\';\n\n    };\n  };\n security.sudo.extraRules = [\n    {\n      users    = [ "tinc.vpnforky" ];\n      commands = [\n        {\n          command  = "${pkgs.nettools}/bin/ip";\n          options  = [ "NOPASSWD" ];\n        }\n      ];\n    }\n  ];\n networking.extraHosts = \'\'\n     10.0.0.1 servertinc\n     10.0.0.2 offsite\n  \'\';\n\n}\n')))}u.isMDXComponent=!0}}]);