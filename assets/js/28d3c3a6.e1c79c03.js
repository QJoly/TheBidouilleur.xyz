"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3634],{4137:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,c(c({ref:n},i),{},{components:t})):r.createElement(f,c({ref:n},i))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(4137));const a={title:"Lancer un Fsck sur Longhorn",slug:"longhorn-fsck"},c=void 0,l={unversionedId:"Kubernetes/fix-longhorn-fsck",id:"Kubernetes/fix-longhorn-fsck",title:"Lancer un Fsck sur Longhorn",description:"En relan\xe7ant un de mes pods, je suis tomb\xe9 sur une sale erreur :",source:"@site/docs/Kubernetes/fix-longhorn-fsck.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/longhorn-fsck",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/longhorn-fsck",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Kubernetes/fix-longhorn-fsck.md",tags:[],version:"current",lastUpdatedAt:1686929e3,formattedLastUpdatedAt:"16 juin 2023",frontMatter:{title:"Lancer un Fsck sur Longhorn",slug:"longhorn-fsck"},sidebar:"tutorialSidebar",previous:{title:"Deployer un cluster k3s avec Terraform et Ansible",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/k3s-terraform"},next:{title:"K9S - Une interface en TUI pour administrer votre cluster",permalink:"/TheBidouilleur.xyz/docs/Kubernetes/K9S"}},u={},s=[],i={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En relan\xe7ant un de mes pods, je suis tomb\xe9 sur une sale erreur :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-none"},' Events:                                                                                                                                                               \u2502\n\u2502   Type     Reason                  Age                   From                     Message                                                                             \u2502\n\u2502   ----     ------                  ----                  ----                     -------                                                                             \u2502\n\u2502   Normal   Scheduled               9m46s                 default-scheduler        Successfully assigned basic-apps/ombi-dd746bc7c-kjw2x to node-0-tf                  \u2502\n\u2502   Warning  FailedAttachVolume      9m47s                 attachdetach-controller  Multi-Attach error for volume "pvc-1a7be3fc-e477-454a-ae0e-c42e41ec53dd" Volume is  \u2502\n\u2502 already exclusively attached to one node and can\'t be attached to another                                                                                             \u2502\n\u2502   Normal   SuccessfulAttachVolume  7m41s                 attachdetach-controller  AttachVolume.Attach succeeded for volume "pvc-1a7be3fc-e477-454a-ae0e-c42e41ec53dd" \u2502\n\u2502   Warning  FailedMount             99s (x10 over 5m54s)  kubelet                  MountVolume.MountDevice failed for volume "pvc-1a7be3fc-e477-454a-ae0e-c42e41ec53dd \u2502\n\u2502 " : rpc error: code = Internal desc = \'fsck\' found errors on device /dev/longhorn/pvc-1a7be3fc-e477-454a-ae0e-c42e41ec53dd but could not correct them: fsck from util \u2502\n\u2502 -linux 2.36.2                                                                                                                                                         \u2502\n\u2502 /dev/longhorn/pvc-1a7be3fc-e477-454a-ae0e-c42e41ec53dd contains a file system with errors, check forced.                                                              \u2502\n\u2502 /dev/longhorn/pvc-1a7be3fc-e477-454a-ae0e-c42e41ec53dd: Resize inode not valid.                                                                                       \u2502\n\u2502                                                                                                                                                                       \u2502\n\u2502 /dev/longhorn/pvc-1a7be3fc-e477-454a-ae0e-c42e41ec53dd: UNEXPECTED INCONSISTENCY; RUN fsck MANUALLY.                                                                  \u2502\n\u2502            (i.e., without -a or -p options)                                                                                                                           \u2502\n\u2502   Warning  FailedMount  53s (x4 over 7m44s)  kubelet  Unable to attach or mount volumes: unmounted volumes=[ombi-claim0], unattached volumes=[ombi-claim0 kube-api-ac \u2502\n\u2502 ess-wb5vg[]: timed out waiting for the condition       \n')),(0,o.kt)("p",null,"Ce volume ",(0,o.kt)("em",{parentName:"p"},"(g\xe9r\xe9 par longhorn)")," montre des traces de corruption et il ne semble pas r\xe9ussir \xe0 lancer fsck.\nDans les \xe9tapes \xe0 faire :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Se connecter sur le node h\xe9bergeant l'application"),(0,o.kt)("li",{parentName:"ul"},"Lancer la commande suivante :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"fsck.ext4 -y /dev/longhorn/pvc-1a7be3fc-e477-454a-ae0e-c42e41ec53dd\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Puis tuer le pod pour que le deployment en cr\xe9\xe9 un autre")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete pods <pod> --grace-period=0 --force\n")),(0,o.kt)("p",null,"Une fois relanc\xe9, le pod d\xe9marre tranquillement."))}p.isMDXComponent=!0}}]);