"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2389],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,u(u({ref:t},c),{},{components:n})):r.createElement(k,u({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,u=new Array(a);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:l,u[1]=o;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(4137));const a={title:"Kubectl sur machine cliente",slug:"kube-client"},u=void 0,o={unversionedId:"Kubernetes/kube-client",id:"Kubernetes/kube-client",title:"Kubectl sur machine cliente",description:'Pour administrer votre cluster, vous pouvez vous connecter \xe0 une machine "maitre" (avec le r\xf4le control-plane) et g\xe9rer votre cluster via l\'utilitaire kubectl.',source:"@site/docs/Kubernetes/kube-client.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/kube-client",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/kube-client",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Kubernetes/kube-client.md",tags:[],version:"current",lastUpdatedAt:1686929e3,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"Kubectl sur machine cliente",slug:"kube-client"},sidebar:"tutorialSidebar",previous:{title:"Build docker image on a k3s cluster",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/kaniko"},next:{title:"Using a Private Registry",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/private-registry"}},i={},s=[{value:"Installation de Kubectl",id:"installation-de-kubectl",level:2},{value:"Pour installer via le binaire (toutes distributions)",id:"pour-installer-via-le-binaire-toutes-distributions",level:3},{value:"Debian, Ubuntu",id:"debian-ubuntu",level:3},{value:"Arch Linux",id:"arch-linux",level:3},{value:"Nix",id:"nix",level:3},{value:"R\xe9cup\xe9rer le kube/config",id:"r\xe9cup\xe9rer-le-kubeconfig",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pour administrer votre cluster, vous pouvez vous connecter \xe0 une machine ",(0,l.kt)("em",{parentName:"p"},'"maitre" (avec le r\xf4le ',(0,l.kt)("strong",{parentName:"em"},"control-plane"),")")," et g\xe9rer votre cluster via l'utilitaire ",(0,l.kt)("strong",{parentName:"p"},"kubectl"),".\nC'est une pratique qui fonctionne, mais qui devient tr\xe8s vite limit\xe9 lorsque l'on veut faire du tunneling vers un pod."),(0,l.kt)("p",null,"Exemple\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  kubectl port-forward pod-vaultwarden 8080:80 # va faire un tunnel en utilisant le port 80 du conteneur vers le port 8080 local\n")),(0,l.kt)("p",null,"Dans ce cas, si la commande ",(0,l.kt)("em",{parentName:"p"},"kubectl port-forward")," est ex\xe9cut\xe9 sur un n\u0153ud du cluster, \xe7a n'a que tr\xe8s peu d'int\xe9r\xeat",(0,l.kt)("em",{parentName:"p"},"(puisque les n\u0153uds ont directement acc\xe8s aux pods)"),".\nC'est pour cela qu'on a besoin d'ex\xe9cuter cette commande ",(0,l.kt)("em",{parentName:"p"},"sur notre poste local")," et non sur un n\u0153ud."),(0,l.kt)("h2",{id:"installation-de-kubectl"},"Installation de Kubectl"),(0,l.kt)("p",null,"Vous trouverez la documentation officielle ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/fr/docs/tasks/tools/install-kubectl/"},"ici"),"."),(0,l.kt)("h3",{id:"pour-installer-via-le-binaire-toutes-distributions"},"Pour installer via le binaire (toutes distributions)"),(0,l.kt)("p",null,"Je recommande plut\xf4t de passer par les d\xe9p\xf4ts officiels pour que kubectl soit rapide et facile \xe0 mettre \xe0 jour"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl\nchmod +x ./kubectl\nsudo mv ./kubectl /usr/local/bin/kubectl\nkubectl version --client\n")),(0,l.kt)("h3",{id:"debian-ubuntu"},"Debian, Ubuntu"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get update && sudo apt-get install -y apt-transport-https\ncurl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -\necho "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list\nsudo apt-get update\nsudo apt-get install -y kubectl\n')),(0,l.kt)("h3",{id:"arch-linux"},"Arch Linux"),(0,l.kt)("p",null,"Vous pouvez passer par la m\xe9thode via le binaire pour obtenir une version officielle. Sinon les d\xe9p\xf4ts communautaires permettent d'obtenir une version \xe0 jour\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pacman -S kubectl\n")),(0,l.kt)("h3",{id:"nix"},"Nix"),(0,l.kt)("p",null,"Kubectl est pr\xe9sent sur les d\xe9p\xf4ts officiels de Nix, vous pouvez cr\xe9er une session temporaire avec nix-shell :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nix-shell -p kubectl\n")),(0,l.kt)("admonition",{title:"Pas de sudo pour kubectl !",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Il ne n\xe9cessite aucune permission particuli\xe8re, manier cette commande avec votre utilisateur personnel.")),(0,l.kt)("h2",{id:"r\xe9cup\xe9rer-le-kubeconfig"},"R\xe9cup\xe9rer le kube/config"),(0,l.kt)("p",null,"En vous connectant via ssh sur un des n\u0153uds masters, vous pourrez visionner le fichier suivant ",(0,l.kt)("strong",{parentName:"p"},"/root/.kube/config")," qui contient les acc\xe8s pour administrer le cluster complet.\nEn voici un exemple :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyTlRZd01EQTBOREF3SGhjTk1qSXdOakl6TVRZd056SXdXaGNOTXpJd05qSXdNVFl3TnpJdwpXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyTlRZd01EQTBOREF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFSc2pkd0dsTFRRN1NqejVua3ZneWVzWVpvYStiWWpIZTdCamFxYnMvMFAKSE5hdnc4Qm5nenFiRUozY2hsY3ZQWlp0aDRMcm9EckxvYi9TM3lCejZ6endvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVW5lNW5hem1WQ3NVbWg5VzFFUHdXCmh6bXNRczh3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUlnS0haK1FpUElQTnRoQkpoNEE1VFZqbGVYSEJPbmhhQTQKSXA5OXZONXdrcVlDSVFDREtKYUM3MmY2eFhScFFlSVNHcHIyb3BpR1lUMDg4VHBKQ1BSZXVwNm10Zz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n    server: https://127.0.0.1:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrVENDQVRlZ0F3SUJBZ0lJSmtpZy83ZGdSYjB3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOalUyTURBd05EUXdNQjRYRFRJeU1EWXlNekUyTURjeU1Gb1hEVEl6TURZeQpNekUyTURjeU1Gb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJMdDZGemFONVR6QTRjS1cKT29BNm1SMkVydGVqTS9Fb1JuNUFjWkFwTzY3bFdMOGVpZkZQajNvYWs3ZG5RKzRmQWlrT0plcnJReXFyN1IvdwpDVXZxM3NpalNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCVHY4elBiaURaYVg5UTJOU2pQb2F4eHJ6N0VBVEFLQmdncWhrak9QUVFEQWdOSUFEQkYKQWlBMlB4dkNpOHJyRkVVaFArdjVoc2I4Z0ttNU5wRTc0bnZzOE0yM0JITnY1QUloQUxpT0lYUTlqaUgzSHVnRwpsRUtCTUxybHVKNC9pTFFtYnlNK3NsbUVsaDhqCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJlRENDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyTlRZd01EQTBOREF3SGhjTk1qSXdOakl6TVRZd056SXdXaGNOTXpJd05qSXdNVFl3TnpJdwpXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyTlRZd01EQTBOREF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFUYTBmTDU2RzNneUx2OTlBOWNjaEhsZEhRdWIzZm9pZlp1SVJLcC9nTDkKVmFudmJ2UkNmN0h0RDMrWlhTMit4dWxQbXdMS0U3TWY2SG5NNFJSOGtDR1RvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVTcvTXoyNGcyV2wvVU5qVW96NkdzCmNhOCt4QUV3Q2dZSUtvWkl6ajBFQXdJRFNRQXdSZ0loQU9rN0RBbG14d2hwS0dlL0ZDWDB3SkFKeFVoUmwwbVQKUXZSTVA5eUh3bFlFQWlFQTd4RnB0b3RQVit1U0lBMWljMGdaeUZabXU1eVA5UzlzUno1ZFR3ZWh6WXM9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n    client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUd6UUxqbWY2Q3NlZ3Bybk05ZXRTeGF0cnY4Q1RVZE5qNjdHSUpVM0o4YUhvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFdTNvWE5vM2xQTURod3BZNmdEcVpIWVN1MTZNejhTaEdma0J4a0NrN3J1Vll2eDZKOFUrUAplaHFUdDJkRDdoOENLUTRsNnV0REtxdnRIL0FKUytyZXlBPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=\n")),(0,l.kt)("p",null,"Vous pourrez le t\xe9l\xe9charger et le placer ici : ",(0,l.kt)("inlineCode",{parentName:"p"},"/home/$USER/.kube/config"),"."),(0,l.kt)("p",null,"Mais en lan\xe7ant une quelconque commande avec ",(0,l.kt)("em",{parentName:"p"},"kubectl"),", on obtient le message d'erreur suivant\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-none"},"[thebidouilleur@bertha ~]$ kubectl get nodes\nThe connection to the server localhost:8080 was refused - did you specify the right host or port?\n")),(0,l.kt)("p",null,"C'est \xe0 cause du fichier qui contient \"127.0.0.1\" par d\xe9faut. Il faudra donc \xe9diter l'IP pour mettre celle du master."),(0,l.kt)("p",null,"Une fois \xe9dit\xe9, la commande fonctionnera\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[thebidouilleur@bertha ~]$ kubectl get nodes\nNAME              STATUS   ROLES                  AGE   VERSION\nnode-0-tf         Ready    <none>                 32d   v1.22.3+k3s1\nnode-1-tf         Ready    <none>                 32d   v1.22.3+k3s1\nnode-2-tf         Ready    <none>                 32d   v1.22.3+k3s1\nkubemaster-0-tf   Ready    control-plane,master   32d   v1.22.3+k3s1\n")))}p.isMDXComponent=!0}}]);