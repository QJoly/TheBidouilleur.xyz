"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2574],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const a={slug:"k3s-terraform",title:"Deploy a full k3s cluster with terraform and ansible"},i=void 0,l={unversionedId:"Kubernetes/deploy-k3s-with-tf-ansible",id:"Kubernetes/deploy-k3s-with-tf-ansible",title:"Deploy a full k3s cluster with terraform and ansible",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Kubernetes/deploy-k3s-with-tf-ansible.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/k3s-terraform",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/k3s-terraform",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Kubernetes/deploy-k3s-with-tf-ansible.md",tags:[],version:"current",lastUpdatedAt:1687010550,formattedLastUpdatedAt:"Jun 17, 2023",frontMatter:{slug:"k3s-terraform",title:"Deploy a full k3s cluster with terraform and ansible"},sidebar:"tutorialSidebar",previous:{title:"Cert-Manager",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/getting-started-cert-manager"},next:{title:"Lancer un Fsck sur Longhorn",permalink:"/TheBidouilleur.xyz/en/docs/Kubernetes/longhorn-fsck"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Start the project",id:"start-the-project",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Kubernetes is one of my main learning subjects, being very inexperienced in the field, I need a test environment allowing me to practice without fear of breaking something in production, a reproducible environment to always start from the same base."),(0,o.kt)("p",null,"And the solution for this reproducible environment: It's the Terraform-Ansible duo!"),(0,o.kt)("admonition",{title:"What is Terraform?",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Terraform is an Iaas tool (Infrastructure As A Code) allowing to file a virtual machine configuration, a network configuration, or the elements around the machines (Ansible, Puppet). This will connect to your Hypervisor (AWS, ESXI, Proxmox, OpenStack..)\nExample:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-terraform"},'resource "proxmox_vm_qemu" "pxe-minimal-example" {\n    name = "pxe-minimal-example"\n    agent = 0\n    boot="order=net0;scsi0"\n    pxe=true\n    target_node="test"\n    network {\n        bridge="vmbr0"\n        firewall=false\n        link_down=false\n        model="e1000"\n    }\n}\n'))),(0,o.kt)("h2",{id:"start-the-project"},"Start the project"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/qjoly/'/Cinabre/terraform-k3s-proxmox"},"We will base ourselves on this project (hosted on my Gitea)")),(0,o.kt)("p",null,"To clone it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  git clone --recursive 'https://github.com/qjoly/'/Cinabre/terraform-k3s-proxmox\n")),(0,o.kt)("admonition",{title:"beware",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--recursive")," is essential for the project. The Git repository will fetch files from a ",(0,o.kt)("strong",{parentName:"p"},"second repository"),"!\nWithout this parameter, you will only recover the main repository.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Install dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",null," ",(0,o.kt)("a",{href:"https://www.terraform.io/downloads"},"Terraform (>v1.1.7)")," "),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-ansible-on-debian"},"Ansible (>2.11.6)")," "))))}m.isMDXComponent=!0}}]);