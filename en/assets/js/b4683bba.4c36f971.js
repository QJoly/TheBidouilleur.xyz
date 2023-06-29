"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3505],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),l=(n(7294),n(4137));const r={slug:"cloudflared",title:"Exposing your containers without NAT with Cloudflared"},o=void 0,i={unversionedId:"Homelab/Cloudflared",id:"Homelab/Cloudflared",title:"Exposing your containers without NAT with Cloudflared",description:"Cloudflare is a company that is renowned for its high performance anti-ddos. This server is the name server for the domain name and will act as the intermediary between your site and the user.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Homelab/Cloudflared.md",sourceDirName:"Homelab",slug:"/Homelab/cloudflared",permalink:"/TheBidouilleur.xyz/en/docs/Homelab/cloudflared",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Homelab/Cloudflared.md",tags:[],version:"current",lastUpdatedAt:1688039732,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{slug:"cloudflared",title:"Exposing your containers without NAT with Cloudflared"},sidebar:"tutorialSidebar",previous:{title:"V\xe9rification configuration syst\xe8me (testinfra)",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/testinfra"},next:{title:"Cr\xe9ation d'un cluster ARM",permalink:"/TheBidouilleur.xyz/en/docs/Homelab/cluster-arm"}},d={},s=[{value:"What is Cloudflared?",id:"what-is-cloudflared",level:2},{value:"How Do I Use Cloudflared?",id:"how-do-i-use-cloudflared",level:2},{value:"Install Cloudflared (via Docker)",id:"install-cloudflared-via-docker",level:3}],u={toc:s},c="wrapper";function p(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Cloudflare is a company that is renowned for its high performance anti-ddos. This server is the name server for the domain name and will act as the intermediary between your site and the user.\nPersonally, I use it mainly to hide the public IP of my network and allow everyone to access my sites."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/"},"Here you will find Cloudflare's official documentation")),(0,l.kt)("p",null,"Cloudflare has just released a quite practical program: ",(0,l.kt)("strong",{parentName:"p"},"cloudflared"),"."),(0,l.kt)("h2",{id:"what-is-cloudflared"},"What is Cloudflared?"),(0,l.kt)("p",null,"Cloudflare (based on Cloudflare Tunnel) allows you to make an application accessible on the Internet from a domain managed by cloudflare ",(0,l.kt)("strong",{parentName:"p"},"without opening a port"),"!\nNormally, this is what happens:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Before cloudflared",src:n(1823).Z,width:"491",height:"170"})),(0,l.kt)("p",null,"Benefits:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Easy to do\nInconveniences:"),(0,l.kt)("li",{parentName:"ul"},"My IP is visible to everyone"),(0,l.kt)("li",{parentName:"ul"},"Difficulties if changing IP")),(0,l.kt)("p",null,"And this is how a site with a Cloudflared tunnel works.\n",(0,l.kt)("img",{alt:"After cloudflared",src:n(5417).Z,width:"581",height:"275"})),(0,l.kt)("p",null,"Benefits:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"My IP is hidden"),(0,l.kt)("li",{parentName:"ul"},"Cache system (bandwidth saving)\nDisadvantages:"),(0,l.kt)("li",{parentName:"ul"},"Cloudflare is not necessarily reliable"),(0,l.kt)("li",{parentName:"ul"},"Complex")),(0,l.kt)("p",null,"Cloudflared is not necessarily ",(0,l.kt)("strong",{parentName:"p"},"the right solution")," for many contexts, (",(0,l.kt)("em",{parentName:"p"},"and forbidden to use it in Prod or with sensitive data"),") but in my case (*some simple containers, Blogs, gitea etc..), this is exactly what I need."),(0,l.kt)("h2",{id:"how-do-i-use-cloudflared"},"How Do I Use Cloudflared?"),(0,l.kt)("p",null,"Specifically, Cloudflared can be used as a classic Daemon. But since my infrastructure is based on Docker, I will continue to use this solution, and even for Cloudflared."),(0,l.kt)("h3",{id:"install-cloudflared-via-docker"},"Install Cloudflared (via Docker)"),(0,l.kt)("p",null,"We'll create a folder that will host our Cloudflared configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir $HOME/cloudflared\n")),(0,l.kt)("p",null,"We will use the Docker image ",(0,l.kt)("strong",{parentName:"p"},"msnelling/cloudflared")," which makes configuration much easier. (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/msnelling/docker-cloudflared"},"Source-code here"),")\nAnd we will execute the command in:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v ${HOME}/cloudflared:/root/.cloudflared msnelling/cloudflared cloudflared tunnel login\n")),(0,l.kt)("p",null,"Result:\n",(0,l.kt)("img",{alt:"first run of cloudflared",src:n(3600).Z,width:"1351",height:"363"}),"\nYou must also specify the domain used for this tunnel."),(0,l.kt)("p",null,"Once logged in (via the URL provided), you will receive a confirmation message and you will have a ",(0,l.kt)("strong",{parentName:"p"},"cert.pem")," file in your ",(0,l.kt)("em",{parentName:"p"},"$HOME/cloudflared")," folder. Cloudflared will use it to access your account."),(0,l.kt)("p",null,"Now we need to create the tunnel ( which can be used for multiple domains/applications )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v ${HOME}/cloudflared:/etc/cloudflared msnelling/cloudflared cloudflared tunnel create coffee_time\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Replace ",(0,l.kt)("em",{parentName:"p"},"coffee_time")," with the name you want to give your tunnel.")),(0,l.kt)("p",null,"at the end of the command, you will have to have a file ending with ",(0,l.kt)("strong",{parentName:"p"},".json"),", the name corresponds to the identifier of your tunnel, copy it.\nCreate the file ",(0,l.kt)("strong",{parentName:"p"},"$HOME/cloudflared/config.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"tunnel: your-tunnel-id-here\ningress:\n        - hostname: test.thoughtless.eu     # Change the domaine here\n          service: http://nginx:80          # http://container_name:port\n        - service: http_status:404\n")),(0,l.kt)("p",null,"We are connected, our tunnel is created, we can now start cloudflared."),(0,l.kt)("p",null,"Create the ",(0,l.kt)("strong",{parentName:"p"},"docker-compose.yml")," file with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '2'\nservices:\n   cloudflared:\n        image: msnelling/cloudflared\n        container_name: cloudflared\n        volumes:\n            - ${HOME}/cloudflared:/etc/cloudflared\n        command: /usr/local/bin/cloudflared tunnel --no-autoupdate run\n        restart: always\n        networks:\n            - cloudflared\nnetworks:\n  cloudflared:\n    name: cloudflared\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\ndocker-compose logs\n")),(0,l.kt)("p",null,"If no error is present (",(0,l.kt)("a",{parentName:"p",href:"https://i.imgur.com/Ehyao5E.png"},"example here"),"), you can directly use cloudflared for another container."),(0,l.kt)("p",null,'Because we have specified that the container named "',(0,l.kt)("em",{parentName:"p"},"nginx"),'" will be accessible through the ',(0,l.kt)("em",{parentName:"p"},"test.thoughtless.eu")," domain, we need to deploy a container with the same name in the same network as the ",(0,l.kt)("em",{parentName:"p"},"cloudflared")," container"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '2'\nservices:\n  nginx:\n    image: nginx\n    networks:\n      - cloudflared\nnetworks:\n  cloudflared:\n    external: true\n    name: cloudflared\n")),(0,l.kt)("p",null,"Start the with the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,l.kt)("p",null,"The last step is to connect to our cloudflare panel to create a cname rule to our tunnel.\nTo do this, you will need to add a ",(0,l.kt)("em",{parentName:"p"},"CNAME")," entry to ",(0,l.kt)("em",{parentName:"p"},"tunnel-id.cfargotunnel.com"),"."),(0,l.kt)("p",null,"Once validated, I can access the Nginx container via the domain entered in the ",(0,l.kt)("strong",{parentName:"p"},"config.yaml")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/lrSkfrX.png",alt:"It Works"})))}p.isMDXComponent=!0},5417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/after-cloudflared-75578f2892fca1bf0a42c1b9498c658f.png"},1823:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/before-cloudflared-34dbf5ab65d6a0965d2003a4ff5a7b40.png"},3600:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloudflared-first-run-294dcb16aefdc568fc6a0980c3586a1e.png"}}]);