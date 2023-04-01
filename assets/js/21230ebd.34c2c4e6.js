"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7194],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(4137));const l={slug:"Creer-son-registre-helm",title:"Cr\xe9er son propre registre helm",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["helm","kubernetes"]},s=void 0,i={permalink:"/TheBidouilleur.xyz/blog/Creer-son-registre-helm",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2023-01-09-Creer-son-registre-helm/index.md",source:"@site/blog/2023-01-09-Creer-son-registre-helm/index.md",title:"Cr\xe9er son propre registre helm",description:"Bonne ann\xe9e, Bonne sant\xe9 ! Que la r\xe9ussite et la sant\xe9 soient avec vous !",date:"2023-01-09T00:00:00.000Z",formattedDate:"9 janvier 2023",tags:[{label:"helm",permalink:"/TheBidouilleur.xyz/blog/tags/helm"},{label:"kubernetes",permalink:"/TheBidouilleur.xyz/blog/tags/kubernetes"}],readingTime:10.105,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"Creer-son-registre-helm",title:"Cr\xe9er son propre registre helm",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["helm","kubernetes"]},prevItem:{title:"Mon mat\xe9riel",permalink:"/TheBidouilleur.xyz/blog/Mon-Setup"},nextItem:{title:"Kubernetes en HCL",permalink:"/TheBidouilleur.xyz/blog/kubernetes-hcl"}},o={authorsImageUrls:[void 0]},u=[{value:"K8S@HOME est mort",id:"k8shome-est-mort",level:2},{value:"Qu&#39;est-ce que K8S@HOME ?",id:"quest-ce-que-k8shome-",level:3},{value:"La fin de K8S@HOME",id:"la-fin-de-k8shome",level:3},{value:"La Solution : Cr\xe9er notre d\xe9p\xf4t Helm",id:"la-solution--cr\xe9er-notre-d\xe9p\xf4t-helm",level:2},{value:"Fonctionnement d&#39;un chart Helm",id:"fonctionnement-dun-chart-helm",level:3},{value:"Fonctionnement d&#39;un d\xe9p\xf4t Helm",id:"fonctionnement-dun-d\xe9p\xf4t-helm",level:3},{value:"Cr\xe9ation d&#39;un d\xe9p\xf4t Helm",id:"cr\xe9ation-dun-d\xe9p\xf4t-helm",level:2},{value:"Usage de GitHub Action pour g\xe9n\xe9rer les releases",id:"usage-de-github-action-pour-g\xe9n\xe9rer-les-releases",level:3},{value:"Tester les charts avant de g\xe9n\xe9rer la release. (CI)",id:"tester-les-charts-avant-de-g\xe9n\xe9rer-la-release-ci",level:2},{value:"V\xe9rification de la syntaxe",id:"v\xe9rification-de-la-syntaxe",level:3},{value:"V\xe9rification du fonctionnement des charts",id:"v\xe9rification-du-fonctionnement-des-charts",level:3},{value:"Un README dynamique",id:"un-readme-dynamique",level:2},{value:"Cr\xe9er une page d&#39;accueil",id:"cr\xe9er-une-page-daccueil",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bonne ann\xe9e, Bonne sant\xe9 ! Que la r\xe9ussite et la sant\xe9 soient avec vous !\nJ'esp\xe8re que cette ann\xe9e sera riche en d\xe9couvertes techniques."),(0,r.kt)("p",null,"Mais avant d'\xeatre trop heureux, attaquons avec une mauvaise nouvelle :"),(0,r.kt)("h2",{id:"k8shome-est-mort"},"K8S@HOME est mort"),(0,r.kt)("h3",{id:"quest-ce-que-k8shome-"},"Qu'est-ce que K8S@HOME ?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"K8S-at-home")," est le nom d'une communaut\xe9 promouvant l'usage de Kubernetes comme ",(0,r.kt)("em",{parentName:"p"},"Homelab"),". La communaut\xe9 poss\xe9dait un \xe9norme d\xe9p\xf4t Helm maintenu par quelques membres.\nSur ce d\xe9p\xf4t Helm, on pouvait avoir la plupart des applications selfhosts utilis\xe9es dans les communaut\xe9s Reddit/Discord. ",(0,r.kt)("em",{parentName:"p"},"(Plex, Firefly, Bitwarden etc\u2026)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"K8S@HOME permettait donc de d\xe9ployer de nombreuses applications via Helm, sans s'emb\xeater \xe0 \xe9crire des charts.")),(0,r.kt)("h3",{id:"la-fin-de-k8shome"},"La fin de K8S@HOME"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8s-at-home/charts/issues/1761"},"Si toute bonne chose a une fin : voici celle de K8S@HOME."),"\nSuite au manque de contributeurs, le d\xe9p\xf4t est archiv\xe9 et les charts ne seront plus maintenus."),(0,r.kt)("p",null,"Pour l'instant, \xe7a ne veut pas dire que les Helm d\xe9j\xe0 d\xe9ploy\xe9s \xe0 partir de ",(0,r.kt)("em",{parentName:"p"},"K8S@HOME")," doivent \xeatre arr\xeat\xe9s : les images Docker sont choisies dans les fichiers ",(0,r.kt)("em",{parentName:"p"},"values.yaml"),", et s'il y a faille \u2192 ce seront les images Docker qu'il faudra mettre \xe0 jour, pas le chart."),(0,r.kt)("p",null,"En revanche, avec le temps : nous auront de plus en plus d'instructions obsol\xe8tes et nous ne b\xe9n\xe9ficierons pas des nouvelles fonctionnalit\xe9s pr\xe9vues par Helm."),(0,r.kt)("h2",{id:"la-solution--cr\xe9er-notre-d\xe9p\xf4t-helm"},"La Solution : Cr\xe9er notre d\xe9p\xf4t Helm"),(0,r.kt)("p",null,"Mais oui ! Tout comme nous prenons l'habitude de cr\xe9er un registre Docker avec nos images. Nous pouvons cr\xe9er un d\xe9p\xf4t Helm avec nos charts."),(0,r.kt)("h3",{id:"fonctionnement-dun-chart-helm"},"Fonctionnement d'un chart Helm"),(0,r.kt)("p",null,'De base, un chart Helm se compose de diff\xe9rents fichiers YAML qui seront appliqu\xe9s via kubectl apr\xe8s un traitement de "templating". Ce traitement permet de remplacer des valeurs dans les fichiers (Les utilisateurs de Jinja2 ne seront pas perdus) via le fichier ',(0,r.kt)("strong",{parentName:"p"},"values.yaml")," (qui contient les valeurs de remplacement) et les fichiers ",(0,r.kt)("strong",{parentName:"p"},"_helpers.tpl")," (qui contiennent des fonctions pour traiter les valeurs)."),(0,r.kt)("p",null,"Une fois que les valeurs de remplacements sont appliqu\xe9es sur la template, on envoie les modifications au cluster. (via kubectl ou en communiquant avec l'API)."),(0,r.kt)("p",null,"Exemple rapide :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'#service.yml\napiVersion: v1\nkind: Service\nmetadata:\n  name: baikal\n  labels:\n    {{- include "baikal.labels" . | nindent 4 }}\nspec:\n  type: ClusterIP\n  ports:\n    - port: {{ .Values.service.port }}\n      targetPort: http\n      protocol: TCP\n      name: http\n  selector:\n    {{- include "baikal.selectorLabels" . | nindent 4 }}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#values.yml\nservice:\n  type: ClusterIP\n  port: 80\n")),(0,r.kt)("p",null,'Les fonctions sont appel\xe9es par le mot cl\xe9 "include", et les valeurs du fichier values.yml sont appel\xe9es via le pr\xe9fixe ".Values".'),(0,r.kt)("p",null,"Vous pourrez apprendre \xe0 faire des charts Helm en suivant l'excellente documentation de St\xe9phane Robert : ",(0,r.kt)("a",{parentName:"p",href:"https://blog.stephane-robert.info/post/kubernetes-write-first-chart-helm/"},"ici")),(0,r.kt)("h3",{id:"fonctionnement-dun-d\xe9p\xf4t-helm"},"Fonctionnement d'un d\xe9p\xf4t Helm"),(0,r.kt)("p",null,"Lorsque l'on ajoute un d\xe9p\xf4t, on peut directement voir les charts disponibles dans ce d\xe9p\xf4t :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add qjoly https://qjoly.github.io/helm-charts\\\nhelm search repo qjoly\n")),(0,r.kt)("p",null,"C'est gr\xe2ce au d\xe9p\xf4t qui contient un fichier ",(0,r.kt)("em",{parentName:"p"},"index.yaml")," qui va r\xe9pertorier les charts disponibles et les URLs permettant de les t\xe9l\xe9charger."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sch\xe9ma r\xe9sumant le fonctionnement d&#39;un depot",src:n(2358).Z,width:"1912",height:"822"})),(0,r.kt)("p",null,"Ainsi, lorsque l'on veut ajouter le chart \"",(0,r.kt)("em",{parentName:"p"},"Joplin"),'" d\xe9p\xf4t "',(0,r.kt)("em",{parentName:"p"},"qjoly"),'", notre client va aller chercher dans notre fichier ',(0,r.kt)("em",{parentName:"p"},"index.yaml")," l'url de t\xe9l\xe9chargement (en ",(0,r.kt)("em",{parentName:"p"},"tar.gz"),") du chart. Notre client Helm va ensuite faire le remplacement des valeurs avant d'envoyer le manifest dans notre cluster."),(0,r.kt)("h2",{id:"cr\xe9ation-dun-d\xe9p\xf4t-helm"},"Cr\xe9ation d'un d\xe9p\xf4t Helm"),(0,r.kt)("p",null,"Pour cr\xe9er un d\xe9p\xf4t helm, voici les diff\xe9rentes solutions :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://chartmuseum.com/"},"Utiliser ChartMuseum"),"  "),(0,r.kt)("li",{parentName:"ul"},"Utiliser l'image GitHub Action Chart-Releaser"),(0,r.kt)("li",{parentName:"ul"},"\xe0 la main (en cr\xe9ant le fichier index.yaml manuellement)")),(0,r.kt)("p",null,"Nous, nous passerons par l'image GitHub Action ",(0,r.kt)("em",{parentName:"p"},"(je r\xe9serve une page sur ChartMuseum)"),"."),(0,r.kt)("h3",{id:"usage-de-github-action-pour-g\xe9n\xe9rer-les-releases"},"Usage de GitHub Action pour g\xe9n\xe9rer les releases"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'       - name: Run chart-releaser\n         uses: helm/chart-releaser-action@v1.5.0\n         env:\n           CR_TOKEN: "${{ secrets.GITHUB_TOKEN }}"            \n')),(0,r.kt)("admonition",{title:"Ne pas cr\xe9er de secret",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Il n'est pas n\xe9cessaire de cr\xe9er un secret. ",(0,r.kt)("em",{parentName:"p"},"(celui-ci est automatiquement g\xe9n\xe9r\xe9 durant le CI)"))),(0,r.kt)("p",null,"Gr\xe2ce \xe0 cette image, CR va chercher dans le dossier ",(0,r.kt)("strong",{parentName:"p"},"charts/")," pour g\xe9n\xe9rer l'",(0,r.kt)("em",{parentName:"p"},"index.yaml")," et le stocker directement dans la branche ",(0,r.kt)("strong",{parentName:"p"},"gh-pages"),". ",(0,r.kt)("em",{parentName:"p"},"(pensez \xe0 activer GitHub-pages pour que le site soit accessible \xe0 ",(0,r.kt)("a",{parentName:"em",href:"https://votre-username.github.io/votre-projet"},"https://votre-username.github.io/votre-projet"),")")),(0,r.kt)("p",null,"L'avantage de Chart-Releaser est qu'il va automatiquement cr\xe9er des releases pour chaque chart pr\xe9sent dans notre d\xe9p\xf4t GitHub. Ce sont d'ailleurs ces m\xeames releases qui seront accessibles depuis le fichier ",(0,r.kt)("em",{parentName:"p"},"index.yaml"),'.\nEn revanche, CR ne pourra pas mettre \xe0 jour une version d\xe9j\xe0 existante. Si nous voulons refaire la version 1.5 du chart "Baikal", il n\'en fera rien. Il faudra manuellement supprimer la release/tag avant de relancer le CI.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://qjoly.github.io/helm-charts/index.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Nous avons bien un fichier renvoyant les charts disponibles, une description, ainsi que l'URL o\xf9 l'archive du chart est accessible.")),(0,r.kt)("p",null,"Il est tr\xe8s bien possible de se contenter de \xe7a, mais puisque nous le pouvons : allons plus-loin !"),(0,r.kt)("h2",{id:"tester-les-charts-avant-de-g\xe9n\xe9rer-la-release-ci"},"Tester les charts avant de g\xe9n\xe9rer la release. (CI)"),(0,r.kt)("p",null,"Pour \xeatre s\xfbr de ne pas envoyer des charts non fonctionnels, j'ai voulu m'appuyer sur du CI pour v\xe9rifier le bon-fonctionnement de mon code."),(0,r.kt)("p",null,"La premi\xe8re chose simple que nous pouvons faire... c'est d'utiliser le linter de Helm."),(0,r.kt)("h3",{id:"v\xe9rification-de-la-syntaxe"},"V\xe9rification de la syntaxe"),(0,r.kt)("p",null,"Selon Wikipedia:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Un linter est un outil qui analyse le code source pour signaler les erreurs de programmation, les bogues, les erreurs stylistiques et les constructions suspectes.")),(0,r.kt)("p",null,"L'objectif est donc de v\xe9rifier (avant d'ex\xe9cuter un code) que sa syntaxe est correcte et qu'il n'y a pas d'erreur \xe9vidente.\nNous pouvons directement taper la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"helm lint ."),"."),(0,r.kt)("p",null,"Exemple\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  baikal git:(main) helm lint .\n==> Linting .\n[INFO] Chart.yaml: icon is recommended\n\n1 chart(s) linted, 0 chart(s) failed\n\u279c  baikal git:(main)  \n")),(0,r.kt)("p",null,"Helm lint est CI-Friendly, il renvoie un exit-code diff\xe9rent de 0 lorsque le lintage (",(0,r.kt)("em",{parentName:"p"},"c'est mon article, j'invente les mots que je veux)")," n'est pas correct."),(0,r.kt)("p",null,"Pour tester l'int\xe9gralit\xe9 de mes charts, j'ai \xe9crit un petit script ",(0,r.kt)("em",{parentName:"p"},"helm_lint.sh")," qui va effectuer la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"helm lint .")," dans chaque sous-dossier de ",(0,r.kt)("em",{parentName:"p"},"charts/"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd ../../charts\nfor d in *\ndo\n  echo "Testing $d "\n  (cd "$d" && helm lint )\n  if [ $? -ne 0 ]; then\n    echo "Error"\n    exit 1\n  fi\ndone\n')),(0,r.kt)("p",null,"Ainsi, \xe0 la moindre erreur dans le script (",(0,r.kt)("em",{parentName:"p"},"si le lintage est mauvais"),"), celui-ci s'arr\xeate et renvoie l'exitcode \xe0 1. ",(0,r.kt)("em",{parentName:"p"},"(Ce qui va stopper le CI et g\xe9n\xe9rer une erreur)")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Pour lancer ce script via GitHub Action, j'ai install\xe9 Helm via l'action ",(0,r.kt)("em",{parentName:"p"},'"azure/setup-helm"'),".\nCe qui nous donne ces instructions \xe0 rajouter devant notre chart-releaser :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"       - uses: azure/setup-helm@v3\n         with:\n            token: ${{ secrets.GITHUB_TOKEN }} \n       \n       - name: Helm Lint\n         run: |\n           cd .github/workflows/\n           ./helm_lint.sh\n")),(0,r.kt)("h3",{id:"v\xe9rification-du-fonctionnement-des-charts"},"V\xe9rification du fonctionnement des charts"),(0,r.kt)("p",null,"Si v\xe9rifier le lint se fait en quelques secondes, il est \xe9galement possible de lancer le chart directement depuis le CI Github."),(0,r.kt)("p",null,"Pour cela, il faut au pr\xe9alablement cr\xe9er un cluster Kubernetes ",(0,r.kt)("em",{parentName:"p"},"depuis Github Action"),". Et si cela est possible, c'est gr\xe2ce \xe0 ",(0,r.kt)("em",{parentName:"p"},"KIND")," (",(0,r.kt)("em",{parentName:"p"},"Kubernetes INside Docker"),") qui permet de faire un cluster virtuel dans des conteneurs Docker en seulement quelques commandes."),(0,r.kt)("p",null,"\xc0 rajouter dans notre CI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"       - name: Create k8s Kind Cluster\n         uses: helm/kind-action@v1.5.0\n")),(0,r.kt)("p",null,"Maintenant que nos charts ont une syntaxe correcte, que nous avons un cluster fonctionnel, il faut y installer nos programmes un-par-un et les tester individuellement."),(0,r.kt)("p",null,"Vous rappelez-vous de ",(0,r.kt)("em",{parentName:"p"},"helm_lint.sh")," ? Voici son grand-fr\xe8re : ",(0,r.kt)("em",{parentName:"p"},"helm_deploy.sh"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd ../../charts\nfor d in *\ndo\n  echo "Deploying $d to kind"\n  (\n    set -x\n    cd "$d"\n    if [ -f ".no_ci" ]; then\n      echo "No CI for this chart."\n    else\n      helm install $d . --wait --timeout 120s \n      helm test $d\n    fi\n  )\n  if [ $? -ne 0 ]; then\n    echo "Error during deployment"\n    exit 1\n  else\n    echo "Success ! "\n    helm delete $d || true \n  fi\ndone\n')),(0,r.kt)("p",null,"L'ex\xe9cution de ce script va d\xe9ployer chaque chart individuellement en lan\xe7ant la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"helm test"),", permettant de lancer des tests ",(0,r.kt)("em",{parentName:"p"},"(v\xe9rifier un port, v\xe9rifier le status d'une page web etc..)"),".\nSi le test \xe9choue, ",(0,r.kt)("inlineCode",{parentName:"p"},"helm test")," renverra un exitcode \xe0 1, et le script cr\xe9era une erreur."),(0,r.kt)("p",null,"J'ai \xe9galement la v\xe9rification de la pr\xe9sence d'un fichier ",(0,r.kt)("em",{parentName:"p"},".no_ci"),' qui, comme son nom l\'indique, permet de "skip" un chart. Cela permet de ne pas d\xe9ployer certains charts dans le cluster de test. ',(0,r.kt)("em",{parentName:"p"},"(Par exemple : mon chart plex-nfs qui ne peut pas fonctionner dans Github Action, ou un chart OpenLDAP)"),"."),(0,r.kt)("admonition",{title:"Ressources ?",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"GitHub Action est limit\xe9e \xe0 2000 minutes de CI mensuels. Avec une petite dizaine de charts, mes tests durent environ 5min. (soit 400 tests par mois)"),(0,r.kt)("p",{parentName:"admonition"},"Je suis conscient qu'\xe0 notre \xe9chelle : c'est suffisant. Mais \xe0 garder en t\xeate si on commence \xe0 avoir un d\xe9p\xf4t similaire \xe0 k8s-at-home.")),(0,r.kt)("h2",{id:"un-readme-dynamique"},"Un README dynamique"),(0,r.kt)("p",null,"Et pour rendre votre d\xe9p\xf4t GitHub agr\xe9able pour vos utilisateurs, nous pouvons faire un ",(0,r.kt)("strong",{parentName:"p"},"README")," \xe9voluant au fur et \xe0 mesure que vous cr\xe9ez vos charts."),(0,r.kt)("p",null,"L'id\xe9e est donc de cr\xe9er un tableau comme celui-ci :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Chart Version"),(0,r.kt)("th",{parentName:"tr",align:null},"App Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"baikal"),(0,r.kt)("td",{parentName:"tr",align:null},"Ba\xefkal is a lightweight CalDAV+CardDAV server"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1.6"),(0,r.kt)("td",{parentName:"tr",align:null},"0.9.2")))),(0,r.kt)("p",null,"Ces informations ",(0,r.kt)("em",{parentName:"p"},"(nom, description, version)")," sont toutes accessibles depuis les fichiers ",(0,r.kt)("strong",{parentName:"p"},"Chart.yaml")," pr\xe9sents dans nos charts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v2\nname: baikal\ndescription: Ba\xefkal is a lightweight CalDAV+CardDAV server\ntype: application\nversion: 0.1.6\nappVersion: "0.9.2"\nkeywords:\n- baikal\nhome: https://sabre.io/baikal/\nmaintainers:\n- email: github@thoughtless.eu\n  name: QJOLY\n  url: https://thebidouilleur.xyz\nsources:\n- https://github.com/sabre-io/Baikal\n- https://github.com/QJoly/helm-charts\n')),(0,r.kt)("p",null,"Du coup, vous rappelez-vous des scripts ",(0,r.kt)("em",{parentName:"p"},"helm_lint.sh")," et ",(0,r.kt)("em",{parentName:"p"},"helm_deploy.sh")," ? Eh bien voici le tonton : ",(0,r.kt)("strong",{parentName:"p"},"get_readme.py"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n\nimport sys, logging, os, yaml\nfrom pathlib import Path\nfrom glob import glob\nfrom yaml.loader import SafeLoader\nfrom jinja2 import Template\n\ndef main():\n    files = glob('../../**/Chart.yaml', recursive=True)\n    charts = []\n    for chart in files:\n        with open(chart) as f:\n            data = yaml.load(f, Loader=SafeLoader)\n            print(f\"nom : {data['name']} \\ndescription: {data['description']}\\nversion chart: {data['version']}\\nversion app: {data['appVersion']}\")\n            charts.append([data['name'],data['description'],data['version'], data['appVersion']])\n    print(f\"Nombre de charts: {len(charts)}\")\n    table_template=Path('table.j2').read_text()\n    tm = Template(table_template)\n    tableValue = tm.render({'charts':charts})\n    print(\"----\")\n    readme_template=Path('./README.md.tmpl').read_text().replace(\"CHARTS_TABLE\",tableValue).replace(\"\"\", '\"')\n    print(readme_template)\n    Path(\"../../README.md\").write_text(readme_template)\n\nif __name__ == \"__main__\":\n    main()\n")),(0,r.kt)("p",null,"Ce script Python va r\xe9cup\xe9rer les diff\xe9rentes balises contenues dans les ",(0,r.kt)("em",{parentName:"p"},"Charts.yaml"),", puis va g\xe9n\xe9rer un tableau Markdown \xe0 partir du fichier ",(0,r.kt)("em",{parentName:"p"},"table.j2")," (en jinja2, tout comme Helm), et va cr\xe9er un README \xe0 partir du tableau ainsi que du fichier README.md.tmpl (contenant de la mise en page, et des informations suppl\xe9mentaires)."),(0,r.kt)("p",null,"Voici le r\xe9sultat actuel :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Visuel actuel",src:n(6620).Z,width:"467",height:"621"})),(0,r.kt)("p",null,"\xe0 ajouter sur notre CI :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'       - name: Modifying the readme on main\n         continue-on-error: true\n         run: |\n          git pull\n          git checkout main\n          cd .github/workflows/\n          python -m pip install -r requirements.txt \n          python3 get_readme.py\n          cd ../..\n          git add README.md\n          git commit -m ":lock: Auto-Update README with Charts versions"\n          git push\n')),(0,r.kt)("h2",{id:"cr\xe9er-une-page-daccueil"},"Cr\xe9er une page d'accueil"),(0,r.kt)("p",null,"Dans cet \xe9tat, lorsque nous donnons l'URL du d\xe9p\xf4t \xe0 ajouter aux clients helm de nos utilisateurs : ceux-ci acc\xe8deront sur une 404 (logique, le seul fichier cr\xe9\xe9 est l'index.yaml).\nMon id\xe9e est de reprendre les m\xeames informations du README pour l'afficher sous forme de page web."),(0,r.kt)("p",null,"Si \xe0 la base, je voulais cr\xe9er un syst\xe8me similaire au README (mais en HTML), j'ai opt\xe9 pour la conversion du Markdown en HTML. Et un outil tr\xe8s utilis\xe9 est : ",(0,r.kt)("a",{parentName:"p",href:"https://pandoc.org"},"pandoc")),(0,r.kt)("p",null,"Nous allons donc utiliser Pandoc pour convertir notre readme en HTML, l'instruction est simple :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'       - name: Setup Pandoc\n         uses: nikeee/setup-pandoc@v1\n         \n       - name: Modifying index.html\n         continue-on-error: true\n         run: |\n          index=$(pandoc --from markdown_github README.md --to html5 --standalone --toc --citeproc --no-highlight)\n          git checkout gh-pages\n          echo $index > index.html\n          git add index.html\n          git commit -m "[AUTO] Update index.html of gh-pages"\n          git push       \n')),(0,r.kt)("p",null,"On ne peut pas dire que du grand art, mais le r\xe9sultat est plut\xf4t propre ",(0,r.kt)("em",{parentName:"p"},"(dieu merci, Pandoc int\xe8gre du CSS)"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rendu du site",src:n(7575).Z,width:"352",height:"620"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Dans mon cas, je rajoute m\xeame mon script JS de compteur de vues \xe0 cette \xe9tape"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Cr\xe9er un d\xe9p\xf4t Helm avec les petites modifications que je vous propose ne fera pas de vous un grand d\xe9veloppeur (?) de charts. Mais ces outils vous permettrons de vous faciliter le travail, et de proposer une exp\xe9rience agr\xe9able pour les personnes utilisant vos codes."),(0,r.kt)("p",null,"Il est toujours possible d'aller de plus en plus loin. Je pense notamment \xe0 RenovateBot qui peut vous proposer des modifications ",(0,r.kt)("em",{parentName:"p"},"(ex: mettre \xe0 jour une image par d\xe9faut)"),"."),(0,r.kt)("p",null,"N'h\xe9sitez pas \xe0 me faire parvenir vos retours (mail/Twitter) ou vos propositions d'am\xe9liorations."),(0,r.kt)("p",null,"PS: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/QJoly/helm-charts/"},"Pour obtenir le CI complet ",(0,r.kt)("em",{parentName:"a"},"(en reprenant chaque \xe9tape de cette page)"),", vous pouvez visionner mon d\xe9pot ici.")))}m.isMDXComponent=!0},2358:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fonctionnement-2fb1681d43532eeeaeb947b2f27b91ce.png"},6620:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github_page-41b25ebcdb04710500c1e01b7197c83f.png"},7575:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/renduweb-fd1681156c6186143be4e536f790f4b6.png"}}]);