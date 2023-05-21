"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9638],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return a?r.createElement(g,s(s({ref:t},u),{},{components:a})):r.createElement(g,s({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9248:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const i={title:"Cert-Manager",slug:"getting-started-cert-manager",description:"Cert-Manager est un programme permettant de g\xe9rer les certificats (ainsi que leurs renouvellements) sur des clusters Kubernetes. Nous allons voir comment d\xe9ployer Cert-Manager et g\xe9n\xe9rer nos premiers certificats"},s=void 0,l={unversionedId:"Kubernetes/cert-manager",id:"Kubernetes/cert-manager",title:"Cert-Manager",description:"Cert-Manager est un programme permettant de g\xe9rer les certificats (ainsi que leurs renouvellements) sur des clusters Kubernetes. Nous allons voir comment d\xe9ployer Cert-Manager et g\xe9n\xe9rer nos premiers certificats",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Kubernetes/cert-manager.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/getting-started-cert-manager",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/getting-started-cert-manager",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Kubernetes/cert-manager.md",tags:[],version:"current",frontMatter:{title:"Cert-Manager",slug:"getting-started-cert-manager",description:"Cert-Manager est un programme permettant de g\xe9rer les certificats (ainsi que leurs renouvellements) sur des clusters Kubernetes. Nous allons voir comment d\xe9ployer Cert-Manager et g\xe9n\xe9rer nos premiers certificats"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes INside Docker",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/kind"},next:{title:"Deploy a full k3s cluster with terraform and ansible",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/k3s-terraform"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Install Cert-Manager",id:"install-cert-manager",level:2},{value:"How Cert-Manager works",id:"how-cert-manager-works",level:2},{value:"Create your own certificates",id:"create-your-own-certificates",level:2},{value:"Add a provider (Issuer)",id:"add-a-provider-issuer",level:3},{value:"ACME via HTTP challenge",id:"acme-via-http-challenge",level:4},{value:"ACME via challenge DNS",id:"acme-via-challenge-dns",level:4},{value:"Create a certificate",id:"create-a-certificate",level:3},{value:"Using a certificate",id:"using-a-certificate",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'Cert-manager is a certificate management tool for Kubernetes. It allows you to automate the generation, renewal and management of SSL/TLS certificates for your applications on the cluster. Cert-manager supports multiple certificate providers such as Let\'s Encrypt, Vault, etc. Using Cert-manager, you can declare the need for a certificate for a specific application via a Kubernetes object, called "Certificate" or "Issuer". Cert-manager is a key component to ensure security and privacy of data in applications on Kubernetes. It makes certificate management easier for cluster administrators, avoiding human error and ensuring the constant availability of valid certificates for applications.In summary, Cert-manager is a powerful tool for managing SSL/TLS certificates in a Kubernetes environment, enabling more efficient and secure certificate management for your applications.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/94e6e2096b0bc286c36b61494276534d8f70f5e7e6171587c65832f2c621f688/68747470733a2f2f636572742d6d616e616765722e696f2f696d616765732f686967682d6c6576656c2d6f766572766965772e737667",alt:"Schema cert-manager"})),(0,n.kt)("p",null,"Until now I was using Traefik as Ingress. This one generated the certificates and stored them in a text file located in a longhorn volume ",(0,n.kt)("em",{parentName:"p"},"(knowing full well that this was not very clean)")),(0,n.kt)("p",null,"Today, it's time for cleanliness... we switch to Cert-Manager!"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://media.tenor.com/MoHGGcCxgqYAAAAd/time-to-clean-up-dozer.gif",alt:"Meme about cleanliness"})),(0,n.kt)("h2",{id:"install-cert-manager"},"Install Cert-Manager"),(0,n.kt)("p",null,"At the time of writing this page, we are at version ",(0,n.kt)("strong",{parentName:"p"},"v1.11.0"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.yaml\n")),(0,n.kt)("admonition",{title:"Get the latest version",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Please remember to get the latest version of cert-manager. You can find the available versions ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cert-manager/cert-manager/releases"},"here"))),(0,n.kt)("h2",{id:"how-cert-manager-works"},"How Cert-Manager works"),(0,n.kt)("p",null,"The Cert-Manager installation process involves various objects. The ones we are interested in are :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Issuers"),(0,n.kt)("li",{parentName:"ul"},"Certificates")),(0,n.kt)("p",null,"Issuers are certificate providers. Cert-Manager is compatible with the following providers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ACME HTTP/DNS (letsencrypt compatible)"),(0,n.kt)("li",{parentName:"ul"},"Self-signed ",(0,n.kt)("em",{parentName:"li"},"(I recommend to generate your own CA)")),(0,n.kt)("li",{parentName:"ul"},"Custom CA"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.vaultproject.io/"},"Vault")),(0,n.kt)("li",{parentName:"ul"},"Venafi")),(0,n.kt)("p",null,"For the moment, we are only interested in the LetsEncrypt provider ",(0,n.kt)("em",{parentName:"p"},"(we may see the CA case one day)")),(0,n.kt)("h2",{id:"create-your-own-certificates"},"Create your own certificates"),(0,n.kt)("h3",{id:"add-a-provider-issuer"},"Add a provider (Issuer)"),(0,n.kt)("h4",{id:"acme-via-http-challenge"},"ACME via HTTP challenge"),(0,n.kt)("p",null,"The most common case when generating a certificate is to use LetsEncrypt with an HTTP challenge. ",(0,n.kt)("em",{parentName:"p"},"(ex, CertBot)"),"Its configuration is quite fast, here is the manifest to add the ACME of LetsEncrypt."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: cert-manager.io/v1\nkind: Issuer\nmetadata:\n  name: letsencrypt\nspec:\n  acme:\n    server: https://acme-v02.api.letsencrypt.org/directory\n    email: votre_email@ici.tld\n    privateKeySecretRef:\n      name: letsencrypt\n    solvers:\n    - selector: {}\n      http01:\n        ingress:\n          class: istio\n")),(0,n.kt)("p",null,"to remember :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You must give the ingress used, the challenge needs to be done on port 80 in http."),(0,n.kt)("li",{parentName:"ul"},"the email provided will be used by LetsEncrypt to notify you when the certificate needs to be renewed.")),(0,n.kt)("admonition",{title:"Rate-Limit",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you fail too many challenges ",(0,n.kt)("em",{parentName:"p"},"(or generate the same certificate too many times)"),", you will be rate-limited and you will not be able to generate any certificate for fews moments. If you just want to test the procedures, it is possible to use the ",(0,n.kt)("strong",{parentName:"p"},"staging")," API ",(0,n.kt)("em",{parentName:"p"},"(so without rate-limits)"),"."),(0,n.kt)("p",{parentName:"admonition"},"The certificates will not be accepted by your browser, but for testing purposes it is ideal."),(0,n.kt)("p",{parentName:"admonition"},"You just have to replace the url by ",(0,n.kt)("inlineCode",{parentName:"p"},"https://acme-staging-v02.api.letsencrypt.org/directory:"))),(0,n.kt)("p",null,"You can check that the Issuer is present via the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  kubectl describe issuers.cert-manager.io letsencrypt`. \n\nStatus:\n  Acme:\n    Last Registered Email:  redacted\n    Uri:                    https://acme-v02.api.letsencrypt.org/acme/acct/941914187\n  Conditions:\n    Last Transition Time:  2023-01-31T10:05:12Z\n    Message:               The ACME account was registered with the ACME server\n    Observed Generation:   1\n    Reason:                ACMEAccountRegistered\n    Status:                True\n    Type:                  Ready\nEvents:                    <none>\n")),(0,n.kt)("h4",{id:"acme-via-challenge-dns"},"ACME via challenge DNS"),(0,n.kt)("p",null,"First of all: your provider is not always compatible with this method. I use ",(0,n.kt)("strong",{parentName:"p"},"CloudFlare")," which ",(0,n.kt)("em",{parentName:"p"},"(thanks to its API)")," allows me to create entries in my domain to solve the challenge. this method has some advantages like the fact that we do not have to open a port to solve the challenge."),(0,n.kt)("p",null,"To use the API, we need to create a token to authenticate our request. Go to ",(0,n.kt)("a",{parentName:"p",href:"https://dash.cloudflare.com/profile/api-tokens"},"this page")," to create your token. The necessary permissions are :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Zone.Zone READ"),(0,n.kt)("li",{parentName:"ul"},"Zone.DNS WRITE")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Token generation",src:a(4344).Z,width:"678",height:"735"})),(0,n.kt)("p",null,"With the token, create this secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudflare-api-token-secret\ntype: Opaque\nstringData:\n  api-token: aaaaaabbbbbbbcccccccdddddd\n")),(0,n.kt)("p",null,"And add your Cloudflare provider ",(0,n.kt)("em",{parentName:"p"},"(this one will use our secret)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: cert-manager.io/v1\nkind: Issuer\nmetadata:\n  name: cloudflare\nspec:\n  acme:\n    email: votre_email@ici.tld\n    server: https://acme-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      name: cloudflare\n    solvers:\n    - dns01:\n        cloudflare:\n          apiTokenSecretRef:\n            name: cloudflare-api-token-secret\n            key: api-token\n")),(0,n.kt)("h3",{id:"create-a-certificate"},"Create a certificate"),(0,n.kt)("p",null,"Now that the provider is configured, it is now possible to create our certificate. I will generate mine for my domain ",(0,n.kt)("inlineCode",{parentName:"p"},"test.thebidouilleur.xyz"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: test-thebidouilleur\nspec:\n  secretName: test-thebidouilleur-tls\n  issuerRef:\n    name: letsencrypt\n  commonName: test.thebidouilleur.xyz\n  dnsNames:\n  - test.thebidouilleur.xyz\n")),(0,n.kt)("p",null,"Check that the certificate is generated ",(0,n.kt)("strong",{parentName:"p"},"and")," available."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  kubectl describe certificate test-thebidouilleur\nEvents:\n  Type    Reason     Age    From                                       Message\n  ----    ------     ----   ----                                       -------\n  Normal  Issuing    7m9s   cert-manager-certificates-trigger          Issuing certificate as Secret was previously issued by Issuer.cert-manager.io/letsencrypt\n  Normal  Reused     7m9s   cert-manager-certificates-key-manager      Reusing private key stored in existing Secret resource "test-thebidouilleur-tls"\n  Normal  Requested  7m8s   cert-manager-certificates-request-manager  Created new CertificateRequest resource "test-thebidouilleur-j8x9j"\n  Normal  Issuing    5m46s  cert-manager-certificates-issuing          The certificate has been successfully issued\n')),(0,n.kt)("p",null,"And that the secret is created:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  kubectl get secret test-thebidouilleur-tls\nNAME                      TYPE                DATA   AGE\ntest-thebidouilleur-tls   kubernetes.io/tls   2      169m\n")),(0,n.kt)("h2",{id:"using-a-certificate"},"Using a certificate"),(0,n.kt)("p",null,"Here is a yaml example to generate an Ingress using the secret."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: test-thebidouilleur\n  annotations:\n    kubernetes.io/ingress.class: "istio"\nspec:\n  tls:\n  - hosts:\n    - test.thebidouilleur.xyz\n    secretName: test-thebidouilleur-tls\n  rules:\n  - host: "test.thebidouilleur.xyz"\n    http:\n      paths:\n        - pathType: Prefix\n          path: "/"\n          backend:\n            service:\n              name: srvc-thebidouilleur\n              port:\n                number: 80\n')),(0,n.kt)("p",null,"Or with an IngressRoute object if ",(0,n.kt)("em",{parentName:"p"},"(like me)")," you use Traefik."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: test-thebidouilleur\nspec:\n  entryPoints:\n    - websecure\n  routes:\n    - match: Host(`test.thebidouilleur.xyz`)\n      kind: Rule\n      services:\n        - name: srvc-thebidouilleur\n          port: 80\n  tls:\n    secretName: test-thebidouilleur-tls\n")))}p.isMDXComponent=!0},4344:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloudflare-zone-aa70fa6b64377271669f039baad76208.png"}}]);