"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1908],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(a),h=o,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:o,l[1]=r;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=a(7462),o=(a(7294),a(4137));const i={title:"Loki - Monitor logs",slug:"loki",tags:["infra"]},l=void 0,r={unversionedId:"Adminsys/Loki",id:"Adminsys/Loki",title:"Loki - Monitor logs",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Adminsys/Loki.md",sourceDirName:"Adminsys",slug:"/Adminsys/loki",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/loki",draft:!1,editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/docs/Adminsys/Loki.md",tags:[{label:"infra",permalink:"/TheBidouilleur.xyz/en/docs/tags/infra"}],version:"current",lastUpdatedAt:1687010550,formattedLastUpdatedAt:"Jun 17, 2023",frontMatter:{title:"Loki - Monitor logs",slug:"loki",tags:["infra"]},sidebar:"tutorialSidebar",previous:{title:"Using libvirt as non-root user",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/rootless-libvirt"},next:{title:"Build Docker multi-architecture",permalink:"/TheBidouilleur.xyz/en/docs/Adminsys/MultiArch-Build"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Choosing the stack",id:"choosing-the-stack",level:2},{value:"Stack GLP",id:"stack-glp",level:3},{value:"Install our stack",id:"install-our-stack",level:2},{value:"Loki Part",id:"loki-part",level:3},{value:"Promtail Section",id:"promtail-section",level:3},{value:"Request Loki from Grafana",id:"request-loki-from-grafana",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Ever since I started using computers (just under a decade), I have never bothered with how I visualize my logs. A little ",(0,o.kt)("em",{parentName:"p"},"view")," here, a big ",(0,o.kt)("em",{parentName:"p"},"grep")," there.. but no advanced management."),(0,o.kt)("p",null,'I have based my supervision on Zabbix and Grafana which show me the metrics of each virtual machine individually. And even if it\'s very convenient, I have almost no visual on the state of my applications!\nSo I decided to find out about Graylog and Elastic Search offering a stack that is quite reliable and easy to set up. Then when I saw the resources requested, I postponed the need to "later", and postponed it to next year. And so on!'),(0,o.kt)("blockquote",null,(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},"2 years later..."))),(0,o.kt)("p",null,"Today ",(0,o.kt)("em",{parentName:"p"},"(December 2021)"),", a big 0day fault is unveiled regarding Log4J, and we don't talk about a \"small\" fault, it's a good big RCE as we like them!"),(0,o.kt)("p",null,"I am not concerned with Log4J, it is not used in Jenkins, and I have no other Java-based application open on the internet. But I would have liked to know if my server was scanned by the same IPs that are on the blacklists.\nAnd it was with this event that I decided to inquire about ",(0,o.kt)("em",{parentName:"p"},'"How to centralize and view its logs?"'),"."),(0,o.kt)("h2",{id:"choosing-the-stack"},"Choosing the stack"),(0,o.kt)("p",null,'A stack is a grouping of software used to respond to a function.\nA classic example is the "G.I.T." stack. ',(0,o.kt)("em",{parentName:"p"},"(not like the versioning tool!)"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Grafana"),(0,o.kt)("li",{parentName:"ul"},"Influxdb"),(0,o.kt)("li",{parentName:"ul"},"Telegraf")),(0,o.kt)("p",null,"It's a stack that allows you to view the metrics of different machines, InfluxDB is the database that stores the information, Telegraf is the agent that allows the machines to send the metrics, and Grafana is the web service that allows you to view them."),(0,o.kt)("p",null,"As said in the introduction, I use Zabbix which allows me to monitor and collect metrics, and I've coupled Grafana to display them with a lot of settings."),(0,o.kt)("p",null,"In log centralization (and visualization), the following stack is often referred to:"),(0,o.kt)("p",null,"*",(0,o.kt)("strong",{parentName:"p"},"*ELK**"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ElasticSearch"),(0,o.kt)("li",{parentName:"ul"},"Logstash"),(0,o.kt)("li",{parentName:"ul"},"Kibana")),(0,o.kt)("p",null,"But this stack is not to be deployed in any environment, it is efficient, but very heavy."),(0,o.kt)("p",null,"In my quest to find a stack that allows the centralization of logs, I will enjoy using services that I already have.\nAnd here is the trendy miracle of 2021! Stack GLP: ",(0,o.kt)("strong",{parentName:"p"},"Grafana, Loki, Promtail"),"."),(0,o.kt)("h3",{id:"stack-glp"},"Stack GLP"),(0,o.kt)("p",null,"What I really like about this stack is that it's lightweight. Muchlighter than ELK which, although very effective, requires a lot."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/oWOwWsJ.png",alt:"Requirements of ELK"})),(0,o.kt)("p",null,"As well as Graylog2 + Elastic Search (a very good alternative) which almost requires a low-cost baremetal server alone.\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/FkAq6sO.png",alt:"Requirements of Graylog"})),(0,o.kt)("p",null,"While Grafana / Loki will require only 2GB to operate efficiently and without constraints. (maximum, at my scale: I will use much less than 2GB)"),(0,o.kt)("h2",{id:"install-our-stack"},"Install our stack"),(0,o.kt)("p",null,"I assume that everyone knows how to install a Grafana, it is often towards this service that people start self-hosting ",(0,o.kt)("em",{parentName:"p"},"(at the same time, the grafana graphics are super sexy!)"),"."),(0,o.kt)("p",null,"But if you have not yet installed your Grafana ",(0,o.kt)("em",{parentName:"p"},"(in this case, leave the room and come back later)"),", ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/installation/"},"here is a link that will allow you to do it fairly quickly")),(0,o.kt)("p",null,"For simplicity, I will not use Docker in this installation."),(0,o.kt)("h3",{id:"loki-part"},"Loki Part"),(0,o.kt)("p",null,"I installed Loki on an LXC container following the guide on the official website ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/installation/local/"},"here"),".\nI go through systemd to run the executable, and I create a file in advance with the minimum requiered (available on the Grafana github)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"auth_enabled: false\n\nserver:\n  http_listen_port: 3100\n  grpc_listen_port: 9096\n\ncommon:\n  path_prefix: /tmp/loki\n  storage:\n    filesystem:\n      chunks_directory: /tmp/loki/chunks\n      rules_directory: /tmp/loki/rules\n  replication_factor: 1\n  ring:\n    instance_addr: 127.0.0.1\n    kvstore:\n      store: inmemory\n\nschema_config:\n  configs:\n    - from: 2020-10-24\n      store: boltdb-shipper\n      object_store: filesystem\n      schema: v11\n      index:\n        prefix: index_\n        period: 24h\n")),(0,o.kt)("p",null,"I didn't bother to enable authentication knowing that I'm on a LAN with only my virtual machines. I don't consider my Loki as a sensitive point in my infra."),(0,o.kt)("p",null,"After only 2-3 minutes of configuration, our Loki is already available!"),(0,o.kt)("p",null,"We can now add it as ",(0,o.kt)("em",{parentName:"p"},"datasource")," on our Grafana:\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/G3tWx1r.png",alt:"Add loki as datasource"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(I use localhost because the grafana machine also hosts the Loki"),")"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Grafana may have a bit of a problem because our Loki database is empty.")),(0,o.kt)("h3",{id:"promtail-section"},"Promtail Section"),(0,o.kt)("p",null,"Promtail is the agent that will allow us to send our logs to Loki, I wrote a rather simple Ansible role allowing me to install our agent on many machines by monitoring the logs from Docker, varlog and syslog."),(0,o.kt)("p",null,"Here is my Jinja2 template about my configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jinja2"},"server:\n  http_listen_port: 9080\n  grpc_listen_port: 0\n\npositions:\n  filename: /tmp/positions.yaml\n\nclients:\n{% if loki_url is defined %}\n  - url: {{ loki_url }}\n{% endif %} \n\n\nscrape_configs:\n\n\n- job_name: authlog\n  static_configs:\n  - targets:\n      - localhost\n    labels:\n{% if ansible_hostname is defined %}\n      host: {{ ansible_hostname }}\n{% endif %} \n      job: authlog\n      __path__: /var/log/auth.log\n\n\n- job_name: syslog\n  static_configs:\n  - targets:\n      - localhost\n    labels:\n{% if ansible_hostname is defined %}\n      host: {{ ansible_hostname }}\n{% endif %}\n      job: syslog\n      __path__: /var/log/syslog\n\n- job_name: Containers\n  static_configs:\n  - targets:\n      - localhost\n    labels:\n{% if ansible_hostname is defined %}\n      host: {{ ansible_hostname }}\n{% endif %}\n      job: containerslogs\n      __path__: /var/lib/docker/containers/*/*-json.log\n\n- job_name: DaemonLog\n  static_configs:\n  - targets:\n      - localhost\n    labels:\n{% if ansible_hostname is defined %}\n      host: {{ ansible_hostname }}\n{% endif %}\n      job: daemon\n      __path__: /var/log/daemon.log\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'If you are not comfortable with Jinja2 templates, you will find a "pure" version of the config ',(0,o.kt)("a",{parentName:"em",href:"https://git.thoughtless.eu/Cinabre/rolePromtailAgent/src/branch/master/README.md"},"here"))),(0,o.kt)("p",null,'You can of course adapt this template to your needs. My first idea is to have a "base" that I can put on each machine ',(0,o.kt)("em",{parentName:"p"},"(also knowing that if no log is available, as for Docker, Promtail will not cause an error by not finding the files)")),(0,o.kt)("p",null,"Once Promtail is configured, it can be started via the executable directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/opt/promtail/promtail -config.file /opt/promtail/promtail-local-config.yaml\n")),(0,o.kt)("p",null,"or via systemd ",(0,o.kt)("em",{parentName:"p"},"(automatic if you go through my playbook)"),":\n'systemctl start promtail'"),(0,o.kt)("p",null,"Once this agent is everywhere, we're going to have fun on Grafana!"),(0,o.kt)("h3",{id:"request-loki-from-grafana"},"Request Loki from Grafana"),(0,o.kt)("p",null,"We're going to do something rather counterintuitive. We're not going to start with a Dashboard. we'll test our requests first!\n",(0,o.kt)("em",{parentName:"p"},"Don't swear, I swear it's the most fun part!")),(0,o.kt)("p",null,'On Grafana, we have an "Explore" tab. This will give us access to Loki by writing requests, these are quite simple, and especially by using the "click-o-drome" tool by unfolding the ',(0,o.kt)("em",{parentName:"p"},"Log Browser"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/UNL2s6m.png",alt:"Grafana explore tab"})),(0,o.kt)("p",null,"With the template I gave you, you will have 4 jobs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"daemon"),(0,o.kt)("li",{parentName:"ul"},"authlog"),(0,o.kt)("li",{parentName:"ul"},"syslog"),(0,o.kt)("li",{parentName:"ul"},"containersjobs")),(0,o.kt)("p",null,"These jobs sort the logs, we'll test that together. So we will select the machine ",(0,o.kt)("em",{parentName:"p"},'"Ansible"'),", then ask for the job ",(0,o.kt)("em",{parentName:"p"},'"authlog"'),".\nI first click Ansible, then Authlog. Grafana will offer me exactly if I want to choose a specific file. If we don't specify a file(",(0,o.kt)("em",{parentName:"p"},"filename"),") Grafana will take all ",(0,o.kt)("em",{parentName:"p"},"files (so it doesn't matter if we only have one file)")),(0,o.kt)("p",null,"(",(0,o.kt)("em",{parentName:"p"},"you will notice later that as soon as we make our 1st selection, grafana will hide jobs/host/file that do not concern our start of request)")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/MWFQCyl.png",alt:"Filter"})),(0,o.kt)("p",null,"By validating our request (*button ",(0,o.kt)("strong",{parentName:"p"},"show logs*"),")"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/RCpb5GI.png",alt:"Show authlog of a machine"})),(0,o.kt)("p",null,"So we have the result of the query to Loki in the time lapse configured in Grafana (1h for me).\nMy authlog is not very interesting, and my syslog is polluted by many\nnot very relevant messages."),(0,o.kt)("p",null,"So we'll start ",(0,o.kt)("strong",{parentName:"p"},"sorting")," our logs!"),(0,o.kt)("p",null,'By clicking on the small "',(0,o.kt)("strong",{parentName:"p"},"*?"),'" above our request, we have a\n"cheatsheet" summarizing the basic functions of Loki.\nWe discover how to do an exact search with',(0,o.kt)("em",{parentName:"p"},"|="),", how to ignore\nlines with",(0,o.kt)("em",{parentName:"p"},"!="),"and how to use a regular expression with",(0,o.kt)("em",{parentName:"p"},"|~")),(0,o.kt)("p",null,"I also share with you a slightly more complete cheatsheet that I found\non a blog: ",(0,o.kt)("a",{parentName:"p",href:"https://megamorf.gitlab.io/cheat-sheets/loki/"},"here")),(0,o.kt)("p",null,"Thus, we can directly obtain slightly more colorful logs that will allow us to target the essential!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/HzTwmwW.png",alt:"Info,debug,error"})),(0,o.kt)("p",null,"(The idea is to target the nice logs with the colors that go with them)"),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"If we often hear about the ELK suite, this is not a reason either\nto use it at any cost! Loki is a good alternative offering\nbasic functionalities that will suffice for the most part."))}m.isMDXComponent=!0}}]);