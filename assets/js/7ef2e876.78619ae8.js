"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4599],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(t),d=o,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var i=2;i<l;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=t(7462),o=(t(7294),t(4137));const l={slug:"longhorn",title:"Longhorn, stockage distribu\xe9",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["kubernetes"]},a=void 0,s={permalink:"/TheBidouilleur.xyz/blog/longhorn",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2022-07-24-Longhorn/index.md",source:"@site/blog/2022-07-24-Longhorn/index.md",title:"Longhorn, stockage distribu\xe9",description:"Je suis en plein apprentissage de Kubernetes et des solutions pour g\xe9rer un cluster, je pratique sur un cluster de test sur lequel se trouve des petits conteneurs comme celui g\xe9rant thebidouilleur.xyz.",date:"2022-07-24T00:00:00.000Z",formattedDate:"24 juillet 2022",tags:[{label:"kubernetes",permalink:"/TheBidouilleur.xyz/blog/tags/kubernetes"}],readingTime:3.815,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"longhorn",title:"Longhorn, stockage distribu\xe9",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["kubernetes"]},prevItem:{title:"Mes d\xe9buts \xe0 la gyroroue",permalink:"/TheBidouilleur.xyz/blog/gyroroue"},nextItem:{title:"Mes d\xe9buts avec s3",permalink:"/TheBidouilleur.xyz/blog/s3contabo"}},u={authorsImageUrls:[void 0]},i=[{value:"Qu&#39;est ce que Longhorn ?",id:"quest-ce-que-longhorn-",level:2},{value:"Valeurs concr\xe8tes",id:"valeurs-concr\xe8tes",level:3},{value:"Comment d\xe9ployer Longhorn ?",id:"comment-d\xe9ployer-longhorn-",level:2},{value:"Mise en pratique Longhorn",id:"mise-en-pratique-longhorn",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:i},c="wrapper";function m(e){let{components:n,...l}=e;return(0,o.kt)(c,(0,r.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Je suis en plein apprentissage de Kubernetes et des solutions pour g\xe9rer un cluster, je pratique sur un cluster de test sur lequel se trouve des petits conteneurs comme celui g\xe9rant ",(0,o.kt)("em",{parentName:"p"},"thebidouilleur.xyz"),"."),(0,o.kt)("p",null,"Longhorn est un incontournable dans l'univers Kubernetes ",(0,o.kt)("em",{parentName:"p"},"(et notamment ",(0,o.kt)("strong",{parentName:"em"},"k3s"),")"),", je ne pouvais pas continuer \xe0 apprendre sans m'attarder sur Longhorn.\nMais avant tout.."),(0,o.kt)("h2",{id:"quest-ce-que-longhorn-"},"Qu'est ce que Longhorn ?"),(0,o.kt)("p",null,"Longhorn se pr\xe9sente sous cette simple phrase :"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Longhorn is a lightweight, reliable and easy-to-use distributed block storage system for Kubernetes.")),(0,o.kt)("p",null,"Mais on peut aller un peu plus loin que cette simple phrase...\nLonghorn est syst\xe8me de centralisation de stockage entre les noeuds du cluster. Cela veut dire qu'au lieu d'utiliser un stockage externe comme un NFS ",(0,o.kt)("em",{parentName:"p"},"(",(0,o.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"ou autre, voici la liste des possibilit\xe9s"))," on va pouvoir utiliser garder les donn\xe9es en internes en utiliser les disques de nos machines pr\xe9sentes dans le cluster."),(0,o.kt)("p",null,"Et si vous vous posez la m\xeame question que moi avant de connaitre : Longhorn va faire l'\xe9quivalent d'un RAID 0 en r\xe9plicant les donn\xe9es sur plusieurs noeuds pour \xe9viter que la perte d'une machine entraine la perte de donn\xe9e."),(0,o.kt)("h3",{id:"valeurs-concr\xe8tes"},"Valeurs concr\xe8tes"),(0,o.kt)("p",null,"Par exemple, en comptant les disques de mes noeuds j'ai 4x32Gio et 1x16Gio, soit 144Gio ",(0,o.kt)("em",{parentName:"p"},"( ou 132Go parce que Rancher utilise cette valeur )"),".\nSur ces 132Go, j'en occupe 36 actuellement, je peux en utiliser 56 sur Longhorn, et j'en ai 40 r\xe9serv\xe9s aux r\xe9plicas. ",(0,o.kt)("em",{parentName:"p"},"(par d\xe9faut, Rancher g\xe9n\xe8re 3 replicas)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"panel longhorn",src:t(1985).Z,width:"2560",height:"887"})),(0,o.kt)("h2",{id:"comment-d\xe9ployer-longhorn-"},"Comment d\xe9ployer Longhorn ?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.0/deploy/install/"},(0,o.kt)("em",{parentName:"a"},"lien de la documentation officielle"))),(0,o.kt)("p",null,"On peut d\xe9ployer Longhorn via Helm, le catalogue Rancher ou juste via Kubectl ",(0,o.kt)("em",{parentName:"p"},"(l'option que j'ai choisi)")),(0,o.kt)("p",null,"  kubectl apply -f ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/longhorn/longhorn/v1.3.0/deploy/longhorn.yaml"},"https://raw.githubusercontent.com/longhorn/longhorn/v1.3.0/deploy/longhorn.yaml")),(0,o.kt)("admonition",{title:"Version !",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Attention, cette commande va uniquement d\xe9ployer la version ",(0,o.kt)("strong",{parentName:"p"},"1.3.0")," de longhorn, pensez \xe0 r\xe9cup\xe9rer le dernier lien dans la documentation ",(0,o.kt)("em",{parentName:"p"},"(ou \xe9diter le lien que j'ai mis)")),(0,o.kt)("p",{parentName:"admonition"},"Par mesure de s\xe9curit\xe9, il faut toujours v\xe9rifier ce que contient le yaml appliqu\xe9. Pensez \xe0 jeter un coup d'oeil !")),(0,o.kt)("p",null,"Il faudra attendre que les pods se d\xe9ploient pour commencer \xe0 utiliser Longhorn.\nPour v\xe9rifier l'\xe9tat en temps r\xe9el, la documentation vous propose la commande suivante:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods \\\n--namespace longhorn-system \\\n--watch\n")),(0,o.kt)("p",null,"Mais vous pouvez aussi bien utiliser ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://k9scli.io/"},"k9s")),"."),(0,o.kt)("p",null,"Une fois OK, nous pourrons d\xe9ployer notre premier pod li\xe9 \xe0 longhorn."),(0,o.kt)("h2",{id:"mise-en-pratique-longhorn"},"Mise en pratique Longhorn"),(0,o.kt)("p",null,"Voici le manifest que l'on va d\xe9ployer pour utiliser un volume dans longhorn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: longhorn-nginx-thebidouilleur-demo\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: longhorn\n  resources:\n    requests:\n      storage: 1Gi\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: longhorn-thebidouilleur-demo\n  namespace: default\nspec:\n  containers:\n    - name: block-volume-test\n      image: nginx:stable-alpine\n      imagePullPolicy: IfNotPresent\n      volumeMounts:\n        - name: volume-longhorn\n          mountPath: "/usr/share/nginx/html"\n      ports:\n        - containerPort: 80\n  volumes:\n    - name: volume-longhorn\n      persistentVolumeClaim:\n        claimName: longhorn-nginx-thebidouilleur-demo \n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Volume fonctionnel",src:t(117).Z,width:"2560",height:"269"})),(0,o.kt)("p",null,"On demande bien 1Gio \xe0 allouer \xe0 ce volume ",(0,o.kt)("em",{parentName:"p"},"(\xe7a influera sur le stockage allou\xe9 pour les replicas)")," et on d\xe9ploie un nginx classique.\nUne fois d\xe9ploy\xe9, on va ouvrir un tunnel vers ce pod:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward longhorn-thebidouilleur-demo 8080:80\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"}," En sachant que le tunnel doit s'ouvrir sur votre poste ",(0,o.kt)("strong",{parentName:"p"},"local")," ",(0,o.kt)("em",{parentName:"p"},"(et non sur un des noeuds du cluster)"),".\nJe vous invite \xe0 consulter ",(0,o.kt)("a",{parentName:"p",href:"/docs/Kubernetes/kube-client"},"cette page")," pour mettre kubectl sur votre machine.")),(0,o.kt)("p",null,"et si on interroge le nginx, on tombe \xe9videmment sur une erreur 403 puisque le dossier longhorn est vide.\nOn va donc cr\xe9er notre fichier ",(0,o.kt)("em",{parentName:"p"},"index.html")," directement depuis le pod."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl exec longhorn-thebidouilleur-demo -i -t -- /bin/sh\necho "Hello World" > /usr/share/nginx/html/index.html\n')),(0,o.kt)("p",null,"Et en r\xe9interrogeant notre pod : on tombe bien sur notre ",(0,o.kt)("em",{parentName:"p"},"Hello World")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[thebidouilleur@bertha ~]$ curl localhost:8080\nHello World\n")),(0,o.kt)("p",null,"Maintenant.. c'est bien mignon mais est-ce que nous gardons bien notre page en cas de suppression du pod ?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete pod longhorn-thebidouilleur-demo\n")),(0,o.kt)("p",null,"On voit bien que sur le dashboard longhorn : le volume est pass\xe9 en deattach. ",(0,o.kt)("em",{parentName:"p"},"(ce qui veut dire que les donn\xe9es sont toujours pr\xe9sentes mais pas utilis\xe9es sur un pod)")),(0,o.kt)("p",null,"On va r\xe9-appliquer le m\xeame manifest pour recr\xe9er notre pod et refaire le m\xeame tunnel pour acc\xe9der au nginx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[thebidouilleur@bertha ~]$ curl localhost:8080\nHello World\n")),(0,o.kt)("p",null,'Nous retrouvons bel et bien notre page "Hello World"!'),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Longhorn est un outil extremement simple d'utilisation et permettant d'\xe9viter de cr\xe9er une solution externe au cluster qui serait moins pratique \xe0 g\xe9rer. Je ne suis pas non-plus aller tr\xe8s loin dans ses fonctionnalit\xe9es et je vous laisse vous faire votre propre avis pour ",(0,o.kt)("em",{parentName:"p"},"longhorn en production")," (et pour \xe7a, allez voir l'article du site ",(0,o.kt)("a",{parentName:"p",href:"https://easyadmin.tech/longhorn-solution-volumes-kubernetes-production"},(0,o.kt)("em",{parentName:"a"},"easyadmin.tech")),")\nLonghorn est le bienvenue dans mon Homelab de test et sera au centre de celui-ci !"))}m.isMDXComponent=!0},1985:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dashboard_longhorn-80b3e31341f5fc234cdd466ed7216cac.png"},117:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/volume_ok-49dfcf959207c5da999534cad76bba07.png"}}]);