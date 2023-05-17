"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1163],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(4137));const l={title:"Build Docker multi-architecture",slug:"MultiArch Build",tags:["Docker","ARM","Amd64"]},a=void 0,o={unversionedId:"Adminsys/Multi-Arch build Docker",id:"Adminsys/Multi-Arch build Docker",title:"Build Docker multi-architecture",description:"J'utilise beaucoup Docker sur des environnements ARM (Notamment mon cluster de Raspberry PI). Le probl\xe8me est que les images ne sont pas toujours compatibles avec une architecture ARM.",source:"@site/docs/Adminsys/Multi-Arch build Docker.md",sourceDirName:"Adminsys",slug:"/Adminsys/MultiArch Build",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/MultiArch Build",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/Multi-Arch build Docker.md",tags:[{label:"Docker",permalink:"/TheBidouilleur.xyz/en/docs/tags/docker"},{label:"ARM",permalink:"/TheBidouilleur.xyz/en/docs/tags/arm"},{label:"Amd64",permalink:"/TheBidouilleur.xyz/en/docs/tags/amd-64"}],version:"current",frontMatter:{title:"Build Docker multi-architecture",slug:"MultiArch Build",tags:["Docker","ARM","Amd64"]},sidebar:"tutorialSidebar",previous:{title:"Installing the Loki stack",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/Loki"},next:{title:"Introduction \xe0 Packer",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/packer-alpine"}},s={},u=[],c={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"J'utilise beaucoup Docker sur des environnements ARM ",(0,i.kt)("em",{parentName:"p"},"(Notamment mon cluster de Raspberry PI)"),". Le probl\xe8me est que les images ne sont pas toujours compatibles avec une architecture ARM."),(0,i.kt)("p",null,"J'ai donc recherch\xe9 comment cr\xe9er des images OCI multi-architectures ",(0,i.kt)("em",{parentName:"p"},"(pouvant se lancer sur des postes Amd64 ou ARM)"),". Nous allons donc voir comment build des images ARM sous une machine Amd64."),(0,i.kt)("p",null,"Installation d'un \xe9mulateur d'architecture\xa0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker run --privileged --rm tonistiigi/binfmt --install all\n")),(0,i.kt)("p",null,"Cr\xe9er un builder ",(0,i.kt)("em",{parentName:"p"},"(qui utilisera votre poste local ainsi que ses architectures compatibles)"),", cela va cr\xe9\xe9 un contexte dans lequel Docker va build vos images. Il est obligatoire de lancer cette commande avec les droits ",(0,i.kt)("strong",{parentName:"p"},"root"),", l'usage de Docker en rootless n'est pas possible \xe0 cette \xe9tape."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker buildx create --use\n")),(0,i.kt)("p",null,"Voici le r\xe9sultat ",(0,i.kt)("em",{parentName:"p"},"(avec les \xe9mulateurs install\xe9s)"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\u2514\u2500\u25aasudo docker run --privileged --rm tonistiigi/binfmt --install all \nUnable to find image \'tonistiigi/binfmt:latest\' locally\nlatest: Pulling from tonistiigi/binfmt\n8d4d64c318a5: Pull complete \ne9c608ddc3cb: Pull complete \nDigest: sha256:66e11bea77a5ea9d6f0fe79b57cd2b189b5d15b93a2bdb925be22949232e4e55\nStatus: Downloaded newer image for tonistiigi/binfmt:latest\ninstalling: arm OK\ninstalling: riscv64 OK\ninstalling: mips64 OK\ninstalling: ppc64le OK\ninstalling: mips64le OK\ninstalling: arm64 OK\ninstalling: s390x OK\n{\n  "supported": [\n    "linux/amd64",\n    "linux/arm64",\n    "linux/riscv64",\n    "linux/ppc64le",\n    "linux/s390x",\n    "linux/386",\n    "linux/mips64le",\n    "linux/mips64",\n    "linux/arm/v7",\n    "linux/arm/v6"\n  ],\n  "emulators": [\n    "qemu-aarch64",\n    "qemu-arm",\n    "qemu-mips64",\n    "qemu-mips64el",\n    "qemu-ppc64le",\n    "qemu-riscv64",\n    "qemu-s390x"\n  ]\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Vous pouvez g\xe9rer plusieurs contextes, il suffit d'utiliser la commande ",(0,i.kt)("inlineCode",{parentName:"p"},"docker buildx use [votre contexte]")),(0,i.kt)("p",{parentName:"admonition"},"Les diff\xe9rents contextes sont visibles via ",(0,i.kt)("inlineCode",{parentName:"p"},"docker buildx ls")," ",(0,i.kt)("em",{parentName:"p"},"(Vous verrez \xe9galement les architectures compatibles avec vos contextes)"))),(0,i.kt)("p",null,"Et une fois les \xe9mulateurs install\xe9s, nous pouvons build notre image via ",(0,i.kt)("inlineCode",{parentName:"p"},"docker buildx build")," en pr\xe9cisant les architectures:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker buildx build --platform=linux/arm64,linux/amd64,linux/arm/v7,linux/arm/v6 -t localhost:5000/test . --push\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Je creuserai \xe0 l'avenir l'utilitaire ",(0,i.kt)("inlineCode",{parentName:"p"},"docker buildx"),", celui-ci ajoute de nombreux fonctionnalit\xe9s \xe0 Docker ",(0,i.kt)("em",{parentName:"p"},"(Par exemple en utilisant le langage HCL qu'on retrouve dans Terraform/Packer)"),"."))}m.isMDXComponent=!0}}]);