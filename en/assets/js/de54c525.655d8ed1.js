"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4862],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const o={slug:"presentation-packer",title:"Quick Presentation of Packer",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["proxmox","packer","devops"]},i=void 0,s={permalink:"/TheBidouilleur.xyz/en/blog/presentation-packer",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2022-02-15-Presentation-Packer/index.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/2022-02-15-Presentation-Packer/index.md",title:"Quick Presentation of Packer",description:'[ This article is from my old-blog, it will also be available in the "Documentation" section of the site ]',date:"2022-02-15T00:00:00.000Z",formattedDate:"February 15, 2022",tags:[{label:"proxmox",permalink:"/TheBidouilleur.xyz/en/blog/tags/proxmox"},{label:"packer",permalink:"/TheBidouilleur.xyz/en/blog/tags/packer"},{label:"devops",permalink:"/TheBidouilleur.xyz/en/blog/tags/devops"}],readingTime:4.895,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"presentation-packer",title:"Quick Presentation of Packer",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["proxmox","packer","devops"]},prevItem:{title:"Mes d\xe9buts avec s3",permalink:"/TheBidouilleur.xyz/en/blog/s3contabo"},nextItem:{title:"Utilisation de Loki pour Centraliser les logs",permalink:"/TheBidouilleur.xyz/en/blog/loki-grafana"}},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is Packer?",id:"what-is-packer",level:2},{value:"How does Packer work?",id:"how-does-packer-work",level:2},{value:"A little vocabulary",id:"a-little-vocabulary",level:3},{value:"Create our first template",id:"create-our-first-template",level:2},{value:"Why running packer through shell script?",id:"why-running-packer-through-shell-script",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'[ This article is from my old-blog, it will also be available in the "Documentation" section of the site ]'),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Soon 7 years since my main infrastructure is on Proxmox. It's the hypervisor I trust most, which is also free and open-source. As soon as I have to deploy more than 2 virtual machines and can choose the environment: Proxmox will be my first choice. It offers a complete and efficient webui, without forgetting the advantage of command line tools. I don't rule out that someday, I may change my environment. And today, I have new needs in my hypervisor: Automate a complete deployment of my infrastructure, and since I will not reinstall each machine individually, I must start from a \"base\" that will serve as a template for the machine system to be pre-configured as I wish. And this famous template, I can make by hand.... or I can deploy it automatically with Packer!"),(0,a.kt)("h2",{id:"what-is-packer"},"What is Packer?"),(0,a.kt)("p",null,"Packer is a tool developed by hashicorp (",(0,a.kt)("em",{parentName:"p"},"a company that provides open-source programs in the world of devops"),") allowing to deploy a template virtual machine automatically.\nIn a practical case, Packer will connect to your public-cloud(",(0,a.kt)("em",{parentName:"p"},"aws, oracle, scaleway"),") / hypervisor(",(0,a.kt)("em",{parentName:"p"},"proxmox, qemu, esxi"),") to send instructions to install the virtual machine. (",(0,a.kt)("em",{parentName:"p"},"Like resources needed. RAM, CPU cores, type of bios"),")"),(0,a.kt)("h2",{id:"how-does-packer-work"},"How does Packer work?"),(0,a.kt)("p",null,'Packer has few dependencies, it needs a public hypervisor/cloud, access to the "screen"',"*"," of the virtual machine, and ssh access for Packer to verify that the installation has completed (",(0,a.kt)("em",{parentName:"p"},"and also to launch a config management tool such as ansible"),")."),(0,a.kt)("p",null,"*",(0,a.kt)("em",{parentName:"p"},"virtual machine screen will be used to send keystrokes.")),(0,a.kt)("h3",{id:"a-little-vocabulary"},"A little vocabulary"),(0,a.kt)("p",null,'The place where Packer deploys the VM is called Builder, in my case: It\'s Proxmox! And the term "provisioning" refers to the tool that will finish configuring the VM (Ex: Ansible).'),(0,a.kt)("h2",{id:"create-our-first-template"},"Create our first template"),(0,a.kt)("p",null,"Before we tackle a big fish like debian, we'll start with a simpler system to install: Alpine. The alpine installer will ask about ten questions, one by one. There is an answer file system that will automatically answer questions, but I could not run this file under alpine. (Only on Alpine, the answer file works on debian)."),(0,a.kt)("p",null,"As I cannot use an answer file: we will answer questions manually (",(0,a.kt)("em",{parentName:"p"},"by sending keystrokes"),")."),(0,a.kt)("p",null,"/!\\ In the rest of this article, I will base myself on this deposit that is hosted on my gitea: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/qjoly/'/Cinabre/packer-alpine-proxmox"},"packer-alpine-proxmox"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "description": "Build Alpine Linux 3 x86_64 Proxmox template",\n    "variables": {\n\n        "proxmox_url": "{{env `proxmox_url`}}",\n        "proxmox_username":"{{env `proxmox_user`}}", \n        "proxmox_password": "{{env `proxmox_password`}}", \n        "proxmox_host": "{{env `proxmox_node`}}",\n\n        "storage_name": "{{env `storage_name`}}",\n        "bridge": "{{env `bridge`}}",\n        "vm_id": "9001",\n        "vm_name": "alpine3-tf",\n        "template_description": "Alpine Linux 3.11 x86_64 template built with packer",\n        "vm_memory": "1024",\n\n        "ssh_username": "root",\n        "ssh_password": "{{env `ssh_password`}}"\n    },\n    "sensitive-variables": ["proxmox_password", "ssh_password" ],\n    "provisioners": [\n      {\n        "type": "ansible",\n        "playbook_file": "./playbook/provisioning.yml",\n        "ansible_env_vars": ["ANSIBLE_FORCE_COLOR=True" ]\n      }\n    ],\n    "builders": [\n        {\n            "type": "proxmox",\n            "proxmox_url":  "{{user `proxmox_url`}}",\n            "insecure_skip_tls_verify": true,\n            "username": "{{user `proxmox_username`}}",\n            "password": "{{user `proxmox_password`}}",\n            "vm_id":  "{{user `vm_id`}}",\n            "vm_name": "{{user `vm_name`}}",\n            "template_description":"{{user `template_description`}}",\n            "memory": "{{user `vm_memory`}}",\n            "cores": "2",\n            "os": "l26",\n            "http_directory": "http",\n\n            "node": "{{user `proxmox_host`}}",\n            "network_adapters": [\n              {\n                "model": "virtio",\n                "bridge": "{{user `bridge`}}"\n              }\n            ],\n            "disks": [\n              {\n                "type": "virtio",\n                "disk_size": "16G",\n                "storage_pool": "{{user `storage_name`}}",\n                "storage_pool_type": "directory",\n                "format": "qcow2"\n              }\n            ],\n            "ssh_username": "{{user `ssh_username`}}",\n            "ssh_password": "{{user `ssh_password`}}",\n            "ssh_timeout": "15m",\n            "ssh_certificate_file": "/root/id_rsa", \n            "iso_file": "{{user `storage_name`}}:iso/alpine-virt-3.15.0-x86_64.iso",\n            "unmount_iso": true,\n            "boot_wait": "15s",\n            "boot_command": [\n                "<wait25>root<enter><wait4>",\n                "setup-alpine<enter><wait8>",\n                "<enter><wait4>",\n                "alpine-tf<enter><wait4><enter><wait4>",\n                "dhcp<enter>",\n                "<wait5>n<enter><wait5>",\n                "{{user `ssh_password`}}<enter><wait5>",\n                "{{user `ssh_password`}}<enter><wait>",\n                "<wait5>",\n                "Europe/Paris <enter><wait2><enter><wait5>",\n                "n<enter>",\n                "<wait1>1<enter><wait3>",\n                "<enter><wait2>",\n                "vda<enter>",\n                "lvm<enter>",\n                "sys<enter>",\n                "<wait2>",\n                "y<enter><wait35>",\n\n                \n                "reboot <enter>",\n                "<wait65>",\n                \n                "root<enter><wait8>",\n                "{{user `ssh_password`}}<enter><wait5> ",\n                "<wait10>",\n\n                "apk update && apk add curl<enter>",\n                "mkdir -p ~/.ssh<enter>",\n                "touch ~/.ssh/authorized_keys<enter><wait5>chmod 600 ~/.ssh/authorized_keys<enter><wait5>",\n                "curl http://{{ .HTTPIP }}:{{ .HTTPPort }}/authorized_keys >> ~/.ssh/authorized_keys<enter>",\n                "echo \'PermitRootLogin yes\' >> /etc/ssh/sshd_config <enter>",\n                "<wait2>service sshd restart <enter> <wait2>",\n                "curl http://{{ .HTTPIP }}:{{ .HTTPPort }}/repositories > /etc/apk/repositories<enter>",\n                "<wait>apk update <enter>",\n\n                "apk add python3<enter><wait1>",\n                "curl https://bootstrap.pypa.io/get-pip.py -o /tmp/get-pip.py<enter> <wait2>",\n                "python3 /tmp/get-pip.py <enter> <wait2>",\n\n                "apk add qemu-guest-agent<enter><wait3>",\n                "rc-update add qemu-guest-agent<enter>",\n                "service qemu-guest-agent start<enter>"\n\n            ]\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"We'll quickly go through the structure of this Packer file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'the part "',(0,a.kt)("em",{parentName:"li"},"Variable"),'" relates to static variables and/or environment variables ',(0,a.kt)("em",{parentName:"li"},"(We'll see later)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Provision")," designates the command to be launched ",(0,a.kt)("strong",{parentName:"li"},"after")," the creation of the template"),(0,a.kt)("li",{parentName:"ul"},"and what concerns the template itself (parameters, hypervisors...) is in the ",(0,a.kt)("em",{parentName:"li"},"builder"),"  part")),(0,a.kt)("p",null,"and the ",(0,a.kt)("em",{parentName:"p"},"boot_command")," part in ",(0,a.kt)("em",{parentName:"p"},"Builder")," is the list of ",(0,a.kt)("strong",{parentName:"p"},"all")," keyboard entries that Packer will type, It often places the download of Packer's Preseed to the VM."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"small explanation about file transfer from packer to template:")," Packer, at start, will create a web server with the contents of the ",(0,a.kt)("em",{parentName:"p"},"http/")," folder, if you place files inside it, you can tell packer to type the following command to recover files. (Ex: Preseed, ssh keys etc.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl  http://{{ .HTTPIP }}:{{ .HTTPPort }}/fichier\n")),(0,a.kt)("p",null,"So, in this Alpine installation, I will answer questions one by one, with pre-configured timers (which count in seconds).\nAnd at the end of the installation, we launch the playbook ",(0,a.kt)("strong",{parentName:"p"},"provisioning.yml")," which allows me to install the dependencies useful to my VMs.\nThere is no need to go further in the playbook: it's still a template."),(0,a.kt)("h2",{id:"why-running-packer-through-shell-script"},"Why running packer through shell script?"),(0,a.kt)("p",null,"If you went to my repository (linked above), you probably saw the file buid.sh."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n#export ssh_password=$(vault kv get -field root_password secrets/password)\nexport proxmox_password=$(vault kv get -field proxmox_password kv/wysux)\nexport proxmox_user=$(vault kv get -field proxmox_user kv/wysux)\nexport proxmox_node=$(vault kv get -field proxmox_node kv/wysux)\nexport proxmox_url=$(vault kv get -field proxmox_url kv/wysux)\n\nexport ssh_password="toto13"\n\nexport bridge="vmbr0"\nexport storage_name="local"\n\nrm http/authorized_keys || true\nfor f in ssh/*.pub; do\n        name_of_key=$(echo $f | cut -d "/" -f2 )\n echo -e "#$name_of_key" >> http/authorized_keys \n key=$(cat $f)\n echo -e "$key" >> http/authorized_keys\ndone\npacker build alpine-3-amd64-proxmox.json\n')),(0,a.kt)("p",null,"This file will provide some parameters to Packer such as variables containing passwords. I use Vault to retrieve sensitive information from a remote server.\nYou can choose to ",(0,a.kt)("em",{parentName:"p"},"not")," use Vault by placing passwords directly in clear text."))}c.isMDXComponent=!0}}]);