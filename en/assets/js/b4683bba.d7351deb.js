"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const r={},o=void 0,i={unversionedId:"Homelab/Cloudflared",id:"Homelab/Cloudflared",title:"Cloudflared",description:"Here you will find Cloudflare's official documentation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Homelab/Cloudflared.md",sourceDirName:"Homelab",slug:"/Homelab/Cloudflared",permalink:"/TheBidouilleur.xyz/en/docs/Homelab/Cloudflared",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Homelab/Cloudflared.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction \xe0 Packer",permalink:"/TheBidouilleur.xyz/en/docs/DevOps/packer-alpine"},next:{title:"Cr\xe9ation d\u2019un cluster ARM",permalink:"/TheBidouilleur.xyz/en/docs/Homelab/cluster-arm"}},u={},d=[{value:"What is Cloudflared?",id:"what-is-cloudflared",level:2},{value:"How Do I Use Cloudflared?",id:"how-do-i-use-cloudflared",level:2},{value:"Install Cloudflared (via Docker)",id:"install-cloudflared-via-docker",level:3}],c={toc:d};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/"},"Here you will find Cloudflare's official documentation")),(0,l.kt)("p",null,"Cloudflare is a company that is renowned for its high performance anti-ddos. This server is the name server for the domain name and will act as the intermediary between your site and the user.\nPersonally, I use it mainly to hide the public IP of my network and allow everyone to access my sites."),(0,l.kt)("p",null,"Cloudflare has just released a quite practical program: ",(0,l.kt)("strong",{parentName:"p"},"cloudflared"),"."),(0,l.kt)("h2",{id:"what-is-cloudflared"},"What is Cloudflared?"),(0,l.kt)("p",null,"Cloudflare (based on Cloudflare Tunnel) allows you to make an application accessible on the Internet from a domain managed by cloudflare ",(0,l.kt)("strong",{parentName:"p"},"without opening a port"),"!\nNormally, this is what happens:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1823).Z,width:"491",height:"170"})),(0,l.kt)("p",null,"Benefits:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Easy to do\nInconveniences:"),(0,l.kt)("li",{parentName:"ul"},"My IP is visible to everyone"),(0,l.kt)("li",{parentName:"ul"},"Difficulties if changing IP")),(0,l.kt)("p",null,"And this is how a site with a Cloudflared tunnel works.\n",(0,l.kt)("img",{src:n(5417).Z,width:"581",height:"275"})),(0,l.kt)("p",null,"Benefits:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"My IP is hidden"),(0,l.kt)("li",{parentName:"ul"},"Cache system (bandwidth saving)\nDisadvantages:"),(0,l.kt)("li",{parentName:"ul"},"Cloudflare is not necessarily reliable"),(0,l.kt)("li",{parentName:"ul"},"Complex")),(0,l.kt)("p",null,"Cloudflared is not necessarily ",(0,l.kt)("strong",{parentName:"p"},"the right solution")," for many contexts, (",(0,l.kt)("em",{parentName:"p"},"and forbidden to use it in Prod or with sensitive data"),") but in my case (*some simple containers, Blogs, gitea etc..), this is exactly what I need."),(0,l.kt)("h2",{id:"how-do-i-use-cloudflared"},"How Do I Use Cloudflared?"),(0,l.kt)("p",null,"Specifically, Cloudflared can be used as a classic Daemon. But since my infrastructure is based on Docker, I will continue to use this solution, and even for Cloudflared."),(0,l.kt)("h3",{id:"install-cloudflared-via-docker"},"Install Cloudflared (via Docker)"),(0,l.kt)("p",null,"We'll create a folder that will host our Cloudflared configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir $HOME/cloudflared\n")),(0,l.kt)("p",null,"We will use the Docker image ",(0,l.kt)("strong",{parentName:"p"},"msnelling/cloudflared")," which makes configuration much easier. ((Source-code here)","[https://github.com/msnelling/docker-cloudflared]",")\nAnd we will execute the command in:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v ${HOME}/cloudflared:/root/.cloudflared msnelling/cloudflared cloudflared tunnel login\n")),(0,l.kt)("p",null,"Result:\n",(0,l.kt)("img",{src:n(3600).Z,width:"1351",height:"363"}),"\nYou must also specify the domain used for this tunnel."),(0,l.kt)("p",null,"Once logged in (via the URL provided), you will receive a confirmation message and you will have a ",(0,l.kt)("strong",{parentName:"p"},"cert.pem")," file in your ",(0,l.kt)("em",{parentName:"p"},"$HOME/cloudflared")," folder. Cloudflared will use it to access your account."),(0,l.kt)("p",null,"Now we need to create the tunnel ( which can be used for multiple domains/applications )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v ${HOME}/cloudflared:/etc/cloudflared msnelling/cloudflared cloudflared tunnel create coffee_time\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Replace ",(0,l.kt)("em",{parentName:"p"},"coffee_time")," with the name you want to give your tunnel.")),(0,l.kt)("p",null,"at the end of the command, you will have to have a file ending with ",(0,l.kt)("strong",{parentName:"p"},".json"),", the name corresponds to the identifier of your tunnel, copy it.\nCreate the file ",(0,l.kt)("strong",{parentName:"p"},"$HOME/cloudflared/config.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"tunnel: your-tunnel-id-here\ningress:\n        - hostname: test.thoughtless.eu     # Change the domaine here\n          service: http://nginx:80          # http://container_name:port\n        - service: http_status:404\n")),(0,l.kt)("p",null,"We are connected, our tunnel is created, we can now start cloudflared."),(0,l.kt)("p",null,"Create the ",(0,l.kt)("strong",{parentName:"p"},"docker-compose.yml")," file with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '2'\nservices:\n   cloudflared:\n        image: msnelling/cloudflared\n        container_name: cloudflared\n        volumes:\n            - ${HOME}/cloudflared:/etc/cloudflared\n        command: /usr/local/bin/cloudflared tunnel --no-autoupdate run\n        restart: always\n        networks:\n            - cloudflared\nnetworks:\n  cloudflared:\n    name: cloudflared\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\ndocker-compose logs\n")),(0,l.kt)("p",null,"If no error is present (",(0,l.kt)("a",{parentName:"p",href:"https://i.imgur.com/Ehyao5E.png"},"example here"),"), you can directly use cloudflared for another container."),(0,l.kt)("p",null,'Because we have specified that the container named "',(0,l.kt)("em",{parentName:"p"},"nginx"),'" will be accessible through the ',(0,l.kt)("em",{parentName:"p"},"test.thoughtless.eu")," domain, we need to deploy a container with the same name in the same network as the ",(0,l.kt)("em",{parentName:"p"},"cloudflared")," container"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '2'\nservices:\n  nginx:\n    image: nginx\n    networks:\n      - cloudflared\nnetworks:\n  cloudflared:\n    external: true\n    name: cloudflared\n")),(0,l.kt)("p",null,"Start the with the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,l.kt)("p",null,"The last step is to connect to our cloudflare panel to create a cname rule to our tunnel.\nTo do this, you will need to add a ",(0,l.kt)("em",{parentName:"p"},"CNAME")," entry to ",(0,l.kt)("em",{parentName:"p"},"tunnel-id.cfargotunnel.com"),"."),(0,l.kt)("p",null,"Once validated, I can access the Nginx container via the domain entered in the ",(0,l.kt)("strong",{parentName:"p"},"config.yaml")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/lrSkfrX.png",alt:null})))}s.isMDXComponent=!0},5417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/after-cloudflared-17c6b78ecd9913462fd45bdc0e382164.png"},1823:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/before-cloudflared-c038ac925e97615ef7066d376a7bd4a3.png"},3600:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloudflared-first-run-cd46aca0468b7f99b6aba50b2af445ad.png"}}]);