"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7019],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},425:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},3992:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7462),a=r(7294),o=r(6010),i=r(2957),u=r(6550),l=r(5238),s=r(3609),p=r(2560);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[i,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,s]=f({queryString:r,groupId:n}),[c,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),v(e)}),[s,v,o]),tabValues:o}}var b=r(1048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:u,selectValue:l,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=s[r].value;n!==u&&(c(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":u===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function A(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return a.createElement(A,(0,n.Z)({key:String(t)},e))}},8468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(4137)),o=r(3992),i=r(425);const u={title:"QuteBrowser - Un navigateur bas\xe9 sur Vim",slug:"QuteBrowser"},l=void 0,s={unversionedId:"Home/QuteBrowser",id:"Home/QuteBrowser",title:"QuteBrowser - Un navigateur bas\xe9 sur Vim",description:"Il est tard, je suis fatigu\xe9, et dans ces moments, je n'ai qu'une envie : apprendre une bricole de plus qui me servira peut-\xeatre un jour (ou pas).",source:"@site/docs/Home/QuteBrowser.md",sourceDirName:"Home",slug:"/Home/QuteBrowser",permalink:"/TheBidouilleur.xyz/en/docs/Home/QuteBrowser",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Home/QuteBrowser.md",tags:[],version:"current",lastUpdatedAt:1687789205,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{title:"QuteBrowser - Un navigateur bas\xe9 sur Vim",slug:"QuteBrowser"},sidebar:"tutorialSidebar",previous:{title:"Cr\xe9ation d'un cluster ARM",permalink:"/TheBidouilleur.xyz/en/docs/Home/cluster-arm"},next:{title:"Kubernetes INside Docker",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/kind"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"D\xe9couvrir QuteBrowser",id:"d\xe9couvrir-qutebrowser",level:2},{value:"Navigation classique",id:"navigation-classique",level:3},{value:"Onglets ?",id:"onglets-",level:3},{value:"Bookmarks",id:"bookmarks",level:3},{value:"Astuce de mi-temps",id:"astuce-de-mi-temps",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Moteur de recherche",id:"moteur-de-recherche",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},m="wrapper";function f(e){let{components:t,...u}=e;return(0,a.kt)(m,(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Il est tard, je suis fatigu\xe9, et dans ces moments, je n'ai qu'une envie : apprendre une bricole de plus qui me servira peut-\xeatre un jour ",(0,a.kt)("em",{parentName:"p"},"(ou pas)"),"."),(0,a.kt)("p",null,"Sur les communaut\xe9s de Tiling ",(0,a.kt)("em",{parentName:"p"},"(i3, tmux, sway \u2026)"),", on entend souvent parler de QuteBrowser. C'est un navigateur bas\xe9 sur Vim, qui permet de naviguer sur le web sans utiliser la souris. Il est tr\xe8s l\xe9ger et tr\xe8s rapide."),(0,a.kt)("p",null,"Je n'ai eu qu'une br\xe8ve d\xe9mo de ce navigateur, mais il m'a sembl\xe9 tr\xe8s int\xe9ressant. Je me suis donc dit que j'allais l'installer et le tester."),(0,a.kt)("p",null,"Un paquet NixFOS existe pour QuteBrowser, je l'installe donc et \u2026"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  ~ nix-shell -p qutebrowser\n\n[nix-shell:~]$ qutebrowser \nGtk-Message: 16:00:29.759: Failed to load module "canberra-gtk-module"\nGtk-Message: 16:00:29.760: Failed to load module "canberra-gtk-module"\n16:00:29 WARNING: qglx_findConfig: Failed to finding matching FBConfig for QSurfaceFormat(version 2.0, options QFlags<QSurfaceFormat::FormatOption>(), depthBufferSize -1, redBufferSize 1, greenBufferSize 1, blueBufferSize 1, alphaBufferSize -1, stencilBufferSize -1, samples -1, swapBehavior QSurfaceFormat::SingleBuffer, swapInterval 1, colorSpace QSurfaceFormat::DefaultColorSpace, profile  QSurfaceFormat::NoProfile)\n16:00:29 WARNING: qglx_findConfig: Failed to finding matching FBConfig for QSurfaceFormat(version 2.0, options QFlags<QSurfaceFormat::FormatOption>(), depthBufferSize -1, redBufferSize 1, greenBufferSize 1, blueBufferSize 1, alphaBufferSize -1, stencilBufferSize -1, samples -1, swapBehavior QSurfaceFormat::SingleBuffer, swapInterval 1, colorSpace QSurfaceFormat::DefaultColorSpace, profile  QSurfaceFormat::NoProfile)\n16:00:29 CRITICAL: Could not initialize GLX\nFatal Python error: Aborted\n\nCurrent thread 0x00007f46eaa85740 (most recent call first):\n  File "/nix/store/3zyp407rmghww5m9afxc0nirky1wf6fj-qutebrowser-2.5.4/lib/python3.10/site-packages/qutebrowser/app.py", line 558 in __init__\n  File "/nix/store/3zyp407rmghww5m9afxc0nirky1wf6fj-qutebrowser-2.5.4/lib/python3.10/site-packages/qutebrowser/app.py", line 95 in run\n  File "/nix/store/3zyp407rmghww5m9afxc0nirky1wf6fj-qutebrowser-2.5.4/lib/python3.10/site-packages/qutebrowser/qutebrowser.py", line 245 in main\n  File "/nix/store/3zyp407rmghww5m9afxc0nirky1wf6fj-qutebrowser-2.5.4/bin/.qutebrowser-wrapped", line 34 in <module>\n\nExtension modules: PyQt5.QtCore, PyQt5.QtGui, PyQt5.QtWidgets, markupsafe._speedups, yaml._yaml, PyQt5.QtNetwork, PyQt5.QtQml, PyQt5.QtSql, PyQt5.QtOpenGL, PyQt5.QtDBus, PyQt5.QtPrintSupport, PyQt5.QtWebEngineCore, PyQt5.QtWebChannel, PyQt5.QtWebEngineWidgets, PyQt5.QtWebEngine (total: 15)\nAborted (core dumped)\n')),(0,a.kt)("p",null,"\u2026 c'est le drame ! Je vais ouvrir une issue sur le d\xe9p\xf4t NixOS pour signaler le probl\xe8me. Mais je crois que je vais devoir l'installer autrement."),(0,a.kt)("p",null,"Par chance, un paquet QuteBrowser existe sur Debian, Fedora et Arch. ",(0,a.kt)("em",{parentName:"p"},"(Des versions pr\xe9-compil\xe9es pour Windows et Mac sont disponibles sur les Github Releases)")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Debian",label:"Debian",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install qutebrowser\n"))),(0,a.kt)(i.Z,{value:"Fedora",label:"Fedora",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dnf install qutebrowser\n"))),(0,a.kt)(i.Z,{value:"Nix",label:"Nix",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nix-env -i qutebrowser -v\n")))),(0,a.kt)("h2",{id:"d\xe9couvrir-qutebrowser"},"D\xe9couvrir QuteBrowser"),(0,a.kt)("h3",{id:"navigation-classique"},"Navigation classique"),(0,a.kt)("p",null,"Quand on lance QuteBrowser pour la premi\xe8re fois, on arrive sur DuckDuckGo. Vous pouvez tr\xe8s bien utiliser la souris pour naviguer, mais ce n'est pas le but."),(0,a.kt)("p",null,"Pour s\xe9lectionner un lien, on utilise la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," qui va afficher des lettres sur les liens. On tape la lettre correspondante pour s\xe9lectionner le lien."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2961).Z,width:"1278",height:"721"})),(0,a.kt)("p",null,"En appuyant sur ",(0,a.kt)("inlineCode",{parentName:"p"},"g"),", je me positionne alors sur le champ de recherche. Je peux alors taper ma recherche et appuyer sur ",(0,a.kt)("inlineCode",{parentName:"p"},"Entr\xe9e")," pour lancer la recherche."),(0,a.kt)("p",null,"D\xe8s lors que notre curseur est sur un champ ",(0,a.kt)("inlineCode",{parentName:"p"},"<input>")," nous passons en mode ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," et nous pouvons taper du texte."),(0,a.kt)("p",null,"Pour revenir sur la page pr\xe9c\xe9dente, on utilise la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"H")," et pour retourner sur la page suivante, on utilise la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"L"),"."),(0,a.kt)("h3",{id:"onglets-"},"Onglets ?"),(0,a.kt)("p",null,"Si vous n'avez pas vu ma pr\xe9sentation de Vim ",(0,a.kt)("em",{parentName:"p"},"(",(0,a.kt)("a",{parentName:"em",href:"https://vim.avec.une-tasse-de.cafe"},"Disponible ici"),")"),", vous ne savez peut-\xeatre pas que Vim est capable de cr\xe9er des onglets."),(0,a.kt)("p",null,"Pour cr\xe9er un onglet, on utilise la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"O")," qui va nous pr\xe9remplir la barre d'adresse avec ",(0,a.kt)("inlineCode",{parentName:"p"},":open -t "),". On peut alors taper l'adresse du site ou un mot cl\xe9 pour lancer une recherche."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2681).Z,width:"906",height:"604"})),(0,a.kt)("p",null,"Une fois que vous avez plusieurs onglets, vous pouvez naviguer entre eux avec les touches ",(0,a.kt)("inlineCode",{parentName:"p"},"J")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"K"),". ",(0,a.kt)("em",{parentName:"p"},"(Pas comme dans Vim)")),(0,a.kt)("h3",{id:"bookmarks"},"Bookmarks"),(0,a.kt)("p",null,"Comme n'importe quel navigateur, QuteBrowser permet de sauvegarder des favoris. Pour ajouter un favori, on utilise la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," qui va nous pr\xe9remplir la barre d'adresse avec ",(0,a.kt)("inlineCode",{parentName:"p"},":bookmark-add "),". On peut alors taper l'adresse du site ou un mot cl\xe9 pour lancer une recherche."),(0,a.kt)("p",null,"Il est possible d'ajouter le site sur lequel on se trouve en utilisant la touche ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," qui va ouvrir un menu pour choisir le nom du favori. Il est possible de l'ajouter rapidement en utilisant ",(0,a.kt)("inlineCode",{parentName:"p"},"M")," qui va prendre le titre comme nom du favori."),(0,a.kt)("p",null,"Avec la commande ",(0,a.kt)("inlineCode",{parentName:"p"},":bookmark-del"),", on peut supprimer un favori ",(0,a.kt)("em",{parentName:"p"},"(les tabulations sont possibles pour compl\xe9ter le nom du favori)"),". Et nous pouvons ouvrir la liste de nos favoris via la commande ",(0,a.kt)("inlineCode",{parentName:"p"},":bookmark-list")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"Sq")),(0,a.kt)("h2",{id:"astuce-de-mi-temps"},"Astuce de mi-temps"),(0,a.kt)("p",null,"En reprenant l'exemple de la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"sQ"),", QuteBrowser peut vous proposer les raccourcis possibles en ne tapant que ",(0,a.kt)("inlineCode",{parentName:"p"},"S")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5632).Z,width:"268",height:"157"})),(0,a.kt)("p",null,"Pratique quand on ne se souvient que du d\xe9but de la combinaison."),(0,a.kt)("p",null,"Il est aussi possible de retrouver les combinaisons de touches de chaque commande depuis la console."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2574).Z,width:"906",height:"395"})),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"La partie configuration de QuteBrowser est assez complexe. Avant la version 1.0.0 ",(0,a.kt)("em",{parentName:"p"},"(Nous sommes \xe0 la 2.5.0)"),", QuteBrowser disposait d'un fichier d'un ficher ",(0,a.kt)("inlineCode",{parentName:"p"},"qutebrowser.conf")," qui permettait de configurer le navigateur. Depuis la version 1.0.0, QuteBrowser utilise un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"config.py")," qui est un fichier Python."),(0,a.kt)("p",null,"On aime ou on aime pas, mais c'est comme \xe7a. Je vous invite \xe0 lire la documentation officielle pour en savoir plus."),(0,a.kt)("p",null,"Dans ce fichier de configuration, nous avons un objet ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," dans la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"c"),". Cet objet contient tous les param\xe8tres de configuration de QuteBrowser. Pour les modifier, il suffit de faire ",(0,a.kt)("inlineCode",{parentName:"p"},"c.nom_du_parametre = valeur"),"."),(0,a.kt)("p",null,"Par exemple, pour changer la page d'accueil, il suffit de faire ",(0,a.kt)("inlineCode",{parentName:"p"},'c.url.start_pages = "https://www.ecosia.org/?c=fr"'),"."),(0,a.kt)("admonition",{title:"Charger la configuration GUI",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"En plus du fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"config.py"),", il est possible de d\xe9finir quelques param\xe8tres ",(0,a.kt)("em",{parentName:"p"},"(avec moins de libert\xe9)")," sur l'interface graphique ",(0,a.kt)("em",{parentName:"p"},"(accessibles depuis l'url ",(0,a.kt)("inlineCode",{parentName:"em"},"qute://settings/"),")")),(0,a.kt)("p",{parentName:"admonition"},"Il est tout \xe0 fait possible de cumuler les deux m\xe9thodes de configuration."),(0,a.kt)("p",{parentName:"admonition"},"Pour cela, il vous faut ajouter la ligne suivante dans votre fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"config.py")," pour charger la configuration GUI."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"config.load_autoconfig()\n"))),(0,a.kt)("h2",{id:"moteur-de-recherche"},"Moteur de recherche"),(0,a.kt)("p",null,"QuteBrowser utilise DuckDuckGo en tant que moteur de recherche par d\xe9faut. Comme pour Firefox, il est possible d'utiliser plusieurs moteurs de recherche en fonction d'un pr\xe9fixe."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"c.url.searchengines = {\n    'DEFAULT':  'https://www.ecosia.org/search?method=index&q={}',\n    '!a':       'https://www.amazon.fr/s?k={}',\n    '!d':       'https://duckduckgo.com/?ia=web&q={}',\n    '!gh':      'https://github.com/search?o=desc&q={}&s=stars',\n    '!gist':    'https://gist.github.com/search?q={}',\n    '!gn':      'https://news.google.com/search?q={}',\n    '!m':       'https://www.google.com/maps/search/{}',\n    '!r':       'https://www.reddit.com/search?q={}',\n    '!tw':      'https://twitter.com/search?q={}',\n    '!w':       'https://fr.wikipedia.org/wiki/{}',\n    '!yt':      'https://www.youtube.com/results?search_query={}'\n}\n")),(0,a.kt)("p",null,"Ainsi, en tapant ",(0,a.kt)("inlineCode",{parentName:"p"},":open -t !gh NixPkgs"),", je vais lancer une recherche sur GitHub avec le mot ",(0,a.kt)("inlineCode",{parentName:"p"},"NixPkgs"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Quand on a l'habitude de naviguer avec Vim, QuteBrowser est un navigateur tr\xe8s agr\xe9able \xe0 utiliser. Il est tr\xe8s l\xe9ger et tr\xe8s rapide. Il est aussi tr\xe8s facile \xe0 configurer. La documentation est tr\xe8s compl\xe8te et hyper bien faite.\nJe n'ai pas non-plus parl\xe9 des userscripts qui permettent d'ajouter des fonctionnalit\xe9s \xe0 QuteBrowser ",(0,a.kt)("em",{parentName:"p"},"(comme des extensions)")," et qui sont vraiment simples \xe0 cr\xe9er et \xe0 installer."),(0,a.kt)("p",null,"Je pense continuer \xe0 utiliser QuteBrowser pendant un moment en esp\xe9rant que mes extensions Firefox pr\xe9f\xe9r\xe9es ne me manquent pas trop."))}f.isMDXComponent=!0},5632:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},2961:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/duckduckgo-934e557213e089183f6e94a94988538e.png"},2574:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/liste-touches-a505ef94fd2884a597d99193ac99183d.png"},2681:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/newtab-f2ed62bb1efbf51ffa00544dbd4456ef.png"}}]);