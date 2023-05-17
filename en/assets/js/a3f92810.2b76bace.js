"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2161],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(n),c=r,b=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(b,s(s({ref:t},u),{},{components:n})):a.createElement(b,s({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=n(7462),r=(n(7294),n(4137));const l={slug:"creer-repo-debian",title:"Cr\xe9er son d\xe9pot Debian",tags:["debian","infra"],description:"Lorsque nous avons de nombreux serveurs, il convient d'automatiser chacun des d\xe9ploiements que nous r\xe9alisons. Et lorsque la majorit\xe9 sont sous Debian, ces d\xe9ploiements peuvent prendre la forme de fichiers .deb. Nous verrons donc sur cette page comment cr\xe9er notre propre d\xe9p\xf4t Debian"},s=void 0,o={unversionedId:"Adminsys/creer-repo-debian",id:"Adminsys/creer-repo-debian",title:"Cr\xe9er son d\xe9pot Debian",description:"Lorsque nous avons de nombreux serveurs, il convient d'automatiser chacun des d\xe9ploiements que nous r\xe9alisons. Et lorsque la majorit\xe9 sont sous Debian, ces d\xe9ploiements peuvent prendre la forme de fichiers .deb. Nous verrons donc sur cette page comment cr\xe9er notre propre d\xe9p\xf4t Debian",source:"@site/docs/Adminsys/creer-repo-debian.md",sourceDirName:"Adminsys",slug:"/Adminsys/creer-repo-debian",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/creer-repo-debian",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/creer-repo-debian.md",tags:[{label:"debian",permalink:"/TheBidouilleur.xyz/en/docs/tags/debian"},{label:"infra",permalink:"/TheBidouilleur.xyz/en/docs/tags/infra"}],version:"current",frontMatter:{slug:"creer-repo-debian",title:"Cr\xe9er son d\xe9pot Debian",tags:["debian","infra"],description:"Lorsque nous avons de nombreux serveurs, il convient d'automatiser chacun des d\xe9ploiements que nous r\xe9alisons. Et lorsque la majorit\xe9 sont sous Debian, ces d\xe9ploiements peuvent prendre la forme de fichiers .deb. Nous verrons donc sur cette page comment cr\xe9er notre propre d\xe9p\xf4t Debian"},sidebar:"tutorialSidebar",previous:{title:"Create your own Debian packages",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/creer-deb"},next:{title:"Boot PXE avec netboot",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/netbootxyz"}},p={},i=[{value:"Introduction",id:"introduction",level:2},{value:"Qu&#39;est-ce qu&#39;Aptly ?",id:"quest-ce-quaptly-",level:2},{value:"G\xe9n\xe9ration Couple GPG (Optionnel)",id:"g\xe9n\xe9ration-couple-gpg-optionnel",level:2},{value:"Installer Aptly",id:"installer-aptly",level:2},{value:"Cr\xe9er votre d\xe9p\xf4t priv\xe9",id:"cr\xe9er-votre-d\xe9p\xf4t-priv\xe9",level:2},{value:"Exposer le d\xe9p\xf4t",id:"exposer-le-d\xe9p\xf4t",level:2},{value:"Faire du Nettoyage",id:"faire-du-nettoyage",level:2}],u={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Debian est la distribution la plus utilis\xe9e et connue. En tant que Workstation ",(0,r.kt)("em",{parentName:"p"},"(Via Ubuntu Desktop)")," ou en serveur, nous n'avons de cesse d'utiliser Debian dans notre quotidien. Et si Debian est si forte, c'est avant-tout gr\xe2ce au nombre de personnes qui s'en servent et font vivre la suite de logiciels disponibles sur cette distribution."),(0,r.kt)("p",null,"Et si installer un programme se fait facilement via les fichiers ",(0,r.kt)("inlineCode",{parentName:"p"},".deb"),", l'usage d'un d\xe9p\xf4t ",(0,r.kt)("em",{parentName:"p"},"(centralisant ces ",(0,r.kt)("inlineCode",{parentName:"em"},".deb"),")")," devient une n\xe9cessit\xe9 lorsque l'on doit administrer un grand nombreux de machines."),(0,r.kt)("h2",{id:"quest-ce-quaptly-"},"Qu'est-ce qu'Aptly ?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Aptly")," est un programme permet de cr\xe9er et g\xe9rer un d\xe9p\xf4t de paquet. Celui-ci est tr\xe8s souple et permet notamment de faire un ",(0,r.kt)("em",{parentName:"p"},"miroir")," \xe0 partir d'un autre d\xe9p\xf4t."),(0,r.kt)("p",null,"Le fonctionnement de Aptly est ",(0,r.kt)("em",{parentName:"p"},"simple"),", nous ajoutons un d\xe9p\xf4t ",(0,r.kt)("em",{parentName:"p"},"(Miroir, ou local)"),", nous importons des fichiers ",(0,r.kt)("inlineCode",{parentName:"p"},"deb")," si le d\xe9p\xf4t est local, nous cr\xe9ons une snapshot, et nous la publions sur un serveur web."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.aptly.info/img/schema.png",alt:"Schema"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Oui, \xe7a fait beaucoup d'\xe9tapes, mais ne vous inqui\xe9tez pas : celles-ci sont assez faciles \xe0 r\xe9aliser.")),(0,r.kt)("h2",{id:"g\xe9n\xe9ration-couple-gpg-optionnel"},"G\xe9n\xe9ration Couple GPG (Optionnel)"),(0,r.kt)("p",null,"Par s\xe9curit\xe9, je vous invite \xe0 cr\xe9er un couple de cl\xe9 ",(0,r.kt)("em",{parentName:"p"},"gpg"),", qui sera utilis\xe9 pour signer votre d\xe9p\xf4t et emp\xeacher une quelconque attaque ",(0,r.kt)("em",{parentName:"p"},"MITM"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --full-generate-key # Laissez les choix par d\xe9faut\n")),(0,r.kt)("p",null,"Je vous conseille vivement de sauvegarder le mot de passe de la cl\xe9 ",(0,r.kt)("em",{parentName:"p"},"(Et \xe0 ce qu'il soit s\xe9curis\xe9, ex: ",(0,r.kt)("inlineCode",{parentName:"em"},"mimbko2v59MAPu;qM2HX!YdN7ioMT"),")"),". Celui-ci ne sera pas r\xe9cup\xe9rable si vous le perdez."),(0,r.kt)("p",null,"Les cl\xe9s cr\xe9\xe9es sont accessibles de cette mani\xe8re :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# gpg --list-keys\n/root/.gnupg/pubring.kbx\n------------------------\npub   rsa3072 2023-02-11 [SC]\n      2DB7FDA5442C053973F9F3CAB55A4CDD19C23946\nuid          [  ultime ] Quentin JOLY (Aptly Repo) <github@thoughtless.eu>\nsub   rsa3072 2023-02-11 [E]\n")),(0,r.kt)("p",null,"Vous pouvez exporter la cl\xe9 pour la placer dans le ",(0,r.kt)("em",{parentName:"p"},"futur")," site cr\xe9\xe9 par Aptly, vos utilisateurs vous remercieront plus tard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.aptly/public/\ngpg --armor --output ~/.aptly/data/public/gpg --export 2DB7FDA5442C053973F9F3CAB55A4CDD19C23946\n")),(0,r.kt)("h2",{id:"installer-aptly"},"Installer Aptly"),(0,r.kt)("p",null,"Pour installer Aptly, je vous invite \xe0 t\xe9l\xe9charger le binaire et \xe0 le placer dans votre ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /tmp \\\n      && wget -q -O - https://github.com/aptly-dev/aptly/releases/download/v1.5.0/aptly_1.5.0_linux_amd64.tar.gz | tar xvzf - \\\n      && mv aptly_1.5.0_linux_amd64/aptly /usr/bin/aptly\n")),(0,r.kt)("h2",{id:"cr\xe9er-votre-d\xe9p\xf4t-priv\xe9"},"Cr\xe9er votre d\xe9p\xf4t priv\xe9"),(0,r.kt)("p",null,"Via ",(0,r.kt)("a",{parentName:"p",href:"./creer-deb"},"cette documentation"),", nous avons appris \xe0 cr\xe9er nos propres ",(0,r.kt)("inlineCode",{parentName:"p"},"deb"),". J'ai donc cr\xe9\xe9 quelques paquets ",(0,r.kt)("em",{parentName:"p"},"exemple")," \xe0 stocker dans 2 d\xe9p\xf4ts diff\xe9rents : ",(0,r.kt)("em",{parentName:"p"},"stable et unstable"),"."),(0,r.kt)("p",null,"Voici mon architecture :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 stable\n\u2502\xa0\xa0 \u2514\u2500\u2500 kompose_1.28.0-1_amd64.deb\n\u2514\u2500\u2500 unstable\n    \u251c\u2500\u2500 foobar_1-1_all.deb\n    \u251c\u2500\u2500 hello-world_1-1_amd64.deb\n    \u2514\u2500\u2500 hello-world_1-1_arm64.deb\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"le paquet Hello-World est d\xe9clin\xe9 en 2 versions : amd64 et arm64"),"."),(0,r.kt)("p",null,"Commen\xe7ons par cr\xe9er notre d\xe9p\xf4t ",(0,r.kt)("em",{parentName:"p"},"unstable")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aptly repo create unstable\n")),(0,r.kt)("p",null,"Une fois le d\xe9p\xf4t cr\xe9\xe9, nous pouvons v\xe9rifier que notre d\xe9p\xf4t est cr\xe9\xe9 et vide avec la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"aptly repo show -with-packages unstable"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# aptly repo show -with-packages unstable\nName: unstable\nComment: \nDefault Distribution: \nDefault Component: main\nNumber of packages: 0\nPackages:\n")),(0,r.kt)("p",null,"Le d\xe9p\xf4t est vide, nous allons maintenant ajouter notre dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"unstable/")," pour qu'il y importe les ",(0,r.kt)("inlineCode",{parentName:"p"},"deb"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aptly repo add unstable unstable/\n")),(0,r.kt)("p",null,"On re-v\xe9rifie les packages pr\xe9sents sur le d\xe9p\xf4t."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# aptly repo show -with-packages unstable\nName: unstable\nComment: \nDefault Distribution: \nDefault Component: main\nNumber of packages: 3\nPackages:\n  foo_1_all\n  hello-world_1_amd64\n  hello-world_1_arm64\n")),(0,r.kt)("p",null,"\xc0 pr\xe9sent, nous cr\xe9ons notre snapshot \xe0 partir du d\xe9p\xf4t ",(0,r.kt)("em",{parentName:"p"},"unstable. (celle-ci portera le m\xeame nom que le d\xe9p\xf4t : unstable)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aptly snapshot create unstable from repo unstable\n")),(0,r.kt)("p",null,"Nous v\xe9rifions la snapshot avec la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"aptly snapshot show -with-packages unstable"),"."),(0,r.kt)("p",null,"D\xe9sormais, nous pouvons cr\xe9er les fichiers du d\xe9p\xf4t ",(0,r.kt)("em",{parentName:"p"},"(En r\xe9utilisant la cl\xe9 GPG que nous avons cr\xe9\xe9e en haut de la page)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'aptly publish snapshot -architectures="amd64,arm64" -distribution="unstable" -gpg-key="2DB7FDA5442C053973F9F3CAB55A4CDD19C23946" unstable \n')),(0,r.kt)("p",null,"Nous avons donc la structure du d\xe9p\xf4t ",(0,r.kt)("em",{parentName:"p"},"(celle que nous devrons exposer en site)")," dans ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aptly/public/"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 dists\n\u2502\xa0\xa0 \u2514\u2500\u2500 unstable\n\u2502\xa0\xa0     \u251c\u2500\u2500 Contents-amd64.gz\n\u2502\xa0\xa0     \u251c\u2500\u2500 Contents-arm64.gz\n\u2502\xa0\xa0     \u251c\u2500\u2500 InRelease\n\u2502\xa0\xa0     \u251c\u2500\u2500 main\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 binary-amd64\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Packages\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Packages.bz2\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Packages.gz\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Release\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 binary-arm64\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Packages\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Packages.bz2\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Packages.gz\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Release\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 Contents-amd64.gz\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 Contents-arm64.gz\n\u2502\xa0\xa0     \u251c\u2500\u2500 Release\n\u2502\xa0\xa0     \u2514\u2500\u2500 Release.gpg\n\u251c\u2500\u2500 gpg\n\u2514\u2500\u2500 pool\n    \u2514\u2500\u2500 main\n        \u251c\u2500\u2500 f\n        \u2502\xa0\xa0 \u2514\u2500\u2500 foo\n        \u2502\xa0\xa0     \u2514\u2500\u2500 foobar_1-1_all.deb\n        \u2514\u2500\u2500 h\n            \u2514\u2500\u2500 hello-world\n                \u251c\u2500\u2500 hello-world_1-1_amd64.deb\n                \u2514\u2500\u2500 hello-world_1-1_arm64.deb\n")),(0,r.kt)("p",null,"Nous pouvons d'ores-et-d\xe9j\xe0 tester notre d\xe9p\xf4t en cr\xe9ant un serveur web temporaire via la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"aptly serve"),"."),(0,r.kt)("p",null,"Mais avant de rendre accessible notre d\xe9p\xf4t, cr\xe9ons la seconde section ",(0,r.kt)("em",{parentName:"p"},"stable"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'aptly repo create stable\naptly repo add stable stable/\naptly snapshot create stable from repo stable\naptly publish snapshot -architectures="amd64,arm64" -distribution="stable" -gpg-key="2DB7FDA5442C053973F9F3CAB55A4CDD19C23946" stable \n')),(0,r.kt)("p",null,"Nous pouvons tester via ",(0,r.kt)("inlineCode",{parentName:"p"},"aptly serve"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# aptly serve\nServing published repositories, recommended apt sources list:\n\n# ./stable [amd64, arm64] publishes {main: [stable]: Snapshot from local repo [stable]}\ndeb http://192.168.1.102:8080/ stable main\n# ./unstable [amd64, arm64] publishes {main: [unstable]: Snapshot from local repo [unstable]}\ndeb http://192.168.1.102:8080/ unstable main\n\nStarting web server at: :8080 (press Ctrl+C to quit)...\n")),(0,r.kt)("p",null,"Ajoutons la cl\xe9 GPG du d\xe9p\xf4t puis cr\xe9ons le fichier de notre d\xe9p\xf4t dans ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list.d/private.list"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'wget -O - -q http://192.168.1.102:8080/gpg | sudo apt-key add - \necho -n "deb http://192.168.1.102:8080/ stable main \ndeb http://192.168.1.102:8080/ unstable main" | sudo tee /etc/apt/sources.list.d/private.list\n')),(0,r.kt)("p",null,"Le package ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world")," affiche ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello-World Amd64")," sur les processeurs Amd64, et ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello-World Arm"),"."),(0,r.kt)("p",null,"Testons sur ma machine personnelle\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install hello-world\nhello-world\n# Hello-World Amd64\n")),(0,r.kt)("p",null,"et sur une Raspberry pi :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install hello-world\nhello-world\n# Hello-World Arm\n")),(0,r.kt)("h2",{id:"exposer-le-d\xe9p\xf4t"},"Exposer le d\xe9p\xf4t"),(0,r.kt)("p",null,"Si ",(0,r.kt)("inlineCode",{parentName:"p"},"aptly serve")," permet de tester son d\xe9p\xf4t en le rendant accessible, il est n\xe9c\xe9ssaire d'utiliser un r\xe9el serveur web comme ",(0,r.kt)("em",{parentName:"p"},"Nginx")," ou ",(0,r.kt)("em",{parentName:"p"},"Apache2"),"."),(0,r.kt)("p",null,"J'ai donc install\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx")," et \xe9dit\xe9 le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/default")," ",(0,r.kt)("em",{parentName:"p"},"(Je ne d\xe9taillerai que tr\xe8s peu cette partie)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"server {\n listen 80 default_server;\n listen [::]:80 default_server;\n root /root/.aptly/public/;\n     allow all;\n autoindex on;\n server_name _;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Il faut bien penser \xe0 donner les permissions \xe0 www-data au dossier ",(0,r.kt)("inlineCode",{parentName:"em"},"/root/.aptly/"),".")),(0,r.kt)("admonition",{title:"root-less",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Dans cet article, je reste en utilisateur ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),". Aptly ",(0,r.kt)("strong",{parentName:"p"},"n'impose pas")," l'usage de cet utilisateur, vous pouvez ",(0,r.kt)("em",{parentName:"p"},"(et m\xeame devez)")," utiliser un utilisateur d\xe9di\xe9 \xe0 \xe7a")),(0,r.kt)("h2",{id:"faire-du-nettoyage"},"Faire du Nettoyage"),(0,r.kt)("p",null,"Pour Supprimer les d\xe9p\xf4ts que nous avons cr\xe9\xe9s, il suffit juste d'ex\xe9cuter ces commandes dans l'ordre."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supprimer la snapshot du site"),(0,r.kt)("li",{parentName:"ul"},"Supprimer la snapshot"),(0,r.kt)("li",{parentName:"ul"},"Supprimer le d\xe9p\xf4t")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Pour le d\xe9p\xf4t unstable\naptly publish drop unstable\naptly snapshot drop unstable\naptly repo drop unstable\n# Pour le d\xe9p\xf4t stable\naptly publish drop stable\naptly snapshot drop stable\naptly repo drop stable\n")),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"En lien avec cette page",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Adminsys/creer-deb"},"Cr\xe9er ses fichiers .deb")))))}d.isMDXComponent=!0}}]);