"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5026],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(4137));const i={title:"Dagger.io, un CI Universel",slug:"dagger",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["dagger","ci","docker"],description:"Dagger.IO est un outil maintenu par Solomon Hykes, celui-ci permet de cr\xe9er un CI local (ou distant) n'\xe9tant pas d\xe9pendant du Yaml ou d'un DSL"},l=void 0,o={permalink:"/TheBidouilleur.xyz/blog/dagger",editUrl:"https://github.com/QJoly/TheBidouilleur.xyz/tree/main/blog/2023-03-31-Dagger-Io-un-CI-Universel/index.md",source:"@site/blog/2023-03-31-Dagger-Io-un-CI-Universel/index.md",title:"Dagger.io, un CI Universel",description:"Dagger.IO est un outil maintenu par Solomon Hykes, celui-ci permet de cr\xe9er un CI local (ou distant) n'\xe9tant pas d\xe9pendant du Yaml ou d'un DSL",date:"2023-03-31T00:00:00.000Z",formattedDate:"31 mars 2023",tags:[{label:"dagger",permalink:"/TheBidouilleur.xyz/blog/tags/dagger"},{label:"ci",permalink:"/TheBidouilleur.xyz/blog/tags/ci"},{label:"docker",permalink:"/TheBidouilleur.xyz/blog/tags/docker"}],readingTime:8.68,hasTruncateMarker:!1,authors:[{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"}],frontMatter:{title:"Dagger.io, un CI Universel",slug:"dagger",authors:{name:"TheBidouilleur",title:"Adorateur de trucs merdiques",url:"https://github.com/qjoly/",image_url:"https://avatars.githubusercontent.com/u/82603435?v=4",imageURL:"https://avatars.githubusercontent.com/u/82603435?v=4"},tags:["dagger","ci","docker"],description:"Dagger.IO est un outil maintenu par Solomon Hykes, celui-ci permet de cr\xe9er un CI local (ou distant) n'\xe9tant pas d\xe9pendant du Yaml ou d'un DSL"},prevItem:{title:"Simple DebianRepository - D\xe9ployer un d\xe9p\xf4t Debian en 2min",permalink:"/TheBidouilleur.xyz/blog/DebianRepository"},nextItem:{title:"Signalez vos attaquants avec Fail2Ban",permalink:"/TheBidouilleur.xyz/blog/abuseipdb-fail2ban"}},s={authorsImageUrls:[void 0]},u=[{value:"Installation de Dagger.io",id:"installation-de-daggerio",level:2},{value:"Premier job",id:"premier-job",level:2},{value:"Dagger, Python et Docker",id:"dagger-python-et-docker",level:2},{value:"Build &amp; push d&#39;une image Docker",id:"build--push-dune-image-docker",level:2},{value:"Build &amp; push d&#39;une image Docker multiarchitecture",id:"build--push-dune-image-docker-multiarchitecture",level:2},{value:"Cr\xe9er un lanceur",id:"cr\xe9er-un-lanceur",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...i}=e;return(0,a.kt)(c,(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dagger.io est un projet qui a \xe9t\xe9 annonc\xe9 il y a quelque temps par Solomon Hykes, la philosophie de Dagger a attir\xe9 mon attention."),(0,a.kt)("p",null,"C'est un service de CI/CD qui permet de lancer des jobs dans des conteneurs Docker. La plus-value de Dagger est qu'il ne se limite pas \xe0 du Yaml ",(0,a.kt)("em",{parentName:"p"},"(Comme Gitlab-CI, Github Action, Drone.io)")," ou \xe0 un DSL maison ",(0,a.kt)("em",{parentName:"p"},"(Comme Jenkins)"),", il permet de lancer des jobs en utilisant du code Python, du Go, du Java.Typescript ou encore du GraphQL."),(0,a.kt)("p",null,"Il est un peu comme Pulumi mais pour les jobs de CI/CD. ",(0,a.kt)("em",{parentName:"p"},"(L\xe0 o\xf9 son concurrent Terraform utilise un DSL, Pulumi utilise le Typescript, Python, Java, etc)")),(0,a.kt)("p",null,"\xc9tant donn\xe9 que j'utilise Github pour mes projets publics, Gitea pour mes projets priv\xe9s ",(0,a.kt)("em",{parentName:"p"},"(coupl\xe9 \xe0 Drone)")," et Gitlab pour les projets professionnels, je me suis dit que c'\xe9tait l'occasion de tester Dagger.io et de me d\xe9barrasser de mes fichiers Yaml ayant une syntaxe diff\xe9rente en fonction de la plateforme."),(0,a.kt)("p",null,"Mon id\xe9e derri\xe8re la conversion de mes jobs de CI/CD en code est \xe9galement d'avoir les ",(0,a.kt)("strong",{parentName:"p"},"m\xeames")," r\xe9sultats entre les diff\xe9rentes plateformes et ma machine locale."),(0,a.kt)("p",null,"On va donc faire le point sur ce qu'est Dagger.io, comment l'installer et comment l'utiliser. Comme je suis habitu\xe9 au langage Python, j'utiliserai alors le SDK Python de Dagger.io !"),(0,a.kt)("h2",{id:"installation-de-daggerio"},"Installation de Dagger.io"),(0,a.kt)("p",null,"Il sera n\xe9cessaire d'avoir un Python 3.10 ou sup\xe9rieur pour utiliser Dagger.io ",(0,a.kt)("em",{parentName:"p"},"(il est aussi possible d'utiliser un ",(0,a.kt)("a",{parentName:"em",href:"https://packaging.python.org/en/latest/tutorials/installing-packages/#creating-virtual-environments"},"venv"),")"),"."),(0,a.kt)("p",null,"Pour installer Dagger.io, il n'y a rien de bien compliqu\xe9, il suffit d'installer le package via pip."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install dagger-io\n")),(0,a.kt)("p",null,"Et c'est termin\xe9 pour l'installation."),(0,a.kt)("details",null,(0,a.kt)("summary",null," ",(0,a.kt)("code",null,"ERROR: Could not find a version that satisfies the requirement dagger-io (from versions: none)")),(0,a.kt)("p",null,"Si vous avez une erreur de ce type :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c  ~ python3 -m pip install dagger-io \nDefaulting to user installation because normal site-packages is not writeable\nCollecting dagger-io\n  Using cached dagger_io-0.4.2-py3-none-any.whl (52 kB)\nCollecting cattrs>=22.2.0\n[...]\n  Using cached mdurl-0.1.2-py3-none-any.whl (10.0 kB)\nCollecting multidict>=4.0\n  Using cached multidict-6.0.4-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (114 kB)\nERROR: Exception:\nTraceback (most recent call last):\n  File "/usr/lib/python3/dist-packages/pip/_internal/cli/base_command.py", line 165, in exc_logging_wrapper\n    status = run_func(*args)\n  File "/usr/lib/python3/dist-packages/pip/_internal/cli/req_command.py", line 205, in wrapper\n    return func(self, options, args)\n  File "/usr/lib/python3/dist-packages/pip/_internal/commands/install.py", line 389, in run\n    to_install = resolver.get_installation_order(requirement_set)\n  File "/usr/lib/python3/dist-packages/pip/_internal/resolution/resolvelib/resolver.py", line 188, in get_installation_order\n    weights = get_topological_weights(\n  File "/usr/lib/python3/dist-packages/pip/_internal/resolution/resolvelib/resolver.py", line 276, in get_topological_weights\n    assert len(weights) == expected_node_count\nAssertionError\n')),(0,a.kt)("p",null,"Il se peut que vous ayez une version trop ancienne de pip et setuptools. La solution est de mettre \xe0 jour pip et setuptools via la commande suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade pip setuptools\n"))),(0,a.kt)("p",null,"Si vous ne souhaitez pas travailler avec l'utilisateur root, il vous faudra configurer le mode Rootless de Docker. ",(0,a.kt)("em",{parentName:"p"},"(C'est ce que j'ai fait)")," Pour cela, il suffit de suivre la ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/security/rootless/"},"documentation officielle"),"."),(0,a.kt)("h2",{id:"premier-job"},"Premier job"),(0,a.kt)("p",null,"Pour commencer, nous allons cr\xe9er un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world.py")," et y ajouter le code suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""Execute a command."""\nimport sys\nimport anyio\nimport dagger\n\nasync def test():\n    async with dagger.Connection(dagger.Config(log_output=sys.stderr)) as client:\n        python = (\n            client.container()\n            .from_("python:3.11-slim-buster")\n            .with_exec(["python", "-V"])\n        )\n        version = await python.stdout()\n    print(f"Hello from Dagger and {version}")\n\nif __name__ == "__main__":\n    anyio.run(test)\n')),(0,a.kt)("p",null,"Il s'agit d'un simple job qui va lancer un conteneur Docker avec l'image ",(0,a.kt)("inlineCode",{parentName:"p"},"python:3.11-slim-buster")," et ex\xe9cuter la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"python -V"),"."),(0,a.kt)("p",null,"Pour lancer le job, il suffit de lancer avec python\xa0: ",(0,a.kt)("inlineCode",{parentName:"p"},"python3 hello-world.py"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  python3 hello-world.py    \n#1 resolve image config for docker.io/library/python:3.11-slim-buster\n#1 DONE 1.7s\n#2 importing cache manifest from dagger:10686922502337221602\n#2 DONE 0.0s\n#3 DONE 0.0s\n#4 from python:3.11-slim-buster\n#4 resolve docker.io/library/python:3.11-slim-buster\n#4 resolve docker.io/library/python:3.11-slim-buster 0.2s done\n#4 sha256:f0712d0bdb159c54d5bdce952fbb72c5a5d2a4399654d7f55b004d9fc01e189e 0B / 3.37MB 0.2s\n#4 sha256:f0712d0bdb159c54d5bdce952fbb72c5a5d2a4399654d7f55b004d9fc01e189e 3.37MB / 3.37MB 0.3s done\n#4 extracting sha256:80384e04044fa9b6493f2c9012fd1aa7035ab741147248930b5a2b72136198b1\n#4 extracting sha256:80384e04044fa9b6493f2c9012fd1aa7035ab741147248930b5a2b72136198b1 0.3s done\n#4 extracting sha256:f0712d0bdb159c54d5bdce952fbb72c5a5d2a4399654d7f55b004d9fc01e189e\n#4 extracting sha256:f0712d0bdb159c54d5bdce952fbb72c5a5d2a4399654d7f55b004d9fc01e189e 0.2s done\n#4 ...\n#3 \n#3 0.224 Python 3.11.2\n#3 DONE 0.3s\n\n#4 from python:3.11-slim-buster\nHello from Dagger and Python 3.11.2\n")),(0,a.kt)("p",null,"F\xe9licitations, vous avez lanc\xe9 votre premier job avec Dagger.io !"),(0,a.kt)("p",null,"Maintenant, nous allons voir comment cr\xe9er un script un peu plus complexe !"),(0,a.kt)("h2",{id:"dagger-python-et-docker"},"Dagger, Python et Docker"),(0,a.kt)("p",null,"Jusque-l\xe0, nous n'avons pas beaucoup profit\xe9 de la puissance de Python, ou m\xeame des fonctionnalit\xe9s de Docker. Nous allons donc voir comment utiliser les deux ensemble."),(0,a.kt)("p",null,"Vous n'\xeates pas sans savoir que j'utilise ",(0,a.kt)("em",{parentName:"p"},"Docusaurus")," pour g\xe9n\xe9rer le code HTML que vous visionnez en ce moment m\xeame. Docusaurus me permet d'\xe9crire mes articles en Markdown et de les transformer en site."),(0,a.kt)("p",null,"N'\xe9tant pas tr\xe8s regardant sur la qualit\xe9 de mes Markdown, j'ai d\xe9cid\xe9 de cr\xe9er un job qui va v\xe9rifier la syntaxe de mes fichiers Markdown et me renvoyer une erreur s'il y a un probl\xe8me sur l'un d'entre eux."),(0,a.kt)("p",null,"Pour cela, je vais utiliser ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/pymarkdownlnt/"},"pymarkdownlnt"),", un Linter assez strict et performant."),(0,a.kt)("p",null,"Son installation se fait via pip :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pymarkdownlnt\n")),(0,a.kt)("p",null,"Ainsi, notre job va devoir effectuer ces \xe9tapes de mani\xe8re s\xe9quentielle :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"D\xe9marrer \xe0 partir d'une image Python ",(0,a.kt)("em",{parentName:"li"},"(",(0,a.kt)("inlineCode",{parentName:"em"},"FROM python:3.10-slim-buster"),")")),(0,a.kt)("li",{parentName:"ul"},"Installer pymarkdownlnt ",(0,a.kt)("em",{parentName:"li"},"(",(0,a.kt)("inlineCode",{parentName:"em"},"RUN pip install pymarkdownlnt"),")")),(0,a.kt)("li",{parentName:"ul"},"R\xe9cup\xe9rer les fichiers du projet ",(0,a.kt)("em",{parentName:"li"},"(",(0,a.kt)("inlineCode",{parentName:"em"},"COPY . ."),")")),(0,a.kt)("li",{parentName:"ul"},"Lancer le linter sur les fichiers Markdown de chaque dossier ",(0,a.kt)("em",{parentName:"li"},"blog/ docs/ i18n/")," (",(0,a.kt)("inlineCode",{parentName:"li"},"RUN pymarkdownlnt scan blog/-r"),")")),(0,a.kt)("p",null,"Nous pouvons traduire les 3 premi\xe8res \xe9tapes en code Python :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'lint = (\n  client.container().from_("python:3.10-slim-buster")\n  .with_exec("pip install pymarkdownlnt".split(" "))\n  .with_mounted_directory("/data", src)\n  .with_workdir("/data")\n)\n')),(0,a.kt)("p",null,"Et ensuite\u2026 je souhaite faire une boucle it\xe9rant sur les dossiers ",(0,a.kt)("inlineCode",{parentName:"p"},"blog/ docs/ i18n/")," et lancer le linter sur chacun d'entre eux. C'est \xe0 ce moment pr\xe9cis que nous allons utiliser du Python et plus uniquement des instructions Dagger."),(0,a.kt)("p",null,"Un d\xe9tail que je ne vous ai pas encore mentionn\xe9, c'est que nous pouvons agir sur notre job tant qu'il n'est pas lanc\xe9, c'est-\xe0-dire avant le ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," qui va attendre la fin de l'ex\xe9cution du job."),(0,a.kt)("p",null,"Donc\u2026 gardons la d\xe9finition du conteneur ci-dessus, et ajoutons 3 t\xe2ches \xe0 notre job :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'for i in ["blog", "docs", "i18n"]:\n  lint = lint.with_exec(["pymarkdownlnt", "scan", i, "-r"])\n')),(0,a.kt)("p",null,"Plut\xf4t simple, non ?"),(0,a.kt)("p",null,"Si je lance mon job, j'ai de nombreuses erreurs \xe0 propos de r\xe8gles que je n'ai pas respect\xe9es. Mais c'est normal, la syntaxe de Docusaurus cause des erreurs dans le linter que je ne peux pas corriger."),(0,a.kt)("p",null,"Je vais donc noter les r\xe8gles qui ne s'appliquent pas \xe0 mes fichiers, et les ignorer :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'lint_rules_to_ignore = ["MD013","MD003","MD041","MD022","MD023","MD033","MD019"]\n# Format accept\xe9 par pymarkdownlint : "MD013,MD003,MD041,MD022,MD023,MD033,MD019"\nfor i in ["blog", "docs", "i18n"]:\n  lint = lint.with_exec(["pymarkdownlnt", "-d", str(\',\'.join(lint_rules_to_ignore)), "scan", i, "-r"])\n')),(0,a.kt)("p",null,"Voici notre script complet\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""Markdown linting script."""\nimport sys\nimport anyio\nimport dagger\nimport threading\n\nasync def markdown_lint():\n    lint_rules_to_ignore = ["MD013","MD003","MD041","MD022","MD023","MD033","MD019"]\n\n    async with dagger.Connection(dagger.Config(log_output=sys.stderr)) as client:\n        src = client.host().directory("./")\n\n        lint = (\n            client.container().from_("python:3.10-slim-buster")\n            .with_exec("pip install pymarkdownlnt".split(" "))\n            .with_mounted_directory("/data", src)\n            .with_workdir("/data")\n        )\n\n        for i in ["blog", "docs", "i18n"]:\n            lint = lint.with_exec(["pymarkdownlnt", "-d", str(\',\'.join(lint_rules_to_ignore)), "scan", i, "-r"])\n        # execute\n        await lint.stdout()\n    print(f"Markdown lint is FINISHED!")\n\nif __name__ == "__main__":\n    try:\n        anyio.run(markdown_lint)\n    except:\n        print("Error in Linting")\n')),(0,a.kt)("p",null,"Apr\xe8s cette modification, mon job fonctionne sans probl\xe8me !"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 .ci/markdown_lint.py\n")),(0,a.kt)("script",{async:!0,id:"asciicast-zZKfJU9fIWBexQYGv8xI0X51P",src:"https://asciinema.org/a/zZKfJU9fIWBexQYGv8xI0X51P.js"}),(0,a.kt)("p",null,"R\xe9capitulons ce que nous savons faire\xa0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lancer une image Docker"),(0,a.kt)("li",{parentName:"ul"},"Ex\xe9cuter des commandes dans un conteneur"),(0,a.kt)("li",{parentName:"ul"},"Copier des fichiers depuis l'h\xf4te vers le conteneur")),(0,a.kt)("p",null,"Je pense que \xe7a suffira dans la plupart de mes CI. N\xe9anmoins, il reste une fonctionnalit\xe9 qui me manque : la possibilit\xe9 de construire une image Docker et de l'envoyer sur un registre."),(0,a.kt)("h2",{id:"build--push-dune-image-docker"},"Build & push d'une image Docker"),(0,a.kt)("p",null,"Il est possible de s'authentifier sur un registre directement via Dagger. Dans mon cas, je consid\xe8re que l'h\xf4te sur lequel je lance mon job est ",(0,a.kt)("strong",{parentName:"p"},"d\xe9j\xe0")," authentifi\xe9."),(0,a.kt)("p",null,"Dans le cadre de cette d\xe9monstration, je vais utiliser le registre ",(0,a.kt)("inlineCode",{parentName:"p"},"ttl.sh"),", un registre public et anonyme permettant justement de stocker des images Docker pendant une dur\xe9e maximale de 24h."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def docker_image_build():\n    async with dagger.Connection(dagger.Config(log_output=sys.stderr)) as client:\n        src = client.host().directory("./")\n        build = (\n            client.container()\n            .build(\n                context = src,\n                dockerfile = "Dockerfile",\n                build_args=[\n                    dagger.BuildArg("APP", os.environ.get("APP", "TheBidouilleurxyz"))\n                    ]\n            )\n        )\n        image = await blog.build(address="ttl.sh/thebidouilleur:1h")\n')),(0,a.kt)("p",null,"Le code ci-dessus va donc construire mon image Docker \xe0 partir du fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," pr\xe9sent dans le dossier courant, et l'envoyer sur le registre ",(0,a.kt)("inlineCode",{parentName:"p"},"ttl.sh/thebidouilleur:1h"),"."),(0,a.kt)("p",null,"Une petite particularit\xe9 de ce code est l'usage de ",(0,a.kt)("em",{parentName:"p"},"Build Args"),". J'utilise la variable d'environnement ",(0,a.kt)("inlineCode",{parentName:"p"},"APP"),", si cette variable n'est pas d\xe9finie, je vais r\xe9cup\xe9rer la valeur par d\xe9faut ",(0,a.kt)("inlineCode",{parentName:"p"},"TheBidouilleurxyz"),"."),(0,a.kt)("script",{async:!0,id:"asciicast-JA71Nlp9ZOvIndye9QA8QoEtU",src:"https://asciinema.org/a/JA71Nlp9ZOvIndye9QA8QoEtU.js"}),(0,a.kt)("p",null,"Maintenant, je souhaite cr\xe9er un job similaire qui va construire une image Docker multiarchitecture ",(0,a.kt)("em",{parentName:"p"},"ARM et AMD64 (l'un de mes clusters Kubernetes est compos\xe9 de Raspberry Pi).")),(0,a.kt)("h2",{id:"build--push-dune-image-docker-multiarchitecture"},"Build & push d'une image Docker multiarchitecture"),(0,a.kt)("p",null,"Il faudra d\xe9j\xe0 mettre au point le build multiarchitecture sur votre machine avant de pouvoir l'int\xe9grer \xe0 notre job Dagger."),(0,a.kt)("p",null,"Si vous souhaitez savoir comment cr\xe9er une image Docker multiarchitecture, je vous invite \xe0 lire ma documentation ",(0,a.kt)("a",{parentName:"p",href:"/docs/Adminsys/MultiArch-Build/"},"Cr\xe9ation image Docker")," pour en connaitre la proc\xe9dure."),(0,a.kt)("p",null,"On va utiliser un objet \xe0 mettre en param\xe8tre \xe0 Dagger, celui-ci est ",(0,a.kt)("inlineCode",{parentName:"p"},"dagger.Platform")," et permet de sp\xe9cifier la plateforme sur laquelle on veut construire notre image Docker."),(0,a.kt)("p",null,"Nous cr\xe9ons une boucle qui va it\xe9rer sur les diff\xe9rentes architectures avec lesquelles on veut construire notre image, et lors du Publish, nous enverrons les diff\xe9rentes images construites."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def docker_image_build():\n  platforms = ["linux/amd64", "linux/arm64"]\n  async with dagger.Connection(dagger.Config(log_output=sys.stderr)) as client:\n    src = client.host().directory(".")\n    variants = []\n    for platform in platforms:\n      print(f"Building for {platform}")\n      platform = dagger.Platform(platform)\n      build = (\n            client.container(platform=platform)\n            .build(\n                context = src,\n                dockerfile = "Dockerfile"\n            )\n        )\n      variants.append(build)\n    await client.container().publish("ttl.sh/dagger_test:1h", platform_variants=variants)\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docker avec plusieurs architectures",src:t(3331).Z,width:"1280",height:"208"})),(0,a.kt)("h2",{id:"cr\xe9er-un-lanceur"},"Cr\xe9er un lanceur"),(0,a.kt)("p",null,"Maintenant que nous avons vu comment utiliser Dagger, nous allons cr\xe9er un lanceur qui va nous permettre de lancer nos jobs un-par-un."),(0,a.kt)("p",null,"Pour lancer nos taches en asynchrone, nous utilisons la librairie ",(0,a.kt)("a",{parentName:"p",href:"https://anyio.readthedocs.io/en/stable/"},"anyio")," sur chacun de nos scripts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import anyio\n\nimport markdown_lint \nimport docusaurus_build \nimport multi_arch_build as docker_build\n\nif __name__ == "__main__":\n\n        print("Running tests in parallel using anyio")\n        anyio.run(markdown_lint.markdown_lint)\n        anyio.run(docusaurus_build.docusaurus_build)\n        anyio.run(docker_build.docker_build)\n')),(0,a.kt)("p",null,"Ce lanceur va importer les m\xe9thodes des fonctions ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown_lint"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus_build")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"docker_build")," des fichiers ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown_lint.py"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus_build.py")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"multi_arch_build.py")," avant d'ex\xe9cuter chacune de ces fonctions."),(0,a.kt)("p",null,"L'unique int\xe9r\xeat de ce lanceur est de pouvoir lancer nos jobs \xe0 partir d'une seule commande."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Dagger est un produit tr\xe8s prometteur ! Celui-ci n'arrivera surement pas \xe0 remplacer les solutions actuelles telles que Github Actions ou Gitlab CI, mais il r\xe9pond \xe0 un besoin sp\xe9cifique : celui d'avoir le m\xeame CI peu importe la plateforme."),(0,a.kt)("p",null,"Bref, Dagger est un produit qui m\xe9rite d'\xeatre test\xe9 et je pense que je vais l'utiliser pour la plupart de mes projets personnels."),(0,a.kt)("p",null,"J'esp\xe8re que cet article vous aura plu, n'h\xe9sitez pas \xe0 me faire part de vos retours."))}d.isMDXComponent=!0},3331:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/multiarch-c10638141e28910b95945f0005d700e1.png"}}]);