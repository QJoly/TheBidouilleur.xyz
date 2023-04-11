"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const o={slug:"presentation-docker-swarm",title:"Quick presentation of Docker Swarm",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["docker","swarm","containers","cluster"]},i=void 0,l={permalink:"/TheBidouilleur.xyz/en/blog/presentation-docker-swarm",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2021-06-29-docker-swarm/index.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/2021-06-29-docker-swarm/index.md",title:"Quick presentation of Docker Swarm",description:'[ This article is from my old-blog, it will also be available in the "Documentation" section of the site ]',date:"2021-06-29T00:00:00.000Z",formattedDate:"June 29, 2021",tags:[{label:"docker",permalink:"/TheBidouilleur.xyz/en/blog/tags/docker"},{label:"swarm",permalink:"/TheBidouilleur.xyz/en/blog/tags/swarm"},{label:"containers",permalink:"/TheBidouilleur.xyz/en/blog/tags/containers"},{label:"cluster",permalink:"/TheBidouilleur.xyz/en/blog/tags/cluster"}],readingTime:5.02,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"presentation-docker-swarm",title:"Quick presentation of Docker Swarm",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["docker","swarm","containers","cluster"]},prevItem:{title:"Too many loadbalancers",permalink:"/TheBidouilleur.xyz/en/blog/caddy"}},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Docker Swarm?",id:"what-is-docker-swarm",level:2},{value:"Create Swarm Cluster",id:"create-swarm-cluster",level:2},{value:"Deploy a simple service",id:"deploy-a-simple-service",level:2},{value:"Simplified management of replicas",id:"simplified-management-of-replicas",level:2},{value:"What about High Availability?",id:"what-about-high-availability",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'[ This article is from my old-blog, it will also be available in the "Documentation" section of the site ]'),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The world of containerization has brought many things into system administration, and has updated the concept of DevOps. But one of the main things that containers (and especially Docker) bring us is ",(0,r.kt)("strong",{parentName:"p"},"automation"),"."),(0,r.kt)("p",null,"And although Docker is already complete with service deployment, we can go a little further by automating container management! And to answer that: ",(0,r.kt)("em",{parentName:"p"},"Docker Inc.")," offers a tool suitable for automatic instance orchestration: ",(0,r.kt)("strong",{parentName:"p"},"Docker Swarm"),"."),(0,r.kt)("h2",{id:"what-is-docker-swarm"},"What is Docker Swarm?"),(0,r.kt)("p",null,"As previously stated: Docker Swarm is an orchestration tool. With this tool, we can automatically manage our containers with rules favoring High-availability, and Scalability of your services.\nWe can therefore imagine two scenarios that are entirely compatible:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your site has a peak load and requires several containers: Docker Swarm manages replication and load balancing"),(0,r.kt)("li",{parentName:"ul"},"A machine hosting your Dockers is down: Docker Swarm replicates your containers on other machines.")),(0,r.kt)("p",null,"So we'll see how to configure that, and take a little look at the state of play of the features on offer."),(0,r.kt)("h2",{id:"create-swarm-cluster"},"Create Swarm Cluster"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For testing, I will use PWD (Play With Docker) to avoid mounting this on my infra"),":)"),(0,r.kt)("p",null,"So I have 4 machines under ",(0,r.kt)("strong",{parentName:"p"},"Alpine")," on which I will start a Swarm cluster.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/7mD3suS.png",alt:"4 terminals, one per node"})),(0,r.kt)("p",null,"The first step is to define a Manager, this will be the head of the cluster, as well as the access points to the different machines.\nIn our case, we will make it very simple, the manager will be ",(0,r.kt)("strong",{parentName:"p"},"Node1"),"."),(0,r.kt)("p",null,"To start the Swarm on the manager, simply use the 'docker swarm init' command.\n",(0,r.kt)("strong",{parentName:"p"},"But"),", if your system has a network card count greater than 1 ",(0,r.kt)("em",{parentName:"p"},"(Fairly easy on a server)"),", you must give the listening IP.\nIn my case, the LAN interface IP (where VMs communicate) is ",(0,r.kt)("em",{parentName:"p"},"192.168.0.8"),".\nSo the command I'm going to run is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker swarm init \xe8\xe8advertise-addr 192.168.0.8\n")),(0,r.kt)("p",null,"Docker says:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Swarm initialized: current node (cdbgbq3q4jp1e6espusj48qm3) is now a manager.\nTo add a worker to this swarm, run the following command:\ndocker swarm join \u2014token SWMTKN-1-5od5zuquln0kgkxpjybvcd45pctp4cp0l12srhdqe178ly8s2m-046hmuczuim8oddmk08gjd1fp 192.168.0.8:2377\nTo add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.`\n")),(0,r.kt)("p",null,"In summary: The cluster is well started, and it gives us the exact command to join the cluster from other machines!\nSince Node1 is the manager, I just need to run the docker swarm join command on Node2-4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker swarm join --token SWMTKN-1-5od5zuquln0kgkxpjybvcd45pctp4cp0l12srhdqe178ly8s2m-046hmuczuim8oddmk08gjd1fp 192.168.0.8:2377\n")),(0,r.kt)("p",null,"Once completed, you can view the result on the ",(0,r.kt)("em",{parentName:"p"},"manager")," with the command 'docker node ls'\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/2rgU3wm.png",alt:"All node in terminal"})),(0,r.kt)("h2",{id:"deploy-a-simple-service"},"Deploy a simple service"),(0,r.kt)("p",null,"If you are a docker run user and you refuse docker-compose, you should know one thing: i don't like you.\nAs you are nice to me, here is a piece of information that won't help: the equivalent of 'docker run' in Swarm is 'docker service'. But we're not going to get into that in this article."),(0,r.kt)("p",null,"Instead, we will use the docker-composed equivalent, which is the docker stack.\nSo first of all, here's the .yml file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3"\nservices:\n  viz:\n    image: dockersamples/visualizer\n    volumes:\n       - "/var/run/docker.sock:/var/run/docker.sock"\n    ports:\n       - "8080:8080"\n    deploy:\n      replicas: 1\n      placement:\n        constraints:\n          - node.role == manager\n')),(0,r.kt)("p",null,"Before you start it, you'll probably notice the ",(0,r.kt)("strong",{parentName:"p"},"deploy")," part that lets you give directions to Swarm. So we can add constraints to deploy this on the manager(s), ask the host to limit the use of resources, or manage replicas for load balancing."),(0,r.kt)("p",null,"This first container will be used to have a simple dashboard to see where the Dashboards are positioned, and avoid going to CLI only for this function."),(0,r.kt)("p",null,"We will deploy this compose with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stack deploy \u2014compose-file docker-compose.yml swarm-visualize\n")),(0,r.kt)("p",null,"Once the command is complete, you simply open the manager's web server at port 8080.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/sVKKmtj.png",alt:"WEBUI Swarm"})),(0,r.kt)("p",null,"So we now have a web panel to track container updates."),(0,r.kt)("h2",{id:"simplified-management-of-replicas"},"Simplified management of replicas"),(0,r.kt)("p",null,"When you access a container, you must go through the manager. But there is nothing to prevent being redirected to the 3-4 node via the manager. This is why it is possible to distribute the load balancing with a system similar to HAProxy, i.e. by redirecting users to a different container each time a page is loaded."),(0,r.kt)("p",null,"Here is a docker-compose automatically creating replicas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.3'\nservices:\n    hello-world:\n        container_name: web-test\n        ports:\n            - '80:8000'\n        image: crccheck/hello-world\n        deploy:\n          replicas: 4\n")),(0,r.kt)("p",null,"And the result is surprising:\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/27a7V2i.png",alt:"Scaling hello-world with 4"})),(0,r.kt)("p",null,"We can also adjust the number of replica.\nBy decreasing it:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service scale hello-world_hello-world=2")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/pf4Y1ih.png",alt:"Scaling hello-world with 2"})),(0,r.kt)("p",null,"Or by increasing it:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker service scale hello-world_hello-world=20")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/MW5uUOq.png",alt:"Scaling hello-world with 20"})),(0,r.kt)("h2",{id:"what-about-high-availability"},"What about High Availability?"),(0,r.kt)("p",null,'I focused this article on the functions of Swarm, and how to use them. And if I did not address this item first, it is because every container created in this post is managed in HA!\nFor example, I will forcibly stop the 10th replica of the "Hello world" container, which is on ',(0,r.kt)("strong",{parentName:"p"},"Node1"),". And this one will be directly revived,\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/7Ni9NNG.png",alt:"Kill hello-world"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Okay, But docker could already automatically restart containers in case of problem, how is swarm different?")),(0,r.kt)("p",null,"And to answer that, I'm going to stop the ",(0,r.kt)("strong",{parentName:"p"},"node4"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ejkzT7a.png",alt:"Kill Node4"})),(0,r.kt)("p",null,"It is noted that the other nodes distribute automatically (and without any intervention) the stopped containers. And since we only access services through managers, they will only redirect to the containers that are started.\nOne of the servers can therefore catch fire, the service will always be redundant, balanced, and accessible."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Docker-Swarm is a gateway to application clusters that are incredibly complex without a suitable tool. Swarm is easy to meet special needs without any technical expertise.\nIn a production environment, it is advisable to switch to Kubernetes or Nomad which are much more complete and powerful alternatives."),(0,r.kt)("p",null,"I encourage you to try this kind of technology that will govern our world of tomorrow!"),(0,r.kt)("p",null,"Thanks for reading"))}m.isMDXComponent=!0}}]);