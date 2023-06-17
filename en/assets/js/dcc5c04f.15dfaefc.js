"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[411],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const i={title:"Using a Private Registry",slug:"private-registry"},o=void 0,l={unversionedId:"Kubernetes/registre-client",id:"Kubernetes/registre-client",title:"Using a Private Registry",description:"As soon as you play with containers and start creating your own, you need to have your own registry. (For simplicity, optimization, efficiency)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Kubernetes/registre-client.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/private-registry",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/private-registry",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Kubernetes/registre-client.md",tags:[],version:"current",lastUpdatedAt:1687010550,formattedLastUpdatedAt:"Jun 17, 2023",frontMatter:{title:"Using a Private Registry",slug:"private-registry"},sidebar:"tutorialSidebar",previous:{title:"Kubectl sur machine cliente",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/kube-client"}},s={},c=[{value:"Creation of the secret",id:"creation-of-the-secret",level:2},{value:"In CLI",id:"in-cli",level:3},{value:"In YAML",id:"in-yaml",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As soon as you play with containers and start creating your own, you need to have your own registry. ",(0,a.kt)("em",{parentName:"p"},"(For simplicity, optimization, efficiency)")),(0,a.kt)("h2",{id:"creation-of-the-secret"},"Creation of the secret"),(0,a.kt)("h3",{id:"in-cli"},"In CLI"),(0,a.kt)("p",null,"Here is the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," command to create a secret containing the information required to connect to a private registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAMESPACE=thebidouilleur\nkubectl --namespace $NAMESPACE create secret docker-registry regcred --docker-server=https://registry.thebidouilleur.xyz --docker-username=admin --docker-password=admin --docker-email=kube@kube\n")),(0,a.kt)("h3",{id:"in-yaml"},"In YAML"),(0,a.kt)("p",null,"We will do this example with the following credentials: ",(0,a.kt)("inlineCode",{parentName:"p"},"user:pass"),"\nThis combination will need to be converted to ",(0,a.kt)("strong",{parentName:"p"},"base64"),". I go through my Linux terminal to perform this conversion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo -n "user:pass" | base64#dXNlcjpwYXNz\n')),(0,a.kt)("p",null,"We will then create our configuration file in ",(0,a.kt)("strong",{parentName:"p"},"JSON")," ",(0,a.kt)("em",{parentName:"p"},"format (which is the format accepted by docker for the file"),"~/.docker/config*"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n"auths":\n{\n"registry.thebidouilleur.xyz":\n{\n"auth": "dXNlcjpwYXNz" }\n}\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Remember to replace the registry url"),"."),(0,a.kt)("p",null,"We will have to put on ",(0,a.kt)("strong",{parentName:"p"},"one line")," json and encode it in ",(0,a.kt)("strong",{parentName:"p"},"base64")," to create our final manifest."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo -n \'{"auths":{"registry.thebidouilleur.xyz":{"auth":"dXNlcjpwYXNz"}}}\' | base64 # eyJhdXRocyI6eyJyZWdpc3RyeS50aGViaWRvdWlsbGV1ci54eXoiOnsiYXV0aCI6ImRYTmxjanB3WVhOeiJ9fX0=\n')),(0,a.kt)("p",null,"We can finally create our yaml that we will give to kubectl."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndate:\n .dockerconfigjson: eyJhdXRocyI6eyJyZWdpc3RyeS50aGViaWRvdWlsbGV1ci54eXoiOnsiYXV0aCI6ImRYTmxjanB3WVhOeiJ9fX0=\nkind: Secret\nmetadata:\n name: regred\n namespace: thebidouilleur\ntype: kubernetes.io/dockerconfigjson\n")),(0,a.kt)("p",null,"Once ingested by our cluster. We will be able to use images from a private registry.\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: deploy-thebidouilleur\n  labels:\n    release: 4.3.4\n  annotations:\n    argocd.argoproj.io/hook: PostSync\n    namespace: thebidouilleur\nspec:\n  selector:\n    matchLabels:\n      app: deploy-thebidouilleur\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: deploy-thebidouilleur\n    spec:\n      containers:\n      - name: thebidouilleur\n        image: registry.thebidouilleur.xyz/thebidouilleur:latest\n        imagePullPolicy: Always\n        approx:\n        - name: RUN_MODE\n          value: "production"\n        ports:\n        - containerPort: 80\n        livenessProbe:\n          tcpSocket:\n            host: 127.0.0.1\n            shipping: 80\n          initialDelaySeconds: 180\n          periodSeconds: 3\n      imagePullSecrets:\n      - name: regred\n')))}d.isMDXComponent=!0}}]);