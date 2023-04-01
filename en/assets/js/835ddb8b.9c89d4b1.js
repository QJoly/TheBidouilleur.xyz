"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5077],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7932:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(4137));const o={slug:"caddy",title:"Too many loadbalancers",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["selfhost","loadbalancing"]},i=void 0,l={permalink:"/TheBidouilleur.xyz/en/blog/caddy",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2021-09-14-Caddy/index.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/2021-09-14-Caddy/index.md",title:"Too many loadbalancers",description:'[ This article is from my old-blog, it will also be available in the "Documentation" section of the site ]',date:"2021-09-14T00:00:00.000Z",formattedDate:"September 14, 2021",tags:[{label:"selfhost",permalink:"/TheBidouilleur.xyz/en/blog/tags/selfhost"},{label:"loadbalancing",permalink:"/TheBidouilleur.xyz/en/blog/tags/loadbalancing"}],readingTime:2.435,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{slug:"caddy",title:"Too many loadbalancers",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["selfhost","loadbalancing"]},prevItem:{title:"Utilisation de Loki pour Centraliser les logs",permalink:"/TheBidouilleur.xyz/en/blog/loki-grafana"},nextItem:{title:"Quick presentation of Docker Swarm",permalink:"/TheBidouilleur.xyz/en/blog/presentation-docker-swarm"}},s={authorsImageUrls:[void 0]},u=[{value:"Caddy",id:"caddy",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'[ This article is from my old-blog, it will also be available in the "Documentation" section of the site ]'),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Changelog (Jan 2022) - Today I replaced Caddy with Traefik, to be seen in a future article.")),(0,r.kt)("p",null,"In my short life as a computer scientist, I've always had only one public IP. The one on my OVH server where you are currently viewing the site. And knowing that I have many web services, it was quickly necessary for me to look for different solutions to install an efficient ",(0,r.kt)("strong",{parentName:"p"},"Reverse Proxy")," that would be used to redirect my users to the desired application according to the domain."),(0,r.kt)("p",null,"In my long quest (which is certainly not complete), I had the opportunity to test ",(0,r.kt)("em",{parentName:"p"},"many")," solutions like Haproxy, Apache2, Nginx and now.. Caddy"),(0,r.kt)("p",null,"Haproxy has been for me the easiest and most convenient to start, good documentation, incorporates many tools to check configuration, or add authentications. I was satisfied for a few years."),(0,r.kt)("p",null,"(I don't count on Apache2, which was handy to get started without installing a service dedicated to my need for redirection)"),(0,r.kt)("p",null,"Then I used ",(0,r.kt)("strong",{parentName:"p"},"aaPanel")," (which you will find an article on this site) allowing me to have a whole web panel for my sites and my redirects! ",(0,r.kt)("em",{parentName:"p"},"I gave up knowing that it was a well-crafted system in which I had little freedom in terms of editing config")),(0,r.kt)("p",null,"Then my unnecessary need for a web interface led me to ",(0,r.kt)("strong",{parentName:"p"},"NPM")," (",(0,r.kt)("em",{parentName:"p"},"Nginx Proxy Manager"),") for more information ",(0,r.kt)("a",{parentName:"p",href:"https://nginxproxymanager.com/"},"here"),". Which was very convenient for me knowing that it was in the form of a Docker container, and offering an interface managing the creation of redirection as well as the SSL, still at ",(0,r.kt)("strong",{parentName:"p"},"let's encrypt"),".\nBut every time the certificate expired, NPM required me to manually select one-by-one each certificate to be updated: and that was unthinkable when you knew how many domains i had created."),(0,r.kt)("p",null,"Today, my attention is focused on ",(0,r.kt)("strong",{parentName:"p"},"Caddy")," which, for the moment, corresponds exactly to what I want, and with incredible simplicity."),(0,r.kt)("h2",{id:"caddy"},"Caddy"),(0,r.kt)("p",null,"Caddy is, as you will have understood, a fairly versatile reverse proxy and very used in some Docker containers! It automatically generates your certificates (and configures redirects automatically) without any problems with Let's Encrypt. Caddy is quite lightweight and will avoid slow configurations, here is a dumb example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"thoughtless.eu {\nreverse_proxy 192.168.5.125:8062\nlog {\noutput file /var/log/caddy/thoughtless.eu_access.log\n}\n}\n")),(0,r.kt)("p",null,"This line will create a reverse-proxy redirection with the default configuration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Caddy updatera / will generate certificates whenever necessary"),(0,r.kt)("li",{parentName:"ul"},"It will automatically redirect requests to ",(0,r.kt)("a",{parentName:"li",href:"http://"},"http://")," to ",(0,r.kt)("a",{parentName:"li",href:"https://"},"https://")),(0,r.kt)("li",{parentName:"ul"},"It will write access logs in a file")),(0,r.kt)("p",null,"In Apache2 / Haproxy, it would have taken a lot of lines."),(0,r.kt)("p",null,"But let's wait and see, Caddy is still very new for me, and I'm sure my next need will point me towards another solution such as Traefik for example!"),(0,r.kt)("p",null,"Good luck in your long quest around reverse proxies"))}d.isMDXComponent=!0}}]);