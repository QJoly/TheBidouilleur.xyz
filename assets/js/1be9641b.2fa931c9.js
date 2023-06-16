"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2309],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,g=p["".concat(o,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(4137));const s={title:"Cert-Manager",slug:"getting-started-cert-manager",description:"Cert-Manager est un programme permettant de g\xe9rer les certificats (ainsi que leurs renouvellements) sur des clusters Kubernetes. Nous allons voir comment d\xe9ployer Cert-Manager et g\xe9n\xe9rer nos premiers certificats"},i=void 0,l={unversionedId:"Kubernetes/cert-manager",id:"Kubernetes/cert-manager",title:"Cert-Manager",description:"Cert-Manager est un programme permettant de g\xe9rer les certificats (ainsi que leurs renouvellements) sur des clusters Kubernetes. Nous allons voir comment d\xe9ployer Cert-Manager et g\xe9n\xe9rer nos premiers certificats",source:"@site/docs/Kubernetes/cert-manager.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/getting-started-cert-manager",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/getting-started-cert-manager",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Kubernetes/cert-manager.md",tags:[],version:"current",lastUpdatedAt:1686929e3,formattedLastUpdatedAt:"16 juin 2023",frontMatter:{title:"Cert-Manager",slug:"getting-started-cert-manager",description:"Cert-Manager est un programme permettant de g\xe9rer les certificats (ainsi que leurs renouvellements) sur des clusters Kubernetes. Nous allons voir comment d\xe9ployer Cert-Manager et g\xe9n\xe9rer nos premiers certificats"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes INside Docker",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/kind"},next:{title:"Deployer un cluster k3s avec Terraform et Ansible",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/k3s-terraform"}},o={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Installer Cert-Manager",id:"installer-cert-manager",level:2},{value:"Fonctionnement de Cert-Manager",id:"fonctionnement-de-cert-manager",level:2},{value:"Cr\xe9er ses propres certificats",id:"cr\xe9er-ses-propres-certificats",level:2},{value:"Ajouter un fournisseur (Issuer)",id:"ajouter-un-fournisseur-issuer",level:3},{value:"ACME via challenge HTTP",id:"acme-via-challenge-http",level:4},{value:"ACME via challenge DNS",id:"acme-via-challenge-dns",level:4},{value:"Cr\xe9er un certificat",id:"cr\xe9er-un-certificat",level:3},{value:"Utiliser un certificat",id:"utiliser-un-certificat",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"D'habitude, lorsque je commence \xe0 \xe9crire une documentation, je commence toujours par une d\xe9finition ",(0,a.kt)("em",{parentName:"p"},"(provenant souvent de Wikip\xe9dia)"),". Comme la page Wikip\xe9dia de cert-manager n'est pas tr\xe8s compl\xe8te ",(0,a.kt)("em",{parentName:"p"},"(et aussi pour \xeatre \xe0 la mode et en parler au moins une fois)"),", je vais demander \xe0 ",(0,a.kt)("strong",{parentName:"p"},"ChatGPT")," pour m'\xe9crire cette d\xe9finition."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cert-manager est un outil de gestion de certificats pour Kubernetes. Il permet d'automatiser la g\xe9n\xe9ration, la renouvellement et la gestion des certificats SSL/TLS pour vos applications sur le cluster. Cert-manager prend en charge plusieurs fournisseurs de certification tels que Let's Encrypt, Vault, etc.\nEn utilisant Cert-manager, vous pouvez d\xe9clarer la n\xe9cessit\xe9 d'un certificat pour une application sp\xe9cifique via un objet Kubernetes, appel\xe9 \"Certificate\" ou \"Issuer\". Cert-manager s'occupe alors de la g\xe9n\xe9ration ou du renouvellement du certificat selon les sp\xe9cifications d\xe9finies dans l'objet.\nCert-manager est un composant cl\xe9 pour assurer la s\xe9curit\xe9 et la confidentialit\xe9 des donn\xe9es dans les applications sur Kubernetes. Il facilite la gestion des certificats pour les administrateurs de cluster, ce qui permet d'\xe9viter les erreurs humaines et de garantir la disponibilit\xe9 constante de certificats valides pour les applications.\nEn r\xe9sum\xe9, Cert-manager est un outil puissant pour g\xe9rer les certificats SSL/TLS dans un environnement Kubernetes, permettant une gestion plus efficace et s\xe9curis\xe9e des certificats pour vos applications.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'ps: Oui, oui. ChatGPT m\'a \xe9crit "la renouvellement".')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/94e6e2096b0bc286c36b61494276534d8f70f5e7e6171587c65832f2c621f688/68747470733a2f2f636572742d6d616e616765722e696f2f696d616765732f686967682d6c6576656c2d6f766572766965772e737667",alt:"Schema cert-manager"})),(0,a.kt)("p",null,"Jusqu'\xe0 maintenant, j'utilisais Traefik en tant que Ingress. Celui-ci g\xe9n\xe9rait les certificats et les stockait dans un fichier texte situ\xe9 dans un volume longhorn. ",(0,a.kt)("em",{parentName:"p"},"(en sachant pertinemment que ce n'\xe9tait pas tr\xe8s propre)")),(0,a.kt)("p",null,"Aujourd'hui, c'est l'heure de la propret\xe9.. on passe sur Cert-Manager !"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://media.tenor.com/MoHGGcCxgqYAAAAd/time-to-clean-up-dozer.gif",alt:"M\xeame incroyable pour parler de propret\xe9"})),(0,a.kt)("h2",{id:"installer-cert-manager"},"Installer Cert-Manager"),(0,a.kt)("p",null,"Au jour o\xf9 j'\xe9cris cette page, nous en sommes \xe0 la version ",(0,a.kt)("strong",{parentName:"p"},"v1.11.0"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.yaml\n")),(0,a.kt)("admonition",{title:"Prendre la derni\xe8re version",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Pensez \xe0 r\xe9cup\xe9rer la derni\xe8re version de cert-manager. Vous trouverez les versions disponibles : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cert-manager/cert-manager/releases"},"ici"))),(0,a.kt)("h2",{id:"fonctionnement-de-cert-manager"},"Fonctionnement de Cert-Manager"),(0,a.kt)("p",null,"L'installation de Cert-Manager va diff\xe9rents objets. Ceux qui nous int\xe9ressent sont :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les Issuers"),(0,a.kt)("li",{parentName:"ul"},"Les certificats")),(0,a.kt)("p",null,"Les Issuers sont les fournisseurs de certificats. Cert-Manager est compatible avec les fournisseurs suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ACME HTTP/DNS (compatible letsencrypt)"),(0,a.kt)("li",{parentName:"ul"},"Auto-sign\xe9 ",(0,a.kt)("em",{parentName:"li"},"(Je conseille plut\xf4t de g\xe9n\xe9rer son propre CA)")),(0,a.kt)("li",{parentName:"ul"},"CA custom"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.vaultproject.io/"},"Vault")),(0,a.kt)("li",{parentName:"ul"},"Venafi")),(0,a.kt)("p",null,"Pour le moment, seul le fournisseur LetsEncrypt nous int\xe9resse. ",(0,a.kt)("em",{parentName:"p"},"(Nous verrons peut-\xeatre le cas du CA un jour)")),(0,a.kt)("h2",{id:"cr\xe9er-ses-propres-certificats"},"Cr\xe9er ses propres certificats"),(0,a.kt)("h3",{id:"ajouter-un-fournisseur-issuer"},"Ajouter un fournisseur (Issuer)"),(0,a.kt)("h4",{id:"acme-via-challenge-http"},"ACME via challenge HTTP"),(0,a.kt)("p",null,"Le cas le plus courant lorsqu'on g\xe9n\xe8re un certificat est d'utiliser LetsEncrypt avec un challenge HTTP. ",(0,a.kt)("em",{parentName:"p"},"(ex, CertBot)"),"\nSa configuration est assez rapide, voici le manifest permettant d'ajouter le ACME de LetsEncrypt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: cert-manager.io/v1\nkind: Issuer\nmetadata:\n  name: letsencrypt\nspec:\n  acme:\n    server: https://acme-v02.api.letsencrypt.org/directory\n    email: votre_email@ici.tld\n    privateKeySecretRef:\n      name: letsencrypt\n    solvers:\n    - selector: {}\n      http01:\n        ingress:\n          class: istio\n")),(0,a.kt)("p",null,"\xe0 retenir :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Il faut bien donner l'ingress utilis\xe9, le challenge a besoin d'\xeatre fait sur le port 80 en http."),(0,a.kt)("li",{parentName:"ul"},"l'email fourni servira \xe0 LetsEncrypt de vous notifier lorsque le certificat doit \xeatre renouvel\xe9.")),(0,a.kt)("admonition",{title:"Rate-Limit",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Si vous \xe9chouez trop de challenges ",(0,a.kt)("em",{parentName:"p"},"(ou que vous g\xe9n\xe9rez trop de fois le m\xeame certificat)"),". Il se peut que vous soyez bloqu\xe9 par LetsEncrypt.\nLorsque vous voulez juste tester les proc\xe9dures, il est possible d'utiliser l'API ",(0,a.kt)("strong",{parentName:"p"},"staging")," ",(0,a.kt)("em",{parentName:"p"},"(donc sans rate-limits).")),(0,a.kt)("p",{parentName:"admonition"},"Les certificats ne seront pas accept\xe9s par votre navigateur, mais \xe0 des fins de tests : c'est l'id\xe9al."),(0,a.kt)("p",{parentName:"admonition"},"Il vous suffit de remplacer l'url par ",(0,a.kt)("inlineCode",{parentName:"p"},"https://acme-staging-v02.api.letsencrypt.org/directory"))),(0,a.kt)("p",null,"Il vous est possible de v\xe9rifier que l'Issuer est bien pr\xe9sent via la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  kubectl describe issuers.cert-manager.io letsencrypt`. \n\nStatus:\n  Acme:\n    Last Registered Email:  redacted\n    Uri:                    https://acme-v02.api.letsencrypt.org/acme/acct/941914187\n  Conditions:\n    Last Transition Time:  2023-01-31T10:05:12Z\n    Message:               The ACME account was registered with the ACME server\n    Observed Generation:   1\n    Reason:                ACMEAccountRegistered\n    Status:                True\n    Type:                  Ready\nEvents:                    <none>\n")),(0,a.kt)("h4",{id:"acme-via-challenge-dns"},"ACME via challenge DNS"),(0,a.kt)("p",null,"Avant tout : votre fournisseur n'est pas toujours compatible avec cette m\xe9thode. J'utilise ",(0,a.kt)("strong",{parentName:"p"},"CloudFlare")," qui ",(0,a.kt)("em",{parentName:"p"},"(gr\xe2ce \xe0 son API)")," permet de cr\xe9er des entr\xe9es dans votre domaine pour r\xe9soudre le challenge.\nCette m\xe9thode poss\xe8de certains avantages comme le fait que nous n'avons pas \xe0 ouvrir un port pour r\xe9soudre le challenge."),(0,a.kt)("p",null,"Pour utiliser l'API, il faut cr\xe9er un token pour authentifier notre requ\xeate. Rendez-vous sur ",(0,a.kt)("a",{parentName:"p",href:"https://dash.cloudflare.com/profile/api-tokens"},"cette page")," pour cr\xe9er votre jeton. Les permissions n\xe9c\xe9ssaires sont :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zone.Zone READ"),(0,a.kt)("li",{parentName:"ul"},"Zone.DNS WRITE")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"G\xe9n\xe9ration Token",src:r(4344).Z,width:"678",height:"735"})),(0,a.kt)("p",null,"Avec le token, cr\xe9ez ce secret:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudflare-api-token-secret\ntype: Opaque\nstringData:\n  api-token: aaaaaabbbbbbbcccccccdddddd\n")),(0,a.kt)("p",null,"Et d'ajouter notre fournisseur Cloudflare. ",(0,a.kt)("em",{parentName:"p"},"(Celui-ci utilisera notre secret)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: cert-manager.io/v1\nkind: Issuer\nmetadata:\n  name: cloudflare\nspec:\n  acme:\n    email: votre_email@ici.tld\n    server: https://acme-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      name: cloudflare\n    solvers:\n    - dns01:\n        cloudflare:\n          apiTokenSecretRef:\n            name: cloudflare-api-token-secret\n            key: api-token\n")),(0,a.kt)("h3",{id:"cr\xe9er-un-certificat"},"Cr\xe9er un certificat"),(0,a.kt)("p",null,"Fournisseur configur\xe9, il est maintenant possible de cr\xe9er notre certificat. Je vais g\xe9n\xe9rer le mien pour mon domaine ",(0,a.kt)("inlineCode",{parentName:"p"},"test.thebidouilleur.xyz"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: test-thebidouilleur\nspec:\n  secretName: test-thebidouilleur-tls\n  issuerRef:\n    name: letsencrypt\n  commonName: test.thebidouilleur.xyz\n  dnsNames:\n  - test.thebidouilleur.xyz\n")),(0,a.kt)("p",null,"V\xe9rifiez bien que le certificat est g\xe9n\xe9r\xe9 ",(0,a.kt)("strong",{parentName:"p"},"et")," disponible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  kubectl describe certificate test-thebidouilleur\nEvents:\n  Type    Reason     Age    From                                       Message\n  ----    ------     ----   ----                                       -------\n  Normal  Issuing    7m9s   cert-manager-certificates-trigger          Issuing certificate as Secret was previously issued by Issuer.cert-manager.io/letsencrypt\n  Normal  Reused     7m9s   cert-manager-certificates-key-manager      Reusing private key stored in existing Secret resource "test-thebidouilleur-tls"\n  Normal  Requested  7m8s   cert-manager-certificates-request-manager  Created new CertificateRequest resource "test-thebidouilleur-j8x9j"\n  Normal  Issuing    5m46s  cert-manager-certificates-issuing          The certificate has been successfully issued\n')),(0,a.kt)("p",null,"Et que le secret soit bien cr\xe9\xe9 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  kubectl get secret test-thebidouilleur-tls\nNAME                      TYPE                DATA   AGE\ntest-thebidouilleur-tls   kubernetes.io/tls   2      169m\n")),(0,a.kt)("h2",{id:"utiliser-un-certificat"},"Utiliser un certificat"),(0,a.kt)("p",null,"Voici un exemple de yaml permettant de g\xe9n\xe9rer un Ingress en utilisant le secret."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: test-thebidouilleur\n  annotations:\n    kubernetes.io/ingress.class: "istio"\nspec:\n  tls:\n  - hosts:\n    - test.thebidouilleur.xyz\n    secretName: test-thebidouilleur-tls\n  rules:\n  - host: "test.thebidouilleur.xyz"\n    http:\n      paths:\n        - pathType: Prefix\n          path: "/"\n          backend:\n            service:\n              name: srvc-thebidouilleur\n              port:\n                number: 80\n')),(0,a.kt)("p",null,"Ou avec un objet IngressRoute si ",(0,a.kt)("em",{parentName:"p"},"(comme moi)")," vous utilisez Traefik."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: test-thebidouilleur\nspec:\n  entryPoints:\n    - websecure\n  routes:\n    - match: Host(`test.thebidouilleur.xyz`)\n      kind: Rule\n      services:\n        - name: srvc-thebidouilleur\n          port: 80\n  tls:\n    secretName: test-thebidouilleur-tls\n")))}m.isMDXComponent=!0},4344:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cloudflare-zone-7c3c2e4168efc5f585dd12b48e6c0deb.png"}}]);