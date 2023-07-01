"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4225],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(4137)),i=r(3992),o=r(425);const u={title:"QuteBrowser - Un navigateur bas\xe9 sur Vim",slug:"QuteBrowser",tags:["QuteBrowser","Vim","Firefox"],description:"QuteBrowser est un navigateur bas\xe9 sur Vim qui permet de naviguer sur le web sans utiliser la souris (ou presque)"},s=void 0,l={permalink:"/TheBidouilleur.xyz/en/blog/QuteBrowser",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2023-06-26-QuteBrowser/index.md",source:"@site/blog/2023-06-26-QuteBrowser/index.md",title:"QuteBrowser - Un navigateur bas\xe9 sur Vim",description:"QuteBrowser est un navigateur bas\xe9 sur Vim qui permet de naviguer sur le web sans utiliser la souris (ou presque)",date:"2023-06-26T00:00:00.000Z",formattedDate:"June 26, 2023",tags:[{label:"QuteBrowser",permalink:"/TheBidouilleur.xyz/en/blog/tags/qute-browser"},{label:"Vim",permalink:"/TheBidouilleur.xyz/en/blog/tags/vim"},{label:"Firefox",permalink:"/TheBidouilleur.xyz/en/blog/tags/firefox"}],readingTime:6.04,hasTruncateMarker:!1,authors:[],frontMatter:{title:"QuteBrowser - Un navigateur bas\xe9 sur Vim",slug:"QuteBrowser",tags:["QuteBrowser","Vim","Firefox"],description:"QuteBrowser est un navigateur bas\xe9 sur Vim qui permet de naviguer sur le web sans utiliser la souris (ou presque)"},nextItem:{title:"IPFS - un protocole pour archiver et partager des fichiers",permalink:"/TheBidouilleur.xyz/en/blog/ipfs"}},p={authorsImageUrls:[]},c=[{value:"Installation",id:"installation",level:2},{value:"D\xe9couvrir QuteBrowser",id:"d\xe9couvrir-qutebrowser",level:2},{value:"Navigation classique",id:"navigation-classique",level:3},{value:"Onglets ?",id:"onglets-",level:3},{value:"Bookmarks",id:"bookmarks",level:3},{value:"Astuce de mi-temps",id:"astuce-de-mi-temps",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Moteur de recherche",id:"moteur-de-recherche",level:2},{value:"Une r\xe9elle alternative ?",id:"une-r\xe9elle-alternative-",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c},d="wrapper";function f(e){let{components:t,...u}=e;return(0,a.kt)(d,(0,n.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Il est tard, je suis fatigu\xe9, et dans ces moments, je n'ai qu'une envie : apprendre une bricole de plus qui me servira peut-\xeatre un jour ",(0,a.kt)("em",{parentName:"p"},"(ou pas)"),"."),(0,a.kt)("p",null,"Sur les communaut\xe9s de Tiling ",(0,a.kt)("em",{parentName:"p"},"(i3, tmux, sway \u2026)"),", on entend souvent parler de QuteBrowser. C'est un navigateur bas\xe9 sur Vim qui permet de naviguer sur le web sans utiliser la souris. Il est tr\xe8s l\xe9ger et tr\xe8s rapide."),(0,a.kt)("p",null,"Je n'ai eu qu'une br\xe8ve d\xe9mo de ce navigateur, mais il m'a sembl\xe9 tr\xe8s int\xe9ressant. Je me suis donc dit que j'allais l'installer et le tester."),(0,a.kt)("p",null,"Un paquet NixOS existe pour QuteBrowser, je l'installe donc et \u2026"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  ~ nix-shell -p qutebrowser\n\n[nix-shell:~]$ qutebrowser \nGtk-Message: 16:00:29.759: Failed to load module "canberra-gtk-module"\nGtk-Message: 16:00:29.760: Failed to load module "canberra-gtk-module"\n16:00:29 WARNING: qglx_findConfig: Failed to finding matching FBConfig for QSurfaceFormat(version 2.0, options QFlags<QSurfaceFormat::FormatOption>(), depthBufferSize -1, redBufferSize 1, greenBufferSize 1, blueBufferSize 1, alphaBufferSize -1, stencilBufferSize -1, samples -1, swapBehavior QSurfaceFormat::SingleBuffer, swapInterval 1, colorSpace QSurfaceFormat::DefaultColorSpace, profile  QSurfaceFormat::NoProfile)\n16:00:29 WARNING: qglx_findConfig: Failed to finding matching FBConfig for QSurfaceFormat(version 2.0, options QFlags<QSurfaceFormat::FormatOption>(), depthBufferSize -1, redBufferSize 1, greenBufferSize 1, blueBufferSize 1, alphaBufferSize -1, stencilBufferSize -1, samples -1, swapBehavior QSurfaceFormat::SingleBuffer, swapInterval 1, colorSpace QSurfaceFormat::DefaultColorSpace, profile  QSurfaceFormat::NoProfile)\n16:00:29 CRITICAL: Could not initialize GLX\nFatal Python error: Aborted\n\nCurrent thread 0x00007f46eaa85740 (most recent call first):\n  File "/nix/store/3zyp407rmghww5m9afxc0nirky1wf6fj-qutebrowser-2.5.4/lib/python3.10/site-packages/qutebrowser/app.py", line 558 in __init__\n  File "/nix/store/3zyp407rmghww5m9afxc0nirky1wf6fj-qutebrowser-2.5.4/lib/python3.10/site-packages/qutebrowser/app.py", line 95 in run\n  File "/nix/store/3zyp407rmghww5m9afxc0nirky1wf6fj-qutebrowser-2.5.4/lib/python3.10/site-packages/qutebrowser/qutebrowser.py", line 245 in main\n  File "/nix/store/3zyp407rmghww5m9afxc0nirky1wf6fj-qutebrowser-2.5.4/bin/.qutebrowser-wrapped", line 34 in <module>\n\nExtension modules: PyQt5.QtCore, PyQt5.QtGui, PyQt5.QtWidgets, markupsafe._speedups, yaml._yaml, PyQt5.QtNetwork, PyQt5.QtQml, PyQt5.QtSql, PyQt5.QtOpenGL, PyQt5.QtDBus, PyQt5.QtPrintSupport, PyQt5.QtWebEngineCore, PyQt5.QtWebChannel, PyQt5.QtWebEngineWidgets, PyQt5.QtWebEngine (total: 15)\nAborted (core dumped)\n')),(0,a.kt)("p",null,"\u2026 c'est le drame ! Je vais ouvrir une issue sur le d\xe9p\xf4t NixOS pour signaler le probl\xe8me. Je crois que je vais devoir l'installer autrement."),(0,a.kt)("p",null,"Par chance, un paquet QuteBrowser existe sur Debian, Fedora et Arch. ",(0,a.kt)("em",{parentName:"p"},"(Des versions pr\xe9-compil\xe9es pour Windows et Mac sont disponibles sur les Github Releases)")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Debian",label:"Debian",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install qutebrowser\n"))),(0,a.kt)(o.Z,{value:"Fedora",label:"Fedora",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dnf install qutebrowser\n"))),(0,a.kt)(o.Z,{value:"Nix",label:"Nix",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nix-env -i qutebrowser -v\n")))),(0,a.kt)("h2",{id:"d\xe9couvrir-qutebrowser"},"D\xe9couvrir QuteBrowser"),(0,a.kt)("h3",{id:"navigation-classique"},"Navigation classique"),(0,a.kt)("p",null,"Quand on lance QuteBrowser pour la premi\xe8re fois, on arrive sur DuckDuckGo. Vous pouvez tr\xe8s bien utiliser la souris pour naviguer, mais ce n'est pas le but."),(0,a.kt)("p",null,"Pour s\xe9lectionner un lien, on utilise la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," qui va afficher des lettres sur les liens. On tape la lettre correspondante pour s\xe9lectionner le lien."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Moteur de recherche",src:r(2961).Z,width:"1278",height:"721"})),(0,a.kt)("p",null,"En appuyant sur ",(0,a.kt)("inlineCode",{parentName:"p"},"g"),", je me positionne alors sur le champ de recherche. Je peux alors taper ma recherche et appuyer sur ",(0,a.kt)("inlineCode",{parentName:"p"},"Entr\xe9e")," pour lancer la recherche."),(0,a.kt)("p",null,"D\xe8s lors que notre curseur est sur un champ ",(0,a.kt)("inlineCode",{parentName:"p"},"<input>")," nous passons en mode ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," et nous pouvons taper du texte."),(0,a.kt)("p",null,"Pour revenir sur la page pr\xe9c\xe9dente, on utilise la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"H")," et pour retourner sur la page suivante, on utilise la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"L"),"."),(0,a.kt)("h3",{id:"onglets-"},"Onglets ?"),(0,a.kt)("p",null,"Si vous n'avez pas vu ma pr\xe9sentation de Vim ",(0,a.kt)("em",{parentName:"p"},"(",(0,a.kt)("a",{parentName:"em",href:"https://vim.avec.une-tasse-de.cafe"},"Disponible ici"),")"),", vous ne savez peut-\xeatre pas que Vim est capable de cr\xe9er des onglets."),(0,a.kt)("p",null,"Pour cr\xe9er un onglet, on utilise la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"O")," qui va nous pr\xe9remplir la barre d'adresse avec ",(0,a.kt)("inlineCode",{parentName:"p"},":open -t"),". On peut alors taper l'adresse du site ou un mot cl\xe9 pour lancer une recherche."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Nouvel onglet",src:r(2681).Z,width:"906",height:"604"})),(0,a.kt)("p",null,"Une fois que vous avez plusieurs onglets, vous pouvez naviguer entre eux avec les touches ",(0,a.kt)("inlineCode",{parentName:"p"},"J")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"K"),". ",(0,a.kt)("em",{parentName:"p"},"(Pas comme dans Vim)")),(0,a.kt)("h3",{id:"bookmarks"},"Bookmarks"),(0,a.kt)("p",null,"Comme n'importe quel navigateur, QuteBrowser permet de sauvegarder des favoris. Pour ajouter un favori, on utilise la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," qui va nous pr\xe9remplir la barre d'adresse avec ",(0,a.kt)("inlineCode",{parentName:"p"},":bookmark-add"),". On peut alors taper l'adresse du site ou un mot cl\xe9 pour lancer une recherche."),(0,a.kt)("p",null,"Il est possible d'ajouter le site sur lequel on se trouve en utilisant la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," qui va ouvrir un menu pour choisir le nom du favori. Il est possible de l'ajouter rapidement en utilisant ",(0,a.kt)("inlineCode",{parentName:"p"},"M")," qui va prendre le titre comme nom du favori."),(0,a.kt)("p",null,"Avec la commande ",(0,a.kt)("inlineCode",{parentName:"p"},":bookmark-del"),", on peut supprimer un favori ",(0,a.kt)("em",{parentName:"p"},"(les tabulations sont possibles pour compl\xe9ter le nom du favori)"),". Et nous pouvons ouvrir la liste de nos favoris via la commande ",(0,a.kt)("inlineCode",{parentName:"p"},":bookmark-list")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"Sq")),(0,a.kt)("h2",{id:"astuce-de-mi-temps"},"Astuce de mi-temps"),(0,a.kt)("p",null,"En reprenant l'exemple de la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"sQ"),", QuteBrowser peut vous proposer les raccourcis possibles en ne tapant que ",(0,a.kt)("inlineCode",{parentName:"p"},"S")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Compl\xe9tion Bookmarks",src:r(5632).Z,width:"268",height:"157"})),(0,a.kt)("p",null,"Pratique quand on ne se souvient que du d\xe9but de la combinaison."),(0,a.kt)("p",null,"Il est aussi possible de retrouver les combinaisons de touches de chaque commande depuis la console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Liste des touches",src:r(2574).Z,width:"906",height:"395"})),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"La partie configuration de QuteBrowser est assez complexe. Avant la version 1.0.0 ",(0,a.kt)("em",{parentName:"p"},"(Nous sommes \xe0 la 2.5.0)"),", QuteBrowser disposait d'un fichier d'un ficher ",(0,a.kt)("inlineCode",{parentName:"p"},"qutebrowser.conf")," qui permettait de configurer le navigateur. Depuis la version 1.0.0, QuteBrowser utilise un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"config.py")," qui est un fichier Python."),(0,a.kt)("p",null,"On aime ou on aime pas, mais c'est comme \xe7a. Je vous invite \xe0 lire la documentation officielle pour en savoir plus."),(0,a.kt)("p",null,"Dans ce fichier de configuration, nous avons un objet ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," dans la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"c"),". Cet objet contient tous les param\xe8tres de configuration de QuteBrowser. Pour les modifier, il suffit de faire ",(0,a.kt)("inlineCode",{parentName:"p"},"c.nom_du_parametre = valeur"),"."),(0,a.kt)("p",null,"Par exemple, pour changer la page d'accueil, il suffit de faire ",(0,a.kt)("inlineCode",{parentName:"p"},'c.url.start_pages = "https://www.ecosia.org/?c=fr"'),"."),(0,a.kt)("admonition",{title:"Charger la configuration GUI",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"En plus du fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"config.py"),", il est possible de d\xe9finir quelques param\xe8tres ",(0,a.kt)("em",{parentName:"p"},"(avec moins de libert\xe9)")," sur l'interface graphique ",(0,a.kt)("em",{parentName:"p"},"(accessibles depuis l'url ",(0,a.kt)("inlineCode",{parentName:"em"},"qute://settings/"),")")),(0,a.kt)("p",{parentName:"admonition"},"Il est tout \xe0 fait possible de cumuler les deux m\xe9thodes de configuration."),(0,a.kt)("p",{parentName:"admonition"},"Pour cela, il vous faut ajouter la ligne suivante dans votre fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"config.py")," pour charger la configuration GUI."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"config.load_autoconfig()\n"))),(0,a.kt)("h2",{id:"moteur-de-recherche"},"Moteur de recherche"),(0,a.kt)("p",null,"QuteBrowser utilise DuckDuckGo en tant que moteur de recherche par d\xe9faut. Comme pour Firefox, il est possible d'utiliser plusieurs moteurs de recherche en fonction d'un pr\xe9fixe."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"c.url.searchengines = {\n    'DEFAULT':  'https://www.ecosia.org/search?method=index&q={}',\n    '!a':       'https://www.amazon.fr/s?k={}',\n    '!d':       'https://duckduckgo.com/?ia=web&q={}',\n    '!gh':      'https://github.com/search?o=desc&q={}&s=stars',\n    '!gist':    'https://gist.github.com/search?q={}',\n    '!gn':      'https://news.google.com/search?q={}',\n    '!m':       'https://www.google.com/maps/search/{}',\n    '!r':       'https://www.reddit.com/search?q={}',\n    '!tw':      'https://twitter.com/search?q={}',\n    '!w':       'https://fr.wikipedia.org/wiki/{}',\n    '!yt':      'https://www.youtube.com/results?search_query={}'\n}\n")),(0,a.kt)("p",null,"Ainsi, en tapant ",(0,a.kt)("inlineCode",{parentName:"p"},":open -t !gh NixPkgs"),", je vais lancer une recherche sur GitHub avec le mot ",(0,a.kt)("inlineCode",{parentName:"p"},"NixPkgs"),"."),(0,a.kt)("h2",{id:"une-r\xe9elle-alternative-"},"Une r\xe9elle alternative ?"),(0,a.kt)("p",null,"Et c'est l\xe0 le point le plus important. QuteBrowser est-il une r\xe9elle alternative \xe0 Firefox ou Chrome ?"),(0,a.kt)("p",null,"La r\xe9ponse est ",(0,a.kt)("strong",{parentName:"p"},"non"),", de nombreux sites auront un comportement \xe9trange ou ne fonctionneront pas du tout. QuteBrowser dispose de toutes les fonctionnalit\xe9s n\xe9cessaires \xe0 une navigation quotidienne, mais il ne faut pas s'attendre \xe0 pouvoir utiliser QuteBrowser pour tout."),(0,a.kt)("p",null,"Une alternative \xe0 QuteBrowser est ",(0,a.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/fr/firefox/addon/tridactyl-vim/"},"Tridactyl"),", une extension pour Firefox qui permet de naviguer avec Vim. C'est une extension tr\xe8s compl\xe8te et tr\xe8s bien faite couplant Firefox (et sa compatibilit\xe9) avec Vim."),(0,a.kt)("p",null,"Les raccourcis sont l\xe9g\xe8rement diff\xe9rents, mais on retrouve la plupart des fonctionnalit\xe9s de QuteBrowser."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/tridactyl/tridactyl/master/doc/AMO_screenshots/trishowcase.gif",alt:"Tridactyl"})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Quand on a l'habitude de naviguer avec Vim, QuteBrowser est un navigateur tr\xe8s agr\xe9able \xe0 utiliser. Il est tr\xe8s l\xe9ger et tr\xe8s rapide. Il est aussi tr\xe8s facile \xe0 configurer. La documentation est tr\xe8s compl\xe8te et hyper bien faite.\nJe n'ai pas non-plus parl\xe9 des userscripts qui permettent d'ajouter des fonctionnalit\xe9s \xe0 QuteBrowser ",(0,a.kt)("em",{parentName:"p"},"(comme des extensions)")," et qui sont vraiment simples \xe0 cr\xe9er et \xe0 installer."),(0,a.kt)("p",null,"\xc9tant constamment sur Firefox ",(0,a.kt)("em",{parentName:"p"},"(Perso et travail)"),", je ne peux pas utiliser QuteBrowser au quotidien. Tridactyl est alors la meilleure alternative et celle que je vais utiliser pour le moment."))}f.isMDXComponent=!0},425:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},t)}},3992:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),i=r(6010),o=r(2957),u=r(6550),s=r(5238),l=r(3609),p=r(2560);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=m(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,l]=f({queryString:r,groupId:n}),[c,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),g=(()=>{const e=s??c;return d({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),l(e),v(e)}),[l,v,i]),tabValues:i}}var g=r(1048);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:l}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=p.indexOf(t),n=l[r].value;n!==u&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",A.tabItem,o?.className,{"tabs__item--active":u===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=v(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",A.tabList)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(h,(0,n.Z)({key:String(t)},e))}},5632:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},2961:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/duckduckgo-ae7840148982039c3f0bc1fb979fe8cc.png"},2574:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/liste-touches-5b94a34316eed561f0557a5abec121d4.png"},2681:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/newtab-e0ce78e5cf19a51a9e4d49ac31b856b5.png"}}]);