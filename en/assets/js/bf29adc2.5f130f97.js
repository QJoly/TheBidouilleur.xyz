"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1449],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return t?r.createElement(k,a(a({ref:n},p),{},{components:t})):r.createElement(k,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(4137));const s={slug:"kind",title:"Kubernetes INside Docker",description:"Avoir un environnement de d\xe9veloppement est important dans tous les domaines. L'administration d'un Cluster Kubernetes n'\xe9chappe pas \xe0 la r\xe8gle. Nous allons donc voir comment cr\xe9er un cluster temporaire directement \xe0 partir de conteneurs Docker."},a=void 0,i={unversionedId:"Kubernetes/Kind",id:"Kubernetes/Kind",title:"Kubernetes INside Docker",description:"Avoir un environnement de d\xe9veloppement est important dans tous les domaines. L'administration d'un Cluster Kubernetes n'\xe9chappe pas \xe0 la r\xe8gle. Nous allons donc voir comment cr\xe9er un cluster temporaire directement \xe0 partir de conteneurs Docker.",source:"@site/docs/Kubernetes/Kind.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/kind",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/kind",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Kubernetes/Kind.md",tags:[],version:"current",frontMatter:{slug:"kind",title:"Kubernetes INside Docker",description:"Avoir un environnement de d\xe9veloppement est important dans tous les domaines. L'administration d'un Cluster Kubernetes n'\xe9chappe pas \xe0 la r\xe8gle. Nous allons donc voir comment cr\xe9er un cluster temporaire directement \xe0 partir de conteneurs Docker."},sidebar:"tutorialSidebar",previous:{title:"Cr\xe9ation d\u2019un cluster ARM",permalink:"/TheBidouilleur.xyz/en/docs/Homelab/cluster-arm"},next:{title:"Cert-Manager",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/getting-started-cert-manager"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Pr\xe9-requis si vous utilisez Docker en RootLess",id:"pr\xe9-requis-si-vous-utilisez-docker-en-rootless",level:2},{value:"Configuration KIND",id:"configuration-kind",level:2}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Lorsque l\u2019on d\xe9veloppe un chart, ou que l\u2019on souhaite faire des tests sur Kubernetes ",(0,o.kt)("em",{parentName:"p"},"(ex\xa0: rbac)"),", nous n\u2019allons pas faire ces tests sur un environnement de production. Nous n\u2019avons non-plus pas toujours de cluster d\xe9di\xe9 aux tests.\nAlors avec l\u2019aide de ",(0,o.kt)("strong",{parentName:"p"},"KIND")," : nous allons pouvoir cr\xe9er ce cluster de test, et sans devoir installer la moindre machine virtuelle. "),(0,o.kt)("p",null,"Comme son nom l\u2019indique ce soft permet de cr\xe9er un cluster \xe0 partir de ",(0,o.kt)("strong",{parentName:"p"},"conteneurs Docker"),". C\u2019est d\u2019ailleurs ce que j\u2019utilise dans le CI pr\xe9sent\xe9 ici : ",(0,o.kt)("a",{parentName:"p",href:"/blog/Creer-son-registre-helm"},"Cr\xe9er un d\xe9pot Helm")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Ma configuration : "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Docker  : 20.10.22"),(0,o.kt)("li",{parentName:"ul"},"Kind    : 0.17.0"),(0,o.kt)("li",{parentName:"ul"},"Linux   : Ubuntu amd64 (6.0.12)"))),(0,o.kt)("h2",{id:"pr\xe9-requis-si-vous-utilisez-docker-en-rootless"},"Pr\xe9-requis si vous utilisez Docker en RootLess"),(0,o.kt)("admonition",{title:"Docker en Rootless",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Vous pouvez passer cette partie si vous n\u2019utilisez pas Docker en Rootless. ")),(0,o.kt)("p",null,"V\xe9rifiez si les ",(0,o.kt)("em",{parentName:"p"},"cgroup v2")," sont activ\xe9s sur votre poste : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c grep cgroup /proc/filesystems\nnodev   cgroup\nnodev   cgroup2\n")),(0,o.kt)("p",null,"Si ce n\u2019est pas le cas, vous devrez ajouter ",(0,o.kt)("inlineCode",{parentName:"p"},'GRUB_CMDLINE_LINUX="systemd.unified_cgroup_hierarchy=1"')," \xe0 votre fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/default/grub"),", puis mettre \xe0 jour votre grub : ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo update-grub"),". "),(0,o.kt)("p",null,"Lancez ensuite un cluster kind : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c kind create cluster      \nERROR: failed to create cluster: running kind with rootless provider requires setting systemd property "Delegate=yes", see https://kind.sigs.k8s.io/docs/user/rootless/\n')),(0,o.kt)("p",null,"Si vous tombez sur la m\xeame erreur que moi, alors suivez les prochaines \xe9tapes. ",(0,o.kt)("em",{parentName:"p"},"(sinon on se retrouve un peu plus bas)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /etc/systemd/system/user@.service.d\nsudo sh -c 'cat >/etc/systemd/system/user@.service.d/delegate.conf <<EOF\n[Service]\nDelegate=yes\nEOF'\nsudo sh -c 'cat >>/etc/modules-load.d/iptables.conf <<EOF\nip6_tables\nip6table_nat\nip_tables\niptable_nat\nEOF'\nsudo systemctl daemon-reload\n")),(0,o.kt)("p",null,"Nous retentons apr\xe8s coup : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c kind create cluster         \nCreating cluster "kind" ...\n \u2713 Ensuring node image (kindest/node:v1.25.3) \ud83d\uddbc \n \u2713 Preparing nodes \ud83d\udce6  \n \u2713 Writing configuration \ud83d\udcdc \n \u2713 Starting control-plane \ud83d\udd79\ufe0f \n \u2713 Installing CNI \ud83d\udd0c \n \u2713 Installing StorageClass \ud83d\udcbe \nSet kubectl context to "kind-kind"\nYou can now use your cluster with:\n\nkubectl cluster-info --context kind-kind\n\nHave a nice day! \ud83d\udc4b\n\u279c kubectl cluster-info --context kind-kind\nKubernetes control plane is running at https://127.0.0.1:45975\nCoreDNS is running at https://127.0.0.1:45975/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use \'kubectl cluster-info dump\'.\n')),(0,o.kt)("p",null,"Pour le supprimer : ",(0,o.kt)("inlineCode",{parentName:"p"},"kind delete cluster kind-kind")),(0,o.kt)("admonition",{title:"Des limitations d\u2019utiliser Docker en rootless",type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Les montagnes ",(0,o.kt)("em",{parentName:"li"},"OverlayFS")," ne peuvent \xeatre activ\xe9 que si votre kernel est ",(0,o.kt)("em",{parentName:"li"},">= 5.11")),(0,o.kt)("li",{parentName:"ul"},"Impossible de mount les ",(0,o.kt)("em",{parentName:"li"},"block storages")," ",(0,o.kt)("em",{parentName:"li"},"(iSCSI, Aws, Local Volume)")),(0,o.kt)("li",{parentName:"ul"},"Impossible de mount un partage ",(0,o.kt)("em",{parentName:"li"},"NFS")))),(0,o.kt)("admonition",{title:"Kubectx",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Je vous conseille d\u2019utiliser ",(0,o.kt)("em",{parentName:"p"},"Kubectx")," pour changer votre context utilis\xe9."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"kubectx kind-kind\n"))),(0,o.kt)("p",null,"Les conteneurs \u2018nodes\u2019 sont visibles directement avec la ",(0,o.kt)("em",{parentName:"p"},"cli")," Docker. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  docker ps\nCONTAINER ID   IMAGE                  COMMAND                  CREATED        STATUS          PORTS                      NAMES\n288826f42d30   kindest/node:v1.25.3   "/usr/local/bin/entr\u2026"   14 hours ago   Up 41 minutes   127.0.0.1:6443->6443/tcp   test-control-plane\n98738fa957e4   kindest/node:v1.25.3   "/usr/local/bin/entr\u2026"   14 hours ago   Up 41 minutes                              test-worker\n')),(0,o.kt)("h2",{id:"configuration-kind"},"Configuration KIND"),(0,o.kt)("p",null,"Si l\u2019usage de KIND est assez simple, il est toujours possible de rajouter des petits param\xe8tres pour l\u2019adapter \xe0 nos besoins. "),(0,o.kt)("p",null,"Par exemple, il est possible de choisir le r\xe9seau des pods/services. Il suffit de cr\xe9er un fichier yaml qui accueillera notre configuration :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# kind-config.yml\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nname: reseau-en-192\nnetworking:\n  podSubnet: "192.168.244.0/24"\n  serviceSubnet: "192.168.137.0/24"\n')),(0,o.kt)("p",null,"Et nous cr\xe9ons ce cluster \xe0 partir de notre fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"kind-config.yml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c kind create cluster --config=kind-config.yml\n")),(0,o.kt)("p",null,"Et nous observons les IPs choisies par notre cluster: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  kubectl get pods -A -o wide\nNAMESPACE            NAME                                                  READY   STATUS    RESTARTS   AGE   IP              NODE                          NOMINATED NODE   READINESS GATES\nkube-system          coredns-565d847f94-pmgqf                              1/1     Running   0          28s   192.168.244.2   reseau-en-192-control-plane   <none>           <none>\nkube-system          coredns-565d847f94-rd5jh                              1/1     Running   0          28s   192.168.244.3   reseau-en-192-control-plane   <none>           <none>\nkube-system          etcd-reseau-en-192-control-plane                      1/1     Running   0          42s   172.18.0.2      reseau-en-192-control-plane   <none>           <none>\nkube-system          kindnet-4bhxr                                         1/1     Running   0          28s   172.18.0.2      reseau-en-192-control-plane   <none>           <none>\nkube-system          kube-apiserver-reseau-en-192-control-plane            1/1     Running   0          42s   172.18.0.2      reseau-en-192-control-plane   <none>           <none>\nkube-system          kube-controller-manager-reseau-en-192-control-plane   1/1     Running   0          42s   172.18.0.2      reseau-en-192-control-plane   <none>           <none>\nkube-system          kube-proxy-g88wr                                      1/1     Running   0          28s   172.18.0.2      reseau-en-192-control-plane   <none>           <none>\nkube-system          kube-scheduler-reseau-en-192-control-plane            1/1     Running   0          43s   172.18.0.2      reseau-en-192-control-plane   <none>           <none>\nlocal-path-storage   local-path-provisioner-684f458cdd-bdnmt               1/1     Running   0          28s   192.168.244.4   reseau-en-192-control-plane   <none>           <none>\n\u279c  kubectl get service -A -o wide\nNAMESPACE     NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                  AGE   SELECTOR\ndefault       kubernetes   ClusterIP   192.168.137.1    <none>        443/TCP                  75s   <none>\nkube-system   kube-dns     ClusterIP   192.168.137.10   <none>        53/UDP,53/TCP,9153/TCP   74s   k8s-app=kube-dns\n")),(0,o.kt)("p",null,"Nous avons bien nos pods sur le r\xe9seau 192.168.244.0/24, et les services sur 192.168.137.0/24. "),(0,o.kt)("admonition",{title:"R\xe9seau en 172.18.0.0/16",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Ce r\xe9seau est g\xe9r\xe9 par Docker, Kind n\u2019a pas la main-mise sur le choix des IPs.\nC\u2019est un r\xe9seau Docker ind\xe9pendant des autres conteneurs.\nPour voir sa configuration : ",(0,o.kt)("inlineCode",{parentName:"p"},"docker network inspect kind"))),(0,o.kt)("p",null,"Si l\u2019on souhaite avoir un second noeud, il suffit de mettre l\u2019instruction : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"[...]\nnodes:\n- role: control-plane\n- role: worker\n")),(0,o.kt)("p",null,"On peut \xe9galement ajouter des labels aux nodes :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"[...]\n- role: worker\n  labels:\n    role: db-controler\n")),(0,o.kt)("p",null,"Les possibilit\xe9s sont vastes, la documentation de KIND est tr\xe8s claire et montre de nombreux cas d\u2019utilisations. Voici le fichier que j\u2019utilise au quotidien dans mes diff\xe9rents tests : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nname: mon-petit-cluster\nnetworking:\n  apiServerAddress: "127.0.0.1"\n  apiServerPort: 6443\nnodes:\n- role: control-plane\n  extraPortMappings:\n  - containerPort: 3000\n    hostPort: 3000\n    listenAddress: "127.0.0.1"\n    protocol: TCP\n- role: worker\n  labels:\n    tier: backend\n')))}c.isMDXComponent=!0}}]);